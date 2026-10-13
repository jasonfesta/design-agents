# Game art and style vocabulary

Working vocabulary v0.2 · October 12, 2026 · Research proposal; no branch taste established

Game style records need both art direction and interface/HUD direction. This registry expands the earlier ten research leads into **13 named art, rendering, and animation terms**, with explicit boundaries and source evidence. The [shared visual vocabulary](README.md) also supplies traditions such as Art Deco, Cyberpunk, and Steampunk when references support their use in a game. The [motion vocabulary](MOTION.md) supplies timing and animation terms.

These are source-text findings and working definitions. Representative gameplay, animation, and HUD inspection remains outstanding. The list does not select a personal style or automatically match a style to a genre.

## Preferred terms

| Preferred term / stable ID | Kind | Working definition and naming boundary | Evidence |
| --- | --- | --- | --- |
| **Pixel art** · `pixel-art` | Rendering/art treatment | Deliberate pixel placement, silhouettes, and palette. Specify a grid and scaling policy; “arcade” describes a different aspect. | [Yacht Club Games: Shovel Knight](https://www.yachtclubgames.com/blog/breaking-the-nes/) |
| **Flat vector illustration** · `vector-flat` | Medium plus treatment | Vector-defined shapes with a deliberately flat treatment. Vector artwork can also contain complex shading; the two terms are not synonyms. Earlier label: Vector flat. | [Adobe: vector art](https://www.adobe.com/creativecloud/illustration/discover/vector-art.html); [flat design](https://www.nngroup.com/articles/flat-design/) |
| **Hand-drawn illustration** · `hand-drawn` | Art treatment | Drawn line and shape language; specify medium and mark behavior. Hand-drawn does not imply one animation method. Earlier label: Hand drawn. | [Nintendo: Cuphead](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Cuphead-1532319.html) |
| **Painterly rendering** · `painterly` | Rendering/art treatment | Visible painted marks, color masses, and brush-derived surface structure; can be built in 2D or 3D. | [Orbitals developer breakdown](https://www.unrealengine.com/tech-blog/stepping-inside-a-retro-anime-inspired-game-a-look-into-the-rendering-of-orbitals) |
| **Cel shading** · `cel-shaded` | Rendering technique | Discrete lighting bands used for a graphic appearance. Outlines are optional. Distinct from drawn cel animation. Earlier label: Cel shaded. | [Orbitals developer breakdown](https://www.unrealengine.com/tech-blog/stepping-inside-a-retro-anime-inspired-game-a-look-into-the-rendering-of-orbitals) |
| **Low-poly** · `low-poly` | Geometry descriptor; possible aesthetic | A relatively low polygon count. If visible facets are part of the look, say so; low-poly production geometry alone does not establish that look. | [Adobe 3D glossary](https://helpx.adobe.com/substance-3d-modeler/desktop/getting-started/glossary.html) |
| **Voxel art** · `voxel` | Representation plus art treatment | A visual direction that exposes a volumetric grid. A voxel-based modeling tool can also produce smooth surfaces, so record the intended appearance. Earlier label: Voxel. | [Adobe 3D glossary](https://helpx.adobe.com/substance-3d-modeler/desktop/getting-started/glossary.html) |
| **Stylized 3D** · `stylized-3d` | Broad umbrella | Intentionally interpreted forms and shading. Specify proportions, materials, lighting, and references; this name alone is too broad for a kit. | [Unreal Engine animation overview](https://www.unrealengine.com/uses/animation) establishes the broad vocabulary; the recipe fields are our synthesis. |
| **Photorealistic 3D** · `realistic-3d` | Rendering target | Seek photographic plausibility in form, material, lighting, and image formation. Earlier “Realistic 3D” is broader; the existing ID is retained for continuity. | [Unreal Engine animation overview](https://www.unrealengine.com/uses/animation) |
| **Retro 3D** · `retro-3d` | Era-informed umbrella | Reinterpret a specified historical 3D rendering language. PS1-inspired is one direction, not an alias for all retro 3D. | [Crow Country developer interview](https://blog.playstation.com/2024/05/02/crow-country-retro-original-playstation-era-gameplay-stylings-meet-modern-horror/) |
| **Retro anime** · `retro-anime` | Reference tradition | Name the period and works being interpreted; describe characters, backgrounds, compositing, and cadence separately. Cel shading alone does not establish anime. | [Orbitals developer breakdown](https://www.unrealengine.com/tech-blog/stepping-inside-a-retro-anime-inspired-game-a-look-into-the-rendering-of-orbitals) |
| **Papercraft** · `papercraft` | Material-informed art direction | Paper-like planes, cut edges, folds, and layered construction. Origami is a specific folded-paper influence. | [Nintendo: Paper Mario](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Paper-Mario-The-Origami-King-1782440.html) |
| **Rubber-hose animation** · `rubber-hose` | Animation tradition | Flexible cartoon limbs and elastic movement; combine with separately defined line, color, and background choices. | [Adobe](https://www.adobe.com/uk/creativecloud/animation/discover/rubber-hose-animation.html); [motion entry](MOTION.md) |

Stable IDs preserve earlier records; naming corrections do not silently reinterpret their artwork. The historical ten-term table is retained in [LEGACY.md](LEGACY.md). A future change of meaning needs a scoped migration, not a blanket rename.

## Compose a game direction

Record these fields within the fourth layer:

- Primary aesthetic or art direction and specific references.
- World, character, environment, and VFX treatment; media/rendering choices.
- Interface and HUD: typography, icons, surfaces, states, navigation, and feedback.
- Motion: character cadence, camera behavior, effects, and UI transitions, using [named techniques](MOTION.md).
- Projection/camera, engine, target rendering dimensions, input, and performance requirements.

A cyberpunk world could use pixel art or photorealistic 3D. An isometric camera does not prescribe either. A papercraft world does not prove the menus use folded-paper controls. A stepped character pose sequence does not require a stepped camera or delayed input. These combinations are design reasoning, not inferred attributes of every referenced game.

The hierarchy remains `games/<viewport>/<category>/<style>/`. The category remains a game genre. Rendering, theme, camera, and motion fields clarify the style rather than adding folder levels. Use [style matching](README.md) and the [style template](STYLE-TEMPLATE.md); no pairing is preselected.
