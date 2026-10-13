# Resource consolidation receipt

October 12, 2026. All **851 prior portable files** are accounted for by their original SHA-256 hash. Unchanged files remain in their current locations; **68 edited originals** are preserved under `2026-10-12-resource-consolidation/`. The local DialKit `PERSONAL.md` before link updates is also preserved there.

The [complete path and hash map](sources/history/2026-10-12-resource-consolidation.json) records each old path, its current owner, and the location of its exact original. The earlier [1,009-file source snapshot](sources/history/2026-10-12-before-simplification.zip) remains intact.

| Earlier location | Current location |
| --- | --- |
| `instructions/` | `agents/` |
| `instructions/PLAN.md` | `plans/2026-10-12-agent-plan.md` in this History folder |
| `shared/taste/` | `agents/memory/` |
| `shared/styles/` | `resources/styles/` and `resources/motion/` |
| `shared/viewports/`, taxonomy and workflow documents | `resources/design/` |
| `shared/agents/design.md` | `resources/agents/craft-foundation.md` |
| `shared/docs/` and `shared/sources/` | Current setup records in tooling/MCPs; historical records and licensed source snapshots in History |
| `resources/research/` | `resources/design/`, `resources/tooling/`, and top-level `mcps/` |
| Earlier `resources/catalogue.md` | `resources/collections/source-records.md`; a generated master index now occupies `resources/catalogue.md` |
| `tools/Open-AI-Design-Agent/` | `tools/open-ai-design-agent/`; checkout retained and virtualenv launcher paths updated |

No past research was discarded. Current links were updated; original historical bodies retain their prior paths and wording. Installed tool/source internals retain upstream names. No new service was installed or account connected during consolidation. The lowercase tool checkout's Git root and Uvicorn launcher were checked; design generation was not run.
