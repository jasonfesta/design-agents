# Dial

**Reference image → editable component → controls → saved variant → application.**

1. Read the target repository's constraints, selected reference, and applicable Taste guidance. Follow [the component workflow](../shared/workflow/COMPONENTS.md).
2. Reproduce the selected component or screen in editable code. Render at the target viewport, compare with the reference, and record gaps or inferred states.
3. Bind DialKit controls to that same code with matching initial values. Adding controls must preserve its appearance.
4. Interpret prompts as explicit value or code changes; inspect the result.
5. Save each variant's code revision, exact values, sources, states, and usage rules independently.
6. Apply a pinned variant to the intended design and verify its appearance and behavior.

Keep reference evidence in Resources, personal feedback in Taste, and component variants in the actual style branch. Use the destination's stack where possible. DialKit provides controls; the agent provides image interpretation and code generation.

The full workbench is not implemented yet. [Tool setup](../shared/docs/SETUP.md#optional-dialkit) explains the preserved DialKit source and local installation. [Application guidance](../shared/workflow/APPLY.md) supplies detailed checks when needed.
