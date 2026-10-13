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

```text
apps/
├── mobile/
│   └── <width>x<height>/
│       └── <category>/
│           └── <subcategory>/
│               └── <style>/
│                   └── README.md
├── tablet/
│   └── <width>x<height>/
│       └── <category>/
│           └── <subcategory>/
│               └── <style>/
│                   └── README.md
├── desktop/
│   └── <width>x<height>/
│       └── <category>/
│           └── <subcategory>/
│               └── <style>/
│                   └── README.md
└── tv/
    └── <width>x<height>/
        └── <category>/
            └── <subcategory>/
                └── <style>/
                    └── README.md
```

Every created layer receives a README describing its settings and links. Create folders only for actual work; link shared definitions instead of duplicating their menus.

## Category and subcategory menus

[Categories](categories.md): **32 Google Play product categories**. [Subcategories](subcategories.md): **20 existing interface families**. [Styles](styles.md) remain a separate visual choice.

```text
category
├── art-design
├── auto-vehicles
├── beauty
├── books-reference
├── business
├── comics
├── communication
├── dating
├── education
├── entertainment
├── events
├── finance
├── food-drink
├── health-fitness
├── house-home
├── libraries-demo
├── lifestyle
├── maps-navigation
├── medical
├── music-audio
├── news-magazines
├── parenting
├── personalization
├── photography
├── productivity
├── shopping
├── social
├── sports
├── tools
├── travel-local
├── video-players-editors
└── weather
```

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
