#!/usr/bin/env python3
"""Build the resource index, check, and export this portable design kit."""

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
                'routers' if name in {'emilkowalski-skill', 'remotion-best-practices', 'ui-skills-root', 'grill-me'} else
                'pointers' if any(marker in text.lower() for marker in ('catalogue stub', 'discovery stub')) else 'packages')
        result[kind].append(name)
    return result


def catalogue():
    """Build a single design-site directory from preserved source records."""
    records = {}
    primary_count = memberships = 0
    def cell(value):
        return value.replace('|', '\\|').replace('\n', ' ')
    def link(path, label):
        return f'[{cell(label)}]({Path(os.path.relpath(path, ROOT / "resources")).as_posix()})'
    def add(name, url, identity, labels, path, group, observed, status):
        parsed=urlsplit(url)
        if parsed.scheme not in {'http','https'} or not parsed.netloc:
            raise ValueError(f'Invalid resource URL in {path}: {url}')
        key=(parsed.netloc.lower().removeprefix('www.'),parsed.path.rstrip('/'),parsed.query,parsed.fragment)
        r=records.setdefault(key,{'name':name,'url':url,'aliases':set(),'labels':set(),'sources':set(),'group':group,'observed':set(),'status':set()})
        if name!=r['name']: r['aliases'].add(name)
        r['labels'].update(labels);r['sources'].add((identity,path));r['observed'].add(observed);r['status'].add(status)
    source=ROOT/'resources/sources/source-records.md'
    for section in re.split(r'^## ',source.read_text(),flags=re.M)[1:]:
        fields=dict(re.findall(r'^- \*\*([^:]+):\*\* (.*)$',section,re.M))
        if 'Id' not in fields:continue
        labels=json.loads(fields['Categories'])
        add(fields['Name'],fields['Url'],fields['Id'],labels,source,labels[0] if labels else 'Unclassified',fields.get('Observed at','Not recorded'),fields.get('Source status','Not recorded'))
        primary_count+=1
    for name in ['resources','websites','designers']:
        path=ROOT/f'resources/sources/desengs/{name}.md'
        section={'resources':'Resource links','websites':'Website inspiration','designers':'Designers and people'}[name]
        for line in path.read_text().splitlines():
            if line.startswith('## '):section=line[3:]
            if not line.startswith('| de-'):continue
            match=re.match(r'^\| (de-[^ ]+) \| \[(.*?)\]\((https?://[^\s]+)\) \|',line)
            if not match:raise ValueError(f'Unrecognized DesEngs row in {path}: {line}')
            identity,label,url=match.groups()
            action=line.split('|')[3].strip() if name=='resources' else ''
            group={'read':'Reading and research','learn':'Reading and research','watch':'Video and talks','build':'Libraries and code','use':'Design tools','browse':'Inspiration directories','follow':'Designers and people'}.get(action,section)
            add(label,url,identity,['DesEngs: '+section]+([action] if action else []),path,group,'2026-10-12','directory entry; linked work not individually inspected')
            memberships+=1
    lines=['# Design sites','', '```text','resources / sites','index     collected links, grouped by source type','update    python3 tools/workspace.py catalogue','```','',
           f'**{len(records)} distinct destinations** · {primary_count} primary records · {memberships} DesEngs memberships. One browsing directory; original IDs, labels, dates, and inspection notes stay linked. This is our collection history, not a claim that every destination is current or reviewed.','',
           'Add or update a record using [the filing rules](README.md#add-a-reference), then rebuild this file. [Source collections](sources/README.md) retain larger component lists, clips, screenshots, and detailed captures.','',
           '## Browse by type','']
    groups=sorted({r['group'] for r in records.values()},key=str.casefold)
    def anchor(s):return re.sub(r'[^\w\s-]','',s.lower()).replace(' ','-')
    lines += [f'- [{g}](#{anchor(g)}) · {sum(r["group"]==g for r in records.values())}' for g in groups]
    lines += ['', '> By the way — a source type describes where a reference came from. It does not select an app category, a viewport, or a visual style.','']
    for group in groups:
        lines += ['## '+group,'','| Reference | Source labels | Observed / captured | Evidence |','| --- | --- | --- | --- |']
        for r in sorted((r for r in records.values() if r['group']==group),key=lambda r:(r['name'].casefold(),r['url'])):
            label=f'[{cell(r["name"])}]({r["url"]})'
            if r['aliases']:label+=' (also: '+cell('; '.join(sorted(r['aliases'])))+')'
            evidence='; '.join(link(path,identity) for identity,path in sorted(r['sources']))
            lines.append('| '+ ' | '.join([label,cell('; '.join(sorted(r['labels']))),cell('; '.join(sorted(r['observed']))),evidence])+' |')
        lines.append('')
    documents=sum(1 for p in (ROOT/'resources').rglob('*.md') if 'history' not in p.relative_to(ROOT).parts)
    return '\n'.join(lines),documents,len(records)


