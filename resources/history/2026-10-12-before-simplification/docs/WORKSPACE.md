# Workspace map

Folder organization · October 12, 2026 · Start with [README.md](../README.md).

## Design folders

```text
apps/<viewport>/<category>/<style>/
websites/<viewport>/<category>/<style>/
games/<viewport>/<category>/<style>/
```

Use **category** in paths. Apps now use interface types and websites use design uses; Jason approved both replacement category menus; styles remain open. Game genres retain their Google Play source list. Each type README describes its design environment, with copied category/style menus and viewport starting points. Each viewport README owns its profiles and target requirements. The category README owns that branch's research and links to its styles. A style README owns its identity, evidence, component variants, and design applications. Exact sizes, orientation, target platform, and finer page/screen details stay inside the relevant record.

The initial folders contain 12 viewport branches and 324 category containers. The 256 app/website store-category containers are now legacy scaffolding; the 20 approved app and 18 approved website categories have not yet been generated as replacement directories. Their README files explicitly start unresearched; no style folders or personal recommendations have been populated. The shared registries own category and style definitions; type documents carry dated copies. A directory is not evidence of product support.

## Supporting folders

| Location | Canonical responsibility |
| --- | --- |
| [instructions](../instructions/README.md) | Separate Setup, Atlas, Taste, Dial, and Dream specs, plus the build plan |
| [shared/agents](../shared/agents/design.md) | Design, Taste, and Dream instructions |
| [shared/taste](../shared/taste/MEMORY.md) | Global preferences, provenance, archive, learning, and scoped coverage index |
| [shared/viewports](../shared/viewports/README.md) | Viewport applicability, Chrome presets, native references, and units |
| [shared/styles](../shared/styles/README.md) | Shared preferred visual terms; app/web/game interpretations; motion terminology; aliases, evidence limits, and prior vocabulary |
| [shared/workflow](../shared/workflow/START.md) | Direction Kit, taxonomy, component workbench, templates, and handoff |
| [resources](../resources/README.md) | Portable Markdown design resources, carried separately from agent specs and tools |
| [resources/research/library](../resources/research/library/README.md) | Existing catalogue and immutable historical source snapshots |
| [resources/research/directions](../resources/research/directions/research-library.md) | Earlier expanded guides and unique Graphical/DialKit research |
| resources/research/team-watch | Historical team/hiring research, independent of personal visual taste |
| resources/research/tooling | Tool discovery research and original source links |
| [shared/sources](../shared/sources/emilkowalski-skills.source.json) | Pinned craft snapshot, original structured resource data, and source manifests |
| [tools/dialkit](../tools/dialkit/PERSONAL.md) | Personal DialKit checkout with its independent Git history |
| tools/screenshot-to-code, tools/Open-AI-Design-Agent, tools/superdesign-skill | Optional local checkouts; excluded from the portable knowledge export |
| [docs/setup](setup/LOCAL-INSTALLATIONS.md) | Local setup and installation records |
| [scripts/workspace.py](../scripts/workspace.py) | Link/source checks and export |
| .agents/skills | Stable installed skill-discovery path |
| .tools | Stable machine-runtime and MCP support paths |
| .exports | Generated snapshots, including the pre-cleanup backup |

[The migration ledger](FOLDER-MIGRATION.md) resolves old chat paths. Imported source bodies and licenses are preserved. The two local skill routing links follow the new agent/source paths. Native and Node dependencies move with their tool checkout; they are excluded from transfer.

## Ownership and maintenance

Store actual scoped taste in the design branch; global memory and history link to it. Keep category and style vocabulary in their shared lists. Component variants belong to the applicable style record, with canonical code and versioned settings; follow [COMPONENTS.md](../shared/workflow/COMPONENTS.md). A project's own repository remains the owner of production code.

[Setup](../instructions/SETUP.md) owns recreation of the full environment and copying applicable information under each type. Branch copies preserve source identity, revision, scope, and attribution; Resources remains the portable master resource collection. Setup receipts map sources to copied destinations and preserve local edits on refresh. The copying/restoration automation remains to be implemented.

Refresh files before editing when another chat may be active. Update existing records rather than creating another overview. Use the [setup guide](SETUP.md) for portability and [chat index](CHATS.md) for history. No pruning of source research or installed skills was performed by this move.

```sh
python3 scripts/workspace.py check
python3 scripts/workspace.py export
```

## Pruning queue

The source layout is now organized. Future consolidation can shorten overlapping historical guides or reduce skill pointers after real use. Keep unique source evidence, attribution, working tools, and branch records unless Jason asks to remove them.
