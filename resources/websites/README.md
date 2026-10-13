# websites

```text
ATLAS / WEBSITES
────────────────────────────────────────────
layer 01    design type       websites
layer 02    device type       mobile / tablet / desktop / tv
layer 03    viewport size     width × height
layer 04    category          website purpose
layer 05    subcategory       interface family
layer 06    style             visual treatment
```

This is a reusable definition resource. Product code and working directions live in the [project destination](../../agents/README.md#project-locations) chosen for the build.

## Full branch skeleton

[Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md) · [Full Atlas: all three types](../../agents/ATLAS.md#full-atlas)

Read down one branch: choose one ID at each layer. The names beside each vertical guide are that layer's complete menu; the next indentation continues under the chosen ID. Style-family headings are browsing groups within layer 6. Create only the actual direction's folders and give each created layer a README.

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

## Category and subcategory menus

The complete menus above come from [Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md). Website/game interface families remain draft; extended influences and game art terms require reference-led matching. Personal branch taste is still defined through Taste.

Edit the canonical definition tables, then run `python3 tools/workspace.py catalogue` to refresh this diagram and [Atlas](../../agents/ATLAS.md). The checker detects stale menus.

## Example direction

Illustrative only; no project or personal taste selection is implied.

```text
websites
└── desktop
    └── 1440x900
        └── saas-marketing
            └── pricing
                └── typographic
```

```text
direction.type         websites
direction.device       desktop
direction.viewport     1440x900
direction.category     saas-marketing
direction.subcategory  pricing
direction.style        typographic
reference.status       illustrative
```

Use [device definitions](../devices/README.md), [Chrome sizes and names](../viewports/CHROME.md), and [the style template](../styles/template.md). Record exact screen labels, states, motion, sources, settings, and checks with the direction.

> By the way — category identifies the product. Subcategory identifies the interface. Style describes how it looks.
