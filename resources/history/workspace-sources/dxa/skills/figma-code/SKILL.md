---
name: figma-code
description: Implement an existing design using its components and tokens, or reconcile a mismatch between a design and running code.
license: MIT
---

# Figma and code

Establish which design and code sources are authoritative for this task. Inspect the selected frame, tokens, component mappings, assets, and repository conventions before building.

Use the connected design tool's documented workflow. [Figma MCP](https://developers.figma.com/docs/figma-mcp-server/) can provide design context; use actual component mappings when available.

Map existing components before introducing new ones. Preserve intentional brand and platform choices. Record missing assets or mappings rather than inventing them silently.

Implement the behavior as well as appearance: relevant loading, empty, error, success, focus, and responsive states. Keep output editable in the requested medium.

Compare the running result with the source at relevant sizes. Check the main user task and keyboard behavior. Report remaining mismatches and distinguish implementation checks from visual inspection. A code-to-canvas request should produce editable design structure, not merely a screenshot.
