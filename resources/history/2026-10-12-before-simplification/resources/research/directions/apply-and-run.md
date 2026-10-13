# Apply a design pack and run the result

Working draft · October 12, 2026

This is the expanded guide for an actual implementation. For the portable all-Markdown workflow, use [Direction Kit](../../../shared/workflow/START.md) and its [application modes](../../../shared/workflow/APPLY.md): Markdown specification, source in Markdown, or an explicitly requested implementation and run. A live DialKit panel is optional; exact values can come from the kit's conversational controls and saved Markdown snapshots.

Use a versioned pack from the [design system](design-system.md) stage to build or restyle an actual interface. This is where the system meets a real task, content, responsive behavior, and interaction. Feed findings back into the [research brief](research-brief.md) and preserve useful evidence in the [research library](research-library.md).

## Inputs

Run [TASTE.md](../../../shared/workflow/TASTE.md) before personalized styling and disclose missing branch research upfront. Carry definition/version, coverage, and gaps into APPLICATION.md. Continue an authorized general build with labeled provisional choices, without claiming they express established personal taste.

- Pack directory, direction ID/version, `DIRECTION.md`, `SYSTEM.md`, tokens, component source, and examples.
- Product task, audience, real or clearly labeled sample content, required states, and output format.
- Target repository or standalone destination; platform and intended viewports.
- Mode: build, restyle, go wide, refine, or review.
- Requested count and axes for alternatives, if any.

Supply actual visual attachments when the agent needs to see them. Load only the relevant pack and project material. These are ordinary Markdown guides: each run should explicitly name or attach them rather than assume a particular agent automatically discovers the files.

## Apply the pack

Inspect the existing app before changing it. Map tokens and components to the target, retain required behavior and real content, and implement the requested screens and relevant states. Keep functionality consistent during restyling unless the task also changes the flow.

Use the pack's canonical tokens and declared presets. Fix an application-specific exception locally and document its reason. Propose a pack revision when a recurring gap affects the reusable system. Do not rewrite the pack to rationalize accidental drift in one output.

Use existing dependencies and commands. In a standalone case, choose a lightweight runnable route appropriate to the requested output. Keep prototype comparisons separate from production, and integrate the selected direction when Jason requests or selects it within an authorized implementation task.

## Go wide while preserving a theme

There are two different requests:

| Request | What can change | What stays stable |
| --- | --- | --- |
| “Explore this theme widely.” | Composition, emphasis, density presets, imagery treatment, and declared component arrangements. | The pack's identity rules, semantic roles, and fixed assets. |
| “Give me different overall theme directions.” | The visual premise and its defining rules. | Product task and comparison content. Return to the research-brief stage for distinct candidate packs. |

List the variants and axes before building them. Preserve the requested count; propose three when “go wide” is otherwise unspecified. Keep content, task, viewport, and evaluation conditions comparable. Each variant should answer a different design question and work on its own.

Use a full-size comparison surface when useful. A DesignJig can expose a few meaningful parameters and export the chosen settings. Use the installed prototype workflow when explicitly requested; do not add a picker or control panel to the shipped product by default.

For the tuning workbench Jason previously asked us to start from, evaluate the existing [DialKit checkout and source findings](research-library.md#ref-004--josh-pucketts-dialkit-and-the-recovered-founder-research). Keep selection and tuning connected: save the chosen preset, export its exact values and update instruction, apply them to the pack's canonical defaults, and re-run from those defaults. Browser persistence is authoring convenience; the saved code must reproduce the result independently. For timeline authoring, preserve the preview bindings while tuning and explicitly convert the chosen timeline to production animation before removing the authoring controls.

## Actually run and inspect

1. Read the repository's setup and package scripts. Start the appropriate development or preview command and record the exact command and URL or artifact path.
2. Open the rendered result. In this workspace, place browser pages in the Codex panel on the right when supported.
3. Complete the primary task, including relevant loading, empty, error, success, and recovery paths. Identify simulated behavior.
4. Inspect the requested viewports, content overflow, keyboard/focus behavior, readable contrast, reduced motion, and capability-gated hover where relevant.
5. Compare the result with the pack's defining rules and examples. Check the console and run the project's relevant build or tests. Fix observed problems and recheck the affected behavior.

Save screenshots or short recordings when useful for comparison, including which version and state they show. A screenshot supports a visual check; it does not establish working interactions. Record desktop emulation separately from physical-device testing.

If execution is unavailable, deliver the code and a precise run handoff, with **not run** stated. If credentials or a service block part of the task, complete what can be exercised locally and identify the specific unverified path.

## Application record and feedback

Save a compact `APPLICATION.md` with the output:

```md
# <Application or exploration>
- Pack ID/version and source revision:
- Selected tuning preset, exported values, and target token/configuration paths, if used:
- Task, platform, mode, and relevant input files:
- Variants and their named axes, if applicable:
- Commands, working directory, and URL/artifact paths:
- Checks performed, environment, and visual evidence:
- Implemented behavior, simulations, and unverified paths:
- Intentional deviations and reasons:
- Jason's feedback and selected result, if any:
- Proposed research or pack changes, with scope:
```

Distinguish a reusable preference from a task-specific correction. Preserve the result and version that produced the feedback. The next research pass should be able to tell why a rule changed.

To assess portability later, give different agents the same pack version, task, content, and output requirements. Compare adherence to identity, functional completion, responsive behavior, and remaining repair work. Record agent/model identifiers when actually available. This is a proposed validation method; cross-agent consistency has not yet been tested.

## Prompt to apply and run

```text
Use apply-and-run.md with pack [path, ID, version].
Read its DIRECTION.md, SYSTEM.md, canonical tokens, relevant components,
and examples. Target: [repository/platform/output].
Task and content: [task, audience, content, required states].
Mode: [build / restyle / go wide / refine / review].

For exploration, create [count] working alternatives, varying [axes] while
preserving [identity rules]. For refinement, update the selected result.
Use the existing stack and keep application exceptions explicit.

Run the result, inspect it at [viewports], complete the main task, and check
the relevant states and interaction/accessibility requirements. Fix observed
issues. Save APPLICATION.md with exact commands, paths, evidence, and limits.
Return a working preview or artifact plus the decisions needed for the next
iteration. Route reusable lessons back to the research brief as proposed changes.
```

For review mode, report observed issues and proposed fixes; apply them when requested. For build, restyle, and refine, the implementation and relevant checks are part of the work.
