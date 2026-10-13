# games

Design environment entry · Updated October 12, 2026

Game design references and working design kits, with genre, play surface, input, and rendering context recorded explicitly. Start here, then follow **viewport → category → style**. [Setup](../instructions/SETUP.md) uses this document to recreate this type's environment and copy the applicable information beneath it.

```text
games/
  README.md                  type environment and common information
  <viewport>/
    README.md                viewport profiles and requirements
    <category>/
      README.md              category research and feedback
      <style>/
        README.md            style rules, evidence, and working state
        …                    relevant Markdown, assets, and components
```

Type, viewport, and category entry files exist. Style folders are created for existing records or explicitly requested exploration. The copy/restoration procedure is specified; automated environment setup is not implemented yet.

## Viewports

| Viewport entry | Starting profiles | Information to carry at this level |
| --- | --- | --- |
| [mobile](mobile/README.md) | Chrome 320 / 375 / 425 CSS px widths for browser games; actual device/layout and render dimensions for native games. | Touch controls, orientation, safe areas, HUD layout, and runtime support. |
| [tablet](tablet/README.md) | Chrome 768 CSS px width or a recorded tablet profile for browser games; actual native target for native games. | Touch/controller capability, orientation, aspect ratios, and HUD scaling. |
| [desktop](desktop/README.md) | Chrome 1024 / 1440 / 2560 CSS px widths for browser layout; record game render resolution separately. | Pointer/keyboard/controller input, window/full-screen behavior, render scale, and HUD scale. |
| [tv](tv/README.md) | Record the target display, render resolution, layout units, and safe area. A 1920 × 1080 render target is a library proposal, not a universal viewport. | Controller/remote navigation, focus, viewing-distance requirements, HUD scale, and actual platform support. |

These starting points are copied from the [viewport registry](../shared/viewports/README.md), [Chrome references](../shared/viewports/CHROME.md), and [native references](../shared/viewports/NATIVE.md), reviewed October 12, 2026. Chrome widths use CSS pixels and have adjustable heights. Its “4K” preset is 2560 CSS px wide. Native dp, Apple points, and game render pixels retain their own units; a browser preset does not verify native support.

Save the actual width × height, units, orientation, platform/runtime version, input, DPR/render scale, safe areas, source, and support evidence in the viewport record. Add another viewport only for an explicit target. Initial folders are research containers; compatibility still needs verification.

## Consumer categories

Use these 17 Google Play game genres as consumer categories. Keep `category` as the folder-layer name. Game mechanics, camera angle, and product scope remain descriptors inside the record.

Copied from [the canonical category list](../shared/workflow/taxonomy/GAME-GENRES.md), reviewed October 12, 2026. Its names and IDs remain authoritative when this copy is refreshed. The final segment of each ID is the category folder name beneath each viewport.

| Consumer category ID | Google Play name |
| --- | --- |
| `games/action` | Action |
| `games/adventure` | Adventure |
| `games/arcade` | Arcade |
| `games/board` | Board |
| `games/card` | Card |
| `games/casino` | Casino |
| `games/casual` | Casual |
| `games/educational` | Educational |
| `games/music` | Music |
| `games/puzzle` | Puzzle |
| `games/racing` | Racing |
| `games/role-playing` | Role playing |
| `games/simulation` | Simulation |
| `games/sports` | Sports |
| `games/strategy` | Strategy |
| `games/trivia` | Trivia |
| `games/word` | Word |

Each viewport README links to its existing category records. Carry category-specific information into those records with its original scope; leave unsupported research marked **not researched**.

## Styles

Copied from [the game art vocabulary](../shared/styles/GAMES.md), proposed v0.2, October 12, 2026. Definitions, aliases, sources, and IDs are maintained there. These are research terms; every category-to-style match remains unassessed.

| Group | Preferred terms |
| --- | --- |
| Art and rendering | Pixel art; Flat vector illustration; Hand-drawn illustration; Painterly rendering; Cel shading; Low-poly; Voxel art; Stylized 3D; Photorealistic 3D |
| Reference and material directions | Retro 3D; Retro anime; Papercraft |
| Animation tradition | Rubber-hose animation |

The [shared visual vocabulary](../shared/styles/README.md) provides additional aesthetic influences. The [motion vocabulary](../shared/styles/MOTION.md) supplies named animation techniques. Record game art and interface/HUD treatment separately, including their relationship. Specify a complete visual recipe before treating any umbrella term as a design kit.

Camera, rendering technique, engine, tone, and mechanics remain descriptors within the record. A menu entry does not establish Jason's taste or approve a baseline. Use [the style record template](../shared/styles/STYLE-TEMPLATE.md) for an actual style folder and read [taste coverage](../shared/taste/COVERAGE.md) before personal recommendations. This pass checked source text; representative gameplay and HUD review remains open.

## Environment contents

Setup carries all supplied information relevant to this type, placing it at the narrowest supported level. Shared type-wide information stays here and applies to descendants within its recorded scope. Short records go in the relevant README; longer source documents are copied alongside it and indexed there.

| Level | Information to copy and preserve |
| --- | --- |
| Type | Game purpose, engine/platform requirements when known, game-specific resources, asset provenance, input conventions, and design/build tools. |
| Viewport | The profiles and target requirements above, verification evidence, and viewport-specific reference material. |
| Category | The actual gameplay purpose and audience; genre references, mechanics context, screen/HUD flows, annotations, and scoped feedback. |
| Style | The art-style definition and UI treatment, supported preferences, palette/material/rendering rules, adjustable interface components, saved variants, and applications. Keep verification, baseline status, and Dream enrollment explicit. |

For each copied source, retain its identity, origin, revision/date, applicable scope, evidence status, and attribution. Include available supporting Markdown and required assets. Report missing originals, uncertain classification, and unavailable tools. Keep [Resources](../resources/README.md) as the portable master collection and follow [Setup's copy and refresh rules](../instructions/SETUP.md#copy-and-refresh-rules); locally edited copies are preserved on reruns.

## Agent and tool context

- [Atlas](../instructions/ATLAS.md) maps this type's vocabulary and routes records to the correct viewport/category/style.
- [Taste](../instructions/TASTE.md) carries inspected research, annotations, and scoped feedback into those records.
- [Dial](../instructions/DIAL.md) restores the applicable component code, controls, independent variants, and application records.
- [Dream](../instructions/DREAM.md) reads the selected branch's evidence and existing run state; setup preserves enrollment without creating a schedule.

Setup records each required capability, its version, relevant branches, installation/connection needs, and verified readiness. Reuse the destination's existing stack where suitable. A type or category label does not select a framework, engine, or new tool installation. Installed skill files, runnable tools, and credentials follow their own storage and access requirements.

## Current readiness

- Folder and vocabulary records: present.
- Actual product/platform support: unverified until a target is recorded.
- Category research and personal style matches: not researched / unset.
- Branch-specific tool configuration and automated copying: still to implement and verify.

A complete setup receipt must account for the supplied source information, copied destinations, preserved local changes, missing inputs, and the next branch to open. It must distinguish a restored document collection from a working runtime or a researched design style.