def skill_directory():
    lines=['# Skill resources','','```text','resources / skills','scope     installed instructions and catalogue pointers','runtime   ../.agents/skills/ (from the kit root)','```','',
           'The callable skill files stay in the IDE-compatible hidden `.agents/skills/` folder. This list makes them discoverable from Resources. A pointer is a reference, not a complete installed skill. Rebuild with `python3 tools/workspace.py catalogue`.','']
    lines += ['[Recent’s 25 skills](sources/recent-skills/README.md) records each listing’s installed path, current upstream name, dependencies, and source revision. Some packages are routers or need external tools; consult that receipt before use.', '']
    lines += ['Routers select other instructions. Pointers include catalogue stubs and tool entry points; they do not establish tool readiness. Agent Browser’s [bundled core guide](../.agents/skills/agent-browser/upstream-core/SKILL.md) is available for offline reading.', '']
    titles={'packages':'Installed instruction packages','routers':'Routers and aliases','catalogues':'Catalogues','pointers':'Pointers and tool entry points'}
    for kind,names in skills().items():
        lines += ['## '+titles[kind],'']
        lines += [f'- [{name}](../.agents/skills/{name}/SKILL.md)' for name in names]
        lines.append('')
    return '\n'.join(lines)


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


def atlas_menu_ids(path):
    """Read stable category/family IDs from the canonical Markdown tables."""
    ids = []
    for line in relative_path(path).read_text().splitlines():
        if not line.startswith('|'):
            continue
        value = line.split('|')[1].strip().strip('`')
        if re.fullmatch(r'(?:games/)?[a-z][a-z0-9-]*', value):
            ids.append(value.removeprefix('games/'))
    if not ids or len(ids) != len(set(ids)):
        raise ValueError(f'Expected a nonempty, unique Atlas menu: {path}')
    return ids


def atlas_style_groups(path, start, end):
    """Keep the existing style-family headings and their exact stable IDs."""
    body = relative_path(path).read_text().split(start, 1)[1].split(end, 1)[0]
    groups = {}
    for line in body.splitlines():
        if line.startswith('### '):
            groups[line[4:]] = []
        elif line.startswith('|') and groups:
            match = re.search(r'`([a-z][a-z0-9-]*)`', line)
            if match:
                groups[next(reversed(groups))].append(match[1])
    if not groups or any(not ids for ids in groups.values()):
        raise ValueError(f'Expected named Atlas style groups: {path}')
    return groups


