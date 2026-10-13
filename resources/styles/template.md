# Style record template

Copy this content into the real `<type>/<device>/<width>x<height>/<category>/<subcategory>/<style>/README.md` when a style is explored or defined. Paths and examples below are placeholders, not existing designs.

```md
# <Style name>

- Path: <type>/<device>/<width>x<height>/<category>/<subcategory>/<style>/
- Product category source/label/ID; interface subcategory ID:
- Device type:
- Viewport size, units, Chrome preset/mode, DPR, safe areas, and input:
- Style ID, preferred term, kind, aliases, and broader/narrower/related terms:
- Source subcategories: design_language; visual; gesture; flow; pattern; product category; team type. Preserve source group/slug, display label, URL, and capture date; see the shared style menu.
- Visual influences and their role: composition / surface / imagery / era; source examples:
- Motion recipe: named technique(s), animated properties, trigger, timing/spring, sequencing, interruption/loop behavior, and reduced-motion alternative:
- Delivery and tools: interactive interface / rendered video / game runtime; implementation tool and version:
- Separate settings: design-system/platform version, mode, density, palette, layout, typography, material, and motion:
- For games: art direction and interface/HUD direction, including their relationship:
- Fit: candidate match / supported match / not a fit
- Research state: collecting / draft definition / defined / needs review
- Actual task, audience, target platform, page/screen, and viewport profile:
- Environment: inherited type/device/size/category/subcategory context and revisions; required tools/skills/runtime, versions, connection needs, and readiness:
- Defining visual rules and reasons:
- Exclusions, allowed variation, and missing aspects:
- Reference IDs, source creators/URLs, and inspected assets/regions:
- Source status: historical definition / catalogue term / concept / shipped interface / game art; observed qualities versus proposed adaptation:
- Copied Markdown/resources: source IDs, original paths/URLs, revisions/hashes, scope, attribution, local destinations, and setup receipt:
- Jason's exact feedback, dates, and decision sources:
- Taste definition/version and supported scope:
- Component variants: IDs, revisions, source paths, and usage restrictions
- Applied designs and verification evidence:
- Baseline approval and Dream enrollment: none / off until established
- Setup gaps: missing documents/assets, unverified capabilities, copy conflicts, and next action:
```

Store actual component variant files under `components/<component-id>/` within this style folder, or link an existing canonical component location. Components are contents of the style, not another classification layer. Save code, control defaults, reference evidence, states, and usage rules together; follow [COMPONENTS.md](../guides/workflows/components.md).
