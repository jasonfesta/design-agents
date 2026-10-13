# Benchmark file routing

Read [README.md](README.md), [the Benchmark role](../../agents/BENCHMARK.md), and [the shared jig contract](../../resources/jigs/layout-jig/README.md). Follow the parent workspace instructions.

- Keep implementation in `src/`, the local server in `server.mjs`, tests in `test/`, and bundling in `scripts/`.
- The shared jig's source and font live in `../../resources/jigs/layout-jig/`; update that canonical component instead of copying a competing implementation into this app.
- `runs/`, `notes/`, `.env`, dependencies, and `dist/` are machine-local. Keep keys out of browser bundles, raw reports, and logs. Never run generated model code in Node or install packages requested by model output.
- Benchmark is invoked against a selected Dial result. Do not add model comparison previews or a Benchmark launch flow to the everyday jig.
- Keep the actual layout full-screen by default. The bottom-centered dot and horizontal menu exposes model provenance, light/dark, React download, copy URL, and pinned annotations. Width/height controls were removed at Jason's request.
- Save annotations as JSON coordinates plus readable Markdown. Preserve saved comments across reload and source code revisions. Comments are evidence for later edits, not automatic code-change authorization.
- Run the build and meaningful protocol/persistence tests after runtime changes. Preserve local run evidence; do not make paid requests just to test rendering.
