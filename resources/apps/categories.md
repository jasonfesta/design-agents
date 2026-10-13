# App product categories

```text
layer      04 · category
baseline   Google Play · 32 product categories
child      interface family → style
checked    2026-10-13 against the official category list
```

Jason’s October 13 correction separates product category from interface family. Use a store category to describe what the app does, then select a [subcategory](subcategories.md) for the screen or flow. The existing 20 interface families remain intact.

## Google Play menu

[Google Play Console Help](https://support.google.com/googleplay/android-developer/answer/9859673?hl=en) supplies these names. IDs below are local folder names. Google Play is the kit’s default vocabulary, including browser-based software; that convention does not assert store eligibility or platform support.

| Category ID | Google Play name |
| --- | --- |
| `art-design` | Art and Design |
| `auto-vehicles` | Auto and Vehicles |
| `beauty` | Beauty |
| `books-reference` | Books and Reference |
| `business` | Business |
| `comics` | Comics |
| `communication` | Communications |
| `dating` | Dating |
| `education` | Education |
| `entertainment` | Entertainment |
| `events` | Events |
| `finance` | Finance |
| `food-drink` | Food and Drink |
| `health-fitness` | Health and Fitness |
| `house-home` | House and Home |
| `libraries-demo` | Libraries and Demo |
| `lifestyle` | Lifestyle |
| `maps-navigation` | Maps and Navigation |
| `medical` | Medical |
| `music-audio` | Music and Audio |
| `news-magazines` | News and Magazines |
| `parenting` | Parenting |
| `personalization` | Personalization |
| `photography` | Photography |
| `productivity` | Productivity |
| `shopping` | Shopping |
| `social` | Social |
| `sports` | Sports |
| `tools` | Tools |
| `travel-local` | Travel and Local |
| `video-players-editors` | Video Players and Editors |
| `weather` | Weather |

## App Store naming

[Apple’s category guidance](https://developer.apple.com/app-store/categories/) uses its own labels, including Finance, Photo & Video, Social Networking, and Developer Tools. Do not silently equate the two stores’ menus or claim a one-to-one mapping. Preserve the selected store and original label in the category record. If an Apple-only term is needed, resolve it through Atlas and add the agreed ID; do not force it into an unrelated Google Play category.

```text
category.id        finance
category.source    google-play
category.label     Finance
category.aliases   Apple App Store: Finance  # only when verified for the target
subcategory.id     dashboards
screen.label       Account overview
```

A store’s primary/secondary categories are store metadata. Our subcategory means an interface family, not the store’s secondary product category. Games remain the separate `games` design type.

## Menu behavior

Choose the product category first. Suggest relevant interface families next, with access to the complete family menu. The suggestions are conveniences, not evidence that other combinations are impossible. Reuse a family across categories by ID; save each reference once and link it where needed.

Examples: Finance → Dashboards / Data management / Checkout and payments; Social → Feeds / Messaging / Detail views; Productivity → Editors / Task boards / Calendars. These are illustrative matches, not exhaustive or taste-approved branches.

Earlier category models remain in [History](../history/README.md). Classify old interface-only paths by the actual product before adding a category; leave unknown product scope unresolved.
