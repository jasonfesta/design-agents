# DesignJigs

[Home](../README.md) · [Directory](README.md) · [Agents](agents.md) · [MCPs](mcps.md) · [Skills](skills.md)

DesignJigs are small, purpose-built tools that help a designer steer an agentic workflow with visible controls, constraints, and live feedback.

They borrow their name from manufacturing and woodworking jigs: tools that hold material, guide a tool, or constrain a repeated operation so the result is more accurate. In AI-assisted product work, the material is a design space and the tool is an agent. A DesignJig gives the designer handles for the variables that matter.

## Why they matter

DesignJigs make agent output more relevant because they move the design conversation from a one-shot prompt into an adjustable working surface.

| Prompt-only workflow | DesignJig workflow |
| --- | --- |
| Ask for one answer. | Expose the important variables. |
| Regenerate when something feels off. | Tune the result directly. |
| Hide tradeoffs in prose. | Show tradeoffs through controls and previews. |
| Let the model make taste decisions implicitly. | Keep human judgment in the loop. |
| Treat the prototype as the deliverable. | Treat the prototype as an instrument for deciding. |

A good jig does not try to replace Figma, code, research, or critique. It creates a temporary cockpit for one design decision: spacing, motion, density, visual hierarchy, tone, color, content structure, state behavior, component variants, or agent interaction.

## The Maggie Appleton pattern

Maggie Appleton uses "jigs" for interactive AI-generated prototypes: an agent builds a live surface with controls such as sliders, color pickers, animation settings, and variables, then the designer tunes the result in the browser.

In the Pragmatic Engineer conversation, the example is a GitHub Next homepage prototype with controls for background color, map rotation speed, hover scale, and motion behavior. The transcript frames the pattern as "Figma-like tools dynamically built for you." The agent makes the control surface; the designer uses it to explore the design space.

Sources:

| Source | What it contributes |
| --- | --- |
| [Pragmatic Engineer podcast transcript mirror](https://muckrack.com/podcast/the-pragmatic-engineer-podcast/episodes/2623783-design-engineering-with-maggie-appleton/) | Transcript passages describing jigs with sliders, variables, color controls, animation speed, and a "build your own Figma" framing. |
| [Pragmatic Engineer article](https://newsletter.pragmaticengineer.com/p/design-engineering-with-maggie-appleton) | Conversation summary describing Maggie's personal Figma-like "Jigs" and the woodworking analogy. |
| [LavX summary](https://news.lavx.hu/article/design-engineering-with-maggie-appleton-building-with-judgment-in-the-age-of-ai-agents) | Concise secondary summary of jigs as AI prototypes with adjustable controls. |

## Adjacent uses in GitHub and agent tooling

The term "jig" is also appearing in AI engineering systems. These are not visual DesignJigs, but they are relevant because they use the same core idea: constrain work so agents produce more consistent outcomes.

| Project or article | Jig pattern | DesignJig relevance |
| --- | --- | --- |
| [duronext/jig](https://github.com/duronext/jig) and [Jig docs](https://duronext.github.io/jig/) | A team workflow framework for AI-assisted engineering. It defines a pipeline from discover through learn, with skills and quality gates. | Shows the manufacturing metaphor applied to agent workflows: shared stages and gates act like process jigs. |
| [gregberns/kerf](https://github.com/gregberns/kerf) | A spec-writing CLI where "jigs" are process templates for an agent to move through problem-space, decomposition, research, and spec passes. | Useful contrast: process jigs control the agent's work sequence; DesignJigs control a designer's exploration surface. |
| [ArchCodex article](https://dev.to/stefanve/i-built-a-2300-file-codebase-with-ai-heres-the-jig-i-built-to-prevent-architectural-drift-2dk3) | Frames architecture constraints as a jig that helps LLM-generated code belong to a codebase rather than merely run. | Reinforces that jigs encode local judgment and constraints at the moment of generation. |
| [RiffOn summary of disposable jigs](https://riffon.com/insight/ins_lpfsmtdakx9q) | Describes disposable command centers for complex one-off tasks, giving visibility and step-by-step control instead of a black-box script. | Closest software cousin to DesignJigs: a temporary UI for seeing and steering a hard task. |

## Types of DesignJigs

| Type | Controls | Useful when |
| --- | --- | --- |
| Typography jig | Font, scale, line height, measure, tracking, optical size, contrast. | The brand voice or readability depends on subtle type decisions. |
| Color jig | Palette, semantic roles, background, accent, contrast, state colors, dark-mode variants. | A design needs taste, accessibility, and brand fit at the same time. |
| Layout jig | Grid, spacing, density, panel width, responsive breakpoints, ordering, section emphasis. | Several plausible layouts exist and screenshots are too static. |
| Motion jig | Duration, easing, spring stiffness, delay, choreography, scroll thresholds, hover response. | The feel matters and cannot be judged from a still image. |
| Component jig | Props, states, variants, content length, disabled/loading/error behavior. | A component needs to survive realistic product states. |
| Content jig | Tone, density, labels, examples, empty states, hierarchy, audience assumptions. | Copy and structure shape the product more than styling does. |
| Agent-interaction jig | Intent capture, progress, approvals, interruption, correction, recovery, trace display. | A person needs to steer an agent without trusting a black box. |

## What a good DesignJig includes

1. A clear decision: name the thing being tuned, such as "homepage motion direction" or "settings panel density."
2. A bounded search space: include only the controls that matter for this decision.
3. Live preview: make changes visible immediately enough to compare.
4. Realistic states: include content lengths, loading, empty, error, disabled, hover, focus, and mobile cases when relevant.
5. Constraints: encode brand, accessibility, implementation, and component-system limits.
6. Capture: make it easy to export choices as tokens, settings, screenshots, specs, or code.
7. A discard path: treat the jig as disposable unless it becomes a reusable design-system tool.

## Prompt pattern

Use this when asking an agent to build a DesignJig:

```text
Build a DesignJig for [decision].

The jig should expose controls for [variables].
Keep the search space bounded by [brand/component/technical constraints].
Show live preview states for [desktop/mobile/states/content examples].
Include a way to copy or export the selected settings.
Use real controls: sliders for numbers, swatches for colors, toggles for booleans,
segmented controls for modes, and tabs for views.
Do not bury the important variables in code.
The goal is to help a designer make a judgment, not to produce a final mockup.
```

## Review checklist

Before calling a DesignJig useful, check:

| Question | Pass condition |
| --- | --- |
| Does it expose the right variables? | The designer can adjust the decision without editing code or reprompting. |
| Does it constrain irrelevant variance? | The jig avoids turning every possible CSS value into a control. |
| Does it show real product states? | At least the risky states for the decision are visible. |
| Does it preserve designer agency? | The agent builds the workbench; the human makes the taste call. |
| Can choices leave the jig? | Settings, tokens, code, screenshots, or specs can be copied out. |
| Is disposal acceptable? | The team knows whether this is a one-off instrument or a maintained tool. |

## Research notes

DesignJig is DxA's term for the visual, product-design version of the jig pattern. The current public material is mostly practice writing, podcast discussion, and GitHub repositories rather than formal research. Treat these entries as source-reviewed inspiration, not proof that one workflow is universally superior.

The stable principle is simple: when AI makes generation cheap, judgment becomes the scarce resource. DesignJigs give judgment a handle.
