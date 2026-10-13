# Taste research by design category and style

Owner: Research Curator · October 12, 2026

Research follows **apps / websites / games → viewport → category → style**. [Direction Kit's taxonomy](../workflow/TAXONOMY.md) owns names and IDs; [COVERAGE.md](COVERAGE.md) owns scoped coverage. This file owns the category research index and recommendation contract supplied to Dream Mode.

## Design category research index

| Design type | Category menu beneath every applicable viewport | Current category research | Matching styles |
| --- | --- | --- | --- |
| apps | [20 approved interface families](../workflow/taxonomy/APP-INTERFACES.md) | all not researched | unset |
| websites | [18 approved website uses](../workflow/taxonomy/WEBSITE-CATEGORIES.md) | all not researched | unset |
| games | [17 Google Play game genres](../workflow/taxonomy/GAME-GENRES.md) | all not researched | unset |

No branch-specific recommendation record, approved baseline, or enrolled target is recorded yet; Dream Mode remains off. The prior custom 27-category menu is superseded for new classification and retained in [legacy mapping](../workflow/taxonomy/LEGACY-CATEGORIES.md). Historical references are not automatically reclassified or promoted to taste definitions.

Follow [TASTE.md](../workflow/TASTE.md). Record only matching styles, with the fit and research status defined in [STYLES.md](../workflow/taxonomy/STYLES.md). Each viewport/category combination has its own evidence; do not fill every branch with the same style list.

## Split branch research into Markdown files

Existing category folders contain README records under the previous store-category model. The replacement app/website menus are approved and their directories have not been generated. Classify new research by the corrected design-category basis; preserve and deliberately map old records. Add actual evidence and feedback to the relevant record, then link activated research here and in COVERAGE.md. Each record owns its scoped taste definition, references, feedback, style links, and recommendations. Keep source images at their canonical location and link them by ID.

```text
apps/<viewport>/<category>/README.md
websites/<viewport>/<category>/README.md
games/<viewport>/<category>/README.md

<type>/<viewport>/<category>/<style>/README.md
```

Browse [apps](../../apps/README.md), [websites](../../websites/README.md), or [games](../../games/README.md). For example, [Mobile Finance](../../apps/mobile/finance/README.md) and [Mobile Puzzle](../../games/mobile/puzzle/README.md) are unresearched category containers. Add style folders only for actual exploration or supported matches, using the [style template](../styles/STYLE-TEMPLATE.md). Exact viewport profiles, finer page/screen details, industry, and optional treatments stay within the record. `apps/finance` and `games/puzzle` remain category IDs; their namespace is not repeated in folder names.

## Active branch records

None yet. Add a row when collecting begins:

```md
| Design type | Viewport / profile | Design category | Canonical record | Matching styles and fit | Research state |
| --- | --- | --- | --- | --- | --- |
| <type> | <viewport/profile> | <category ID> | <relative Markdown link> | unset / unassessed | collecting |
```

## Build recommendations from evidence

For each category and style branch:

First check coverage and create or load the scoped taste definition from TASTE.md. The steps below apply as evidence arrives; they do not authorize filling empty branches with recommendations. Report missing or partial research to the user before personal advice.

1. Retain Jason's original labels and reactions; add normalized category, product-scope, family and treatment IDs.
2. Link the relevant historical and newly supplied references. Say what each contributes and what should be excluded.
3. Translate feedback into observable guidance: what to preserve, improve and avoid, with reasons and examples. Separate hard rules from qualitative principles and permitted variation.
4. Mark each recommendation **candidate**, **confirmed**, **superseded**, or **rejected**. Confirmed requires Jason's explicit instruction or an existing approval at the stated scope. Do not ask him to repeat a decision already recorded. An agent's interpretation remains a candidate even when supported by several references.
5. Link confirmed recommendations to the applicable approved baseline or record Jason's explicit scoped update/exception. Preserve prior baseline versions. A recommendation can guide judgment within an existing baseline without replacing its fixed rules.

Use this record for an activated branch:

```md
### <Category / family / treatment> — taste recommendations
- Record ID and revision:
- Design category ID and set; subject scope; family/treatment IDs:
- Design type; viewport type and size/profile; page or screen detail:
- Taste definition ID/version; research state; evidence access:
- Supported aspects; missing or disputed aspects; user notice:
- Definition of the design territory and intended tasks:
- Canonical reference IDs and attachments:
- Jason's feedback, original wording, dates and decision sources:
- Parent/category baseline and branch baseline versions, if approved:

| Recommendation ID | Status | Aspect | Preserve / improve / avoid | Reason and evidence | Scope | Rule type |
| --- | --- | --- | --- | --- | --- | --- |
| <ID> | candidate / confirmed / superseded / rejected | <aspect> | <observable guidance> | <source> | <targets/conditions> | required / default / permitted variation / qualitative principle |

- Exact values and mappings, where established:
- Approved examples, counterexamples and exclusions:
- Exceptions, conflicts and unanswered research questions:
- Applicable design targets and their current direction versions:
- Dream enrollment: off / on; authorized destinations and exclusions:
- Last dream report and feedback returned to learning:
```

## The nightly taste packet

At the beginning of a Dream run, assemble a versioned Markdown packet for each enrolled category/branch. Include the actual governing content so another assistant can use it, not just filenames or links to mutable records.

Run the TASTE.md coverage check first. If governing research is absent, say so upfront and mark the packet incomplete. Do not manufacture guidance to make a target eligible for dreaming.

- Category, product scope, style branch, target IDs and current design intent.
- Design type, viewport type/size, design category, page/screen detail, definition/version, research state, evidence access, supported aspects, and gaps disclosed to the user.
- Approved baseline snapshots and applicable confirmed recommendation IDs/revisions, including their wording, scope, reasons, examples and evidence.
- What to preserve, improve and avoid; fixed rules, allowed variation, and recorded exceptions.
- Recent explicit feedback, rejected adjustments, and unresolved conflicts.
- Selected references and an attachment manifest, plus inspection limitations.
- Editable destinations, exclusions and the checks that can actually be performed.

Use the category and branch's own recommendations. General taste memory applies only where its scope fits. Do not transfer a recommendation from an unrelated category or make all branches look alike. Candidate recommendations may appear in a separate research section; they cannot become automatic repair rules.

Pin the packet at run start. If Jason updates a governing preference during the run, refresh the affected comparison and record a new packet revision before writing. Never silently mix versions. Unresolved conflicts remain visible while independent work continues.

Each meaningful refinement in the morning report must name the recommendation or baseline principle it serves, the weakness observed, the change, and its verification. Return Jason's later reaction to [learning](LEARNINGS.md) and [current memory](MEMORY.md) at the right scope. The agent's own positive review does not promote a recommendation to confirmed.

The [Dream Mode agent](../agents/dream.md) owns execution, enrollment and scheduling. This index prepares its taste inputs; no nightly run is activated here.
