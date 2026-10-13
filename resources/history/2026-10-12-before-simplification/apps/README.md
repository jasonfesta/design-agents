# apps

Design environment entry · Updated October 12, 2026

Native and browser-based applications, with the actual platform and runtime recorded for each branch. Start here, then follow **viewport → category → style**. [Setup](../instructions/SETUP.md) uses this document to recreate this type's environment and copy the applicable information beneath it.

```text
apps/
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
| [mobile](mobile/README.md) | Chrome 320 / 375 / 425 CSS px widths for browser apps; measure the actual native window for native apps. | Touch, keyboard behavior, safe areas, orientation, and system/browser chrome. |
| [tablet](tablet/README.md) | Chrome 768 CSS px width or a recorded device profile; native app window dimensions in its own units. | Touch/pointer capability, orientation, resizing, and split-screen behavior where applicable. |
| [desktop](desktop/README.md) | Chrome 1024 / 1440 / 2560 CSS px widths for browser apps; measured native window for native apps. | Resizable windows, pointer/keyboard navigation, focus, and the actual target platform. |
| [tv](tv/README.md) | Android TV documentation has a 960 × 540 reference canvas; record the actual layout units and target. | Remote/controller input, focus navigation, safe areas, and runtime support. |
| [watch](watch/README.md) | Wear OS round previews: 192 × 192 dp or 227 × 227 dp; choose the actual device. | Round/rectangular boundaries, input, small-screen layout, and target-specific support. |

These starting points are copied from the [viewport registry](../shared/viewports/README.md), [Chrome references](../shared/viewports/CHROME.md), and [native references](../shared/viewports/NATIVE.md), reviewed October 12, 2026. Chrome widths use CSS pixels and have adjustable heights. Its “4K” preset is 2560 CSS px wide. Native dp, Apple points, and game render pixels retain their own units; a browser preset does not verify native support.

Save the actual width × height, units, orientation, platform/runtime version, input, DPR/render scale, safe areas, source, and support evidence in the viewport record. Add another viewport only for an explicit target. Initial folders are research containers; compatibility still needs verification.

## Design categories

Jason selected **interface types** in place of the earlier Google Play menu. The table below is copied from [the approved category menu](../shared/workflow/taxonomy/APP-INTERFACES.md), v1.0, October 12, 2026. Jason approved the category names; boundary guidance remains a working interpretation. Styles still need work.

| Category ID | Category | What belongs here |
| --- | --- | --- |
| dashboards | Dashboards and analytics | Status summaries, metrics, charts, reports, and operational overviews. |
| feeds | Feeds and timelines | Sequential social, activity, news, or recommendation streams. |
| messaging | Messaging and inboxes | Conversations, threads, mailboxes, and communication workspaces. |
| search-discovery | Search and discovery | Queries, filtering, browsing results, and finding relevant items. |
| content-libraries | Libraries and collections | Saved content, media catalogues, files, bookmarks, and galleries. |
| detail-views | Detail and profile views | Inspecting one item, document, person, listing, or object. |
| editors | Editors and composers | Writing or modifying text, code, images, audio, or video. |
| canvas-builders | Canvases and builders | Spatial construction, diagrams, whiteboards, and visual workflow builders. |
| media-players | Media players and viewers | Watching, listening, reading, playback controls, and queues. |
| calendars | Calendars and schedules | Agenda, day/week/month views, events, and time organization. |
| booking-flows | Booking and reservation flows | Selecting availability, configuring a reservation, and confirming it. |
| task-boards | Task lists and boards | Lists, Kanban boards, assignment, and work progression. |
| data-management | Tables and record management | Comparing, sorting, editing, and administering structured records. |
| maps-navigation | Maps and navigation | Location exploration, routing, and spatial search or tracking. |
| checkout-payments | Checkout and payment flows | Cart review, purchase, transfer, payment, and confirmation. |
| onboarding | Onboarding and setup flows | Account entry, guided setup, permissions, and first-use configuration. |
| account-settings | Accounts and settings | Profiles, preferences, access, security, and subscription administration. |
| notifications | Notifications and activity centers | Alerts, updates, triage, and notification management. |
| progress-tracking | Progress and tracking | Goals, sessions, status progression, and history over time. |
| assistants | Assistants and chat workspaces | Prompts, generated output, tool activity, and conversational task control. |

The viewport indexes still link to the earlier store-category folders as legacy scaffolding. These approved category folders have not been created. Industry, audience, and product context remain fields within a design record. Choose one primary home for the actual task and cross-link related interfaces or site types by source identity.

## Styles

Copied from [the apps vocabulary](../shared/styles/APPS.md), **v0.4, October 12, 2026**. Preferred names, stable IDs, aliases, and evidence are owned by [the shared vocabulary](../shared/styles/README.md); type-specific applications remain proposals. Fit is assessed for each real branch.

| Group | Preferred terms |
| --- | --- |
| Composition | Minimalism, Maximalism, Editorial |
| Design traditions | International Typographic Style, Bauhaus, De Stijl, Constructivism, Art Nouveau, Art Deco, Mid-century Modern |
| Expressive graphics | Memphis, Pop Art, Psychedelic design, New Wave typography, Punk graphic design, Grunge |
| Web and interface | Flat design, Skeuomorphism, Neumorphism, Glassmorphism, Claymorphism, Web brutalism, Neobrutalism |
| Digital eras | Retro computing, Y2K, Frutiger Aero, Vaporwave, Synthwave |
| Speculative aesthetics | Retrofuturism, Cyberpunk, Steampunk |

The [type-specific list](../shared/styles/APPS.md) defines the proposed application of each term. [Motion vocabulary](../shared/styles/MOTION.md) supplies animation techniques; tools, rendering, mode, layout, and density remain fields inside the style record. Use [the style template](../shared/styles/STYLE-TEMPLATE.md) and [taste coverage](../shared/taste/COVERAGE.md).

## Environment contents

Setup carries all supplied information relevant to this type, placing it at the narrowest supported level. Shared type-wide information stays here and applies to descendants within its recorded scope. Short records go in the relevant README; longer source documents are copied alongside it and indexed there.

| Level | Information to copy and preserve |
| --- | --- |
| Type | App purpose, audience, platform conventions, navigation and interaction patterns, installed craft guidance, relevant resources, and required design/development tools. |
| Viewport | The profiles and target requirements above, verification evidence, and viewport-specific reference material. |
| Category | The actual app task and audience; category-specific product references, flows, annotations, and scoped feedback. |
| Style | The app style definition, component states, design tokens, supported preferences, Dial control values, independent saved variants, and applications. Keep verification, baseline status, and Dream enrollment explicit. |

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
