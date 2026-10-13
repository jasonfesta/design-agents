# Legacy category mapping

Historical vocabulary and migration guidance · October 12, 2026

The earlier 27-category menu was a custom blend. Jason replaced it with Google Play app categories and game genres, under **apps / websites / games → viewport → category → style**. Preserve old IDs and source labels as aliases; do not rewrite historical evidence or guess a one-to-many mapping.

The mapping below is our migration guidance, not Google's published mapping. Select from the actual purpose and leave unresolved mappings explicit. Jigs is retired as a top-level design type. Existing jig/tooling references remain evidence; classify a future deliverable as an app, website, or game from its actual use.

| Legacy ID | Current mapping or decision needed |
| --- | --- |
| `fashion` | No direct category; use Shopping for retail, Lifestyle for styling, News and Magazines for publishing, or another category supported by purpose. Keep fashion as subject scope. |
| `beauty` | apps/beauty |
| `shopping` | apps/shopping |
| `food-drink` | apps/food-drink |
| `health-fitness` | apps/health-fitness |
| `medical` | apps/medical |
| `finance` | apps/finance |
| `business` | apps/business |
| `productivity` | apps/productivity |
| `communication` | apps/communication (published name: Communications) |
| `social` | apps/social |
| `dating` | apps/dating |
| `education` | apps/education for apps; distinguish games/educational for games |
| `books-reference` | apps/books-reference |
| `news-editorial` | apps/news-magazines |
| `entertainment` | apps/entertainment |
| `music-audio` | apps/music-audio for apps; distinguish games/music for games |
| `photo-video` | Split by purpose: apps/photography or apps/video-players-editors |
| `art-design` | apps/art-design |
| `games` | Choose a game genre for playable games; classify companion apps by their actual app purpose |
| `sports` | apps/sports for apps; games/sports for games |
| `travel-local` | apps/travel-local |
| `maps-mobility` | apps/maps-navigation; use apps/auto-vehicles when purpose is vehicles |
| `home-property` | apps/house-home |
| `lifestyle-family` | Split by purpose: apps/lifestyle, apps/parenting, or apps/events |
| `tools` | apps/tools; use apps/personalization for personalization and apps/libraries-demo for libraries/demos where appropriate |
| `weather-environment` | apps/weather for forecasts; classify other environment products by purpose |

## Previous category menu

Retained for interpreting old records, not for new category selection.

| Category ID | Category | Example product scopes |
| --- | --- | --- |
| fashion | Fashion | Retail, resale, rental, wardrobe, styling, editorial, designer tools |
| beauty | Beauty & personal care | Product discovery, routines, services, tutorials |
| shopping | Shopping & marketplaces | General retail, comparison, auctions, local exchange |
| food-drink | Food & drink | Recipes, restaurants, ordering, cooking, groceries |
| health-fitness | Health & fitness | Training, activity, nutrition, recovery, habits |
| medical | Medical & care | Care access, patient records, clinician tools |
| finance | Finance | Banking, budgeting, investing, payments |
| business | Business | Operations, sales, customer support, business administration |
| productivity | Productivity | Documents, tasks, calendars, notes, personal organization |
| communication | Communication | Messaging, email, meetings, collaboration |
| social | Social & communities | Groups, creators, sharing, community moderation |
| dating | Dating & relationships | Discovery, matching, conversation, relationship planning |
| education | Education | Courses, practice, tutoring, classroom tools |
| books-reference | Books & reference | Reading, libraries, dictionaries, research |
| news-editorial | News & editorial | Reporting, magazines, newsletters, knowledge feeds |
| entertainment | Entertainment | Streaming, discovery, fandom, live experiences |
| music-audio | Music & audio | Listening, discovery, recording, production |
| photo-video | Photography & video | Capture, editing, asset libraries, sharing |
| art-design | Art & design | Creation tools, portfolios, asset discovery, critique |
| games | Games | Play, game libraries, creation, companion experiences |
| sports | Sports | Teams, scores, coaching, participation |
| travel-local | Travel & local | Trip planning, stays, local discovery, reservations |
| maps-mobility | Maps & mobility | Navigation, transit, vehicles, transport services |
| home-property | Home & property | Interiors, property search, household management |
| lifestyle-family | Lifestyle & family | Parenting, pets, hobbies, events, personal routines |
| tools | Tools & personalization | Utilities, device configuration, developer tools, customization |
| weather-environment | Weather & environment | Forecasts, conditions, environmental information |

## Fashion in detail

Historical illustrative scopes and research questions follow. Fashion is now a subject scope beneath the appropriate Google Play category; these examples remain unselected.


Proposed product subcategories:

| Scope ID | Scope | Typical task |
| --- | --- | --- |
| retail | Brand or multi-brand retail | Discover, compare, choose a size, purchase |
| resale | Resale & archives | Inspect condition, provenance and measurements; compare and save |
| rental | Rental & subscription | Check availability, fit, timing and return terms |
| wardrobe | Personal wardrobe | Catalogue owned items and assemble outfits |
| styling | Styling & discovery | Find combinations and understand recommendations |
| editorial | Fashion publishing | Read a story, explore credits and related pieces |
| community | Fashion communities | Share looks, discuss and collect inspiration |
| creator-tools | Designer & stylist tools | Organize collections, looks, materials and production decisions |

The following are illustrative research questions only. Do not select these styles for Jason or count them as populated taste research. Actual branch research begins with his supplied material and the [TASTE.md](../TASTE.md) definition process:

| Branch | Research question | Specific risk to investigate |
| --- | --- | --- |
| editorial/archive-catalogue | Can provenance and imagery create character while keeping comparison clear? | Tiny captions or decorative metadata obscuring essential facts. |
| editorial/magazine | How can type and narrative pacing connect a collection? | Storytelling interrupting shopping or operational tasks. |
| minimal/quiet-gallery | How does framing give objects presence with little decoration? | Empty space erasing useful hierarchy or information. |
| utilitarian/index | Can direct structure and dense information feel intentional? | Indistinct rows and loss of image or object emphasis. |
| expressive/poster | Can graphic energy support the product story? | Display type, overlays or motion interfering with controls. |
| tactile/paper | Can print cues support archival or crafted character? | Texture reducing contrast or becoming arbitrary decoration. |

Streetwear, couture, outdoor clothing, vintage, and luxury resale can be domain tags in this research. They are not automatic instructions for a visual style or a claim about Jason's preferences.

