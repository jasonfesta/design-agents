# Dream: the nightly three-hour cleanup

Version 0.4 · Operating design; timing allocation remains a proposal · October 12, 2026

Jason's requirement is a nightly three-hour Dream state that cleans up the day's generated work using Dial and Taste. [DREAM.md](../../../agents/DREAM.md) is the role entry point. This document makes the run concrete; it does not install a scheduler or enable any project.

The proposed interpretation is a **three-hour maximum work window**, including discovery, editing, verification, and reporting. Finish early when there is nothing justified to change. A nightly start time has not been selected. The earlier 3 a.m. example is historical, not a confirmed start time.

## What Dream uses as its standard

| Source | What it supplies | What Dream may do |
| --- | --- | --- |
| Taste | Reference-linked criteria, supported personal preferences, reasons, scope, and explicit exceptions | Refine hierarchy, typography, spacing, color, imagery, and material treatment within those criteria |
| Dial | Reference reconstruction, component anatomy, control bindings, exact saved values, ranges, locks, states, and pinned variants | Repair implementation drift; tune permitted values; save a new exact variant revision and verify its applications |
| Atlas | Type, device, viewport size, category, subcategory, style, and pattern terminology | Keep records correctly classified; naming is not proof of personal taste |
| Project | Current brief, Jason's explicit decisions, content, behavior, platform constraints, and file destinations | Preserve intended functionality and identity while fixing execution |

Pin the applicable evidence and revisions at run start. A source screenshot establishes a reproduction target; it does not endorse every feature as personal taste. A selected Dial value is fixed unless its rule or Jason's instructions permit tuning. If a later explicit decision changes a rule, record its scope and version; do not ask for the same approval again.

Dream must not rewrite Taste criteria or Dial locks to excuse its own result. Conflicting criteria become an item needing a decision; continue covered work. Read [taste coverage](../../../agents/memory/COVERAGE.md) and [taste guidance](taste.md) before personal aesthetic refinement. Missing research stays visible. An approved reference or explicit correction can support a scoped repair even when other taste aspects remain undefined.

## What daytime work must leave behind

Use the existing direction README and linked component records. No new agent or elaborate tracking system is needed.

- Generated or changed item ID, date/time zone, and actual code/asset locations.
- Source references and inspected pages/regions/video intervals; role (layout/mood/both) and transformation (Reconstruct/Adapt/Explore).
- Applicable Taste definition/revision, confirmed criteria, and unknown aspects.
- Kit, component, and layout revisions; reconstruction where applicable; exact values, allowed changes, and locked qualities.
- Current checks, known issues, and deliberate differences from references.

These records let Dream find all generated work without relying on chat memory. If a record is incomplete, recover what can be established from the scoped project history and files; mark uncertain generation dates or missing inputs. File modification time alone is not proof that an item was generated that day.

## The nightly window

This allocation is a starting proposal. Adapt to the queue while preserving the deadline and verification time. The three hours cover the included project set; do not silently multiply the budget by project or component.

| Elapsed time | Work | Exit condition |
| --- | --- | --- |
| 0–15 minutes | Inventory, pin standards, identify active edits, preserve starting state | A bounded queue with known inputs and gaps |
| 15–135 minutes | Repair and refine in small verified batches | Highest-value supported corrections saved; every processed item checkpointed |
| 135–165 minutes | Recheck changed views, states, values, and affected consumers | Verified saved results, or changes isolated and marked unverified |
| 165–180 minutes | Save the morning report and unfinished queue | Durable state and a clean stop before the deadline |

Check elapsed time before each edit or long-running operation. Do not start work that cannot reasonably be finished and checked in the remaining time. Individual tool calls need timeouts within the remaining budget. The runner must enforce a hard deadline even if the agent stalls. Pauses, retries, context changes, and restarts do not reset the original deadline.

For a run beginning after midnight, identify the intended prior workday explicitly in the configured local time zone. Capture a fixed cutoff at run start and defer work created after it, unless already included in the current batch. Include unresolved prior items without reprocessing unchanged verified ones. Track the target revision plus its Taste/Dial revisions so a changed standard can trigger a new check.

## The cleanup loop

1. **Inventory the included work.** Read the dated project records and available history. List every discovered generated/changed screen, composition, component, and variant, including missing or inaccessible evidence. Keep the discovery boundary to named project roots. Enrolling a folder may include future work inside that boundary; it does not enroll unrelated projects.
2. **Prioritize the queue.** Correct broken behavior, missing states, and accessibility failures first, then reference/variant drift and unsupported control bindings, then unfinished craft within the selected direction. Group a shared component and its authorized consumers to avoid repeated conflicting fixes. Give each included project a coverage pass before spending the entire budget on one cosmetic detail.
3. **Isolate and compare.** Preserve a starting state that includes existing local edits, not just the last committed revision. Create the candidate in the configured review destination before changing code, assets, or values; check that its editable files do not alias the working project. Render the base and candidate at matching viewport, content, theme, and state. Compare visible output with the reference plus intended changes, and compare code/control values with the selected variant. A successful build is not visual proof.
4. **Make one supported correction.** State the mismatch or weakness and its governing Taste criterion, Dial rule, or explicit project requirement. Repair the smallest coherent cause. Preserve content, functionality, candidate identities, and intended differences. Use relevant craft skills when implementation needs them.
5. **Verify it.** Render and inspect the changed result. Check control-to-property behavior, defaults, save/reload with exact values, responsive states, keyboard/accessibility behavior, and reduced motion where relevant. Recheck authorized consumers of shared changes. Mark unavailable checks precisely.
6. **Save the review version.** Save a new candidate revision and exact settings when verified. Leave the working project and its active variant intact. Keep unverified edits distinct from the candidate's last verified state, or undo only Dream's isolated change. Do not discard pre-existing edits or somebody else's concurrent work.
7. **Checkpoint and continue.** Record outcome, evidence, versions, and next item immediately. Continue while useful supported work and verification time remain. No aesthetic changes are needed when the item already meets its intended standard.

