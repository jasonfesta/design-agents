# games

```text
ATLAS / GAMES
────────────────────────────────────────────
layer 01    design type       games
layer 02    device type       mobile / tablet / desktop / tv
layer 03    viewport size     width × height
layer 04    category          game genre
layer 05    subcategory       interface family
layer 06    style             visual treatment
```

This is a reusable definition resource. Product code and working directions live in the [project destination](../../agents/README.md#project-locations) chosen for the build.

## Full branch skeleton

```text
games/
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

[Categories](categories.md): **17 Google Play genres**. [Subcategories](subcategories.md): **15 proposed screen families**. [Styles](styles.md) remain a separate visual choice.

```text
category
├── action
├── adventure
├── arcade
├── board
├── card
├── casino
├── casual
├── educational
├── music
├── puzzle
├── racing
├── role-playing
├── simulation
├── sports
├── strategy
├── trivia
└── word
```

## Example direction

Illustrative only; no project or personal taste selection is implied.

```text
games
└── tablet
    └── 768x1024
        └── puzzle
            └── level-selection
                └── pixel-art
```

```text
direction.type         games
direction.device       tablet
direction.viewport     768x1024
direction.category     puzzle
direction.subcategory  level-selection
direction.style        pixel-art
reference.status       illustrative
```

Use [device definitions](../devices/README.md), [Chrome sizes and names](../viewports/CHROME.md), and [the style template](../styles/template.md). Record exact screen labels, states, motion, sources, settings, and checks with the direction.

> By the way — category identifies the product. Subcategory identifies the interface. Style describes how it looks.
