# Extract the reusable system

Read [START.md](START.md), the chosen brief, and its current state. Translate the direction into a precise Markdown specification another assistant can implement. This is the canonical system record while the pack is Markdown-only.

## Inputs and output

Apply [TASTE.md](TASTE.md) before extraction. Carry the taste path, definition/version, research state, and missing aspects into the system record. If extraction is requested from a provisional direction, keep invented values labeled proposals; completing the system does not establish personal taste.

Inputs: direction ID/version, taxonomy path, product scope, evidence set, identity rules, locks, allowed variation, baseline if present, and intended platforms. Inspect an existing project only when one is supplied. Do not pick a framework merely to describe a theme.

Produce a project SYSTEM.md containing:

| Section | What must be explicit |
| --- | --- |
| Identity and lineage | Direction/version, baseline versions, fixed rules, evidence, and scope. |
| Semantic tokens | Stable IDs; exact values; units; mode; aliases; provenance; unresolved values. |
| Typography | Role, family and available asset, fallback, weight, size, line height, tracking, measure. |
| Layout | Grid, widths, gutters, spacing, density presets, alignment, responsive transformation. |
| Surfaces and assets | Color pairings, shapes, borders, depth, texture, image treatment, icon family. |
| Components | Anatomy, variants, content rules, states, responsive behavior and token bindings. |
| Motion | Purpose, trigger, timing/curve or spring parameters, interruption and reduced motion. |
| Controls and presets | Current values, valid options/bounds, mapped rules/tokens and locks. |
| Specimens and verification | The representative components/screens that demonstrate identity, and actual check results. |

Start with the components needed by the representative task. Record absent states as extraction work, not proof the reference has none.

## Canonical values

Use this token table, extending it when necessary:

```md
| Token ID | Value or alias | Unit | Mode | Origin | Evidence/rationale | Consumers |
| --- | --- | --- | --- | --- | --- | --- |
| <semantic ID> | <exact value or unset> | <unit or unitless> | <mode> | observed / inferred / proposed | <reference/rule> | <component/state> |
```

Resolve aliases without cycles. Do not use “small,” “subtle,” or “premium” as final numeric values. Retain `unset` where a decision is missing and list what is needed. Exact values newly designed by us are proposals, not extracted measurements. Record which foreground/background pairs, sizes and states were actually checked rather than asserting accessibility from appearance.

Use one canonical value location. While all-MD, it is this token table. If a requested implementation uses an existing token file, declare that file canonical for the implementation, identify the Markdown snapshot/version it implements, and verify the mapping. A code edit does not silently update the approved baseline. At export time, reconcile drift before calling the handoff exact.

## Define useful controls

```md
| Control ID | Type | Current | Allowed values / bounds / step | Unit | Token/rule mapping | Locked? |
| --- | --- | --- | --- | --- | --- | --- |
| <ID> | number / choice / boolean / color / text / preset | <value> | <definition> | <unit> | <exact IDs> | yes / no |
```

A control must change something a designer can judge. Define preset contents as complete value maps. For density, specify which gaps, paddings, and information layouts change; do not shrink text or touch targets indiscriminately. Keep high-frequency interaction feedback immediate and define purposeful motion where it helps. State dependencies between controls and reject conflicting settings explicitly.

Preserve this chain for at least one representative rule:

```text
reference observation or proposal → identity rule → token → component/state → specimen
```

Saving a version records the full effective system, including values inherited from presets. A preset name alone cannot reproduce a result after the preset definition changes.

## Mapping a system to DialKit

### Reusable styled components

Follow [COMPONENTS.md](COMPONENTS.md) for image-to-component generation and reuse. Give each component a stable ID and base-code revision; give each style variant its own saved values, token/control bindings, state rules, and scope. Preserve the original reconstruction. Pin the variant revision in each application; tuning another style must not overwrite an existing variant or silently update its consumers.

### From image evidence to editable controls

For the [image-reference workflow](RESEARCH.md#image-references-to-dialkit), first reproduce the selected screenshot in editable code and record its visual comparison. Then derive this system from that code and the inspected evidence. An existing token system is not a prerequisite. Bind DialKit to the same code with the same initial effective values, preserving the rendered appearance before exploration.

Extend each control definition with its governing reference/region or explicitly proposed rationale, the rendered element it affects, and the verification method. Preserve the chain:

```text
image and region → reproduced code element and value → DialKit binding
                → prompt/explicit delta → revised code and rendered result
```

Pin the reconstruction code revision, source viewport, and before/after-wiring comparison in state. The natural-language layer must resolve prompts to the active kit's explicit value changes or code revisions, preserving the source reconstruction.

Use continuous controls for bounded numeric properties, choices for valid alternatives, and complete presets for coordinated changes. Layout transformations may require separate candidate implementations. Do not label a slider “more like reference A” unless its exact effect is defined and visible. A screenshot supplies neither executable components nor a complete control schema; the assistant must produce those intermediate artifacts.

### Bind the candidate to the control library

When an authorized build uses DialKit, preserve its [upstream capabilities and limits](https://github.com/joshpuckett/dialkit/blob/main/docs/reference.md). Define an explicit mapping from each control ID to its canonical token or behavior, resolved initial value, unit, allowed range/options, and component consumers. Resolve token aliases into supported control values, then write selected changes back to the canonical system. Do not treat an arbitrary token JSON, Figma file, screenshot, or Markdown document as a directly compatible DialKit configuration.

Use the adapter appropriate to the actual application; see [source relationships](SOURCES.md). Expose only useful, permitted variation and enforce locks in our integration. Keep selected assets available to the receiving project. A grouped preset must resolve to complete effective values. Capture a new immutable Direction Kit snapshot when preserving a choice; a live editor's editable preset does not itself satisfy our snapshot or approval contract.

## Code and readiness

Default output is Markdown. Include code examples in fenced blocks with intended filenames when useful. Actual project implementation follows [APPLY.md](APPLY.md). Reuse an existing stack and preserve source attribution where code is reused. Record unavailable fonts/assets and their substitutions.

Track readiness separately from approval: **specification draft**, **code prepared**, **executed**, **visually inspected**, with the exact evidence for each. A selected direction can be untested; a technically verified candidate can remain unapproved.

## Prompt

```text
Extract [direction/version] using Direction Kit SYSTEM.md.
Read [brief, state, relevant references]. Preserve [locks and identity].
Define semantic tokens, component/state rules, responsive behavior, controls,
presets and representative specimens. Show source-to-rule-to-token bindings.
Keep canonical values in Markdown. Label measured, inferred and proposed
values. List unresolved decisions and actual verification separately.
Save a complete version snapshot and an exact handoff for application.
```
