# Typography and WebGL text

[Home](../README.md) · [Shaders](shaders.md) · [Local studies](local-studies.md) · [Skill catalogue](skills.md)

Type is part of the product, not just a visual effect. This section brings together our local font-tool research and the scroll-driven WebGL typography investigation.

**Evidence:** prior source research from September 16 and 24, 2026. External tools are not claimed as installed or benchmarked. The DxA text demo is a local implementation; it does not establish compatibility for every linked technique.

## WebGL text foundations

| Resource | Design use |
| --- | --- |
| [Troika](https://github.com/protectwise/troika) | Its troika-three-text package supplies SDF-based text for Three.js. |
| [React Three Fiber scroll rig](https://github.com/14islands/r3f-scroll-rig) | Keep WebGL objects aligned with DOM elements as the page scrolls. |
| [VFX-JS](https://github.com/fand/vfx-js) | Apply shader treatments to page elements without making every element a separate 3D scene. |
| [Three.js](https://github.com/mrdoob/three.js) | Text geometry, textures, materials, and postprocessing foundations. |
| [GSAP](https://github.com/greensock/GSAP) | Coordinate scroll and timeline behavior around a text composition. |
| [Lenis](https://github.com/darkroomengineering/lenis) | Coordinate scrolling with visual effects; preserve ordinary navigation behavior. |

## Techniques from the typography research

| Original article or demo | What to study |
| --- | --- |
| [Responsive and SEO-friendly WebGL text](https://tympanus.net/codrops/2025/06/05/how-to-create-responsive-and-seo-friendly-webgl-text/) | Mirror real text into a graphics layer while preserving the document. |
| [Organic text distortion with infinite scrolling](https://tympanus.net/codrops/2024/11/06/how-to-create-an-organic-text-distortion-effect-with-infinite-scrolling/) | A lighter CSS/JavaScript route; it is not a WebGL renderer. |
| [Typography motion trail with Three.js](https://tympanus.net/codrops/2021/07/21/creating-a-typography-motion-trail-effect-with-three-js/) | Feedback buffers and motion history for trailing text. |
| [Kinetic typography with Three.js](https://tympanus.net/codrops/2020/06/02/kinetic-typography-with-three-js/) | Text textures, geometry, and shader-driven movement. |
| [Progressively enhanced WebGL lens refraction](https://tympanus.net/codrops/2023/10/10/progressively-enhanced-webgl-lens-refraction/) | DOM-aligned text and refractive materials with a usable baseline page. |
| [VFX-JS introduction](https://tympanus.net/codrops/2025/01/20/vfx-js-webgl-effects-made-easy/) | Shader overlays for text and imagery. |
| [Particle Font](https://experiments.withgoogle.com/particle-font) | Letterforms represented as interactive particle fields. |
| [Trionn architecture](https://tympanus.net/codrops/2026/07/15/the-architecture-behind-trionn-coordinating-gsap-three-js-lenis-and-web-audio/) | Coordinating scroll, rendering, motion, and audio across one experience. |
| [Three.js DigitalGlitch](https://threejs.org/docs/pages/module-DigitalGlitch.html) | A postprocessing building block, not a text-layout or accessibility system. |

The Font.Skin lead from the earlier discussion remains unlisted as an installable recommendation: that research relied on a secondary discussion and did not establish a primary implementation source.

## Font agents and production tools

| Resource | Design use and boundary |
| --- | --- |
| [AI Font Assistant](https://github.com/mixfont/ai-font-assistant) | Glyphs plugin connected to a hosted generation service; not an open model. Requires the relevant editor and service access. |
| [Mixfont API](https://www.mixfont.com/font-generation-api) | Hosted font-generation integration; check access and usage terms. |
| [Image to Font Extractor](https://github.com/wyattmattoe/Image-to-font-extractor) | Convert an ordered glyph sheet into font assets. Missing glyphs and kerning still need work. |
| [DesigNet](https://github.com/TomasGuija/DesigNet) | Vector glyph-generation research, not a verified complete variable-font pipeline. |
| [Standard Beagle Typography](https://github.com/standardbeagle/standardbeagle-tools/tree/main/packages/typography) | Typography CLI/MCP for metrics, axes, subsets, scales, and fallbacks; not an outline designer. |
| [Ref2Font](https://github.com/SnJake/Ref2Font) | Image-to-font workflow with model dependencies. Review model terms separately from repository code. |
| [VecGlypher](https://github.com/xk-huang/VecGlypher) | Vector glyph research; full-family spacing and kerning require separate validation. |
| [FontDiffuser](https://github.com/yeungchenwa/FontDiffuser) | Font-generation research to study, not an assumed production typeface builder. |
| [Fontra](https://github.com/fontra/fontra) | Edit variable fonts in a dedicated font editor. |
| [Fontmake](https://github.com/googlefonts/fontmake) | Compile font sources into distributable font binaries. |
| [FontBakery](https://github.com/fonttools/fontbakery) | Run font quality checks before using a family in a product. |
| [Google Fonts skill](https://github.com/sliday/google-fonts-skill) | Font discovery, pairing, and integration guidance. Catalogue reference. |

## What we are carrying forward

Our Core font work treated a font as a product contract: role presets, supported characters, axis limits, fallback behavior, and rendering fixtures. Generated outlines are a starting point, not a finished family.

For WebGL type, preserve selectable and accessible DOM text; load fonts before measuring; test mobile wrapping, zoom, fallback rendering, and reduced motion. Keep distortion out of forms and other reading-critical interfaces.

[DxA text demo source](../website/src/three-text-demo.js) · [Website attribution](../website/LICENSE) · [Local study register](local-studies.md)
