# Design taxonomy

Version 0.5 · October 12, 2026 · Website/app category menus approved; styles remain open

Organize the Markdown library as **design type → viewport → category → style**. The top-level names remain **apps**, **websites**, and **games**. Jigs is retired.

Jason's latest correction supersedes Google Play categories as the primary app/website menu. Websites use design uses such as landing pages and SaaS marketing. Apps use interface types: dashboards, feeds, editors, players, booking flows, and related tasks. Game genres remain unchanged. [The research note](../../resources/research/directions/design-taxonomy-research.md) records sources, proposed boundaries, and limits.

## The plan tree

```text
apps/
  <viewport>/
    <interface-category>/
      <style>/
websites/
  <viewport>/
    <website-category>/
      <style>/
games/
  <viewport>/
    <genre>/
      <style>/
```

The common layer is called **category**. Its vocabulary is specific to each type. Industry, audience, exact dimensions, finer page/screen detail, and platform remain fields; they do not introduce more folder layers.

## Markdown modules

| Layer or detail | Canonical file | What it owns |
| --- | --- | --- |
| 1 — apps | [apps/README.md](../../apps/README.md) | App environment and scoped information to carry |
| 1 — websites | [websites/README.md](../../websites/README.md) | Website environment and scoped information to carry |
| 1 — games | [games/README.md](../../games/README.md) | Game environment and scoped information to carry |
| 2 — viewport | [Viewport registry](../viewports/README.md) | Viewing surfaces, size profiles, units, and actual target-support evidence |
| 3 — apps | [APP-INTERFACES.md](taxonomy/APP-INTERFACES.md) | 20 interface/flow families approved by Jason |
| 3 — websites | [WEBSITE-CATEGORIES.md](taxonomy/WEBSITE-CATEGORIES.md) | 18 approved website uses, including landing pages and SaaS marketing |
| 3 — games | [GAME-GENRES.md](taxonomy/GAME-GENRES.md) | Existing 17 Google Play game genres |
| 4 — style | [Style registry](../styles/README.md) | Named visual directions and candidate influences; fit and research state |
| Page/screen detail | [PAGE-TYPES.md](taxonomy/PAGE-TYPES.md) | Finer details within the selected design category |
| Earlier app-store menu | [APP-CATEGORIES.md](taxonomy/APP-CATEGORIES.md) | Source list for optional product/store metadata and legacy paths |
| Earlier custom names | [LEGACY-CATEGORIES.md](taxonomy/LEGACY-CATEGORIES.md) | Original IDs and historical examples |

## Current folders and approved category menus

The existing 12 viewport branches and 324 category containers have not been moved. Of those, 256 app/website store-category containers are legacy scaffolding under the previous model. Their original labels, links, and evidence remain intact. The approved 20 app and 18 website categories exist as Markdown definitions and type-level tables, not newly created directories. Jason approved both category lists; their style lists still need work.

For new classification, use the approved category names and retain the separate unapproved status of styles. Do not treat the old directories as proof that the previous menu remains the default. A future migration should inspect each real record, choose its primary task, retain industry/store labels as context, and preserve old IDs with redirects or mappings. There is no safe one-to-one conversion from Finance to Dashboards, for example.

Use one primary home for a screen, flow, or site record and related-category links for overlapping cases. A SaaS marketing site can be related to its app dashboard. A whole product need not be duplicated under every interface it contains. The category menus explain their working boundary rules.

## Style and evidence

Use the separate [app candidates](../styles/APPS.md) and [website candidates](../styles/WEBSITES.md). The initial menus are superseded, and the replacements remain proposals. [Game labels](../styles/GAMES.md) remain art/rendering leads pending a dedicated visual review. A style folder holds a named direction with actual references, rules, component versions, and feedback. Surface, layout, era, design-system/platform, mode, density, and motion remain explicit fields.

No style is selected for an unresearched branch. Apply [TASTE.md](TASTE.md) and check [coverage](../taste/COVERAGE.md) before personal recommendations. Source vocabulary research does not establish Jason's taste or prove viewport compatibility. A proposed folder does not populate siblings or approve a Dream baseline.

Illustrative paths, with style deliberately unfilled:

- `websites/desktop/saas-marketing/<style>/`
- `websites/mobile/landing-pages/<style>/`
- `apps/desktop/dashboards/<style>/`
- `apps/mobile/booking-flows/<style>/`
- `games/mobile/puzzle/<style>/`

Earlier worked examples retain historical classifications until deliberately mapped. Read the current menus before reusing those paths. [SOURCES.md](SOURCES.md) retains original provenance; the new [research note](../../resources/research/directions/design-taxonomy-research.md) records this revision.

## Control “go wide”

Before generating candidates, write a matrix with one row per candidate. Each row needs: candidate ID; design type; viewport type/size; consumer category; product scope; family/treatment; task and content set; fixed requirements; axes allowed to change; reference IDs; intended output; and baseline/version if one governs it.

| Breadth | What changes | What stays fixed |
| --- | --- | --- |
| Across categories | Domain, user task, and category-specific evidence | A common deliverable format; assess within each domain rather than declaring a universal winner. |
| Across style families | Visual premise, composition, type and material within declared constraints | Category, product scope, task, content and viewports. |
| Within a treatment | Named controls, layout strategies and approved variations | Treatment identity, product task and locked rules. |
| Refine one direction | Requested rules or values | Remaining state and lineage. |

For requested exploration, default to three candidates within one category and product scope. First run TASTE.md and disclose missing coverage; an empty branch is not an instruction to generate personal taste recommendations. When general exploration is authorized, label unsupported candidates as provisional proposals. Honor a requested count. Do not generate an exhaustive combination of every category, style, density and platform.

For a two-scope by three-style experiment, create six explicit rows and compare the three styles within each scope. Reuse relevant content within each comparison group. Changing the task between candidates cannot demonstrate that one style is better.

Vary no more than two named control axes when tuning within a treatment unless Jason asks for broader change. Across families, several visual properties may change together as a coherent premise. Candidates must differ in hierarchy, composition, or behavior in a way the reviewer can name; recolors alone do not establish breadth.

## Baseline inheritance

A category baseline can define shared standards such as image honesty, readable product information, and accessible operation. A style-branch baseline defines the visual identity. A particular direction adds its resolved values. Each rule states its scope and whether it is required, a default that a child can override, or a permitted range.

Approved child rules may override declared defaults. They cannot silently waive a required parent rule. A conflict needs Jason's recorded exception or a revised baseline. Resolve the effective rules before Dream Mode starts, and pin the versions used. Do not apply one subject-specific font, density, or composition to every branch merely because it is the category's most recently used style.

Use a registry row per activated branch:

```md
| Branch ID | Design type and viewport | Product scope | Research state and definition | Parent baseline | Branch baseline | Approval record | Enrolled targets | Dream on/off |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| websites/desktop/ecommerce/editorial | websites / desktop | fashion resale; commerce page; archive-catalogue treatment | not researched; none | unset | unset | none | none | off |
```

This example is a proposed row, not enrollment. Stable branch IDs and exact baseline mappings let daytime exploration and Dream Mode operate on the same design vocabulary.
