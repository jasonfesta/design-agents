# Folder migration

October 12, 2026 · The current structure is `apps|websites|games/<viewport>/<category>/<style>/`.

The pre-move knowledge snapshot is `.exports/design-agent-before-folder-cleanup.zip`. Runtime checkouts were moved in place with their Git histories and dependencies. Original source snapshots retain their bytes and licenses. Old chats can resolve paths through this table.

| Previous path | Current path |
| --- | --- |
| `direction-kit/taxonomy/types/APPS.md` | `apps/README.md` |
| `direction-kit/taxonomy/types/WEBSITES.md` | `websites/README.md` |
| `direction-kit/taxonomy/types/GAMES.md` | `games/README.md` |
| `design-agent.md` | `shared/agents/design.md` |
| `taste-agent.md` | `shared/agents/taste.md` |
| `dream-agent.md` | `shared/agents/dream.md` |
| `taste` | `shared/taste` |
| `direction-kit` | `shared/workflow` |
| `design-directions` | `resources/research/directions` |
| `design-research` | `resources/research/library` |
| `design-team-watch` | `resources/research/team-watch` |
| `design-signal-agent-brief.md` | `resources/research/team-watch/agent-brief.md` |
| `design-mcp-landscape.md` | `resources/research/tooling/mcp-landscape.md` |
| `design-mcp-installations.md` | `docs/setup/mcp-installations.md` |
| `LOCAL-INSTALLATIONS.md` | `docs/setup/LOCAL-INSTALLATIONS.md` |
| `local-installations.json` | `docs/setup/local-installations.json` |
| `emilkowalski-skills` | `shared/sources/emilkowalski-skills` |
| `emilkowalski-skills.source.json` | `shared/sources/emilkowalski-skills.source.json` |
| `superdesign-skill` | `tools/superdesign-skill` |
| `screenshot-to-code` | `tools/screenshot-to-code` |
| `Open-AI-Design-Agent` | `tools/Open-AI-Design-Agent` |
| `dialkit` | `tools/dialkit` |

The two installed skill routers were updated to the new shared paths. Python virtualenv launchers in the relocated optional apps were retargeted; no application source or provider credentials were changed. `.agents/skills/` and `.tools/` retain their locations for discovery and machine configuration.

Migration checks: maintained Markdown file links and pinned source hashes pass; both relocated Python `uvicorn` launchers run; the DialKit demo was restarted from `tools/dialkit/example` and returned HTTP successfully. This verifies paths and startup, not the proposed image-to-component workbench.

## Resources and agent specs

Jason confirmed the five names **Setup, Atlas, Taste, Dial, and Dream** and requested a separate portable Markdown resource folder. The five entry specs are now in `instructions/`.

- `shared/research/` moved to `resources/research/`.
- Resource catalogue and other structured records have Markdown views beside the research. Original JSON bytes are retained under `shared/sources/resource-data/`.
- The current historical snapshot manifest is `shared/sources/resource-data/library/workspace-sources/manifest.json`; all 48 original source hashes remain verified.
- Source-code snapshots and installed tools stay outside Resources.
- `.exports/design-agent-before-resources.zip` preserves the workspace before this move.

The Resources pack carries Markdown documents and the original attribution license. It does not install tools or recreate account connections.


## Simplification for GitHub reuse

October 12, 2026. The [root README](../../README.md) and five files in `instructions/` are the only current entry points. Supporting documents are references.

- `docs/` moved under `shared/docs/`.
- The main catalogue moved to `resources/catalogue.md`; named collections moved to `resources/collections/`.
- Design research moved directly under `resources/research/`.
- Earlier workspace snapshots, team research, starter, Taste/Dream contracts, and all 12 viewport/324 category placeholders moved to `resources/history/`.
- Before editing current documents, their previous contents were preserved. [The preservation map](../../resources/history/PRESERVATION.md) records original paths and hashes; the full prior portable kit is retained in a source archive.
- Local tools stay in place and are excluded from the parent GitHub repository. Personal DialKit source and history are preserved in `shared/sources/dialkit-source.zip` for optional reuse.

No source or past work was deleted. On-demand branch creation replaces broad empty scaffolding. The original `.agents/skills/` and craft-source paths remain stable.
