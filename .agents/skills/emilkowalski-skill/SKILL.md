---
name: emilkowalski-skill
description: Route requests about Emil Kowalski's installed design-engineering suite to its local skills for UI craft, animation, mobile behavior, prototyping, Swift, Sonner, and focused reviews. Use when the user names Emil or asks which of his skills fits; use a named child skill directly for a concrete task.
metadata:
  upstream: https://github.com/emilkowalski/skills
  revision: 2d228630ba1446365f614a108cb8252f1feda202
  installation: project-local
---

# Emil Kowalski — installed craft suite

All 15 upstream skills and eight supporting guides are already installed beside this router. Do not run the old `emilkowalski/skill` install command. Choose the matching local skill and read its full instructions, then the references it needs. The [agent brief](../../../resources/agents/craft-foundation.md#installed-craft-foundation) explains how this suite supports our personal design agent.

| User task | Read | Supporting reference |
| --- | --- | --- |
| Polish UI or make component craft decisions | [emil-design-eng](../emil-design-eng/SKILL.md) | Core philosophy and implementation details. |
| Build a web animation or transition | [animate](../animate/SKILL.md) | [RECIPES.md](../animate/RECIPES.md) |
| Animate an Expo or React Native interface | [animate-expo](../animate-expo/SKILL.md) | [RECIPES.md](../animate-expo/RECIPES.md) |
| Diagnose stutter or dropped frames | [animation-performance](../animation-performance/SKILL.md) | Rendering pipeline and diagnosis. |
| Name an observed animation effect | [animation-vocabulary](../animation-vocabulary/SKILL.md) | Motion glossary. |
| Design fluid gestures, springs, materials, or physical continuity | [apple-design](../apple-design/SKILL.md) | Apple's principles translated to web behavior. |
| Set up or debug Sonner toasts | [ask-sonner](../ask-sonner/SKILL.md) | [API.md](../ask-sonner/API.md) |
| Stress-test a UI with realistic worst-case data | [break-ui](../break-ui/SKILL.md) | [CATALOG.md](../break-ui/CATALOG.md) |
| Find worthwhile places to introduce motion | [find-animation-opportunities](../find-animation-opportunities/SKILL.md) | Proposes and filters; does not implement. |
| Audit an app's motion and prepare a roadmap | [improve-animations](../improve-animations/SKILL.md) | [AUDIT.md](../improve-animations/AUDIT.md), [PLAN-TEMPLATE.md](../improve-animations/PLAN-TEMPLATE.md) |
| Fix mobile web touch, viewport, scroll, or input behavior | [mobile-native](../mobile-native/SKILL.md) | Mobile browser behavior; distinguish real-device checks. |
| Explicitly request the library-selection workflow | [pick-ui-library](../pick-ui-library/SKILL.md) | Existing dependencies and curated options. |
| Explicitly request prototype variants | [prototype](../prototype/SKILL.md) | [PICKER.md](../prototype/PICKER.md) |
| Explicitly request an animation review | [review-animations](../review-animations/SKILL.md) | [STANDARDS.md](../review-animations/STANDARDS.md) |
| Write, review, or migrate Swift | [write-swift](../write-swift/SKILL.md) | Check compiler and deployment targets before using examples. |

## Applying the suite here

Use `emil-design-eng` for the craft foundation and the smallest relevant specialist for the requested outcome. For animation, first decide whether it is useful, then choose purpose, tool, properties, curve, timing, interruption, exit, and reduced-motion behavior. Keep existing product tokens and user decisions.

`pick-ui-library`, `prototype`, and `review-animations` preserve upstream explicit invocation through their Codex policy files. Do not launch these workflows merely because another skill mentions them. `find-animation-opportunities` proposes motion; `improve-animations` produces audit plans; `animate` and `animate-expo` implement it. Choose the mode that fulfills the user's task. Existing authorization to build or fix carries through; an advisory workflow should not stop authorized implementation.

For deliverables in Figma, slides, documents, or Remotion, keep using the existing output-specific capabilities. Platform and library claims in the source are a starting reference: verify compatibility and performance in the actual project. State which visual and real-device checks were possible.

## Source and future personalization

The [complete source snapshot](../../../resources/history/sources/emilkowalski-skills/README.md) is unchanged at the revision above. The [manifest](../../../resources/history/sources/emilkowalski-skills.source.json) records all source files and the installed metadata adaptations. The upstream [performance cheatsheet](../../../resources/history/sources/emilkowalski-skills/performance-cheatsheet.md) remains available.

Copyright (c) 2026 Emil Kowalski. The imported material uses the [MIT license](LICENSE). Retain attribution when copying or adapting it. Add personal conventions to the project's agent documents and record deliberate skill changes; compare upstream revisions before updating.
