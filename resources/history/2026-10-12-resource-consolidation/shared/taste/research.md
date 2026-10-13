# Labeled taste research

Owner: Research Curator · Updated October 12, 2026

Capture the research Jason supplies with his original labels, reactions, and intended use. Follow the [Taste Agent contract](../../instructions/TASTE.md). The existing [research library](../../resources/research/research-library.md) and [resource catalogue](../../resources/catalogue.md) remain the source records for previously collected references.

## Intake format

Check [coverage](COVERAGE.md) before personal taste conclusions. Fill a branch's [taste definition](../workflow/TASTE.md) from reviewed evidence and Jason's feedback. Capturing a reference begins collecting; it does not establish taste.

Organize intake with **apps / websites / games → viewport → category → style**, using the [research index](CATEGORIES.md) and [shared category/style definitions](../workflow/TAXONOMY.md). Preserve original labels alongside stable IDs. Each activated category can contain several style families and treatments, with its own evidence and recommendations for Dream Mode.

```md
### TASTE REF <unique ID>
- Captured date / source date:
- Origin: Jason supplied / recovered history / agent discovered
- Source: URL, local path, chat and message ID, or existing catalogue ID
- Exact target: screenshot, screen, section, timecode, or revision
- Jason's original label and words:
- Design type: apps / websites / games
- Viewport type / size profile, units, and orientation:
- Consumer category set and ID / narrower subject scope:
- Page/screen detail and target platform:
- Style family ID / treatment ID (variation):
- Branch ID: <type/viewport/category/style, when known>
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
- **Records:** [Category index and recommendation contract](CATEGORIES.md); memory entries TM 006 and TM 007 in [MEMORY.md](MEMORY.md); [Dream Mode](../../instructions/DREAM.md).

### TASTE REF TR-002 — DialKit macOS tooling reference

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason supplied [mikelikesdesign](https://github.com/mikelikesdesign), then specifically [dialkit-macos](https://github.com/mikelikesdesign/dialkit-macos), in chat `01a13083-974b-7680-b166-539f0f16f6c5`.
- **Original wording:** “Let me add this here to our dial kit as well. What's the difference between direction kit and dial kit?”
- **Intent / proposed classification:** Study a tooling reference for native interface tuning and design jigs. Product category and visual style remain unset.
- **Canonical source record:** [REF-005](../../resources/research/research-library.md#ref-005--michael-lees-dialkit-macos) owns observations, requirements, attribution, and implementation limits.
- **Review state:** Public documentation, package manifest, and license inspected; no runtime test or installation.
- **Preference boundary:** Explicit request to retain the source. No particular visual characteristic, taste definition, implementation choice, or Dream baseline was approved. Branch-specific taste coverage remains unchanged.

### TASTE REF TR-003 — Image references to DialKit

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct correction in chat `01a13083-974b-7680-b166-539f0f16f6c5`, after inspecting the running upstream DialKit component demo.
- **Original wording:** “We're looking for inspiration, a screen grab, or design influence: a variety of images to DialKit. That's what we're looking to build. Can we organize that so it's going to be an image reference to DialKit?”
- **Follow-up clarification:** “We want the images to go from image to code exactly and then from that to DialKit exactly and then we can prompt DialKit.” Jason specified this flow for each style or for exploring a particular style kit.
- **Explicit workflow preference:** Reproduce the supplied image in editable code first; connect that same code to DialKit with matching initial values; then interpret prompts as explicit control/config/code edits. Keep each style kit independently versioned, preserving the initial reproduction. An existing design system is optional. Exact fidelity is a target to verify against the source, not a claim already achieved.
- **Correction:** The photo-stack demo and a general explanation of connecting existing tokens to controls did not demonstrate the intended image-to-design product. They establish only the control-library foundation.
- **Canonical workflow:** [Image references to DialKit](../workflow/RESEARCH.md#image-references-to-dialkit); [first executable prototype brief](../../tools/dialkit/PERSONAL.md#first-image-reference-prototype).
- **Preference boundary:** A confirmed process requirement, recorded as TM 008. No source image set, visual style, target screen, branch taste definition, or baseline was selected in this message. The workbench is specified, not implemented; research coverage is unchanged.

### TASTE REF TR-004 — Designs closer to Jason's intent

- **Captured / source date:** October 12, 2026.
- **Origin:** Jason's direct messages in the design-agent proposal and training discussion in this chat.
- **Original wording:** “I want to form something more useful here.” Asked what would make the agent most useful first, Jason selected “Create designs closer to what I have in mind.”
- **Explicit priority:** Make closeness to his intended design the first useful outcome of the agent.
- **Agent proposal:** Use an intent brief, faithful image reconstruction, explicit edits, scoped feedback records, and a subsequent design to check whether the lesson transfers. This proposed mechanism is separate from Jason's selected outcome.
- **Records:** TM 009 in [MEMORY.md](MEMORY.md); the [proposed design and training loop](../agents/design.md#proposed-first-design-and-training-loop).
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
- **Implementation:** [Modular taxonomy](../workflow/TAXONOMY.md), separate design-type files, viewport definitions, app-category and game-genre lists, style matching, and legacy category mapping. Existing 27-category IDs and historical labels remain resolvable.
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
- **Canonical records:** [Workspace ownership](../docs/WORKSPACE.md), [viewport registry](../viewports/README.md), [style registry](../styles/README.md), and [folder migration](../docs/FOLDER-MIGRATION.md).
- **Boundary:** Category scaffolds and suggested styles establish no personal visual preference or research coverage.

### TASTE REF TR-008 — DialKit as a component workbench

- **Date:** October 12, 2026.
- **Origin:** Jason's direct clarification in this chat.
- **Original wording:** “I think DialKit, for us, will end up being something that I feed in images and it gives me components and then I can apply those components once they're dialed to specific styles.”
- **Decision:** Images → editable components → DialKit tuning → saved style variants → application to designs. This expands the earlier image-reference workflow in TR-003; source fidelity and independent style versions remain applicable.
- **Responsibility boundary:** Our agent interprets images, generates editable components, and applies them. Upstream DialKit supplies the controls bound to that code. The intended experience is a combined workbench; it is not a claim that the library alone performs image generation.
- **Canonical record:** [Component-workbench contract](../workflow/COMPONENTS.md), with implementation brief in [PERSONAL.md](../../tools/dialkit/PERSONAL.md#first-image-reference-prototype).
- **Boundary:** A process requirement, not a selected component, source image, style, or approved baseline. The image-to-component workbench is specified and still needs implementation.


### TASTE REF TR-009 — Reproducible agent setup and DirectionKit naming

- **Date:** October 12, 2026.
- **Origin:** Jason's direct follow-up in chat `01a131d1-ad7e-7c30-8c09-f7cc3d54c5b1`.
- **Setup requirement:** An instructions folder and setup file that restores the sources and recreates the folder structure. Jason corrected the earlier interpretation of staging as the image-to-component production sequence.
- **Requested roles:** Setup, Dreaming, Taste, the component/tuning agent, and a role initially described as nomenclature and then as mapping the design landscape. Research recognition and annotation must be covered.
- **Confirmed name:** “Call Dialkit DirectionKit.” Use **DirectionKit Agent** for our personal role; retain upstream source names and attribution.
- **Naming still open:** Jason rejected “Library agent” and asked for research and a build plan. **Design Atlas Agent** is the assistant's proposed name, not Jason's selection. Its precise discovery scope is also a proposal.
- **Canonical plan:** [Build plan for the design agents](../../instructions/PLAN.md), including primary-source research, responsibilities, setup requirements, build order, and completion checks.
- **Boundary:** Planning does not implement source restoration, launch independent agents, activate Dream scheduling, or establish visual taste.


### TASTE REF TR-010 — Five agent names and Markdown resources

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Confirmed names:** “Setup Atlas Taste Dial Dream.” Each will have its own Markdown specification. Setup prepares the other four agents.
- **Resources requirement:** “That's going to be all of my design resources that I want to carry over in MD format. That's what that folder will be for.” Keep Resources separate from the agent specs and runtime source code.
- **Supersedes:** The provisional Design Atlas name and earlier DirectionKit agent name in TR-009. DialKit retains its upstream library name. Historical quotes and source names remain intact.
- **Records:** [Agent specs](../../instructions/README.md), [Resources](../../resources/README.md), and the updated [build plan](../../instructions/PLAN.md).
- **Boundary:** Written specs and portable resource documents do not implement restoration, component generation, or scheduled execution.

### TASTE REF TR-011 — Setup the full design environment by branch

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Original wording:** “For the setup I wanted to set up all of my design environment and I wanted to be very specific to each of the types, viewports, categories, and styles that I have. We'll have an MD file in each of those types (games, apps, and websites) and then copy over all of our information underneath each one.”
- **Confirmed scope:** Setup recreates the design environment by type → viewport → category → style. Each type has its own Markdown entry, with applicable information copied beneath it. This expands Setup beyond preparing the other agent instructions.
- **Implementation choices:** Use the existing type/viewport/category README paths; copy current category and style vocabularies into the type entries and viewport starting points into their records. The Setup specification describes scoped copies, source identity, readiness, and preservation of local edits. These mechanics are the agent's proposed implementation of Jason's requirement.
- **Records:** [Setup](../../instructions/SETUP.md), [apps](../../apps/README.md), [websites](../../websites/README.md), [games](../../games/README.md), and the [build plan](../../instructions/PLAN.md).
- **Boundary:** The Markdown specifications and initial information copies are updated. Automated restoration, full branch resource distribution, and runtime setup are not implemented by this documentation change. No visual taste or product support is inferred.

### TASTE REF TR-012 — Design-use categories and style research

- **Date:** October 12, 2026.
- **Origin:** Jason's direct correction and answer to the app-category clarification in this chat.
- **Website correction:** “This doesn't really give us enough for websites. That needs to be landing pages, SASS, things of that nature. Can you do research there?” The research normalizes SASS to SaaS in this software-site context.
- **App clarification:** “Interface types: dashboards, feeds, editors, players, booking flows.” This establishes the category approach, not a final exhaustive list.
- **Style correction:** Jason rejected the sufficiency of the initial style lists and asked to explore them. The first app/website menus are withdrawn as current proposals and retained in style history.
- **Supersedes:** The earlier requirement that Google Play app categories organize apps and websites. The four-layer tree remains; this message makes no new game-genre decision.
- **Research output:** [Source findings](../../resources/research/design-taxonomy-research.md), [website proposal](../workflow/taxonomy/WEBSITE-CATEGORIES.md), [app interface proposal](../workflow/taxonomy/APP-INTERFACES.md), and revised type-specific style candidates.
- **Boundary:** The new exact menu names, counts, overlap rules, and style candidates are agent proposals. No personal visual preference, style match, approved baseline, or runtime capability is established. Existing category folders remain in place during this research pass.

### TASTE REF TR-013 — Category lists approved; styles remain open

- **Date:** October 12, 2026.
- **Origin:** Jason's direct follow-up in this chat.
- **Original wording:** “Websites and apps look good. These styles we still need to work on.”
- **Confirmed decision:** Accept the presented 18 website categories and 20 app interface categories as the working menus. Keep their source context and working definitions. Style vocabulary remains unresolved.
- **Records:** [Website categories](../workflow/taxonomy/WEBSITE-CATEGORIES.md), [app interface categories](../workflow/taxonomy/APP-INTERFACES.md), [taxonomy](../workflow/TAXONOMY.md), and [style status](../styles/README.md).
- **Boundary:** Approval covers the category lists, not personal visual taste, style matches, component baselines, runtime readiness, or a completed physical folder migration. The next style approach is being clarified; no new style list was accepted in this message.

### TASTE REF TR-014 — Specific aesthetics from design and gaming

- **Date:** October 12, 2026.
- **Origin:** Jason's direct reply to the style-direction question in this chat.
- **Original wording:** “specific looks for apps and websites with asethetics that are used within design and gaming”
- **Confirmed requirement:** Develop recognizable visual looks for apps and websites using design and gaming aesthetics. Preserve the approved category lists and four-layer folder structure.
- **Agent interpretation:** Research named aesthetics, describe their visible rules, and show distinct app and website adaptations. The v0.3 shortlists implemented this as 12 proposals each, preserved in [style history](../styles/LEGACY.md). Later terminology research is recorded in TR-015; no shortlist membership or mapping is user-approved.
- **Evidence boundary:** No individual aesthetic, personal preference, branch match, or component baseline is selected. Published source text and catalogue labels support research leads; representative screenshot review and Jason's reactions remain outstanding. Game references do not complete the game style taxonomy.

### TASTE REF TR-015 — Designer terminology and kinetic styles

- **Date:** October 12, 2026.
- **Origin:** Jason's direct continuation in this chat.
- **Original wording:** “Yeah I still think we need more aesthetics that a designer would actually use as terminology. Nomenclature needs to be tighter there.” Then: “Do some wider web research on styles as it relates to design in websites, games, and applications.” Follow-up: “If there's naming for specific kinetic styles or Remotion or jitter, etc”.
- **Requirement:** Broaden and tighten recognizable visual and motion terminology across all three types. Preserve the approved categories and existing four-layer tree.
- **Agent implementation:** A preferred-term registry with aliases and typed distinctions; 31 visual terms with app/web adaptations; expanded game art/rendering vocabulary; named motion families, techniques, timing concepts, and Remotion/Jitter tool distinctions. These classifications and exact memberships are research proposals.
- **Records:** [Source research](../../resources/research/design-taxonomy-research.md#designer-terminology-and-motion), [visual registry](../styles/README.md), [games](../styles/GAMES.md), [motion](../styles/MOTION.md).
- **Boundary:** Source text and catalogue metadata support the names. No new personal preference, selected direction, branch match, animation review, or tool execution is implied.

### TASTE REF TR-016 — DesEngs supplied for research and Resources

- **Date:** October 12, 2026.
- **Origin:** Jason supplied [DesEngs](https://desengs.com/) in this chat.
- **Original wording:** “Let's add all of this into our research as well.” Then: “I think what we should do here is use this in our resources as well.”
- **Requirement:** Include DesEngs in the research and portable Markdown resource collection.
- **Agent implementation:** Capture public resource, website, Minimum, portfolio, Open Graph, and designer index metadata, retaining provenance, dates, source labels, destination identity, and existing-catalogue overlaps.
- **Records:** [DesEngs collection](../../resources/collections/desengs/README.md) and its parent [resource catalogue](../../resources/catalogue.md).
- **Boundary:** Supplying a discovery source does not endorse every listed design. The capture covers six indexes, not every linked site's contents or newsletter issue. Images remain links, and individual visual classifications await inspection and feedback.

### TASTE REF TR-017 — Simple GitHub kit and preserved history

- **Date:** October 12, 2026.
- **Origin:** Jason's direct correction in this chat.
- **Original wording:** “I think this is a little overcomplicated and we've already maybe got several versions of decide agents but I'd like to make it very, very simple. Remember we're going to check this into GitHub and I want to make sure that this is reusable when I go to grab it again.” Then: “Make sure you clean up all of the resources. Don't delete anything from the past. Keep everything together but make your folder structure very easy.”
- **Requirement:** One simple, reusable current kit; organize all resources together and preserve all earlier work.
- **Implementation:** One README/startup route and five current agent MDs. Resources has a catalogue, collections, research, and History. Actual design branches are created when needed; empty scaffolding is archived. Supporting references and optional source archives remain available without installing local runtimes.
- **Preservation:** [History](../../resources/history/README.md) and [the preservation map](../../resources/history/PRESERVATION.md) retain previous documents, moves, and original hashes. Local tool checkouts remain in place; the personal DialKit source/history also travels as an archive.
- **Boundary:** This is local preparation for GitHub, not a published repository or a completed image-to-component runtime. Personal taste coverage is unchanged.

## Open research questions

### Recorded coverage instruction

On October 12, in chat `01a13073-da58-7732-82dd-1e64f4783f21`, Jason specified that each type needs a researched definition of taste before recommendations, saved in Markdown, and that the running agent must tell the user when it lacks that research. This is an explicit workflow rule, not a visual preference. [TASTE.md](../workflow/TASTE.md) implements it; [COVERAGE.md](COVERAGE.md) and [CATEGORIES.md](CATEGORIES.md) preserve empty branches instead of prefilled style recommendations.

### Questions for incoming references

- Which precise qualities does Jason value in each supplied reference, and which should be excluded?
- Which qualities apply across projects, and which belong to one category or direction?
- Which earlier feedback can resolve a current design decision before additional discovery is needed?
- Which treatments belong in each category after inspecting references, and which confirmed recommendations should govern its nighttime refinements?
