# Recent skills

```text
resources / sources / recent-skills
source    recent.design/skills
captured  2026-10-13
coverage  all 25 entries: 13 interface / 1 research / 8 development / 3 motion
install   .agents/skills/ in the kit root
```

[Recent](https://recent.design/skills) is the discovery source. The files come from the linked upstream repositories at the commits in [manifest.json](manifest.json). Five existing Emil skills remain unchanged. The other 20 listings resolve to 17 current packages, plus `grilling` as a required supporting skill and a bundled Agent Browser core guide. No upstream source files were modified.

## Every listed skill

### Interface

| Recent entry | Local instructions | Status / mapping |
| --- | --- | --- |
| [canvas-design](https://www.skills.sh/anthropics/skills/canvas-design) | [Open](../../../.agents/skills/canvas-design/SKILL.md) | Added.  |
| [quieter](https://www.skills.sh/pbakaus/impeccable/quieter) | [Open](../../../.agents/skills/impeccable/reference/quieter.md) | Added via Impeccable. Current upstream command; load impeccable/SKILL.md first. |
| [distill](https://www.skills.sh/pbakaus/impeccable/distill) | [Open](../../../.agents/skills/impeccable/reference/distill.md) | Added via Impeccable. Current upstream command; load impeccable/SKILL.md first. |
| [critique](https://www.skills.sh/pbakaus/impeccable/critique) | [Open](../../../.agents/skills/impeccable/reference/critique.md) | Added via Impeccable. Current upstream command; load impeccable/SKILL.md first. |
| [polish](https://www.skills.sh/pbakaus/impeccable/polish) | [Open](../../../.agents/skills/impeccable/reference/polish.md) | Added via Impeccable. Current upstream command; load impeccable/SKILL.md first. |
| [web-design-guidelines](https://www.skills.sh/vercel-labs/agent-skills/web-design-guidelines) | [Open](../../../.agents/skills/web-design-guidelines/SKILL.md) | Added.  |
| [prototype](https://www.skills.sh/emilkowalski/skills/prototype) | [Open](../../../.agents/skills/prototype/SKILL.md) | Already installed. Existing pinned Emil package retained. |
| [ui-skills](https://www.skills.sh/ibelick/ui-skills/ui-skills) | [Open](../../../.agents/skills/ui-skills-root/SKILL.md) | Added current router. Upstream now uses ui-skills-root; registry access uses its CLI. |
| [emil-design-eng](https://www.skills.sh/emilkowalski/skill/emil-design-eng) | [Open](../../../.agents/skills/emil-design-eng/SKILL.md) | Already installed. Existing pinned Emil package retained. |
| [make-interfaces-feel-better](https://www.skills.sh/jakubkrehel/make-interfaces-feel-better/make-interfaces-feel-better) | [Open](../../../.agents/skills/make-interfaces-feel-better/SKILL.md) | Added.  |
| [userinterface-wiki](https://www.skills.sh/raphaelsalaja/userinterface-wiki/userinterface-wiki) | [Open](../../../.agents/skills/userinterface-wiki/SKILL.md) | Added.  |
| [oklch-skill](https://www.skills.sh/jakubkrehel/oklch-skill/oklch-skill) | [Open](../../../.agents/skills/oklch-skill/SKILL.md) | Added.  |
| [extract-design-system](https://www.skills.sh/arvindrk/extract-design-system/extract-design-system) | [Open](../../../.agents/skills/extract-design-system/SKILL.md) | Added instructions. Extraction CLI and Chromium not installed. |

### Research

| Recent entry | Local instructions | Status / mapping |
| --- | --- | --- |
| [grill-me](https://www.skills.sh/mattpocock/skills/grill-me) | [Open](../../../.agents/skills/grill-me/SKILL.md) | Added. Includes the required grilling skill; IDEs without a Skill tool can read it directly. |

### Development

| Recent entry | Local instructions | Status / mapping |
| --- | --- | --- |
| [frontend-design](https://www.skills.sh/anthropics/skills/frontend-design) | [Open](../../../.agents/skills/frontend-design/SKILL.md) | Added.  |
| [shadcn](https://www.skills.sh/shadcn/ui/shadcn) | [Open](../../../.agents/skills/shadcn/SKILL.md) | Added.  |
| [agent-browser](https://www.skills.sh/vercel-labs/agent-browser/agent-browser) | [Open](../../../.agents/skills/agent-browser/SKILL.md) | Added instructions. Upstream entry stub plus a pinned local core guide; CLI/browser not installed. |
| [typescript-advanced-types](https://www.skills.sh/wshobson/agents/typescript-advanced-types) | [Open](../../../.agents/skills/typescript-advanced-types/SKILL.md) | Added.  |
| [tailwind-design-system](https://www.skills.sh/wshobson/agents/tailwind-design-system) | [Open](../../../.agents/skills/tailwind-design-system/SKILL.md) | Added.  |
| [vercel-react-best-practices](https://www.skills.sh/vercel-labs/agent-skills/vercel-react-best-practices) | [Open](../../../.agents/skills/vercel-react-best-practices/SKILL.md) | Added.  |
| [vercel-react-native-skills](https://www.skills.sh/vercel-labs/agent-skills/vercel-react-native-skills) | [Open](../../../.agents/skills/vercel-react-native-skills/SKILL.md) | Added.  |
| [vercel-composition-patterns](https://www.skills.sh/vercel-labs/agent-skills/vercel-composition-patterns) | [Open](../../../.agents/skills/vercel-composition-patterns/SKILL.md) | Added.  |

### Motion

| Recent entry | Local instructions | Status / mapping |
| --- | --- | --- |
| [apple-design](https://www.skills.sh/emilkowalski/skills/apple-design) | [Open](../../../.agents/skills/apple-design/SKILL.md) | Already installed. Existing pinned Emil package retained. |
| [animation-vocabulary](https://www.skills.sh/emilkowalski/skills/animation-vocabulary) | [Open](../../../.agents/skills/animation-vocabulary/SKILL.md) | Already installed. Existing pinned Emil package retained. |
| [review-animations](https://www.skills.sh/emilkowalski/skill/review-animations) | [Open](../../../.agents/skills/review-animations/SKILL.md) | Already installed. Existing pinned Emil package retained. |

## Use and portability

The files travel with this kit. Load the relevant SKILL.md and its required references when an IDE does not discover `.agents/skills/` automatically. Installing instructions does not run the skill, download its tools, register IDE-specific commands, or verify a design workflow. Existing project instructions, selected Taste criteria, and the user’s brief still govern.

- **Impeccable:** the four Recent names are now command playbooks inside one upstream package. Read [the entry skill](../../../.agents/skills/impeccable/SKILL.md), then the named playbook. Its launcher can fetch a binary on first use; it was not run. The skill documents a direct-file fallback when its launcher is unavailable. Hooks and helper agents were not registered.
- **UI Skills:** the current upstream router uses the `ui-skills` CLI to discover additional context. The router is installed; the remote registry was not mirrored and the CLI was not run.
- **Agent Browser:** [the bundled core guide](../../../.agents/skills/agent-browser/upstream-core/SKILL.md) includes references and templates for offline reading. Its executable and browser remain separate prerequisites; use the host’s available browser tools where appropriate.
- **Extract Design System:** the instructions require its CLI and Chromium for extraction. Neither was installed or tested in this pass.
- **shadcn:** the full [shadcn skill](../../../.agents/skills/shadcn/SKILL.md) is installed. The older `shadcn-ui` catalogue pointer is retained as history; load the installed skill before considering any duplicate installation.
- **Grill Me:** upstream now redirects to [grilling](../../../.agents/skills/grilling/SKILL.md), which is included. The alias is explicitly invoked, not automatic.
- **Canvas Design:** bundled fonts and their licenses are included; output rendering uses the destination machine’s available tools.
- **Web Design Guidelines:** the entry fetches live guidelines when used. React, React Native, Tailwind, and shadcn guidance require checking the actual project versions.

## Source receipts

Every copied file was checked against the pinned GitHub blob hash. The manifest records source path, destination, size, SHA-256, and attribution. Root licenses/notices were included where supplied, along with in-package licenses and font notices. No runtimes, browser downloads, global installs, credentials, or paid services were added.

| Repository | Pinned revision | License evidence |
| --- | --- | --- |
| [anthropics/skills](https://github.com/anthropics/skills) | [dbd4588f9e10](https://github.com/anthropics/skills/tree/dbd4588f9e1033efb41dad4bef2f7947c8993d44) | In-package Apache-2.0 licenses; font OFL notices; repository third-party notices. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | [245ad82def45](https://github.com/pbakaus/impeccable/tree/245ad82def45831dc56a21b683c7a1ff530b06cc) | Apache-2.0 and NOTICE.md. |
| [vercel-labs/agent-skills](https://github.com/vercel-labs/agent-skills) | [063bee94c3f4](https://github.com/vercel-labs/agent-skills/tree/063bee94c3f4df8453406c830b0a7df0f2860278) | React/composition SKILL.md metadata declares MIT. No repository-wide license file was present; web-design-guidelines has no license declaration. Preserve provenance and resolve that entry’s redistribution terms before public publication. |
| [ibelick/ui-skills](https://github.com/ibelick/ui-skills) | [9a0cb1e610e3](https://github.com/ibelick/ui-skills/tree/9a0cb1e610e3a1a4f0f2723bf2e7680ac1b89cf5) | MIT; license file included. |
| [jakubkrehel/make-interfaces-feel-better](https://github.com/jakubkrehel/make-interfaces-feel-better) | [35545ea1512a](https://github.com/jakubkrehel/make-interfaces-feel-better/tree/35545ea1512ad59fa463e6b1f95ca9c052981fe6) | MIT; license file included. |
| [raphaelsalaja/userinterface-wiki](https://github.com/raphaelsalaja/userinterface-wiki) | [256a954080c8](https://github.com/raphaelsalaja/userinterface-wiki/tree/256a954080c8bcf1b1ceb1e2a4079d1f24cf593a) | MIT; license file included. |
| [jakubkrehel/oklch-skill](https://github.com/jakubkrehel/oklch-skill) | [0e81f040e16d](https://github.com/jakubkrehel/oklch-skill/tree/0e81f040e16d48fcc61d3e1b7ea548542371321f) | MIT; license file included. |
| [arvindrk/extract-design-system](https://github.com/arvindrk/extract-design-system) | [1873741ba8de](https://github.com/arvindrk/extract-design-system/tree/1873741ba8dea755e35e6e15134f7918cd58e036) | MIT; license file included. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | [49dd158d1076](https://github.com/mattpocock/skills/tree/49dd158d1076134a641b33efb035946536778336) | MIT; license file included. |
| [shadcn-ui/ui](https://github.com/shadcn-ui/ui) | [30a58d4498f2](https://github.com/shadcn-ui/ui/tree/30a58d4498f270af1c1e981a7d78a15cf5740841) | MIT; license file included. |
| [vercel-labs/agent-browser](https://github.com/vercel-labs/agent-browser) | [d9570915f4dd](https://github.com/vercel-labs/agent-browser/tree/d9570915f4dd6504dee4070379d2c4f79d81dbb2) | Apache-2.0. |
| [wshobson/agents](https://github.com/wshobson/agents) | [46891e7e60da](https://github.com/wshobson/agents/tree/46891e7e60da0e52baf1050b7b6391b64e84c6d9) | MIT; license file included. |

The retained Emil packages use the [existing source receipt](../../history/sources/emilkowalski-skills.source.json) and MIT attribution.
