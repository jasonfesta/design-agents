# apps

```text
ATLAS / APPS
────────────────────────────────────────────
layer 01    design type       apps
layer 02    device type       mobile / tablet / desktop / tv
layer 03    viewport size     width × height
layer 04    category          store product category
layer 05    subcategory       interface family
layer 06    style             visual treatment
```

This is a reusable definition resource. Product code and working directions live in the [project destination](../../agents/README.md#project-locations) chosen for the build.

## Full branch skeleton

[Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md) · [Full Atlas: all three types](../../agents/ATLAS.md#full-atlas)

Read down one branch: choose one ID at each layer. The names beside each vertical guide are that layer's complete menu; the next indentation continues under the chosen ID. Style-family headings are browsing groups within layer 6. Create only the actual direction's folders and give each created layer a README.

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

## Category and subcategory menus

The complete menus above come from [Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md). Website/game interface families remain draft; extended influences and game art terms require reference-led matching. Personal branch taste is still defined through Taste.

Edit the canonical definition tables, then run `python3 tools/workspace.py catalogue` to refresh this diagram and [Atlas](../../agents/ATLAS.md). The checker detects stale menus.

## Example direction

Illustrative only; no project or personal taste selection is implied.

```text
apps
└── mobile
    └── 390x844
        └── finance
            └── dashboards
                └── minimal
```

```text
direction.type         apps
direction.device       mobile
direction.viewport     390x844
direction.category     finance
direction.subcategory  dashboards
direction.style        minimal
reference.status       illustrative
```

Use [device definitions](../devices/README.md), [Chrome sizes and names](../viewports/CHROME.md), and [the style template](../styles/template.md). Record exact screen labels, states, motion, sources, settings, and checks with the direction.

> By the way — category identifies the product. Subcategory identifies the interface. Style describes how it looks.
