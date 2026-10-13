# Setup

Agent specification · October 12, 2026 · Automated restoration remains to be implemented

Setup recreates Jason's **complete design environment**, organized as **type → viewport → category → style**, and prepares **Atlas, Taste, Dial, and Dream** to work within it. It carries the applicable instructions, resources, research, preferences, viewport profiles, component versions, and tool requirements into the destination. Read the destination's instructions first and preserve its existing work.

The type entry points are [apps/README.md](../apps/README.md), [websites/README.md](../websites/README.md), and [games/README.md](../games/README.md). Each describes its own environment and what belongs underneath it. These files and the existing viewport/category records are available now; automated scoped copying and environment restoration remain planned.

## Inputs

- Destination repository, requested design scope, and capabilities. For a complete setup, carry all existing types and their recorded branches. For a scoped setup, record the selected type, viewports, categories, and existing or explicitly requested styles; do not guess unspecified selections.
- This instructions folder and the [Resources folder](../resources/README.md), when supplied.
- [Workspace configuration](../workspace.json), [transfer instructions](../docs/SETUP.md), and available source manifests or exported files.
- Existing tool availability and account connections on the receiving host.

## Folder and Markdown contract

Each layer has one entry document, `README.md`. Keep the three type documents at their existing paths; do not add a competing Apps, Games, or Websites overview elsewhere.

```text
apps/                         websites/                    games/
  README.md                     README.md                    README.md
  <viewport>/                   <viewport>/                  <viewport>/
    README.md                     README.md                    README.md
    <category>/                   <category>/                  <category>/
      README.md                     README.md                    README.md
      <style>/                      <style>/                     <style>/
        README.md                     README.md                    README.md
        … scoped records              … scoped records             … scoped records
```

The existing type and viewport menus are:

| Type | Viewports | Design category set | Style vocabulary |
| --- | --- | --- | --- |
| apps | mobile, tablet, desktop, tv, watch | [Interface types](../shared/workflow/taxonomy/APP-INTERFACES.md); 20 approved families | Revised app research candidates |
| websites | mobile, tablet, desktop | [Website design uses](../shared/workflow/taxonomy/WEBSITE-CATEGORIES.md); 18 approved categories | Revised website research candidates |
| games | mobile, tablet, desktop, tv | 17 Google Play game genres | Games' own proposed list |

The category layer is now a **design category**: website use, app interface type, or game genre. Jason rejected the old shared app-store menu for apps/websites. Jason approved both replacement category lists. Their style lists remain unresolved. Existing app/web category folders are legacy scaffolding, and replacement folders have not been created. Preserve their records in a full restoration and report this migration state; do not regenerate the old menu as the current default. Map any real evidence by its contents when migration is requested.

Create style folders for existing records or explicitly scoped exploration. An empty category stays unresearched with style unset. Exact dimensions, orientation, operating system, finer page/screen detail, and game engine are fields inside the records, not extra classification layers.

## What information goes underneath each type

Copy all supplied information that applies to the selected scope, including supporting records needed to interpret it. Links identify provenance; a link alone is not a replacement for copying available Markdown content into the destination.

| Destination | Information to carry |
| --- | --- |
| Type README and supporting Markdown | Type purpose, viewport/category/style menus, applicable agent instructions, general craft guidance, available resources, tool requirements, and known gaps. |
| Viewport README and supporting Markdown | Exact profiles and units, platform/runtime, input methods, safe areas, responsive behavior, target support evidence, and viewport-specific guidance and references. |
| Category README and supporting Markdown | Design category name and local ID, definition and proposal/adoption status, product purpose/audience, category research, annotations, source references, scoped feedback, and style matches or gaps. |
| Style README and supporting Markdown | Definition and fit, relevant references, supported taste and exceptions, tokens/control values, component variants and revisions, applications, verification, baseline status, and Dream enrollment. |

Put each record at the narrowest level supported by its evidence. Type-wide material lives at the type level and is read by its descendants. A viewport-specific observation stays within that viewport. A single-style decision stays within that style. When a source applies to several types, copy the applicable material under each type with the same source identity and recorded scope. Do not turn a mobile example into a desktop recommendation or a game art style into an app preference.

Keep short information in the layer's README. Put substantial copied documents alongside it, using stable source IDs in filenames and an index in the README. Preserve their original text, status, dates, annotations, and attribution. Code, images, and component versions can be supporting contents of a style; they do not introduce another classification layer. Retain actual supplied assets when transferable, and describe missing attachments explicitly.