def atlas_tree(design_type):
    categories = atlas_menu_ids(f'resources/{design_type}/categories.md')
    families = atlas_menu_ids(f'resources/{design_type}/subcategories.md')
    shared = relative_path('resources/styles/README.md').read_text()
    primary = re.findall(r'^\| .*?\| `([a-z][a-z0-9-]*)` \|',
                        shared.split('## Primary app and website style menu', 1)[1]
                        .split('\n## ', 1)[0], re.M)
    if not primary or len(primary) != len(set(primary)):
        raise ValueError('Expected unique primary style IDs')
    if design_type == 'games':
        primary = re.findall(r'^\| .*?`([a-z][a-z0-9-]*)`',
                             relative_path('resources/games/styles.md').read_text()
                             .split('## Preferred terms', 1)[1].split('\n## ', 1)[0], re.M)
        extended = atlas_style_groups('resources/styles/README.md',
                                      '## Extended visual terms', '## Corrections')
        primary_name = f'Game art and rendering · {len(primary)} research terms'
        extended_name = 'Shared influences · reference-led use'
    else:
        extended = atlas_style_groups(f'resources/{design_type}/styles.md',
                                      '## Extended type-specific interpretations', '## Motion')
        primary_name = f'Primary design languages · {len(primary)}'
        extended_name = 'Extended influences · branch fit unassessed'
    if not primary or len(primary) != len(set(primary)):
        raise ValueError(f'Expected unique primary style IDs for {design_type}')
    count = len(set(primary).union(*(set(ids) for ids in extended.values())))
    status = 'existing families' if design_type == 'apps' else 'draft families'
    lines = ['```text', design_type,
             '└── device type · mobile / tablet / desktop / tv',
             '    └── viewport size · width × height',
             f'        └── category · choose one of {len(categories)}']
    lines += ['            │  ' + value for value in categories]
    lines += ['            │', f'            └── subcategory · {len(families)} {status}; choose one']
    lines += ['                │  ' + value for value in families]
    lines += ['                │', f'                └── style · {count} unique IDs across the groups below',
              '                    ├── ' + primary_name]
    for index, value in enumerate(primary):
        lines.append('                    │   ' + ('└── ' if index == len(primary) - 1 else '├── ') + value)
    lines.append('                    └── ' + extended_name)
    for index, (name, values) in enumerate(extended.items()):
        last = index == len(extended) - 1
        lines.append('                        ' + ('└── ' if last else '├── ') + name)
        for n, value in enumerate(values):
            lines.append('                        ' + ('    ' if last else '│   ') +
                         ('└── ' if n == len(values) - 1 else '├── ') + value)
    lines.append('```')
    return '\n'.join(lines)


def atlas_documents():
    """Render one menu into Atlas and its type README; definitions stay canonical."""
    documents = {}
    for design_type in ('apps', 'websites', 'games'):
        start, end = f'<!-- atlas:{design_type}:start -->', f'<!-- atlas:{design_type}:end -->'
        replacement = start + '\n' + atlas_tree(design_type) + '\n' + end
        for name in ('agents/ATLAS.md', f'resources/{design_type}/README.md'):
            body = documents.get(name, relative_path(name).read_text())
            if body.count(start) != 1 or body.count(end) != 1:
                raise ValueError(f'Expected one Atlas {design_type} block in {name}')
            documents[name] = re.sub(re.escape(start) + r'.*?' + re.escape(end),
                                     lambda match: replacement, body, flags=re.S)
    return documents


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

    if (ROOT / 'resources/sites.md').read_text() != catalogue()[0]:
        errors.append('Design-site directory is stale. Run: python3 tools/workspace.py catalogue')
    if (ROOT / 'resources/skills.md').read_text() != skill_directory():
        errors.append('Skill directory is stale. Run: python3 tools/workspace.py catalogue')

    for name, expected in atlas_documents().items():
        if relative_path(name).read_text() != expected:
            errors.append(f'Atlas menu is stale: {name}. Run: python3 tools/workspace.py catalogue')

    source = json.loads(relative_path(config['craft_source_manifest']).read_text())
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
                info = zipfile.ZipInfo('jason/' + name)
                info.create_system = 3
                info.compress_type = zipfile.ZIP_DEFLATED
                # Portable Unix permissions retain executable launchers; omit host-specific bits.
                mode = 0o100755 if (ROOT / name).stat().st_mode & 0o111 else 0o100644
                info.external_attr = mode << 16
                archive.writestr(info, data)
            archive.writestr('jason/EXPORT-MANIFEST.json', json.dumps(manifest, indent=2) + '\n')
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
    parser.add_argument('command', choices=['catalogue', 'check', 'verify', 'inventory', 'export'])
    parser.add_argument('--output', type=Path, default=ROOT / '.exports/jason.zip')
    args = parser.parse_args()
    config = json.loads((ROOT / 'workspace.json').read_text())
    if args.command == 'catalogue':
        content, documents, destinations = catalogue()
        atlas = atlas_documents()
        (ROOT / 'resources/sites.md').write_text(content)
        (ROOT / 'resources/skills.md').write_text(skill_directory())
        for name, body in atlas.items():
            relative_path(name).write_text(body)
        print(f'Updated site, skill, and Atlas directories: {documents} resource documents, {destinations} collected destinations.')
        return 0
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
