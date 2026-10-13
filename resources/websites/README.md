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

```text
websites/
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

[Categories](categories.md): **18 existing site purposes**. [Subcategories](subcategories.md): **20 proposed page/flow families**. [Styles](styles.md) remain a separate visual choice.

```text
category
├── landing-pages
├── saas-marketing
├── app-launches
├── ecommerce
├── marketplaces
├── portfolios
├── agency-studio
├── business-services
├── editorial-blogs
├── directories
├── documentation
├── community-membership
├── courses-education
├── events-conferences
├── booking-reservations
├── careers-job-boards
├── nonprofit-fundraising
└── interactive-stories
```

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
