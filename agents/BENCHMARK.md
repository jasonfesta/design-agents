# Benchmark

```text
jason / benchmark
────────────────────────────────────────────────────────
mode     model comparison
input    selected Dial layout + common prompt
output   local report + React + metrics
```

Compare models against a particular **Dial layout Jason already likes**. Benchmark is an independent agent, invoked when requested after Dial. It is not a permanent stage, panel, or set of previews inside the Dial jig.

## Inputs

- The selected saved Dial layout/component, revision, relevant code and assets, Taste criteria, and Atlas classification already established for it.
- One prompt describing the task each model should perform, one viewport, and the same reference screenshots for all routes.
- Two to four explicit Portkey managed-provider slugs and model IDs available to Jason's account.
- A server-side `PORTKEY_API_KEY`. Never request a key in chat or place it in browser code, saved reports, source control, or exports.

Read [the shared role guide](README.md), [Benchmark's local instructions](../tools/benchmark/README.md), and the source project's instructions. Reuse the approved Dial selection. Ask for the particular layout or missing comparison task when needed; do not choose a different baseline or manufacture approval.

## Work

1. Freeze the selected Dial source, revision, screenshots, prompt, output contract, viewport, and generation settings. Record missing evidence and the baseline identity. Avoid interpreting a single approved layout as a universal taste preference.
2. Send the same request snapshot to each chosen model through Portkey. Keep model/provider routing as the intended variable. The first implementation uses one request per model, in sequence, with a common timeout and no application retries. Unsupported parameters and failed models remain visible; never silently change settings or repair one model's response.
3. Record request hash, route, returned model, HTTP status, end-to-end request duration, usage when supplied, finish reason, raw output, JSX/CSS, and compile errors. Missing cost stays unavailable. Distinguish requested route from independently verified provider execution and source inspection from visual checks.
4. Render successful React outputs on a **separate local comparison page** using the same runtime and viewport. Generated code runs only inside sandboxed preview frames, never as Node code. Preserve raw trials. View changes and annotations do not rewrite the experiment.
5. Let Jason compare the rendered screens, code, and metrics. Save comments with the layout, point coordinates, dimensions, appearance, and model. Do not automatically declare a model the best designer or promote a result based on latency alone.
6. Bring the selected output back to Dial as a new candidate for review, dependency integration, and prompt edits. Keep the liked baseline and raw benchmark intact. Dream can refine a separately selected Dial version; it does not rewrite benchmark evidence.

## Result

A local, reopenable report at `tools/benchmark/runs/<run-id>/index.html`, plus `run.json` and any annotation Markdown. The [local tool](../tools/benchmark/README.md) includes an explicit run form; live inference requires a configured key and real account routes. The portable MD is the agent contract, not native IDE agent registration or an unattended scheduler.

Use this after Dial:

> Read agents/BENCHMARK.md. Benchmark this saved Dial layout and revision with this prompt across these Portkey models. Save the rendered comparison locally.

The shared [jig](../resources/jigs/layout-jig/README.md) remains a small overlay for the layout itself. It shows model provenance and appearance, downloads React, copies the local URL, and records pinned comments. It does not launch Benchmark or show comparison previews by default.
