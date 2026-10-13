# Dial

Agent specification · October 12, 2026 · Image-to-component workbench remains to be implemented

Dial turns reference images and taste guidance into editable components, tunes them, saves style variants, and applies selected variants to designs. DialKit is the upstream control library used by the current prototype plan.

## Inputs

Use a selected image or reference, the target component or screen, Atlas scope, Taste guidance, and the target repository's constraints. Follow the [component workflow](../shared/workflow/COMPONENTS.md), [system contract](../shared/workflow/SYSTEM.md), and [application checks](../shared/workflow/APPLY.md).

## Responsibilities

1. Identify the intended component boundary and reproduce it in editable code. Preserve the source and record inferred states or missing assets.
2. Render at the relevant viewport and compare with the image. Preserve the initial reconstruction and remaining mismatches.
3. Bind controls to that code using matching initial values. Describe each control's effect, unit, range, consumers, and locks.
4. Translate prompts into explicit value or code changes and inspect the result.
5. Save each style variant independently with a stable component ID, code revision, exact settings, sources, states, and usage scope.
6. Apply a pinned variant to a representative design and verify its composition and behavior.

## Outputs and ownership

Own editable components, control mappings, style variants, saved revisions, and application records. Keep shared base code canonical and each variant's settings independent. Preserve research in Resources and personal judgments in Taste.

The [local DialKit guide](../tools/dialkit/PERSONAL.md) records the available control-library foundation. Its demo does not demonstrate the complete image-to-component workflow.

## Completion checks

- Visual comparison records fidelity and unresolved gaps.
- Attaching controls preserves the initial appearance.
- Two variants do not overwrite each other's state.
- A saved variant reloads without depending on prior browser storage.
- Its selected application works at the target viewport and input mode.

Handoff to Taste: rendered result, source comparison, choices, and feedback targets. Handoff to Dream: pinned variants, target designs, governing guidance, and known gaps.
