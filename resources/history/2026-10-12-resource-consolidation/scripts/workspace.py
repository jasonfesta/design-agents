#!/usr/bin/env python3
"""Check and export this workspace using only the Python standard library."""

import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import subprocess
import tempfile
from datetime import datetime, timezone
from urllib.parse import unquote, urlsplit
import zipfile

ROOT = Path(__file__).resolve().parent.parent
OMIT = {'.git', '.tools', '.exports', 'node_modules', '.venv', '__pycache__', '.DS_Store', 'dist', '.svelte-kit'}


def refresh_git_bundles(config):
    """Keep explicitly selected repository history portable, without Git config/hooks."""
    for item in config.get('git_bundles', []):
        repo, bundle = relative_path(item['repository']), relative_path(item['bundle'])
        snapshot = relative_path(item['snapshot']) if item.get('snapshot') else None
        if not repo.exists() and snapshot and snapshot.is_file():
            print(f'Retained supplied tool source: {item["snapshot"]}')
            continue
        if not (repo / '.git').exists():
            if not bundle.is_file():
                raise ValueError(f'No repository or transfer history for {item["repository"]}')
            print(f'Retained supplied Git history: {item["bundle"]}')
            if snapshot:
                archive_tool(item['repository'], snapshot)
            continue

        def git(*args):
            return subprocess.check_output(['git', '-C', str(repo), *args], stderr=subprocess.STDOUT)

        if Path(git('rev-parse', '--show-toplevel').decode().strip()).resolve() != repo.resolve():
            raise ValueError(f'Expected an independent repository: {item["repository"]}')
        refs = git('show-ref')
        head = git('rev-parse', 'HEAD')
        bundle.parent.mkdir(parents=True, exist_ok=True)
        with tempfile.TemporaryDirectory(dir=bundle.parent) as directory:
            temporary = Path(directory) / 'repository.bundle'
            git('bundle', 'create', str(temporary), '--all', 'HEAD')
            git('bundle', 'verify', str(temporary))
            if refs != git('show-ref') or head != git('rev-parse', 'HEAD'):
                raise ValueError('Git history changed during export; retry after the edit finishes.')
            temporary.replace(bundle)
        print(f'Updated Git history: {item["bundle"]}')
        if snapshot:
            archive_tool(item['repository'], snapshot)


def archive_tool(repository, destination):
    """Preserve local source without making a nested repository part of the kit."""
    paths = sorted(files_under(repository))
    base = relative_path(repository)
    contents = {p.relative_to(base).as_posix(): p.read_bytes() for p in paths}
    destination.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(dir=destination.parent) as directory:
        temporary = Path(directory) / 'source.zip'
        with zipfile.ZipFile(temporary, 'w', zipfile.ZIP_DEFLATED) as archive:
            for name, data in contents.items():
                info = zipfile.ZipInfo(base.name + '/' + name)
                info.compress_type = zipfile.ZIP_DEFLATED
                info.external_attr = (base / name).stat().st_mode << 16
                archive.writestr(info, data)
        with zipfile.ZipFile(temporary) as archive:
            if archive.testzip() is not None:
                raise ValueError('Tool source archive integrity check failed.')
        if sorted(files_under(repository)) != paths or any((base / name).read_bytes() != data for name, data in contents.items()):
            raise ValueError('Tool source changed during capture; retry after the edit finishes.')
        if not destination.exists() or temporary.read_bytes() != destination.read_bytes():
            temporary.replace(destination)
    print(f'Preserved tool source: {destination.relative_to(ROOT)} ({len(contents)} files)')


def relative_path(value):
    path = PurePosixPath(value)
    if path.is_absolute() or '..' in path.parts or not path.parts:
        raise ValueError(f'Expected a workspace-relative path: {value}')
    return ROOT.joinpath(*path.parts)


def omitted(path):
    return any(p in OMIT or p.startswith('.env') for p in path.parts) or path.suffix == '.pyc'


