# Setup and transfer

Return to [the starting guide](../README.md). This guide covers the folder's portable instructions and the capabilities that require setup in a receiving environment.

## Carry only design resources

Copy [Resources](../resources/README.md), or extract [the resource ZIP](../.exports/design-resources.zip), into the receiving workspace. It contains the design-resource documents in Markdown plus original license attribution. Keep the source references and dated evidence with them. Merge existing records deliberately; this resource import is independent of tool installation.

The five agent specs are in [instructions](../instructions/README.md). [SETUP.md](../instructions/SETUP.md) defines recreation of the complete design environment: a Markdown entry for apps, websites, and games, with applicable information copied underneath each type through viewport, category, and style. Automated scoped copying and restoration remain planned; the existing transfer methods below are available now.

## Three files for an existing repo

Use [the starter ZIP](../.exports/design-agent-starter.zip), or copy [the starter folder](../shared/workflow/starter/START.md) as `design-agent/` inside the destination repo. The required files are START.md, TASTE.md, and PROJECT.md. The starter ZIP contains exactly these files; the full workspace archive described below is separate.

Start a chat with: **Read design-agent/START.md. Start a new design task in this repo: [task].** To resume, say: **Read design-agent/START.md and continue from PROJECT.md.** The assistant should identify the active task, relevant taste evidence or gaps, and next action from the files.

For a different project, use a blank PROJECT.md and carry only TASTE.md's supported reusable lessons with their required assets. For the same project, keep its state and referenced code/assets. An existing destination `design-agent/` must be inspected and merged deliberately, never overwritten by extraction. START.md describes how to preserve an old project state before resetting it.

Optionally append `For design work, read design-agent/START.md.` to the receiving assistant's existing repository instruction file. The explicit prompt works without assuming automatic discovery. Do not replace the target's instructions, install the source workspace's dependencies, or copy account configuration. Copying the kit transfers written context; it does not prove identical behavior across models or reconnect tools.

These three files are portable templates under Direction Kit. The source workspace's `shared/taste/` records remain its master memory; project copies are independent. Bring supported new lessons back with their evidence and merge by scope. The [research note](../resources/research/library/portable-design-agent.md) records the rationale and the design-quality pilot still needed.

## Open the folder in an IDE

1. Copy this folder, or extract the portable ZIP. Keep hidden `.agents/` files.
2. Open the folder containing `AGENTS.md` as the workspace root.
3. Start a new agent chat and use the startup prompt in README.md.
4. Have the assistant identify the instruction files and the relevant local skill it read. Verify taste coverage before requesting a personal recommendation.
5. Connect only the tools needed for the current task. A saved installation report is not proof of a working connection in the new IDE.

| Environment | Entry point | What to verify |
| --- | --- | --- |
| Codex | Root `AGENTS.md`; project skills in `.agents/skills/` | Start from this root; check for any global overrides affecting the project. |
| Cursor | Root `AGENTS.md` | Ask the agent to read the relevant local `SKILL.md` directly if it does not discover it automatically. |
| Google Antigravity | Root `AGENTS.md` | Ask the agent to read the relevant local `SKILL.md` directly if it does not discover it automatically. |
| Another assistant with file access | Explicitly read `AGENTS.md`, `README.md`, then task-specific files | Do not assume any filename is automatically loaded. |
| A chat without folder access | Supply the relevant kit files and a complete project handoff | Attach actual reference images/assets needed for visual work. |

