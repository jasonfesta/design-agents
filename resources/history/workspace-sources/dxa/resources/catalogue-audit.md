# Catalogue coverage

[Home](../README.md) · [Skill catalogue](skills.md) · [Credits](credits.md)

## September 24, 2026 audit

We inspected the README, all 157 skill-directory metadata records, and their SKILL.md descriptions in [podo/design-agent-skills](https://github.com/podo/design-agent-skills). Upstream main at the audit: [c3fac4c](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8).

The snapshot contains **151 external resource records and six router guides**, not 175 distinct tools. DxA now accounts for every record: all 151 external entries are retained with original descriptions and project links. The six routers are credited below rather than installed or copied.

This is catalogue-level coverage, not an implementation audit of every external project. Multiple skills point to the same repository. We retain their distinct design jobs without counting them as separate repositories.

## Section coverage

| DxA section | External records retained |
| --- | --- |
| [Interface and brand](skills.md#interface-and-brand) | 13 |
| [Components and platforms](skills.md#components-and-platforms) | 20 |
| [Interaction and navigation](skills.md#interaction-and-navigation) | 12 |
| [Figma and design to code](skills.md#figma-and-design-to-code) | 9 |
| [Design engineering](skills.md#design-engineering) | 2 |
| [Accessibility and quality](skills.md#accessibility-and-quality) | 10 |
| [Critique and design operations](skills.md#critique-and-design-operations) | 14 |
| [Motion and animation](skills.md#motion-and-animation) | 11 |
| [Creative coding and media](skills.md#creative-coding-and-media) | 12 |
| [Diagrams and wireframes](skills.md#diagrams-and-wireframes) | 8 |
| [Data visualization](skills.md#data-visualization) | 6 |
| [Presentations](skills.md#presentations) | 8 |
| [Product strategy](skills.md#product-strategy) | 10 |
| [User research](skills.md#user-research) | 2 |
| [Content design](skills.md#content-design) | 3 |
| [Email](skills.md#email) | 1 |
| [Terminal interfaces](skills.md#terminal-interfaces) | 2 |
| [Platform collections](skills.md#platform-collections) | 8 |

**Total: 151 of 151 external records.** Broader packages are included for their design-relevant parts. For example, product positioning and onboarding belong here; lead enrichment and sales automation do not become DxA recommendations just because they share a package.

## Upstream navigation guides

- [accessibility-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/accessibility-catalogue)
- [content-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/content-catalogue)
- [design-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/design-catalogue)
- [design-engineering-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/design-engineering-catalogue)
- [figma-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/figma-catalogue)
- [motion-catalogue](https://github.com/podo/design-agent-skills/tree/c3fac4cb09ba2ac92ebf0b35572b9e85e06db4f8/skills/motion-catalogue)

## Corrections and boundaries

- The upstream Vercel record points at the Skills CLI. DxA links [agent-skills](https://github.com/vercel-labs/agent-skills) for UI guidance and credits the [installer](https://github.com/vercel-labs/skills) separately.
- The Figma record now links current [MCP and agent documentation](https://developers.figma.com/docs/figma-mcp-server/), not an assumed permanent package inventory.
- fal setup uses the current [community skills repository](https://github.com/fal-ai-community/skills); old package paths are not reproduced as commands.
- Muse is identified as the design-system role in [simota/agent-skills](https://github.com/simota/agent-skills), not conflated with similarly named products.
- Framer's [native agent connection](https://www.framer.com/agents/external/) and its community MCP plugin are separate entries.
- Source rankings, stars, claimed accuracy, compatibility promises, and marketing superlatives were not carried over.
- The standalone Agents365 Excalidraw repository returned 404. Its record is retained and points to the maintainer's [365-skills collection](https://github.com/Agents365-ai/365-skills), with the availability issue disclosed.
- Some original records now resolve to the same project: apple-hig-skills redirects to hig-doctor. Historical catalogue names are retained for traceability, not counted as unique tools.
- The local shader, glass, font, and typography research adds resources beyond this 151-record audit. See the [local study register](local-studies.md).

Descriptions and navigation are original DxA editorial work. Upstream discovery data is credited with the [original MIT notice](upstream-license.md). Linked implementations retain their own licenses.

## Link check

The initial external-link pass checked 261 distinct destinations: 255 returned successful responses, one repository returned 404, and five service pages rejected automated HEAD requests or could not be resolved. The unavailable repository was replaced with its maintainer's collection. Canva was separately readable through its documentation page; Krea, Adobe Firefly, Ideogram, and Midjourney remain prior-research references rather than newly verified services. HTTP availability is not a capability or workflow test.
