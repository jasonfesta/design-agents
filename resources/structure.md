# Design structure

```text
JASON / ATLAS SCHEMA
────────────────────────────────────────────
version     1.1 · October 13, 2026
change      category → subcategory → style
scope       apps / games / websites
```

## The six layers

```text
design type
└── device type
    └── viewport size
        └── category
            └── subcategory
                └── style
```

**Category describes the product. Subcategory describes the interface within it. Style describes the visual treatment.** Jason requested this split across all three design types. It extends the earlier five-layer schema without merging device types with sizes.

| Layer | Meaning | Canonical resource |
| --- | --- | --- |
| 01 · design type | App, game, or website | [Apps](apps/README.md) · [Games](games/README.md) · [Websites](websites/README.md) |
| 02 · device type | Mobile, tablet, desktop, or TV | [Devices](devices/README.md) |
| 03 · viewport size | Exact width × height, with units | [Viewports](viewports/README.md) · [Chrome presets](viewports/CHROME.md) |
| 04 · category | App product category, game genre, or website purpose | [Apps](apps/categories.md) · [Games](games/categories.md) · [Websites](websites/categories.md) |
| 05 · subcategory | Interface family: screen, page, workspace, or flow | [Apps](apps/subcategories.md) · [Games](games/subcategories.md) · [Websites](websites/subcategories.md) |
| 06 · style | Visual language and explicit recipe | [Vocabulary](styles/README.md) · [Template](styles/template.md) |

## Category → subcategory menu

**[The full Atlas lives in agents/ATLAS.md](../agents/ATLAS.md#full-atlas).** Its [Apps](../agents/ATLAS.md#apps), [Websites](../agents/ATLAS.md#websites), and [Games](../agents/ATLAS.md#games) diagrams list every category, interface subcategory, and style family. Each type's README displays the same complete menu. The canonical tables own the definitions; `python3 tools/workspace.py catalogue` refreshes the diagrams from those tables.

After category selection, suggest relevant subcategories and keep the full menu available. Reuse one shared family definition across applicable categories. The existing app interface names are retained; website/game family names remain drafts. No menu entry establishes personal taste.

Google Play is the default app vocabulary. Keep a store's exact category label and source in metadata; Apple's taxonomy has different names and is not silently merged. Store secondary categories are not our interface subcategories. Website categories remain site purposes.

## Full skeleton

See [Atlas's complete named menus](../agents/ATLAS.md#full-atlas) for every choice. The folder path for a selected direction follows this template:

```text
<project>/
└── <apps | websites | games>/
    └── <mobile | tablet | desktop | tv>/
        └── <width>x<height>/
            └── <selected category>/
                └── <selected interface subcategory>/
                    └── <selected style>/
                        └── README.md
```

Each created layer has a README. Create only the routes being worked on; link shared menus from Resources. Product code follows the project's stack and can serve multiple sizes and screens. Chrome preset names, DPR, safe areas, input, orientation, runtime, and exact screen/state details belong in metadata. Style-family headings in Atlas are browsing groups, not extra folder levels.

## Read a path

```text
apps / mobile / 390x844 / finance / dashboards / minimal
│       │         │         │          │           └─ style
│       │         │         │          └─ interface subcategory
│       │         │         └─ product category
│       │         └─ width × height; units in MD
│       └─ device type
└─ design type
```

Components, source tag groups, motion techniques, and states remain record fields. A whole product links its screen-family directions from one project README. Shared component code and style values stay canonical; reference them across subcategories instead of copying an app or creating competing kits.

## Preserve earlier work

Earlier paths and decisions remain in [History](history/README.md). The app interface menu is preserved as the subcategory menu. Assign a product category from actual evidence before migrating an old app path; do not infer it from a screenshot’s visual style. No existing project, saved layout, or annotation was moved by this schema update.

Use compact terminal-style specs and prominent trees in these Markdown files. This documentation treatment does not select the typography or aesthetic of generated products.

## Control “go wide”

Before generating candidates, write a matrix with one row per candidate. Each row needs: candidate ID; design type; device type and viewport size; product category; interface subcategory; product scope; family/treatment; task and content set; fixed requirements; axes allowed to change; reference IDs; intended output; and baseline/version if one governs it.

| Breadth | What changes | What stays fixed |
| --- | --- | --- |
| Across categories | Domain, user task, and category-specific evidence | A common deliverable format; assess within each domain rather than declaring a universal winner. |
| Across style families | Visual premise, composition, type and material within declared constraints | Category, subcategory, product scope, task, content and viewports. |
| Within a treatment | Named controls, layout strategies and approved variations | Treatment identity, product task and locked rules. |
| Refine one direction | Requested rules or values | Remaining state and lineage. |

For requested exploration, default to three candidates within one category, subcategory, and product scope. First run TASTE.md and disclose missing coverage; an empty branch is not an instruction to generate personal taste recommendations. When general exploration is authorized, label unsupported candidates as provisional proposals. Honor a requested count. Do not generate an exhaustive combination of every category, style, density and platform.

For a two-scope by three-style experiment, create six explicit rows and compare the three styles within each scope. Reuse relevant content within each comparison group. Changing the task between candidates cannot demonstrate that one style is better.

Vary no more than two named control axes when tuning within a treatment unless Jason asks for broader change. Across families, several visual properties may change together as a coherent premise. Candidates must differ in hierarchy, composition, or behavior in a way the reviewer can name; recolors alone do not establish breadth.

## Baseline inheritance

A category baseline can define shared standards such as image honesty, readable product information, and accessible operation. A style-branch baseline defines the visual identity. A particular direction adds its resolved values. Each rule states its scope and whether it is required, a default that a child can override, or a permitted range.

Approved child rules may override declared defaults. They cannot silently waive a required parent rule. A conflict needs Jason's recorded exception or a revised baseline. Resolve the effective rules before Dream Mode starts, and pin the versions used. Do not apply one subject-specific font, density, or composition to every branch merely because it is the category's most recently used style.

Use a registry row per activated branch:

```md
| Branch ID | Design type and viewport | Product scope | Research state and definition | Parent baseline | Branch baseline | Approval record | Enrolled targets | Dream on/off |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| websites/desktop/1440x900/ecommerce/detail-pages/editorial | websites / desktop / 1440x900 CSS px | fashion resale; commerce page; archive-catalogue treatment | not researched; none | unset | unset | none | none | off |
```

This example is a proposed row, not enrollment. Stable branch IDs and exact baseline mappings let daytime exploration and Dream Mode operate on the same design vocabulary.
