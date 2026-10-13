# Design agents

Start with a design type, then follow **viewport → category → style**.

```text
apps/       <viewport>/<category>/<style>/
websites/   <viewport>/<category>/<style>/
games/      <viewport>/<category>/<style>/

instructions/ Agent build plan and future setup entry point
resources/ Portable Markdown design resources
shared/    Current agent guidance, taste, viewports, styles, workflow, source archives
tools/     DialKit and optional local application checkouts
docs/      Setup, folder ownership, and migration record
scripts/   Workspace checks and portable export
```

## Build the agents

The [instructions folder](instructions/README.md) contains a separate Markdown spec for **Setup, Atlas, Taste, Dial, and Dream**. Setup recreates the complete design environment and prepares the other four agents. Each type's README defines its environment; Setup copies the applicable information underneath it through viewport, category, and style. The [build plan](instructions/PLAN.md) covers source restoration, the separate [Resources folder](resources/README.md), scoped copies, and tool readiness. Automated restoration and execution still need implementation.

## Choose a design type

| Design type | Viewport folders | Categories | Style list |
| --- | --- | --- | --- |
| [apps](apps/README.md) | mobile, tablet, desktop, tv, watch | [Interface types](shared/workflow/taxonomy/APP-INTERFACES.md), approved menu | [App style candidates](shared/styles/APPS.md) |
| [websites](websites/README.md) | mobile, tablet, desktop | [Website design uses](shared/workflow/taxonomy/WEBSITE-CATEGORIES.md), approved menu | [Website style candidates](shared/styles/WEBSITES.md) |
| [games](games/README.md) | mobile, tablet, desktop, tv | Google Play game genres | [Game styles](shared/styles/GAMES.md) |

Jason's latest correction replaces the Google Play menu for apps and websites with interface types and website uses such as landing pages and SaaS. The [research note](resources/research/directions/design-taxonomy-research.md) explains the approved category menus and unresolved style vocabulary. Existing app/web category folders remain legacy scaffolding pending migration to the approved categories; game genres are unchanged.

Style folders are created for actual exploration or supported matches; no personal style is selected yet. The [viewport registry](shared/viewports/README.md) separates Chrome presets, native references, and target-specific support. Exact dimensions and finer page/screen details remain within the branch.

## Work with references and components

**Images → editable components → DialKit tuning → saved style variants → application to a design.**

The Dial Agent interprets images and builds components. DialKit controls tune those components. A saved style variant keeps its code, values, references, and usage rules together so it can be applied in the appropriate design branch. See [the component-workbench contract](shared/workflow/COMPONENTS.md).

This workflow is specified; the image-to-component workbench still needs implementation. The existing [DialKit demo](tools/dialkit/PERSONAL.md) demonstrates the controls.

## Shared guidance

| Need | Start here |
| --- | --- |
| Agent specs | [Setup](instructions/SETUP.md), [Atlas](instructions/ATLAS.md), [Taste](instructions/TASTE.md), [Dial](instructions/DIAL.md), [Dream](instructions/DREAM.md) |
| Current preferences and coverage | [Memory](shared/taste/MEMORY.md), [coverage](shared/taste/COVERAGE.md) |
| Naming and folder rules | [Taxonomy](shared/workflow/TAXONOMY.md), [workspace map](docs/WORKSPACE.md) |
| Portable design resources | [Resources](resources/README.md) |
| Portable workflow | [Direction Kit](shared/workflow/START.md) |
| Tool setup | [Setup and transfer](docs/SETUP.md), [local tools](docs/setup/LOCAL-INSTALLATIONS.md) |
| An old filename or chat link | [Folder migration](docs/FOLDER-MIGRATION.md), [chat index](docs/CHATS.md) |

## Carry your resources

Copy [Resources](resources/README.md) on its own, or use [the Resources ZIP](.exports/design-resources.zip). It carries the design-resource collection in Markdown, with source references and attribution.

## Start in another repository

Copy [the three-file starter](shared/workflow/starter/START.md), or extract [its ZIP](.exports/design-agent-starter.zip), into `design-agent/` in the target repo. Keep the current project in PROJECT.md and supported reusable preferences in TASTE.md. Copies do not synchronize automatically.

> Read design-agent/START.md. Start a new design task: [task].

For the complete personal workspace snapshot:

```sh
python3 scripts/workspace.py check
python3 scripts/workspace.py export
```

The [portable ZIP](.exports/design-agent-portable.zip) includes instructions, design-folder records, research, local skill files, attribution, and DialKit source/history. Optional app dependencies, credentials, global connections, and generated builds are excluded. [SETUP.md](docs/SETUP.md) explains transfer and verification.
