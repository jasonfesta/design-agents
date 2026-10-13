# Jason's DialKit development copy

This is the complete DialKit source with a local branch for Jason's changes. Start here when developing our live controls; start with [Direction Kit](../../shared/workflow/START.md) when defining a direction, recording decisions, or handing a design to another agent.

Personal version **0.1.1** is based on upstream DialKit **2.0.1**, commit `0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3`. Upstream `main` matched that revision when checked on October 12, 2026. The local React demo now runs. Version 0.1.1 adds a browser timer type correction in the Vue adapter and verified startup instructions to the original 0.1.0 foundation. The image-reference-to-design integration remains proposed work.

## What is included

| Source | Purpose |
| --- | --- |
| [README.md](README.md) | Josh's quick start and framework examples |
| [docs/reference.md](docs/reference.md) | Control configuration, values, presets, persistence, keyboard access, and custom layouts |
| [docs/timeline.md](docs/timeline.md) | Animation authoring, playback, tracks, groups, loops, and production conversion |
| `src/` | React implementation, shared stores, all four other adapters, and upstream tests |
| `example/` and `examples/vanilla/` | Upstream demonstrations, including their tracked assets |
| `scripts/`, package manifests, and lockfiles | Upstream build and verification tools |
| [LICENSE](LICENSE) | Original MIT copyright and permission notice |
| [personal.json](personal.json) | Machine-readable origin, revision, and local version policy |

The configurable control types are numeric sliders, toggles, text, color, selects, images, XY pads, springs, easing curves, and action buttons. Folders group controls. Panel layout, presets, keyboard shortcuts, controllers, and the timeline are additional capabilities. Use the complete upstream references above for exact options and adapter differences.

## How our pieces connect

**Images → editable components → DialKit tuning → saved style variants → application to designs.**

[COMPONENTS.md](../../shared/workflow/COMPONENTS.md) owns this requested workbench. The Dial Agent generates components from image references; DialKit tunes their bound values. Saved variants carry the component revision, style mapping, exact settings, and usage scope.

