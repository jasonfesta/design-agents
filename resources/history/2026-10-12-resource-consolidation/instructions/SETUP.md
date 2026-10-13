# Setup

Prepare this kit for the requested design task. Read the destination's instructions first.

1. Read [README.md](../README.md), the relevant type entry ([apps](../apps/README.md), [websites](../websites/README.md), or [games](../games/README.md)), and the task's existing work.
2. Use the five agent files in this folder. Reuse [Resources](../resources/README.md) and the definitions in `shared/`; do not generate another agent pack or duplicate the catalogue.
3. Select the actual type, viewport, category, and style when known. Create only the branch needed for this task, with one README at each created layer. Leave unknown choices explicit; do not pre-create every combination.
4. Record the task, actual viewport/profile, reference links, source scope, current state, and next action in the branch README. Add component files and saved versions as the work develops. Use [the style template](../shared/styles/STYLE-TEMPLATE.md) when a style is explored.
5. Check relevant [taste coverage](../shared/taste/COVERAGE.md). Missing personal research remains missing; general style proposals do not become preferences.
6. Reuse available tools and the destination's stack. The kit's files need no installation. A requested runtime or connection gets its own readiness check; setup does not start Dream automatically.
7. Run `python3 scripts/workspace.py check` from this kit's root. Report the branch, what is ready, any missing capability, and the next action.

## Folder and Markdown contract

`apps|websites|games/<viewport>/<category>/<style>/README.md`

Apps use [interface types](../shared/workflow/taxonomy/APP-INTERFACES.md); websites use [website uses](../shared/workflow/taxonomy/WEBSITE-CATEGORIES.md); games use [game genres](../shared/workflow/taxonomy/GAME-GENRES.md). [Viewports](../shared/viewports/README.md) and [styles](../shared/styles/README.md) stay shared menus until used. Exact dimensions, motion, tools, and finer screen details stay inside the branch record.

## Copy and refresh rules

Clone or copy the whole kit to reuse it, including its bundled Resources and local skills. Within that copy, link to the canonical source instead of duplicating it into every branch. For a self-contained handoff outside the kit, include the selected branch's required context and assets with their source IDs and attribution.

Preserve existing files, local edits, source identity, dates, and licenses. Keep earlier work in [History](../resources/history/README.md); never replace an existing record solely because its filename matches. Re-running setup opens and updates the same branch.

[Transfer details](../shared/docs/SETUP.md) describe GitHub reuse, optional exports, and the preserved DialKit source. Automated installation of every external service is outside this simple setup.
