# Style vocabulary and naming

Working vocabulary v0.4 · October 12, 2026 · Research proposal; no personal style selected

Jason asked for broader aesthetics using terminology designers actually use, across websites, applications, games, and motion. The previous twelve-look shortlist mixed conventional terms with locally invented compound labels. This revision provides **31 preferred visual terms**, records aliases and boundaries, and separates visual aesthetics from rendering treatments, motion techniques, and software names.

This file owns shared term identity. [Apps](APPS.md), [websites](WEBSITES.md), and [games](GAMES.md) own type-specific interpretation. [Motion](MOTION.md) owns animation terminology and tool distinctions. [Source research](../../resources/research/directions/design-taxonomy-research.md#designer-terminology-and-motion) records access and evidence limits. Definitions below are concise working boundaries for this library, not universal standards or complete historical accounts.

## Naming rules

- Use an attested preferred term and a stable ID. Preserve earlier IDs when their meaning is unchanged; record spelling variants as aliases.
- State the kind of term: composition approach, historical tradition, contemporary interface style, cultural aesthetic, rendering treatment, motion technique, or tool. These groups are metadata, not more folder levels.
- Record broader, narrower, and related terms explicitly. Similar appearance does not make two terms aliases.
- Put modifiers such as chrome, CRT, halftone, monochrome, dark mode, bento layout, density, or spring timing in fields. Broad intent words such as premium, friendly, modern, and playful need observable rules.
- A researched direction may combine influences. Use one primary term and explain the secondary contributions rather than inventing a universal style name from every combination.

The path remains `<type>/<viewport>/<category>/<style>/`. A branch record defines its visual recipe, rendering, motion, tools, sources, and versions inside that fourth layer. Game art and HUD can use different recipes.

## Preferred visual terms

The groups below help browsing; they are not an exclusive or universal classification. Historical movements can span several design disciplines. Contemporary UI terms can describe a surface system rather than an entire art direction. Every term still needs an actual reference and scoped rules before use.

### Composition

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **Minimalism** · `minimal` | Minimal; minimalist | Reduce visual competition while preserving the information and controls a task needs. | [NN/g](https://www.nngroup.com/articles/characteristics-minimalism/) |
| **Maximalism** · `maximal` | Maximalist | Layer type, image, pattern, and color with deliberate abundance and a legible hierarchy. | [Adobe](https://www.adobe.com/uk/express/learn/blog/what-is-maximalism) |
| **Editorial** · `editorial` | Magazine-inspired is a possible interpretation, not a synonym for every editorial design. | Use publication-derived type hierarchy, image sequencing, captions, and reading rhythm. | [Refero catalogue](https://styles.refero.design/) |

### Design traditions

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **International Typographic Style** · `swiss-typographic` | Swiss Style; Swiss typography | Typographic grids, sans-serif hierarchy, precise alignment, and restrained ornament. | [Swiss National Library](https://www.nb.admin.ch/en/the-international-style-1950-1970) |
| **Bauhaus** · `bauhaus` | Historical school and influence; broader than primary-color geometry. | Unify function, typography, geometric composition, and material logic in a defined Bauhaus-informed interpretation. | [MoMA](https://www.moma.org/collection/terms/bauhaus); [Canva](https://www.canva.com/de_de/lernen/bauhaus-design/) |
| **De Stijl** · `de-stijl` | Related: Neoplasticism; do not collapse all geometric design into it. | Use orthogonal relationships and carefully balanced color planes from specific De Stijl references. | [MoMA](https://www.moma.org/collection/terms/de-stijl) |
| **Constructivism** · `constructivism` | Constructivist graphic design | Combine assertive geometry, typographic structure, and photomontage in reference-specific compositions. | [MoMA](https://www.moma.org/collection/terms/constructivism) |
| **Art Nouveau** · `art-nouveau` | Art Nouveau; related national traditions require their own references. | Use flowing ornament, stylized organic forms, and integrated decorative lettering. | [V&A](https://www.vam.ac.uk/articles/art-nouveau-an-international-style) |
| **Art Deco** · `art-deco` | Art Deco; historical Style Moderne overlaps but is not a universal alias. | Use geometric ornament, rhythmic repetition, and stylized display forms within a specified historical interpretation. | [V&A](https://www.vam.ac.uk/articles/an-introduction-to-art-deco) |
| **Mid-century Modern** · `mid-century-modern` | MCM; a broad design tradition needing a specific reference. | Reduce forms into clear geometry and stylized organic shapes with functional composition. | [Cooper Hewitt](https://shop.cooperhewitt.org/blogs/shop-blog/mad-for-mid-century) |

### Expressive graphics

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **Memphis** · `memphis` | Memphis design; related: postmodern design. | Use playful geometric forms, conspicuous pattern, and unexpected color relationships. | [Design Museum](https://designmuseum.org/memphis) |
| **Pop Art** · `pop-art` | Pop-art-inspired graphic design | Draw on mass-media imagery, repetition, and the visual language of popular culture. | [MoMA](https://www.moma.org/collection/terms/pop-art) |
| **Psychedelic design** · `psychedelic` | Psychedelia; psychedelic graphics | Use undulating lettering, optical rhythm, and densely interwoven graphic forms. | [V&A](https://www.vam.ac.uk/articles/a-short-history-of-the-poster) |
| **New Wave typography** · `new-wave` | New Wave design; related: Swiss Punk typography. | Experiment with typographic layering, scale, spacing, and departures from a strict grid. | [April Greiman interview, AIGA](https://eyeondesign.aiga.org/april-greiman-is-still-ahead-of-the-curve/) |
| **Punk graphic design** · `punk` | Punk graphics; DIY describes an influence, not an exact synonym. | Use cut-and-paste composition, confrontational typography, and deliberately rough reproduction. | [V&A](https://www.vam.ac.uk/blog/sketch-product/heart-his-sleeve-vaughan-oliver) |
| **Grunge** · `grunge` | Grunge typography; distressed is a treatment, not a complete synonym. | Use distressed textures, fragmented typography, and deliberate visual irregularity. | [AIGA](https://eyeondesign.aiga.org/no-240-david-carsons-collages-dr-mes-rejected-designs-speculative-video-game-branding-more/) |

### Web and interface

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **Flat design** · `flat` | Flat UI; semi-flat/Flat 2.0 is a related variant. | Use predominantly planar forms and restrained simulation of depth. | [NN/g](https://www.nngroup.com/articles/flat-design/) |
| **Skeuomorphism** · `skeuomorphic` | Skeuomorphic design | Carry recognizable qualities of physical objects into digital controls or environments. | [NN/g](https://www.nngroup.com/articles/skeuomorphism/) |
| **Neumorphism** · `neumorphic` | Neumorphic design; soft UI is a broader search phrase. | Make raised or inset forms appear to emerge from a shared surface through light and shadow. | [NN/g](https://www.nngroup.com/articles/skeuomorphism/) |
| **Glassmorphism** · `glassmorphic` | Glassmorphic design; glass effects are broader. | Use translucent, blurred layers with controlled foreground/background separation. | [NN/g](https://www.nngroup.com/articles/glassmorphism/) |
| **Claymorphism** · `claymorphic` | Claymorphic design; clay-like UI. | Use rounded, inflated forms with highlights and layered shadows suggesting molded clay. | [TypeUI practitioner implementation](https://www.typeui.sh/design-skills/claymorphism) |
| **Web brutalism** · `brutalist` | Brutalist web design; architecture is a different context. | Use visibly direct structure, exposed web conventions, and deliberate rawness. | [NN/g](https://www.nngroup.com/articles/brutalism-antidesign/) |
| **Neobrutalism** · `neobrutalist` | Neo-brutalism; neobrutalist design. | Use emphatic borders, graphic color, bold type, and hard offset shadows. | [NN/g](https://www.nngroup.com/articles/neobrutalism/) |

### Digital eras

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **Retro computing** · `retro-computing` | Retro UI is broader; desktop and terminal are narrower reference directions. | Reinterpret a specified historical computer interface or display language. | [98.css; terminal reference in history](https://jdan.github.io/98.css/) |
| **Y2K** · `y2k` | Y2K aesthetic; chrome is a material treatment. | Use turn-of-the-millennium digital futurism with glossy, rounded, and synthetic forms. | [CARI](https://cari.institute/aesthetics/y2k-aesthetic) |
| **Frutiger Aero** · `frutiger-aero` | Specific consumer aesthetic; not synonymous with glassmorphism. | Combine glossy/translucent technology imagery, humanist type, and natural motifs. | [CARI](https://cari.institute/aesthetics/frutiger-aero) |
| **Vaporwave** · `vaporwave` | Related to synthwave; not an alias. | Remix retro consumer/digital imagery, surreal collage, and degraded-media references. | [Adobe](https://www.adobe.com/uk/express/learn/blog/what-is-vaporwave) |
| **Synthwave** · `synthwave` | Retrowave/outrun are related search terms with their own contexts. | Use 1980s-inspired cinematic futurism, stylized lighting, and streamlined digital imagery. | [Adobe](https://www.adobe.com/uk/express/learn/blog/what-is-vaporwave) |

### Speculative aesthetics

| Preferred term / stable ID | Aliases and relationships | Working definition | Evidence |
| --- | --- | --- | --- |
| **Retrofuturism** · `retrofuturism` | Retro-futurism; an umbrella requiring an era and source. | Reinterpret past visions of the future in a clearly identified visual direction. | [Webflow](https://webflow.com/blog/retrofuturism) |
| **Cyberpunk** · `cyberpunk` | HUD is an interface context, not part of the aesthetic’s name. | Use a specified high-technology, dystopian visual world; neon alone is insufficient. | [Adobe](https://www.adobe.com/products/firefly/features/ai-art-generator/cyberpunk-aesthetic.html) |
| **Steampunk** · `steampunk` | Related to retrofuturism; not a generic synonym for brass. | Use speculative machinery and Victorian-era material/decorative references. | [Science Museum](https://blog.sciencemuseum.org.uk/steampunk-in-the-science-museum/) |

## Corrections to the earlier shortlist

| Earlier label | Preferred treatment |
| --- | --- |
| Swiss / International Typographic | **International Typographic Style**, with **Swiss Style** as an alias. Retain `swiss-typographic`. |
| Y2K / chrome | **Y2K**; record chrome as a material treatment. |
| Cyberpunk HUD | **Cyberpunk**; record HUD as the interface context. Preserve `cyberpunk-hud` as an old compound label, not an exact synonym. |
| Pixel arcade | **Pixel art** for the rendering treatment; record arcade conventions separately. |
| Terminal / CRT | Record terminal as an interface/reference type and CRT as a display treatment, usually within a specified retro-computing direction. |
| Retro desktop / Windows 95–98 | Record the actual desktop/OS reference under retro computing. Windows 98 evidence does not establish every earlier OS detail. |
| Rubber-hose / 1930s cartoon | **Rubber-hose animation** for the animation tradition; separately describe line, illustration, and background treatment. |
| Editorial / magazine | **Editorial**; publication or magazine references further specify its interpretation. |

Minimalism and flat design remain distinct. Skeuomorphism, neumorphism, and claymorphism describe different relationships to physical appearance. Web brutalism and neobrutalism have distinct working definitions. Glassmorphism is not a synonym for Frutiger Aero. Vaporwave and synthwave are related, not interchangeable. Bauhaus, De Stijl, Swiss Style, and Memphis retain separate historical contexts.

## Rendering and material vocabulary

Keep rendering/media terms available to designers: pixel art, voxel art, low-poly, cel shading, vector illustration, hand-drawn illustration, painterly rendering, photorealism, collage, papercraft, halftone, dithering, and risograph-inspired texture. [Games](GAMES.md) supplies scoped definitions and evidence for its rendering/art terms. The remaining media terms require a specific source when activated. A rendering-led direction can use a name such as `pixel-art`; it must still define a complete recipe. Terms such as isometric describe projection, and bento describes layout.

Remotion, Jitter, After Effects, Rive, GSAP, and Motion are tool names. Keep them in the environment/tool field. [MOTION.md](MOTION.md) defines the techniques we can name independently of an implementation.

## Match a style to a branch

Start with style unset. Record **unassessed**, **candidate match**, **supported match**, or **not a fit**, with reasons and references. Requested exploration can create a candidate style folder; it does not establish a personal preference. Apply [the taste-definition process](../workflow/TASTE.md) before using a style as Jason's taste.

Each style record states the intended task, viewport/profile, relevant category, defining rules, exclusions, inspected references, Jason's reaction, and unsupported aspects. Use [the style README template](STYLE-TEMPLATE.md) when creating an actual folder.

For games, the art style and interface treatment can differ. For apps, a platform design system can constrain components without defining the whole visual style. For websites, page purpose is a separate detail. Keep density, light/dark mode, color temperature, motion intensity, and words such as luxury or friendly as explicit controls or intent tags.

[Earlier shared families](LEGACY.md) retain the previous family/treatment vocabulary for old records. New records use the type-specific menu and record aliases where needed. Selecting a menu entry alone does not create an approved baseline.
