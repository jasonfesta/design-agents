# Design MCP landscape

Checked October 12, 2026. This catalogue extends the earlier research into UI inspiration, expressive interfaces, motion libraries, and design engineering resources. Twelve providers beyond 60fps have documented MCP connections. The strongest additions for this workspace are Fglibs for discovering libraries, Inspo for website references, and Motion for animation implementation. Mobbin tools are already available in the current chat.

“Documented” means a provider publishes connection instructions or a connection endpoint. These are documentation checks, not successful authentication or end-to-end tool tests. The initial research pass did not install additional MCPs. Following Jason's later request, 11 server entries and the shared provider registries were added. See the [installation status](setup.md) for the exact changes, authentication gaps, and verification limits. No subscriptions were purchased.

## Reference libraries and discovery

| Provider | What it adds | Connection and access | Official source |
|---|---|---|---|
| Mobbin | Real product screens, user flows, and website sections. Closely matches the original reference-library research. | Hosted HTTP MCP with browser OAuth. Pro or Team access. Existing Mobbin tools are already exposed in this chat; no duplicate connection needed. | [MCP overview](https://mobbin.com/mcp), [official repository and setup](https://github.com/mobbin/mobbin-mcp-server) |
| Refero | Product screens and flows with structured descriptions, layouts, and UI/UX pattern metadata. | Hosted MCP with OAuth. Live research requires a paid plan. Its bundled design skill is distinct from the live data connection. | [MCP page](https://refero.design/mcp), [official plugin repository](https://github.com/referodesign/refero_skill) |
| Fglibs | Searches the curated directory of interaction libraries, components, and skills already found in the earlier research. Particularly relevant to finding unusual UI techniques and their implementations. | Hosted, read-only access to the public catalogue. The homepage's “Connect via MCP” dialog publishes the endpoint and says it cannot add, edit, or delete catalogue entries. | [Fglibs](https://fglibs.com/) |
| Inspo | Production website screenshots, extracted palettes and typography, DESIGN.md files, and reference components. Includes search, comparison, and layout-example tools. | Free hosted MCP without authentication; rate limited. Publishes setup for Codex and other clients. This is a separate product from Inspora. | [MCP setup](https://inspomcp.dev/mcp), [project and source](https://inspomcp.dev/about) |

60fps remains the specialist motion-reference source: interaction breakdowns and SwiftUI motion code. Its endpoint was added to Codex earlier in this chat; license authentication was pending at the last verified check. [60fps setup](https://60fps.design/mcp)

## Motion and component implementation

| Provider | What it adds | MCP route and access | Official source |
|---|---|---|---|
| Motion | Current animation documentation and example metadata; premium tools include CSS springs, transition editing, performance audits, and example source. | Hosted MCP servers. Documentation lookup is free; Motion+ unlocks premium capabilities through sign-in. Older local TOKEN-based setup is retired. | [Motion AI Kit setup](https://motion.dev/docs/ai-kit-install) |
| Planes | Tactile controls, carousels, text effects, and animated React interfaces from the earlier shortlist. | Uses the shared shadcn MCP with the `@useplanes` registry. Free components are public; Pro items use a license key. Despite homepage wording, the setup guide describes a registry connection through shadcn. | [Planes MCP guide](https://useplanes.com/components/mcp) |
| BoardUI | Application UI, dashboard components, charts, source, and usage examples. | Own local stdio server via `npx boardui@latest mcp`; also supports shadcn registry access. Free components need no license; Pro source is licensed. Its own server adds project setup and licensing tools. | [BoardUI MCP guide](https://www.boardui.com/mcp) |
| beUI | Animated React components and blocks; useful for expressive controls and interface motion. | Own hosted HTTP endpoint, with an explicit Codex setup command. Public library and paid Pro content are separate. | [beUI AI agent guide](https://beui.dev/docs/ai-agents), [library and access](https://beui.dev/) |
| Arc UI | Animated React components and blocks with usage, accessibility, motion, and implementation context. | Own hosted, read-only MCP. Browser sign-in with a free account; Pro source follows the account's plan. Also publishes shadcn registries. | [Arc AI and MCP guide](https://uiarc.dev/docs/ai) |
| Magic UI | Animated text, backgrounds, marquees, and other ready-made UI effects. | Official local MCP package, `@magicuidesign/mcp`; installed version 2.0.0. | [Magic UI MCP guide](https://magicui.design/docs/mcp), [official package repository](https://github.com/magicuidesign/mcp) |
| React Bits Pro | Animated components, marketing blocks, application UI, and page-building resources. | Uses the shared shadcn MCP with `@reactbits-starter` and `@reactbits-pro`. Requires a React Bits license; available content depends on plan. | [React Bits Pro MCP guide](https://pro.reactbits.dev/docs/mcp) |
| 21st | Community component discovery, source and prompts, plus optional UI generation. Formerly called Magic MCP; separate from Magic UI. | Own MCP. Builder includes component search through MCP and CLI; AI generation has a separate paid tier/credits. Check current pricing rather than older Magic MCP offers. | [21st plans and MCP overview](https://21st.dev/plans) |

## Shared registry connection

The [official shadcn MCP](https://ui.shadcn.com/docs/mcp) can browse, search, and install from compatible registries configured in a project's `components.json`. Planes and React Bits explicitly document this route; BoardUI offers it as an alternative to its own server. This could keep the workspace lighter than adding a separate local server for every library.

Registry compatibility does not establish a provider's own standalone MCP. A usable registry index and any required credentials still need configuration. The shadcn documentation explains [registry prerequisites](https://ui.shadcn.com/docs/registry/mcp).

## Verified hosted endpoints

These endpoints are documented by their providers. Installation and authentication states are tracked separately in the [installation record](setup.md).

| Provider | MCP endpoint | Verification source |
|---|---|---|
| 60fps | `https://mcp.60fps.design/mcp` | [Setup page](https://60fps.design/mcp), Editors tab |
| Mobbin | `https://api.mobbin.com/mcp` | [Official repository](https://github.com/mobbin/mobbin-mcp-server) |
| Refero | `https://api.refero.design/mcp` | [Official plugin repository](https://github.com/referodesign/refero_skill) |
| Fglibs | `https://fglibs.com/mcp` | [Homepage](https://fglibs.com/), Connect via MCP dialog |
| beUI | `https://mcp.beui.dev/mcp` | [Official agent guide](https://beui.dev/docs/ai-agents) |
| Arc UI | `https://uiarc.dev/api/mcp` | [Official MCP guide](https://uiarc.dev/docs/ai) |
| Inspo | `https://inspomcp.dev/api/mcp` | [Official repository](https://github.com/Nutlope/inspo) |
| Motion | `https://mcp.motion.dev` | [Official AI Kit setup](https://motion.dev/docs/ai-kit-install) |
| Motion+ | `https://mcp.motion.dev/plus` | [Official AI Kit setup](https://motion.dev/docs/ai-kit-install) |
| 21st | `https://21st.dev/api/mcp` | [Official MCP repository](https://github.com/21st-dev/magic-mcp); requires `x-api-key` |

No endpoint has been guessed from a product's name. Planes uses `https://useplanes.com/api/registry/{name}` through shadcn; React Bits uses the starter and pro registries recorded in the installed catalogue configuration.

## Advertised support and unresolved candidates

- **Kobra:** its [pricing page](https://kobra.systems/pricing) includes an MCP server in the paid offering. A separate comparison article contains conflicting language, so connection instructions and endpoint need verification before treating it as ready to connect.
- **Stele:** its [homepage](https://stele.so/) advertises MCP for searching, reading, and writing captured components. Public setup and endpoint were not verified.
- **Inspora, Land-book, Reelfolio, Brand Guidelines, Backgrounds Supply, Recent, Affect UI, Evil Charts, and Transitions.dev:** no provider-owned MCP setup was confirmed in this search pass. This is not a claim that none exists. Retain them as browser/reference sources until an official connection guide is found.
- Community aggregators such as [Kroma MCP](https://github.com/thatcreativetayo/kromamcp) and [Design Inspiration MCP](https://github.com/notsointresting/design-inspiration-mcp) mention several galleries. They are separate projects, not evidence that those galleries publish or endorse an MCP. Review their implementation and dependencies before considering installation.

## Initial research recommendation

This was the initial staged recommendation. Jason subsequently requested all documented connections; the [installation record](setup.md) supersedes this section as the source for actual setup status.

1. Keep using the existing Mobbin tools for real product screens and flows, and complete the pending 60fps authentication for motion references.
2. Add Fglibs for library discovery and Inspo for website art direction. These cover distinct gaps in the current reference workflow.
3. Add Motion for animation guidance and implementation tools.
4. Configure one shadcn MCP in an actual UI project, then add only the registries needed for that project, starting with Planes and BoardUI.
5. Evaluate Refero against Mobbin on the same brief before paying for overlapping coverage. Add beUI, Arc, Magic UI, React Bits Pro, or 21st when a specific design needs their catalogue.

This order is a recommendation based on the workspace's preference for lightweight setup and the earlier interest in tactile controls, shaders, and expressive motion. Existing Figma and Superdesign capabilities remain part of the design workflow; this catalogue focuses on new reference and component sources.
