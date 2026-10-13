# Local design studies

[Home](../README.md) · [Shaders](shaders.md) · [Typography](typography.md) · [MCPs](mcps.md)

This is the public-facing index of design research recovered from our local projects and conversations. It carries forward the useful techniques and original public sources, not private project files, account details, licensed font binaries, or client artwork.

A study is not an installable agent. Research notes record what was investigated; a historical build or render check is not a fresh cross-browser test.

## Research register

| Study | What it contributes | Public directory |
| --- | --- | --- |
| Find design MCPs | Canvas, website, component, and browser connections; official versus community distinctions. | [MCPs](mcps.md) |
| Design-agent landscape and local installations | Editable workspaces, screenshot-to-code tools, and agent packages. Setup checks did not establish generation quality. | [Agents](agents.md) |
| Design Agent Skills audit | All 151 external records and six navigation guides accounted for. | [Coverage](catalogue-audit.md) |
| WebGL animation deep research | Flowmaps, noise, fluids, feedback, particles, and render-loop architecture. | [Rendering sources](shaders.md#rendering-foundations) |
| Glass rendering and Glass Lab | Editable SDF shapes, transmission, dispersion, frost, studio lighting, and motion. | [Glass references](shaders.md#glass-and-refraction) |
| Shader background integration | Paper fluted glass, Noisemaker, Spectral Glass, layered effects, and experimental browser APIs. | [Background sources](shaders.md#backgrounds-and-procedural-motion) |
| Silk and Lumen studies | Analytic fields, plasma, chrome, optical flow, and procedural outlines. Variants of one shader are not counted as separate projects. | [Background sources](shaders.md#backgrounds-and-procedural-motion) |
| Reference fidelity research | Image-targeted shader loops, segmentation, inverse rendering, and image comparison. | [Reconstruction sources](shaders.md#reference-matching-and-reconstruction) |
| WebGL point studies | Trajectory Portals, Target Points, and Directional Dots: compare direction, density, speed, and context. | [Product checks](shaders.md#product-checks) |
| Contour Strata | Layered geometry, separation, reveal, selection, and camera studies in Three.js. | [Rendering sources](shaders.md#rendering-foundations) |
| Core font research | Font agents, outline editing, coverage, axes, compilation, and validation. | [Font tools](typography.md#font-agents-and-production-tools) |
| Typographic shader effects | DOM-aligned type, scroll distortion, feedback trails, refraction, and particles. | [Typography techniques](typography.md#techniques-from-the-typography-research) |
| DxA 3D text demo | A text-effect implementation already included in this repository. | [Source](../website/src/three-text-demo.js) |
| Creative AI landscape | Additional image, video, spatial, and asset-production platforms. | [Creative tools](creative-tools.md) |

## Reusable lessons

- Start with editable geometry, text, tokens, and controls wherever possible.
- Distinguish procedural animation from simulation, RGB dispersion from spectral rendering, and image encoding from reconstruction.
- Match camera, resolution, lighting, and color management before comparing reference fidelity.
- Keep DOM fallbacks, pause controls, reduced motion, and resource cleanup in interactive studies.
- Evaluate font coverage, spacing, fallback, and rendering, not only a specimen image.
- Record the actual test environment. Native offscreen shader checks do not establish browser interaction coverage.

## Publication boundary

The linked public tools are available at their original repositories. Except for the DxA website demo and original DxA skills, local implementation code is not bundled here. This edition publishes the research index and summaries; it does not claim to release every local experiment.

Before sharing a future event demo, review its asset rights, secrets, dependencies, and setup instructions, then add a public repository or recording to the relevant entry.