The [Resources folder](../resources/README.md) remains the portable master resource collection. Branch copies are traceable working copies, not a second independently maintained catalogue. Shared agent procedures and licensed skills remain canonical in their existing locations; Setup includes the applicable files in the destination environment and copies the relevant scoped information beneath each type. Skill discovery paths and runnable tool checkouts stay where the receiving host expects them.

## Resolve the environment for a branch

For any selected branch, combine workspace requirements with its type, viewport, category, and style records. Preserve the scope, evidence status, and revision of every inherited rule. Child records may override declared defaults; a required parent rule needs an explicit recorded exception. Surface unresolved conflicts before claiming the branch is ready.

The resulting environment needs:

- **Knowledge:** applicable resources, inspected references, annotations, supported taste, exclusions, and research gaps.
- **Design context:** target platform and input, measured viewport/profile, product task, category, and style state.
- **Capabilities:** required agent procedures, actual installed skills, tools, runtimes, dependency versions, and connection requirements.
- **Working state:** component source, Dial values and versions, verification records, design applications, and any existing Dream records or enrollment.

Record capability readiness separately from research readiness. Restored Markdown can be complete while an external tool is disconnected or a style remains unresearched. Installing a runtime does not establish design taste. A capability profile controls tools to restore; the design scope controls which branches and information to carry. They are separate selections.

## Copy and refresh rules

1. Inventory every supplied source, record its scope, and map it to a destination. Keep ambiguous material in Resources with an explicit unclassified status; report it instead of silently omitting or broadly applying it.
2. Copy relevant content with its supporting references and attribution. Record source ID, original relative path/URL, revision or hash, date, copied sections, destination, and the destination hash immediately after copying. Resolve working links inside the destination; preserve original paths as provenance only.
3. On a repeat setup, compare source and destination with the previous receipt. Skip unchanged copies. Refresh an unchanged destination when its source changes. Preserve local edits and report divergent versions; do not overwrite or duplicate them by filename.
4. Keep branch-authored notes distinct from copied source sections. Changes to a branch copy do not automatically rewrite Resources, global taste, sibling branches, or upstream skill files.
5. Check that every supplied item is accounted for as copied, already present, outside the selected scope, unclassified, conflicted, or unavailable. A complete setup must not quietly drop applicable information.

The copy map belongs in the setup receipt under `docs/setup/`. If exporting a selected branch independently, include its required ancestor context and supporting documents in the export and verify it without access to this original checkout. Merely copying a folder with links back to this workspace is not a self-contained environment.

## Responsibilities

1. Inventory what is present and identify missing required inputs. Distinguish a Markdown resource, source checkout, installed skill, and authenticated tool.
2. Prepare the five agent instructions and the agreed structure, beginning with the three type Markdown files. Resolve the requested scope and copy its applicable information into each layer using the rules above.
3. Import Resources as an independent Markdown folder. Preserve source URLs, dates, original reactions, and attribution. Merge by source identity and compare revisions; do not overwrite a different existing record merely because its filename matches.
4. Restore bundled records and pinned tool sources for the selected capability profile and actual target. Record each capability's applicable branches, required/optional status, version, readiness, and missing private attachments or connections. Keep dependency installation separate from resource import; inspect substantial installs under the existing workspace policy.
5. Connect the agent guides to their canonical records, then check relative links, source integrity, and actual runtime readiness where relevant.
6. Produce a setup receipt with the selected design scope and capability profile, source-to-destination copy map, versions, branch readiness, conflicts, missing inputs, and the correct next entry point.

## Outputs and ownership

Own setup instructions, the future restoration manifest and folder blueprint, and setup receipts. Atlas owns design classification; Taste owns personal preference; Dial owns component variants; Dream owns its run records. Importing Resources does not establish personal taste or activate Dream.

The existing `scripts/workspace.py` supports `check`, `verify`, `inventory`, and `export`. It does not yet implement source restoration. Follow [the build plan](PLAN.md) when implementing that capability; do not present a proposed setup command as executable.

## Completion checks

- The selected profile can be reconstructed in a fresh location from supplied inputs.
- Each selected type opens from its own README and leads through viewport, category, and style records containing the applicable copied information.
- All applicable supplied information is accounted for, with source identity, scope, and support status preserved.
- Every required input is restored or explicitly reported missing.
- Re-running setup preserves local changes and creates no duplicate resources.
- Atlas, Taste, Dial, and Dream resolve their instructions and relevant records.
- Viewport units and input/runtime support remain explicit; unresearched branches stay unresearched, and independent style/component versions remain independent.
- Resources can be carried separately as Markdown; unavailable external capabilities remain visible.

Handoff: workspace location, type entry documents, selected scope and capability profile, copied-content receipt, verification results, remaining gaps, and the next agent to invoke.
