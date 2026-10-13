# Agents and workspaces

[Home](../README.md) · [MCPs](mcps.md) · [Skills](skills.md) · [Evidence labels](README.md)

Tools for exploring, designing, and building products. Sources reviewed September 24, 2026. Product access and AI usage may be paid even when a repository is open source.

| Resource | Type | Design task |
| --- | --- | --- |
| [Paper](#paper) | Design workspace | Work with editable layouts and connected agents. |
| [Pen.dev](#pendev) | Agent canvas | Explore and refine software interfaces on a canvas. |
| [Superdesign](#superdesign) | Design service with a skill | Develop interface directions with a coding assistant. |
| [Onlook](#onlook) | Visual development workspace | Edit a React interface visually and through AI. |
| [Screenshot to Code](#screenshot-to-code) | Generation application | Turn a visual reference into a code starting point. |
| [Open AI Design Agent](#open-ai-design-agent) | Creative agent application | Explore posters, social assets, and brand production. |
| [Muse and design specialists](#muse-and-design-specialists) | Agent instructions | Coordinate design tokens, direction, interaction, and critique. |
| [Open Design](#open-design) | Local-first workspace | Produce editable prototypes and creative deliverables. |
| [Dyad](#dyad) | Local app builder | Iterate on a working product prototype. |
| [OpenPencil projects](#openpencil-projects) | Design editors | Work with agents on editable vector documents. |
| [Framer](#framer) | Native agent connection | Work on canvas, components, and CMS. |
| [Drawing to UI](#drawing-to-ui) | Prototype references | Study sketch-to-interface workflows. |

## Paper

**Source reviewed · Paper team**

Use an HTML/CSS-based design canvas with an agent that can read and write the design through [Paper MCP](mcps.md#paper). Useful for editable explorations and carrying layouts into implementation.

Requires Paper Desktop and a compatible connected assistant. A connection does not establish implementation fidelity; inspect the resulting layout and code.

[Product and setup](https://paper.design/docs/mcp)

## Pen.dev

**Source reviewed · Pen.dev team**

An agent canvas for designing interfaces, refining them manually, and exporting work. The product documents MCP access and HTML export.

Requires the application and an available model connection or supported subscription. Check current access and setup on the product site. Tom Krcha is listed with Pen.dev at the [September event](../events/2026-09-29-san-francisco.md); the specific demo has not been confirmed.

[Product and setup](https://www.pen.dev/)

## Superdesign

**Source reviewed · superdesigndev**

A service and companion skill for creating and iterating on interface designs within a coding workflow.

Requires a compatible assistant, its CLI, and service login. Earlier local research installed the skill; no authenticated generation run was completed. The current repository is distinct from the older archived extension.

[Source and setup](https://github.com/superdesigndev/superdesign-skill)

## Onlook

**Source reviewed · onlook-dev**

A visual editing environment for React applications. Useful when a designer wants to inspect and change the interface alongside its implementation.

Requires a compatible project and the upstream development or hosted setup. Confirm current framework support before bringing an existing application into the workflow. No local DxA workflow test recorded.

[Source and setup](https://github.com/onlook-dev/onlook)

## Screenshot to Code

**Source reviewed · abi**

Converts screenshots and other visual input into an initial interface implementation. Useful for reconstruction and exploration; interactive behavior still needs design and review.

Local setup requires frontend and backend dependencies and a supported model provider key. Earlier local research passed production-build and backend checks, but did not test generation. Use visual references you are entitled to work with.

[Source and setup](https://github.com/abi/screenshot-to-code)

## Open AI Design Agent

**Source reviewed · Anil-matcha**

A community creative application for work such as posters, social graphics, and brand assets. It is a separate project, not an OpenAI product.

Self-hosting requires frontend/backend dependencies and the provider configuration documented upstream. Earlier local research passed build and backend checks, but did not test generation.

[Source and setup](https://github.com/Anil-matcha/Open-AI-Design-Agent)

## Muse and design specialists

**Source reviewed · simota · Agent skill collection**

[Muse](https://github.com/simota/agent-skills/tree/main/muse) is a named design-system specialist in this collection. Use it to reason about tokens, spacing, and visual consistency. It is an instruction-based agent role, not a standalone canvas application.

The same [repository](https://github.com/simota/agent-skills) includes Vision for creative direction, Frame for design-to-code work, Echo for persona-based review, and Flow for motion. Inspect current role definitions and select only the ones needed. Synthetic critique does not replace user research.

This identifies one concrete Muse resource relevant to DxA; the name is shared by unrelated products.

## Open Design

**Source reviewed · nexu-io · Design workspace**

A local-first workspace for prototypes and creative deliverables driven by coding agents. Follow its current supported-client and model-provider setup; local software does not make model usage free.

[Source](https://github.com/nexu-io/open-design)

## Dyad

**Source reviewed · dyad-sh · App builder**

A local app-building environment for moving from a design idea to a working interface. Check supported providers, project requirements, and the distinction between open-source and paid capabilities.

[Source](https://github.com/dyad-sh/dyad)

## OpenPencil projects

**Source reviewed · Separate projects**

- [open-pencil/open-pencil](https://github.com/open-pencil/open-pencil): a design editor with a programmable document engine, CLI, and MCP. Useful for editable vector documents and automated inspection.
- [ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil): a separate agent-oriented vector design tool with its own runtime and MCP workflow.

Do not mix their package names, setup instructions, or file-format claims. Confirm the exact project before connecting an assistant.

## Framer

**Source reviewed · Framer · Native agent connection**

Framer's current external-agent workflow gives connected assistants access to canvas, components, and CMS. Its official documentation says a separate MCP server is not required. Changes and publication should remain separate decisions.

[Official connection guide](https://www.framer.com/agents/external/) · [MCP distinction](mcps.md#framer-connections)

## Drawing to UI

**Source reviewed · Historical prototype references**

[tldraw Make Real](https://github.com/tldraw/make-real) demonstrates drawing-to-interface generation. That repository is archived; treat it as a reference, not an actively maintained default. It credits [SawyerHood/draw-a-ui](https://github.com/SawyerHood/draw-a-ui) as its origin.

Inspect the current SDK, model access, and license before adapting either project.

## Related directories

[Creative media tools](creative-tools.md) · [Graphics agents](shaders.md#agent-tools-for-graphics) · [Font agents](typography.md#font-agents-and-production-tools) · [Complete skill catalogue](skills.md)
