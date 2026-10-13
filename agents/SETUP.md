# Setup

```text
jason / setup
────────────────────────────────────────────────────────
mode     bootstrap
input    repository + destination
output   portable jason workspace
```

Create **Jason's portable workspace** on a new machine. This single Markdown file tells an IDE assistant to fetch the GitHub repository **`jasonfesta/design-agents`**, create a **`jason/`** folder at the chosen destination, and set up its contents and instructions.

Give this file to the assistant and say: “Set up Jason here.” An open repository or a chosen parent folder can be the destination. The complete kit does not need to be copied first.

## Source

```text
github_owner: jasonfesta
github_repository: design-agents
source_ref: main
install_folder: jason
```

The source is `https://github.com/jasonfesta/design-agents`, branch **`main`**; the installed folder is **`jason/`**. Jason supplied the account and repository name. The repository and branch were verified on October 13, 2026. Resolve the exact source commit during each installation; a repository URL alone does not establish which version was downloaded or whether its tools work on the target machine.

This file contains the instructions needed before download. Paths below describe the installed contents; they are not files the user must provide separately.

## Inputs

This Setup file, the configured source, a destination, and an assistant with the file/network capabilities needed to carry out installation. Use the explicitly open repository when the request says to install there. Without a known destination, ask once where to create `jason/`. A Git repository is not required. Reuse an existing Jason installation when the selected path is already its root; never create `jason/jason/`.

## Work

1. **Identify the machine and location.** Resolve the destination and read any existing instructions. Detect OS, architecture, shell, available download/archive tools, Git, Python 3, and Node/package managers needed by the selected React tools. Use paths appropriate to this machine; do not assume Jason's original username, home folder, or macOS tools. Preserve existing files and repository history/remotes.
2. **Fetch Jason.** Retrieve the configured source revision into temporary staging using an available GitHub connector, Git, or archive download. Git is optional when an archive is available. Resolve and record the source commit. Check archive contents and paths before extraction; do not copy a source checkout's live `.git` into an existing repository. Use existing authentication for private sources and identify missing access if necessary.
3. **Create the folder system.** Populate `<destination>/jason/` from the full published tree, including hidden `.agents/skills/`, role MDs, memory, resources, MCP records, type guides, licensed snapshots, scripts, configuration, and the kit's `.gitignore`. Preserve relative paths. Place source contents directly in `jason/`, removing only a download wrapper directory. Keep historical archives as evidence; restore tool source from packaged archives only when its setup requires it. Compare the resulting tree with the source rather than inventing missing files.
4. **Set up the local capabilities.** Read the installed tool and MCP setup records, then inspect the actual package manifests and available runtimes. Recreate required dependencies for tools being set up on this OS/architecture using their recorded versions and lockfiles; never copy another machine's `node_modules`, virtual environments, native binaries, or credentials. Prefer existing compatible tools and local installs. Follow the kit's lightweight-install rules before adding substantial runtimes, browsers, or model bundles. Record each capability as ready, needs installation, needs sign-in, or unsupported here; historical setup receipts are not current-machine verification.
5. **Connect the instructions.** Read `jason/AGENTS.md`, `jason/README.md`, and `jason/agents/README.md`. When installing inside an existing repository, add/update one **Jason workspace** section in its `AGENTS.md` and README, preserving the other content. Use the instruction text below with the actual relative path. For a standalone install, open `jason/` as the workspace and use its supplied entry files. Record the source URL/ref/commit, destination, date, OS, checks, and capability status in one local `jason/INSTALLATION.md`; update that receipt on reruns. This is local setup evidence, not another agent guide.
6. **Verify and hand over.** Run the installed checker with the available Python 3 executable, check the IDE pointers, and confirm all five working role files and their required resources are present. If a source package includes `EXPORT-MANIFEST.json`, verify it before making local adaptations. Check any configured tool with its actual health/build command; label checks that could not run. Report the installed folder, exact source revision, verification, and anything still needed. Then point to Atlas, Taste, Dial, Dream, and Benchmark.

Expected installed layout:

```text
<destination>/
  jason/
    README.md
    AGENTS.md
    INSTALLATION.md           Local source receipt and capability status
    agents/                   The six portable agent roles and memory
    resources/                Apps, games, websites, sizes, styles, sources, MCPs, skills
    tools/                    Benchmark and workspace.py maintenance utility
    .agents/skills/           Bundled skills in the IDE-compatible location
    workspace.json
    .gitignore
```

The agent files sit directly under `jason/agents/`. Type guides live in `resources/apps/`, `resources/games/`, and `resources/websites/`. Create the selected six-layer design branches in the actual project later. Product code and output destinations follow the project's recorded layout.

Instruction text for an existing repository's **Jason workspace** section:

```md
For design work, read `jason/AGENTS.md`, `jason/agents/README.md`,
and the requested role's MD. Follow this repository's existing
instructions and recorded project paths. Shared resources live in
`jason/`; product code and project-specific records use the chosen
project destinations. Read relevant bundled SKILL.md files explicitly
when this IDE does not discover `jason/.agents/skills/` automatically.
```

## Across machines and repeat runs

- **macOS, Windows, and Linux:** detect the actual shell and Python 3 launcher. Examples use `python3 tools/workspace.py check`; on Windows use an available `py -3` or verified Python 3 executable. Run from the installed `jason/` root. If Python is unavailable, compare the fetched tree and required paths manually and label automated verification unavailable.
- **Fresh setup:** install every published kit file. Resolve machine-specific prerequisites from actual tool manifests. A source catalogue is a research library; its entries are not a command to install every listed product. Account sign-ins and private credentials must be provided on the new machine.
- **Repeat setup:** skip identical files, restore missing ones, and preserve local modifications. Compare differing files and report conflicts; do not reset working projects or overwrite memory. Keep one installation and update its receipt and instruction sections without duplicating them. Source upgrades require an explicit update request.
- **Complete local copy:** an intact clone or transfer can be used directly as the source, recording its actual revision or export manifest. The portable `jason.zip` expands to `jason/`; extraction into an existing Jason root must not create another nested root. Retain prior exports and historical files.

## Result

One `jason/` folder contains the complete published workspace and its supporting material, with clear entry instructions and a record of what works on this machine. Report file installation separately from tool/authentication readiness. “Everything ready” requires successful checks for the required capabilities; an untested or unsupported tool remains explicit.

These are portable instructions for a capable assistant. The confirmed source is `jasonfesta/design-agents`, branch `main`. Cross-platform installation and tool support must be tested on each target OS before being claimed verified.
