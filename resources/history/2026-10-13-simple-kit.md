# Simple kit preservation receipt

October 13, 2026 · Requested organization pass · No source material deleted

The current visible root is `agents/`, `resources/`, and `tools/`. [The root README](../../README.md) and [Resources](../README.md) own navigation. [Structure](../structure.md) owns the confirmed five-layer schema.

## Moves

| Previous location | Current location |
| --- | --- |
| apps/, games/, websites/ | resources/apps/, resources/games/, resources/websites/ |
| mcps/ | resources/mcps/ |
| scripts/workspace.py | tools/workspace.py |
| benchmark/ | tools/benchmark/; private notes, runs, and dependencies moved with it |
| resources/design/categories/ | Type-specific categories.md; structure.md; devices/; guides/page-types.md; preserved legacy menus |
| resources/design/viewports/ | resources/viewports/ |
| resources/design/ research and workflows | resources/guides/ |
| resources/styles/apps.md, games.md, websites.md | Type-specific styles.md |
| resources/tooling/ | resources/tools/ |
| resources/collections/ | resources/sources/ |
| resources/catalogue.md | Preserved in history/2026-10-13-before-simple-kit/; replaced by the resource index and sites.md |

## Preservation audit

All **1249** previously selected portable files are accounted for: **1092 unchanged in place**, **32 moved without content changes**, and **125 edited with their original bytes preserved**. The [manifest](sources/history/2026-10-13-simple-kit-manifest.json) records every old/new path and SHA-256. The [preimage archive](sources/history/2026-10-13-before-simple-kit.zip) retains original active Markdown, code/configuration, and the original file manifest. Large binary captures remain at their mapped paths and were hash-checked.

Historical source bodies and pinned skill snapshots retain their original meaning and licenses. Current links were rebased. Existing machine-local tool checkouts remain in tools/ and are excluded from the parent commit.

The [design-site directory](../sites.md) preserves all 713 destinations from the previous index, grouped by source type with source IDs and dates. The [skill directory](../skills.md) distinguishes installed packages, routers, catalogues, and pointers; `.agents/skills/` remains the runtime location.

This receipt establishes preservation at migration time. Subsequent intentional edits may change current hashes; the original hashes and preimages remain available. No GitHub publication or unattended crawl was performed.
