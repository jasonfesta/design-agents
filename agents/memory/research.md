# Labeled taste research

Owner: Research Curator · Updated October 13, 2026

Capture the research Jason supplies with his original labels, reactions, and intended use. Follow the [Taste Agent contract](../TASTE.md). The existing [research library](../../resources/guides/direction-research.md) and [resource catalogue](../../resources/sources/source-records.md) remain the source records for previously collected references.

## Intake format

Check [coverage](COVERAGE.md) before personal taste conclusions. Fill a branch's [taste definition](../../resources/guides/workflows/taste.md) from reviewed evidence and Jason's feedback. Capturing a reference begins collecting; it does not establish taste.

Organize intake with **apps / websites / games → device type → viewport size → category → subcategory → style**, using the [research index](CATEGORIES.md) and [shared category/style definitions](../../resources/structure.md). Preserve original labels alongside stable IDs. Each activated category can contain several style families and treatments, with its own evidence and recommendations for Dream Mode.

```md
### TASTE REF <unique ID>
- Captured date / source date:
- Origin: Jason supplied / recovered history / agent discovered
- Source: URL, local path, chat and message ID, or existing catalogue ID
- Exact target: screenshot, screen, section, timecode, or revision
- Jason's original label and words:
- Design type: apps / websites / games
- Viewport type / size profile, units, and orientation:
- Product category set and ID / interface subcategory / narrower subject scope:
- Page/screen detail and target platform:
- Style family ID / treatment ID (variation):
- Branch ID: <type/device/size/category/subcategory/style, when known>
- Style fit and reason: unassessed / candidate match / supported match / not a fit
- Design aspects:
- Intent: study / borrow / avoid / experiment / approved example
- Scope:
- Direct observations:
- Agent interpretations and proposed labels:
- Qualities to retain / exclusions:
- Review state: captured / inspected / source checked / tested
- Preference state: unspecified / candidate / explicit scoped preference
- Related references, directions, memory entries, and later feedback:
- Recommendation IDs/statuses and applicable approved baseline, if any:
- Taste definition ID/version; aspects supported and still missing:
```

Unknowns may remain blank. Inspecting a source and confirming a preference are different states. A reference can be well researched without being selected for use.

## Starting collection

The [archive registry](archive.md) points to the existing material. No old reference has been relabeled as newly supplied or promoted to an approved style during this setup. Add new reference records here; keep dated reactions attached to their original source identities.

