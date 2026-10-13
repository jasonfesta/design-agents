# Apply and run

Read [START.md](README.md), the selected brief, SYSTEM.md, and current state. Apply one exact direction version to a real task. Keep the portable instructions and application record in Markdown.

## Choose the output mode from the request

Apply [TASTE.md](taste.md) before personalized styling. Disclose missing or partial branch research upfront. Honor authorized implementation using explicit requirements and labeled proposals where needed, but do not present a provisional result as Jason's established taste. Preserve coverage and definition/version in the application record.

| Mode | Deliver |
| --- | --- |
| Markdown specification | Applied screen/component rules, content, states, token bindings and a run plan. No execution claim. |
| Code in Markdown | Complete source in fenced blocks with filenames, dependencies and run steps. Mark **not run** unless it was actually executed. |
| Implement and run | Edit the authorized project using its existing stack, execute available checks, inspect the rendered result and save a Markdown application record. |

Honor an explicit request to implement and run. Do not reduce it to a plan merely because the kit is Markdown-based. Conversely, reading this guide alone does not authorize creating an app, installing a runtime, or deploying a result.

## React, localhost, and handoff

Jason's working environment is **React on localhost**, with submission to a tool or GitHub later. Reuse an existing project's stack and commands. For a new isolated design experiment, **React + TypeScript + Vite** is a proposed lightweight starting point, not a required migration or an installed dependency. React's official guide favors frameworks for full applications; choose based on the actual product's routing, data, and rendering needs. See [React's setup guidance](https://react.dev/learn/creating-a-react-app) and [Vite's guide](https://vite.dev/guide/).

For true 3D scenes, [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction) is a candidate React renderer for Three.js. CSS depth effects may need no scene renderer. Check the existing stack, package compatibility, and asset requirements before selecting or installing dependencies.

Taste's two outputs share one implementation: reusable kit components/tokens/controls and a first layout importing them. Save independent versions and label prompt scope as kit, component, or layout instance. Keep authoring controls in the workbench/preview unless they belong in the intended product. Additional layouts can change hierarchy and arrangement without changing the kit's identity.

Run the project's actual development command, report the localhost URL only when running, inspect the target viewport and relevant behavior, and record the exact commands and results. Preserve code, assets with provenance, dependencies/lockfile, selected values, and a concise README so another IDE can reproduce the preview. Do not bundle machine credentials or dependency directories.

Prepare these artifacts for later handoff. The submission tool's API and format have not been chosen; do not invent an adapter or claim submission. Publish, push, or deploy when requested. The portable kit describes the process; this documentation update creates no React app or live server.

## Apply the direction

Inspect existing project conventions when available. Map semantic tokens and component contracts to the target. Preserve required content, flows, states, and behavior while restyling. Record application-specific exceptions with scope and reason. Repeated gaps may justify a proposed system revision; do not rewrite the baseline to excuse drift.

For alternatives, follow the declared TAXONOMY.md matrix. Keep task, content, viewport, and evaluation conditions consistent within each comparison. Show complete candidates with meaningful structural differences. Controls can stay conversational; a visual control panel is optional only when requested or useful to the authorized build.

Apply the selected exact values to canonical project defaults. Verify that a fresh load reproduces them without depending on hidden session state or a designer's browser storage.

## When the build includes DialKit

Read the selected implementation's actual documentation. For web projects use [Josh Puckett's DialKit](https://github.com/joshpuckett/dialkit); [Michael Lee's macOS implementation](https://github.com/mikelikesdesign/dialkit-macos) is a separate native integration. Match the existing stack and version, map the system's controls to values used by the rendered interface, and verify at least one complete edit-to-render-to-save cycle. These are implementation instructions, not a requirement to install a panel for every Markdown task.

Treat visual controls and timelines as authoring tools unless the requested product itself is a workbench. For authored motion, follow the [timeline guide](https://github.com/joshpuckett/dialkit/blob/main/docs/timeline.md): preserve preview bindings while tuning, then intentionally convert them for production when removing the editor. Check production visibility and continuing runtime behavior instead of assuming that hiding a panel removes its effects.

Copy the selected resolved values into canonical project defaults, save the corresponding Markdown version, and verify a fresh load without browser persistence. Preserve control constraints, taste coverage, and baseline status through this process. Record the package/revision, adapter, mappings, and actual checks in the application record.

## Verify what can actually be verified

### Verify the image reference workflow

For a reconstruction trial, demonstrate the [image-to-component workflow](components.md) through a real application. For Adapt/Explore, compare against the brief and declared contributions in place of source-layout fidelity; keep the same control, version, and transfer checks:

1. Load an actual supplied screenshot, retain its original file/ID, and record the target viewport. Show estimates or unknown assets explicitly.
2. Identify and reproduce the requested component or screen in editable code. Capture the render at the same viewport, compare it with the source, and record remaining mismatches. Preserve the reconstruction revision independently of later exploration.
3. Attach DialKit controls to the same code and verify that the initial values preserve the reproduced appearance. Map each exposed control to its real code consumers.
4. Apply a prompt to the active kit and show the explicit control/config/code delta and visible result. Record whether the prompt was handled by the current agent or by an implemented in-app model integration.
5. Branch a style exploration using a second reference with a declared contribution. Switch between kits/versions and verify each restores its own source roles, code, and full values.
6. Save a named component variant with its style mapping, stable ID, code revision, exact values, state rules, and scope. Apply that pinned variant to one representative screen and verify its composition and behavior at the target viewport.
7. Reload without relying on prior browser storage, and export images, exact settings, code, prompt history, and handoff. Verify the packet in a fresh location; claim a different IDE/model run only if actually performed.

Passing only a component demo, image-upload control, build, or library test suite does not establish this workflow. Track fidelity, control binding, prompting, independent style state, and transfer separately in the application record.

### General implementation checks

When execution is available and requested, use the project's actual scripts, run the result, and inspect it. Exercise the primary task and relevant loading, empty, error, success and recovery states. Check the affected responsive layouts, long content, keyboard/focus behavior, readable pairings, reduced motion and input capability behavior. Fix observed issues within scope and repeat the affected checks.

Record the exact command, environment and evidence. A successful build does not prove visual fidelity; a screenshot does not prove interaction behavior. Emulation is not physical-device testing. If a dependency, missing asset or unavailable tool blocks a check, finish independent work and identify the precise unverified part.

## Application record

```md
# Application — <ID>
- Task and output mode:
- Product category, interface subcategory, scope, and style branch:
- Component IDs, variant revisions, style mappings, and integration changes:
- Direction/system/baseline versions; selected preset and resolved values:
- Target files or output artifacts; source-to-target token mapping:
- Content set, states, viewports and comparison candidates:
- Commands and environment actually used:
- Checks: passed / failed / not run; evidence and limitations:
- Intentional exceptions and approval/source where applicable:
- Feedback; reusable lessons proposed for the brief:
- Next action and complete continuation inputs:
```

Use START.md's handoff contract when moving to another assistant. Transfer actual visual attachments alongside Markdown where needed. Same inputs make comparisons possible; they do not guarantee identical output across models.

## Prompt

```text
Use Direction Kit APPLY.md with [direction/system version and state].
Task/content: [details]. Target/platform: [details].
Output: [Markdown specification / code in Markdown / implement and run].
Apply [preset/resolved values], preserving [identity and locks].
For alternatives use [matrix/count]; otherwise refine the selected result.
Record exact token mappings, scoped exceptions, actual checks and limits.
Return the result and an application record another assistant can continue.
```
