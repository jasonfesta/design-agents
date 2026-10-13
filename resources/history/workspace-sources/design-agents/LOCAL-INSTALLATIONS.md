# Local design tools

All three repositories are cloned locally. Superdesign is installed at `.agents/skills/superdesign`. The two applications have their Node and Python dependencies installed. Source revisions are recorded in `local-installations.json`.

## Screenshot to Code

Run these commands in separate terminals from this project folder:

```sh
cd screenshot-to-code/backend
../../.tools/poetry/bin/poetry run uvicorn main:app --reload --port 7001
```

```sh
cd screenshot-to-code/frontend
pnpm dev
```

Open http://localhost:5173. Add an OpenAI, Anthropic, or Gemini API key in Settings or `backend/.env`. Replicate features require `REPLICATE_API_KEY` in that file. Optional Chromium screenshot preview was not installed. The backend uses local Python 3.12 through Poetry.

## Open AI Design Agent

Run these commands in separate terminals from this project folder:

```sh
cd Open-AI-Design-Agent/server
.venv/bin/uvicorn app.main:app --reload --port 8000
```

```sh
cd Open-AI-Design-Agent/client
node node_modules/next/dist/bin/next dev
```

Open http://localhost:3000. Configure `MU_API_KEY` in `Open-AI-Design-Agent/server/.env`; the current source reads it server-side. No API keys were added during setup.

The component library was built with `npm run build:lib`. The upstream lockfile omitted three macOS ARM64 binaries; these exact packages were installed locally without changing dependency manifests or lockfiles:

- `@next/swc-darwin-arm64@16.2.4`
- `lightningcss-darwin-arm64@1.32.0`
- `@tailwindcss/oxide-darwin-arm64@4.2.4`

Their package archives are retained in `.tools/native` for repair after a clean npm reinstall.

## Superdesign

The complete project-local skill is installed and available to Codex. Its CLI runs on demand with `npx --yes @superdesign/cli@latest` and requires login for design work. No login or generation was performed.

## Verification

Both backends imported and returned successful HTTP responses. Both applications passed their production builds. AI generation requires provider credentials and was not tested. Temporary backend checks are stopped after verification.
