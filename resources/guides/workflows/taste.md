# Define taste before recommending it

Jason's instruction · October 12, 2026

A design type, device type, viewport size, design category, interface subcategory, or style name is a place to collect research. It is not evidence of Jason's taste. Before recommending, applying, or evaluating a design as his taste, check whether a documented definition and supporting research cover the actual task.

## Start from the reference collection

[Taste](../../../agents/TASTE.md) absorbs screenshots, screen grabs, MP4s, websites, links, and inspiration. Inventory all supplied material; record what was actually inspected and what remains pending or inaccessible. Annotate page regions or clip intervals, composition, hierarchy, typography, spacing, color, material, and observed behavior. Still images do not establish motion, unseen states, or hidden geometry.

Separate the reference's role (**layout**, **mood/inspiration**, **both**) from the intended transformation (**Reconstruct**, **Adapt**, **Explore**). [The research note](../reference-to-layout-research.md) proposes Adapt for new products using an existing reference and explains when alternatives help. These workflow choices do not establish a personal aesthetic.

Translate Jason's selected qualities and feedback into the scoped definition below. Supplying a source does not endorse every feature. Existing explicit feedback applies immediately within its scope. Taste passes the references and defined direction to [Dial](../../../agents/DIAL.md), which owns **the custom kit and first React layout**, using the same components and values. A requested full build continues into Dial without another request; Taste-only or research-only tasks retain their requested scope. Use [Taste's handoff](../../../agents/TASTE.md#result) to carry classification, evidence, decisions, and destinations.

## Settle the Atlas mapping through dialogue

As references enter Taste, automatically suggest relevant entries from [Atlas](../../../agents/ATLAS.md), with brief reasons and alternatives where useful. Use **design type → device type → viewport size → category → subcategory → style** to describe the intended direction. Distinguish source traits from the project's target viewport or category; a screenshot alone may not establish either.

Work back and forth with Jason until each layer is selected. Use choices already stated in the request or conversation. If no existing entry fits, prompt with the gap and a proposed name/definition, refine it together, and add the agreed entry to the canonical Atlas record. Do not force a match or silently adopt a new term. Continue reference inspection while a classification question remains open.

Keep suggested and selected mappings in the existing direction record, with canonical names/links/IDs and the decision that resolved them. A taste direction needs its type, device type, viewport size, category, subcategory, and style selected before it is marked defined. This selection establishes classification; the evidence requirements below still govern personal taste coverage.

## Check at the start of each run

1. Identify the path: **design type → device type → viewport size → category → subcategory → style**; mark unresolved layers while the dialogue is in progress. Design types are **apps**, **websites**, and **games**. Use app product categories, website purposes, and game genres, followed by interface-family subcategories, as linked from [Structure](../../structure.md). Existing app interface names remain the subcategory menu; newly proposed website/game families require resolution through Atlas. Styles remain unresolved. Record device type in layer 2 and viewport size/profile in layer 3; the interface family belongs in layer 5, with exact screen labels and remaining subject detail in metadata. Style is layer 6. Keep style unset while assessing fit, then resolve the selection with Jason before marking the direction defined.
2. Read the coverage registry, matching definition, relevant research, and Jason's decisions. In this workspace the registry is `agents/memory/COVERAGE.md`. In a portable copy, include the relevant records in STATE.md or HANDOFF.md; the check does not depend on access to this workspace. Missing records mean missing documented coverage, not proof that Jason never researched the subject.
3. Check the requested aspects against the definition's supported scope and exclusions. Typography evidence does not establish motion taste. Mobile references do not establish TV or watch preferences. A generic craft skill, tutorial, generated example, or broad source catalogue does not fill a personal taste gap.
4. Tell the user which branch lacks research or has partial coverage **before** personal recommendations or taste-based edits. Give one concise notice per run; repeat only if scope or coverage changes. When covered, identify the definition/version used in the handoff.
5. Record the coverage, evidence, gaps, and notice in run state. Continue the appropriate work described below.

## Research states

| State | Meaning | Required behavior |
| --- | --- | --- |
| **not researched** | No branch-specific research or definition is documented; historical leads may exist. | Disclose the gap, collect supplied research or recover history, and leave personal style recommendations unset. |
| **collecting** | References or feedback exist but have not been resolved into a definition. | Say what is known and missing; inspect and label the evidence. |
| **draft definition** | Evidence has been interpreted into criteria that Jason has not established as the branch's taste. | Present the sourced draft and open questions; use it only as a labeled candidate when exploration is requested. |
| **defined** | A scoped definition, supporting evidence, Jason's recorded confirmation, and a version are available. | Apply supported criteria only; disclose any requested aspect still undefined. |
| **needs review** | Conflicting evidence or changed decisions call criteria into question. | Identify affected criteria; use unaffected supported rules and leave disputed recommendations unresolved. |

Track evidence access separately as **available**, **partial**, or **unavailable**. If a definition exists but cannot be read, say that its coverage cannot be verified. Do not erase its status or reconstruct it from memory.

Creating a folder, saving a version, building a design, selecting a category, or approving this organization never promotes taste research status. Parent coverage does not automatically populate children. Apply explicitly scoped shared rules only where their mapping is supported, retaining child gaps. Source volume is not a readiness threshold.

## Required user notices

Missing research, with the actual branch substituted:

> I don't have your taste research for websites → desktop → Finance (dashboard page) documented yet. We need references and your feedback to define what good design means here before I recommend a personal style.

Partial research:

> We have your typography and layout preferences for this branch, but motion and chart treatment are still undefined. I'll keep those choices provisional.

Inaccessible evidence:

> A taste definition is recorded for this branch, but I can't access its supporting material in this run. I can't verify those preferences yet.

Show the notice in the conversation, not only in a saved file or after making recommendations. Do not claim research is absent from every past chat merely because it is absent from the current packet.

## Define what taste means for the branch

Establish purpose, audience, tasks, platform/page constraints, and the experience Jason wants. Use his labeled references and feedback to define observable qualities in hierarchy, composition, typography, density, color, imagery, materials, components, motion, and interaction. Include qualities to avoid, boundaries for variation, and examples of a poor fit.

Keep functional, accessibility, and platform requirements distinct from personal preferences. Leave unknowns explicit and mark irrelevant aspects with a reason. A partial definition cannot support claims about its missing aspects.

Use this Markdown record or equivalent sections in an existing brief. Create records as research begins; do not invent definitions for every taxonomy combination.

```md
# Taste definition for <branch>
- Definition ID / version / updated:
- Design type: apps / websites / games
- Viewport type; size/profile, units, and orientation:
- Product category set/ID and interface subcategory ID; narrower subject scope:
- Page/screen/flow detail and target platform, if applicable:
- Style family or treatment: unset unless selected
- Atlas mapping status: suggested / unresolved / selected
- Canonical Atlas names, links/IDs, and Jason's selection decision:
- Missing entry or mapping question and resolution:
- Style fit and supporting reason: unassessed / candidate match / supported match / not a fit
- Research state: not researched
- Evidence access: available / partial / unavailable
- Task, audience, conditions, and intended experience:
- Functional, accessibility, and platform requirements:
- What good design means here, in Jason's words: unset
- Research records and inspected source locations: none

| Aspect | Desired quality and reason | Observable criterion | Source and Jason's feedback | Status and scope |
| --- | --- | --- | --- | --- |
| <aspect> | unset | unset | none | undefined |

- Qualities to avoid and supporting examples:
- Allowed variation / exclusions / explicit shared-rule mappings:
- Supported tasks and aspects / unsupported tasks and aspects:
- Open questions and next research needed:
- Jason's confirmation: decision source, date, version, and exact scope, or none
- Related direction and approved Dream baseline, if any:
- Change history and superseded definitions:
```

A direct preference supports its scoped criterion immediately; do not ask Jason to approve the same statement again. Claim the definition as established only to the extent his recorded decisions support it. Approval of the taxonomy is not approval of a visual style.

## Proceed without inventing taste

For personal taste work, route missing coverage to research: inspect supplied material, recover relevant history, organize evidence, and identify the smallest missing input. Do not automatically fill the branch with fashionable styles, palettes, fonts, or token values.

When Jason requests general advice, a provisional build, or open exploration, continue that authorized work with clearly labeled proposals. Say those choices do not yet represent his established taste. Keep outputs as candidates; do not write them into confirmed memory or use them as an approved Dream baseline. Independent implementation and functional checks can continue without waiting for taste research.

Dream Mode requires approved criteria covering the target. Missing or disputed taste criteria cannot justify autonomous aesthetic changes. Report the gap, continue covered targets and independent checks, and preserve undefined aspects. A defined taste record alone does not enroll a target or approve a Dream baseline.

Distinguish **supported personal preference**, **general craft guidance**, and **provisional design proposal** in recommendations and handoffs. Carry coverage through research, system extraction, application, learning, and dreaming; later stages cannot erase missing evidence.