def files_under(value):
    start = relative_path(value)
    if not start.exists():
        raise ValueError(f'Missing required path: {value}')
    for part in [start, *start.parents]:
        if part == ROOT:
            break
        if part.is_symlink():
            raise ValueError(f'Symlink is not portable: {part.relative_to(ROOT)}')
    if start.is_file():
        if not omitted(start.relative_to(ROOT)):
            yield start
        return
    for directory, dirs, names in os.walk(start, followlinks=False):
        dirs[:] = sorted(d for d in dirs if not omitted(Path(d)))
        for name in [*dirs, *sorted(names)]:
            path = Path(directory) / name
            if omitted(path.relative_to(ROOT)):
                continue
            if path.is_symlink():
                raise ValueError(f'Symlink is not portable: {path.relative_to(ROOT)}')
            if path.is_file():
                yield path


def selection(config):
    return sorted({p for root in config['portable_roots'] for p in files_under(root)})


def skills():
    result = {'packages': [], 'routers': [], 'catalogues': [], 'pointers': []}
    for path in sorted((ROOT / '.agents/skills').glob('*/SKILL.md')):
        name, text = path.parent.name, path.read_text()
        kind = ('catalogues' if name.endswith('-catalogue') else
                'routers' if name == 'emilkowalski-skill' else
                'pointers' if 'catalogue stub' in text.lower() else 'packages')
        result[kind].append(name)
    return result


def file_links(config, selected):
    errors, optional, absolute = [], set(), set()
    documents = {p for root in config['maintained_markdown_roots']
                 for p in files_under(root) if p.suffix == '.md'}
    for path in sorted(documents):
        # Templates in fenced code are examples, not existing file promises.
        text = re.sub(r'(?ms)^```.*?^```[^\n]*', '', path.read_text())
        for target in re.findall(r'\]\((<[^>]+>|[^)\s]+)(?:\s+"[^"]*")?\)', text):
            target = unquote(target.strip('<>'))
            url = urlsplit(target)
            if url.scheme or not url.path:
                continue
            if Path(url.path).is_absolute():
                absolute.add(f'{path.relative_to(ROOT)}: {url.path}')
                continue
            dest = (path.parent / url.path).resolve()
            try:
                local = dest.relative_to(ROOT).as_posix()
            except ValueError:
                absolute.add(f'{path.relative_to(ROOT)}: {url.path}')
                continue
            if any(local.startswith(prefix) for prefix in config['optional_local_prefixes']):
                optional.add(local)
                continue
            if not dest.exists() or (dest.is_file() and dest not in selected):
                errors.append(f'{path.relative_to(ROOT)} -> {target}')
    return errors, optional, absolute, len(documents)


def check(config, paths, verify_export=False):
    errors = []
    for item in config.get('git_bundles', []):
        if item.get('snapshot'):
            try:
                with zipfile.ZipFile(relative_path(item['snapshot'])) as archive:
                    if archive.testzip() is not None:
                        errors.append(f'Invalid tool source archive: {item["snapshot"]}')
            except (OSError, zipfile.BadZipFile) as exc:
                errors.append(f'Unreadable tool source archive: {exc}')
    for path in paths:
        if path.suffix == '.json':
            try:
                json.loads(path.read_text())
            except (ValueError, UnicodeError) as exc:
                errors.append(f'Invalid JSON: {path.relative_to(ROOT)}: {exc}')
    broken, optional, absolute, count = file_links(config, set(paths))
    errors.extend(f'Missing portable file link: {item}' for item in broken)

    source = json.loads((ROOT / 'shared/sources/emilkowalski-skills.source.json').read_text())
    for item in source['upstream_files']:
        path = relative_path(source['snapshot_directory'] + '/' + item['path'])
        if not path.is_file():
            errors.append(f'Missing Emil source: {item["path"]}')
            continue
        data = path.read_bytes()
        actual = hashlib.sha1(b'blob ' + str(len(data)).encode() + b'\0' + data).hexdigest()
        if actual != item['git_blob_sha1']:
            errors.append(f'Changed pinned Emil source: {item["path"]}')

    exported = ROOT / 'EXPORT-MANIFEST.json'
    if verify_export and not exported.exists():
        errors.append('No EXPORT-MANIFEST.json found. Use verify inside an extracted bundle.')
    if verify_export and exported.exists():
        manifest = json.loads(exported.read_text())
        declared = {item['path'] for item in manifest['files']}
        present = {p.relative_to(ROOT).as_posix() for p in paths}
        if declared != present:
            errors.append('Export contents differ from the manifest file list.')
        for item in manifest['files']:
            path = relative_path(item['path'])
            if not path.is_file() or hashlib.sha256(path.read_bytes()).hexdigest() != item['sha256']:
                errors.append(f'Export hash mismatch: {item["path"]}')

    inventory = skills()
    print(f'Portable files: {len(paths)}; content: {sum(p.stat().st_size for p in paths):,} bytes')
    print(f'Checked relative file links in {count} maintained Markdown documents (not anchors or external URLs).')
    print('Skills: ' + ', '.join(f'{len(v)} {k}' for k, v in inventory.items()))
    print(f'Historical/optional paths retained: {len(absolute)} absolute or outside paths; {len(optional)} local-only links.')
    if verify_export and exported.exists():
        print('Export manifest hashes checked against the original transfer snapshot.')
    for error in errors:
        print('ERROR: ' + error)
    print('PASS' if not errors else 'FAIL')
    return not errors


