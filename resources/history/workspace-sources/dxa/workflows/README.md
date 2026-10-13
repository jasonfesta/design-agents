# Workflows

[Home](../README.md) · [Agents](../resources/agents.md) · [MCPs](../resources/mcps.md) · [Skills](../resources/skills.md)

Five starting recipes for product work. These are original DxA instructions, not completed benchmarks or event-demo reports. Choose tools already available to your team where possible.

## Explore a product idea

**Output:** an editable prototype and a short note explaining the chosen direction.

Use Paper, Pen.dev, or Superdesign. Supply the audience, primary task, real content, and any existing brand constraints. Connect the selected tool using its own setup instructions.

1. Ask for two directions that solve the same task differently.
2. Compare flow, hierarchy, and implementation effort.
3. Choose one and build the critical path with realistic content.
4. Inspect the editable artifact and run through the task at desktop and mobile sizes.

**Review:** Can a person complete the task? Which parts are functional and which are simulated? Record those boundaries with the prototype.

## Build with a design system

**Output:** a working screen using the product's existing components and tokens.

Use Figma MCP and a coding assistant, with a component registry such as shadcn/ui only when it fits the existing stack. Supply the source frame, repository, component mappings, and token files.

1. Inspect the design and the implementation before proposing new components.
2. Map the screen to existing components and record genuine gaps.
3. Implement default, loading, empty, error, and success states where relevant.
4. Compare the result with the design and test keyboard use and responsive layout.

**Review:** Check component reuse, semantic behavior, content overflow, and token consistency. Do not treat a screenshot match as proof of working behavior.

## Design an agent interaction

**Output:** a prototype showing how a person starts, steers, corrects, and stops an agent task.

Use an editable prototyping tool and the [human-AI interaction references](../resources/papers.md). Start with one real task, such as asking an assistant to prepare a product launch draft.

1. Describe what the person asks for and what the agent can actually do.
2. Show progress and distinguish work in progress from completed work.
3. Design the relevant approval, interruption, failure, and recovery states.
4. Walk through an incorrect assumption and an unavailable tool.

**Review:** Can the person understand what happened, correct the agent, and recover their work? Clearly label simulated agent behavior.

## Review before shipping

**Output:** a prioritized list of observed problems, followed by checked revisions.

Use a browser and the DxA design-review skill; add Impeccable or UI Craft if useful. Supply a running interface and its main user task.

1. Complete the task and capture evidence of issues.
2. Check keyboard navigation, narrow layouts, long content, and failure states.
3. Separate functional defects from visual preferences.
4. Fix the highest-impact problems within the requested scope and repeat the affected task.

**Review:** Every finding should state the location, trigger, user impact, and proposed fix. Mark checks that could not be performed.

## Prepare a product demo

**Output:** a concise walkthrough with editable source assets.

Use a working prototype and Remotion if a rendered video is needed. Use fal only where generated media serves the story. Generation may require provider credits; rendering requires the relevant runtime.

1. Pick one audience, one task, and one product outcome.
2. Record the actual workflow and identify any simulated steps.
3. Generate only the supporting assets needed, keeping model and source notes.
4. Assemble the walkthrough and inspect timing, captions, legibility, and export quality.

**Review:** The demo should make the product's behavior clear and keep implemented and proposed capabilities distinguishable.
