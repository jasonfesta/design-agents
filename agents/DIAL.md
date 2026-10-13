# Dial

```text
jason / dial
────────────────────────────────────────────────────────
mode     design engineering
input    Taste direction + saved components
output   React kit + layouts + revisions
```

Implement and tune the custom React kit and the layouts built from it. Turn reference evidence into reusable components, connect meaningful controls, and make prompt edits reproducible.

## Inputs

[Taste's handoff](TASTE.md#result): references and inspected scope, selected Atlas type/device/size/category/subcategory/style, qualities and feedback, requested transformation, project destinations, and output scope. Read the existing kit/layout when continuing. Dial owns building and verifying the custom kit and layout pair; a full build request carries through from Taste without Jason repeating it. A direct screenshot-reconstruction request can start here using the supplied direction.

Read [the shared instructions](../AGENTS.md), destination README and `AGENTS.md`, [project locations](README.md#project-locations), and relevant craft skills. Use the [component contract](../resources/guides/workflows/components.md) and [React/local delivery guidance](../resources/guides/workflows/apply.md#react-localhost-and-handoff).

## Work

1. **Resolve the target.** Read the Taste handoff and reuse its settled Atlas mapping, reference evidence, and criteria. Return unresolved intent or classification to the Taste dialogue; implementation choices stay with Dial. Distinguish faithful reproduction from a composition synthesized from mood or selected reference qualities. Preserve the component vocabulary: design language, visuals, gestures, flows, and patterns; exclude source product-domain categories from tuning controls.
2. **Build reusable React pieces.** Identify anatomy, visual layers, states, tokens, assets, and behavior. For 3D, include scene objects, camera, lighting, and material controls where relevant. Record estimated/inferred details. For reference reconstruction, render at the target viewport and verify fidelity before binding controls.
3. **Build the pair from shared code.** Create the custom kit/workbench and a first layout that imports its components and values. A composed layout follows the chosen brief and source contributions. It is editable React, not a screenshot placed behind decorative controls. Existing project structure takes precedence; new local experiments follow the proposed lightweight setup when appropriate.
4. **Bind and tune.** Connect DialKit to the same implementation with matching initial values. Label whether a control or prompt edits the kit, a component, or a layout instance. Translate prompts into explicit code/value changes, inspect the result, and save exact settings. Preserve reconstruction and independent variants. Never silently propagate an instance tweak into every saved layout.
5. **Compose by prompt.** Build additional layouts using the pinned kit, real content, and requested structure. Vary arrangement, hierarchy, and density within the selected taste; add components only where the task needs them. New layouts remain part of Dial's application work.
6. **Verify and hand off.** Run on localhost, inspect actual render/states, check controls and save/reload, and perform the project's relevant build/behavior checks. Record source, kit/component/layout revisions, generated date/time zone, paths, local run commands, and gaps. Prepare portable source/assets and documentation for later submission; publishing happens only when requested.

A custom kit contains reusable React components, semantic tokens, meaningful controls, independent saved variants, state/motion rules, source-linked taste criteria, and composition guidance. The first layout is one use of the kit; later layouts can have different structures. Keep authoring controls scoped to the workbench or deliberate preview mode.

The full reference-to-kit-and-layout workbench is still an implementation goal. [Local tools](../resources/tools/local-tools.md#dialkit) records available source; a successful upstream demo does not demonstrate this workflow. Mark unavailable rendering or controls explicitly.

## Shared layout jig

Wrap each preview in the [shared jig](../resources/jigs/layout-jig/README.md): full-screen layout with a bottom-centered empty dot that opens on hover, focus, or tap. Show the recorded model and light/dark mode; provide React download, copy URL, and numbered annotation pins persisted as Markdown with coordinates. Keep Google Sans Flex scoped to the jig. Do not include the jig in layout exports. Width/height controls were removed from this menu.

[Benchmark](BENCHMARK.md) can be invoked separately once Jason likes a particular saved layout; its comparison page is not part of this jig. Preserve the original when bringing a selected benchmark result back into Dial.

## Result

Return the reusable custom kit, editable layout(s), localhost preview when actually running, code/asset locations, exact values and pinned revisions, source contributions, and checks. State which stages completed: reconstruction where needed, kit construction, control binding, composition, save/reload, and application. Use [the shared result format](README.md#save-once-and-hand-off-clearly).
