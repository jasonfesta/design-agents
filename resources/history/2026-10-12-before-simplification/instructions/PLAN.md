# Build plan for the design agents

Draft for discussion · October 12, 2026 · Research checked the same day

Build a portable design environment that Jason can recreate from one setup entry point, organized by type, viewport, category, and style. Setup restores its information and capabilities and prepares Atlas, Taste, Dial, and Dream; Atlas maps the design landscape; Taste interprets research and feedback; Dial creates and tunes components; Dream revisits selected work and develops it further.

Jason's subsequent [category and style correction](../resources/research/directions/design-taxonomy-research.md) changes the category menus: websites use design uses such as landing pages and SaaS; apps use interface types. Jason approved the replacement website and app category lists. Styles remain open; existing category folders are retained for migration.

Jason confirmed the names **Setup, Atlas, Taste, Dial, and Dream**. Each now has its own Markdown spec in this instructions folder. **Resources** is a separate folder of design resources in Markdown for carrying into another workspace. Detailed responsibilities and implementation choices below remain drafts; the specs do not launch separate processes or install runtimes.

## Why the mapping role is broader than nomenclature

The useful distinction is between naming concepts, organizing them into categories, and describing their relationships. NN/g distinguishes hierarchical taxonomies from models that can express additional relationships. Its context-architecture guidance also connects labels, metadata, and relationships to the information an agent should retrieve. These support giving the role responsibility for a usable map of the design domain. [Taxonomy 101](https://www.nngroup.com/articles/taxonomy-101/), [Context Architecture](https://www.nngroup.com/articles/context-architecture/).

W3C SKOS supplies a useful conceptual starting point: stable concepts, preferred names, aliases, definitions, broader/narrower relationships, related concepts, and mappings between vocabularies. We can adopt those ideas in ordinary Markdown and small JSON records without requiring a semantic-web database. [SKOS Primer](https://www.w3.org/TR/skos-primer/).

**Atlas Agent** maintains our map of the design landscape and connects each reference or component to the relevant part of it. Jason selected the short name Atlas. The sources above inform its responsibilities.

Its initial scope should be the design territory represented by our sources. It can identify gaps and request targeted research from Taste. Broad ongoing discovery can be added later if Jason wants it. This scope is a proposal; his clarification established that he meant a design-landscape role, but did not yet settle discovery ownership.

## The five agents

| Agent | Question it answers | Owns | Hands off |
| --- | --- | --- | --- |
| **Setup** | Can I recreate my design environment for these types, viewports, categories, and styles? | Type entry documents, source restoration, scoped information copies, generated folders, capability checks, setup receipts. | A verified environment with branch entry points and a precise list of missing sources or connections. |
| **Atlas** | What design concepts exist, how do they relate, and where does this belong? | Vocabulary, aliases, relationships, branch placement, platform applicability, and landscape coverage. | Relevant concepts, branch paths, neighboring approaches, and research gaps. |
| **Taste** | What does this research show, and what does Jason value about it? | Research intake, annotations, original reactions, scoped preferences, counterexamples, and learning. | An evidence-backed brief with supported guidance and unresolved aspects. |
| **Dial** | How do we turn this reference and brief into usable, adjustable design? | Editable reconstruction, component controls, independent style variants, versions, and applications. | Rendered components, saved settings, application records, and verification evidence. |
| **Dream** | What can we discover or improve by revisiting this work? | Bounded research reflection, candidate experiments, authorized refinements, run state, and morning reports. | Improvements or hypotheses, their evidence, and the next questions. |

These are five top-level roles. Taste's existing Research Curator, Archivist, Memory Keeper, and Learning roles remain internal responsibilities; they do not add four more top-level agents.

Every role gets the same short contract: purpose, when to invoke it, required context, tools, canonical records it can change, procedure, completion checks, and handoff. Start by invoking these profiles in the host assistant. Introduce separate processes only where a tested task benefits from them. This follows Anthropic's guidance to start with simple, composable workflows and add autonomy where it helps; it does not select a provider or framework. [Building Effective Agents](https://www.anthropic.com/engineering/building-effective-agents).

## How research and annotations work

Taste captures a supplied URL, image, document, code sample, or prior decision. It records the source identity, inspection status, relevant passage or image region, what is observable, Jason's exact reaction when available, and its own interpretation separately. Atlas supplies consistent concept names and relationships. A single reference can relate to several branches without duplicating its source record.

The W3C annotation model separates the comment from the target it describes and supports specific portions of a resource. Use that structure for our records: annotation ID, source ID/revision, target region or passage, author, date, purpose, observation, and interpretation. Preserve image dimensions or quoted text needed to locate the annotation again. This is a lightweight adaptation, not a claim of full standards conformance. [Web Annotation Data Model](https://www.w3.org/TR/annotation-model/).

Illustrative example only: Atlas can classify a pricing card as a component pattern relevant to a shopping website. Taste can record “keep the typography; reduce the shadows” against that specific card. Dial can create the selected variant, and Dream can later inspect its application using that scoped feedback. The example establishes no actual preference.

## The setup experience

The intended instruction is:

> Read instructions/SETUP.md and recreate my design environment in this repository, organized as apps, websites, and games → viewport → category → style.

`SETUP.md` will guide the Setup Agent through a repeatable script. Keep the restoration mechanics deterministic; use the agent to interpret the destination, explain choices, and resolve discrepancies. A bootstrap package must carry the setup instructions, script, manifests, and required bundled content. A list of source URLs alone cannot recreate private research, local edits, or deleted upstream material.

The five agent specs now exist. Manifests, templates, and automated restoration below remain planned:

```text
instructions/
  README.md
  PLAN.md
  SETUP.md
  ATLAS.md
  TASTE.md
  DIAL.md
  DREAM.md
  manifests/             planned setup records
  templates/             planned shared templates
resources/               portable Markdown design resources
  README.md
  research/
```

Keep the agreed product folders: `apps|websites|games/<viewport>/<category>/<style>/`. Each layer has a README. The three type READMEs now describe their environments and contain dated copies of their category and style menus with viewport starting points. Setup must copy all applicable supplied information underneath the appropriate type, at its supported viewport/category/style scope. Preserve canonical shared research and tool locations; traceable branch copies carry source identity and revision rather than becoming competing source catalogues.

The five short specs remain the agent entry points. Detailed Taste, Dream, and workflow modules remain canonical where they are. Restore the actual applicable files with the environment, then link them from its records. Preserve licensed skill discovery paths and runtime locations. Knowledge placement in the four-layer tree is separate from where a tool must be installed.

### Assemble each type's environment

Start from [apps/README.md](../apps/README.md), [websites/README.md](../websites/README.md), and [games/README.md](../games/README.md). Follow [Setup's folder and copy contract](SETUP.md#folder-and-markdown-contract). Type-wide information stays at the type level; viewport profiles and support evidence go below it; category research and feedback go below those; style rules, component variants, applications, and working state go into actual style records.

For a full setup, account for every existing branch and all supplied information. For a scoped setup, record the chosen branches separately from the capability profile. Produce a source-to-destination copy map with source revisions, destination hashes, and the reason for any exclusion, ambiguity, conflict, or unavailable input. Preserve local edits on subsequent runs. Resolve the branch's inherited context without broadening the scope of its evidence.

Restore knowledge and runtime requirements together, while reporting their readiness separately. A complete document copy can still lack a required tool connection; an installed tool can still lack researched taste. Unclassified resources remain available in Resources for Atlas to resolve.

### Carry Resources separately

The [Resources folder](../resources/README.md) contains portable design-resource documents in Markdown, including the complete recorded catalogue. Keep resource import separate from agent instructions and optional tool installation. Setup should merge resource records by source identity, preserve original notes and attribution, and report collisions. Original structured data and source code remain outside the Markdown folder.

**Resource-import acceptance:** copying only `resources/` to another workspace preserves the design-resource descriptions and source evidence without requiring this workspace's runtimes. External links and unavailable private attachments retain their recorded access status.

### Restore every source deliberately

Create one source registry from the existing installation records, research catalogue, snapshot manifests, skill provenance, and tool manifests. Each item needs an ID, source kind, origin, destination, revision/hash when available, attribution, restoration method, required/optional status, capability profile, and access requirements. Distinguish a discovery link from restorable content and from an installed, callable capability.

| Source kind | Restoration method |
| --- | --- |
| Our instructions, taxonomy, templates, and personal records | Restore versioned bundle contents and verify their hashes. |
| Pinned source repositories | Restore a recorded revision from a verified bundle or accessible remote. Apply separately recorded local adaptations. |
| Historical research snapshots and attachments | Restore bundled copies with provenance; report missing private originals explicitly. |
| Public reference links | Restore their catalogue records; check access when used. Copy content only where appropriate rights permit it. |
| Local skills | Restore the actual licensed files and supporting references. Keep pointers distinguished from installed skills. |
| Optional tool environments | Recreate from recorded dependency locks for the selected profile. Keep large installs explicit. |
| Account tools and private services | Restore connection instructions and required capability names; check access on the new host. Credentials remain outside the bundle. |

A Git bundle transports recorded repository history but does not preserve current working-tree edits. Setup must restore both the pinned history and our exported file state where they differ. [Git bundle documentation](https://git-scm.com/docs/git-bundle).

Extend the existing `scripts/workspace.py` rather than create a competing maintenance tool. Proposed new behavior: setup preview, apply to an explicit target, resume an interrupted restoration, and report capability readiness. Preserve its current check, verify, inventory, and export operations. Generate folder scaffolds from a versioned blueprint derived from the canonical taxonomy; avoid a second manually maintained category list.

Start with a core profile containing instructions, sources, and records. A Dial profile adds the selected component runtime. An optional full-local profile restores the other declared tool checkouts. Setup never labels a partial profile as complete when one of its required sources is unavailable. Re-running it must preserve user edits and avoid duplicate records.

## Build order and completion checks

### 1. Establish the five contracts and shared records

The five short agent guides are drafted. Validate their ownership of sources, annotations, concepts, preferences, components, and runs through representative tasks. The confirmed names are Setup, Atlas, Taste, Dial, and Dream; DialKit remains the upstream library name and attribution.

**Complete when:** a new assistant can route representative requests to each role, identify the appropriate records, and hand work to the next role without copying competing state.

### 2. Build Setup first

Inventory all source types; write the folder blueprint and source registry; implement preview, scoped content copying, restoration, resumption, and readiness reporting. Use the three type READMEs as the environment entry points and carry applicable information through each branch. Support a fresh directory and an existing product repository with its own instructions. Reuse the current export and source checks.

**Complete when:** starting from the bootstrap package in a clean temporary location recreates the selected design scope and capability profile, with a working Markdown entry for each type and its viewport/category/style records. Every supplied source is accounted for, copied information retains scope and provenance, revisions and hashes verify, and inaccessible sources are reported accurately. A second run makes no unnecessary changes. A conflicting local edit remains intact and appears in the report. The original checkout must not be needed.

### 3. Build Atlas and Taste together

Atlas starts with the approved website-use and app-interface menus, the existing game genres, viewport registry, and researched style candidates. Add definitions, aliases, relationships, source evidence, and coverage states. Keep the four folder layers; patterns, components, and related styles are metadata and links.

Taste adds the shared intake and annotation record, duplicate detection, explicit evidence status, scoped feedback, and retrieval of relevant preferences. A previously captured source gains new reactions without losing its original attribution. The source catalogue remains canonical; branch records carry applicable content and link back by source identity and revision.

**Complete when:** a small mixed set of references can be captured, annotated, classified, and retrieved from a natural-language request. Check an ambiguous reference, a duplicate, a missing attachment, and feedback that approves only one aspect. A style label alone must not become a personal preference.

### 4. Build Dial

Follow the [component contract](../shared/workflow/COMPONENTS.md): one image, one editable component, visual comparison, unchanged initial control binding, a tuned style variant, and one application screen. Save independent values and code revisions, then reload and export them. Use the existing React/DialKit stack for the first proof.

Component examples should preserve explicit states and inputs. Storybook's story model provides a useful reference for this approach; we can use the same principle in our existing preview without installing Storybook now. [Writing stories](https://storybook.js.org/docs/writing-stories).

**Complete when:** the selected image is reproduced with recorded gaps, controls affect the intended code, two variants stay independent, and one saved variant restores correctly in a fresh location and works in its target screen.

### 5. Build Dream, then enable scheduling

Start with an explicit manual run. A research-reflection pass may connect existing evidence, identify gaps, and create labeled hypotheses. An implementation pass uses the existing [Dream contract](../shared/agents/dream.md): selected targets, approved standards, bounded edits, recoverable starting state, and verification. Research reflection is a proposed extension; it does not turn new hypotheses into governing taste.

Record the run's context, scope, budget, inspected targets, changes, evidence, failures, and next action. Respect concurrent edits and stop when the scope is complete or the budget ends. A repeated run should settle when no further improvement is supported.

**Complete when:** one manual run improves or accurately assesses its selected work, leaves a concise handoff, and can resume after interruption. Scheduling follows a successful pilot and Jason's explicit scheduling request. The earlier 3 a.m. suggestion remains unconfigured.

### 6. Prove the kit in another location

Restore from the bootstrap package using only the new setup entry point. Invoke all five roles, take one reference through annotation, mapping, component generation, application, and a Dream review, then export the result and resume it in another clean directory.

**Complete when:** instructions, sources, relationships, annotations, component settings, and run state survive the move without the original absolute paths. Record the host and checks performed; execution in another IDE or model remains unverified until actually tested there.

## Current starting point

| Area | Existing foundation | Work to build |
| --- | --- | --- |
| Setup | Portable export, hash verification, source manifests, folder scaffolds, and three type environment documents. | Source registry, scoped content copies, environment restoration, and branch/capability readiness checks. |
| Atlas | Approved app-interface and website-use menus, game genres, viewport references, and revised style candidates. | Linked concept records, relationships, and retrieval; the role name Atlas is confirmed. |
| Taste | Research, archive, memory, learning, and coverage contracts. | Consistent annotation records and a tested intake/retrieval workflow. |
| Dial | Detailed workflow and a verified upstream control demo. | Image-to-component integration, saved variants, and demonstrated reuse. |
| Dream | Detailed refinement instructions and enrollment rules. | A tested manual runner, reflection mode, resumption, then scheduling. |

The five role contracts and three type environment documents now exist as drafts. The immediate implementation target is **Setup's source inventory, separate Markdown resource import, scoped copying into the four-layer tree, and reproducible environment restoration**. That makes every later agent easier to install, test, and carry into another repository.
