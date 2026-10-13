# Taste

```text
jason / taste
────────────────────────────────────────────────────────
mode     art direction
input    references + brief + feedback
output   evidence + direction for Dial
```

Turn the reference collection into **a defined taste direction for Dial**. Interpret the references, settle their Atlas classification with Jason, and preserve the evidence and decisions Dial needs to build the custom kit and layouts.

## Inputs

Screenshots, screen grabs, MP4s or other videos, live websites, links, sketches, and inspiration/mood collected in the IDE or brought in from elsewhere. One layout can be enough to start. Use the intended product/content, selected reference contributions, and Jason's feedback when available. References enter Taste directly. As they arrive, suggest classifications from [Atlas](ATLAS.md) and work with Jason to declare the direction; Atlas is the ongoing nomenclature library.

Read [the shared instructions](../AGENTS.md), [Atlas and its relevant vocabulary](ATLAS.md), [memory](memory/MEMORY.md), relevant [coverage](memory/COVERAGE.md), [taste guidance](../resources/guides/workflows/taste.md), and [project locations](README.md#project-locations). The [reference-to-layout research](../resources/guides/reference-to-layout-research.md) explains the proposed starting modes.

## Work

1. **Ingest and track coverage.** Inventory all supplied material, preserving source identity, original assets or accessible pointers, dates, and feedback. Inspect in manageable batches and keep a cursor for large collections. Record actual pages, image regions, and video time ranges/keyframes inspected. Mark inaccessible or pending sources; a fetched URL or one sampled frame is not full inspection.
2. **Suggest and settle the Atlas mapping.** Automatically suggest relevant **design type → device type → viewport size → category → subcategory → style** entries, with reasons, as references arrive. Discuss alternatives with Jason and use the dialogue to select each layer. Reuse explicit choices; a suggestion alone is not a selection. If the library lacks a fitting entry, prompt Jason with the gap and a proposed definition, then add the agreed entry through Atlas. Keep mapping questions open while inspecting references; do not mark the taste direction defined until its device type, viewport size, category, subcategory, and style are selected within its design type. Save canonical names/links/IDs and the decision in the existing direction record.
3. **Separate structure from mood.** Label each source contribution as **layout**, **mood/inspiration**, or **both**. Extract layout anatomy independently from typography, palette, materials, imagery, lighting, rhythm, and motion. Record observable facts, Jason's words, and interpretations separately. Still images do not establish unseen states, motion, or 3D geometry.
4. **Define the taste and transformation.** Record qualities to preserve, change, avoid, or leave open, with source links and scope. Use **Reconstruct** for a requested match; **Adapt** is the research-informed proposal for a new item using an existing reference; **Explore** develops a concept from the brief and inspiration. Infer the mode from explicit intent, and clarify only a material ambiguity. Collecting many references does not make every feature a preference; separate incompatible directions instead of averaging them together.
5. **Develop the composition.** For reconstruction, preserve the requested layout. When exploration is requested, compare a few rough, structurally different compositions before detailed polish. The proposed starting set is a close adaptation, a restructured option, and a more exploratory concept. Keep content/viewport comparable and preserve each option. Use known decisions; do not turn every step into another approval request.
6. **Pass the direction to Dial.** Save the handoff below in the existing direction record, then use [Dial](DIAL.md) for implementation when a build is requested. Dial owns the custom React kit and first layout, their controls, saved variants, and verification. Continue the authorized build in the same task without requiring Jason to repeat the request. A Taste-only discussion or reference study can finish with its direction and open questions.
7. **Support iteration and memory.** Kit changes, component changes, and layout changes have explicit scope. Subsequent layouts reuse the kit's visual system while changing composition. Save exact versions, source contributions, and dated generated items for Dream. Keep local choices with the project; promote only supported reusable preferences to memory.

Disclose missing personal research before taste-based recommendations, then continue authorized analysis and labeled candidate design. Jason's explicit selections apply within their scope without being reapproved. Agent interpretations and generated examples do not establish confirmed personal taste.

## Result

Give Dial **the references and defined direction**, saved once in the existing project record:

- Selected **type → device type → viewport size → category → subcategory → style**, with canonical Atlas names/links/IDs and Jason's decisions; mark any unresolved classification instead of claiming a finished definition.
- Source assets or accessible links, inspected image regions/pages/video intervals, layout versus mood contributions, and inspection gaps.
- Qualities to preserve, change, and avoid; Jason's feedback; supported taste criteria versus interpretations or proposals; functional constraints.
- Intended product/content, Reconstruct/Adapt/Explore intent, chosen composition or alternatives, and known states or motion behavior.
- Confirmed project destinations and requested output scope; for a full build, **a custom kit plus first React layout**, followed by prompt iteration.

Dial uses this handoff to implement and verify the result. It does not need to rediscover settled choices. If a missing decision affects the build, bring that specific issue back to the dialogue while continuing independent work. State missing or unexecuted stages honestly. Use [the shared result format](README.md#save-once-and-hand-off-clearly).
