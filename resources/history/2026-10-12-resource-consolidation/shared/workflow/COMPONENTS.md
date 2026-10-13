# Dial component workflow

Requested workflow · October 12, 2026 · Specification; image-to-component workbench not yet implemented

**Images → editable components → DialKit tuning → saved style variants → application to designs.**

Jason wants to supply images, get usable components from them, dial those components, and apply the resulting components to specific styles. The Dial Agent performs image interpretation, component generation, and application. DialKit provides controls connected to the generated component code and values. The existing upstream demo verifies the control library; it does not implement image ingestion or component extraction for this workspace.

## 1. Turn an image into an editable component

Capture the original image, its source, viewport/profile, and Jason's instruction about what to reproduce or borrow. Identify whether the target is a component, a group, or a full screen. Name the component boundary and inferred states. Reproduce the visible target in editable code, render it in its source context, and compare it with the image.

Keep the original reconstruction. Record mismatches, missing assets, and inferred behavior. A screenshot cannot demonstrate interaction states or responsive behavior that were not visible. A full-screen source can yield several components, with the assembled screen retained as a composition check.

## 2. Connect DialKit and tune

Bind controls to that same code with matching initial values, preserving the initial appearance. Expose only defined changes: geometry, typography, spacing, color, material, imagery, and motion where appropriate. A control must describe what it changes and which component rules it affects.

Prompts become explicit control/config/code edits. Record the prompt, before/after values, code revision, and render evidence. Changing a live control is a working edit; save a named variant when its state should be reusable.

## 3. Save a component variant for a style

Use the agreed branch: `<type>/<viewport>/<category>/<style>/`. Check viewport applicability, category, style fit, and taste coverage before assigning a variant. A visual match can be a candidate while Jason's preference remains undefined.

For each component variant, save:

- Stable component ID and variant revision, with the source reconstruction revision.
- Source references and exact contribution; inspected and inferred details.
- Editable code, assets, dependencies, and rendering instructions.
- Exact control defaults, token bindings, permitted ranges, and locked identity rules.
- Component states, responsive rules, input/accessibility behavior, and verification gaps.
- The target style ID, why it fits, applicable category/viewport scope, and usage exclusions.
- Jason's feedback, approval status if any, and applications that use the variant.

Keep the base component canonical. When variants share code, link it by ID/revision and store each style's values and rules independently. Do not overwrite one style's variant when dialing another. A component used in several branches needs explicit mappings; suitability does not follow from copying a file.

## 4. Apply and verify

Apply the selected variant to the target app, website, or game UI. Connect its props, tokens, and states to the actual product, and check it at the target viewport and input mode. Compare it with the saved style rules and the intended page or screen composition. Record integration changes and visual or functional limitations.

Saving a variant does not make it an approved taste baseline. A changed variant does not automatically update every design that uses it; each application pins a revision until deliberately upgraded. Full-screen image reproduction remains available within this component-oriented workflow.

## First useful implementation

Use one supplied image and one component: reproduce it, compare the render, bind DialKit without changing the initial appearance, tune and save a variant, reload its exact state, map it to a proposed style, and apply it in one representative screen. No source image or component has been selected yet.

[RESEARCH.md](RESEARCH.md#image-references-to-dialkit) owns reference intake; [SYSTEM.md](SYSTEM.md) owns tokens and component contracts; [APPLY.md](APPLY.md) owns application checks. This document owns their end-to-end component-workbench connection.
