# Research library for personal design directions

Working draft · October 12, 2026 · Jason Festa

For the current portable workflow, start with [Direction Kit](workflows/README.md). Its [research instructions](workflows/research.md) and [category/style taxonomy](../structure.md) organize new work. This file preserves the workspace's historical source findings; do not duplicate those records merely to adopt the kit.

Build a growing body of visual research that can produce reusable personal theme packs for Gemini and coding agents. Keep historical evidence here and in the existing catalogue; use the [research brief](reference-intake.md) to select and tune a direction. The [design system](systems-research.md) stage turns that direction into code. [Apply and run](application-research.md) uses the resulting pack in working interfaces.

This is the first of two research documents. The library remembers what we found and what Jason said about it. The brief describes what we currently intend to make from selected references. New inspiration can change the brief without rewriting the historical record.

## What Jason has established

- The goal is a collection of reusable visual direction packs that agents can explore widely.
- Research should support ongoing areas of investigation, supplied references, historical findings, and iterative tuning.
- System extraction and application are separate stages with their own Markdown instructions.
- DxA, Design Agents, and Research are the foundation. Graphical is a model for the kind of system we want to develop.

No personal theme names, default palette, house typeface, or universal material treatment have been selected. Interest in a reference does not automatically make all of its characteristics a permanent preference.

## Existing research to preserve

| Source | What it contributes | Evidence boundary |
| --- | --- | --- |
| [Main agent brief](../agents/craft-foundation.md) | Consolidated context from all three workspaces and the installed craft foundation. | Starting guidance; personal visual rules are still developing. |
| [Research catalogue](../sources/reviewed.md) and [structured records](../sources/source-records.md) | The recorded collection of 143 resources, including 131 Nero-linked URLs and 29 site or repository reviews. | These are different coverage measures. Most discoveries are not independently tested products. |
| [Workspace archive](../history/workspace-sources/README.md) and [manifest](../history/workspace-sources/manifest.md) | 45 source Markdown documents and three JSON records, retaining paths and hashes. | October 12 snapshots preserve older research dates; they do not refresh its claims. |
| [DxA workflows](../history/workspace-sources/dxa/workflows/README.md) and [DesignJigs](../history/workspace-sources/dxa/resources/designjigs.md) | Editable prototypes, bounded controls, realistic states, and exporting design choices. | Useful process foundations; a jig is an optional instrument for making a decision. |
| [Local studies](../history/workspace-sources/dxa/resources/local-studies.md) | Glass, shaders, typography, particles, reference matching, and creative coding. | The archive contains study summaries and sources, not all underlying implementations. |
| [Emil skill router](../../.agents/skills/emilkowalski-skill/SKILL.md) | Craft, interaction, motion, prototyping, and review guidance. | A craft foundation, not a prescribed visual theme. Preserve upstream attribution. |
| [MCP research](../mcps/research.md) and [installation record](../mcps/setup.md) | Routes to reference libraries, design tools, and component sources. | Check live access when needed. Documentation, configuration, authentication, and a successful workflow are separate states. |

