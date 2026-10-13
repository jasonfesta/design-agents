# Fashion: a worked direction example

Illustrative specification · Not Jason's selected taste or approved baseline · No interface built or run

This example shows how category, style, controls, versions and dreaming connect. All visual values below are original working proposals, not measurements from references. Replace them with decisions grounded in the references Jason supplies.

## A bounded exploration

Taste research state: **not researched**. This is a tutorial, not branch evidence. Its styles, criteria, and token values must not populate a taste definition or become recommendations by default. Before using it for real work, follow [TASTE.md](TASTE.md) and disclose the missing research; use tutorial values only in requested, clearly labeled exploration.

- Design type: `websites`; viewport type: `desktop` (illustrative target, not researched shared/taste).
- Consumer category: `apps/shopping` — Shopping. Legacy subject label: `fashion`.
- Page type: commerce; subject scope: fashion.
- Product scope: `resale` — evaluating previously owned pieces.
- Task: compare three coats, inspect condition and measurements, then save one.
- Same content for every candidate: three labeled sample listings with identical photographs when provided, names, prices, condition notes, measurements and actions.
- Conditions: web, light mode, 390 px and 1440 px viewports; default, saved, empty-results and unavailable-image states.
- Locks: content, task, truthful condition information, usable controls and keyboard operation.
- Breadth: three style branches. No branch is selected by generating it.

| Candidate | Branch | What varies | The question |
| --- | --- | --- | --- |
| EX-F01 | editorial/archive-catalogue | Indexed composition, caption hierarchy, consistent object framing | Can archival character make condition and provenance easier to compare? |
| EX-F02 | minimal/quiet-gallery | More image space, fewer visual divisions, concentrated type hierarchy | Can a quieter presentation retain all decision-critical information? |
| EX-F03 | expressive/poster | Strong display type, graphic grouping, more assertive composition | Can energy coexist with direct comparison and clear actions? |

Source references: none supplied to this example. The branches are proposals to research. Do not fabricate screenshots, asset inspection, or brand attribution.

## One candidate expressed as a system

For demonstrating the controls, continue with EX-F01. This is a tutorial choice, not a user selection. Direction ID: `EX-fashion-archive`. Initial working revision: `w001`. Saved versions: none. Dream Mode: off. Baseline: none.

Identity:

| Rule ID | Rule | Scope and origin |
| --- | --- | --- |
| object-frame | Use a consistent image aspect ratio across comparison listings; retain the full object where possible. | Listing grid; proposed. |
| factual-caption | Place name, price, condition and measurements in a repeatable reading order adjacent to the object. | Listing; proposed. |
| index-structure | Use alignment and repeated caption anatomy to establish the archival character. | Screen and listing; proposed. |
| explicit-action | Keep save and inspect actions recognizable and keyboard-operable. | Interactive components; task requirement. |

Initial canonical values:

| Token ID | Value | Unit | Origin |
| --- | --- | --- | --- |
| color.surface | #FAF8F4 | sRGB hex | proposed |
| color.text | #20201E | sRGB hex | proposed |
| type.body.family | system-ui, sans-serif | CSS family list | proposed |
| type.body.size | 16 | px | proposed |
| type.body.line-height | 1.5 | unitless | proposed |
| space.page-gutter | 24 | px | proposed |
| space.card-gap | 24 | px | proposed |
| shape.card-radius | 0 | px | proposed |
| image.aspect | 4 / 5 | ratio | proposed |

These values are a small specimen, not a completed production token set. Color pairings have not been tested. Focus, status, unavailable assets, responsive transformations and other states still need extraction. Preserve access to all product facts on narrow screens; do not infer a responsive rule from the two viewport numbers alone.

Controls:

| Control ID | Type | Current | Allowed / step | Unit | Mapping | Locked? |
| --- | --- | --- | --- | --- | --- | --- |
| density | preset | comfortable | comfortable / compact | mixed | space.page-gutter; space.card-gap | no |
| card-gap | number | 24 | 12–32; step 4 from 12 | px | space.card-gap | no |
| card-radius | number | 0 | 0–8; step 2 from 0 | px | shape.card-radius | yes |

Preset definitions:

| Preset | space.page-gutter | space.card-gap |
| --- | --- | --- |
| comfortable | 24 px | 24 px |
| compact | 16 px | 12 px |

Changing density changes both spacing values. If a later individual control makes the values differ from the selected preset, retain the preset's origin but label the current state **custom** and record overrides. These bounds illustrate the protocol; they are not permanent Fashion standards.

Example trace: our proposed `index-structure` rule → `space.card-gap` → separation between listings → comparison-grid specimen. Changing the gap must be judged with the same content, not only by comparing the numbers.

## Expected conversational sequence

This is an illustrative walkthrough of required behavior, not a record of executed cross-assistant tests. Saving would require actual snapshot files or complete Markdown output in the receiving environment.

| Request | Expected state change |
| --- | --- |
| “Show the controls.” | Display the table; no mutation. |
| “Save as Archive comfortable.” | Save complete snapshot `v001` from `w001`, including all rules/values, evidence gaps and control definitions. Approval remains none. |
| “Make this denser.” | Interpret as the declared compact preset; create `w002`, set gutter 24 → 16 px and gap 24 → 12 px; state that interpretation. Leave text and image ratio unchanged. |
| “Save as Archive compact.” | Save complete snapshot `v002` from `w002`, parent `v001`; approval remains none. |
| “Set card-gap to 26 px.” | Explain that 26 is off-step; do not clamp or mutate. Offer valid neighboring values 24 or 28 if helpful. |
| “Make card-radius 4 px.” | Flag its explicit lock; leave it unchanged unless the request also clearly authorizes unlocking or revising that lock. Continue unrelated work. |
| “Use Archive comfortable.” | Restore the full `v001` state into new working revision `w003`: gutter 24, gap 24, radius 0, plus all other values/rules. Preserve `v002`. |
| “Hand this to Gemini.” | Produce one complete HANDOFF.md with START's relevant protocol, this candidate's full state and system, source gaps, no-baseline status, and next task. No reliance on earlier messages. |

The handoff's continuation might be: “Continue researching this proposed archive direction. Inspect the attached references, identify their specific contributions, and refine the brief. Do not treat the example values as measured or approved.” A receiving assistant should reproduce the exact state before proposing changes.

## How this enters Dream Mode

Once Jason approves a category standard and enrolls the relevant designs, each candidate retains its own identity. EX-F01 may need clearer metadata grouping, EX-F02 may need better information hierarchy, and EX-F03 may need display type adjusted around controls. They can all improve without becoming the same design.

For this example as written, a request to dream it produces a readiness assessment: no approved category baseline, no actual rendered targets, incomplete system states. The agent can prepare a baseline proposal and describe needed checks. It must not claim it repaired designs or start nightly execution.

## Try it with your references

```text
Use Direction Kit. Design type: websites. Viewport type: desktop.
Consumer category: Shopping. Page type: commerce. Subject scope: fashion/resale.
I am supplying these references: [files/URLs and my reactions].
Research editorial/archive-catalogue, minimal/quiet-gallery, and
expressive/poster. Create three Markdown direction briefs for the same
coat-comparison task. Keep the comparison content identical.
Show each branch's evidence, identity rules, controls, open questions,
and the specific difference it explores. Keep all three as candidates.
```
