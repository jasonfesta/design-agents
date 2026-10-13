# Reuse and transfer

Start with [README.md](../../README.md) and [the Setup agent](../../instructions/SETUP.md). There is one current kit.

## From GitHub

Clone the repository or download its source ZIP, open the root, and give the assistant the startup prompt in README. The tracked Markdown, research, history, and local skill guidance are the reusable environment. No npm install or service startup is needed to read and use it.

To place it inside an existing repository, copy the complete kit into `design-agents/` and ask the assistant to read that folder's README. Preserve the receiving project's instructions and design system. Read only the relevant skill and its references; a catalogue pointer is not a fully installed capability.

```sh
python3 scripts/workspace.py check
```

The GitHub repository carries knowledge and preserved sources. Local tool installations, dependency folders, credentials, generated exports, and machine configuration are ignored. Existing local installations are kept in place. Account connections need access on the receiving host.

## Optional ZIP export

```sh
python3 scripts/workspace.py export
```

This creates `.exports/design-agent-portable.zip`. Extract it and run `python3 scripts/workspace.py verify` in the extracted root to check the transfer hashes. Exports are snapshots, not another maintained agent version. Resources can also be copied independently.

## Optional DialKit

The preserved [DialKit source archive](../sources/dialkit-source.zip) contains the personal source files, lockfiles, attribution, and committed-history bundle under `dialkit/`. It includes working files as well as the committed history, so uncommitted source changes are preserved. Extract it into an empty `tools/` folder when DialKit is needed; never overwrite an existing checkout. Read the extracted `tools/dialkit/PERSONAL.md` before installing dependencies or restoring Git history.

On this computer, the existing `tools/dialkit/` checkout remains the development copy. Export refreshes the preserved archive from that checkout when present. On a new clone, the supplied archive is retained. Optional tool checkouts are not nested Git repositories inside the parent GitHub commit.

Historical [local installation notes](setup/LOCAL-INSTALLATIONS.md) and [tool research](../../resources/research/tooling/mcp-landscape.md) describe other sources. They do not prove a tool is currently connected. The complete image-to-component workbench and Dream scheduling are not implemented by this transfer.

## Preservation

[Resources History](../../resources/history/README.md) keeps earlier instructions, research, source snapshots, and empty scaffolding. Its preservation manifest records previous paths and hashes. The current five agent files remain in `instructions/`.

`check` validates current relative file targets, JSON, pinned craft sources, and source archive integrity. It does not validate every external URL, historical link, visual preference, or tool connection. `verify` additionally checks the export's hashes.