The local DxA checkout remains at `d7b2a2dd8515e08a620c97e82d9ab4a6cdb62ae2`, dated September 24, 2026, with origin [jasonfesta/dxa](https://github.com/jasonfesta/dxa). On October 12, `resources/designjigs.md` was untracked and README/index updates were modified locally. The archived DesignJig material includes those edits; it should not be described as already committed. Remote GitHub state was not independently established in this review.

## What the recent chats add

Reviewed October 12, 2026:

| Chat | Useful result for this system |
| --- | --- |
| **design agent** | Proposed a reference-picker DesignJig with identical content across treatments and exportable choices. It remains an experiment proposal. |
| **Review Emil Kowalski skills** | Clarified the roles of project instructions, the main brief, skills, and the research library. Confirmed that expressive materials are interests, not a mandatory house style. |
| **Inspect 60fps.design MCP** | Expanded discovery and component sources. Its current installation report supersedes earlier statements that only 60fps was configured; some connections still need authentication or verification. |
| **Explain GraphicalUI charge** | Recovered October 12 from the October 5–6 chat. Reviewed both Graphical creators' GitHubs, inspected DialKit's agent handoff, and cloned DialKit locally. This source was missed in the first draft and is incorporated below. |

The earlier Research handoff also preserved the path from creator posts to demos and GitHub implementations. Continue that source chain when adding new references.

## Systems reviewed for this draft

### REF-001 — Graphical

[Graphical](https://www.graphicalui.com/) publicly describes a visual theme editor, theme resources, React components, `GUI.md`, and skills for building, adapting, and reviewing interfaces. Its [public preview](https://www.graphicalui.com/marketing/preview?mode=light) exposes character, motion, color, typography, and icon controls alongside component specimens. The [changelog](https://www.graphicalui.com/changelog) records editable setup prompts and improved agent guidance.

**What we take from it:** a direction should travel with concrete values, examples, and instructions for use. This is our interpretation of the public product workflow. The purchased export, actual `GUI.md` contents, and bundled skill instructions were not inspected.

### REF-002 — Refero Styles

[Refero Styles](https://styles.refero.design/) pairs visual references with structured style descriptions. Its [Linear example](https://styles.refero.design/style/90ce5883-bb24-4466-93f7-801cd617b0d1) exposes DESIGN.md, CSS variables, tokens, and framework output. It explicitly distinguishes normalized measurements, interpreted roles, and reconstructed examples.

**What we take from it:** record the difference between a measured source value and our interpretation. Extracted references are not automatically the original brand's official system. This example is an organizational reference, not a selection of Linear's style.

### REF-003 — Superdesign

The installed [DESIGN.md guide](../../tools/superdesign-skill/DESIGN.md) combines product context, tokens, motion, and component patterns in persistent Markdown. Its [workflow reference](../../tools/superdesign-skill/skills/superdesign/references/SUPERDESIGN.md) separates branching into alternatives from refining a selected direction and constrains generation with design-system context. Local checkout reviewed at `f9f05cd988c247dce6c072eaf9ac6b162f2ffc4b`.

**What we take from it:** keep the direction persistent between prompts and make each exploration say what changes and what stays fixed. This review did not run Superdesign generation.

### REF-004 — Josh Puckett's DialKit and the recovered founder research

The October 5–6 chat **Explain GraphicalUI charge** contains the earlier research Jason recalled. On October 6, the agent reviewed [Josh Puckett's repositories](https://github.com/joshpuckett?tab=repositories) and [Adam Michela's repositories](https://github.com/soopa?tab=repositories). It did not locate a public Graphical repository or its actual `GUI.md`. That is a historical search result, not proof that neither exists publicly today.

The useful discovery was [DialKit](https://github.com/joshpuckett/dialkit). Jason explicitly said “Start here,” then requested a local clone. The checkout remains at [outputs/dialkit](</Users/jasonfesta/Documents/Codex/2026-10-05/https-www-graphicalui-com-https-www/outputs/dialkit>), revision `0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3`, package version 2.0.1, with a clean working tree when checked October 12. Its MIT license credits Josh Puckett. The earlier clone report stated dependencies were not installed; this recovery pass inspected source without installing or running it.

The saved [control and persistence documentation](https://github.com/joshpuckett/dialkit/blob/0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3/docs/reference.md) describes sliders, color controls, selects, spring/easing editors, saved versions, and optional browser persistence. The inspected [copy-instruction.ts](https://github.com/joshpuckett/dialkit/blob/0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3/src/copy-instruction.ts) serializes the tuned values as JSON and instructs the receiving agent to make them the configuration defaults. Its timeline path preserves authoring bindings and supplies a later production-conversion note.

**What we take from it:** give the designer bounded live controls, preserve comparable versions, and hand the agent exact chosen values plus a targeted instruction. Our extension is to connect that snapshot to semantic tokens, component previews, exported theme code, and the direction's rationale. Those theme-level exports are proposed work, not capabilities established by reading DialKit's copy function.

Jason subsequently specified our own all-Markdown version. [Direction Kit](workflows/README.md) now translates the bounded controls, saved versions and exact-value handoff into conversational instructions and portable Markdown records. A visual DialKit workbench is optional. The research did not establish that Graphical uses DialKit internally. Graphical's public product workflow, DialKit's inspected implementation, and our own theme-pack architecture retain separate attribution.

#### October 12 follow-up — upstream capabilities to account for

Jason resupplied [joshpuckett/dialkit](https://github.com/joshpuckett/dialkit) in the organization chat and asked that it be taken into account. This remains the original web implementation reference; Michael Lee's native packages supplement it. Rechecked the public [README](https://github.com/joshpuckett/dialkit#readme), [control reference](https://github.com/joshpuckett/dialkit/blob/main/docs/reference.md), and [timeline guide](https://github.com/joshpuckett/dialkit/blob/main/docs/timeline.md). This documentation review does not update the historical clone revision or establish runtime verification.

| Documented capability | Implication for our proposed integration |
| --- | --- |
| React, Solid, Svelte, Vue, and plain JavaScript adapters | Match the actual project stack; do not assume React is required. |
| Numeric, boolean, text, color, select, image, XY, spring/easing, action, and grouped controls | Map useful choices explicitly to the system's tokens, assets, behavior, and components. |
| Controllers can read and update values programmatically | An adapter can apply a resolved direction; arbitrary design-system formats still need translation. |
| Editable versions and optional browser persistence | Export exact values into our own immutable snapshots. A mutable DialKit preset is not an approved baseline. |
| Copy includes values and a source-update instruction | Apply chosen values to canonical defaults, then reconcile the Markdown record. |
| Timeline scrubbing, sequences, property tracks, groups, and loops | Use the timeline for authored motion; retain timing and property bindings in the handoff. |
| Inline/custom panels and keyboard controls | Fit the workbench to the task and verify keyboard behavior in the integration. |

**Implementation boundaries:** Color controls need supported literal values; they do not parse CSS variable references or `calc()`. Resolve token aliases at the adapter boundary. The editor's production visibility differs between framework and vanilla roots; hiding a timeline dock does not stop code consuming sampled values. Follow the upstream production-conversion guidance when shipping a result. Our constraints, taste coverage, locks, immutable approval records, and Dream rules remain responsibilities of our workflow.

**Status:** Key public capabilities are reflected in the research and application instructions. No full source audit, new installation, adapter implementation, or cross-framework test is claimed.

#### October 12 GitHub search and personal source

Jason asked to version our own DialKit and search Josh's GitHub again. The [public repository API](https://api.github.com/users/joshpuckett/repos?per_page=100&sort=updated) returned 27 repositories. Relevant current projects are [DialKit](https://github.com/joshpuckett/dialkit), [Bloom](https://github.com/joshpuckett/bloom) (a React morphing menu), [Pasito](https://github.com/joshpuckett/pasito) (a themeable stepper), and [claude](https://github.com/joshpuckett/claude) (currently a README and one `rumi/SKILL.md`). Bloom and Pasito are component references, not Graphical source. No additional skills or component packages were installed.

This search did not locate a public Graphical repository or the product's `GUI.md`. Coverage was the public repository inventory, the complete file listings for `claude` and `pub`, and targeted web searches for Graphical/GUI.md under Josh's account. It was not an exhaustive search of every repository's contents, private repositories, or other organizations. There is still no established evidence that Graphical uses DialKit internally.

The [live upstream commit API](https://api.github.com/repos/joshpuckett/dialkit/commits/main) confirmed `0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3`, matching the earlier clone. The complete source and Git history were copied into this workspace's [personal DialKit repository](../../tools/dialkit/PERSONAL.md) without changing the earlier checkout. Our `personal/main` branch starts from upstream 2.0.1; `personal-base/2.0.1` preserves that baseline. Personal version 0.1.0 adds provenance and development instructions. Source, docs, examples, upstream tests, lockfiles, and the MIT license are present. Dependency installation, runtime validation, and a personal control-to-system integration remain future implementation work.

### REF-005 — Michael Lee's DialKit macOS

- **Added / reviewed:** October 12, 2026; public `main` documentation, package manifest, and license inspected. No pinned local checkout created.
- **Origin:** Jason supplied [Michael Lee's profile](https://github.com/mikelikesdesign), then specifically [dialkit-macos](https://github.com/mikelikesdesign/dialkit-macos), saying “Let me add this here to our dial kit as well.”
- **Observed in the [README](https://github.com/mikelikesdesign/dialkit-macos#readme):** A separate Mac inspector tunes values exposed by a connected native app over localhost. The app must integrate its debug bridge and consume the exposed values; this is not automatic inspection of arbitrary applications. Selected values can be copied back into source defaults. The project credits Josh Puckett's original DialKit and links a complementary [iOS drawer package](https://github.com/mikelikesdesign/dialkit-ios).
- **Platform scope from [Package.swift](https://github.com/mikelikesdesign/dialkit-macos/blob/main/Package.swift):** Swift tools 5.10, iOS 17, and macOS 14 minimums; package libraries plus inspector and CLI executables. Compatibility and runtime behavior have not been tested here.
- **Reuse terms:** [MIT license](https://github.com/mikelikesdesign/dialkit-macos/blob/main/LICENSE), copyright 2026 Michael Lee. Retain its copyright and permission notice when reusing the code.
- **Candidate use — our interpretation:** A native control surface alongside Josh's web DialKit. Direction Kit would define controls, locks, source references, and saved specifications; this software would let us tune a running native specimen. Mapping the selected values back into our Markdown records still needs implementation.
- **State and scope:** Saved as a tooling/workflow reference, not installed, built, or integrated. Jason has not selected a visual style or confirmed a branch-specific taste definition by supplying this link. [Taste intake TR-002](../../agents/memory/research.md#taste-ref-tr-002--dialkit-macos-tooling-reference) preserves the request.

## Ongoing research areas

These are proposed research territories, not selected packs or scheduled work. Extend this table as Jason supplies references. Existing source details live in the linked catalogues above.

| Area | Question to investigate | Starting references from our research |
| --- | --- | --- |
| Typography and editorial composition | How do type, measure, grid, and rhythm establish character? | Brand Guidelines, Land-book, Refero Styles, DxA typography studies |
| Product structure and density | What makes dense work clear, and spacious work purposeful? | Mobbin, Refero, BoardUI, affectUI |
| Tactile controls | Which physical cues improve interaction and which are decoration? | Planes, Fluid Functionalism, Emil's craft suite |
| Glass, light, and material | Which material rules remain legible and implementable? | Liquid Glass, Aave glass article, DxA Glass Lab sources |
| Motion and continuity | What are the triggers, timings, interruption rules, and reduced-motion alternatives? | 60fps, Transitions.dev, Motion, DxA motion studies |
| Procedural graphics and creative code | Can an expressive graphic become an editable family of assets? | GSS, Kool Brushez, shadercn, DxA shader studies |
| Brand, icons, imagery, and texture | What makes assets belong to the same visual language? | Brand Guidelines, Backgrounds Supply, saved font and icon resources |
| Agent interfaces and data | How does the direction handle progress, uncertainty, correction, and dense information? | affectUI, Kobra, BoardUI, EvilCharts, DxA agent-interaction workflow |
| Portable design instructions | Which rules survive a change of model or implementation stack? | Graphical, DialKit's exact-value handoff, Refero Styles, Superdesign, our own future pack trials |

## How references enter the library

Accept URLs, screenshots, recordings, repositories, snippets, notes, and Jason's reactions. Preserve the actual supplied artifact or a stable reference to it. A link that was saved but not opened is an intake item, not a reviewed source.

Use one record per distinct reference; connect multiple evidence posts to it rather than duplicating the resource. Extend the existing catalogue where appropriate. Keep dated additions and corrections; mark obsolete interpretations as superseded instead of silently erasing them.

```md
### REF-<stable ID> — <name>
- Added / source date / last reviewed:
- Source URL or supplied file; creator; related repository:
- Research areas and relevant screen, component, or timecode:
- Jason's words, if any:
- Observed: what is directly visible or present in source code.
- Inferred: our interpretation and its supporting evidence.
- Candidate use: the specific quality this could contribute.
- Exclusions: qualities we should not carry forward.
- Review state: captured / inspected / source-checked / tested.
- Asset or code reuse terms: known terms or unresolved.
- Linked directions and dated feedback:
```

Do not infer exact motion from a still, exact spacing from an unscaled crop, or approval from repeated appearances. Separate Jason's stated preference from the agent's hypothesis, and scope preferences to an element, pack, or project. Broaden them only when Jason does.

## Prompt to grow the library

```text
Read research-library.md and the relevant existing catalogue records.
Add these references: [links, attached visuals, code, and notes].
Research area or question: [area/question, or classify the supplied material].

Preserve source identity, dates, my feedback, and evidence quality. Inspect
the supplied material using the available tools. Record what each reference
could contribute, what remains uncertain, and where it differs from earlier
references. Reuse existing records and retain their history.

Update the research-area queue with useful next questions. Do not turn new
references into permanent theme rules. If I name an active direction, pass
relevant findings to the research-brief workflow as proposed changes.
Return the saved records and the few findings that affect a design decision.
```

## Research history

- **October 12, 2026, portable kit and taxonomy:** Added Direction Kit for the all-Markdown requirement, including proposed app-store-like categories, style branches, large-reference intake, exact controls/snapshots and Dream Mode mapping. Reviewed Apple and Google category guidance and primary design-skill repositories; sources and evidence limits are recorded in [SOURCES.md](workflows/sources.md). Aligned dreaming with the separate chat's approved standards and preservation of daytime alternatives.

- **October 12, 2026:** Connected the existing three-workspace archive and recent Design Agents chats to this workflow. Added the Graphical comparison, inspected a Refero Styles example, and reviewed Superdesign's local organization. Jason selected reusable visual direction packs as the focus and described historical research plus a tunable research input as separate needs.
- **October 12, 2026, correction:** Recovered the October 5–6 Graphical founder research outside the three-workspace archive, verified the existing DialKit clone and copy-instruction source, and added its tuning-to-agent handoff to the research, system, and application guides. The first draft had used Graphical's public workflow without this recovered implementation research.
- **Current state:** Research foundation assembled. No personal theme pack has yet been selected, extracted, built, or validated under this workflow. The four Markdown guides are drafts for developing that process together.