An illustrative case: a selected card variant specifies a 12 px radius but one screen renders 16 px. Dream can repair that mismatch and check its consumers. If Taste supports stronger title hierarchy and Dial permits the relevant type range, Dream can refine it and save the new values. A request to replace that card's visual direction with a different aesthetic becomes a separate proposal unless already authorized. These numbers illustrate the process and establish no personal preference.

## Where changes land

Jason selected **a separate version for morning review** on October 12, 2026. Create that candidate before editing, preserving the base project's code, assets, settings, and active selection. Keep each direction and earlier candidate version independent.

Record the candidate destination once when enrolling the project, following [the shared location rules](../../../agents/README.md#project-locations). Use an isolated copy or suitable checkout with the actual starting work included; copying only committed files can lose the day's unsaved work. Render and verify the candidate on localhost. Save exact kit/layout revisions, settings, before/after evidence, and a report alongside its project record.

Morning review can accept, reject, or request further changes. Applying or merging the candidate requires Jason's later instruction; Dream does not promote it automatically. Before applying, check whether the base changed and reconcile without overwriting current work. A later night can continue an unfinished candidate only when its base and governing Taste/Dial revisions still match; otherwise create a new comparison against current inputs and preserve the earlier version. Saving locally does not publish or deploy.

## Interruptions and overlapping work

Only one Dream writer should own a project at a time. The execution host must prevent overlapping runs and release ownership after a stopped or expired run. Check file/revision changes before writing; skip or re-evaluate work someone has changed. Never use a broad reset to recover a conflict.

“Wake this up” stops Dream edits to the named target at the next safe boundary, checkpoints progress, and removes it from future runs until explicitly re-enabled. A paused, interrupted, or crashed run resumes from its saved cursor only if its original window is still open and the project state still matches. Otherwise the next nightly run rechecks unfinished work against current files and standards.

Run state should include: run ID; enabled scope; review day/time zone and cutoff; actual start; absolute deadline; per-project ownership; pinned input revisions; item outcomes; current cursor; recovery snapshot; write mode; and stop reason. Store it with the existing project records; use one dated report per project/run and link item details instead of multiplying overview files.

## Morning record

The report should answer: what was reviewed, what improved, why it changed, what was verified, and what still needs attention.

```md
# Dream — <review date and time zone>
- Run ID, scope, cutoff, actual start/end, elapsed time, stop reason:
- Write mode: separate morning-review version; candidate path and preserved base:
- Taste definition and Dial revisions used:
- Inventory coverage: discovered, inspected, verified, deferred, inaccessible:

| Item/path | Outcome | Change and reason | Before → after revision | Evidence/checks | Next action |
| --- | --- | --- | --- | --- | --- |

- Preserved direction choices and explicit exceptions:
- Candidate versions, exact settings, preview evidence, and promotion status:
- Missing evidence, unresolved decisions, and unfinished queue:
```

Use outcomes **verified**, **fixed and verified**, **changed but unverified**, **needs a decision**, **not inspected**, and **deferred to the next run**. Never call the whole project clean when items remain uninspected or failed. Do not force extra edits to fill the three hours.

## What execution needs

The Markdown describes judgment and the workflow. Running it every night also needs an execution host with:

- A configured local start time/time zone and explicit project roots.
- An assistant able to read files, edit code, render the target, and inspect images using the project's existing tools.
- A scheduler that starts the work, prevents overlap, and records failures.
- A deadline supervisor and durable progress state so the three-hour bound survives long tools, model/IDE interruptions, and restarts.
- Access to source images, saved Taste/Dial records, and the required runtime. Machine availability and tool/session limits must be verified for the selected host.

A scheduled prompt alone does not demonstrate three hours of continuous execution or enforcement of the deadline. Build and verify that behavior in the chosen host before claiming unattended operation. Keep the portable role unchanged and put host-specific scheduling outside its design vocabulary.

A useful first trial is one project and a few screenshot-derived components: seed an obvious value mismatch, an incomplete state, and one intentional difference; confirm Dream fixes the first two, preserves the third, verifies reload, saves a report, and can stop/resume without losing work. Test the deadline with a short window, then one full manual nightly run before recurring execution.

Current status: nightly behavior and three-hour duration specified; separate morning-review versions selected; start time, project enrollment/candidate destinations, execution host, and runtime implementation remain open. Taste coverage and the complete Dial workbench are still being established. No scheduler is activated by this document.
