# Benchmark workbench

A local React comparison tool for the [Benchmark agent](../../agents/BENCHMARK.md). Start from a saved Dial layout you like, freeze its source and a change prompt, then compare two to four models through Portkey. The shared jig has its own preview route; it contains no benchmark controls.

## Run locally

Use Node 22 or newer. From this folder:

```sh
npm ci
npm run dev
```

Open [the jig preview](http://127.0.0.1:4317/?jig=1) or [the separate Benchmark page](http://127.0.0.1:4317/). The server listens on loopback only. `BENCHMARK_PORT` can change the port.

To run actual models, copy `config.example.txt` to `.env`, set `PORTKEY_API_KEY` locally, and restart. Add **managed provider slugs**, beginning with `@`, and exact model IDs from your Portkey account in the form. Provider credentials live in Portkey's configured integration. The key stays server-side; it is never a form input. No model names, credentials, or paid runs are preconfigured.

## Design project and file routing

Jason requested a local page in this workspace. This tool's root is `tools/benchmark/`; it can travel with the kit. Interface category: comparison workbench; shared UI font: Google Sans Flex. No personal taste style is inferred from this test.

```text
tools/benchmark/
  server.mjs                 Local API and report saving
  src/                       React interface and benchmark protocol
  scripts/                   Local bundling
  test/                      Protocol and persistence checks
  runs/<run-id>/             Private local runs; excluded from Git and kit export
    index.html               Standalone report with embedded runtime and font
    run.json                 Frozen request, raw results, code, and measurements
    annotations.json         Pin records, when saved
    annotations.md           Readable comments, when saved
  notes/                     Private jig preview comments; excluded from export
    preview.json             Pin positions and comments
    preview.md               Same comments in Markdown
```

The canonical shared UI is [resources/jigs/layout-jig/](../../resources/jigs/layout-jig/README.md). Product projects should reuse it and supply their own model, download payload, URL, and annotation persistence. The preview's shader is a demonstration, not a generated Dial baseline. It uses Paper's Mesh Gradient from the existing [shader resources](../../resources/history/workspace-sources/dxa/resources/shaders.md#backgrounds-and-procedural-motion).

## Comparison contract

Import or paste the liked layout's source and direction, identify its revision, attach up to three screenshots, and enter one prompt. The exact messages and generation settings are hashed and saved. One sequential request per route avoids automatic repair and application retries; this is a single-sample comparison, not a statistical ranking. Verify account-side routing, fallback, retry, and cache policies separately. Cache refresh is requested. Any returned model mismatch remains visible.

The current output contract is self-contained `function App()` JSX and plain CSS, with React available globally. External packages/imports are rejected at compilation. Original TypeScript, Tailwind, or multi-file code can be supplied as reference context but must be adapted by each model to the same output contract. Code downloads are a single React module; external project integration belongs to Dial.

Timing measures completion of the HTTP response, not first-token latency or rendering performance. Token counts appear only when returned. Cost is explicitly unavailable. Compile success does not prove visual fidelity, interactivity, or accessibility. The preview mount signal is a diagnostic, not a quality score.

The local page saves after each trial. Stopping the server marks an unfinished run interrupted on the next start; it never silently resubmits model calls. An API failure is saved alongside successful models. Raw results stay unchanged when adding annotations. Open each run's `index.html` directly for offline review. Offline annotation edits use browser storage and download Markdown; export them to carry those edits elsewhere. Copy URL copies a local address, not a published or externally accessible link.

## Preview boundary

Generated JSX is compiled without execution on the server. Preview frames allow scripts but not same-origin access, popups, forms, or top navigation; their CSP blocks fetches and external resource loading. Keys never enter the frame. This is a local review harness, **not a hardened execution service for hostile code**: a synchronous infinite loop can still hang a browser frame, and iframe self-navigation is not completely contained across browsers. Inspect unexpected code before choosing “Render React previews.”

## Verification

```sh
npm run build
npm test
```

The first implementation is verified with synthetic provider responses; an authenticated live Portkey run needs your key and selected routes. The jig preview uses actual WebGL with reduced-motion and hidden-tab pausing. No deployment or GitHub publication is part of this tool.

## API references

- [Portkey headers and managed-provider routing](https://portkey.ai/docs/api-reference/inference-api/headers)
- [Portkey chat completions](https://portkey.ai/docs/api-reference/inference-api/chat)
- [esbuild API](https://esbuild.github.io/api/)
- [Paper Mesh Gradient](https://shaders.paper.design/mesh-gradient)

Checked October 13, 2026. Package versions are pinned in `package-lock.json`; React and Paper retain their upstream licenses in their installed packages and bundled license comments.
