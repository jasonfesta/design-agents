# Design agents

A reusable design kit: **Setup, Atlas, Taste, Dial, and Dream**, with one Markdown instruction file for each.

## Start

Clone this repository, open its folder in your assistant, and say:

> Read README.md and instructions/SETUP.md. Set up this design kit for my task: [describe the task].

The Markdown kit works without installing a runtime. Connect or install a design tool only when the task needs it. To use the kit inside another repository, copy the complete folder there as `design-agents/` and point the assistant to that README; preserve the destination's existing instructions.

## The folders you use

```text
instructions/   SETUP.md · ATLAS.md · TASTE.md · DIAL.md · DREAM.md
resources/      Catalogue, collections, research, and all earlier material
apps/           App design work
websites/       Website design work
games/          Game design work
```

| Agent | Job |
| --- | --- |
| [Setup](instructions/SETUP.md) | Prepare the kit and the selected design branch. |
| [Atlas](instructions/ATLAS.md) | Name, classify, and find relevant design references. |
| [Taste](instructions/TASTE.md) | Annotate references and remember your scoped feedback. |
| [Dial](instructions/DIAL.md) | Reproduce images as editable components, tune, and save variants. |
| [Dream](instructions/DREAM.md) | Revisit selected work and propose or implement supported improvements. |

Use **type → viewport → category → style**. Create a branch when it has actual work; keep category and style menus as Markdown lists. Each created layer gets a README. Start from [apps](apps/README.md), [websites](websites/README.md), or [games](games/README.md).

[Resources](resources/README.md) is the single entry to the collection. [History](resources/history/README.md) keeps prior agents, research, and unused scaffolding. Earlier instructions are historical evidence; the five files above are the current agents.

## Supporting files

`shared/` holds reusable vocabulary, taste memory, workflow references, source snapshots, and maintenance notes. `.agents/skills/` contains installed guidance. `tools/` is for optional local installations; `scripts/` contains the existing check/export utility. You do not need to browse these to start.

```sh
python3 scripts/workspace.py check
```

The check validates the kit's files and references. [Reuse and transfer](shared/docs/SETUP.md) covers optional ZIP exports and preserved DialKit source. These instructions do not start a service or a Dream schedule. The full image-to-component workbench is still to be built.
