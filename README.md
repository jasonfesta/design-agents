# Jason

```text
JASON / DESIGN WORKSPACE
────────────────────────────────────────────
source      github.com/jasonfesta/design-agents
install     jason/
format      portable Markdown + local React tools
```

Three folders. Start with an agent, browse the resources it needs, and run a local tool when the work calls for it.

**[Browse Atlas — apps, websites, and games](agents/ATLAS.md#full-atlas)** · Every category, interface subcategory, and style family on one page.

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

## Maintenance and transfer

```sh
python3 tools/workspace.py catalogue
python3 tools/workspace.py check
python3 tools/workspace.py export
```

The export is `.exports/jason.zip`; run `python3 tools/workspace.py verify` inside an extracted kit. Dependencies, credentials, private benchmark results, and local installations stay local. [History](resources/history/README.md) preserves prior material and source snapshots.
