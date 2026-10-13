# From references to a custom kit and layout

Research run · October 12, 2026 · Recommendations for the Taste/Dial workflow

Jason wants to feed Taste websites, links, screenshots, screen grabs, MP4s, and inspiration gathered inside or outside the IDE. Taste should deliver **both a custom DialKit and a first React layout**, with shared components/settings, running on localhost. Additional layouts should reuse that kit. Dream saves a separate version for morning review.

This run reviewed design research and implementation documentation. It did not compare generated React layouts or establish a personal aesthetic. The workflow below is a research-informed proposal; no study directly validates this exact agent system.

## Separate the reference's role from the requested transformation

| Reference role | What we extract | What it does not decide by itself |
| --- | --- | --- |
| Layout | Content hierarchy, regions, relationships, navigation, density, composition, responsive evidence | Whether this arrangement fits a different product or should be preserved |
| Mood / inspiration | Typography character, palette, material, lighting, imagery, atmosphere, rhythm, motion qualities | Page structure, required content, user flows, or unseen behavior |
| Both | The relevant structural and stylistic attributes, each explicitly identified | That every feature is desirable or reusable |

These are fields on a reference, not new top-level folders. A screenshot can supply both kinds of evidence. A website or video may additionally show behavior and transitions when inspected; a still image cannot establish them. For each source, record the exact page/region/time interval, its contribution, what to preserve, what to change or exclude, and observation versus inference.

The transformation is a separate choice:

| Mode | Use when | Initial output |
| --- | --- | --- |
| Reconstruct | “Rebuild this,” “match this,” or a component needs a faithful editable baseline | Reference-matched React reproduction plus controls preserving its initial appearance |
| Adapt | A new item should inherit selected qualities of an existing layout/style | Same intended taste, with composition and content fitted to the new brief |
| Explore | The user wants a fresh concept or supplies mood without a layout | Distinct compositions based on the brief and selected mood qualities |

**Recommended default for a new product: Adapt.** Preserve the selected visual character and useful patterns while designing the structure for the actual task. Explicit reconstruction takes precedence. Explore is useful when the concept itself is open. A screenshot alone can start analysis; the intended product, content, and desired relationship to that screenshot still matter.

## What the evidence supports

| Primary source | Finding relevant here | Practical limit |
| --- | --- | --- |
| [Dow et al., 2010 — parallel prototyping](https://aaalab.stanford.edu/assets/papers/2010/Parallel_Prototyping_leads_to_better_design_results.pdf) | In a 33-person web-ad study, making alternatives before critique yielded stronger measured results and greater design diversity than serial refinement. | Participants were not professional designers; banner advertisements are not complex React products. Supports comparison, not a universally optimal number of variants. |
| [Leahy et al., 2020 — provided versus self-generated examples](https://doi.org/10.1115/1.4046446) | In a 185-student engineering study, people could fixate on their own first solution as well as a supplied example; structured ideation helped them move beyond it. | Different tasks and populations; starting from nothing does not guarantee novelty. Publisher-indexed methods/discussion were available; direct PDF access failed. |
| [Omwami et al., 2024 — digital mood boards](https://journals.oslomet.no/index.php/techneA/article/view/5361) | Three student teams used cycles of broadening and deepening ideas while building mood boards. Mood boards can establish a shared starting point for design. | Qualitative educational study; it does not establish a direct mood-to-layout conversion algorithm. |
| [Wadinambiarachchi et al., CHI 2024 — generative AI and fixation](https://arxiv.org/abs/2403.11164) | In a 60-person visual-ideation experiment, AI-image support increased fixation and reduced idea diversity relative to the baseline. | Studied a particular image-generation workflow, including Midjourney V4; it does not establish that current React agents always reduce creativity. |
| [Hou et al., 2025 — creative-process experiments](https://pubsonline.informs.org/doi/10.1287/isre.2024.0937) | Laboratory and field experiments reported benefits for AI-supported ideation, with implementation effects varying by expertise. | Contrasts with the earlier fixation result; task, tools, stage, and working method matter. Avoid a blanket claim that AI helps or hurts originality. |
| [Wadinambiarachchi et al., C&C 2026 — multimodal prompting](https://arxiv.org/abs/2606.26626) | Sketch input tended to increase fluency, while evidence for differences in originality, variety, or quality was inconclusive. | More input modalities alone do not establish better taste or design quality. Read via the authors' abstract. |
| [Nielsen, 2009 — familiar interfaces and redesign](https://www.nngroup.com/articles/fresh-vs-familiar-aggressive-redesign/) | Usability guidance favors retaining useful learned conventions and changing structure for a reason. | Applies especially to existing products; it is not a reason to suppress expressive visual exploration. |

Read the findings as support for **explicit reference contributions, meaningful alternatives, and deliberate refinement**. They do not prove “completely unique” output, an ideal reference count, or a single best prompting recipe. The proposed three-option comparison below is our practical starting point.

## A run starting with one layout

1. **Understand the brief and the reference.** Identify what the new item does, its content/task, target viewport, and which aspects of the reference Jason values. Use stated intent; ask only when a missing choice changes the work.
2. **Separate structure from style.** Record layout anatomy independently from typography, color, materials, and motion. Mark which attributes are fixed, flexible, or unknown. Preserve source identity.
3. **Choose the transformation from the request.** Reconstruct for a requested match. For new work, propose Adapt: retain selected qualities and change the arrangement to fit the new content. For mood-only input, derive composition from the brief.
4. **Compare before polishing when exploration is open.** Make a small set of rough compositions: a close adaptation, a restructured composition, and a more exploratory concept. Keep content and viewport comparable; make real structural changes, not three recolors. These are design alternatives, not separate agents or three finished apps.
5. **Build the pair.** Taste owns the direction and delivery; use Dial's implementation workflow to produce the custom React components, tokens, controls, and one working layout from them. Preserve the rough alternatives. A provisional recommended layout may proceed when authorized; it does not become confirmed taste without supporting feedback.
6. **Iterate from the shared kit.** Prompt edits to the kit, a component, or the layout explicitly. Save exact values and revisions. New layouts reuse the components/style and vary arrangement, hierarchy, and content. Dream later evaluates the selected direction and leaves an isolated review candidate.

Faithful component extraction can be a calibration step without committing the whole new product to the source page's composition. An entire screenshot need not be rebuilt before an exploratory layout unless reproduction is requested. For true reconstruction, retain the original image-to-code fidelity check before adding controls.

## What the custom kit contains

Reusable React components and scene pieces where applicable; semantic visual tokens; meaningful DialKit controls; independent presets/versions; state and motion rules; source-linked taste criteria; composition guidance; and a working reference layout importing that same implementation. The first layout is an example composition, not a permanent template that all later layouts must copy.

For 3D, identify camera, lighting, geometry, materials, and motion as separate contributions. Unseen geometry and behavior remain inferred unless supplied or inspected. Research can propose compelling concepts, but neither inferred geometry nor a generated preview establishes production quality on its own.

## How to evaluate the proposed default

When an actual reference and brief are selected, compare Reconstruct, Adapt, and Explore under the same content, viewport, and time budget. Inspect task fit, preservation of selected taste, composition differences, editability through shared controls, and implementation/visual checks. Have Jason judge which result best fits his intent; keep that scoped preference.

That would be a design experiment. This run completed literature/documentation research only: no personal reference, generated comparison, or local React test was supplied or run.
