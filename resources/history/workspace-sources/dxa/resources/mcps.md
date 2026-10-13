# MCPs

[Home](../README.md) · [Agents](agents.md) · [Skills](skills.md) · [Evidence labels](README.md)

Connections that let an assistant work with design files, components, and running interfaces. The first eight entries and additions explicitly labeled **source reviewed** were checked against primary sources on September 24, 2026. Prior-research entries are labeled separately. None is a DxA connection or workflow test.

| Connection | Maintainer | What it connects |
| --- | --- | --- |
| [Figma](#figma) | Official | Design context and native canvas workflows |
| [Paper](#paper) | Official | Editable HTML/CSS-based designs |
| [Webflow](#webflow) | Official | Site design and CMS |
| [Penpot](#penpot) | Official project | Open-source design files |
| [shadcn/ui](#shadcnui) | Official project | Component registries |
| [Framelink](#framelink) | Community | Figma context for implementation |
| [Figma Console](#figma-console) | Community, Southleft | Figma inspection and automation |
| [Playwright](#playwright) | Official project, Microsoft | Browser interaction and inspection |
| [Canva](#canva) | Official | Design creation, editing, assets, and export |
| [TalkToFigma](#talktofigma) | Community, Grab | Read/write access through a Figma plugin |
| [OpenPencil](#openpencil) | Two separate projects | Editable design documents |
| [ShaderVine](#shadervine) | Project-maintained | Shader authoring and export |
| [Typography](#typography) | Community, Standard Beagle | Font metrics and typography tooling |
| [Framer connections](#framer-connections) | Official native bridge; community MCP alternative | Canvas, components, and CMS |

## Figma

Read layouts, components, and variables; use supported tools to create or modify native canvas content. Code Connect can help agents reuse an existing component implementation.

Requires a Figma account, file access, and a supported MCP client. Remote and desktop servers have different features and limits. Follow Figma's current setup and skills guidance for canvas writes.

[Documentation and setup](https://developers.figma.com/docs/figma-mcp-server/)

## Paper

Read and write Paper designs, generate layouts, and use selected frames as implementation context.

Requires Paper Desktop and a compatible assistant. Follow the application's connection flow; current documentation uses the Paper CLI for several clients. Do not assume older local HTTP examples describe the current recommended setup.

[Documentation and setup](https://paper.design/docs/mcp)

## Webflow

Connect an assistant to site elements, styles, components, variables, and CMS content.

Requires access to the relevant Webflow workspace. Capabilities depend on role and plan; certain canvas operations require the Designer and Bridge App. Publishing is a separate action from preparing a design.

[Documentation and setup](https://developers.webflow.com/mcp/reference/overview)

## Penpot

Connect an assistant to editable design files in the Penpot environment.

Requires the MCP server and the Penpot integration described by the project. Follow its current installation instructions and check the supported version of the application.

[Project documentation and setup](https://github.com/penpot/penpot/blob/develop/docs/mcp/index.md)

## shadcn/ui

Search component registries and bring available components into an application. Useful for building with concrete UI primitives.

Requires an MCP-compatible client and the relevant registry/project configuration. It supplies component resources, not access to a design canvas. Private registries may need credentials.

[Documentation and setup](https://ui.shadcn.com/docs/mcp)

## Framelink

Provides Figma layout information to coding agents for design-to-code work.

Requires the server setup and Figma API access described upstream. This is an independent integration; do not assume it exposes the official server's canvas-write capabilities.

[Source and setup](https://github.com/GLips/Figma-Context-MCP)

## Figma Console

Southleft's integration for design-system extraction, creation, and debugging in Figma.

Setup varies by connection mode and may involve a desktop bridge or plugin. Check the upstream capability table for the chosen mode before promising read or write operations.

[Source and setup](https://github.com/southleft/figma-console-mcp)

## Playwright

Lets an assistant navigate and interact with a browser, inspect page structure, and capture evidence for interface review.

Requires the runtime and browser setup documented upstream. Browser inspection supports QA but does not by itself prove visual quality or accessibility compliance.

[Source and setup](https://github.com/microsoft/playwright-mcp)

## Canva

**Source reviewed · Official**

Canva's current MCP documentation describes design creation and editing, library search, assets and brand kits, exports, and comments. It is not merely a documentation-search MCP. Access is authenticated, and supported operations depend on permissions and service limits.

Use the end-user connector instructions linked from the documentation for a personal assistant; the developer guide also covers teams building integrations.

[Documentation](https://www.canva.dev/docs/apps/mcp/)

## TalkToFigma

**Source reviewed · Community integration maintained at Grab**

Connect an assistant to Figma through the project's plugin and communication bridge. Inspect which read/write tools are available and keep the required plugin connected. The older sonnylazuardi repository redirects to Grab.

[Source and setup](https://github.com/grab/cursor-talk-to-figma-mcp)

## OpenPencil

**Source reviewed · Project-maintained integrations**

[open-pencil/open-pencil](https://github.com/open-pencil/open-pencil) exposes document inspection, editing, and export through its MCP. Scope filesystem access to the intended project.

[ZSeven-W/openpencil](https://github.com/ZSeven-W/openpencil) is a different product with its own MCP and agent workflow. Read the matching repository; these integrations are not interchangeable.

## ShaderVine

**Source reviewed · Project-maintained**

Shader tooling with an MCP surface for creating and working with effects. Follow the repository's current server and runtime instructions; an MCP connection alone does not validate the visual result.

[Source](https://github.com/jonradoff/shadervine) · [Graphics research](shaders.md#agent-tools-for-graphics)

## Typography

**Prior research · Standard Beagle**

The local font-tool study identified a typography CLI/MCP for font metrics, axes, subsets, scales, and fallbacks. It is not an agent that draws new glyph outlines. Recheck the package's current availability and setup before installation.

[Source](https://github.com/standardbeagle/standardbeagle-tools/tree/main/packages/typography) · [Font research](typography.md)

## Framer connections

**Source reviewed · Official native connection and separate community alternative**

Start with [Framer's external-agent guide](https://www.framer.com/agents/external/), which explicitly says a separate MCP server is not required. Do not describe that native connection as a community MCP.

The marketplace also lists an independent [MCP plugin](https://www.framer.com/marketplace/plugins/446/), whose listing states it is not an official Framer plugin. Use its own setup and permission model if choosing that route.

## Find additional integrations

[Figma's MCP catalog](https://www.figma.com/mcp-catalog/) is a discovery source, not one server that installs everything. Check the named provider, requested permissions, client compatibility, and whether a tool reads, writes, exports, or publishes.

Use a duplicate design file or a branch for an initial write test. Keep API keys outside repository files. Ask before publishing a site, deleting content, or exposing private design material.
