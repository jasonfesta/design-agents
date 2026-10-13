# Local design tools

The three original repositories are cloned locally. Superdesign is installed at `.agents/skills/superdesign`. The two applications have their Node and Python dependencies installed. The complete Emil Kowalski skills repository is also downloaded as a pinned source snapshot, with all 15 skills installed for this project. Source revisions are recorded in [local-tools.json](local-tools.json).

## Screenshot to Code

Run these commands in separate terminals from this project folder:

```sh
cd tools/screenshot-to-code/backend
../../../.tools/poetry/bin/poetry run uvicorn main:app --reload --port 7001
```

```sh
cd tools/screenshot-to-code/frontend
pnpm dev
```

Open http://localhost:5173. Add an OpenAI, Anthropic, or Gemini API key in Settings or `backend/.env`. Replicate features require `REPLICATE_API_KEY` in that file. Optional Chromium screenshot preview was not installed. The backend uses local Python 3.12 through Poetry.

## Open AI Design Agent

Run these commands in separate terminals from this project folder:

```sh
cd tools/open-ai-design-agent/server
.venv/bin/uvicorn app.main:app --reload --port 8000
```

```sh
cd tools/open-ai-design-agent/client
node node_modules/next/dist/bin/next dev
```

Open http://localhost:3000. Configure `MU_API_KEY` in `tools/open-ai-design-agent/server/.env`; the current source reads it server-side. No API keys were added during setup.

The component library was built with `npm run build:lib`. The upstream lockfile omitted three macOS ARM64 binaries; these exact packages were installed locally without changing dependency manifests or lockfiles:

- `@next/swc-darwin-arm64@16.2.4`
- `lightningcss-darwin-arm64@1.32.0`
- `@tailwindcss/oxide-darwin-arm64@4.2.4`

Their package archives are retained in `.tools/native` for repair after a clean npm reinstall.

## Superdesign

The complete project-local skill is installed and available to Codex. Its CLI runs on demand with `npx --yes @superdesign/cli@latest` and requires login for design work. No login or generation was performed.

## Emil Kowalski skills

Installed October 12, 2026 from [emilkowalski/skills](https://github.com/emilkowalski/skills), commit `2d228630ba1446365f614a108cb8252f1feda202`.

- **Complete source:** `resources/history/sources/emilkowalski-skills/`, including all 29 tracked files (299,324 bytes, about 292 KiB). This is a source snapshot without Git history.
- **Installed skills:** all 15 directories under `.agents/skills/`: `emil-design-eng`, `animate`, `animate-expo`, `animation-performance`, `animation-vocabulary`, `apple-design`, `ask-sonner`, `break-ui`, `find-animation-opportunities`, `improve-animations`, `mobile-native`, `pick-ui-library`, `prototype`, `review-animations`, and `write-swift`.
- **Supporting material:** all eight skill reference files, plus the upstream README and performance cheatsheet retained in the snapshot.
- **Dependencies:** instruction-only installation; no npm packages, Python packages, browser downloads, application runtimes, or model weights added. Libraries mentioned in the guidance are recommendations for future projects, not installed dependencies.
- **Agent integration:** `AGENTS.md`, `resources/agents/craft-foundation.md`, the local `emilkowalski-skill` router, and the design, design-engineering, and motion catalogues now route to the installed skills.
- **Attribution:** upstream MIT license preserved in the source and copied into each installed skill.
- **Codex compatibility:** `pick-ui-library`, `prototype`, and `review-animations` preserve their upstream explicit invocation policy through `agents/openai.yaml`. Their unsupported `disable-model-invocation` frontmatter keys are removed from the installed copies; source copies remain unchanged.
- **Update record:** [source manifest](../history/sources/emilkowalski-skills.source.json) records every upstream file hash and each local adaptation. Compare revisions before refreshing; retain personal guidance in our agent Markdown files.

The skills will be available on the next turn. See the [complete task map](../agents/craft-foundation.md#installed-craft-foundation) for when to use each one.

## DialKit

The project-local development copy is in `tools/dialkit/`, based on upstream 2.0.1. Personal version `personal/v0.1.1` includes a Vue browser-timer type correction. Both lockfiles were installed using `npm ci`; no global runtime or browser installation was added.

From this workspace root, restart the local demo with:

```sh
npm --prefix tools/dialkit/example run dev -- --host 127.0.0.1 --port 3015 --strictPort
```

Open [DialKit](http://127.0.0.1:3015/). The server stays available while that terminal process runs. Additional upstream demos are [XY pad](http://127.0.0.1:3015/dialpad.html) and [easing](http://127.0.0.1:3015/easing.html).

On a fresh computer, use `npm ci` and `npm run build` inside `tools/dialkit/`, then `npm ci` inside `tools/dialkit/example/`. See [the personal source guide](../../tools/dialkit/PERSONAL.md) for version history and transfer instructions.

October 12 checks: library and example production builds passed, all 133 tests passed using `node --import tsx --test src/*.test.ts`, and full typecheck passed with 57 pre-existing Svelte warnings. The direct Node test invocation avoids the sandbox-blocked IPC pipe created by the npm script's tsx CLI; it runs the same test files. The React photo-stack demo was opened in Codex and its Title control verified against the rendered heading. The other examples and adapters did not receive interactive browser checks. Build warnings about CommonJS `import.meta` and example chunk size remain upstream observations.

## Verification

Both backends imported and returned successful HTTP responses. Both applications passed their production builds. AI generation requires provider credentials and was not tested. Temporary backend checks are stopped after verification.

For Emil's suite, source completeness and hashes are checked against the pinned GitHub tree; installed bodies and supporting references are checked against that snapshot, allowing only the three documented metadata translations. Skill metadata and local integration links are validated. These are installation checks, not a claim that every upstream recipe has been executed or verified against a live UI.
