# Direction state — template

Template only. Copy into a project STATE.md and replace placeholders. `unset`, `none`, and `off` are intentional defaults. Empty fields are not permission, evidence, or a selected style. Read [START.md](START.md) for command and handoff behavior.

## Identity and active selection

- Kit version: 0.1
- Pack/direction ID: unset
- Human-readable name: unset
- Working revision: w001
- Based on immutable saved version: none
- Selection: candidate / selected / superseded
- Design type: apps / websites / games; unset until selected
- Viewport type / size profile, units, and orientation: unset
- Consumer category set, ID, and definition: unset
- Page/screen/flow detail and target platform: unset
- Subject scope and definition: unset
- Style family/treatment IDs and definitions: unset
- Style fit and supporting evidence: unassessed
- Related categories and intent tags: none
- Task, audience, content set and output format: unset
- Viewports, modes and relevant interaction states: unset
- Current mode and requested next action: unset

## Taste coverage

- Full taste path: unset
- Research state: not researched
- Taste definition location/version: none
- Evidence access: available / partial / unavailable
- Research and Jason's feedback supporting the definition: none
- Supported aspects / explicit shared-rule mappings: none
- Missing or disputed aspects: all until researched
- Jason's confirmation and exact scope: none
- Missing-research notice shown to the user this run: not yet checked
- Next research input needed: unset

Run [TASTE.md](TASTE.md) before personal recommendations. Draft examples and candidate outputs do not populate these fields. Keep coverage separate from design selection, build verification, and Dream approval.

## Canonical record locations

Use sections in this document or relative Markdown filenames. Choose one canonical location for each; do not keep competing values.

| Record | Location / version |
| --- | --- |
| Historical library and research queue | unset |
| Active brief and evidence map | unset |
| System rules, token table and control definitions | unset |
| Version snapshots | none |
| Approved baseline records | none |
| Applications and Dream reports | none |

## Current rules and values

### Image reference workflow state

- Reference-board originals and crop locations: none
- Target component boundary or page/screen, content, and comparison viewport: unset
- Image IDs inspected / pending / unavailable: none
- Reference contribution map in the active brief: unset
- Interpretation method: agent-assisted / integrated model / unset
- Mode: reproduce / explore / unset
- Reconstruction code revision and visual comparison evidence: none
- Remaining visual mismatches and inferred details: unset
- Before/after DialKit wiring comparison: not run
- Independent style-kit IDs and their governing source contributions: none
- Editable preview location and code revision: none
- Evidence-to-rule-to-control mappings: none
- Runtime DialKit config/value location, if implemented: none
- Prompt handler: current agent / in-app model integration / unset
- Prompt/change history and explicit control or code deltas: none
- Reference intake / reproduction fidelity / unchanged wiring / prompt edit / kit switching / reload / export checks: not run

These fields identify the records owned by [RESEARCH.md](RESEARCH.md#image-references-to-dialkit), [SYSTEM.md](SYSTEM.md#from-image-evidence-to-editable-controls), and [APPLY.md](APPLY.md#verify-the-image-reference-workflow). They do not create an image analyzer or approve a direction. Save source roles and assets with each version as well as exact values.

### Component variants and applications

Follow [COMPONENTS.md](COMPONENTS.md).

- Component IDs, canonical code/assets, and base revisions: none
- Variant IDs/revisions, exact values, tokens, and control bindings: none
- Style branch paths, fit evidence, scope, and exclusions: none
- States, responsive/input rules, and verification gaps: unset
- Application targets and pinned variant revisions: none
- Variant save / reload / style isolation / target integration checks: not run

### Active design decisions

- Visual premise: unset
- Identity rules with stable IDs, scopes and evidence: unset
- Required product/accessibility/platform constraints: unset
- Exploration locks: none declared
- Allowed variation and open questions: unset
- Selected reference IDs and actual attachment names: none
- Jason's decisions, dates and applicable scopes: none recorded

```md
| Token/rule ID | Resolved value | Unit/mode | Provenance | Source/rationale |
| --- | --- | --- | --- | --- |
| <ID> | <value or unset> | <unit/mode> | observed / inferred / proposed | <evidence> |

| Control ID | Type | Current | Allowed / min / max / step | Unit | Affected IDs | Locked? |
| --- | --- | --- | --- | --- | --- | --- |
| <ID> | <type> | <value> | <bounds/options> | <unit> | <IDs> | yes / no |
```

- Preset definitions: each named preset's complete value map
- Selected preset ID/version: none
- Effective resolved values after preset overrides: unset
- Asset/font availability and fallback decisions: unset

## History and immutable versions

Increment the working revision after each meaningful mutation. Saving creates a unique immutable version such as `v001`, including the whole effective state, current rules, values, control definitions, evidence and rationale. Preserve `wNNN` as the edit counter and the saved-version ID as lineage; they serve different purposes.

| Date / working revision | Request | Before → after | Scope / reason | Based on / saved version |
| --- | --- | --- | --- | --- |
| unset | none | none | none | none |

| Saved version ID | Name | Snapshot location | Parent | Selection status | Approval status |
| --- | --- | --- | --- | --- | --- |
| none | none | none | none | candidate | unapproved |

Loading a saved version restores its full state and starts a new working revision. It does not alter that snapshot or erase later saved versions. Unknown versions must be reported, not approximated. Saving and selection do not imply baseline approval.

## Approved standards

- Category baseline ID/version and immutable snapshot: none
- Branch baseline ID/version and immutable snapshot: none
- Approval: who explicitly approved, when, exact scope and decision record: none
- Effective inherited rules: unset
- Applicable confirmed taste recommendation IDs/revisions and canonical records: none
- Nightly taste packet snapshot/revision, with full governing content: none
- Per-rule status: required / overridable default / permitted range
- Approved exceptions with scope, reason and decision record: none
- Rejected changes and reasons: none
- Proposed baseline changes awaiting selection: none

Approval records reference the exact immutable snapshot; a mutable current file or a website URL alone is insufficient. Preserve previous approved versions and state which one is active. Record design approval independently from implementation readiness.

## Dream enrollment

- Enabled: off
- Included designs or discovery boundary: none
- Target-to-category/branch/baseline mapping: none
- Editable destinations and authorization: none recorded
- Exclusions and actively edited areas: none recorded
- Daytime intent and feedback to preserve: unset
- Verification method and available tools: unset
- Last report and next continuation point: none
- Scheduling: not configured by this kit

## Verification and transport

- Specification status: draft
- Code prepared: no
- Executed: no
- Visually inspected: no
- Checks actually performed and evidence: none
- Unavailable tools/assets and their effects: unset
- Handoff attachment manifest: none
- Next action with complete inputs: unset

When exporting HANDOFF.md, embed the relevant records and operating instructions per START.md. Pointers in this template are convenient inside a folder; pointers alone are not a portable handoff.
