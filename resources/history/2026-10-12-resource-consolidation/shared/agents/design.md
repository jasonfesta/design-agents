# design agent

Supporting craft and research reference. The five current agents are in [instructions](../../instructions/README.md); this is not another agent entry point.

Consolidated working brief · October 12, 2026 · Jason Festa

The first priority is to **create designs closer to what Jason has in mind**, as he selected in the October 12 discussion of how to make this agent more useful. [TR-004](../taste/research.md#taste-ref-tr-004--designs-closer-to-jasons-intent) preserves that decision. Build from the existing **[DxA Git project](https://github.com/jasonfesta/dxa)**, bringing its resource guides, skills, and DesignJig method together with Design Agents’ tools and Research’s design references.

The [agent build plan](../../instructions/PLAN.md) defines the next implementation: Setup, Atlas, Taste, Dial, and Dream, each with its own Markdown spec. Resources holds the portable design-resource documents. It starts with one reproducible setup entry point and recorded sources. The plan does not yet create those execution capabilities.

This is the main brief. [Design resource research](../../resources/collections/reviewed.md) contains the reviewed shortlist; [Nero’s resource capture](../../resources/collections/nero.md) preserves his links and source posts; [workspace sources](../../resources/history/workspace-sources/README.md) retains the underlying Markdown and data from all three workspaces. [Design MCP landscape](../../resources/research/tooling/mcp-landscape.md) covers the accompanying connection research.

For Jason's requested simple restart in another repo, use the [three-file starter](../../resources/history/starter/START.md): instructions, reusable taste memory, and project state. The [research](../../resources/history/portability-research.md) supports testing personal examples, scoped critiques, and visual iteration while keeping startup context small. This package implements portability; its effect on design quality still needs the proposed pilot.

The [Taste Agent](../../instructions/TASTE.md) organizes Jason's labeled research, historical agent material, ongoing [taste memory](../taste/MEMORY.md), and [learning over time](../taste/LEARNINGS.md). Its four supporting roles are Research Curator, Archivist, Memory Keeper, and Learning Agent. The structure and initial records are drafted; full backlog recovery and separate agent execution are not configured.

Start with **[Dial](../../instructions/DIAL.md)** for Jason's portable, all-Markdown direction workflow. It includes [categories and style branches](../workflow/TAXONOMY.md), historical and active research, system extraction, application, conversational controls, saved versions, and [Dream Mode instructions](../workflow/DREAM.md). The [Fashion example](../workflow/FASHION-EXAMPLE.md) demonstrates the contract with explicitly unapproved values. No runtime is required; no personal theme or baseline has been selected by drafting the kit.

The four earlier guides remain expanded workspace references: [research library](../../resources/research/research-library.md), [research brief](../../resources/research/research-brief.md), [design system](../../resources/research/design-system.md), and [apply and run](../../resources/research/apply-and-run.md). Reuse their evidence and existing records; Direction Kit supplies the portable control and state contract. Actual code and rendered previews are outputs when requested.

The [Dream Mode agent](../../instructions/DREAM.md) adds a proposed overnight refinement stage, around 3 a.m.: work quickly and explore widely during the day, then improve the resulting designs against Jason's approved standards of taste for each category. It applies design judgment and repairs drift while preserving the concepts and alternatives developed during the day. Its instructions are drafted; automation and category enrollment are not configured.

The [recovered October 5–6 Graphical and DialKit research](../../resources/research/research-library.md#ref-004--josh-pucketts-dialkit-and-the-recovered-founder-research) adds Jason's earlier instruction to start from Josh Puckett's DialKit. Its source is already cloned locally. Its controls, versions, exact-value export and agent-update instruction inform Direction Kit. Jason's current requested [component workbench](../workflow/COMPONENTS.md) turns image references into editable components, binds DialKit with matching initial values, and supports prompt-driven tuning. Save each component variant for its specific style, then apply a pinned revision to a design. Each style keeps independent values and versions. The working component demo verifies the control library; this image-to-design integration remains to be built. Graphical's internal implementation and purchased `GUI.md` remain uninspected.

## Jason’s direction

Before personal taste recommendations, check [taste coverage](../taste/COVERAGE.md) and follow [Define taste before recommending it](../workflow/TASTE.md). Product/platform/page/category menus are empty research containers until their scoped definitions are established. Tell Jason upfront when research is missing, partial, draft, or inaccessible; carry that state into every design and Dream handoff.

- Keep the general research chat in Research and put its findings in Design Agents.
- Create a separate chat named exactly `design agent`, lowercase, in this workspace.
- Find distinctive UI directions where designers and design engineers share their work on X, then connect the references to their sites, makers, and GitHub implementations.
- Capture the UI resources shared by `@neropursue`, retaining original posts and clear coverage limits.
- Start from DxA. A more personal Git repository is a possible later step; its name, visibility, and publication scope have not been chosen.

Jason explicitly liked Reelfolio, Inspora, 60fps, Mobbin, Land-book, Refero, Brand Guidelines, and Backgrounds Supply. Other supplied references include Designers and Machines, Fglibs, Planes, Sam Asante’s Liquid Glass, LukyVJ’s GSS, Blake Shao’s brushes, and seven component libraries: affectUI, Kobra, Arc UI, EvilCharts, Transitions.dev, beUI, and BoardUI. These suggest interest in expressive motion, tactile controls, glass, shaders, and implementation-ready references. That interpretation is useful starting context, not a complete personal design system.

## What each workspace contributes

| Workspace | Evidence carried forward | How it should help the agent |
| --- | --- | --- |
| **DxA** | Public resource guide; September 24 audit of 151 external skill entries across 18 sections, plus six router guides; seven original DxA skills; five workflow recipes; DesignJigs; local shader, glass, typography, and creative-code studies. | Supply the structure, reusable instructions, implementation references, review discipline, and adjustable design-workbench method. The entry count is not a count of installed tools or unique repositories. |
| **Design Agents** | Local installation records; September 23 design-signal brief; design-team watch records; October 12 design MCP landscape. | Reuse available capabilities, retain team and maker context, and choose connections for the particular design task. |
| **Research** | The current 143-record resource catalogue, including 131 Nero-linked URLs and 29 site/repository reviews; the August creative-AI landscape; six adjacent market and evaluation research documents. | Connect inspiration to editable implementation and help reason about taste memory, output quality, evaluation, and the wider tool landscape. |

The archive holds **45 source Markdown documents and three related JSON records**, with original paths and SHA-256 hashes in its [manifest](../../resources/history/workspace-sources/manifest.md). The documents retain their original dates. Historical company claims, event wording, job openings, and setup status are not made current by copying them. Third-party code, runtime environments, and artwork were not duplicated into this archive.

## Start from the DxA Git baseline

| Item | Captured state |
| --- | --- |
| Local checkout | `/Users/jasonfesta/Documents/ChatGPT/DxA` |
| Origin | `https://github.com/jasonfesta/dxa.git` |
| Branch | `main` |
| HEAD | `d7b2a2dd8515e08a620c97e82d9ab4a6cdb62ae2` |
| Existing local edits | Modified `README.md`, `resources/README.md`, and `resources/updates.md`; untracked `resources/designjigs.md`. |

Use the working-tree documents, including those DesignJig edits, when developing the personal version. The snapshots preserve them. This research handoff has not changed DxA, committed its work, or created a remote repository.

DxA already separates `resources/`, `skills/`, `workflows/`, `agents/`, `website/`, and `assets/`. Keep that useful structure when adapting it. Its original skills are `dxa-catalogue`, `design-mcps`, `figma-code`, `generative-media`, `product-craft`, `research-papers`, and `design-review`. [The skill index](../../resources/history/workspace-sources/dxa/skills/README.md) explains their scope. The original DxA material has an [MIT license](../../resources/history/workspace-sources/dxa/LICENSE); third-party code, linked resources, and supplied artwork retain their own terms.

The personal layer can later add selected references, approved taste preferences, owned tokens, project constraints, design decisions, and reusable jigs. Keep those personal records and any private team research out of public publication until the intended repository scope is chosen.

## A practical design workflow

1. **Frame a real task.** Establish the audience, core action, actual content, existing product system, output format, and constraints.
2. **Select a small reference set.** Use product screenshots and flows for behavior, site collections for art direction, motion references for timing, and creator demos for unusual interactions. Record what each reference contributes.
3. **Find an editable route.** Follow the reference to its official implementation, repository, or component registry. Check compatibility, licensing, and setup requirements for this project. Prefer tools already available.
4. **Build a DesignJig.** Expose the variables that matter—type, spacing, color, density, motion, state, or content—in a bounded live workbench. Let Jason compare and tune the direction. When he requests alternatives, use the installed `prototype` skill for meaningfully different, working variants and its picker; name the decision each variant explores.
5. **Implement the chosen result.** Export or translate the choices into tokens, components, code, or editable Figma work. Include the necessary loading, empty, error, success, and recovery states. Apply `emil-design-eng` and the relevant web, mobile, or native skill below; reuse the product's tokens and decide whether motion is useful before adding it.
6. **Review behavior and presentation.** Check the main task, keyboard interaction, responsiveness, content overflow, reduced motion, visual fidelity, and the relevant browser constraints. Use the scoped motion-review, performance, or worst-case-data workflow when the task calls for it. Record what was actually tested, including the limits of desktop emulation for touch interactions.
7. **Retain the decision.** Save the chosen values, source references, rationale, and rejected alternatives that explain a useful tradeoff. Turn explicit feedback into reusable preferences without treating every experiment as a permanent rule.

This combines DxA’s [five workflow recipes](../../resources/history/workspace-sources/dxa/workflows/README.md) with its [DesignJig guide](../../resources/history/workspace-sources/dxa/resources/designjigs.md). The agent supplies the adjustable workbench and implementation; Jason directs the design judgment.

## Installed craft foundation

On October 12, 2026, Jason requested the full [emilkowalski/skills](https://github.com/emilkowalski/skills) repository as the initial craft foundation while we develop our own. All **15 skills, eight supporting guides, the upstream README, performance cheatsheet, license, and repository metadata files** are downloaded. The 29-file snapshot occupies 299,324 bytes (about 292 KiB) and requires no installed runtime or application dependencies.

The unchanged source lives in [emilkowalski-skills](../sources/emilkowalski-skills/README.md), pinned to commit `2d228630ba1446365f614a108cb8252f1feda202`. The working skills live in `.agents/skills/`. The [source manifest](../sources/emilkowalski-skills.source.json) records file hashes and local compatibility changes; the [local router](../../.agents/skills/emilkowalski-skill/SKILL.md) replaces the old download-only pointer. Read the selected skill in full and then its relevant supporting files rather than loading the whole collection into every task.

| Task | Installed skill | Supporting material or scope |
| --- | --- | --- |
| UI polish and component decisions | [emil-design-eng](../../.agents/skills/emil-design-eng/SKILL.md) | Core craft philosophy, motion decisions, gestures, performance, and accessibility. |
| Build web animation | [animate](../../.agents/skills/animate/SKILL.md) | [Recipes](../../.agents/skills/animate/RECIPES.md); implementation from purpose through interruption and exit. |
| Build native mobile animation | [animate-expo](../../.agents/skills/animate-expo/SKILL.md) | [Recipes](../../.agents/skills/animate-expo/RECIPES.md); UI-thread motion, gestures, sheets, haptics, and transitions. |
| Diagnose dropped frames | [animation-performance](../../.agents/skills/animation-performance/SKILL.md) | Rendering costs, CSS/WAAPI/JS choice, React updates, and measured fixes. |
| Name a motion effect | [animation-vocabulary](../../.agents/skills/animation-vocabulary/SKILL.md) | Translate a visual description into a precise term. |
| Design fluid physical interactions | [apple-design](../../.agents/skills/apple-design/SKILL.md) | Direct manipulation, spring interruption, velocity, materials, typography, and reduced motion; web interpretation of Apple's principles. |
| Implement or debug Sonner toasts | [ask-sonner](../../.agents/skills/ask-sonner/SKILL.md) | [API reference](../../.agents/skills/ask-sonner/API.md). |
| Stress-test UI with realistic data | [break-ui](../../.agents/skills/break-ui/SKILL.md) | [Case catalogue](../../.agents/skills/break-ui/CATALOG.md); dev-only demo/worst-case toggle and findings. |
| Find useful places for motion | [find-animation-opportunities](../../.agents/skills/find-animation-opportunities/SKILL.md) | Proposals and rejected candidates; does not implement changes. |
| Audit motion across a codebase | [improve-animations](../../.agents/skills/improve-animations/SKILL.md) | [Audit rules](../../.agents/skills/improve-animations/AUDIT.md) and [plan template](../../.agents/skills/improve-animations/PLAN-TEMPLATE.md); findings and plans. |
| Fix mobile web behavior | [mobile-native](../../.agents/skills/mobile-native/SKILL.md) | Viewport, touch, scrolling, safe areas, keyboard, inputs, and browser chrome. |
| Choose a UI library on request | [pick-ui-library](../../.agents/skills/pick-ui-library/SKILL.md) | Curated choices; inspect installed dependencies and avoid unnecessary replacement. |
| Explore alternative UI directions on request | [prototype](../../.agents/skills/prototype/SKILL.md) | [Picker specification](../../.agents/skills/prototype/PICKER.md); isolated working variants, then promote the selected result. |
| Review animation code on request | [review-animations](../../.agents/skills/review-animations/SKILL.md) | [Standards](../../.agents/skills/review-animations/STANDARDS.md); findings and verdict. |
| Write or review Swift | [write-swift](../../.agents/skills/write-swift/SKILL.md) | Value modeling, concurrency, API design, memory, and testing; check the actual compiler and deployment targets. |

### How this changes our work

**Motion begins with purpose and frequency.** Keep frequent and keyboard-driven work immediate. Use animation to explain a state change, preserve spatial relationships, acknowledge input, or prevent a jarring transition. Start with the smallest implementation that serves that purpose. Use existing easing and duration tokens; ordinary UI transitions generally stay below 300 ms, with longer sheets or explanatory sequences justified by their function.

**Interactions remain responsive while moving.** Provide press feedback immediately. Anchor popovers and tooltips to their trigger, keep centered modals centered, and avoid entrances from zero scale. Use interruptible transitions or springs for rapidly repeated actions and gestures. Preserve pointer continuity, release velocity, and sensible resistance at boundaries where those behaviors apply.

**Accessibility and device behavior are part of the implementation.** Provide reduced-motion alternatives and keyboard operation; gate hover effects by input capability. On mobile web, account for dynamic viewport height, safe areas, scrolling, text selection, input zoom, and the on-screen keyboard without disabling user zoom. Distinguish code inspection, emulation, and real-device verification.

**Performance follows evidence.** Prefer transforms and opacity, enumerate transition properties, avoid per-frame React state updates, and identify the cause of dropped frames before adding optimization hints. Treat GPU acceleration, browser support, library APIs, and Swift-version claims in the imported material as things to verify against the actual project when used.

**Exploration and review fit the requested job.** Compare working variants that differ in layout, density, behavior, or character. Test plausible long, short, empty, missing, localized, and extreme content when reviewing resilience. Use focused reviews for individual motion changes and audits for broader plans. The installed `prototype`, `pick-ui-library`, and `review-animations` retain their upstream explicit invocation policy. A request to build or fix something already authorizes the corresponding implementation work; do not let an advisory skill replace that outcome with an unrequested plan.

**Our agent remains personal and product-aware.** Emil's suite is an attributed starting point, not a claim that these are our original rules or the final visual identity. Jason's direction, established product tokens, accessibility, and documented project decisions govern conflicts. Continue using the existing Figma, document, presentation, and Remotion capabilities for their outputs. Record personal preferences and decisions here as they are actually chosen.

### Source maintenance

Preserve the [MIT license](../sources/emilkowalski-skills/LICENSE), copyright notice, and pinned source when adapting this material. Each installed skill also carries the license. The only initial content adaptation is translating the three upstream `disable-model-invocation` flags into Codex `agents/openai.yaml` policy files; their instruction bodies and all supporting guides are preserved. Future updates should compare the new upstream revision with this snapshot, inspect added dependencies, and preserve local agent decisions before replacing installed files. See [local installation records](../docs/setup/LOCAL-INSTALLATIONS.md) for the installed scope and verification.

## Resources worth bringing into that workflow

| Design decision | Starting references |
| --- | --- |
| Real product flows and states | Mobbin, Refero, Page Flows; use the catalogue’s review state before relying on details. |
| Website direction and typography | Land-book, Recent, Inspora, Refero Styles, Brand Guidelines, and the DxA typography register. |
| Motion and tactile controls | 60fps, Planes, Transitions.dev, Fluid Functionalism, Motion, and DxA’s motion references. |
| AI-product and dashboard UI | affectUI, Kobra, BoardUI, Arc UI, beUI, and EvilCharts. |
| Glass, shaders, and creative coding | Sam Asante Liquid Glass, Aave’s glass article, liquid-dom, shadercn, GSS, Kool Brushez, and DxA’s local studies. |
| Presentation and reusable assets | Reelfolio, Backgrounds Supply, and the existing Remotion and document capabilities when the output calls for them. |

The [143 structured records](../../resources/catalogue.md) preserve URLs, categories, original X posts, GitHub links where identified, review state, and notes. Most Nero discoveries are source-post checks rather than independent product reviews. A catalogue entry does not mean a tool is installed or production-ready.

## Connections and local tools

The separate [MCP research](../../resources/research/tooling/mcp-landscape.md), completed in the chat **Inspect 60fps.design MCP**, documents twelve providers beyond 60fps: Mobbin, Refero, Fglibs, Inspo, Motion, Planes, BoardUI, beUI, Arc UI, Magic UI, React Bits Pro, and 21st. Its official setup links and access requirements are the source of record. Inspo and Inspora are different products.

That research reported 60fps configured with license authentication pending and Mobbin tools available in that chat. These are recorded observations, not a guarantee of the next chat’s live connection state. Check available tools before connecting anything again. Published MCP setup, configured endpoints, authenticated access, and successful workflow execution are separate evidence levels. Planes and React Bits use the shared shadcn MCP route; BoardUI also documents its own server.

The existing [local installation record](../docs/setup/LOCAL-INSTALLATIONS.md) lists screenshot-to-code, Open-AI-Design-Agent, Superdesign, and the full Emil Kowalski suite installed on October 12. Historical application build or backend smoke checks passed where documented; generation was not verified and credentials were not added. Emil's suite adds instructions and references without runtime dependencies. The workspace’s existing preference is lightweight installation and reuse of Figma, presentation, document, and Remotion capabilities. Inspect size and dependencies before installing an upstream skill; follow `AGENTS.md` for substantial runtimes or bundles.

The September design-signal work observed an X Pro deck of eight Designers columns covering 177 handles. It led to the [design-team watch](../../resources/history/team-watch/README.md), with organizations and evidence events kept separately. Its initial records include Ramp, Mercury, Xbox, Vercel, Shopify, and Linear. General UI inspiration belongs in this resource catalogue; team formation, hiring, process, and shipped-work signals retain the watch’s existing schema. No watch schedules were changed as part of this handoff.

## What the broader Research documents add

The [creative-AI landscape](../../resources/history/workspace-sources/research/design-creative-ai-company-landscape.md) is an August 19 snapshot of design and creative tooling. Its useful strategic thread is the combination of brand and taste context, editable outputs, and a feedback loop that evaluates design results. It supplies background for a personal agent, not current product or model rankings.

Six adjacent Research documents cover AI labs and reinforcement learning, evaluation environments, vertical AI, legal tools, cybersecurity, and healthcare. They are preserved and indexed in [workspace sources](../../resources/history/workspace-sources/README.md). Their main relevance here is how domain context and evaluation can make agents useful. Their detailed market claims have not been revalidated in this handoff.

## Nero capture and remaining limits

The browser pass reviewed **525 distinct surfaced posts**, combining 507 profile posts and 158 Latest link-search posts with overlap, from **May 6, 2025 through October 12, 2026**. Thirty truncated posts were expanded. The visible profile and link search reached their ends; a link search before May 7, 2025 showed no results.

The catalogue retains **131 Nero-linked resource URLs**: 120 exact displayed URLs plus card-preview destinations and individual UI-skill paths. It preserves repeated source posts and keeps distinct products separate. A few creator-context links are included alongside the UI sites. The [coverage log](../../resources/collections/nero-coverage.md) records exclusions and unresolved artifact leads.

This captures the UI-resource lists that surfaced during the pass. X does not provide proof of a complete account archive: deleted, private, unindexed, omitted, image-only, and video-only links may be missing. Chrome history yielded no usable results; its internal history page was blocked by browser policy. No history completeness claim is made.

“OnDesign” is still unidentified. Do not equate it with open-design.ai, opendesign.dev, or DxA’s nexu-io/open-design reference without Jason’s URL. Metalforge’s destination failed to load; some link-card destinations and skill subpages remain discovery leads. Prices, licenses, and browser requirements should be checked at the point of implementation or purchase.

## Proposed first design and training loop

Jason selected the outcome above; the following implementation is a proposal for discussion. The first screen, references, and visual taste definition remain unset.

1. **Make the intended result concrete.** Assemble a short working brief from the actual task, content, references, qualities to preserve, and qualities to avoid. Identify which part of each reference contributes to the result. Reuse known instructions and ask only about consequential gaps. Label interpretations so Jason can correct them without completing a long intake form.
2. **Establish a faithful starting point.** Follow the existing image-reference contract: reproduce the selected screenshot in editable code, compare at the target viewport, preserve the reconstruction, and bind DialKit without changing its appearance. Keep source fidelity separate from whether the adapted design meets Jason's intent.
3. **Adapt and show the work.** Apply the requested changes to that starting point. Show the rendered design with a short account of the choices made and unresolved interpretations. Preserve each style kit independently. When alternatives are requested, make each answer a specific design question.
4. **Learn from the correction.** Retain the before/after revisions, Jason's actual feedback, the reason where supplied, and the applicable scope. Translate feedback into explicit control or code changes. Use the existing research, memory, and learning records; an agent-inferred explanation remains a hypothesis.
5. **Check the lesson on subsequent work.** Apply supported lessons to another relevant screen and ask whether the result is closer to the intended design. Compare repeated corrections and accepted decisions under similar task conditions. Keep visual preference, reproduction fidelity, and functional verification separate; none establishes the others.

Training initially means better retrieval of examples, scoped memory, and working instructions. No model-weight training pipeline is specified or configured. A successful revision shows that a correction was implemented; a later accepted application provides evidence that the lesson transferred. The agent's favorable self-review cannot supply that evidence.

The proposed first proof is one real screen, a reference, a feedback-and-revision round, and a second screen in the same scope. The existing [first executable prototype](../../tools/dialkit/PERSONAL.md#first-image-reference-prototype) owns implementation details; [Taste Agent](../../instructions/TASTE.md) owns how supported learning enters memory. Dream Mode follows its existing baseline and enrollment requirements.
