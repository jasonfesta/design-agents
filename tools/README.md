# Tools

```text
JASON / LOCAL TOOLS
────────────────────────────────────────────
portable    benchmark/ + workspace.py
local       installed checkouts and private run data
```

```text
tools/
├── README.md
├── workspace.py              Index · check · export
└── benchmark/                React comparison tool and jig preview
```

## Preview and Benchmark

```sh
cd tools/benchmark
npm ci
npm run dev
```

Open [the shared jig](http://127.0.0.1:4317/?jig=1) or [Benchmark](http://127.0.0.1:4317/). [The run guide](benchmark/README.md) covers server-only API configuration and local report saving. There is no paid inference without a configured key and an explicit run.

## Maintenance

From the kit root:

```sh
python3 tools/workspace.py catalogue
python3 tools/workspace.py check
python3 tools/workspace.py export
```

`catalogue` rebuilds the design-site and skill directories plus the complete menus in Atlas and each type README. Category, subcategory, and style tables in Resources remain canonical. `check` validates the portable file set, links, and menu freshness. `export` creates `.exports/jason.zip`; use `verify` inside the extracted kit to check its manifest.

## Machine-local installations

Existing `dialkit/`, `screenshot-to-code/`, `open-ai-design-agent/`, and `superdesign-skill/` checkouts remain here and stay out of the parent GitHub commit. Their [setup receipts](../resources/tools/local-tools.md) live in Resources. The [DialKit source archive](../resources/history/sources/dialkit-source.zip) preserves its code and history; restore into an empty `tools/` folder and read its `PERSONAL.md`.

[Tool research](../resources/tools/README.md), [MCPs](../resources/mcps/README.md), and [skills](../resources/skills.md) are resources. They do not imply that every listed capability is installed on this machine.
