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

[Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md) · [Full Atlas: all three types](../../agents/ATLAS.md#full-atlas)

Read down one branch: choose one ID at each layer. The names beside each vertical guide are that layer's complete menu; the next indentation continues under the chosen ID. Style-family headings are browsing groups within layer 6. Create only the actual direction's folders and give each created layer a README.

<!-- atlas:games:start -->
```text
games
└── device type · mobile / tablet / desktop / tv
    └── viewport size · width × height
        └── category · choose one of 17
            │  action
            │  adventure
            │  arcade
            │  board
            │  card
            │  casino
            │  casual
            │  educational
            │  music
            │  puzzle
            │  racing
            │  role-playing
            │  simulation
            │  sports
            │  strategy
            │  trivia
            │  word
            │
            └── subcategory · 15 draft families; choose one
                │  gameplay
                │  main-menus
                │  level-selection
                │  lobbies-matchmaking
                │  character-loadouts
                │  inventory
                │  maps-quests
                │  progression
                │  shops
                │  results-rewards
                │  leaderboards
                │  tutorials
                │  pause-settings
                │  dialogue-narrative
                │  social-guilds
                │
                └── style · 44 unique IDs across the groups below
                    ├── Game art and rendering · 13 research terms
                    │   ├── pixel-art
                    │   ├── vector-flat
                    │   ├── hand-drawn
                    │   ├── painterly
                    │   ├── cel-shaded
                    │   ├── low-poly
                    │   ├── voxel
                    │   ├── stylized-3d
                    │   ├── realistic-3d
                    │   ├── retro-3d
                    │   ├── retro-anime
                    │   ├── papercraft
                    │   └── rubber-hose
                    └── Shared influences · reference-led use
                        ├── Composition
                        │   ├── minimal
                        │   ├── maximal
                        │   └── editorial
                        ├── Design traditions
                        │   ├── swiss-typographic
                        │   ├── bauhaus
                        │   ├── de-stijl
                        │   ├── constructivism
                        │   ├── art-nouveau
                        │   ├── art-deco
                        │   └── mid-century-modern
                        ├── Expressive graphics
                        │   ├── memphis
                        │   ├── pop-art
                        │   ├── psychedelic
                        │   ├── new-wave
                        │   ├── punk
                        │   └── grunge
                        ├── Web and interface
                        │   ├── flat
                        │   ├── skeuomorphic
                        │   ├── neumorphic
                        │   ├── glassmorphic
                        │   ├── claymorphic
                        │   ├── brutalist
                        │   └── neobrutalist
                        ├── Digital eras
                        │   ├── retro-computing
                        │   ├── y2k
                        │   ├── frutiger-aero
                        │   ├── vaporwave
                        │   └── synthwave
                        └── Speculative aesthetics
                            ├── retrofuturism
                            ├── cyberpunk
                            └── steampunk
```
<!-- atlas:games:end -->

## Category and subcategory menus

The complete menus above come from [Categories](categories.md) · [Interface subcategories](subcategories.md) · [Style definitions](styles.md). Website/game interface families remain draft; extended influences and game art terms require reference-led matching. Personal branch taste is still defined through Taste.

Edit the canonical definition tables, then run `python3 tools/workspace.py catalogue` to refresh this diagram and [Atlas](../../agents/ATLAS.md). The checker detects stale menus.

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
