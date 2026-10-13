# Atlas

```text
jason / atlas
────────────────────────────────────────────────────────
mode     nomenclature
input    design type / device / size / category / subcategory / style
output   definitions + selected classification
```

Maintain the ongoing nomenclature library for **apps, websites, and games**. Atlas supplies the names and relationships used to describe a design direction. Taste receives the references and consults this library as Jason defines what the direction is.

## Full Atlas

The complete browsing page for **apps, websites, and games**: every current category, interface subcategory, and style family appears below. Definitions and source evidence stay in the linked resource files.

[Apps](#apps) · [Websites](#websites) · [Games](#games) · [Agent instructions](#agent-instructions)

```text
design type
└── device type
    └── viewport size
        └── category
            └── subcategory
                └── style
```

**Read down one branch.** Choose a device, an exact size, one category, one interface subcategory, and a primary style. In each diagram, the IDs beside the vertical guide are the choices at that layer; the next indentation continues beneath your selected ID. Style-family headings group the vocabulary within layer 6. They do not add folder levels.

The family menu remains available under each category; the actual task determines the match. Style groups can share an ID: `minimal` is both a primary design language and a composition influence, for example. Repeated IDs keep the same definition. All names are shown without expanding every possible combination into duplicate branches.

[Device definitions](../resources/devices/README.md) and [Chrome viewport sizes and device names](../resources/viewports/CHROME.md) supply the first two choices. Sizes remain numeric. Create folders only for actual directions, with one README per created layer; product code uses the project's recorded destination.

Website/game interface families are drafts. Extended style influences and game art terms remain research vocabulary; a selection needs references and a scoped recipe before it establishes personal taste.

## Apps

[Product category definitions](../resources/apps/categories.md) · [Interface definitions](../resources/apps/subcategories.md) · [App style interpretations](../resources/apps/styles.md) · [Shared style definitions](../resources/styles/README.md)

The app category baseline is Google Play. Preserve another store's exact label and source as metadata; a store's secondary product category is separate from our interface-subcategory layer.

<!-- atlas:apps:start -->
```text
apps
└── device type · mobile / tablet / desktop / tv
    └── viewport size · width × height
        └── category · choose one of 32
            │  art-design
            │  auto-vehicles
            │  beauty
            │  books-reference
            │  business
            │  comics
            │  communication
            │  dating
            │  education
            │  entertainment
            │  events
            │  finance
            │  food-drink
            │  health-fitness
            │  house-home
            │  libraries-demo
            │  lifestyle
            │  maps-navigation
            │  medical
            │  music-audio
            │  news-magazines
            │  parenting
            │  personalization
            │  photography
            │  productivity
            │  shopping
            │  social
            │  sports
            │  tools
            │  travel-local
            │  video-players-editors
            │  weather
            │
            └── subcategory · 20 existing families; choose one
                │  dashboards
                │  feeds
                │  messaging
                │  search-discovery
                │  content-libraries
                │  detail-views
                │  editors
                │  canvas-builders
                │  media-players
                │  calendars
                │  booking-flows
                │  task-boards
                │  data-management
                │  maps-navigation
                │  checkout-payments
                │  onboarding
                │  account-settings
                │  notifications
                │  progress-tracking
                │  assistants
                │
                └── style · 46 unique IDs across the groups below
                    ├── Primary design languages · 20
                    │   ├── system
                    │   ├── minimal
                    │   ├── skeuomorphic
                    │   ├── colorful
                    │   ├── monochrome
                    │   ├── collage
                    │   ├── loud
                    │   ├── friendly
                    │   ├── silly
                    │   ├── retro
                    │   ├── grayscale
                    │   ├── flat
                    │   ├── typographic
                    │   ├── cyberpunk
                    │   ├── dense-ui
                    │   ├── pixel-art
                    │   ├── warm
                    │   ├── brutalist
                    │   ├── geometric
                    │   └── technical
                    └── Extended influences · branch fit unassessed
                        ├── Composition
                        │   ├── minimal
                        │   ├── maximal
                        │   └── editorial
                        ├── Design traditions
                        │   ├── swiss-typographic
                        │   ├── bauhaus
                        │   ├── de-stijl
                        │   ├── constructivism
                        │   ├── art-nouveau
                        │   ├── art-deco
                        │   └── mid-century-modern
                        ├── Expressive graphics
                        │   ├── memphis
                        │   ├── pop-art
                        │   ├── psychedelic
                        │   ├── new-wave
                        │   ├── punk
                        │   └── grunge
                        ├── Web and interface
                        │   ├── flat
                        │   ├── skeuomorphic
                        │   ├── neumorphic
                        │   ├── glassmorphic
                        │   ├── claymorphic
                        │   ├── brutalist
                        │   └── neobrutalist
                        ├── Digital eras
                        │   ├── retro-computing
                        │   ├── y2k
                        │   ├── frutiger-aero
                        │   ├── vaporwave
                        │   └── synthwave
                        └── Speculative aesthetics
                            ├── retrofuturism
                            ├── cyberpunk
                            └── steampunk
```
<!-- atlas:apps:end -->

## Websites

[Website purpose definitions](../resources/websites/categories.md) · [Page/flow definitions](../resources/websites/subcategories.md) · [Website style interpretations](../resources/websites/styles.md) · [Shared style definitions](../resources/styles/README.md)

Categories describe the kind of website. Subcategories describe its page or flow; their names remain draft. Apps and websites share the primary design-language menu and extended visual influences, with their own implementation rules.

<!-- atlas:websites:start -->
```text
websites
└── device type · mobile / tablet / desktop / tv
    └── viewport size · width × height
        └── category · choose one of 18
            │  landing-pages
            │  saas-marketing
            │  app-launches
            │  ecommerce
            │  marketplaces
            │  portfolios
            │  agency-studio
            │  business-services
            │  editorial-blogs
            │  directories
            │  documentation
            │  community-membership
            │  courses-education
            │  events-conferences
            │  booking-reservations
            │  careers-job-boards
            │  nonprofit-fundraising
            │  interactive-stories
            │
            └── subcategory · 20 draft families; choose one
                │  homepages
                │  landing-pages
                │  feature-pages
                │  pricing
                │  listing-search
                │  detail-pages
                │  articles
                │  case-studies
                │  about-team
                │  contact-inquiry
                │  documentation
                │  checkout-payments
                │  booking-flows
                │  signup-onboarding
                │  account-settings
                │  community-feeds
                │  schedules
                │  media-galleries
                │  interactive-narratives
                │  updates-changelog
                │
                └── style · 46 unique IDs across the groups below
                    ├── Primary design languages · 20
                    │   ├── system
                    │   ├── minimal
                    │   ├── skeuomorphic
                    │   ├── colorful
                    │   ├── monochrome
                    │   ├── collage
                    │   ├── loud
                    │   ├── friendly
                    │   ├── silly
                    │   ├── retro
                    │   ├── grayscale
                    │   ├── flat
                    │   ├── typographic
                    │   ├── cyberpunk
                    │   ├── dense-ui
                    │   ├── pixel-art
                    │   ├── warm
                    │   ├── brutalist
                    │   ├── geometric
                    │   └── technical
                    └── Extended influences · branch fit unassessed
                        ├── Composition
                        │   ├── minimal
                        │   ├── maximal
                        │   └── editorial
                        ├── Design traditions
                        │   ├── swiss-typographic
                        │   ├── bauhaus
                        │   ├── de-stijl
                        │   ├── constructivism
                        │   ├── art-nouveau
                        │   ├── art-deco
                        │   └── mid-century-modern
                        ├── Expressive graphics
                        │   ├── memphis
                        │   ├── pop-art
                        │   ├── psychedelic
                        │   ├── new-wave
                        │   ├── punk
                        │   └── grunge
                        ├── Web and interface
                        │   ├── flat
                        │   ├── skeuomorphic
                        │   ├── neumorphic
                        │   ├── glassmorphic
                        │   ├── claymorphic
                        │   ├── brutalist
                        │   └── neobrutalist
                        ├── Digital eras
                        │   ├── retro-computing
                        │   ├── y2k
                        │   ├── frutiger-aero
                        │   ├── vaporwave
                        │   └── synthwave
                        └── Speculative aesthetics
                            ├── retrofuturism
                            ├── cyberpunk
                            └── steampunk
```
<!-- atlas:websites:end -->

## Games

[Genre definitions](../resources/games/categories.md) · [Screen/flow definitions](../resources/games/subcategories.md) · [Game style definitions](../resources/games/styles.md) · [Shared influences](../resources/styles/README.md#extended-visual-terms)

Genres use the Google Play baseline. Screen/flow names remain draft. The game art/rendering menu and shared aesthetic influences are shown separately within style; references determine how world, characters, and HUD use them. Camera, projection, engine, and motion remain recipe fields.

<!-- atlas:games:start -->
```text
games
└── device type · mobile / tablet / desktop / tv
    └── viewport size · width × height
        └── category · choose one of 17
            │  action
            │  adventure
            │  arcade
            │  board
            │  card
            │  casino
            │  casual
            │  educational
            │  music
            │  puzzle
            │  racing
            │  role-playing
            │  simulation
            │  sports
            │  strategy
            │  trivia
            │  word
            │
            └── subcategory · 15 draft families; choose one
                │  gameplay
                │  main-menus
                │  level-selection
                │  lobbies-matchmaking
                │  character-loadouts
                │  inventory
                │  maps-quests
                │  progression
                │  shops
                │  results-rewards
                │  leaderboards
                │  tutorials
                │  pause-settings
                │  dialogue-narrative
                │  social-guilds
                │
                └── style · 44 unique IDs across the groups below
                    ├── Game art and rendering · 13 research terms
                    │   ├── pixel-art
                    │   ├── vector-flat
                    │   ├── hand-drawn
                    │   ├── painterly
                    │   ├── cel-shaded
                    │   ├── low-poly
                    │   ├── voxel
                    │   ├── stylized-3d
                    │   ├── realistic-3d
                    │   ├── retro-3d
                    │   ├── retro-anime
                    │   ├── papercraft
                    │   └── rubber-hose
                    └── Shared influences · reference-led use
                        ├── Composition
                        │   ├── minimal
                        │   ├── maximal
                        │   └── editorial
                        ├── Design traditions
                        │   ├── swiss-typographic
                        │   ├── bauhaus
                        │   ├── de-stijl
                        │   ├── constructivism
                        │   ├── art-nouveau
                        │   ├── art-deco
                        │   └── mid-century-modern
                        ├── Expressive graphics
                        │   ├── memphis
                        │   ├── pop-art
                        │   ├── psychedelic
                        │   ├── new-wave
                        │   ├── punk
                        │   └── grunge
                        ├── Web and interface
                        │   ├── flat
                        │   ├── skeuomorphic
                        │   ├── neumorphic
                        │   ├── glassmorphic
                        │   ├── claymorphic
                        │   ├── brutalist
                        │   └── neobrutalist
                        ├── Digital eras
                        │   ├── retro-computing
                        │   ├── y2k
                        │   ├── frutiger-aero
                        │   ├── vaporwave
                        │   └── synthwave
                        └── Speculative aesthetics
                            ├── retrofuturism
                            ├── cyberpunk
                            └── steampunk
```
<!-- atlas:games:end -->

## Keep this page current

Edit the relevant category, subcategory, or style table in Resources, then run `python3 tools/workspace.py catalogue`. It rebuilds these complete menus and the matching type README diagrams from the same definitions. `python3 tools/workspace.py check` catches stale diagrams and missing file links. Keep edits outside the generated `atlas` blocks when changing this page's instructions.

[The schema and path rules](../resources/structure.md) explain project folders, inheritance, and exploration. [Motion](../resources/motion/README.md), [component/source facets](../resources/sources/spotted-in-prod/taxonomy.md), and [tooling](../resources/tools/README.md) remain related vocabulary within records.

## Agent instructions

### Inputs

A term, a proposed classification from Taste, Jason's correction, or a request to add or refine an entry. Incoming references belong to Taste; Atlas provides the vocabulary for describing them.

Read [the shared instructions](../AGENTS.md), [the workflow](README.md#the-design-workflow), and the relevant records in the nomenclature map. Follow [project locations](README.md#project-locations) when saving a direction's selections.

### Work

1. **Look up the existing vocabulary.** Use **design type → device type → viewport size → category → subcategory → style**. The types are apps, websites, and games. Device type is mobile, tablet, desktop, or tv. Viewport size is width × height with explicit units. Category describes the app product, website purpose, or game genre. Subcategory describes the interface family within it; style describes the visual treatment. Keep preset names, DPR, input, motion, rendering, patterns, and tools as related fields; 3D is a rendering/interaction dimension.
2. **Support the Taste dialogue.** As Taste receives material, suggest fitting entries with their definitions and a short reason. Distinguish the reference's observed traits from the intended project's classification. Offer meaningful alternatives where the fit is uncertain; preserve Jason's own labels alongside canonical names.
3. **Resolve the selection with Jason.** A defined direction needs a selected type, device type, viewport size, category, subcategory, and style. Reuse choices already supplied or established in the dialogue. Suggested matches remain candidates until Jason's words resolve them; do not turn automatic suggestions into automatic final classification.
4. **Prompt when the library falls short.** If no entry fits, or existing definitions do not distinguish the intended direction, explain the gap and propose a name and definition. Work with Jason to refine it, then add the agreed entry to the canonical record and use it in the direction. Preserve the unresolved question while waiting; reference inspection and independent work can continue.
5. **Keep the library coherent as it grows.** Maintain preferred names, stable IDs where used, aliases, definitions, applicable types, relationships, and sources. Check for an existing synonym before adding an entry. Update the existing record; retain prior names and decisions so older mappings remain understandable. Save project selections with the direction, and rebuild the master catalogue when shared records change.

Atlas owns terminology and classification. Inspiration research and concept discovery belong to the requested design session; they are not an Atlas stage or prerequisite for Taste. A vocabulary match describes a direction without establishing Jason's personal taste.

### Nomenclature map

| Dimension | Canonical records |
| --- | --- |
| Design types and categories | [Apps: product categories](../resources/apps/categories.md), [websites: uses](../resources/websites/categories.md), [games: genres](../resources/games/categories.md) |
| Interface subcategories | [App screens and flows](../resources/apps/subcategories.md), [website pages and flows](../resources/websites/subcategories.md), [game screens and flows](../resources/games/subcategories.md) |
| Device types and viewport sizes | [Viewport profiles](../resources/viewports/README.md) |
| Visual styles and aesthetics | [Style index](../resources/styles/README.md), [apps](../resources/apps/styles.md), [websites](../resources/websites/styles.md), [games](../resources/games/styles.md) |
| Motion and kinetic terminology | [Motion resources](../resources/motion/README.md) and [techniques](../resources/motion/techniques.md) |
| Visuals, gestures, flows, and patterns | [Spotted in Prod taxonomy](../resources/sources/spotted-in-prod/taxonomy.md) and [Dial component mappings](../resources/guides/workflows/components.md#shared-component-vocabulary-for-dial) |
| Source context and tools | [Master resource list](../resources/README.md), [template research](../resources/guides/template-market-research.md), [tooling](../resources/tools/README.md), [MCPs](../resources/mcps/README.md) |

This is Atlas's vocabulary, kept in the shared resource records so every role uses the same names. Spotted in Prod supplies the primary app/web style menu; game aesthetics retain their own coverage. Preserve source curation and platform context. Provider categories and featured positions do not prove sales rank or Jason's preferences.

### Result

Return the relevant entries, suggested matches and reasons, Jason's selected **type → device type → viewport size → category → subcategory → style**, and any unresolved question. Save the selected names, canonical links/IDs, and decision in the existing direction record. When the dialogue adds or changes vocabulary, update Atlas's canonical resource record too. Use [the shared result format](README.md#save-once-and-hand-off-clearly).
