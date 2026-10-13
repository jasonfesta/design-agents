# Design MCP installation status

Updated October 12, 2026, after Jason explicitly requested installation of each discovered MCP.

**11 new Codex server entries were added:** eight hosted connections and three local servers. Ten new entries are enabled; 21st is saved but disabled until its API key is available. The existing 60fps entry was preserved. Figma and Mobbin were already exposed through installed connectors and were not duplicated.

This is an installation record. Configuration validation does not establish an authenticated connection or a successful design workflow. No design generation or component installation was performed in this installation pass.

| Provider | Purpose | Installed route | Remaining step |
| --- | --- | --- | --- |
| [Figma](https://developers.figma.com/docs/figma-mcp-server/) | Design files and implementation | Existing connector | Already available in this chat |
| [Mobbin](https://mobbin.com/mcp) | Product screens and flows | Existing connector | Already available in this chat |
| [60fps](https://60fps.design/mcp) | Motion references | Existing hosted MCP | Finish license authentication; previously pending |
| [Fglibs](https://fglibs.com/) | UI library discovery | New hosted MCP | Connection from Codex not yet verified |
| [Inspo](https://inspomcp.dev/mcp) | Website references and design systems | New hosted MCP | Free endpoint; earlier initialization and tool listing succeeded |
| [Motion](https://motion.dev/docs/ai-kit-install) | Animation documentation | New hosted MCP | Connection from Codex not yet verified |
| [Motion+](https://motion.dev/docs/ai-kit-install) | Premium animation tools | Separate new hosted MCP | Sign in with an eligible account |
| [Refero](https://refero.design/mcp) | UI references and patterns | New hosted MCP | Sign in; live reference access is paid |
| [beUI](https://beui.dev/docs/ai-agents) | Animated components and blocks | New hosted MCP | Connection and accessible content not yet verified |
| [Arc UI](https://uiarc.dev/docs/ai) | Components and implementation context | New hosted MCP | Sign in; source access follows plan |
| [21st](https://github.com/21st-dev/magic-mcp) | Component discovery and optional generation | New hosted MCP, disabled | Supply `API_KEY_21ST`, then enable; no key was found in the current environment |
| [shadcn](https://ui.shadcn.com/docs/mcp) | Shared registry access | Local package `shadcn@4.21.4` | Installed and configured |
| [Planes](https://useplanes.com/components/mcp) | Tactile and animated components | `@useplanes` registry through shadcn | Pro content needs `PLANES_LICENSE_KEY` |
| [React Bits Pro](https://pro.reactbits.dev/docs/mcp) | Animated components and blocks | `@reactbits-starter` and `@reactbits-pro` through shadcn | Needs `REACTBITS_LICENSE_KEY`; plan controls content |
| [BoardUI](https://www.boardui.com/mcp) | Application UI and charts | Local package `boardui@0.5.8`; registry also configured | Pro content needs a license |
| [Magic UI](https://github.com/magicuidesign/mcp) | Animated UI effects | Local package `@magicuidesign/mcp@2.0.0` | Installed and configured |

## Files and installation footprint

- Global server configuration: `/Users/jasonfesta/.codex/config.toml`.
- Private backup before this batch: `/Users/jasonfesta/.codex/config.toml.design-mcp-20261012T123835808445Z.bak`.
- Pinned packages and lockfile: [.tools/design-mcp/runtime/package.json](../../.tools/design-mcp/runtime/package.json) and [package-lock.json](../../.tools/design-mcp/runtime/package-lock.json).
- Shared registry configuration: [.tools/design-mcp/catalogue/components.json](../../.tools/design-mcp/catalogue/components.json).
- Repeatable configuration installer: [.tools/design-mcp/install_config.py](../../.tools/design-mcp/install_config.py). It only appends missing entries and stops if an existing named entry differs.

The three local MCP packages reuse the existing Node installation. npm installed 314 packages including transitive dependencies, occupying approximately 111 MB. Package installation scripts were disabled. No browser, model weights, application template, or component bundle was installed.

The shared shadcn connection starts in a dedicated catalogue directory so it can discover all configured registries. It is not attached to an application project. When installing actual UI components later, use the target application's configuration and merge the needed registries there; do not mistake the catalogue directory for the application.

## Finish access setup

Start a new chat or reload Codex's MCP connections to load the new configuration. If the servers do not appear, restart the app when convenient.

For OAuth providers, use `codex mcp login 60fps`, `codex mcp login refero`, `codex mcp login arc-ui`, and `codex mcp login motion-plus` as needed and complete their browser sign-in. These commands were not run in this installation pass. No account was created and no subscription was purchased.

21st expects an `x-api-key` header sourced from the `API_KEY_21ST` environment variable. Obtain the key through [21st's MCP page](https://21st.dev/mcp), make it available to the Codex process, then set `enabled = true` in the `21st` server entry. Keep credentials out of this report and version control.

For Planes Pro and React Bits, put the relevant license variables in `.tools/design-mcp/catalogue/.env.local` or the server environment. That local file is ignored by Git. Follow [Planes setup](https://useplanes.com/components/mcp) and [React Bits setup](https://pro.reactbits.dev/docs/installation) for the account's license. Free Planes items do not require a Pro license.

## Verification and limits

Codex successfully parsed and listed all 11 added entries. The configured local Node binary and each package entry point exist. The shadcn package's own schema accepted the catalogue configuration and all four configured registry names. The installer asserted that every pre-existing configuration value was preserved.

No MCP design tools were invoked in this installation pass. Earlier generic HTTP probes successfully initialized Inspo and listed its tools. Several other services rejected that probe with an edge-filter 403; that is not proof of an authentication requirement or of failure in Codex's normal client. Hosted connection health remains unverified where stated above.

Kobra and Stele remain research leads: MCP support is advertised, but no public setup endpoint was verified, so neither was installed. The [research catalogue](../../resources/research/tooling/mcp-landscape.md) retains sources and other unresolved candidates.
