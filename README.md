# Jason

```text
JASON / DESIGN WORKSPACE
────────────────────────────────────────────
source      github.com/jasonfesta/design-agents
install     jason/
format      portable Markdown + local React tools
```

Three folders. Start with an agent, browse the resources it needs, and run a local tool when the work calls for it.

**[Browse Atlas — apps, websites, and games](agents/ATLAS.md#full-atlas)** · Every category, interface subcategory, and style family on one page. [Download the diagrams as PNGs](#diagram-pngs).

```text
jason/
├── README.md
├── AGENTS.md                     IDE instructions
├── agents/
│   ├── SETUP.md                  Install this kit as jason/
│   ├── ATLAS.md                  Complete Atlas overview and nomenclature
│   ├── TASTE.md                  References and design direction
│   ├── DIAL.md                   React components and layouts
│   ├── DREAM.md                  Separate cleanup candidate for review
│   ├── BENCHMARK.md              Compare models against a selected layout
│   └── memory/                   Evidence, decisions, and coverage
├── resources/
│   ├── structure.md              Six-layer design hierarchy
│   ├── diagrams/                 GitHub-dark PNGs and download bundle
│   ├── apps/                     README · categories · subcategories · styles
│   ├── games/                    README · categories · subcategories · styles
│   ├── websites/                 README · categories · subcategories · styles
│   ├── devices/                  Mobile · tablet · desktop · TV
│   ├── viewports/                Numeric sizes and Chrome device presets
│   ├── styles/                   Shared visual vocabulary
│   ├── motion/                   Techniques and motion references
│   ├── sites.md                  Collected design-site directory
│   ├── skills.md                 Installed instructions and pointers
│   ├── mcps/                     MCP research and setup records
│   ├── agents/                   External agent and craft references
│   ├── tools/                    Tool research and setup records
│   ├── jigs/                     Shared layout review UI
│   ├── guides/                   Working methods
│   ├── sources/                  Source records and collections
│   └── history/                  Preserved earlier material
└── tools/
    ├── benchmark/                Runnable React tool and jig preview
    └── workspace.py              Catalogue, checks, and transfer
```

`.agents/skills/` holds the bundled skills where compatible IDEs discover them. `workspace.json` and `.gitignore` handle portability and local files; they are implementation details, not extra places to browse.

This is the portable tree. Existing machine-local tool checkouts remain under `tools/` and are excluded from the GitHub package. Shared reference menus live in this kit; actual app, website, and game projects use the destination recorded for their build chat.

## Start

Give an assistant [agents/SETUP.md](agents/SETUP.md) and say: **Set up Jason here.** It fetches `jasonfesta/design-agents` from `main` into `jason/`, preserving existing work. The repository and branch are confirmed. Setup verifies the downloaded revision and reports tool readiness separately; installation across all supported operating systems remains untested.

Already have the kit? Read [agents/README.md](agents/README.md) and load the role you need. Roles remain portable Markdown for later skill conversion.

## Folder map

| I need… | Open |
| --- | --- |
| The six agent roles | [Agents](agents/README.md) |
| All categories, subcategories, and styles across the three types | [Full Atlas](agents/ATLAS.md#full-atlas) |
| The six-layer schema and project folder rules | [Structure](resources/structure.md) |
| App product categories and interface families | [Apps](resources/apps/README.md) |
| Game genres | [Games](resources/games/README.md) |
| Website uses | [Websites](resources/websites/README.md) |
| Resources and filing rules | [Resources](resources/README.md) |
| Collected design sites, grouped by type | [Design sites](resources/sites.md) |
| MCPs, skills, or supporting agent references | [MCPs](resources/mcps/README.md) · [Skills](resources/skills.md) · [Agent resources](resources/agents/README.md) |
| Local preview or model comparison | [Tools](tools/README.md) |

## Design structure

[Open the full Atlas](agents/ATLAS.md#full-atlas) for the expanded [app](agents/ATLAS.md#apps), [website](agents/ATLAS.md#websites), and [game](agents/ATLAS.md#games) trees.

```text
design type                       apps / games / websites
└── device type                   mobile / tablet / desktop / tv
    └── viewport size             width × height
        └── category              product / genre / website use
            └── subcategory       interface family
                └── style         visual treatment
```

These definitions live in Resources. Actual product code, selected references, layouts, and versions live in the project destination you choose. Each new build chat owns one app, website, or game. Follow [project locations](agents/README.md#project-locations); roles reuse that destination.

The workflow is **Taste ↔ Atlas → Dial → Dream**. Benchmark compares models against a saved Dial layout when requested. The shared jig and local Benchmark tool run today; the full reference-to-kit workflow still needs an end-to-end implementation, and Dream scheduling is not configured.

## Diagram PNGs

Cropped screenshots of the existing GitHub Markdown in **GitHub dark mode**, captured at **2× resolution**. The complete trees retain every line. Original Markdown stays editable above and in Atlas.

**[Download all 13 PNGs](resources/diagrams/github-dark-diagrams.zip?raw=1)** · [Image index and source receipts](resources/diagrams/README.md)

### Roles, uses, and results

[![Atlas, Taste, Dial, Dream, and Benchmark: roles, uses, and results](resources/diagrams/agent-roles.png)](resources/diagrams/agent-roles.png?raw=1)

[Download the role overview PNG](resources/diagrams/agent-roles.png?raw=1)

### Complete nomenclature trees

| Apps | Websites | Games |
| --- | --- | --- |
| [![Complete app nomenclature](resources/diagrams/apps.png)](resources/diagrams/apps.png?raw=1) | [![Complete website nomenclature](resources/diagrams/websites.png)](resources/diagrams/websites.png?raw=1) | [![Complete game nomenclature](resources/diagrams/games.png)](resources/diagrams/games.png?raw=1) |
| [Download apps PNG](resources/diagrams/apps.png?raw=1) | [Download websites PNG](resources/diagrams/websites.png?raw=1) | [Download games PNG](resources/diagrams/games.png?raw=1) |

### Atlas and main structure

[![Atlas role, input, and output](resources/diagrams/atlas.png)](resources/diagrams/atlas.png?raw=1)

[Download Atlas PNG](resources/diagrams/atlas.png?raw=1)

[![Atlas main structure: design type, device type, viewport size, category, subcategory, style](resources/diagrams/atlas-main-structure.png)](resources/diagrams/atlas-main-structure.png?raw=1)

[Download Atlas main structure PNG](resources/diagrams/atlas-main-structure.png?raw=1)

### Folder maps and path diagrams

| Diagram | PNG |
| --- | --- |
| Full workspace | [Download](resources/diagrams/workspace-structure.png?raw=1) |
| Design structure with layer meanings | [Download](resources/diagrams/design-structure.png?raw=1) |
| Agent files | [Download](resources/diagrams/agents-structure.png?raw=1) |
| Resource folders | [Download](resources/diagrams/resources-structure.png?raw=1) |
| Portable tools | [Download](resources/diagrams/tools-structure.png?raw=1) |
| Selected project branch | [Download](resources/diagrams/project-branch.png?raw=1) |
| Read a path | [Download](resources/diagrams/read-a-path.png?raw=1) |

<details>
<summary>Preview folder maps and path diagrams</summary>

![Full workspace folder map](resources/diagrams/workspace-structure.png)

![Design structure with layer meanings](resources/diagrams/design-structure.png)

![Agent file map](resources/diagrams/agents-structure.png)

![Resource folder map](resources/diagrams/resources-structure.png)

![Portable tool map](resources/diagrams/tools-structure.png)

![Selected project branch](resources/diagrams/project-branch.png)

![Read a path](resources/diagrams/read-a-path.png)

</details>

## Maintenance and transfer

```sh
python3 tools/workspace.py catalogue
python3 tools/workspace.py check
python3 tools/workspace.py export
```

The export is `.exports/jason.zip`; run `python3 tools/workspace.py verify` inside an extracted kit. Dependencies, credentials, private benchmark results, and local installations stay local. [History](resources/history/README.md) preserves prior material and source snapshots.
