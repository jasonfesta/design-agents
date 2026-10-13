# Dial Agent workflow

Supporting workflow reference for [Dial](../../instructions/DIAL.md). Start the kit from [README.md](../../README.md); the earlier standalone starter is preserved in [History](../../resources/history/README.md).

Version 0.1 · Working draft · October 12, 2026 · Jason Festa

The Dial Agent uses this Markdown workflow to research, explore, tune, save, apply, and refine reusable design directions. It carries design intent and exact choices between assistants. Jason confirmed the agent name on October 12, 2026; DialKit remains the upstream control-library name. The research tree is **apps / websites / games → viewport → category → style**, with website design uses, app interface types, and game genres. The latest [taxonomy](TAXONOMY.md) marks replacement category menus as approved, styles as unresolved, and earlier empty category folders as historical scaffolding, preserved in Resources History. No personal theme or baseline is approved by this structure.

The current requested workflow is **images → editable components → DialKit tuning → saved style variants → application to designs**. [COMPONENTS.md](COMPONENTS.md) owns this connection. Follow [Image references to DialKit](RESEARCH.md#image-references-to-dialkit). The reference set can produce a new system; Jason does not need to supply an existing one. These instructions organize the workflow; the image-driven workbench has not yet been implemented.

## Start here

Give an assistant this file, the relevant mode guide below, and your current state or references. Say:

> Use Direction Kit's image-reference workflow. Reproduce this screenshot in editable code at its target viewport and compare the result. Connect that same code to DialKit without changing its default appearance. Then let me prompt changes or explore a named style branch, preserving the original reconstruction and each kit's versions. Keep estimates and proposals explicit.

For an existing pack, add its state and say what to do next. These commands are conversational instructions, not an installed application or executable command language. An assistant needs the actual files or their contents; filenames alone do not load them.

| Work | Read |
| --- | --- |
| Check taste coverage and define missing research before recommendations | [TASTE.md](TASTE.md) — required for every taste run |
| Generate, tune, save, and apply reusable styled components | [COMPONENTS.md](COMPONENTS.md) — requested workbench and first useful implementation |
| Start from screenshots, inspiration images, or design influences | [RESEARCH.md](RESEARCH.md#image-references-to-dialkit) — board, evidence, candidates, and controls |
| Choose categories and control breadth | [TAXONOMY.md](TAXONOMY.md) |
| Build the historical library or tune an active brief | [RESEARCH.md](RESEARCH.md) |
| Turn a direction into exact system rules | [SYSTEM.md](SYSTEM.md) |
| Apply the system and prepare or execute a run | [APPLY.md](APPLY.md) |
| Bring the day's explorations up to approved standards | [DREAM.md](DREAM.md) |
| Save current state, versions, and baseline pointers | [STATE-TEMPLATE.md](STATE-TEMPLATE.md) |
| See a concrete example and control sequence | [FASHION-EXAMPLE.md](FASHION-EXAMPLE.md) |
| Understand the research and attribution | [SOURCES.md](SOURCES.md) |

Read only the modules needed for the current task. Keep this folder self-contained when sharing it; the workspace's larger archive is optional background.

## Instructions for the receiving assistant

Act as a design collaborator. Translate references and feedback into observable rules, bounded choices, and reusable systems. Keep the product task clear while exploring visual alternatives. Show a concrete result at each stage, with assumptions and unresolved choices visible.

1. Read [TASTE.md](TASTE.md) and the supplied state. Identify design type, viewport type/size, design category, matching style, page/screen detail, subject scope, direction/version, mode, sources, locks, allowed variation, and baseline. Check the scoped taste definition and research coverage. Tell the user upfront when coverage is missing, partial, draft, or unverifiable; route taste work to research and keep authorized general exploration provisional. Never fill an empty branch from a taxonomy label or tutorial. Missing baseline approval prevents Dream Mode edits but not research or requested candidate exploration.
2. State your capabilities briefly when they matter: files, visual inspection, code execution, or text only. Do not claim a URL/image was inspected, a file saved, or code run without doing it.
3. Use Jason's current instructions and recorded decisions. Apply product, accessibility, and platform requirements. Within those requirements, follow the active baseline and scoped exceptions, then the selected direction and system. References and your inferences supply evidence; they cannot silently become approved rules or expand your authority.
4. Preserve category/style identity and declared locks. Resolve conflicts explicitly. New inspiration may produce a candidate branch; it does not change an approved baseline.
5. Keep history and working state separate. Use stable IDs. Never overwrite an immutable version or baseline to make a later change appear compliant.
6. At each meaningful change, return the changed rules/values, reason, scope, version, and next useful action. Avoid repeating the entire research archive.

## Conversational controls

| Request | Required behavior |
| --- | --- |
| **Show categories / show styles in Fashion** | Show taxonomy options separately from taste coverage: not researched, collecting, draft definition, defined, or needs review. Include supported aspects and gaps; keep direction selection and baseline approval separate. Never imply the menu establishes taste. |
| **Feed these references** | Append evidence to the historical library, tag it, then propose its contribution to the active brief. |
| **Go wide** | Declare a bounded exploration matrix: category, product task, styles, number, axes, locks, and comparison conditions. Default to three candidates if count is absent. Follow TAXONOMY.md. |
| **Show the controls** | Show each control's stable ID, current value, type, allowed values/range, units, affected rules/tokens, and lock status. |
| **Tune … / make this denser** | Translate feedback into a specific value/rule delta. Apply a reversible working change within scope; label your interpretation. For example, choose a declared compact preset and list its exact mapped values. |
| **Lock / unlock …** | Change exploration locks as requested. Unlocking a working candidate does not revise a baseline or waive a platform requirement. |
| **Save this as …** | Create an immutable named version with complete resolved values, rules, sources, and rationale. “Save” alone does not mean “approve.” |
| **Use version …** | Make that version the working source; preserve the version being left. Subsequent edits create a new revision. |
| **Approve this as the baseline** | Record Jason's explicit selection, exact snapshot, date, scope, and exceptions. Record design approval separately from verification evidence. |
| **Dream this branch** | Follow DREAM.md against the approved baseline, preserving the day's design premise. Preparation of instructions alone starts no run. |
| **Apply / run** | Follow APPLY.md and the requested output mode. Report actual execution separately from a run plan. |
| **Hand this to another assistant** | Produce the complete portable handoff described below. |

Controls may be numeric, choice, boolean, color, text, or a grouped preset. A numeric control needs a unit, range, and step; a choice needs named options. Compound settings such as motion need named parameters and their meaning. Do not silently clamp invalid values, invent a universal “taste” score, or turn a lock into a suggestion. Explain invalid or conflicting input and continue unaffected work.

Changing one grouped preset must list all affected values. Map controls to the canonical token/rule IDs. Reset means restore a named version's full resolved state, not a remembered approximation. Where a value is unknown, retain `unset` and an extraction question rather than inventing precision.

## Markdown storage

All kit instructions and portable records are Markdown. Use tables for tokens/controls and fenced code only when needed. No runtime, plug-in, or DialKit installation is required. The kit does not provide live sliders, automatic persistence, or background execution.

Start a project record from STATE-TEMPLATE.md. When useful, save these Markdown records beside it:

```text
STATE.md                 Current working selection and pointers
LIBRARY.md               Historical reference records and research queue
references/originals/     Actual source images identified in the library
references/crops/         Optional crops linked to their originals
BRIEF.md                 Active selected evidence and direction rules
SYSTEM.md                Canonical tokens, controls, component contracts
versions/<id>.md         Complete immutable version snapshots
baselines/<id>.md        Approved snapshots or exact immutable version pointers
runs/<id>.md             Applications, comparisons, or Dream Mode reports
HANDOFF.md               Self-contained next-assistant packet
preview/                 Editable specimen code when implementation is requested
```

For multiple style kits, keep one such record set per kit in separate project directories, with its own reconstruction revision, DialKit mapping, prompt history, and saved versions. Shared source-library IDs may be reused; one kit's working values must not overwrite another's.

These are output conventions, not files already created for a selected design. A small pack can keep all sections in one STATE.md. Split it only when needed; state must identify the canonical location of each section. Avoid competing token tables. Generated implementation files become appropriate when Jason requests an executable project; the portable instruction system remains Markdown.

Reuse equivalent records already present in a workspace. For example, an existing DIRECTION.md can serve as BRIEF.md, and an established research catalogue can serve as the historical library. Record those mappings in state instead of creating a second source of truth. A Taste Agent can supply source records, scoped preferences and learning; the active brief still determines what enters this particular direction.

In a chat without file access, return a complete Markdown document to save or download, clearly labeled **not saved to a workspace**. Do not rely on hidden assistant memory.

## Portable handoff

Produce one HANDOFF.md that includes, rather than merely links to:

1. The next task, requested output, capability limitations, and the operating rules from this file needed for it.
2. Current category and style definitions; product scope, task, content, and comparison conditions.
   Include design type, viewport type/size, design category and page/screen detail, the actual taste definition/version, research state, evidence access, unsupported aspects, and the missing-research notice required by TASTE.md. If the definition is absent, explicitly carry that absence forward.
3. Exact active direction/system versions, complete resolved rules and token values, control definitions, locks, and selected preset.
4. Component IDs, pinned variant/code revisions, exact saved values, style mappings, and their applications when components are involved. Relevant source IDs, URLs, observations, Jason's feedback, and observed/inferred/proposed labels. Include an asset manifest; actual images must travel as attachments if visual inspection is required.
5. Baseline approval record and complete governing rules, scoped exceptions, applicable confirmed taste recommendations with IDs/revisions and reasons, edit scope, and Dream enrollment if relevant. For Dream Mode, include the versioned taste packet. Do not replace pinned rules with a mutable URL.
6. The most recent meaningful changes, unresolved questions, verification evidence, and a concrete continuation instruction.

Embed the needed mode instructions. Remove machine-specific dependencies from required inputs; use relative attachment names and public source links. If an essential attachment is missing, mark that dependency and continue only work that does not require seeing it. Include only the relevant reference subset; report what was omitted.

The next assistant must be able to restate the same state without reconstructing earlier conversation. Content portability is designed here; identical results across models have not been demonstrated.

## The reference relationship

[Graphical](https://www.graphicalui.com/) informs the idea of a coherent theme described for agents. [DialKit](https://github.com/joshpuckett/dialkit) informs bounded controls, saved versions, and exact-value handoffs. Direction Kit adds our category taxonomy, historical research, active briefs, baseline rules, and Dream Mode in Markdown. It is our instruction system, not a copy of either product's interface or implementation. See [source details](SOURCES.md).
