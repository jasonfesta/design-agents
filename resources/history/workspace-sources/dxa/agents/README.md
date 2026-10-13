# Use DxA with an assistant

[Home](../README.md) · [Available skills](../skills/README.md)

## Read the guide

Give an assistant this repository's README and the task you want to accomplish. An assistant that can read Markdown can use the guide as reference material. This does not require installing skills.

## Install a local skill

Use a local checkout or downloaded copy of this repository. From its root, list the available skills:

```bash
npx skills@1.7.0 add . --list
```

Install the catalogue guide into a supported assistant:

```bash
npx skills@1.7.0 add . --skill dxa-catalogue
```

The installer lets you choose the target assistant. Review the target and scope before completing installation. To install a different DxA skill, use its name from the [skill list](../skills/README.md).

Node.js and npm are required for this optional method. The [Skills CLI](https://github.com/vercel-labs/skills) documents supported clients and installation options. For manual installation, copy the complete chosen skill folder into the skill location documented by your assistant.

## Compatibility

Each DxA skill has a `SKILL.md` file with name and description metadata and self-contained instructions. Support for automatic skill discovery depends on the assistant.

MCP connections, account access, and generation services are configured separately through their upstream documentation. Installing DxA does not enable all the tools in the directory.

## Verification

Local discovery and installation are checked separately from agent behavior. See [Updates](../resources/updates.md) for the current validation record.

When editing the guide, check local Markdown links, fragments, artwork references, and skill metadata. External availability is reviewed separately.
