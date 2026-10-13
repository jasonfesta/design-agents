# App interface subcategories

```text
layer      05 · subcategory
menu       20 interface families
parent     app product category
status     existing names retained; new layer requested October 13, 2026
```

Select the screen, workspace, or flow within an app’s [product category](categories.md). One interface family can apply to many product categories: Finance and Health and Fitness can both contain dashboards. A family belongs to the reusable menu once; actual references and directions select their own pair.

| Subcategory ID | Interface family | What belongs here |
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

## Record granularity and overlap

These 20 previously approved families are our consolidation of screens and flows; they are not Mobbin's exact taxonomy. A product can contain many of them. Store a reference once, assign a primary subcategory for the task, and link secondary interfaces or steps by source ID. Keep the sequence together when the reference is a flow.

Use `calendars` for organizing time and `booking-flows` for making a reservation. Use `editors` for modifying content and `canvas-builders` when spatial construction is central. Use `dashboards` for an overview and `data-management` for working directly with records. Fine-grained components (buttons, cards, tabs) and states (empty, error, loading) remain metadata or component content.

## Sources and status

Mobbin's public [web screen catalogue](https://mobbin.com/explore/web/screens) and [flow catalogue](https://mobbin.com/explore/web/flows) were inspected October 12, 2026. Its [web overview](https://mobbin.com/explore/web) exposes dashboard, chat, social feed, checkout, note, settings, and other screen/flow labels separately from UI elements and product categories. This supports organizing references around work people perform. Jason accepted these interface names previously and placed them under product categories on October 13, 2026. The boundary guidance is a working interpretation to refine through use.

The [research note](../guides/category-and-style-research.md) records the rationale and limits. These menus establish no taste, platform support, or mandatory style pairing.


For Finance → Transactions, use `finance/data-management` and record Transactions as the screen label. Finance → Payments uses `finance/checkout-payments`. A product’s labels need not create duplicate families.
