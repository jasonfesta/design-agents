# Benchmark and Portkey

[Benchmark](../../agents/BENCHMARK.md) is an independent agent used against a saved Dial layout Jason likes. The runnable [local workbench](../../tools/benchmark/README.md) owns configuration, exact request/response handling, saved report structure, and verification. The [shared jig](../jigs/layout-jig/README.md) remains a separate layout review surface.

Portkey's [header reference](https://portkey.ai/docs/api-reference/inference-api/headers) documents server-side API authentication, managed-provider slugs, tracing, request timeout, and cache refresh. Its [chat API](https://portkey.ai/docs/api-reference/inference-api/chat) supplies the shared chat-completions interface. These were checked October 13, 2026. Available models and account policies must be verified in the actual account; no specific model set is implied by this record.

The first implementation saves each comparison locally and supports self-contained JSX/CSS output. It does not implement statistical model ranking, automatic cost estimates, native IDE agent registration, or arbitrary project dependency installation. Synthetic tests establish local behavior; live inference still requires the user's configured credentials and selected routes.
