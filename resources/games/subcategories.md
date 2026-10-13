# Game screen and flow subcategories

```text
layer      05 · subcategory
menu       15 proposed interface families
status     draft names and boundaries; hierarchy requested by Jason
```

Choose the interface within the [category](categories.md), then its [style](styles.md). These are local working families, not an app-store or source provider’s official subcategory list. They collect existing page/screen details into the newly requested layer. Confirm additions through Atlas as actual work supplies evidence.

| Subcategory ID | Interface family | Scope |
| --- | --- | --- |
| `gameplay` | Gameplay and HUD | Active play surface with its controls and feedback. |
| `main-menus` | Main menus | Entry, mode choice, and primary game navigation. |
| `level-selection` | Level and world selection | Choose a stage, chapter, mission, or world. |
| `lobbies-matchmaking` | Lobbies and matchmaking | Party setup, player readiness, and match entry. |
| `character-loadouts` | Character and loadout selection | Select characters, equipment, abilities, and builds. |
| `inventory` | Inventory and equipment | Manage collected items, resources, and gear. |
| `maps-quests` | Maps and quest logs | World navigation, objectives, and mission progress. |
| `progression` | Progression and skill trees | Upgrades, mastery, unlocks, and paths. |
| `shops` | Shops and exchanges | Browse offers, currencies, and in-game purchases. |
| `results-rewards` | Results and rewards | Completion, scoring, unlocks, and rewards. |
| `leaderboards` | Leaderboards and rankings | Comparative results and competitive standings. |
| `tutorials` | Tutorials and training | Teach rules and practice mechanics. |
| `pause-settings` | Pause and settings | Pause, controls, accessibility, audio, and graphics. |
| `dialogue-narrative` | Dialogue and narrative | Conversation choices, story panels, and codex reading. |
| `social-guilds` | Social and guild interfaces | Friends, teams, guilds, and communication. |

## Selection rules

One category can contain several families, and one family can appear beneath several categories. Select the task being designed. Keep state (loading, empty, error), components (buttons, tabs, cards), motion, and source tags as metadata. Do not create folders for every theoretical combination.

Puzzle → Level selection and Role playing → Inventory illustrate the split. Game subgenres and mechanics remain descriptive fields; the interface subcategory is the surface we are designing. A gameplay view includes its HUD; a HUD component alone remains a component record.

Naming basis: the kit’s existing [page and screen details](../guides/page-types.md). These families are proposals; they do not establish personal taste, device support, or an approved layout.
