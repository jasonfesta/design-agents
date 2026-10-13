# Shaders, WebGL, and glass

[Home](../README.md) · [Typography](typography.md) · [Motion skills](skills.md#motion-and-animation) · [Local studies](local-studies.md)

Source repositories and techniques from our local rendering research. These are libraries, experiments, and agent tools, not interchangeable MCP servers.

**Evidence: Prior research**, unless stated otherwise. The source/code inspection notes were recovered from local studies dated September 9-16, 2026. The directory does not claim that each project was installed or benchmarked in DxA. Check current APIs, browser support, and licenses before reuse.

## Agent tools for graphics

| Project | Design use |
| --- | --- |
| [MiniMax shader-dev](https://github.com/MiniMax-AI/skills) | Skill guidance for procedural effects and GLSL work. Catalogue reference. |
| [Shader for Interfaces](https://github.com/v2space-labs/shader-for-interfaces) | Specify a visual contract and verification loop for interface shaders. |
| [Shader Shade](https://github.com/JessieJessJe/shader-shade) | Study an image-targeted shader generation and critique loop. |
| [ShaderVine](https://github.com/jonradoff/shadervine) | WebGPU effect authoring and export, with an MCP surface for agents. |
| [Triangle](https://github.com/pkyanam/Triangle) | Study agent-facing scene tools, live preview, and scene manipulation. |
| [WebGPU Claude skill](https://github.com/dgreenheck/webgpu-claude-skill) | Guidance for TSL, compute, and node materials. Catalogue reference. |

## Rendering foundations

| Project | Design use |
| --- | --- |
| [Three.js](https://github.com/mrdoob/three.js) | Scenes, materials, geometry, GPU simulations, and rendering examples. |
| [OGL](https://github.com/oframe/ogl) | A small WebGL foundation for custom effects and feedback experiments. |
| [Drei](https://github.com/pmndrs/drei) | React Three Fiber helpers, including transmission materials. |
| [Postprocessing](https://github.com/pmndrs/postprocessing) | Compose effects and manage fullscreen rendering passes. |
| [Shader Park](https://github.com/shader-park/shader-park-core) | Author procedural forms and signed-distance-field scenes. |
| [LYGIA](https://github.com/patriciogonzalezvivo/lygia) | Reusable shader functions; inspect the applicable license before shipping. |
| [PSRD noise](https://github.com/stegu/psrdnoise) | Periodic noise with derivatives for continuous procedural movement. |
| [WebGL noise](https://github.com/stegu/webgl-noise) | Texture-free GLSL noise building blocks. |

## Backgrounds and procedural motion

| Project | Design use |
| --- | --- |
| [Paper Shaders](https://github.com/paper-design/shaders) | Inspect editable procedural backgrounds and fluted-glass sampling. |
| [React Bits](https://github.com/DavidHDev/react-bits) | Explore effects such as Silk, then adapt them to the product and motion budget. |
| [Shader Lab](https://github.com/basementstudio/shader-lab) | Study layered shader compositions and an editing workflow. |
| [Noisemaker](https://github.com/noisefactorllc/noisemaker) | Procedural visual generation and composable effect studies. |
| [Satus](https://github.com/darkroomengineering/satus) | A broader starter with useful liquid-metal and TSL references. |
| [Lumen Shaders](https://github.com/Leonxlnx/lumenshaders) | Procedural fields and line-like light treatments studied locally. |
| [LuminaWall](https://github.com/kun101/LuminaWall) | Liquid glass, plasma, and chrome preset references. |
| [Duskpaper](https://github.com/marko-builds/duskpaper) | Flow-based visual generation; this is not a drop-in WebGL component. |
| [Lumaflux](https://github.com/whoamaiii/lumaflux) | Optical-flow and feedback techniques considered in the Lumen study. |
| [Vanta](https://github.com/tengbao/vanta) | Animated background references, including continuous wave surfaces. |
| [Bubbles](https://github.com/toomcis/Bubbles) | Procedural outline-field reference from the local Lumen investigation. |
| [Looper](https://github.com/spite/looper) | Study repeatable animation loops and capture-friendly compositions. |
| [Sketch Three.js](https://github.com/ykob/sketch-threejs) | Older creative-coding examples; expect legacy APIs. |
| [Three.js Experiments](https://github.com/ykob/threejs-experiments) | Additional interactive rendering studies with a newer project structure. |

## Fluids and particles

| Project | Design use |
| --- | --- |
| [WebGL Fluid Simulation](https://github.com/PavelDoGreat/WebGL-Fluid-Simulation) | Study persistent velocity, pressure, and dye buffers. |
| [GPU-IO](https://github.com/amandaghassaei/gpu-io) | Build persistent GPU simulation layers and programs. |
| [WebGL Water](https://github.com/evanw/webgl-water) | Study ripples, height fields, and caustic approximations. |
| [Reaction Diffusion WebGL](https://github.com/piellardj/reaction-diffusion-webgl) | Evolving procedural patterns rather than a static noise overlay. |
| [Ray Marching WebGL](https://github.com/piellardj/ray-marching-webgl) | Study marching budgets and implicit surfaces. |
| [Plume](https://github.com/travisdmathis/plume) | WebGPU particle and ribbon-trail experiments. |

## Glass and refraction

| Project | Design use |
| --- | --- |
| [Spectral Glass](https://github.com/Saqoosha/Spectral-Glass) | Wavelength-based dispersion; distinguish it from RGB channel offsets. |
| [LiquidGlass by Youness Bouane](https://github.com/ybouane/liquidglass) | DOM capture and lensing; account for capture and compositing cost. |
| [Liquid Glass Studio](https://github.com/iyinchao/liquid-glass-studio) | Editable shapes, highlights, and spring-like material interactions. |
| [LiquidGlass by anuero](https://github.com/anuero/LiquidGlass) | Continuous-corner geometry and lens-shoulder reconstruction. |
| [LiquidGlass by OverShifted](https://github.com/OverShifted/LiquidGlass) | Compact OpenGL shader reference, not a browser-ready package. |
| [LiquidGlass by bergice](https://github.com/bergice/liquidglass) | Early WebGL glass experiment and adjustable optical controls. |
| [Glass Effect WebGPU](https://github.com/jeantimex/glass-effect-webgpu) | Experimental content capture and deformable glass; check browser support. |
| [Three GPU Pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer) | Progressive reference rendering for material and lighting comparisons. |
| [Three.js PathTracing Renderer](https://github.com/erichlof/THREE.js-PathTracing-Renderer) | Analytic path-tracing examples and optical reference scenes. |

Use [MeshPhysicalMaterial](https://threejs.org/docs/pages/MeshPhysicalMaterial.html) and the [glTF volume](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md) and [dispersion](https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_dispersion/README.md) specifications to distinguish transmission, absorption, and chromatic separation. Apple-inspired and Figma-inspired experiments are independent interpretations, not their proprietary renderers.

## Reference matching and reconstruction

These are research tools, not a promise that an agent can reconstruct an arbitrary image exactly.

| Project | Design use |
| --- | --- |
| [Mitsuba 3](https://github.com/mitsuba-renderer/mitsuba3) | Differentiable rendering and optimization of scene parameters. |
| [Materialist](https://github.com/lez-s/Materialist) | Single-image material editing research; inspect transparency limitations. |
| [SAM 2](https://github.com/facebookresearch/sam2) | Segment reference regions before measuring or reconstructing them. |
| [diffvg](https://github.com/BachiLi/diffvg) | Differentiable vector rasterization for shape-fitting experiments. |
| [ASD](https://github.com/yashbelhe/ASD) | Research into differentiating shader boundaries and discontinuities. |
| [nvdiffrast](https://github.com/NVlabs/nvdiffrast) | Differentiable rasterization primitives; inspect platform and license restrictions. |
| [TransparentGS](https://github.com/LetianHuang/transparentgs) | Transparent-object reconstruction research with dataset requirements. |
| [TRELLIS.2](https://github.com/microsoft/TRELLIS.2) | Image-to-3D research; inspect model, dependency, and hardware requirements. |
| [Image2Shader](https://github.com/misyltoad/Image2Shader) | Encodes image values in shader code; do not mistake it for editable geometry. |
| [Pixelmatch](https://github.com/mapbox/pixelmatch) | Compare rendered images under controlled dimensions and framing. |
| [LPIPS](https://github.com/richzhang/PerceptualSimilarity) | Perceptual image-distance research; a metric is not a design judgment. |

## Product checks

Keep readable DOM content and a non-WebGL fallback. Test reduced motion, pause, resize, context loss, and renderer cleanup. Match reference framing and color management before evaluating fidelity. Record measured performance on the actual device rather than promising a frame rate.

[WebGL best practices](https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/WebGL_best_practices) · [Local study summaries](local-studies.md)
