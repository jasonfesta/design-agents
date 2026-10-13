# Portable design agent research

October 12, 2026 · Research and implementation recommendation for Jason

Build a small agent that uses Jason's relevant examples and corrections to make a design closer to his intent. The recommended starting package is three Markdown files: instructions, reusable taste memory, and current project state. Load images and larger examples only when they are relevant. The [starter](../../../shared/workflow/starter/START.md) implements that file contract; better design output still needs a pilot with Jason.

## Findings that change the proposal

### Personal judgments are valuable training evidence

DesignPref collected 12,000 pairwise UI comparisons from 20 professional designers and found substantial disagreement between them. Its personalized evaluation methods generally predicted individual preferences better than pooled judgments; retrieval gains varied by model. Its methods include supplying a designer's prior labeled examples at inference time. This is unusually relevant evidence for preserving Jason's choices and reasons. It studies preference prediction on generated screens, however, not reliable production design generation for a new individual. [DesignPref, November 2025, methods and limitations](https://arxiv.org/html/2511.20513v1).

**Our adaptation:** retain the compared designs, Jason's choice, reason where supplied, and task scope. Retrieve the relevant personal examples for a new task. Preserve “neither” and “no preference” so comparison does not force false taste rules. Manual file retrieval is our lightweight implementation choice, not a replication of the paper's embedding pipeline.

### Specific critiques can help an agent evaluate designs

UICrit studied expert critiques associated with mobile UI screens and found that few-shot and visual prompting improved generated feedback in its evaluation. The paper distinguishes this from future reward-model training and fine-tuning. Its findings support collecting concrete critiques tied to visible regions; they do not establish a universal taste score or equivalent gains with today's models. [UICrit, UIST 2024](https://arxiv.org/abs/2407.08850v3).

**Our adaptation:** save which region or relationship failed, the desired change, and the before/after artifact. Include an actual image when the lesson depends on appearance. A label such as “editorial” is insufficient on its own.

### Rendering and iteration need their own checks

1D-Bench evaluates executable React interfaces in an iterative workflow. Its experiments generally improved rendering success and often visual similarity through editing with execution feedback. Its post-training pilot reported limited, unstable gains. The setting is specific to its toolchain and e-commerce tasks. [1D-Bench, July 2026 revision](https://arxiv.org/abs/2602.18548v3).

Design2Code also combines visual metrics with human evaluation for screenshot reproduction. It evaluates reproduction rather than personal taste. [Design2Code, NAACL 2025](https://arxiv.org/abs/2403.03163v3).

**Our adaptation:** separately record whether code works, whether a reconstruction matches its source, and whether Jason accepts the adapted direction. A successful build proves none of the visual judgments. Preserve the reference viewport and actual rendered evidence.

### Memory can improve attempts without changing model weights

Reflexion uses written feedback and episodic memory to inform subsequent attempts without weight updates. Its experiments cover decision-making, coding, and reasoning. This supports the mechanism of a saved lesson feeding a later attempt, while leaving its effectiveness for Jason's design work unproven. [Reflexion, 2023](https://arxiv.org/abs/2303.11366v4).

**Our adaptation:** use a compact record of the attempt, feedback, change, outcome, and scope. Keep Jason's explicit judgment separate from the agent's hypothesis. Begin with this inspectable memory loop; consider fine-tuning only if repeated evaluation identifies a failure that better examples, instructions, or tools do not resolve.

### Extra instructions can make the system less useful

The September 2026 revision of Evaluating AGENTS.md reports that repository context files did not generally improve success in its coding tasks and increased inference cost on average. Its conclusion favors specific nonstandard practices and measured evaluation over broad repository overviews. This is a warning about unnecessary instructions, not evidence that all personal memory is harmful. [Evaluating AGENTS.md, version 3](https://arxiv.org/abs/2602.11988v3).

Anthropic's context guidance recommends compact instructions, representative examples, and loading information as needed, including file-based notes for continuity. That is practitioner guidance rather than a controlled evaluation of this starter. [Effective context engineering, September 2025](https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents).

**Our adaptation:** one assistant can perform the required roles. Keep the research archive, taxonomy, full skill suite, integrations, and Dream operations available outside the startup core. Add an instruction only when it expresses a real requirement or addresses an observed failure.

### Measure the outcome with the right judge

Anthropic's evaluation guidance distinguishes code, model, and human graders and explains the need to calibrate subjective model judgments against people. It also separates capability evaluation from regression checks. [Demystifying evals, January 2026](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents).

**Our adaptation:** use existing checks for functional correctness, image comparison for reproduction, and Jason's judgment for closeness to intent. Track repeated corrections and retained accepted decisions. An agent cannot establish a personal preference by repeatedly approving its own work.

## The smallest useful package

| File | Owns | Travels to a new project |
| --- | --- | --- |
| START.md | Working loop and startup instructions | Yes |
| TASTE.md | Confirmed scoped preferences, evidence, and separate hypotheses | Yes, with required evidence |
| PROJECT.md | Current intent, references, artifacts, feedback, checks, and next action | Continue for the same project; start blank for a different one |

Create `references/` only when real images or larger examples are available. Keep their origins and licenses. The starter has no dependency on this research note, the full workspace, a vector database, an account connector, or an automatic scheduler. Its destination assistant still needs the capabilities required by the task. Cross-model consistency is not guaranteed by a common file format.

Use an explicit startup prompt as the dependable content-loading instruction. AGENTS.md is a plain Markdown convention; Cursor documents support for it, while Claude documents CLAUDE.md. A short pointer in the host's existing instruction file can improve discovery, but the starter should not replace that file or assume every host loads the same names. [AGENTS.md](https://agents.md/), [Cursor rules](https://cursor.com/docs/rules), [Claude context guidance](https://support.claude.com/en/articles/14553240-give-claude-context-claude-md-and-better-prompts).

The full source workspace remains canonical for its research and master memory. The starter's template memory begins without visual preferences. Project copies become independent working records; returning a lesson to the master memory requires merging its evidence and scope. Copying files provides portability, not synchronization.

## Proposed pilot

Use one concrete product task with supplied references and matching comparison conditions. Reproduce the reference, save the initial render, get Jason's critique, and revise. Then give the agent a second relevant screen using the recorded lesson, saving its first result before further critique. Record whether the correction transferred and which mistakes recurred.

For a more controlled comparison later, use equivalent isolated runs with the same brief, model, tools, content, and viewport, changing only access to the learned example. Hide the run labels and vary presentation order when Jason compares outputs. Keep evaluation examples out of the lesson set until that comparison is complete. Repeat before claiming general improvement; a single preference or faster run is pilot evidence.

The minimum useful outcome is an editable design Jason finds closer to his intent, a correction that helps a later attempt, and a fresh session that can resume from the saved files. Neither a large reference collection nor the number of memory entries demonstrates that outcome.

## Implementation status

The three-file starter is prepared. Its archive is checked for exact contents, relative links, and extraction into a different path. The larger workspace retains its existing check and export workflow. No visual training examples have been supplied for this pilot, no model has been fine-tuned, and no cross-IDE design-quality test has been run.