The current official documentation supports the shared root instruction file: [Codex instructions](https://learn.chatgpt.com/docs/agent-configuration/agents-md), [Codex local skills](https://learn.chatgpt.com/docs/build-skills), [Cursor rules](https://cursor.com/docs/rules), and [Antigravity rules](https://antigravity.google/docs/rules/). Checked October 12, 2026. This avoids maintaining duplicate Cursor/Gemini rule bodies. Recognition of these file formats is documented; end-to-end execution in Cursor and Antigravity has not been tested in this organization pass.

## Transfer options

**Same computer:** open the existing folder. Its installed app dependencies remain where they are, but each IDE has its own connection state.

**Another computer:** use the lightweight export:

```sh
python3 scripts/workspace.py check
python3 scripts/workspace.py export
```

Copy `.exports/design-agent-portable.zip` and extract it. The extracted `design-agent-portable/` directory is the workspace root. The export manifest lists each included file's SHA-256 hash. Run `python3 scripts/workspace.py verify` there to verify the transfer before editing. Use `check` for routine structural checks after edits, then `export` to create an updated snapshot. The ZIP is a snapshot, not a synchronization service. Python 3 is needed only for these maintenance commands, not for reading the Markdown workflow.

The export also includes the full personal DialKit source and an offline Git bundle. Git is needed to refresh that history when exporting from its development repository. An extracted ZIP can retain the supplied bundle without Git; restoring its history requires Git. Follow [the personal DialKit guide](../tools/dialkit/PERSONAL.md#transfer-with-history) to recover a separate checkout. Source files can include uncommitted edits, while the bundle preserves committed history only. Neither dependencies nor a built control panel are bundled.

**Inside an existing product repository:** first read that product's own instructions. Keep this kit in a dedicated directory, and add a scoped reference to its `AGENTS.md` from the product's existing instructions. Do not replace the product's `AGENTS.md`, `.agents/skills/`, tokens, or build configuration wholesale. The product's established system and the user's task still govern implementation.

**One selected design:** use Direction Kit's [handoff contract](../shared/workflow/START.md#portable-handoff). Include the complete chosen rules, token values, sources, baseline status, and needed assets. The whole research archive need not travel for every design task.

## What travels and what needs reconnecting

| Travels in the knowledge bundle | Needs separate setup when required |
| --- | --- |
| Project instructions and role contracts | IDE installation, account, and model access |
| Taste memory, research coverage, and feedback | OAuth sign-ins, licenses, and provider API keys |
| Direction Kit and expanded workflow guides | Figma, Mobbin, and other host plugins/connectors |
| Local skill guidance and supporting files | Superdesign CLI/login and output-specific runtimes |
| Research catalogue and preserved snapshots | Node/Python app environments, browser installs, and running services |
| Attribution and source manifests | Existing Codex chats, automations, browser sessions, and external image attachments |
| Personal DialKit source, lockfiles, and committed Git history | Node/npm, app dependencies, generated builds, and any personal publishing remote |

The bundle preserves historical absolute paths as provenance. They are not startup requirements on the receiving machine. Chat IDs in the index are evidence locators; another IDE cannot retrieve a Codex chat just from its ID. The local documents carry the usable findings, and missing visual attachments must be supplied when a task needs them.

## Tools and applications

Use [MCP research](../resources/research/tooling/mcp-landscape.md) for official provider setup links and [the installation report](setup/mcp-installations.md) for the dated state of Jason's Codex setup. That report points to global configuration and `.tools/` files on the original computer; those are not included in the bundle. Configure the selected server using the receiving IDE's supported MCP settings and the provider's current documentation. Do not copy private config or tokens to simulate portability.

The later **Inspect 60fps.design MCP** chat demonstrated successful Inspo and Motion tool calls after the installation report was written. Other entries have different access and verification states. Check the actual exposed tools each session; availability, authentication, and successful use are separate facts.

[LOCAL-INSTALLATIONS.md](setup/LOCAL-INSTALLATIONS.md) and [local-installations.json](setup/local-installations.json) document the optional application checkouts, source revisions, and earlier checks. The portable export intentionally omits those checkouts and their dependencies. If an application is needed on a new machine, inspect its current dependencies and install it separately under the existing lightweight-install policy.

Global skills such as the fal.ai pointer and host-bundled Figma/document/presentation/image tools are not made local merely by being visible in one Codex chat. Use an available equivalent or set up the required capability explicitly.

## Verification boundaries

`check` validates required portable paths, maintained-document relative file links, JSON parsing, local skill entry counts, and the pinned Emil source snapshot. `verify` also checks every exported file against the original transfer manifest; intended edits will change those hashes. During export, the explicitly selected DialKit repository generates a verified Git bundle; extracted copies retain that bundle until a repository is restored. Neither command validates every external URL, archived link, imported skill recipe, visual preference, credential, or live IDE integration. The script installs nothing and makes no network calls.

October 12 organization-pass checks passed: export/extraction into a different path containing spaces, structural validation, all transfer hashes, detection of a changed file and a missing relative link, re-export after intentional edits, environment-file exclusion, and symlink rejection. Hidden local skills were present; app/runtime directories were absent. These verify the transfer mechanism, not design quality or execution in another IDE.
