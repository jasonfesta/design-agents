# Design xAgents

Repository and editorial plan. Prepared September 24, 2026.

Scope update, September 24: the original small-directory target below is superseded. The current edition retains all 151 external records from the audited upstream catalogue and adds local shader, glass, WebGL typography, font, MCP, and creative-tool research. Use the [resource directory](resources/README.md) and [coverage audit](resources/catalogue-audit.md) as the current scope; the remainder of this document preserves the initial planning rationale.

Implementation note: the first source-reviewed directory, event page, original skills, and workflow recipes are now prepared. The README and linked directories are the current public copy. The recipes have not been run as end-to-end third-party workflow tests. This document preserves the planning rationale.

## Positioning

Design xAgents is the event series. DxA is its short name. The repository is the ongoing resource guide for that community: a place for designers to discover agents, connect tools, and learn from the work shared at events.

Proposed README opening:

> Design xAgents brings designers together to share what they are building with agents.
>
> This is the resource guide for DxA events. Keep track of agents, MCPs, and skills for design, explore workflows from the community, and find what to try next.
>
> Rooted in Silicon Valley product craft. Open to designers everywhere.

Short repository description:

> Agents, MCPs, and skills for designers. From the Design xAgents events and community.

The guide is free to read and contribute to. Linked products may require accounts, subscriptions, or API usage fees. Installation is a later convenience for compatible assistants; the directory is useful on its own.

## What the research tells us

Reviewed the current DxA draft; the earlier landscape scan; the catalogue, design engineering, MCP, fal, Remotion, and local application installation reviews; the original event idea; and adjacent design-team research. These are discovery and setup records, with uneven hands-on coverage.

| Research | Implication for DxA |
| --- | --- |
| The design-agent landscape includes assistants, visual workspaces, connectors, and instruction packages. | Label each resource by what it actually is. |
| The podo catalogue provides broad discovery and routes to upstream skills. Many installed entries were lightweight pointers. | Credit the catalogue; distinguish a directory entry from an installed implementation. |
| Design engineering reviews emphasized states, tokens, purposeful motion, and critique. | Use these as product quality criteria across the guide. |
| Taste-oriented skills can impose strong aesthetic preferences. | Explain the context in which guidance helps; preserve the designer's product and brand decisions. |
| Earlier MCP research covered Figma, Webflow, Canva, Penpot, shadcn, and community integrations. | Recheck each exact integration before listing its capabilities or setup instructions. |
| Local Screenshot to Code and Open AI Design Agent builds and backend checks passed; generation was not tested. Superdesign was installed without a generation run. | Record setup evidence separately from completed design workflows. |
| The earlier fal stub contained broken installation links. | Point to current upstream instructions and check links before featuring a resource. |
| Remotion guidance was installed without its full runtime. | Make prerequisites and installation size clear where relevant. |
| Design-team research collected examples of how teams work and ship. | Use attributable public examples as craft references. Keep recruiting and prospecting outside this directory. |

No star-count ranking or fixed upstream resource count is needed in the public positioning. Previous counts were snapshots with different scopes.

## Silicon Valley product craft

The editorial focus is designers building software with agents: founding designers, product designers, design engineers, brand designers, and small teams moving from an idea to something people can use.

Apply this lens to every featured resource:

- Can a designer make and revise a working prototype?
- Can the work use an existing design system and real product content?
- Does the workflow preserve editable output and human design judgment?
- Does it address loading, errors, recovery, accessibility, and responsive behavior?
- For agent products, does it help with intent, progress, permissions, handoff, and undo?
- Can the result support a product review, user test, launch, or live demo?

Silicon Valley defines the community and product context. Useful tools can come from anywhere. Company location and popularity are not quality criteria.

## Public organization

| Section | What a designer finds |
| --- | --- |
| Events | Upcoming gatherings and past demos, with people, projects, recordings, and resource links. |
| Agents | Assistants and design workspaces, organized by the work they help a designer do. |
| MCPs | Connections to canvases, components, browsers, and product context. State exactly what each connection can read or change. |
| Skills | Focused instructions for craft, critique, research, writing, motion, and production. |
| Workflows | Short, reproducible examples combining agents, connections, and skills to make a concrete artifact. |
| Updates | New resources, changed capabilities, broken integrations, and recent event additions. |

README order: opening copy, next event, a small "Start here" selection, directory links, recent demos, contributions, and credits.

Keep people connected to the event or project where their work appears. Keep research papers as supporting reading attached to a workflow. Paper, the design tool, belongs in the design tools and MCP coverage.

Browse agents by designer intent: explore an idea, design a product, build a prototype, create media, research a question, or review the work. Use the same tags across MCPs and skills so readers can see how resources fit together.

## Events and people