Jason clarified this starting point on October 12. The [image-reference contract](../../shared/workflow/RESEARCH.md#image-references-to-dialkit) owns intake and interpretation; an existing design system is optional. Our agent first reproduces the selected image, checks the render against it, and derives controls from the resulting code. Connecting DialKit must preserve that initial appearance.

DialKit accepts control configurations and bound values. It does not automatically understand an arbitrary design system. A project adapter must map semantic tokens and behavior to controls, resolve aliases and units, and connect the values to actual components. [SYSTEM.md](../../shared/workflow/SYSTEM.md#mapping-a-system-to-dialkit) owns that contract; [APPLY.md](../../shared/workflow/APPLY.md#when-the-build-includes-dialkit) owns validation and the handoff.

Our next implementation should preserve the source image, reproduce it in code, connect DialKit without visual drift, and translate prompts into explicit control/config/code revisions. Keep the original reconstruction and each explored style kit independently versioned. Locks, approved baselines, evidence, and immutable design snapshots belong to our workflow. DialKit's editable browser presets alone do not supply those guarantees. These integrations remain proposed work.

Graphical is a separate product and source of workflow ideas. Its purchased components, themes, `GUI.md`, and skills are not included here. Michael Lee's native packages are recorded in [REF-005](../../resources/research/directions/research-library.md#ref-005--michael-lees-dialkit-macos); this checkout contains Josh's web implementation.

## First image reference prototype

This is the next implementation brief, not a completed feature or a new visual baseline. Reuse the installed React demo stack and local DialKit build. Keep the upstream demos available as library examples.

| Workbench area | Required behavior |
| --- | --- |
| Reference board | Accept actual source images, preserve IDs/originals and notes, and record the capture/target viewport. |
| Image-to-component preview | Reproduce the selected component or screen as editable elements. Compare the rendered capture with the source and record visual mismatches and inferred details. Preserve this code revision. |
| DialKit connection | Bind controls to the reproduced code with identical initial effective values. Verify that adding controls does not restyle the preview. |
| Prompt workflow | Resolve a prompt against the active kit/version, apply explicit value/config/code deltas, and show the result. Record the prompt and interpretation. |
| Style exploration | Branch from a named reconstruction or kit. Additional references have declared contributions; each style restores its own code, source roles, and values. |
| Apply styled component | Save a component variant under its matching style, apply the pinned revision to one representative screen, and check its target behavior and composition. |
| Version and export | Save component/variant IDs, style mappings, images, reconstruction/current code, exact settings, prompt/change history, and the handoff. Reload independently of prior browser state. |

For the first prototype, the current coding agent can inspect the image, implement its reproduction, and interpret subsequent prompts. The browser surface provides the preview, reference comparison, and DialKit controls. Natural-language input inside the app requires a separate model connection and must not appear functional before it exists. DialKit itself is the control layer, not the image or language model.

Use [STATE-TEMPLATE.md](../../shared/workflow/STATE-TEMPLATE.md) for record ownership and [the end-to-end acceptance steps](../../shared/workflow/APPLY.md#verify-the-image-reference-workflow) to judge completion. The first reference image, component, and application screen are still unset. Do not replace them with the upstream Japan photo-stack imagery or infer personal taste from that example. Exact source fidelity is a checked target at the supplied viewport; hidden states and unavailable assets remain explicit gaps.

## Versioning

- `personal/main` is our development branch.
- `personal-base/2.0.1` identifies the unchanged upstream starting point.
- `personal/v0.1.0` preserves the initial source foundation; `personal/v0.1.1` records the local demo setup and Vue timer type correction.
- `upstream` points to `https://github.com/joshpuckett/dialkit.git` for fetching updates. There is no personal publishing remote yet.
- The npm package name and version retain their upstream values. Personal tags version our work separately; choose a distinct package name and update package metadata before publishing a derivative.

Run from the workspace root:

```sh
git -C tools/dialkit status
git -C tools/dialkit diff personal-base/2.0.1
git -C tools/dialkit log --oneline --decorate -8
```

For a future change, create a focused branch from `personal/main`, commit only the intended files, run the relevant checks, then advance the personal version after review. Fetch upstream changes deliberately and compare them before merging. Keep the license and credits with every copy.

These are three independent version records: Git commits track our software, DialKit presets track editable tuning sessions, and Direction Kit snapshots track complete design decisions. Approving one does not automatically approve the others.

## Build and verification

The source uses Node and npm. Its development dependencies include the five framework toolchains and build/test packages; the lockfiles are included. Inspect dependency scope under the workspace's lightweight-install policy before installing. No browser runtime or additional framework bundle is required merely to read or transfer this source.

Once dependency installation is appropriate for a build task, the upstream commands from this directory are:

```sh
npm ci
npm test
npm run typecheck
npm run build
```

The React demonstration has its own `example/package.json`. Install its locked dependencies with `npm ci --prefix example` after building the library. From the workspace root, start the local preview with:

```sh
npm --prefix tools/dialkit/example run dev -- --host 127.0.0.1 --port 3015 --strictPort
```

Open [the photo-stack demo](http://127.0.0.1:3015/). The same server supplies [XY pad](http://127.0.0.1:3015/dialpad.html) and [easing](http://127.0.0.1:3015/easing.html) examples. Keep the server process running while using the preview. Rebuild the library after editing its source, then refresh the page.

Verified October 12, 2026: library build, React example build, 133 upstream tests, and the full typecheck passed. Svelte check reported 57 existing warnings and zero errors. In the in-app browser, editing the Title control changed the rendered heading; the original value was restored. Only the main React demo received an interactive browser check. Setup details belong to [LOCAL-INSTALLATIONS.md](../../docs/setup/LOCAL-INSTALLATIONS.md#dialkit). Dependencies and generated builds must be recreated on a receiving machine.

## Transfer with history

From the workspace root, `python3 scripts/workspace.py export` includes this source and generates `.history/repository.bundle` inside this directory. The bundle preserves local Git commits and refs without copying Git configuration or hooks. Dependencies and build output are excluded. Working files, including uncommitted edits, travel separately in the ZIP; a Git bundle contains committed history only.

An extracted source folder is immediately readable in another IDE. To recover the committed development history offline into a separate checkout:

```sh
git clone --branch personal/main tools/dialkit/.history/repository.bundle ../dialkit-history-restored
git -C ../dialkit-history-restored remote remove origin
git -C ../dialkit-history-restored remote add upstream https://github.com/joshpuckett/dialkit.git
```

Compare any newer working files from the ZIP before replacing them with the recovered checkout. Re-exporting an extracted folder without `.git` retains the supplied history bundle; new commits require a recovered repository. The full workspace also carries the parent Direction Kit and research links used above.
