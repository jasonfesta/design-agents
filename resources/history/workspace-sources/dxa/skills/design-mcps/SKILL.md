---
name: design-mcps
description: Select and verify an MCP connection for a designer's canvas, component, or browser workflow.
license: MIT
---

# Design MCPs

Identify the artifact and the operation needed: reading context, editing a canvas, retrieving components, or inspecting a running interface.

Consult the chosen integration's current documentation. [Figma](https://developers.figma.com/docs/figma-mcp-server/), [Paper](https://paper.design/docs/mcp), and [shadcn/ui](https://ui.shadcn.com/docs/mcp) serve different jobs. Distinguish official and community servers, desktop and remote modes, and actual tools exposed in the current client.

State the account, application, and client requirements before setup. Never infer write capability from a successful read or claim a connection from a catalogue listing.

Within the user's requested setup, verify a small operation against the intended file or project. Read first when that answers the question. For an authorized edit, make a small reviewable change and inspect its result. If the tool is unavailable, report the specific missing connection and the official setup source.

Report what was checked, the environment, and any untested capability. Keep secrets out of the report.
