# websites

Design environment entry · Updated October 12, 2026

Browser-based sites and experiences, with page purpose and responsive behavior recorded inside each branch. Start here, then follow **viewport → category → style**. [Setup](../instructions/SETUP.md) uses this document to recreate this type's environment and copy the applicable information beneath it.

```text
websites/
  README.md                  type environment and common information
  <viewport>/
    README.md                viewport profiles and requirements
    <category>/
      README.md              category research and feedback
      <style>/
        README.md            style rules, evidence, and working state
        …                    relevant Markdown, assets, and components
```

Type and viewport entry files exist, with legacy store-category scaffolding beneath them. Jason approved the replacement design-category menus below; their new folders are not yet created. Style folders are created for actual branch work. The copy/restoration procedure is specified; automated environment setup is not implemented yet.

## Viewports

| Viewport entry | Starting profiles | Information to carry at this level |
| --- | --- | --- |
| [mobile](mobile/README.md) | Chrome responsive widths: 320 / 375 / 425 CSS px. Save a height or full device profile for each comparison. | Touch, keyboard behavior, browser chrome, orientation, and safe-area behavior. |
| [tablet](tablet/README.md) | Chrome responsive width: 768 CSS px, or a recorded tablet device profile. | Touch/pointer capability, portrait/landscape layouts, and content reflow. |
| [desktop](desktop/README.md) | Chrome responsive widths: 1024 / 1440 / 2560 CSS px. Choose and record the window height. | Pointer/keyboard access, focus, resizing, intermediate widths, and wide-screen behavior. |

These starting points are copied from the [viewport registry](../shared/viewports/README.md), [Chrome references](../shared/viewports/CHROME.md), and [native references](../shared/viewports/NATIVE.md), reviewed October 12, 2026. Chrome widths use CSS pixels and have adjustable heights. Its “4K” preset is 2560 CSS px wide. Native dp, Apple points, and game render pixels retain their own units; a browser preset does not verify native support.

Save the actual width × height, units, orientation, platform/runtime version, input, DPR/render scale, safe areas, source, and support evidence in the viewport record. Add another viewport only for an explicit target. Initial folders are research containers; compatibility still needs verification.

## Design categories

Jason selected **website design uses** in place of the earlier Google Play menu. The table below is copied from [the approved category menu](../shared/workflow/taxonomy/WEBSITE-CATEGORIES.md), v1.0, October 12, 2026. Jason approved the category names; boundary guidance remains a working interpretation. Styles still need work.

| Category ID | Category | What belongs here | Research basis |
| --- | --- | --- | --- |
| landing-pages | Landing pages | A focused campaign, lead capture, waitlist, or single-offer page. | Framer categories; Landbook |
| saas-marketing | SaaS marketing sites | A software product's public site: product story, features, plans, integrations, and demos. | Framer SaaS |
| app-launches | App launch sites | Public promotion of a mobile or desktop app, with demos and download paths. | Landbook |
| ecommerce | Ecommerce storefronts | Store navigation, catalogues, product pages, cart, and purchasing. | Framer; Webflow |
| marketplaces | Marketplaces | Public listings from multiple providers, comparison, and discovery. | Local split from commerce and directories |
| portfolios | Portfolios and case studies | Personal or team work, projects, process, and evidence of results. | Framer; Webflow |
| agency-studio | Agency and studio sites | Services, client work, team, process, and project enquiries. | Webflow; Landbook |
| business-services | Business and service sites | Company information, service descriptions, locations, and contact routes. | Framer; Webflow |
| editorial-blogs | Editorial sites and blogs | Articles, magazines, journals, newsletters, and topic archives. | Framer; Webflow |
| directories | Directories and resource libraries | Searchable indexes, curated collections, and resource detail pages. | Landbook; local grouping |
| documentation | Documentation and help centers | Guides, API/reference material, support articles, and product help. | Framer; Webflow |
| community-membership | Community and membership sites | Public community information, member content, discussion, and membership entry. | Framer; Landbook |
| courses-education | Course and education sites | Course catalogues, program information, instructors, and enrollment. | Framer; Webflow |
| events-conferences | Event and conference sites | Event information, agendas, speakers, venues, and registration. | Framer; Webflow |
| booking-reservations | Booking and reservation sites | Availability, service/property selection, reservation, and confirmation. | Local use-case synthesis |
| careers-job-boards | Careers and job boards | Employer information, job listings, roles, and application paths. | Webflow |
| nonprofit-fundraising | Nonprofit and fundraising sites | Mission, impact, campaigns, participation, and giving. | Framer; Webflow |
| interactive-stories | Interactive stories and experiences | A narrative or branded experience whose interaction is the main deliverable. | Local use-case synthesis |

