# Extract a direction into a reusable design system

Working draft · October 12, 2026

Translate a specific version of `DIRECTION.md` from the [research brief](reference-intake.md) stage into implementable rules, tokens, components, and examples. The current default is a portable Markdown system specification using [Direction Kit](workflows/README.md) and its [system contract](workflows/system.md). The implementation sections below apply when code is requested. [Apply and run](application-research.md) then uses the system for a particular interface.

Use the selected evidence and direction rules. The full [research library](direction-research.md) remains available for resolving gaps, but it should not silently introduce a competing style.

## Inputs and precedence

Run [TASTE.md](workflows/taste.md) before personal taste claims. Preserve the branch's definition/version, research state, and gaps in SYSTEM.md. A requested system can be extracted from a provisional direction, but generated values do not become researched preferences.

Read the direction ID/version, selected reference visuals, fixed identity rules, permitted variations, known assets, and target stack. Inspect existing components and token conventions when a project exists.

Resolve conflicts in this order: Jason's explicit direction for the task; accessibility and product requirements; established project constraints; the chosen pack's rules; selected references; inferred defaults. If the requested theme intentionally replaces existing styling, document that mapping. Do not treat an existing palette as immutable after a restyle has been requested.

Never invent a source measurement. Mark a value as extracted from code, measured from a visual, inferred, or newly designed. When a reference lacks states or motion, design compatible behavior and identify it as an addition.

## Extract the system

| System area | Required decisions |
| --- | --- |
| Color | Semantic surface, text, border, action, focus, and status roles; valid foreground/background pairings; separate mode values where supported. |
| Typography | Families and available assets, fallbacks, weights, role-based sizes, line height, tracking, measure, and numeric treatment. |
| Layout | Grid, content width, gutters, spacing scale, density modes, alignment, and responsive transformations. |
| Shape and material | Radius roles, stroke widths, elevation, opacity, texture, and where special effects are allowed. |
| Icons and imagery | Family, stroke/fill style, size roles, cropping, placement, and asset treatment. |
| Motion | Purpose, trigger, duration/easing or spring settings, interruption, and reduced-motion behavior. Frequent work remains immediate. |
| Components | Anatomy, variants, content rules, interactions, and applicable default, hover, press, focus, disabled, loading, and error states. |
| Data and charts | Text/number hierarchy and any series or semantic color rules needed by the intended uses. |

Create the smallest component set that demonstrates the direction. Start with shared text and surface primitives, actions, a form control, and a representative content component; add other patterns when the intended use requires them.

## Put the decisions into code

For an all-Markdown pack, keep canonical values in SYSTEM.md tables and optional source examples in fenced code blocks with intended filenames. Create actual token/component/example files only for a requested implementation. Markdown state, exact snapshots and handoffs do not require a live tuning UI.

Choose one canonical token source using the target project's existing format. Derive or map other outputs from it. Record units, aliases, mode values, and component mappings so Markdown descriptions and code cannot drift unnoticed.

For a standalone web pack, plain CSS custom properties and small HTML/CSS/JS examples are a sufficient starting point. Reuse an existing React or native stack when it is the target. Do not add a new framework, runtime, or broad component library merely to package a theme.

Make components use semantic roles rather than scattering literal colors and spacing values. Show at least one traceable chain:

```text
reference and direction rule → semantic token → component state → specimen
```

Normalize inconsistent source values deliberately, documenting the choice. Check the actual installed stack before using version-dependent APIs. Identify source-code reuse and preserve its license; a visual reference does not supply permission to redistribute its fonts, icons, or other assets. Record a fallback when an asset is unavailable.

In this workspace, read the applicable installed craft skill before implementation. Apply its relevant guidance while preserving the chosen pack's identity. The [Emil router](../../.agents/skills/emilkowalski-skill/SKILL.md) and [main brief](../agents/craft-foundation.md) define that relationship.

## Carry tuned values into the system

The recovered [DialKit source review](direction-research.md#ref-004--josh-pucketts-dialkit-and-the-recovered-founder-research) gives us a concrete mechanism: export the selected values as structured data with an instruction to update the relevant configuration defaults. Use that as the starting pattern when a live tuning workbench is part of the task.

Bind the workbench controls to the same semantic values used by the specimens. Export a selected snapshot with the pack ID/version, preset ID, exact values, units, target token/configuration paths, and intended scope. Apply that snapshot to the canonical source and regenerate or update derived outputs. Verify that reopening the example from the exported code reproduces the chosen settings without depending on the author's browser storage.

DialKit supplies controls and an agent-directed configuration handoff. Mapping them to our theme tokens, generating theme exports, and retaining the direction rationale are our proposed additions. Preserve the existing local source and its license; inspect target-stack compatibility before adding it to a project. These documentation changes do not install or integrate the library.

## Pack output

The following is the optional implementation output contract, not a claim that these files already exist. The all-Markdown default and saved-state layout are in [Direction Kit](workflows/README.md).

```text
directions/<slug>/
  DIRECTION.md        # Research premise, references, identity, permitted variation.
  SYSTEM.md           # Implementable rules, token map, component/state contracts.
  <token source>      # Canonical values in the chosen stack's format.
  components/         # Reusable source where the target supports components.
  examples/           # A runnable specimen and representative composition.
  README.md           # Files to load, dependencies, exact setup and run steps.
```

`SYSTEM.md` must name the direction version it implements, the canonical token path, supported platforms/modes, approved variation presets, asset requirements, unresolved gaps, and what was actually tested. Numeric values belong in the canonical source; any values repeated in prose must agree with it.

Use declared variant tokens or presets for allowed variation. If an exploration requires a change to a fixed identity rule, create a named candidate revision rather than silently broadening the existing pack.

## Verification and readiness

Run the specimen when execution tools are available. Inspect typography, color pairings, component states, long content, a narrow layout, keyboard use, and reduced motion where relevant. Verify that the visible specimen consumes the exported code.

Check visual identity as well as consistency: a coherent generic result still fails if it loses the direction's defining rules. Record concrete mismatches against the references and fix those within scope.

Report readiness as **draft**, **code generated**, or **run and inspected**, alongside the exact checks and remaining gaps. These are evidence states, not claims that every platform or every agent has been validated. Human selection and technical verification are separate facts.

## Prompt to extract a system

```text
Use design-system.md to systemize [direction ID and version].
Read [DIRECTION.md], its selected references, and [target stack/repository].

Preserve its fixed identity rules. Resolve open extraction questions with
explicit proposals supported by the references. Distinguish observed values
from inferred or newly designed values. Define semantic tokens, responsive
rules, component anatomy/states, motion, and available assets.

Default to a Markdown SYSTEM.md with canonical token tables, component
contracts, named presets and bounded parameters. If implementation is
requested, write the reusable code in the existing stack, a runnable
specimen, and exact setup/run instructions. Keep source attribution and
document substitutions. Run and inspect the implementation when available.

Return the pack paths, visible evidence, checks performed, and remaining gaps.
Do not call generated code tested unless it was executed and inspected.
```

For Gemini or another agent without execution tools, use the same input contract and request the full source plus a handoff. Mark it code generated; the application stage owns the first actual run. Keep output limitations explicit instead of treating a rendered image as a working system.