### TASTE REF TR-001 — Category organization and nightly taste guidance

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason supplied; workflow decision in chat `01a1301b-b45f-7852-bb0c-7fa0f9bc9b2a`.
- **Original wording:** “We bring these into our taste research: these 27 product categories formed by Apple and Google Play, with style familiars and treatments for each. I think that might be useful.” Follow-up: “When we set these up we're going to have to set them up so that at night it dreams against our taste recommendations.”
- **Normalization at capture:** Use the existing 27-category list, adapted from Apple/Google Play guidance, with separate style-family/treatment fields. The personal list and visual styles are not official app-store taxonomies. The category menu is superseded for new work by [TR-006](#taste-ref-tr-006--four-layer-design-taxonomy); the nightly-guidance requirement remains active.
- **Intent and scope:** Organize Taste Research and provide category/branch-specific guidance for future Dream Mode runs.
- **Decision:** Adopt the organizing structure. Nightly refinement must load the relevant confirmed taste recommendations, baseline and daytime intent together.
- **Boundary:** This establishes a workflow preference, not a preferred visual style, completed category research, an approved design baseline, or activation of a schedule.
- **Records:** [Category index and recommendation contract](CATEGORIES.md); memory entries TM 006 and TM 007 in [MEMORY.md](MEMORY.md); [Dream Mode](../DREAM.md).

### TASTE REF TR-002 — DialKit macOS tooling reference

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason supplied [mikelikesdesign](https://github.com/mikelikesdesign), then specifically [dialkit-macos](https://github.com/mikelikesdesign/dialkit-macos), in chat `01a13083-974b-7680-b166-539f0f16f6c5`.
- **Original wording:** “Let me add this here to our dial kit as well. What's the difference between direction kit and dial kit?”
- **Intent / proposed classification:** Study a tooling reference for native interface tuning and design jigs. Product category and visual style remain unset.
- **Canonical source record:** [REF-005](../../resources/guides/direction-research.md#ref-005--michael-lees-dialkit-macos) owns observations, requirements, attribution, and implementation limits.
- **Review state:** Public documentation, package manifest, and license inspected; no runtime test or installation.
- **Preference boundary:** Explicit request to retain the source. No particular visual characteristic, taste definition, implementation choice, or Dream baseline was approved. Branch-specific taste coverage remains unchanged.

### TASTE REF TR-003 — Image references to DialKit

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct correction in chat `01a13083-974b-7680-b166-539f0f16f6c5`, after inspecting the running upstream DialKit component demo.
- **Original wording:** “We're looking for inspiration, a screen grab, or design influence: a variety of images to DialKit. That's what we're looking to build. Can we organize that so it's going to be an image reference to DialKit?”
- **Follow-up clarification:** “We want the images to go from image to code exactly and then from that to DialKit exactly and then we can prompt DialKit.” Jason specified this flow for each style or for exploring a particular style kit.
- **Explicit workflow preference:** Reproduce the supplied image in editable code first; connect that same code to DialKit with matching initial values; then interpret prompts as explicit control/config/code edits. Keep each style kit independently versioned, preserving the initial reproduction. An existing design system is optional. Exact fidelity is a target to verify against the source, not a claim already achieved.
- **Correction:** The photo-stack demo and a general explanation of connecting existing tokens to controls did not demonstrate the intended image-to-design product. They establish only the control-library foundation.
- **Canonical workflow:** [Image references to DialKit](../../resources/guides/workflows/research.md#image-references-to-dialkit); [first executable prototype brief](../../tools/dialkit/PERSONAL.md#first-image-reference-prototype).
- **Preference boundary:** A confirmed process requirement, recorded as TM 008. No source image set, visual style, target screen, branch taste definition, or baseline was selected in this message. The workbench is specified, not implemented; research coverage is unchanged.

### TASTE REF TR-004 — Designs closer to Jason's intent

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct messages in the design-agent proposal and training discussion in this chat.
- **Original wording:** “I want to form something more useful here.” Asked what would make the agent most useful first, Jason selected “Create designs closer to what I have in mind.”
- **Explicit priority:** Make closeness to his intended design the first useful outcome of the agent.
- **Agent proposal:** Use an intent brief, faithful image reconstruction, explicit edits, scoped feedback records, and a subsequent design to check whether the lesson transfers. This proposed mechanism is separate from Jason's selected outcome.
- **Records:** TM 009 in [MEMORY.md](MEMORY.md); the [proposed design and training loop](../../resources/agents/craft-foundation.md#proposed-first-design-and-training-loop).
- **Boundary:** This is a product/workflow priority. No specific reference, visual preference, research coverage, training result, or Dream baseline is established by the selection.

### TASTE REF TR-005 — Simple repo portability

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct follow-up in the design-agent proposal and training discussion.
- **Original wording:** “Let's go deeper with some research around this and I want to make it very simple and I can carry it over into any sort of repo for me to start up again.”
- **Explicit requirement:** Research the approach and make the agent simple to carry into another repository and restart.
- **Implementation:** The [three-file starter](../../resources/history/starter/START.md) separates instructions, reusable taste memory, and current project state. The [research note](../../resources/history/portability-research.md) records primary sources and the proposed design-quality pilot.
- **Boundary:** This establishes portability and simplicity requirements. It does not select a visual style, prove learning, approve a baseline, or enroll a project in Dream Mode.
- **Memory:** TM 010 in [MEMORY.md](MEMORY.md).

### TASTE REF TR-006 — Four-layer design taxonomy

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct messages in chat `01a131d1-ad7e-7c30-8c09-f7cc3d54c5b1`.
- **Original request:** A series of Markdown files with game genres and app categories matching Google Play, across subcategories; styles filled only where they actually match.
- **Final naming:** “Apps Websites Games.” Jason removed Jigs and clarified: “Under each we see view port type then consumer category then style.” His final plan request repeats that tree and says, “I like that.”
- **Decision:** Use **apps / websites / games → viewport → category → style**. Each top-level design type contains the same three nested layers. Keep exact viewport size/profile within the viewport layer. Page type and subject scope are details, not additional tree levels.
- **Category source:** [Google Play Console Help](https://support.google.com/googleplay/android-developer/answer/9859673?hl=en), checked October 12, 2026: 32 app category names and 17 game genres. The website use of app consumer categories and viewport menus are our library conventions.
- **Implementation:** [Modular taxonomy](../../resources/structure.md), separate design-type files, viewport definitions, app-category and game-genre lists, style matching, and legacy category mapping. Existing 27-category IDs and historical labels remain resolvable.
- **Supersedes:** The current classification portion of TR-001 and the earlier product/platform-or-page hierarchy. Existing provenance, actual research, and the Dream guidance requirement remain intact.
- **Boundary:** No visual preference, style fit, taste definition, approved baseline, or schedule is established by this taxonomy decision.
- **Memory:** TM 006 updated in [MEMORY.md](MEMORY.md).

### TASTE REF TR-007 — Clean folders, viewport references, and separate style lists

- **Date:** October 12, 2026.
- **Origin:** Jason's direct instructions in this chat.
- **Original wording:** “So it should just be games viewport consumer style or games viewport category style.” “Need to write MD files for this.” “Chrome viewports are actually a good place to start.”
- **Style clarification:** “I want to have some styles of games, styles of applications, and styles of websites and so we're going to have to conform our own list there as well.”
- **Decision:** Use clean physical `<type>/<viewport>/<category>/<style>/` paths under apps, websites, and games. Keep source category IDs in metadata. Define viewport profiles using sourced Chrome presets and appropriate native references. Maintain our own separate style vocabularies by design type.
- **Implementation choices:** Initial Mobile/Tablet/Desktop branches for all three types, TV for apps/games, and Watch for apps; 324 unresearched category records. This is our starting coverage layout, not verified support for every product. Styles are labeled proposals and no style folders are populated.
- **Canonical records:** [Workspace ownership](../../resources/history/file-ownership.md), [viewport registry](../../resources/viewports/README.md), [style registry](../../resources/styles/README.md), and [folder migration](../../resources/history/folder-migrations.md).
- **Boundary:** Category scaffolds and suggested styles establish no personal visual preference or research coverage.

### TASTE REF TR-008 — DialKit as a component workbench

- **Date:** October 12, 2026.
- **Origin:** Jason's direct clarification in this chat.
- **Original wording:** “I think DialKit, for us, will end up being something that I feed in images and it gives me components and then I can apply those components once they're dialed to specific styles.”
- **Decision:** Images → editable components → DialKit tuning → saved style variants → application to designs. This expands the earlier image-reference workflow in TR-003; source fidelity and independent style versions remain applicable.
- **Responsibility boundary:** Our agent interprets images, generates editable components, and applies them. Upstream DialKit supplies the controls bound to that code. The intended experience is a combined workbench; it is not a claim that the library alone performs image generation.
- **Canonical record:** [Component-workbench contract](../../resources/guides/workflows/components.md), with implementation brief in [PERSONAL.md](../../tools/dialkit/PERSONAL.md#first-image-reference-prototype).
- **Boundary:** A process requirement, not a selected component, source image, style, or approved baseline. The image-to-component workbench is specified and still needs implementation.


### TASTE REF TR-009 — Reproducible agent setup and DirectionKit naming

- **Date:** October 12, 2026.
- **Origin:** Jason's direct follow-up in chat `01a131d1-ad7e-7c30-8c09-f7cc3d54c5b1`.
- **Setup requirement:** An instructions folder and setup file that restores the sources and recreates the folder structure. Jason corrected the earlier interpretation of staging as the image-to-component production sequence.
- **Requested roles:** Setup, Dreaming, Taste, the component/tuning agent, and a role initially described as nomenclature and then as mapping the design landscape. Research recognition and annotation must be covered.
- **Confirmed name:** “Call Dialkit DirectionKit.” Use **DirectionKit Agent** for our personal role; retain upstream source names and attribution.
- **Naming still open:** Jason rejected “Library agent” and asked for research and a build plan. **Design Atlas Agent** is the assistant's proposed name, not Jason's selection. Its precise discovery scope is also a proposal.
- **Canonical plan:** [Build plan for the design agents](../../resources/history/plans/2026-10-12-agent-plan.md), including primary-source research, responsibilities, setup requirements, build order, and completion checks.
- **Boundary:** Planning does not implement source restoration, launch independent agents, activate Dream scheduling, or establish visual taste.


### TASTE REF TR-010 — Five agent names and Markdown resources

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Confirmed names:** “Setup Atlas Taste Dial Dream.” Each will have its own Markdown specification. Setup prepares the other four agents.
- **Resources requirement:** “That's going to be all of my design resources that I want to carry over in MD format. That's what that folder will be for.” Keep Resources separate from the agent specs and runtime source code.
- **Supersedes:** The provisional Design Atlas name and earlier DirectionKit agent name in TR-009. DialKit retains its upstream library name. Historical quotes and source names remain intact.
- **Records:** [Agent specs](../README.md), [Resources](../../resources/README.md), and the updated [build plan](../../resources/history/plans/2026-10-12-agent-plan.md).
- **Boundary:** Written specs and portable resource documents do not implement restoration, component generation, or scheduled execution.

### TASTE REF TR-011 — Setup the full design environment by branch

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Original wording:** “For the setup I wanted to set up all of my design environment and I wanted to be very specific to each of the types, viewports, categories, and styles that I have. We'll have an MD file in each of those types (games, apps, and websites) and then copy over all of our information underneath each one.”
- **Confirmed scope:** Setup recreates the design environment by type → viewport → category → style. Each type has its own Markdown entry, with applicable information copied beneath it. This expands Setup beyond preparing the other agent instructions.
- **Implementation choices:** Use the existing type/viewport/category README paths; copy current category and style vocabularies into the type entries and viewport starting points into their records. The Setup specification describes scoped copies, source identity, readiness, and preservation of local edits. These mechanics are the agent's proposed implementation of Jason's requirement.
- **Records:** [Setup](../SETUP.md), [apps](../../resources/apps/README.md), [websites](../../resources/websites/README.md), [games](../../resources/games/README.md), and the [build plan](../../resources/history/plans/2026-10-12-agent-plan.md).
- **Boundary:** The Markdown specifications and initial information copies are updated. Automated restoration, full branch resource distribution, and runtime setup are not implemented by this documentation change. No visual taste or product support is inferred.

### TASTE REF TR-012 — Design-use categories and style research

- **Date:** October 12, 2026.
- **Origin:** Jason's direct correction and answer to the app-category clarification in this chat.
- **Website correction:** “This doesn't really give us enough for websites. That needs to be landing pages, SASS, things of that nature. Can you do research there?” The research normalizes SASS to SaaS in this software-site context.
- **App clarification:** “Interface types: dashboards, feeds, editors, players, booking flows.” This establishes the category approach, not a final exhaustive list.
- **Style correction:** Jason rejected the sufficiency of the initial style lists and asked to explore them. The first app/website menus are withdrawn as current proposals and retained in style history.
- **Supersedes:** The earlier requirement that Google Play app categories organize apps and websites. The four-layer tree remains; this message makes no new game-genre decision.
- **Research output:** [Source findings](../../resources/guides/category-and-style-research.md), [website proposal](../../resources/websites/categories.md), [app interface proposal](../../resources/apps/categories.md), and revised type-specific style candidates.
- **Boundary:** The new exact menu names, counts, overlap rules, and style candidates are agent proposals. No personal visual preference, style match, approved baseline, or runtime capability is established. Existing category folders remain in place during this research pass.

### TASTE REF TR-013 — Category lists approved; styles remain open

- **Date:** October 12, 2026.
- **Origin:** Jason's direct follow-up in this chat.
- **Original wording:** “Websites and apps look good. These styles we still need to work on.”
- **Confirmed decision:** Accept the presented 18 website categories and 20 app interface categories as the working menus. Keep their source context and working definitions. Style vocabulary remains unresolved.
- **Records:** [Website categories](../../resources/websites/categories.md), [app interface categories](../../resources/apps/categories.md), [taxonomy](../../resources/structure.md), and [style status](../../resources/styles/README.md).
- **Boundary:** Approval covers the category lists, not personal visual taste, style matches, component baselines, runtime readiness, or a completed physical folder migration. The next style approach is being clarified; no new style list was accepted in this message.

### TASTE REF TR-014 — Specific aesthetics from design and gaming

- **Date:** October 12, 2026.
- **Origin:** Jason's direct reply to the style-direction question in this chat.
- **Original wording:** “specific looks for apps and websites with asethetics that are used within design and gaming”
- **Confirmed requirement:** Develop recognizable visual looks for apps and websites using design and gaming aesthetics. Preserve the approved category lists and four-layer folder structure.
- **Agent interpretation:** Research named aesthetics, describe their visible rules, and show distinct app and website adaptations. The v0.3 shortlists implemented this as 12 proposals each, preserved in [style history](../../resources/history/style-vocabulary.md). Later terminology research is recorded in TR-015; no shortlist membership or mapping is user-approved.
- **Evidence boundary:** No individual aesthetic, personal preference, branch match, or component baseline is selected. Published source text and catalogue labels support research leads; representative screenshot review and Jason's reactions remain outstanding. Game references do not complete the game style taxonomy.

### TASTE REF TR-015 — Designer terminology and kinetic styles

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Original wording:** “Yeah I still think we need more aesthetics that a designer would actually use as terminology. Nomenclature needs to be tighter there.” Then: “Do some wider web research on styles as it relates to design in websites, games, and applications.” Follow-up: “If there's naming for specific kinetic styles or Remotion or jitter, etc”.
- **Requirement:** Broaden and tighten recognizable visual and motion terminology across all three types. Preserve the approved categories and existing four-layer tree.
- **Agent implementation:** A preferred-term registry with aliases and typed distinctions; 31 visual terms with app/web adaptations; expanded game art/rendering vocabulary; named motion families, techniques, timing concepts, and Remotion/Jitter tool distinctions. These classifications and exact memberships are research proposals.
- **Records:** [Source research](../../resources/guides/category-and-style-research.md#designer-terminology-and-motion), [visual registry](../../resources/styles/README.md), [games](../../resources/games/styles.md), [motion](../../resources/motion/techniques.md).
- **Boundary:** Source text and catalogue metadata support the names. No new personal preference, selected direction, branch match, animation review, or tool execution is implied.

### TASTE REF TR-016 — DesEngs supplied for research and Resources

- **Date:** October 12, 2026.
- **Origin:** Jason supplied [DesEngs](https://desengs.com/) in this chat.
- **Original wording:** “Let's add all of this into our research as well.” Then: “I think what we should do here is use this in our resources as well.”
- **Requirement:** Include DesEngs in the research and portable Markdown resource collection.
- **Agent implementation:** Capture public resource, website, Minimum, portfolio, Open Graph, and designer index metadata, retaining provenance, dates, source labels, destination identity, and existing-catalogue overlaps.
- **Records:** [DesEngs collection](../../resources/sources/desengs/README.md) and its parent [resource catalogue](../../resources/sources/source-records.md).
- **Boundary:** Supplying a discovery source does not endorse every listed design. The capture covers six indexes, not every linked site's contents or newsletter issue. Images remain links, and individual visual classifications await inspection and feedback.

### TASTE REF TR-017 — Simple GitHub kit and preserved history

- **Date:** October 12, 2026.
- **Origin:** Jason's direct correction in this chat.
- **Original wording:** “I think this is a little overcomplicated and we've already maybe got several versions of decide agents but I'd like to make it very, very simple. Remember we're going to check this into GitHub and I want to make sure that this is reusable when I go to grab it again.” Then: “Make sure you clean up all of the resources. Don't delete anything from the past. Keep everything together but make your folder structure very easy.”
- **Requirement:** One simple, reusable current kit; organize all resources together and preserve all earlier work.
- **Implementation:** One README/startup route and five current agent MDs. Resources has a catalogue, collections, research, and History. Actual design branches are created when needed; empty scaffolding is archived. Supporting references and optional source archives remain available without installing local runtimes.
- **Preservation:** [History](../../resources/history/README.md) and [the preservation map](../../resources/history/PRESERVATION.md) retain previous documents, moves, and original hashes. Local tool checkouts remain in place; the personal DialKit source/history also travels as an archive.
- **Boundary:** This is local preparation for GitHub, not a published repository or a completed image-to-component runtime. Personal taste coverage is unchanged.

### TASTE REF TR-018 — Resource folders and master list

- **Date:** October 12, 2026.
- **Origin:** Jason's direct cleanup request and clarification replies in this chat.
- **Original wording:** “I want a folder for MCPs. All folders can be lowercase.” Then: “preserving all of the design resources in one very master list of motion design styles, tooling, and MCPs.” The list also includes design, agents, and jiggers. Jason rejected heavy shared-knowledge navigation and asked to call local tools “Local tools.”
- **Confirmed choices:** “mcps/ — a top-level folder” and “Design jigs and interactive experiments.”
- **Implementation:** Five current agent MDs under `agents/`; a generated `resources/catalogue.md` indexes themed resource folders, original collections, and top-level MCP records. Supporting documents move into the resource folders that use them. Plan and earlier layouts remain in History. Workspace-owned folder names are lowercase; upstream dependency/source internals retain their names.
- **Records:** [Current folder map](../../README.md), [master list](../../resources/README.md), [MCPs](../../resources/mcps/README.md), and [jigs](../../resources/jigs/README.md).
- **Boundary:** Organization and preservation only. No new visual preference, live jig, service installation, Dream schedule, or GitHub publication is implied.

### TASTE REF TR-019 — Popular template categories and portfolio interest

- **Date:** October 12, 2026.
- **Origin:** Jason's research request and follow-ups in chat `01a1329d-64c1-7ab1-9b92-bb9f561db9da`.
- **Original wording:** “Need to look for not all of their gallery, but their top ones, their top categories. Rely on that and just get a sense of their actual sub-level categories and what their most popular templates are.” Then: “Should grab categories like portfolios, things like that. I think that's interesting.”
- **Confirmed scope:** Research selected leading templates and actual category labels from Shopify, Framer, Wix, and Squarespace, including portfolio uses. The original request also asks about catalog size and AI templates; these remain supporting context rather than an exhaustive gallery inventory.
- **Implementation:** Preserve provider labels and popularity surfaces in one research report, and connect narrower uses and named examples to the approved website category menu. Start the next category comparison with portfolios; other research priorities are proposed.
- **Records:** [Popular-template research](../../resources/guides/template-market-research.md) and [website category focus](../../resources/websites/categories.md#template-research-focus).
- **Boundary:** Interest in portfolios is a research focus, not endorsement of a specific template, aesthetic, or new folder hierarchy. Provider popular collections do not establish market-wide demand or personal taste.

### TASTE REF TR-020 — Spotted in Prod style categories and subcategories

- **Date:** October 12, 2026.
- **Origin:** Jason supplied [Spotted in Prod](https://www.spottedinprod.com/) in chat `01a132a1-f282-7e43-a98c-939bdb3fe27d`.
- **Original wording:** “Look at all of those subcategories. That's really what we need: the system, minimalism, morphism. All of this is what we need for our subcategories of apps and websites as well as our style categories for apps and websites.”
- **Reason:** Jason valued examples connected to actual products that reached production, rather than references confined to an AI editor.
- **Scope correction:** “I'm just looking for that homepage category area with those tags.” Followed by: “You're not doing overwork for this.” This narrows the work to the taxonomy rather than a full clip crawl.
- **Confirmed requirement:** Adopt the source tag vocabulary for app and website style categories and subcategories. Preserve source names and the distinction between design language, visuals, gestures, flows, patterns, product domain, and team context.
- **Implementation:** Capture all 246 tags in the seven expanded menu groups; promote the 20 Design Language entries to the shared primary app/web style menu. Keep other groups as fields within the existing four-layer record. Preserve prior extended style research and primary category menus.
- **Records:** [Source collection](../../resources/sources/spotted-in-prod/README.md), [all tags](../../resources/sources/spotted-in-prod/taxonomy.md), [shared styles](../../resources/styles/README.md).
- **Boundary:** Vocabulary/source selection establishes no individual style preference, selected branch, website production evidence, or approved Dream baseline. “Morphism” is recorded as Jason’s wording; Skeuomorphism, Morph, and Liquid Glass retain their distinct source meanings.
- **Dial follow-up:** Jason asked to share the structures with DialKit and the Dial agent, including visual source labels, gestures, flows, and patterns, and explicitly said product categories do not need to be in Dial. The [component contract](../../resources/guides/workflows/components.md#shared-component-vocabulary-for-dial) now carries five component groups, all 54 patterns grouped by structure, and a reusable component record; team type stays optional attribution. This is shared specification work, not a completed runtime UI.

### TASTE REF TR-021 — Setup prepares the portable kit

- **Source:** Jason's October 12, 2026 correction in this chat, following his choice of portable Markdown only.
- **Statement:** “Setup just needs to set this whole thing up for me when I grab it. It doesn't necessarily have to do much other than that. The rest I want to kind of turn into skills eventually.” He also requested clearer independent use in another IDE.
- **Confirmed scope:** Setup prepares the cloned/copied kit. Atlas, Taste, Dial, and Dream remain independent Markdown work roles and may become skills later. Native skill conversion is not requested now.
- **Implementation:** Keep existing files and paths; simplify Setup to checking/restoring the supplied kit, and put project-location and file-routing rules in the shared role guide. Any working role follows those rules when a new project or direction begins. No forced role sequence or duplicated skill package.
- **Supersedes:** The project-intake and per-branch responsibilities assigned to Setup in TR-011 and subsequent instructions. The earlier request to ask where to save new projects/directions remains shared behavior.
- **Records:** [Setup](../SETUP.md), [role guide](../README.md), and [preserved prior versions](../../resources/history/sources/history/2026-10-12-before-bootstrap-simplification.zip).
- **Boundary:** Packaging/workflow decision; no change to personal visual taste, tool availability, or scheduling.

### TASTE REF TR-022 — Nomenclature, screenshot taste, screenshot components, daily review

- **Source:** Jason's follow-up in the same October 12, 2026 chat.
- **Atlas:** “Atlas will contain all of our nomenclature for all the different design directions that we possibly could cover across those three.” The three types are apps, websites, and games.
- **Taste:** “Taste will be our agent for establishing taste from a screenshot.”
- **Dial:** “Dial should be establishing components from a screenshot.”
- **Dream:** “Dream will actually go back through and make sure anything that has been generated for that day is dialed correctly.”
- **Implementation:** Atlas owns a linked canonical nomenclature map; Taste annotates screenshots and records scoped criteria with feedback; Dial reconstructs editable components, controls, and saved variants; Dream inventories the day's generated items and checks fidelity, controls, saved values, applied revisions, and relevant behavior. Generated-item dates, paths, and revisions live in the existing direction record.
- **Boundary:** These define role responsibilities. A screenshot alone does not confirm every visible feature as a personal preference. Daily review is not a scheduling request or permission to inspect unrelated projects. No runtime or automatic schedule was installed.
- **Records:** [Atlas](../ATLAS.md), [Taste](../TASTE.md), [Dial](../DIAL.md), [Dream](../DREAM.md).

### TASTE REF TR-023 — Three-hour nightly Dream state

- **Source:** Jason's October 12, 2026 follow-up in this chat.
- **Statement:** “The MD about a dreamer is that every night it would go into a dream state for 3 hours and clean up everything based off of dial and taste. Now let's think that through and think through how that would actually work.”
- **Confirmed requirement:** Dream is intended to run nightly for a three-hour window, reviewing and cleaning up the day's generated work against Dial and Taste. This expands the prior generic daily-review description.
- **Operating proposal:** Inventory included projects and unfinished items; pin reference/Taste/Dial revisions; preserve starting work; perform supported corrections with visual and runtime checks; checkpoint; reserve time for verification and a morning report. Interpret three hours as a maximum window with early completion when nothing needs changing. This timing interpretation and phase allocation are proposals, not additional quoted requirements.
- **Open choices:** Nightly start time/time zone, included project roots, write mode (apply verified cleanup or save a separate morning-review version), and execution host. The write-mode question has been presented to Jason; no choice is inferred from silence.
- **Execution boundary:** The current request develops the operating design. No schedule was activated or three-hour runtime claimed. A host still needs scheduling, deadline enforcement, overlap prevention, usable tools, and durable progress. The complete Dial workbench and branch taste evidence remain incomplete.
- **Records:** [Dream](../DREAM.md), [nightly workflow](../../resources/guides/workflows/dream.md), [state fields](../../resources/guides/workflows/state-template.md#dream-enrollment), and [prior documents](../../resources/history/sources/history/2026-10-12-before-three-hour-dream.zip).

### TASTE REF TR-024 — Dream saves separate morning-review versions

- **Source:** Jason's October 12, 2026 reply to the Dream write-mode question in this chat.
- **Exact choice:** “Save a separate version for morning review.”
- **Requirement:** Keep Dream's cleanup separate from the current working project. The operating design creates an isolated candidate before editing, preserving the base and exact settings. Promotion requires a later instruction; it is not automatic.
- **Resolves:** The write-mode choice left open in TR-023. Start time, project enrollment/candidate destinations, and execution host remain unconfigured.
- **Records:** [Dream](../DREAM.md), [nightly workflow](../../resources/guides/workflows/dream.md), and [state template](../../resources/guides/workflows/state-template.md#dream-enrollment).
- **Boundary:** This specifies the workflow; no nightly schedule or cleanup run was started.

### TASTE REF TR-025 — Rich references, React, and paired Taste outputs

- **Source:** Jason's October 12, 2026 workflow corrections in this chat.
- **Intent:** Start with an idea, research interesting high-quality examples, establish taste from inspiration, make components editable through prompts, and build from the resulting kit. React projects run on localhost; a submission tool or GitHub comes later.
- **Reference inputs:** MP4s, websites, links, screenshots, screen grabs, and inspiration collected inside or outside the IDE. “as much reference as possible” means retain and inspect the collection, with actual coverage tracked rather than assumed.
- **Final output choice:** “Makes you a dial kit and it makes you a layout. Yeah that's what we should do. Do the latter.” Taste delivers both a custom kit and a first layout through Dial's implementation workflow. Later layouts reuse the same components/style. Earlier kit-only or either/or suggestions are superseded.
- **Implementation recorded at the time:** Atlas discovery and nomenclature; Taste source synthesis and paired delivery; Dial shared React components, controls, exact variants, and layout composition; Dream separate review versions. Keep prompt scope explicit and preserve project destinations. **Correction:** [TR-031](#taste-ref-tr-031--atlas-library-and-taste-classification-dialogue) supersedes the Atlas-discovery interpretation; Atlas is the ongoing nomenclature library used during Taste intake.
- **Records:** [Shared workflow](../README.md#the-design-workflow), [Taste](../TASTE.md), [Dial](../DIAL.md), and [local delivery](../../resources/guides/workflows/apply.md#react-localhost-and-handoff).
- **Boundary:** No particular 3D concept, aesthetic, package stack, or generated app is selected by these workflow requirements. Vite/TypeScript and React Three Fiber remain proposed implementation choices where appropriate; no new runtime was installed.

### TASTE REF TR-026 — Layout references versus mood and the originality question

- **Source:** Jason asked how a full layout differs from inspiration/mood, whether to reprompt a single layout or generate something unique, and requested research in this run.
- **Research:** [The reference-to-layout report](../../resources/guides/reference-to-layout-research.md) records seven primary sources, findings, limits, and a proposed experiment.
- **Proposal:** Record source role (layout/mood/both) separately from transformation (Reconstruct/Adapt/Explore). For a new product using a reference, propose Adapt; preserve explicit reconstruction requests. When exploration is open, compare a few rough structural alternatives before polishing the kit/layout pair.
- **Boundary:** The mode defaults and example three-option set are agent recommendations, not Jason's confirmed taste. Literature findings do not prove originality or validate this exact React-agent workflow. No visual comparison was generated or tested in this research run.

### TASTE REF TR-027 — Fancy Components and DesEngs in Resources

- **Source:** Jason supplied the [SVG-path marquee](https://www.fancycomponents.dev/docs/components/blocks/marquee-along-svg-path), said “lets hold all of these in our resources,” and supplied [DesEngs](https://desengs.com/) again.
- **Implementation:** Retain the existing DesEngs collection; add the Fancy library and selected component to the primary records, plus a compact list of the 40 official component links. Rebuild the single master catalogue.
- **Records:** [Fancy Components](../../resources/sources/fancy-components.md), [DesEngs](../../resources/sources/desengs/README.md), and [master list](../../resources/README.md).
- **Boundary:** Resource selection does not establish a universal motion preference. Documentation/index inspection is distinct from visual playback, runtime testing, or license verification; those limits remain in the source records.

### TASTE REF TR-028 — Single-file GitHub Setup

- **Source:** Jason's October 12, 2026 correction while reviewing Setup in this chat.
- **Statement:** “This setup really needs to be more about setting up the folders. In fact the setup should just be one file and it goes out to the repo that we'll put on GitHub (which we'll do at the end of this) and installs everything from there on an open repo.”
- **Requirement:** A single standalone Setup MD starts from an open destination repo, fetches the published design kit, and creates/populates its folders. The user should not have to copy the complete kit first. GitHub publication is deferred until the end of the review.
- **Implementation:** Keep `agents/SETUP.md` as the sole entry file. It contains source URL/ref fields, staged retrieval instructions, the expected installed tree, destination instruction wiring, preservation behavior, and verification. Use the existing `design-agents/` installation folder convention inside the open repo. Source URL/ref are explicitly unset until publication.
- **Supersedes:** The copy-first/check-only interpretation of Setup in TR-021 and the earlier walkthrough. The working roles continue to own actual project/direction choices and file routing.
- **Boundary:** This updates the portable installation instructions. No GitHub repository, release, download source, external installation, or tested network installer is claimed. Installing the published kit does not authenticate accounts or install every external resource listed in its catalogue.
- **Records:** [Setup](../SETUP.md), [entry README](../../README.md), and [preserved originals](../../resources/history/sources/history/2026-10-12-before-github-setup.zip).

### TASTE REF TR-029 — Jason workspace on any machine

- **Source:** Jason's follow-up during the Setup review, recorded October 13, 2026.
- **Naming choice:** “Use jason for both” in response to the GitHub repository and top-level folder question. This replaces the earlier `design-agents/` installation name from TR-028.
- **Goal:** “The goal here is that we can run this on any machine and it will set up a folder with everything that I need.”
- **Requirement:** One Setup MD creates the **jason/** folder system from the **jason** GitHub repository and sets up the supplied agents, resources, skills, MCP records, and supporting tools. It works from an open repository or a chosen destination on a fresh machine.
- **Implementation:** Detect OS, shell, available tools, and real local paths; install the complete source tree, keep relative links and hidden files, recreate needed dependencies from manifests, connect instructions, and record readiness. Preserve local changes and avoid duplicate/nested installs. Use `jason.zip` and a `jason/` root for future portable exports, preserving older packages.
- **Placeholder follow-up:** Jason said, “You can just use any GitHub name for right now.” A temporary `your-github-name/jason` source was recorded with `main` as a provisional branch; TR-030 supersedes that placeholder and the earlier repository name.
- **Later naming resolution:** TR-030 confirms the GitHub source as `jasonfesta/design-agents`, while the installed folder stays `jason/`.
- **Still pending:** Publish the kit, confirm the source revision, and run actual network installation and target-OS/tool tests. The requirement does not establish that every external tool supports every OS or that account credentials transfer.
- **Records:** [Setup](../SETUP.md), [workspace README](../../README.md), and [preserved originals](../../resources/history/sources/history/2026-10-13-before-jason-setup.zip).

### TASTE REF TR-030 — GitHub source and local folder

- **Source:** Jason supplied [his GitHub account](https://github.com/jasonfesta), then clarified: “it will be repo there called design-agents.” Recorded October 13, 2026.
- **Confirmed source:** `https://github.com/jasonfesta/design-agents`.
- **Confirmed local folder:** `jason/`, retaining the earlier folder choice. The source repository and installed folder have different names.
- **Supersedes:** The provisional `jason` repository name and temporary GitHub owner in TR-029. The cross-machine folder setup requirement remains.
- **Boundary:** Publication is still planned for the end of the agent review. `main` is a provisional branch; verify the published source and resolve its exact commit during installation. No repository creation, push, or GitHub installation has been performed here.
- **Records:** [Setup](../SETUP.md) and [workspace README](../../README.md).

### TASTE REF TR-031 — Atlas library and Taste classification dialogue

- **Source:** Jason's corrections during the agent review, October 13, 2026.
- **Atlas's role:** “This is not from Atlas's research. Atlas is just a nomenclature library that's ongoing and it's kind of like the high level of how we're going to describe when we put something in for taste. It will be mapped to something in the Atlas and if not it will prompt us.”
- **Dialogue:** “I think while we give it taste, we'll automatically get suggestions on the atlas and we'll fit it in there by going back and forth to declare what it is (because that's very important). If the Atlas doesn't have something we would add it.”
- **Required selection:** “When we do define taste for something and make a dialogue, we will need to select a top-level viewport, category, and style.” The existing apps/websites/games type remains the enclosing layer.
- **Requirement:** Taste receives references directly and suggests Atlas matches automatically. Jason and Taste resolve the classification through dialogue. Define missing entries together and add the agreed vocabulary to Atlas. A defined direction has selected type, viewport, category, and style; a suggestion is not a final selection.
- **Implementation:** Save candidate versus selected names, canonical links/IDs, gaps, and resolved decisions in the existing direction record. Keep Atlas's canonical definitions and relationships in the shared resource records. Continue reference inspection while a mapping question is open.
- **Supersedes:** The assignment of discovery and inspiration research to Atlas in the TR-025 implementation and earlier walkthrough. Preserve that earlier record as history. Inspiration research can still occur within a requested design session.
- **Boundary:** This changes the role and intake workflow, not Jason's visual preferences or the custom kit plus first React layout deliverable. No runtime, new app, or external publication is created.
- **Records:** [Atlas](../ATLAS.md), [Taste](../TASTE.md), [shared workflow](../README.md#the-design-workflow), and [preserved originals](../../resources/history/sources/history/2026-10-13-before-atlas-library-correction.zip).

### TASTE REF TR-032 — Taste to Dial and regrouped efforts

- **Source:** Jason's role restatement and request to regroup, October 13, 2026.
- **Statement:** “We've defined that Atlas is just a massive ongoing list of app, website, game, viewport, category, and then style. And we know that taste is something that's going to take references for something and bring it to our dail agent”. Follow-up: “lets regroup all efforts”.
- **Role boundary:** Atlas maintains nomenclature. Taste interprets the supplied references, settles classification and direction with Jason, and brings that evidence to Dial. Dial builds and verifies the React kit and layouts. The existing paired-output requirement remains for full builds; a Taste-only discussion can end with its direction.
- **Regrouping:** Reviewed related workspace chats and canonical records, then consolidated their contributions, current state, and next steps into the existing [role guide](../README.md#current-work-and-next-steps). Earlier competing structures remain in History. Saved source collections retain their inspection limits and do not establish confirmed personal taste.
- **Handoff implementation:** Save Atlas selections, reference assets and inspected scope, source contributions, criteria and feedback, transformation, confirmed project paths, and requested output scope in the existing direction record. Full build requests continue into Dial without a duplicate user request.
- **Boundary:** No new project, model training, background schedule, external publication, or bulk source collection is initiated by regrouping. The next-work sequence is a proposal; the source repository is still intended for publication at the end of the agent review.
- **Records:** [Taste](../TASTE.md), [Dial](../DIAL.md), [shared workflow](../README.md#the-design-workflow), and [preserved originals](../../resources/history/sources/history/2026-10-13-before-effort-regroup.zip).

### TASTE REF TR-033 — Benchmark after a selected Dial result

- **Source:** Jason's October 13, 2026 request to benchmark the same prompt across models through Portkey using an API key, followed by “Be a new thing called benchmark and it should be its own agent.”
- **Output:** Jason selected rendered React screens side by side, with code and metrics, saved locally as a page.
- **Trigger:** “We should be able to run this whenever we've got something out of the dial that we like.” Later: “I think that should be its own agent that runs against a particular layout after we like it.”
- **Requirement:** Benchmark is independently invoked with the liked layout as a frozen baseline. Results appear on a separate local page. It is not an automatic stage or permanent comparison panel inside Dial.
- **Records:** [Benchmark](../BENCHMARK.md), [local tool](../../tools/benchmark/README.md), and [Portkey research](../../resources/tools/benchmark.md). Live inference requires a locally configured key and explicit account routes.

### TASTE REF TR-034 — Shared corner jig and Markdown annotations

- **Source:** Jason's October 13, 2026 local UI review and successive corrections.
- **Final presentation:** Full-screen layout with a small **lower-right corner** clip. Hover exposes the controls; keyboard and touch alternatives remain supported. This supersedes framed and top-right versions.
- **Anchor refinement:** Jason then selected a small circle with 50% transparency, matching light/dark mode, and a menu that expands horizontally from the lower right. His next correction centers it along the bottom, removes all iconography to leave a small empty dot, and applies 50% transparency to the horizontal overlay too. The latest placement supersedes the lower-right position.
- **Overlay refinement:** Jason then requested a plain 50% dark menu background with no stroke or decorative styling. The panel now uses 50% black in both modes, with light text, no border, shadow, blur, rounded container, or dividers. The dot retains its mode-aware 50% fill.
- **Controls:** Show the producing model and light/dark appearance; download React, copy the URL, and annotate. The later instruction removes width/height selectors from this menu.
- **Annotations:** Place a numbered dot like a Figma comment, enter the requested change, and save a Markdown record with its location. Retain pins across reload.
- **Typography:** Jason specified **Google Sans Flex** for the shared UI. Its scope is the jig and Benchmark interface; individual layouts retain their Taste/Dial typography.
- **Test surface:** Jason requested an animated WebGL background drawn from existing resources. Paper Mesh Gradient is a test background, not an approved taste direction or generated Dial output.
- **Records:** [Shared jig](../../resources/jigs/layout-jig/README.md), [Dial](../DIAL.md), and [preserved prior documents/prototype](../../resources/history/sources/history/2026-10-13-before-benchmark-and-jig.zip).

### TASTE REF TR-035 — Five-layer schema

- **Source:** Jason, October 13, 2026: “design type → device type → viewport size → category → style” followed by “THIS IS IT we need this vary large in the md”.
- **Decision:** Keep apps, games, and websites at layer 1; mobile, tablet, desktop, and tv at layer 2; exact width × height at layer 3; category at layer 4; style at layer 5.
- **Viewport identity:** Chrome device names are associated preset metadata, with mode, DPR, safe area, input, and version. Several devices can share dimensions. Width-only presets need a height before rendering.
- **Documentation treatment:** Jason requested nerdy, design-oriented Markdown with terminal-style typography and small editorial notes. Use monospaced specifications and prominent trees; this does not select an aesthetic for generated products.
- **Supersedes:** Earlier four-layer instructions that used device classes as viewport folders. Existing category menus and style vocabulary remain intact; the five additional app categories proposed in chat were not adopted.
- **Record:** [Complete structure](../../resources/structure.md).

### TASTE REF TR-036 — Simple resource-first kit

- **Source:** Jason, October 13, 2026, asked to reorganize Resources for continual additions and easy crawling, including MCPs, skills, agent references, and a single design-site MD grouped by type. He confirmed the agents are good and wants a very simple GitHub repository.
- **Implementation:** Three visible root folders: agents, resources, tools. Type guides, category/style records, and MCPs live under Resources. `resources/sites.md` collects design destinations by source type; detailed observations remain in Sources. `resources/skills.md` indexes bundled instructions; executable skills stay in `.agents/skills/`. The maintenance utility and local Benchmark app live under Tools.
- **Preservation:** All earlier selected files are mapped and hash-accounted for; changed current documents and code have a source archive. Installed local tools, private Benchmark runs, annotations, and history are retained. No GitHub publication or external crawl was initiated.
- **Records:** [Root map](../../README.md), [Resources](../../resources/README.md), and [preservation receipt](../../resources/history/2026-10-13-simple-kit.md).

### TASTE REF TR-037 — Product categories and interface subcategories

- **Source:** Jason, October 13, 2026: “Need to think about our category and then subcategory menu. I think we could have top-level app categories that match the app stores and then we can have sub-level categories that match the interface families.” Follow-up: “I think that, across all of these, that's important.”
- **Structure:** Add interface subcategory between category and style across apps, websites, and games. Device type and numeric viewport size remain separate.
- **Implementation:** Restore the 32 Google Play product categories as the app baseline and retain all 20 previously approved interface families beneath them. Keep the 18 website purposes and 17 game genres; the newly consolidated website/game interface menus are draft naming proposals. Store-specific names and secondary categories remain source metadata.
- **Evidence:** Official Google Play and Apple category guidance checked October 13. Websites do not inherit store categories. Example category/family matches illustrate the distinction; they are not exhaustive compatibility rules or personal taste definitions.
- **Preservation:** Earlier schema and category decisions remain dated evidence. No project files, saved layouts, source media, or annotations moved.
- **Record:** [Six-layer structure](../../resources/structure.md).

## Open research questions

### Recorded coverage instruction

On October 12, in chat `01a13073-da58-7732-82dd-1e64f4783f21`, Jason specified that each type needs a researched definition of taste before recommendations, saved in Markdown, and that the running agent must tell the user when it lacks that research. This is an explicit workflow rule, not a visual preference. [TASTE.md](../../resources/guides/workflows/taste.md) implements it; [COVERAGE.md](COVERAGE.md) and [CATEGORIES.md](CATEGORIES.md) preserve empty branches instead of prefilled style recommendations.

### Questions for incoming references

- Which precise qualities does Jason value in each supplied reference, and which should be excluded?
- Which qualities apply across projects, and which belong to one category or direction?
- Which earlier feedback can resolve a current design decision before additional discovery is needed?
- Which treatments belong in each category after inspecting references, and which confirmed recommendations should govern its nighttime refinements?