The viewport indexes still link to the earlier store-category folders as legacy scaffolding. These approved category folders have not been created. Industry, audience, and product context remain fields within a design record. Choose one primary home for the actual task and cross-link related interfaces or site types by source identity.

## Styles

Copied from [the websites vocabulary](../shared/styles/WEBSITES.md), **v0.4, October 12, 2026**. Preferred names, stable IDs, aliases, and evidence are owned by [the shared vocabulary](../shared/styles/README.md); type-specific applications remain proposals. Fit is assessed for each real branch.

| Group | Preferred terms |
| --- | --- |
| Composition | Minimalism, Maximalism, Editorial |
| Design traditions | International Typographic Style, Bauhaus, De Stijl, Constructivism, Art Nouveau, Art Deco, Mid-century Modern |
| Expressive graphics | Memphis, Pop Art, Psychedelic design, New Wave typography, Punk graphic design, Grunge |
| Web and interface | Flat design, Skeuomorphism, Neumorphism, Glassmorphism, Claymorphism, Web brutalism, Neobrutalism |
| Digital eras | Retro computing, Y2K, Frutiger Aero, Vaporwave, Synthwave |
| Speculative aesthetics | Retrofuturism, Cyberpunk, Steampunk |

The [type-specific list](../shared/styles/WEBSITES.md) defines the proposed application of each term. [Motion vocabulary](../shared/styles/MOTION.md) supplies animation techniques; tools, rendering, mode, layout, and density remain fields inside the style record. Use [the style template](../shared/styles/STYLE-TEMPLATE.md) and [taste coverage](../shared/taste/COVERAGE.md).

## Environment contents

Setup carries all supplied information relevant to this type, placing it at the narrowest supported level. Shared type-wide information stays here and applies to descendants within its recorded scope. Short records go in the relevant README; longer source documents are copied alongside it and indexed there.

| Level | Information to copy and preserve |
| --- | --- |
| Type | Site purpose and content, browser requirements, responsive conventions, applicable web craft guidance, relevant resources, and design/development tools. |
| Viewport | The profiles and target requirements above, verification evidence, and viewport-specific reference material. |
| Category | The actual site task, audience, page purpose, and subject scope; category-specific references, page flows, annotations, and scoped feedback. |
| Style | The website style definition, typography/composition and interaction rules, supported taste, tokens, Dial component variants, saved values, and applications. Keep verification, baseline status, and Dream enrollment explicit. |

For each copied source, retain its identity, origin, revision/date, applicable scope, evidence status, and attribution. Include available supporting Markdown and required assets. Report missing originals, uncertain classification, and unavailable tools. Keep [Resources](../resources/README.md) as the portable master collection and follow [Setup's copy and refresh rules](../instructions/SETUP.md#copy-and-refresh-rules); locally edited copies are preserved on reruns.

## Agent and tool context

- [Atlas](../instructions/ATLAS.md) maps this type's vocabulary and routes records to the correct viewport/category/style.
- [Taste](../instructions/TASTE.md) carries inspected research, annotations, and scoped feedback into those records.
- [Dial](../instructions/DIAL.md) restores the applicable component code, controls, independent variants, and application records.
- [Dream](../instructions/DREAM.md) reads the selected branch's evidence and existing run state; setup preserves enrollment without creating a schedule.

Setup records each required capability, its version, relevant branches, installation/connection needs, and verified readiness. Reuse the destination's existing stack where suitable. A type or category label does not select a framework, engine, or new tool installation. Installed skill files, runnable tools, and credentials follow their own storage and access requirements.

## Current readiness

- Type/viewport records and legacy scaffolding: present; replacement categories: approved; style vocabulary: unresolved.
- Actual product/platform support: unverified until a target is recorded.
- Category research and personal style matches: not researched / unset.
- Branch-specific tool configuration and automated copying: still to implement and verify.

A complete setup receipt must account for the supplied source information, copied destinations, preserved local changes, missing inputs, and the next branch to open. It must distinguish a restored document collection from a working runtime or a researched design style.
