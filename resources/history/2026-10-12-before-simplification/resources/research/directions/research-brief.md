# Research brief for developing and tuning a direction

Working draft · October 12, 2026

This is the expanded workspace guide. [Direction Kit](../../../shared/workflow/START.md) supplies the portable commands and state contract; use its [taxonomy](../../../shared/workflow/TAXONOMY.md) to identify category, product scope and style branch before going wide. An existing DIRECTION.md can serve as the kit's active BRIEF.md; record that mapping rather than duplicating it.

Use the [research library](research-library.md) as a source pool. This stage selects references, interprets them, explores distinct possibilities, and maintains the current intent for one theme family. Its output is a versioned `DIRECTION.md` that the [design system](design-system.md) stage can implement.

The library is historical and broad. Each direction brief is current and selective. Updating one brief does not change unrelated packs or make the entire research archive part of every generation prompt.

## Inputs

First follow [TASTE.md](../../../shared/workflow/TASTE.md) and check the requested design type, viewport type, and consumer category in [coverage](../../../shared/taste/COVERAGE.md). Tell the user when personal taste research is missing, partial, draft, or unverifiable. Define taste from supplied or recovered evidence before personal recommendations; keep requested general exploration provisional. Record the definition/version and unsupported aspects in DIRECTION.md.

- A theme family, visual territory, or question Jason wants to investigate.
- Selected library reference IDs and any new supplied material.
- What Jason likes, dislikes, wants to retain, and wants to push further.
- Existing direction and version, when tuning rather than starting.
- Intended uses and constraints: product UI, websites, native UI, graphics, or other outputs.
- Exploration mode: discover new families, explore within a family, or refine a named direction.

If no territory has been selected, establish the research question and coverage first. When exploration is requested, propose a small set grounded in relevant evidence and make the differences concrete; unsupported choices remain provisional. Do not automatically populate missing personal taste. Ask only for decisions that materially change the work; continue independent research.

## Turn references into decisions

For every selected reference, identify its job: typography, hierarchy, layout, material, imagery, behavior, or implementation. Prefer a few complementary references over an undifferentiated mood board. State which reference governs each quality and how conflicts are resolved.

Translate adjectives into observable rules. For example, “tactile” needs a surface treatment, a control shape, a press response, and a rule for where those cues appear. “Editorial” needs type roles, text measure, hierarchy, and compositional rhythm. Candidate rules may be inferred or newly proposed; label them accordingly.

Define three levels:

| Level | Meaning | Example of the kind of instruction required |
| --- | --- | --- |
| Identity | What must survive every application of this direction. | The relationship between type, surface, accent, and hierarchy. |
| Allowed variation | What an agent may explore, with named options or bounds. | Two approved density modes; a bounded display scale; alternate compositions. |
| Open questions | What is unresolved and needs a comparison. | Whether depth comes from borders, shadows, or material effects. |

These are proposed controls, not Jason's selected visual values. Put exact values in the brief when supported; leave remaining extraction work explicit for the system stage.

## What “go wide” means

Across theme families, vary the visual premise: typography, composition, material, density, and interaction character can all differ. Within a family, retain its identity and vary only the declared exploration axes. Within a selected application, refine the requested qualities without silently restarting exploration.

Use the number of directions Jason requests. When he asks to go wide without specifying a count, propose three as a working default and name the decision each explores. Different accent colors alone do not establish different directions.

Keep comparison content and intended tasks consistent. Describe each candidate's strongest use, tradeoff, and departure from its siblings. Do not combine incompatible references into an average merely to use every supplied image.

## Direction handoff

Create a separate `directions/<slug>/DIRECTION.md` for each requested candidate. These output paths are proposed conventions; no candidate directories have been created yet.

```md
# <Direction name>
- Direction ID and version:
- State: candidate / selected / superseded.
- Theme family and one-sentence premise:
- Intended uses and unsuitable uses:
- Source reference IDs, visual attachments, and relevant excerpts:
- Jason's explicit feedback and decisions:

## Identity
3–5 concrete rules that make this direction recognizable.

## Visual language
Typography, hierarchy, layout, density, color roles, surfaces, shapes,
icons, imagery, data presentation, and motion. Mark each major rule as
observed, inferred, or proposed; cite its reference where applicable.

## Variation boundaries
Allowed axes and their options or bounds; fixed qualities; excluded cues.

## Representative examples
What a type specimen, component specimen, and full screen must demonstrate.
Identify a contrasting example that would break the direction, and why.

## Extraction questions
Missing values, unavailable assets, conflicting cues, and testable hypotheses.

## Decision history
Date, feedback, interpretation, changed rule, scope, and prior version.
```

The handoff is ready for system extraction when a receiving agent can explain the identity, find the relevant visuals, and distinguish fixed rules from open choices. An unresolved palette value is acceptable when explicitly assigned to extraction; an undefined visual premise is not.

## Tune without losing history

When Jason adds a reference or reacts to a result, record the input in the library and update only the relevant brief. Show the meaningful delta: retained, changed, rejected, and unresolved. A new reference can reinforce a direction, replace one cue, or seed a separate family.

Use explicit selection to mark a candidate selected. Generated outputs and repeated source appearances do not establish preference. Track changes by scope: this component, this application, this pack, or a personal convention. Preserve previously generated system versions so a later application can identify which brief it used.

When feedback comes from a live tuning workbench, retain the selected preset and exact exported values with the direction version. The recovered [DialKit research](research-library.md#ref-004--josh-pucketts-dialkit-and-the-recovered-founder-research) supplies this concrete handoff pattern. Capture why Jason chose the values as well as the values themselves; a numeric snapshot alone does not explain the reusable design intent.

## Prompt to research or tune

```text
Use research-brief.md to develop [theme family or direction].
Mode: [discover families / go wide within a family / refine].
Inputs: [library IDs, attached visuals, current DIRECTION.md, and my feedback].
Intended uses: [uses]. Explore [count or proposed count] directions.

Identify what each reference contributes and resolve conflicting cues.
Write concrete identity rules, permitted variation, and open questions.
Go wide on [axes]; preserve [fixed qualities]. Keep the comparison task
and content consistent. Explain how each direction differs and its cost.

Save versioned direction briefs with source links and visual references.
When tuning, preserve history and summarize the exact changes. Label my
decisions separately from your hypotheses. Prepare a focused handoff for
system extraction; keep unrelated library material out of that handoff.
```

For a chat model without workspace access, attach the selected source images and document contents. A filename or URL alone does not establish that the model inspected the material. Keep the same direction ID and version across agents.
