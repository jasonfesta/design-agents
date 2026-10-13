# Research: design categories and style vocabulary

October 12, 2026 · Public-source and catalogue research · Category menus subsequently approved; styles remain open

**Latest follow-up:** [Designer terminology and motion](#designer-terminology-and-motion) expands the vocabulary to 31 visual terms, game art/rendering terms, and named motion techniques. Earlier shortlist sections are retained as research history. [DesEngs](../collections/desengs/README.md) is now captured in Resources.

## Decision to preserve

**Follow-up decision:** Jason said, “Websites and apps look good. These styles we still need to work on.” The 18 website and 20 app category menus are now approved. The style discussion below remains research, with no accepted style list or personal visual preference.

Jason rejected the shared Google Play category menu for websites and apps. He wants website uses such as landing pages and SaaS. Asked about apps, he chose “Interface types: dashboards, feeds, editors, players, booking flows.” He also rejected the sufficiency of the proposed style lists and requested research.

Keep **apps / websites / games → viewport → category → style**. Change the category vocabulary according to the type. Use “design category” for the shared layer. The earlier requirement that apps and websites both use Google Play is superseded. Game genres were not changed by this clarification.

## What the sources show

| Source inspected | Finding relevant to our model | What we take from it |
| --- | --- | --- |
| [Framer category directory](https://www.framer.com/community/marketplace/templates/categories/) | Provides purpose-oriented browsing alongside industry and style filters. | Website categories can describe the kind of site being designed. |
| [Framer SaaS templates](https://www.framer.com/marketplace/templates/categories/saas/) | Maintains a dedicated SaaS collection. | Give software marketing sites an explicit home. |
| [Webflow categories](https://webflow.com/templates/categories) | Includes publishing, portfolios/agencies, documentation, retail, education, careers, and launch use cases. | Use these as inputs to a local website menu, without inheriting every provider grouping. |
| [Landbook](https://land-book.com/) | Separates industry, type, style, typography, and color; its style filter itself includes several kinds of visual attributes. | Keep searchable attributes, but normalize their meaning rather than copying all filters into one style list. |
| [Mobbin screens](https://mobbin.com/explore/web/screens), [flows](https://mobbin.com/explore/web/flows), and [overview](https://mobbin.com/explore/web) | Distinguishes screen/flow labels from product categories and individual UI elements. | Apps should be organized around interface tasks and flows, as Jason selected. |
| Inspo `get_filters` connector response, October 12 | Returns separate style, industry, macrostructure, mode, typography, and page-type fields. Style values include minimalism, editorial, brutalism, Swiss, maximalism, vintage, and glassmorphism. | A reference needs several attributes; the style folder can hold a named direction composed from them. This is provider vocabulary evidence, not proof of a complete style taxonomy. |

No universal category or style standard emerges from these sources. The replacement lists are our design-workflow synthesis. Sources establish useful vocabulary and browsing patterns; they do not establish Jason's visual taste.

## Approved category menus

- [Website design categories](../../shared/workflow/taxonomy/WEBSITE-CATEGORIES.md): 18 approved uses, including landing pages, SaaS marketing, app launches, ecommerce, portfolios, documentation, booking, and interactive stories.
- [App interface categories](../../shared/workflow/taxonomy/APP-INTERFACES.md): 20 approved screen/flow families, including Jason's dashboards, feeds, editors, players, and booking flows.
- [Game genres](../../shared/workflow/taxonomy/GAME-GENRES.md): retain the existing source list in this pass; no new genre decision was made.

A SaaS marketing site belongs in websites; its working dashboard belongs in apps. A standalone SaaS campaign can use landing-pages with SaaS context. These buckets overlap deliberately for browsing; one record has a primary home and explicit related-category links. The detailed boundary rules are in each menu.

## Repair the style model

The first lists were too thin and used broad adjectives as if they were sufficient design instructions. A material, composition, rendering technique, or era can influence a direction, but its name alone cannot reproduce a coherent interface. Our `style` folder should ultimately name a **reference-backed visual direction**, with its type-specific rules and independent versions.

Use the revised [app candidates](../../shared/styles/APPS.md) and [website candidates](../../shared/styles/WEBSITES.md) as research vocabulary. The v0.2 lists separated surface, composition, and era influences; the v0.3 shortlists below now focus on specific aesthetics following Jason’s clarification. They are not a set of mutually exclusive or automatically approved themes.

| Term or group | Evidence and distinction |
| --- | --- |
| Minimalist and flat | NN/g's [minimalism study](https://www.nngroup.com/articles/characteristics-minimalism/) distinguishes reduction of content/composition from flat surface treatment. A dense app can use flat styling. |
| Flat and semi-flat | [NN/g's flat-design article](https://www.nngroup.com/articles/flat-design/) distinguishes largely two-dimensional treatment from restrained depth used to clarify interaction. |
| Skeuomorphic and neumorphic | [NN/g's account](https://www.nngroup.com/articles/skeuomorphism/) distinguishes physical metaphors from softer raised/inset surface effects. Their affordances and contrast still need checking. |
| Glassmorphic | [NN/g's glassmorphism article](https://www.nngroup.com/articles/glassmorphism/) describes transparency/blur as a visual treatment; design systems may call it a material. It can coexist with several compositions. |
| Brutalist and neobrutalist | [Brutalism and antidesign](https://www.nngroup.com/articles/brutalism-antidesign/) and [neobrutalism](https://www.nngroup.com/articles/neobrutalism/) describe different practices. Do not collapse them into one generic “bold” label. |
| Apple Liquid Glass | [Apple's overview](https://developer.apple.com/documentation/technologyoverviews/liquid-glass) describes a platform material and design context. Record the actual system/platform version; a generic glass effect does not establish native conformance. |

**Keep as fields within a style record:** design-system/platform and version, light/dark mode, palette, density, grid/layout, typography, imagery, material, motion, and input behavior. “Modern,” “premium,” “friendly,” and “expressive” are intent words until their visible rules are specified. A bento layout is a composition choice; a dashboard is an app category. Neither alone specifies a visual style.

For games, keep art direction and interface/HUD direction separately described inside the style record. Pixel art, cel shading, and low-poly geometry can be useful search tags, but the earlier ten labels do not define a complete style kit. Game art and interface examples still need a dedicated reference review; this pass does not claim to have completed that research.

## What makes a usable style record

For an actual branch, retain inspected references and image regions; define its typography, composition, surfaces, imagery, states, and motion; state exclusions and allowed variation; save component/control versions; and record Jason's feedback separately from the agent's interpretation. Give the resulting direction one stable name. Related labels remain searchable fields without adding a fifth folder layer.

Illustrative paths only, not populated or approved designs:

```text
websites/desktop/saas-marketing/<style>/
websites/mobile/landing-pages/<style>/
apps/desktop/dashboards/<style>/
apps/mobile/booking-flows/<style>/
games/mobile/puzzle/<style>/
```

## Scope, limitations, and next step

This pass inspected public category/filter text and published design definitions. It did not visually review a representative image set for every proposed style, inspect authenticated Mobbin flows, or establish branch taste. Page Flows' homepage returned 403 to the reader, and Refero's homepage returned no readable content; neither is used as evidence for the proposed taxonomy.

Jason subsequently approved the category counts and names. The style candidates remain unresolved. Existing category folders stay in place as legacy scaffolding. The documentation records the new direction and withdraws the old menus as current recommendations. A later folder migration should map real records by their contents and preserve source IDs, rather than mechanically equating industries with interface types. Research and explicit branch selection precede populating style directories.


## Specific aesthetics from design and gaming

Historical v0.3 shortlist, superseded by the terminology revision below.

**Clarification, October 12, 2026:** Jason asked for “specific looks for apps and websites with asethetics that are used within design and gaming.” This defines the style vocabulary we are developing. It does not approve any particular aesthetic. The separate [app](../../shared/styles/APPS.md) and [website](../../shared/styles/WEBSITES.md) v0.3 shortlists give 12 candidate looks and proposed adaptations.

The shortlist combines graphic-design traditions, recognizable digital-era looks, and influences documented in games. These are browsing groups for this discussion, not new hierarchy levels or a claim that all names are equivalent historical movements. The same name may have a different component recipe in each type. We retain the accepted categories and put the aesthetic in the existing fourth layer.

### Reference evidence and limits

| Reference | What was verified from the source | What remains our proposal or needs inspection |
| --- | --- | --- |
| [Swiss National Library: International Style](https://www.nb.admin.ch/en/the-international-style-1950-1970) | Documents typographic grids, sans-serif type, rational composition, photography, and restrained ornament. | Adaptation to dashboards, documentation, or portfolios. |
| [V&A: Art Deco](https://www.vam.ac.uk/articles/an-introduction-to-art-deco) | Describes varied historical influences, geometric motifs, and decorative craftsmanship. | Our interface recipe selects a geometric interpretation; Art Deco is broader than a black-and-gold palette. |
| [Refero Styles](https://styles.refero.design/) | Its public catalogue uses specific descriptive looks, including editorial examples, and offers site-derived DESIGN.md records. | Catalogue text is readable here, unlike the earlier main Refero homepage. Individual generated style records and screenshots have not been audited. Our editorial recipe is a working synthesis. |
| [NN/g: Neobrutalism](https://www.nngroup.com/articles/neobrutalism/) | Describes thick boundaries, assertive color, hard shadows, and strong typography with contemporary site examples. | Which of these qualities belongs in each app state or website section. |
| [98.css](https://jdan.github.io/98.css/) | The author documents a Windows 98-inspired interface library, including window and control states. | A retro-desktop interpretation for our branches; the library has not been installed. |
| [CARI: Y2K](https://cari.institute/aesthetics/y2k-aesthetic) | Establishes the named aesthetic and discusses shiny surfaces, gradients, and rounded electronics. | Chrome is a proposed narrower variant. The page's namesake chronology is internally inconsistent; it is not used for a historical date claim. |
| [CARI: Frutiger Aero](https://cari.institute/aesthetics/frutiger-aero) | Identifies glossy and transparent material, humanist typography, skeuomorphic UI, and nature imagery. | Our proposed app/web rules. A generic glass panel alone does not establish this aesthetic. |
| [cool-retro-term](https://github.com/Swordfish90/cool-retro-term) | Its creator describes emulation of cathode-tube terminal displays and configurable fonts, color, and effects. | A terminal/CRT visual recipe. No runtime was installed, and display distortion is not a functional requirement. |
| [Michael Rigley: Cyberpunk 2077](https://www.michaelrigley.com/work/cyberpunk-2077) | The creator identifies work on interface style concepts, inventory systems, and visual development with CD Projekt Red. | These are concepts, not proof of the shipped game's UI. The proposed angular/telemetry recipe needs screenshot-level inspection and comparison. |
| [Yacht Club Games: Breaking the NES](https://www.yachtclubgames.com/blog/breaking-the-nes/) | The developers explain deliberate retro pixel, palette, and technical decisions in Shovel Knight, including departures from old constraints. | Our broader pixel-arcade label and app/web adaptation. Pixel art is not one uniform palette or an obligation to reproduce hardware limitations. |
| [Nintendo: Paper Mario](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-games/Paper-Mario-The-Origami-King-1782440.html) | Describes the papercraft world and folded-paper imagery. | Paper-card and tab interface recipes; world art is not UI evidence. |
| [Nintendo: Cuphead](https://www.nintendo.com/en-gb/Games/Nintendo-Switch-download-software/Cuphead-1532319.html) | Describes 1930s cartoon influence, drawn cel animation, and watercolor backgrounds. | Our rubber-hose app/web framing and original illustration rules; this does not prescribe copying characters or reproducing the game's menus. |

This follow-up is **source-text research**, not a visual audit or an approved moodboard. The app/web use cases are design proposals. No source establishes Jason's personal taste or automatic support for a viewport/category pairing. Source artwork remains owned by its creators; this record carries attribution and links, not redistributed assets.

### Example naming

Illustrative paths, not generated folders or selected styles:

```text
apps/desktop/dashboards/swiss-typographic/
apps/mobile/media-players/y2k/
websites/desktop/landing-pages/cyberpunk-hud/
websites/mobile/events-conferences/art-deco/
```

### Next evidence step

For an aesthetic being explored, inspect representative images and label whether each shows a graphic artifact, app interface, website, game art, or game HUD. Separate shipped work from concepts. Annotate the exact regions and qualities to carry over, record Jason's keep/change/avoid feedback, and write the scoped component rules before binding those components to DialKit. Save type-specific variants independently. The current shortlist does not pre-create style branches or promote any branch's taste coverage.


## Designer terminology and motion

**Follow-up, October 12, 2026.** Jason asked for aesthetics that designers actually name, wider web research across websites, apps, and games, and names for kinetic styles associated with tools such as Remotion and Jitter. This revision replaces improvised compound labels with preferred names, aliases, relationships, and an explicit kind of term. It preserves the approved categories and four-layer tree.

### Visual vocabulary

The maintained [shared registry](../../shared/styles/README.md) now has 31 terms, with separate proposed [app](../../shared/styles/APPS.md) and [website](../../shared/styles/WEBSITES.md) applications. The following compact index keeps the names and source trail available when Resources travels alone.

| Research group | Preferred names | Source basis |
| --- | --- | --- |
| Composition | Minimalism; Maximalism; Editorial | [NN/g](https://www.nngroup.com/articles/characteristics-minimalism/), [Adobe](https://www.adobe.com/uk/express/learn/blog/what-is-maximalism), and [Refero catalogue usage](https://styles.refero.design/) |
| Design traditions | International Typographic Style (Swiss Style); Bauhaus; De Stijl; Constructivism; Art Nouveau; Art Deco; Mid-century Modern | [Swiss National Library](https://www.nb.admin.ch/en/the-international-style-1950-1970); MoMA on [Bauhaus](https://www.moma.org/collection/terms/bauhaus), [De Stijl](https://www.moma.org/collection/terms/de-stijl), [Constructivism](https://www.moma.org/collection/terms/constructivism); V&A on [Art Nouveau](https://www.vam.ac.uk/articles/art-nouveau-an-international-style) and [Art Deco](https://www.vam.ac.uk/articles/an-introduction-to-art-deco); [Cooper Hewitt](https://shop.cooperhewitt.org/blogs/shop-blog/mad-for-mid-century) |
| Expressive graphics | Memphis; Pop Art; Psychedelic design; New Wave typography; Punk graphic design; Grunge | [Design Museum](https://designmuseum.org/memphis); [MoMA](https://www.moma.org/collection/terms/pop-art); [V&A poster history](https://www.vam.ac.uk/articles/a-short-history-of-the-poster); [April Greiman interview](https://eyeondesign.aiga.org/april-greiman-is-still-ahead-of-the-curve/); [V&A on Vaughan Oliver](https://www.vam.ac.uk/blog/sketch-product/heart-his-sleeve-vaughan-oliver); [AIGA on David Carson](https://eyeondesign.aiga.org/no-240-david-carsons-collages-dr-mes-rejected-designs-speculative-video-game-branding-more/) |
| Web and interface | Flat design; Skeuomorphism; Neumorphism; Glassmorphism; Claymorphism; Web brutalism; Neobrutalism | NN/g on [flat](https://www.nngroup.com/articles/flat-design/), [skeuomorphism/neumorphism](https://www.nngroup.com/articles/skeuomorphism/), [glass](https://www.nngroup.com/articles/glassmorphism/), [brutalism](https://www.nngroup.com/articles/brutalism-antidesign/), [neobrutalism](https://www.nngroup.com/articles/neobrutalism/); [TypeUI clay implementation](https://www.typeui.sh/design-skills/claymorphism) |
| Digital eras | Retro computing; Y2K; Frutiger Aero; Vaporwave; Synthwave | [98.css](https://jdan.github.io/98.css/); CARI on [Y2K](https://cari.institute/aesthetics/y2k-aesthetic) and [Frutiger Aero](https://cari.institute/aesthetics/frutiger-aero); [Adobe on vaporwave and its relation to synthwave](https://www.adobe.com/uk/express/learn/blog/what-is-vaporwave) |
| Speculative aesthetics | Retrofuturism; Cyberpunk; Steampunk | [Webflow](https://webflow.com/blog/retrofuturism); [Adobe](https://www.adobe.com/products/firefly/features/ai-art-generator/cyberpunk-aesthetic.html); [Science Museum](https://blog.sciencemuseum.org.uk/steampunk-in-the-science-museum/) |

These groups aid browsing; they are not a universal academic taxonomy. Museum and first-person design sources support historical terminology. UX research supports contemporary interface distinctions. Curated catalogues support discoverable usage, and vendor examples establish practitioner labels. Neither vendor palettes nor a trend's popularity become our default design rules.

The earlier “Y2K/chrome,” “Cyberpunk HUD,” “pixel arcade,” and “terminal/CRT” labels mixed aesthetics with material, interface context, or display treatment. The revision separates those fields. Swiss Style remains an alias for International Typographic Style. Related traditions stay distinct; a material effect alone does not establish a cultural aesthetic.

### Game terminology

The [game registry](../../shared/styles/GAMES.md) defines Pixel art, Flat vector illustration, Hand-drawn illustration, Painterly rendering, Cel shading, Low-poly, Voxel art, Stylized 3D, Photorealistic 3D, Retro 3D, Retro anime, Papercraft, and Rubber-hose animation. The shared visual terms remain available as researched influences.

The earlier Shovel Knight, Paper Mario, and Cuphead sources remain useful but concern different aspects. [Adobe's vector guide](https://www.adobe.com/creativecloud/illustration/discover/vector-art.html) and [3D glossary](https://helpx.adobe.com/substance-3d-modeler/desktop/getting-started/glossary.html) help distinguish data/geometry descriptions from visible looks. [Unreal's overview](https://www.unrealengine.com/uses/animation) uses stylized and photorealistic as broad poles, not fully specified styles. [Crow Country's developer interview](https://blog.playstation.com/2024/05/02/crow-country-retro-original-playstation-era-gameplay-stylings-meet-modern-horror/) provides a concrete era-specific retro 3D reference.

A firsthand [Orbitals rendering breakdown](https://www.unrealengine.com/tech-blog/stepping-inside-a-retro-anime-inspired-game-a-look-into-the-rendering-of-orbitals) separates cel-shaded characters, painted backgrounds, and stepped motion within a retro-anime direction. This supports keeping rendering, art references, and motion separately describable. It does not prescribe a universal frame rate or game interface style.

### Kinetic and motion names

The maintained [motion registry](../../shared/styles/MOTION.md) carries definitions and naming boundaries. The usable vocabulary includes:

| Kind | Terms to use |
| --- | --- |
| Motion design and expressive type | Kinetic typography; elastic typography; text morphing; stomp typography (production shorthand); glitch animation |
| Animation traditions and production | Cel animation; rubber-hose animation; cutout animation; stop-motion animation |
| Entrances and sequencing | Reveal; stagger; typewriter; number ticker; line drawing |
| State changes | Morph; shared element transition; layout animation; origin-aware animation; crossfade |
| Scroll | Scroll reveal; scroll-driven animation; parallax |
| Timing and physical behavior | Spring; bounce; stepped animation; anticipation; follow-through; squash and stretch |
| Repetition and effects | Marquee; orbit; idle animation; liquid/gooey motion (descriptive, needs a verified clip) |

[Adobe's typography guide](https://www.adobe.com/uk/products/aftereffects/text-animation.html) names kinetic typography; its [animation guide](https://www.adobe.com/creativecloud/animation/discover/animation.html) and [rubber-hose guide](https://www.adobe.com/uk/creativecloud/animation/discover/rubber-hose-animation.html) support the production/tradition terms. [MotionTores' template](https://motionarray.com/after-effects-templates/stomp-typography-967063/) establishes “stomp typography” as a production label. Selected precise UI definitions in the maintained registry come from Emil Kowalski's installed MIT-licensed Animation Vocabulary, with attribution and license retained there.

[Jitter's text catalogue](https://jitter.video/templates/text/) supplies references for stretch, morph, reveal, and glitch treatments. Its [text-animation documentation](https://help.jitter.video/en/articles/6500074-animate-text) distinguishes the units being animated. Template titles are source-specific names, not a standard set of aesthetics. [Remotion's official templates](https://www.remotion.dev/templates) span captioning, code animation, and audio visualization; its [spring documentation](https://www.remotion.dev/docs/spring) describes a motion primitive. Record Remotion and Jitter as authoring tools and specify the actual aesthetic and behavior independently.

An illustrative direction could be **Swiss Style + kinetic typography + staggered masked reveals**, with its output and authoring tool specified in separate fields. That combination is our proposal. It does not imply that Remotion and Jitter exchange identical editable files or that a rendered clip supplies a live app interaction.

### DesEngs as a resource

Jason supplied [DesEngs](https://desengs.com/) and explicitly asked to include it in research and Resources. The [collection receipt](../collections/desengs/README.md) records 592 memberships across six indexes, representing 579 distinct normalized destination URLs. Its Markdown indexes preserve source names, dates, URLs, tags, and feature/image links. No image assets or full linked articles were copied. Newsletter issues are outside this capture.

DesEngs labels mix purposes, aesthetics, modes, and intent. Preserve those labels as source metadata before mapping them into our taxonomy. Minimum is a collection name, not proof that every member is Minimalism. A targeted text check found that [Liquid Gooey](https://gooey.jakubantalik.com/) now points to libraries.dev; the original URL remains in the inventory for provenance. Its moving effect was not evaluated.

### Evidence boundary and next use

This pass researched public source text, technical documentation, and catalogue metadata. It did not watch every motion template, inspect every DesEngs destination, conduct screenshot-level comparisons for all styles, or test authoring/export workflows. The lists are broader, source-backed proposals; personal taste and branch matches remain unset.

To activate a direction, inspect selected stills and moving references, annotate the exact visible qualities and timecodes, collect Jason's keep/change/avoid feedback, then define and verify the scoped visual and motion recipe. A still image alone cannot establish motion timing. Preserve the category menu and existing paths while that evidence is collected.