The [linked event](https://luma.com/g4vhqudr), inspected in the browser on September 24, lists a September 29 gathering in San Francisco, presented by Mercor, with experiments and demos from:

- Christopher Sim, listed as OpenAI, previously Harvey.
- Tom Krcha, listed with Pen.dev.
- Michal Simkovic, listed with Mercor.

Record those as event-page affiliations at the time of review. The page does not establish which tools each person will demonstrate. Add demo titles, artifacts, and recordings when there is a public source. Event participation does not imply endorsement of the repository or its other listings.

For each event, keep the date, location at city level, registration link, public presenter profiles, demo titles, related resources, recordings when available, and a short recap after the event.

Before an event, collect announced projects. Afterward, connect published demos to their directory entries and document a workflow where it can be reproduced. Between events, keep the entries current. Use Design xAgents and DxA in our writing; preserve an external event's original title only when quoting it.

## First selection

Target 20-30 reviewed directory entries, with 6-8 featured in "Start here." These are candidate groups, not a tested ranking.

| Candidate group | Purpose and evidence to collect |
| --- | --- |
| Paper and Paper MCP | Editable design and agent access to the canvas. Current [official MCP documentation](https://paper.design/docs/mcp) describes reading and writing design files. Complete one workflow before applying a tested label. |
| Pen.dev | Event-connected design workspace. The [product site](https://www.pen.dev/) documents canvas agents, MCP access, and export. Link the event connection without inventing a demo. |
| Figma and its official MCP | Existing product design and design-system workflows. Verify capabilities against the exact current integration and access plan. |
| fal | Creative production. Use the [current upstream skills repository](https://github.com/fal-ai-community/skills); verify the relevant package and prerequisites. |
| Superdesign, Onlook, Screenshot to Code | Compare different approaches to exploration, visual editing, and prototype implementation using the same task. |
| Impeccable, UI Craft, interaction and token skills | Compare critique and product quality guidance, including how each respects an existing brand. |
| Remotion and focused motion skills | Product demos and purposeful interface motion. Keep runtime requirements separate from guidance. |
| Webflow, Canva, Penpot, shadcn integrations | Extend coverage where they support a distinct designer workflow. Verify each server and setup path. |
| Muse | Keep as an unresolved candidate until the intended product URL is identified. Do not substitute a generic "Muse-style" assistant. |

Broader app builders, platform-specific packages, shaders, and specialized creative tools can live in the directory as useful coverage grows. Each addition should answer a clear design need.

## Entry format

Keep the main directory scannable: name, type, what it helps with, works with, evidence, and source/setup link. Put longer setup notes in the entry detail.

Each record should retain:

- Name, canonical source, and creator or organization.
- Type: agent, workspace, MCP, skill, or reference. Related resources can link to each other.
- One sentence describing a concrete design task and output.
- Supported environment, prerequisites, and any account or paid-service requirement.
- Evidence: source reviewed, setup checked, or workflow tested, with a date and scope.
- Availability: available, limited access, deprecated, or unknown.
- Official or community provenance, tracked separately from test evidence.
- Known limitations, upstream license when provided, and related event or demo if documented.

"Workflow tested" means we completed a named task and inspected its output. "Setup checked" means installation or connection worked. Neither label should imply broader coverage than the recorded check.

## Initial workflows

1. Explore a product idea: brief to editable directions and a chosen prototype.
2. Build with a design system: existing components and tokens to a working screen.
3. Design an agent interaction: intent, progress, approval, failure, and recovery.
4. Review before shipping: a real interface, specific findings, and verified revisions.
5. Prepare a product demo: working prototype, generated assets where useful, and a concise walkthrough.

Each workflow names the tools used, expected artifact, setup requirements, review points, and limits. Prefer a few complete examples over many generic prompt lists.

## Proposed files

```text
README.md
PLAN.md
CONTRIBUTING.md
resources/
  agents.md
  mcps.md
  skills.md
  papers.md
  updates.md
  credits.md
events/
  README.md
  2026-09-29-san-francisco.md
workflows/
  README.md
agents/
  # Future assistant setup and configuration
skills/
  # Existing draft skills; validate before publishing an install path
website/
```

Start with Markdown as the maintained source. Add a structured index only when the website or assistant integration needs it; avoid maintaining duplicate catalogues by hand.

## Editorial rules

- Always write Design xAgents and DxA. Lowercase filenames and technical identifiers can stay lowercase.
- Lead with the designer's task and the resulting artifact.
- Use short descriptions and specific verbs: explore, connect, prototype, generate, review, ship.
- Replace "resource stack," "tool surfaces," "curation layer," and "Silicon Valley-flavored" with concrete language.
- Say "keep track of agents and MCPs for designers." Do not claim exhaustive coverage or universal assistant compatibility.
- Credit discovery sources and original creators. Write our own descriptions; link to upstream installation instructions.
- Keep platform names distinct: the Luma event service is separate from Luma's media-generation products.

## Implementation sequence

1. Rewrite the README around the event community and directory. Standardize brand spelling throughout our authored documentation. Remove placeholder install commands and unimplemented profiles.
2. Build the September 29 event entry using verified public information. Add links to presenters and their announced projects as available.
3. Consolidate existing research into the candidate directory. Verify source links, resource type, prerequisites, and evidence before featuring entries.
4. Complete the five initial workflows using a manageable selection of tools. Publish actual results and limitations; these tests determine the featured selection.
5. Add contribution guidance and an update log. Review entries before each event and record changes afterward; this is a proposed maintenance practice, not an active automation.
6. Add optional assistant installation after the directory is useful. Validate supported hosts and publish working commands only after testing them. Carry source links and evidence into the installed guide.

The first public release is ready when the README is clear, the event entry is sourced, the directory has reviewed entries with honest evidence labels, credits are present, and all published navigation and setup links have been checked. The optional installer can follow separately.

## Credits and source handling

Credit [podo/design-agent-skills](https://github.com/podo/design-agent-skills) as a discovery and catalogue reference. Its broad skill categories and upstream routing informed the earlier research. DxA's event structure, selection, descriptions, and workflows should be original.

Link every included project to its own source and retain its authorship and license information. Use public sources in the published directory; prior local research is supporting context, not a substitute for a current source or a completed test.

Outstanding identification: the intended Muse product. Paper is treated here as the design application.
