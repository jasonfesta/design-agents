# Motion vocabulary

Working vocabulary v0.1 · October 12, 2026 · General research; no personal motion direction selected

Use named animation techniques to describe how a design moves. Store them inside its existing `<type>/<viewport>/<category>/<style>/` record. A visual aesthetic, a motion technique, a timing model, and an authoring tool answer different questions. A motion-led direction can still occupy the style layer when its full visual and behavioral rules are defined.

This registry complements the [visual vocabulary](README.md), [game art vocabulary](GAMES.md), and [source research](../../resources/research/design-taxonomy-research.md#designer-terminology-and-motion). Its groups are browsing aids, not additional folder levels.

## Motion families and production terminology

These definitions are our concise synthesis of the linked sources. Several names denote techniques or production traditions rather than complete aesthetics. Template labels are identified separately because a provider's title is not a universal term.

| Preferred term / ID | Kind | Working meaning and boundary | Source |
| --- | --- | --- | --- |
| **Kinetic typography** · `kinetic-typography` | Motion design family | Typography carries expression through changes in position, scale, form, or timing. Specify letter, word, or line behavior. | [Adobe](https://www.adobe.com/uk/products/aftereffects/text-animation.html) |
| **Stomp typography** · `stomp-typography` | Production shorthand | A search label for forceful, rapidly sequenced typography. Define the actual cuts, holds, scale changes, and beat relationship in the recipe. | [MotionTores template](https://motionarray.com/after-effects-templates/stomp-typography-967063/) |
| **Elastic typography** · `elastic-typography` | Descriptive technique | Letterforms visibly stretch, compress, or deform. Distinguish deformation from a spring that simply moves a rigid word. | [Jitter text catalogue](https://jitter.video/templates/text/) |
| **Text morphing** · `text-morphing` | Descriptive technique | Letterforms or shapes transform into another typographic state; document the exact transformation. | [Jitter text catalogue](https://jitter.video/templates/text/) |
| **Glitch animation** · `glitch-animation` | Effect family | Deliberately disrupt an image or text over time. Specify displacement, substitution, slicing, or another inspected effect; a static CRT texture alone is insufficient. | [Jitter text catalogue](https://jitter.video/templates/text/) |
| **Stop-motion animation** · `stop-motion` | Production technique | Build motion from successive photographed changes to physical objects. For digital imitation, explicitly say “stop-motion-inspired” and describe the holds. | [Adobe animation guide](https://www.adobe.com/creativecloud/animation/discover/animation.html) |
| **Cutout animation** · `cutout-animation` | Production technique | Animate assembled flat pieces; record whether they are physical cutouts or digital layers. | [Adobe animation guide](https://www.adobe.com/creativecloud/animation/discover/animation.html) |
| **Cel animation** · `cel-animation` | Production technique | Draw successive images for animation, traditionally on transparent cels. This is different from cel shading, a rendering treatment. | [Adobe animation guide](https://www.adobe.com/creativecloud/animation/discover/animation.html) |
| **Rubber-hose animation** · `rubber-hose` | Animation tradition | Flexible, apparently jointless limbs and elastic cartoon movement. Specify illustration and background treatment separately. | [Adobe](https://www.adobe.com/uk/creativecloud/animation/discover/rubber-hose-animation.html) |
| **Liquid / gooey motion** · `liquid-gooey` | Descriptive effect family | Specify continuous deformation, merging forms, or both. This is an interpretation to verify against a moving reference, not one standardized animation. | [Liquid Gooey author page](https://gooey.jakubantalik.com/) establishes the name; the page currently points to libraries.dev. The original effect was not evaluated here. |

“Motion graphics” is the broad practice; “kinetic typography” narrows it to animated type. “Snappy,” “bouncy,” “organic,” and “cinematic” describe intent until a reference and timing rules make them concrete. Lowercase “jitter” can describe irregular movement; **Jitter** is a product name.

## Precise technique glossary

The following definitions are verbatim excerpts from Emil Kowalski's installed [Animation Vocabulary](../../.agents/skills/animation-vocabulary/SKILL.md), Copyright © 2026 Emil Kowalski, [MIT License](../sources/emilkowalski-skills/LICENSE). This source supplies the wording; our grouping selects terms relevant to this research. The source's web-oriented examples do not imply an identical implementation in every tool.

### Text and reveals

- **Stagger** — Animate several items one after another with a small delay between each, creating a cascade.
- **Reveal** — Content is uncovered gradually, often by animating a clip-path or mask.
- **Typewriter** — Text appearing one character at a time, as if being typed.
- **Number ticker** — Digits rolling or counting up to a value.
- **Marquee** — Text or content that scrolls continuously in a loop.
- **Line drawing** — An SVG path that draws itself in, like an invisible pen tracing it.

### States and navigation

- **Morph** — One shape smoothly turns into another shape, e.g. Dynamic Island.
- **Shared element transition** — An element travels and transforms from one position into another, like a thumbnail expanding into a card.
- **Layout animation** — When an element's size or position changes, it animates to the new spot instead of snapping.
- **Origin-aware animation** — An element animates out of its trigger, like a popover growing from the button that opened it instead of from its own center which is the default in CSS.
- **Crossfade** — One element fades out as another fades in, in the same spot.

### Scroll

- **Scroll reveal** — Elements fade or slide into place as they enter the viewport.
- **Scroll-driven animation** — An animation whose progress is tied directly to scroll position.
- **Parallax** — Background and foreground move at different speeds while scrolling, creating depth.

### Timing and physical character

- **Spring** — Motion driven by physics (tension, mass, damping) rather than a set duration.
- **Bounce** — A spring that overshoots and settles, adding playfulness.
- **Stepped animation** — An animation that is divided into discrete steps, like a countdown timer.
- **Anticipation** — A small wind-up in the opposite direction before a move, hinting at what's about to happen.
- **Follow-through** — Parts of an element keep moving and settle slightly after the main motion stops, adding weight.
- **Squash & stretch** — Deforming an element as it moves to convey weight, speed, and flexibility.

### Repetition

- **Orbit** — An element circling around another in a continuous path.
- **Idle animation** — Subtle motion that plays while an element is just sitting there, waiting to be interacted with.

### Close terms to keep separate

- **Scroll reveal** is triggered when content enters view; **scroll-driven animation** continuously follows scroll progress. **Parallax** describes relative movement and depth, rather than the trigger alone.
- **Morph** changes form; **shared element transition** preserves an element's identity across views; **layout animation** follows a layout change. They can occur together.
- **Stepped animation** describes discrete changes. Stop motion describes a production technique. A stepped digital animation is not automatically stop motion.
- **Spring** describes the motion model; bounce describes overshoot in this glossary. Specify damping and settling behavior rather than requesting a generic “springy style.”
- **Rubber-hose animation** and **rubber-banding** are different. The first is a cartoon tradition; the second names resistance and return at an interaction boundary.

## Remotion and Jitter

| Tool | What the official sources establish | How to record it |
| --- | --- | --- |
| [Remotion](https://www.remotion.dev/docs/) | Programmatic video creation with React. Its [templates](https://www.remotion.dev/templates) cover captioning, code animation, audio visualization, and other outputs. Its [spring primitive](https://www.remotion.dev/docs/spring) exposes physical parameters. | Tool: Remotion, version and project; output: rendered video or selected player integration. Name the actual motion independently. A video of a UI does not establish its live interaction behavior. |
| [Jitter](https://jitter.video/templates/) | A motion design tool with templates for text, UI elements, logos, and other uses. Its [text documentation](https://help.jitter.video/en/articles/6500074-animate-text) separates letter, word, line, and whole-text animation units. | Tool: Jitter, source file/template URL, customization, export format, and embedding needs. Inspect the animation before using its template title as evidence of a particular effect. |

Jitter's catalogue contains names including **Snappy Text Stretch**, **Stretched Type Repeater**, **Morph: Inflating Text**, and **Glitch 01: Text Reveal**. Preserve those as provider reference titles, with the chosen template URL. Map an inspected example to our vocabulary; do not make each title a canonical aesthetic. Text and catalogue metadata were inspected in this pass; the moving templates were not visually evaluated.

Remotion and Jitter can produce many visual directions. Neither product name establishes a shared look or makes an exported motion asset an interactive app component. These are researched capabilities, not a claim that either environment was installed or tested in this task.

## Recipe inside a style record

Record the subject and properties that move; the trigger; duration or spring parameters; sequence and stagger; holds, frame cadence, or beat synchronization; repetition and interruption behavior; reduced-motion behavior; and the output/runtime/tool version. Include the inspected reference or timecode and a saved example. The [style template](STYLE-TEMPLATE.md) carries these fields.

These are proposed combinations to explore, not approved taste or populated folders:

| Context | Visual direction | Motion recipe to define |
| --- | --- | --- |
| Website landing page | Swiss Style | Kinetic typography with staggered masked reveals; specify reading order, trigger, and timing. |
| App card/detail flow | Minimalism | Shared element transition with a restrained spring; define interrupted and reduced-motion states. |
| Game character and menus | A referenced cartoon direction | Rubber-hose character movement; use a separately specified menu transition. |
| Game world | A referenced retro-anime direction | Cel-shaded characters with stepped poses; camera and HUD timing have independent requirements. |
| Launch video | A selected brand aesthetic | Stomp typography with explicitly timed cuts; Remotion or Jitter recorded as the chosen authoring tool. |

A still image supports visual analysis but cannot establish animation timing, physics, triggers, or continuity. Collect a clip or live interaction for those claims. General naming research does not change [personal taste coverage](../taste/COVERAGE.md).
