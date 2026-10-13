# Research and attribution

Reviewed October 12, 2026. This records what informed Direction Kit, what is our proposal, and what remains unverified.

## Category organization

The current consumer-category lists follow [Google Play Console Help](https://support.google.com/googleplay/android-developer/answer/9859673?hl=en), rechecked October 13, 2026. It publishes 32 app category names and 17 game genres. [App product categories](../../apps/categories.md) and [GAME-GENRES.md](../../games/categories.md) retain the names; their stable IDs are ours.

Jason's [TR-037 decision](../../../agents/memory/research.md#taste-ref-tr-037--product-categories-and-interface-subcategories) sets **apps / websites / games → device type → viewport size → category → subcategory → style**. Apps use store product categories, websites use website purposes, and games use genres. Each has interface subcategories. Device classes and exact sizes are separate layers; exact screen labels, components, states, and source tags remain fields. These are not additional Google Play categories or claims of store/platform availability.

The earlier 27-category menu blended [Apple's category guidance](https://developer.apple.com/app-store/categories/) and Google Play with custom subjects such as Fashion. That historical menu and IDs are retained in [LEGACY-CATEGORIES.md](../../history/category-menus/legacy.md); it is superseded for new classification. Keep earlier evidence and the original labels intact when resolving it to current branches.

Jason's earlier requirement for nighttime refinement against researched taste recommendations remains active. Category organization does not supply those recommendations or approve a style or baseline.

## Design instructions and style vocabulary

[Awesome Design Skills](https://github.com/bergside/awesome-design-skills) pairs agent-oriented SKILL.md files with human-readable DESIGN.md intent. Its registry includes aesthetic names, material treatments and other labels at different levels of abstraction. We borrow the principle of explicit reusable design instructions. Our family/treatment/facet distinction is a proposed normalization, not the repository's taxonomy. No skills were installed for this review.

[UI UX Pro Max](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) organizes design guidance across styles, palettes, typography, UX and implementation stacks. It is another reference for separating design dimensions. Its README was reviewed; the tool was not installed or benchmarked for this task.

Style labels in TAXONOMY.md are a working vocabulary for organizing research. They are not a claim that visual history divides into eight canonical families. A style's active rules must come from its own evidence and Jason's decisions.

## Graphical and DialKit

[Graphical's public site](https://www.graphicalui.com/) presents themed components, adjustable design choices, a GUI.md reference and agent-oriented workflows. Its public [preview](https://www.graphicalui.com/marketing/preview?mode=light) and [changelog](https://www.graphicalui.com/changelog) were reviewed. The purchased GUI.md and private implementation were not inspected. We take the idea of a coherent, reusable design direction described for agents; we do not claim to reproduce its internal format.

The earlier chat **Explain GraphicalUI charge**, October 5–6, reviewed [Josh Puckett's repositories](https://github.com/joshpuckett?tab=repositories) and [Adam Michela's repositories](https://github.com/soopa?tab=repositories). Jason chose DialKit as a starting point and requested a local clone. Recovering that chat corrected the first draft's omission of this research. That historical search did not locate public Graphical source; it does not establish that none exists today.

The saved [DialKit reference](https://github.com/joshpuckett/dialkit/blob/0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3/docs/reference.md) and [copy-instruction source](https://github.com/joshpuckett/dialkit/blob/0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3/src/copy-instruction.ts) were inspected at revision `0301abdf0b84fc3d60a4c4fa3a99bfb2044959e3`, package 2.0.1. They support bounded controls, named versions and exporting exact values with an instruction for the agent to update configuration defaults. Optional browser persistence is distinct from a saved portable artifact.

Direction Kit translates those ideas into conversational controls, immutable Markdown snapshots and complete handoffs. Taxonomy, research history, semantic systems and Dream Mode are our additions. DialKit is MIT-licensed, copyright Josh Puckett; no implementation code was copied into this kit. We did not run DialKit or establish that Graphical uses it internally.

### Upstream DialKit implementation coverage

Jason reaffirmed [Josh Puckett's repository](https://github.com/joshpuckett/dialkit) on October 12. The [research record](../direction-research.md#october-12-follow-up--upstream-capabilities-to-account-for) maps its public capabilities to our intended integration. [SYSTEM.md](system.md#mapping-a-system-to-dialkit) defines the control-to-system mapping; [APPLY.md](apply.md#when-the-build-includes-dialkit) covers implementation and saving the result. This accounts for the upstream software in our plan while preserving the distinction between documentation reviewed and software integrated or tested.

Jason then requested our own version. The full source now lives separately at [tools/dialkit/](../../../tools/dialkit/PERSONAL.md), based on the same upstream revision, with its original MIT notice and history. Personal foundation 0.1.0 adds development/provenance records; upstream control code is unchanged. The [GitHub follow-up](../direction-research.md#october-12-github-search-and-personal-source) records the fresh public-repository search. Source preservation does not mean a personal workbench has been built.

Jason subsequently clarified the intended product: reproduce screenshots in editable code first, connect the same code to DialKit without changing its initial appearance, then prompt changes or explore independent style kits. [TR-003](../../../agents/memory/research.md#taste-ref-tr-003--image-references-to-dialkit) retains his correction. The [image-reference workflow](research.md#image-references-to-dialkit) is our added interpretation/generation layer; it is not an upstream image-analysis capability.

### Native DialKit reference added by Jason

On October 12, Jason supplied [Michael Lee's GitHub](https://github.com/mikelikesdesign), then [DialKit macOS](https://github.com/mikelikesdesign/dialkit-macos). The workspace's [REF-005](../direction-research.md#ref-005--michael-lees-dialkit-macos) records the inspected documentation, package requirements, MIT attribution, and review limits. This is an additional candidate implementation for the live-control stage; Direction Kit remains our portable Markdown workflow. Adding the reference did not install or integrate the package or establish a personal taste preference.

## Workspace lineage

The [craft foundation](../../agents/craft-foundation.md) and [original workspace sources](../../history/workspace-sources/README.md) consolidate DxA workflows, DesignJig studies, Design Agents resources, Superdesign documentation and installed craft guidance. The earlier four direction guides separated historical research, active briefs, system extraction and application. This folder makes those stages portable and adds the taxonomy, conversational controls and shared state contract.

The separate **Draft design dreaming AGENTS.md** chat and its [October 12 Dream brief](../../history/agents/dream.md) define Dream Mode as refinement of daytime experiments against approved taste standards, preserving their ideas. This kit adds category/style mapping and a portable run contract. The other chat's workspace brief remains the source for local scheduling decisions; no schedule was created here.

The concurrently drafted Taste Agent assigns research capture, archive recovery, current memory and learning to distinct roles. Its label model separates product scope, style, design aspect, intent and preference scope. Direction Kit reuses that distinction and provides the shared category/style vocabulary; it should consume existing evidence records rather than create a competing history.

These are provenance notes, not required local-file dependencies. The kit includes its operative instructions. Reference visuals and project assets still need to travel with an actual handoff.

## Validation boundaries

The deliverable is a Markdown instruction kit and an illustrative Fashion specification. The example is neither an approved baseline nor a rendered design. Research-source review does not establish implementation quality. Cross-model execution, visual fidelity and overnight behavior remain to be tested with a real reference-fed pack.
