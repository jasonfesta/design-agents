# Using Jason

[Setup](SETUP.md) is the single-file entry that fetches the GitHub repository `jasonfesta/design-agents` and creates the `jason/` workspace on a new machine. **Atlas, Taste, Dial, Dream, and Benchmark** are independent work roles. Start with whichever one fits the task; none requires another role to run first.

```text
agents/
  SETUP.md      Fetch design-agents and set up jason on this machine
  ATLAS.md      Ongoing nomenclature library across the three types
  TASTE.md      References and defined direction for Dial
  DIAL.md       React components, controls, variants, and layouts
  DREAM.md      Nightly cleanup; separate version for morning review
  BENCHMARK.md  Compare models against a selected Dial layout
  memory/       Shared taste evidence and coverage
```

## Prepare the kit

Give your IDE assistant just [SETUP.md](SETUP.md), with an open repository or a chosen destination, and say:

> Read this Setup file and set up Jason here.

Setup carries its own source configuration and pre-download instructions. It creates `jason/` with the complete tree, hidden bundled skills, and supporting files. It connects the IDE instructions, checks the local environment, and records dependency/authentication readiness in `jason/INSTALLATION.md`. Existing repositories retain their instructions; a standalone installation can be opened directly as a workspace.

The GitHub source is **jasonfesta/design-agents**, branch **main**; the installed folder is **jason/**. The repository and branch were verified on October 13, 2026. Record the exact fetched commit during Setup. Cross-machine operation is the requirement; target-OS installation and tool readiness must be checked on each machine.

Setup owns this folder system and machine setup. The working roles own project-specific code and design destinations using the rules below. Existing complete copies can load roles directly. Reuse the selected installation; avoid nested or duplicate Jason folders.

## Use any role

Replace the paths, role, and request below. Explicit file loading works even when the IDE does not discover instructions automatically.

```text
Read <kit-path>/AGENTS.md, <kit-path>/agents/README.md,
and <kit-path>/agents/<ATLAS|TASTE|DIAL|DREAM|BENCHMARK>.md.
Use that role for: <request>.
Project, if applicable: <existing project path or new project description>.
Read the role's required references and the destination's instructions.
Follow the shared project-location rules before creating project files.
```

Load only the chosen role and the references its task needs. If moving a role outside the kit, include its linked context and assets with attribution; an isolated Markdown file cannot supply missing evidence. Each role has the same **Inputs → Work → Result** structure for later conversion into a skill. For now, these are portable instructions; native skill registration and background execution are not part of this package.

| Role | Use it for | Result |
| --- | --- | --- |
| [Atlas](ATLAS.md) | Maintain the nomenclature used to describe each direction | Names, definitions, relationships, and resolved additions |
| [Taste](TASTE.md) | Interpret references and settle the direction with Jason using Atlas | References, selected classification, criteria, and decisions for Dial |
| [Dial](DIAL.md) | Build the custom kit and first layout, then tune and compose by prompt | Shared React components, editable layouts, controls, saved versions, and local previews |
| [Dream](DREAM.md) | Refine the day's work within Taste and Dial standards | A separate morning-review version, evidence, and an unfinished queue |
| [Benchmark](BENCHMARK.md) | Compare models against a particular Dial result Jason likes | A separate local page with React previews, code, and metrics |

## The design workflow

**References → Taste with Atlas suggestions and dialogue → selected type / device type / viewport size / category / subcategory / style → custom DialKit + first React layout through Dial → prompt edits and more layouts → Dream morning-review version.**

Atlas is the ongoing nomenclature library. Taste absorbs references gathered in the IDE or brought in from elsewhere: MP4s, websites, links, screenshots, screen grabs, and mood material. As material arrives, Taste suggests Atlas matches and works with Jason to select the direction's type, device type, viewport size, category, subcategory, and style. Missing vocabulary prompts a discussion and an agreed addition to Atlas; the direction stays unresolved until its required selections are made. Existing explicit choices apply without repeated confirmation.

Taste saves the references, selected classification, useful qualities, and decisions as [a direction for Dial](TASTE.md#result). Dial builds and verifies the custom kit and first layout using that direction. A full build request continues through both roles in the same task; Jason does not need to repeat the request. Taste-only work can finish with its direction or open questions. Requested inspiration research can supply references; it is not an Atlas prerequisite.

The layout imports the kit's real React components and values. Prompt changes can target the kit, a component, or one layout; keep their scope explicit. Additional layouts reuse the visual system while varying structure and content. Work runs on localhost; prepare source and run instructions for a later submission tool or GitHub handoff. [Local delivery guidance](../resources/guides/workflows/apply.md#react-localhost-and-handoff) covers implementation.

Label each reference **layout**, **mood/inspiration**, or **both**. Separately choose **Reconstruct**, **Adapt**, or **Explore** from the requested intent. Adapt is our research-informed proposal for a new product using existing references; an explicit request to match a layout uses Reconstruct. [The research note](../resources/guides/reference-to-layout-research.md) explains these choices and their limits. These are fields in the direction record, not extra folder layers.

The shared [jig](../resources/jigs/layout-jig/README.md) overlays every layout with a bottom-centered dot, model/appearance information, download, copy URL, and pinned comments saved to Markdown. Google Sans Flex belongs to the shared UI; layout fonts remain independent. After Jason likes a saved Dial layout, invoke [Benchmark](BENCHMARK.md) separately when wanted. Its comparison results live on a separate local page, outside the ordinary jig.

This is the normal build flow, not a requirement to repeat completed stages. Supplied references can start with Taste or Dial. Terminology work can stay in Atlas. Dream reads saved decisions directly and makes changes in a separate candidate before morning review; promotion to the working project is a later explicit choice. No schedule is active.

## Current work and next steps

Regrouped October 13, 2026 from the current files and related chats. This section is the resumption point; the role files own instructions and the [master resource list](../resources/README.md) owns resource navigation. Earlier chat proposals remain historical where later decisions supersede them.

| Effort | Current state | Next work |
| --- | --- | --- |
| Setup and portability | One standalone [Setup MD](SETUP.md); confirmed source `jasonfesta/design-agents`, branch `main`; installed folder `jason/`. Portable checks and extracted-transfer verification pass. | Verify the fetched revision during Setup; cross-OS installation and machine-specific tool readiness remain untested. |
| Atlas | Ongoing type, device type, viewport size, category, subcategory, and style vocabulary. Menus cover 32 app product categories, 18 website uses, and 17 game genres, followed by interface subcategories; shared app/web styles draw on 20 Spotted in Prod design languages. | Grow the library through actual Taste dialogues. Suggest matches, resolve each selection with Jason, and add agreed missing entries. |
| Taste | Rich-reference intake, Atlas dialogue, evidence/feedback, and the handoff to Dial are specified. Onboarding references are collected; personal branch definitions remain open in [coverage](memory/COVERAGE.md). | Define one real direction from selected references, including what to preserve or change, its classification, and project destination. |
| Dial | Component contract includes 203 source labels and all 54 patterns. The [local DialKit record](../resources/tools/local-tools.md#dialkit) documents earlier successful library/demo checks; the custom reference-to-kit workflow is not implemented. | Review Dial, then prove one reference-to-React kit/layout, a scoped prompt edit, and exact save/reload. Preserve reconstruction appearance when that mode is requested. |
| Dream | A three-hour nightly specification with separate morning-review versions. No scheduler or execution host is configured. | Review Dream, then validate cleanup on a separate candidate from a real Dial output. Resolve enrollment, destination, time, and runtime before scheduling. |
| Benchmark | A separate agent and local React comparison page, invoked against a saved Dial layout. | Configure explicit Portkey routes and a local API key for a requested comparison; live inference is not verified by a successful local preview. |
| Resources, tools, and MCPs | One [master list](../resources/README.md), canonical collections, [MCP records in Resources](../resources/mcps/README.md), local tool receipts, and preserved history. | Reuse the captured sources. Verify a tool's actual availability when using it; account connections and local dependencies do not transfer merely with Markdown. |

### Contributions brought together

- **Study Spotted in Prod** supplies [246 source tags](../resources/sources/spotted-in-prod/taxonomy.md) and their app/web style mappings. Dial shares design language, visuals, gestures, flows, and patterns; source product categories stay outside its component controls.
- **Review onboarding flow examples** supplies [39 clips across 36 apps](../resources/sources/spotted-in-prod/onboarding/README.md), with originals, posters, contact sheets, and sampled-frame descriptions. The gallery displayed 93 clips; Jason stopped collection at the saved batch. Do not resume bulk collection from this regrouping. The notes are candidate lessons, not confirmed taste or complete animation analysis.
- **Compare design template platforms** supplies [template/category research](../resources/guides/template-market-research.md), including portfolios, agencies, software, commerce, services, and education. Keep the dated provider observations and existing category mappings.
- **Organize design agent workspace**, **Organize taste research agents**, **Review design agent proposal**, and **design agent** contribute reference-to-code fidelity, scoped taste evidence, feedback memory, and portability. Their earlier starter files, extra roles, and taxonomy drafts are preserved in [History](../resources/history/README.md); the current role MDs govern this kit.
- **Review Emil Kowalski skills** contributes the [installed craft foundation](../resources/agents/craft-foundation.md#installed-craft-foundation). **Find anti-gravity research on X** contributes [tooling research](../resources/tools/antigravity-x-research.md); a researched repository is not an installed capability.
- **Draft design dreaming AGENTS.md** contributes the nightly quality pass, now governed by [Dream](DREAM.md) and the later choice to save a separate version for review. The earlier approximate 3 a.m. idea is not a configured schedule.
- [DesEngs](../resources/sources/desengs/README.md), [Fancy Components](../resources/sources/fancy-components.md), motion references, jigs, and other supplied resources remain in their existing canonical collections. **Create Agents sky-swiping scene** is a separate visual-output chat; its output is not automatically an approved style kit or reusable taste definition.

### Sequence from here

1. Finish reviewing **Dial**, then **Dream**, against these role boundaries.
2. Use **jasonfesta/design-agents**, branch `main`, as the Setup source. Preserve source material and verify the fetched revision and target-machine capabilities on each installation.
3. Start one real app, website, or game with chosen references and a confirmed destination. Taste resolves the direction with Atlas; Dial builds the custom React kit plus first layout on localhost, verifies an edit, and saves/reloads the result. Further layout generation reuses that kit.
4. Exercise Dream on a separate review version using that direction and saved Dial values. Configure recurring execution only when requested and the runtime details are resolved.

The first implementation test should demonstrate the complete flow on one direction before adding a broader runtime or automation. This is the proposed next-work sequence, not a claim that the workbench or scheduled agents already exist. New category/style definitions are added through actual work rather than prebuilding every folder combination.

## Project locations

These rules apply to all work roles, independently of Setup.

1. **One new build chat owns one app, website, or game.** Continue its project on follow-up messages. Explicit shared research, kit maintenance, or a request to resume an existing project keeps its stated scope.
2. **Ask where to save a new project or direction unless the destination is already supplied.** Confirm its absolute path and inspect existing instructions before writing. A suggested path or silence is not an answer; read-only work can continue while waiting. Never silently use this kit or another chat's project as the output folder.
3. Create only the selected design layers, with one README per created layer. Use the [type and category menus](../resources/structure.md), [viewport profiles](../resources/viewports/README.md), and [styles](../resources/styles/README.md). Leave unknown choices in the project record instead of creating placeholder branches. Viewport size is a width × height folder. Record units, preset, DPR, input, motion, tools, and screen details inside its Markdown.
4. Add a **Design project** section to the project's README: name/type, owning chat when known, implementation and asset locations, direction path, references/variants, current state, and unresolved choices. Store paths relative to the confirmed project root so it can move. Follow the stack's normal code layout.
5. Add a **Design file routing** section to the project's `AGENTS.md`, preserving existing rules. Point to the README's actual paths; instruct the IDE to save product code in implementation locations and design notes/assets/variants in the direction. Explicitly load both files in IDEs without instruction discovery. Use an explicit command working directory and resolved file destinations.

```text
<chosen-project>/
  README.md                         Project and actual file destinations
  AGENTS.md                         Instructions to use those destinations
  <implementation folders>/        Code and assets for the chosen stack
  <apps|websites|games>/<device>/<width>x<height>/<category>/<subcategory>/<style>/
    README.md                       Direction, references, decisions, state
    references/                     Selected assets, when needed
    components/                     Components and variants, when needed
```

Angle brackets are placeholders. Use lowercase folders for our records, retaining required stack conventions. Keep independent named variants when two directions share a style. Reuse saved destinations for follow-up edits; switching roles does not create a new project. Ask again for a new project, direction, or relocation. Each project owns its paths; there is no shared active-project pointer. Instructions guide the assistant and do not change IDE permissions automatically.

## Save once and hand off clearly

Keep project decisions in the direction's README, selected research with the project, reusable source descriptions in Resources, and supported reusable preferences in Taste memory. Link component records and versions from the direction instead of creating a new report for every role switch. Record suggested versus selected Atlas names/links/IDs and the dialogue that resolved them. For generated work, record the date/time zone, item ID and paths, source roles and inspected pages/regions/time ranges, Taste criteria, transformation, kit/component/layout revisions, exact values, and checks. Dream uses these entries to review the whole day within the project scope.

Return the actual project/direction paths, source or version IDs, saved work, decisions versus proposals, checks performed, unresolved gaps, and next action. No handoff is required to finish a self-contained task. If file writes or visual checks are unavailable, state what remains unsaved or unverified.

The [master resource list](../resources/README.md) owns navigation. [MCPs](../resources/mcps/README.md), [local tools](../tools/README.md), and [agent resources](../resources/agents/README.md) supply supporting records. [History](../resources/history/README.md) preserves prior versions. The full image-to-component workbench still needs implementation; Dream's [nightly operating design](../resources/guides/workflows/dream.md) specifies the three-hour window; scheduling and its execution host are not configured.
