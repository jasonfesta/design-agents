# Dial component workflow

Requested workflow · October 12, 2026 · Specification; image-to-component workbench not yet implemented

**References → Taste direction → custom DialKit + first React layout → prompt tuning → additional layouts.**

Taste accepts screenshots, screen grabs, MP4s, websites, links, and inspiration, then passes the references and defined direction to Dial. Dial builds the custom kit and first layout with reusable React components, tokens, controls, and saved variants; the layout imports those same components and values. New compositions can reuse the kit without repeating the first layout's structure. The existing upstream demo verifies the control library; the full reference-to-kit workflow remains to be implemented here.

Record each source's role (layout, mood/inspiration, both), exact inspected page/region/time interval, and selected contribution. Follow the [research proposal](../reference-to-layout-research.md) to distinguish Reconstruct, Adapt, and Explore. Multiple sources do not imply combining incompatible styles or treating every observed feature as a personal preference.

## Shared component vocabulary for Dial

Jason requested that Dial and the DialKit workflow share the Spotted in Prod structure, with product categories excluded. Read the existing [source taxonomy](../../sources/spotted-in-prod/taxonomy.md) and [style-ID mappings](../../styles/README.md#primary-app-and-website-style-menu); keep one canonical source list.

Dial uses **203 labels across five component groups**. A reference or component can have several labels in each group. Use only the labels relevant to the actual component; catalogue availability does not require building every item.

| Component group | Complete source list | Structure Dial must record |
| --- | --- | --- |
| `design_language` | [20 design languages](../../sources/spotted-in-prod/taxonomy.md#design-language) | Primary style ID, secondary influences, defining rules, and properties a variant must preserve. |
| `visual` | [52 visual labels](../../sources/spotted-in-prod/taxonomy.md#visuals) | Visible layers and assets, their geometry, typography, color, material and compositing relationships; which part carries each label. |
| `gesture` | [18 gestures](../../sources/spotted-in-prod/taxonomy.md#gestures) | Target, input event, start/update/end/cancel behavior, constraints, resulting state, and keyboard or alternate input. |
| `flow` | [59 flows and states](../../sources/spotted-in-prod/taxonomy.md#flows) | Entry state, ordered steps, component IDs used by each step, branching, exit and recovery. Tag the relevant step instead of assigning a whole journey to every child. |
| `pattern` | [54 patterns](../../sources/spotted-in-prod/taxonomy.md#patterns) | Component anatomy, composition, variants, states, behavior and control bindings, using the families below. |

The four `team_type` labels may travel as optional source attribution only. Exclude the source `category` group and all 39 product-domain labels from Dial's component taxonomy, control panels, and saved tuning values. The destination's existing app-interface or website-use category remains part of its project path; it is a different concept.

Preserve source labels and identity as `(group, slug)`, along with source URL, capture date, and the exact asset/region/clip state inspected. Keep the two Art IDs distinct, retain the source Cyberpunk slug `cryptopunk`, and map the source Skeuomorphism label to our `skeuomorphic` style ID without altering provenance. Morph is a pattern; a label alone does not specify its implementation.

### Pattern component families

These eight families organize implementation work in Dial. They are our grouping of all 54 source patterns, not additional source categories or folder layers. A complex component can combine families. Platform-specific patterns need an explicit target and supported fallback.

| Family | Source patterns | Break into | State and tuning contract |
| --- | --- | --- | --- |
| Overlays | Modal, Bottom Sheet, Tray, Context Menu, Drawer, Top Tray, Takeover, Underlay | Trigger, surface, content, dismiss action, and backdrop when present. | Open/closed state, focus return, dismissal, surface size, offset, radius, backdrop and transition. |
| Collections | List, Carousel, Grid, Rail, Card Stack, Waterfall, Snap Scrolling | Collection container, repeated item, selection, and navigation or scroll boundary. | Item layout, gap, columns, stack order, selected index, snap alignment and scroll behavior. |
| Navigation and layout | Header, Footer, Tab Navigation, Segmented Control, Bottom Tabs, Top Tabs, Split View, Switcher | Navigation region, item or segment, active indicator, and linked pane or content region. | Selected state, pane sizing, orientation, alignment, spacing and navigation rules. |
| Input controls | Slider, Radial UI, Pills, Keypad, Picker, FAB, Toggle, Checkbox, Increment | Control root, label, value, action targets, and state indicator. | Value and bounds, enabled/disabled state, selection, focus, geometry and input response. |
| Spatial views | Canvas, Map Pins, Map Markers, Zoom | Viewport, content plane, objects or markers, and view transform. | Position, scale, selection, pan/zoom bounds, hit area and alternate navigation. |
| Media controls | Play/Pause, Shutter, PiP | Media surface, primary action, status indicator, and secondary view when relevant. | Playback/capture state, surface size, control placement and capability-dependent behavior. |
| Feedback and status | Toast, Dynamic Island, HUD, Pull to Refresh, Refresh | Status surface, message or progress, trigger, and return to the underlying task. | Visibility, loading/success/error states, progress, dismissal, duration and interruption. |
| Transitions and effects | Morph, Shared Element, Expand/Collapse, Show/Hide, Flip, Page Flip, Parallax, Pulse, Rubber Band, Wiggle | Starting and ending elements, shared identity, moving parts, and transition boundary. | Progress, trigger, endpoints, timing or spring, repetition, interruption and reduced-motion behavior. |

### Component record

For each actual extracted component or composition, use this structure inside its existing record. A flow owns its sequence; child components own their anatomy and state rules. Link reused children by component ID and pinned revision.

```md
### Component <id> at revision <revision>
- Boundary and anatomy: root; parts/slots; child component IDs and revisions.
- References: source ID and URL; asset/page/region/video interval/state; capture date; contribution and role; transformation; reconstruction revision where applicable.
- Source labels: design_language []; visual []; gesture []; flow []; pattern [].
- Optional attribution: maker and team_type []; original source identity.
- Style mapping: primary kit style ID; secondary influences; identity rules and locks.
- Visual layers: part IDs; assets/materials; geometry/type/color tokens; stacking and clipping.
- States: initial, interactive, loading, empty, error, disabled, and other applicable states.
- Gestures: target → input → state/action; start/update/end/cancel; constraints; alternate input.
- Flow role: entry → steps/branches → exit/recovery; participating component revisions.
- Pattern structure: source pattern IDs; family; parts; composition and transition relationships.
- Control bindings: control ID → part/state/property or token; type; initial value; units; bounds/options; locks.
- Evidence: observed versus inferred/proposed behavior; source-fidelity and accessibility checks; gaps.
- Variant: base revision; exact saved values; code/assets; rules; verification and application revisions.
- Generated: date/time zone; item ID and output paths; latest changes and checks for Dream's daily review.
```

Keep source labels read-only as reference metadata. Turn a selected label into controls only after reproducing its actual structure: for example, Blur may yield a bounded blur value on a named layer; Drag needs a target, bounds and cancellation behavior; Morph needs identified endpoints. No label supplies arbitrary defaults, and changing a tag must not silently restyle the component. An intentional style change creates an explicit variant or code/value edit.

Bind controls to the selected implementation with identical initial values; a reconstruction retains its reference-matched defaults. Preserve the source reconstruction, inferred-state flags, keyboard access, reduced motion, and independent saved variants. This is the shared component specification; it does not install a catalogue browser or add runtime controls by itself.

## 1. Turn reference evidence into editable components

Preserve original sources and record the target viewport, product brief, component boundaries, and what to reproduce or borrow. In **Reconstruct**, reproduce the visible component or screen in editable React, render at matching conditions, and compare with the image before adding controls. Keep that reconstruction revision and identify mismatches, missing assets, and inferred behavior.

In **Adapt** or **Explore**, extract the selected visual and structural qualities, then compose for the actual product. A mood image supplies qualities, not a mandatory page layout. Build reusable pieces and a first layout importing them. Compare against the selected contributions and brief; do not claim pixel fidelity to a source whose composition intentionally changed.

Inspect video or live interaction before treating motion and unseen states as observed. For 3D, separate camera, lighting, geometry, and material evidence; hidden geometry remains inferred. A full-screen source may yield several components with the assembled screen retained as a composition check.

## 2. Connect DialKit and tune

Bind controls to that same code with matching initial values, preserving the initial appearance. Expose only defined changes: geometry, typography, spacing, color, material, imagery, and motion where appropriate. A control must describe what it changes and which component rules it affects.

Prompts become explicit control/config/code edits scoped to the kit, a component, or a layout instance. Never silently turn an instance tweak into a global kit change. Record the prompt, before/after values, code revision, and render evidence. Changing a live control is a working edit; save a named variant when its state should be reusable.

## 3. Save a component variant for a style

Use the agreed branch: `<type>/<device>/<width>x<height>/<category>/<subcategory>/<style>/`. Check viewport applicability, category, style fit, and taste coverage before assigning a variant. A visual match can be a candidate while Jason's preference remains undefined.

For each component variant, save:

- Stable component ID and variant revision, with the source reconstruction revision.
- Source references and exact contribution; inspected and inferred details.
- The five shared source-label groups, component anatomy, gesture/state contracts, flow links, and pattern structure defined above; exclude product-domain categories.
- Editable code, assets, dependencies, and rendering instructions.
- Exact control defaults, token bindings, permitted ranges, and locked identity rules.
- Component states, responsive rules, input/accessibility behavior, and verification gaps.
- The target style ID, why it fits, applicable category/viewport scope, and usage exclusions.
- Jason's feedback, approval status if any, and applications that use the variant.

Keep the base component canonical. When variants share code, link it by ID/revision and store each style's values and rules independently. Do not overwrite one style's variant when dialing another. A component used in several branches needs explicit mappings; suitability does not follow from copying a file.

## 4. Apply and verify

Deliver the custom kit and first React layout together; the layout imports the kit's canonical code and selected values. Compose further layouts by prompt using pinned variants. Apply the selected variant to the target app, website, or game UI. Connect its props, tokens, and states to the actual product, and check it at the target viewport and input mode. Compare it with the saved style rules and the intended page or screen composition. Record integration changes and visual or functional limitations.

Record each generated component, variant, or composition in its direction README with the date/time zone, actual paths, reference and pinned revisions, and completed checks. [Dream](../../../agents/DREAM.md) reviews the day's items from these records, including unresolved fidelity and save/reload checks.

Saving a variant does not make it an approved taste baseline. A changed variant does not automatically update every design that uses it; each application pins a revision until deliberately upgraded. Full-screen image reproduction remains available within this component-oriented workflow.

## First useful implementation

For a first build, use a selected reference and brief to make a small custom kit and one representative layout. Include faithful extraction where requested, comparison evidence, controls, a saved variant, and exact reload. Confirm that a prompt can change one layout without overwriting the kit. No concrete product brief or target reference has been selected for that implementation trial yet.

[RESEARCH.md](research.md#image-references-to-dialkit) owns reference intake; [SYSTEM.md](system.md) owns tokens and component contracts; [APPLY.md](apply.md) owns application checks. This document owns their end-to-end component-workbench connection.