def export(config, paths, destination):
    destination = destination.resolve()
    if destination.suffix != '.zip':
        raise ValueError('Export destination must end in .zip')
    for value in config['portable_roots']:
        root = relative_path(value)
        if destination == root or root in destination.parents:
            raise ValueError('Export destination cannot be inside portable source content.')
    snapshot = {p.relative_to(ROOT).as_posix(): p.read_bytes() for p in paths}
    manifest = {
        'schema_version': 1,
        'created_at_utc': datetime.now(timezone.utc).isoformat(),
        'purpose': config['purpose'],
        'excluded_components': config['excluded_components'],
        'files': [{'path': name, 'bytes': len(data), 'sha256': hashlib.sha256(data).hexdigest()}
                  for name, data in sorted(snapshot.items())],
    }
    destination.parent.mkdir(parents=True, exist_ok=True)
    temporary = None
    try:
        with tempfile.NamedTemporaryFile(dir=destination.parent, suffix='.zip', delete=False) as handle:
            temporary = Path(handle.name)
        with zipfile.ZipFile(temporary, 'w', zipfile.ZIP_DEFLATED) as archive:
            for name, data in sorted(snapshot.items()):
                archive.writestr('design-agent-portable/' + name, data)
            archive.writestr('design-agent-portable/EXPORT-MANIFEST.json', json.dumps(manifest, indent=2) + '\n')
        with zipfile.ZipFile(temporary) as archive:
            if archive.testzip() is not None:
                raise ValueError('ZIP integrity check failed.')
        # Refuse a mixed snapshot when another chat edits or adds selected files mid-export.
        if selection(config) != paths or any(relative_path(name).read_bytes() != data for name, data in snapshot.items()):
            raise ValueError('Source changed during export. Run export again after the edit finishes.')
        temporary.replace(destination)
        print(f'Created {destination} ({destination.stat().st_size:,} bytes)')
    finally:
        if temporary and temporary.exists():
            temporary.unlink()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('command', choices=['check', 'verify', 'inventory', 'export'])
    parser.add_argument('--output', type=Path, default=ROOT / '.exports/design-agent-portable.zip')
    args = parser.parse_args()
    config = json.loads((ROOT / 'workspace.json').read_text())
    paths = selection(config)
    if args.command == 'export':
        refresh_git_bundles(config)
        paths = selection(config)
    if args.command == 'inventory':
        print(json.dumps({'skill_counts': {k: len(v) for k, v in skills().items()},
                          'skills': skills(), 'portable_files': len(paths),
                          'portable_bytes': sum(p.stat().st_size for p in paths)}, indent=2))
    elif check(config, paths, verify_export=args.command == 'verify'):
        if args.command == 'export':
            export(config, paths, args.output)
    else:
        return 1
    return 0


if __name__ == '__main__':
    try:
        raise SystemExit(main())
    except (ValueError, OSError, KeyError, subprocess.CalledProcessError) as error:
        print(f'ERROR: {error}')
        raise SystemExit(1)
