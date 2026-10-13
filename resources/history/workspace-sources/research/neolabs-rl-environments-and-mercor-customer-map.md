# Neolabs Building RL Environments and the Mercor Customer Map

_Research snapshot: August 19, 2026_

## Research question

Which emerging AI labs are building reinforcement-learning environments internally, which are likely buyers of external environment/data suppliers, and what can be established about Mercor’s customer base?

## Bottom line

- **Mercor’s confirmed/reported buyer base is concentrated among established frontier labs, not publicly named neolabs.** OpenAI, Anthropic, and Meta are repeatedly named. Google is also reported as a customer; Mercor says it works with all five leading AI labs and six of the Magnificent Seven, but does not name the remainder.
- **OpenAI and Anthropic appear to be especially important accounts.** Reporting describes Mercor revenue as concentrated in a small number of frontier labs and identifies OpenAI and Anthropic as major sources of spend.
- **Mercor is evolving from expert-data marketplace to an integrated environment supplier.** It now combines millions of experts, tasks/rubrics/verifiers, enterprise operational data, benchmarks, and—through the acquisitions of Sepal AI and Deeptune—software replicas and agent-training environments.
- **The strongest neolabs build their strategic environment layer internally.** Mirendil and Poolside state this explicitly in technical hiring. Other model-building labs likely combine internal core environments with external specialist capacity.
- **A vendor is most useful where the reward function depends on scarce human expertise or faithful third-party software replicas.** Labs are more likely to insource environments tightly coupled to core research hypotheses and outsource domain coverage, expert judgments, data operations, and environment production.

## Definitions

An RL environment is more than a task dataset. It generally includes:

1. A stateful world or executable system in which an agent acts.
2. Tools or interfaces the agent can use.
3. Tasks, initial states, and success criteria.
4. Reward functions, graders, or verifiers.
5. Reset, isolation, observability, and rollout infrastructure.
6. Training and evaluation data produced from agent interaction.

“Building environments” can therefore mean anything from authoring tasks and rubrics to constructing complete replicas of Excel, Salesforce, Slack, code repositories, scientific tools, or physical simulations.

## Mercor: confirmed and reported customer base

### Named frontier-lab customers

| Customer | Confidence | Evidence | Likely purchased capability |
|---|---:|---|---|
| **OpenAI** | High | Named by Mercor’s CEO in reporting; repeatedly identified as a Mercor customer; Fortune describes OpenAI as a customer needing digital enterprise replicas | Expert data, human evaluation, domain tasks/rubrics, RL environments, enterprise-workflow simulation |
| **Anthropic** | High | Named alongside OpenAI by Mercor’s CEO and multiple reports; Fortune calls Anthropic a customer | Expert data, human evaluation, code/professional-work tasks, RL environments |
| **Meta** | High, relationship status should be time-qualified | Named by Mercor’s CEO and reporting; WIRED reported Meta paused work after Mercor’s 2026 security incident | Training data and human evaluation; exact environment programs undisclosed |
| **Google** | Medium-high | Reported among publicly disclosed Mercor customers in secondary financial reporting; Mercor’s own public materials do not clearly name it | Likely expert training/evaluation data; exact scope undisclosed |

Sources: [TechCrunch on Mercor’s lab customers](https://techcrunch.com/2025/10/29/how-ai-labs-use-mercor-to-get-the-data-companies-wont-share/), [TechCrunch on the RL-environment market](https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/), [Fortune on the Deeptune acquisition](https://fortune.com/2026/07/09/ai-unicorn-mercor-acquires-deeptune-brendan-foody-investor-a16z-openai-anthropic/), and [WIRED on Meta’s pause](https://www.wired.com/story/meta-pauses-work-with-mercor-after-data-breach-puts-ai-industry-secrets-at-risk/).

### Unnamed customer claims

Mercor reportedly claims relationships with:

- All five leading frontier AI labs.
- Six of the Magnificent Seven technology companies.
- A small number of labs that account for most revenue.

These claims should **not** be expanded into a guessed customer list. Microsoft, Amazon, Apple, NVIDIA, xAI, Mistral, Cohere, and other labs may fit the claim numerically or commercially, but no customer relationship should be recorded without attributable evidence.

### Revenue concentration

Public reporting consistently indicates customer concentration:

- TechCrunch reported in October 2025 that most revenue came from only a few AI labs.
- Secondary reporting based on internal financial documents said Mercor booked roughly $614M of gross revenue in the first half of 2026, with most spend coming from a handful of frontier labs.
- Fortune reported Mercor’s claim that every frontier-lab customer expanded after its 2026 security incident and that annual recurring revenue grew rapidly, though this is a company claim rather than audited disclosure.

This makes Mercor less analogous to a diversified staffing marketplace and more analogous to a strategic supplier serving a concentrated oligopoly of model labs.

## What Mercor sells to labs

### 1. Expert-generated training data

Mercor recruits people with real professional knowledge—software engineers, lawyers, physicians, bankers, consultants, accountants, and other specialists—to create demonstrations, critiques, rankings, rubrics, and challenging tasks. Its pitch is that models require tacit work knowledge that is absent from the public internet and that incumbent employers will not freely release.

### 2. Human evaluation and post-training data

The company supports supervised fine-tuning, preference data, RLHF, agent trajectories, failure analysis, and evaluation. Its public documentation emphasizes data at or beyond the current capability frontier rather than commodity labeling.

### 3. RL tasks, rewards, and verifiers

Mercor says it builds environments by:

1. Creating realistic, data-rich worlds.
2. Implementing the applications and tools agents need.
3. Creating rigorous tasks and verifiers.

Its expert marketplace is particularly useful for the third step: defining what good professional performance looks like and converting it into training signal.

### 4. Benchmarks that can become training environments

Mercor’s public research assets include:

| Benchmark | Domain | Environment relevance |
|---|---|---|
| APEX | Investment banking, consulting, law, medicine | Expert-authored economically valuable tasks and rubrics |
| APEX-Agents | Investment banking, consulting, corporate law | Long-horizon cross-application agent workflows |
| APEX-SWE | Software engineering | Executable engineering work and productivity evaluation |
| ACE / AI Consumer Index | Shopping, food, gaming, DIY | Realistic consumer tasks and held-out evaluations |

These benchmarks can function as evaluation harnesses, sources of RL tasks, and templates for private training environments.

### 5. Enterprise operational data

Mercor also solicits enterprise data—messages, meetings, documents, task activity, code, and business-process traces—to anonymize and contribute to frontier labs. This extends its supply from expert-created examples into real operational workflows.

### 6. Full digital replicas through Deeptune

Deeptune built stateful replicas of enterprise software and workflows where agents can practice tasks involving tools such as Excel, Salesforce, and Slack. Mercor acquired Deeptune in July 2026, filling the gap between Mercor’s experts/rubrics and the executable applications those tasks require.

### 7. Sepal AI’s data factory

Mercor acquired Sepal AI in February 2026. Sepal contributed a cloud-native system for producing training data, evaluations, expert feedback, and RL environments. The two acquisitions indicate that Mercor intends to own more of the environment-production stack rather than merely supplying labor.

## Mercor’s environment stack

```text
Enterprise operational data + expert marketplace
                       ↓
       tasks, demonstrations, rubrics, rewards
                       ↓
  Sepal data factory + Deeptune software replicas
                       ↓
       rollouts, evaluations, RL environments
                       ↓
         frontier-lab post-training pipelines
```

Mercor’s defensibility comes from combining all four components: expert supply, domain knowledge, environment engineering, and privileged customer relationships.

## Neolabs with direct evidence of internal RL-environment building

### Mirendil — strongest direct evidence

**Status: confirmed internal builder.**

Mirendil says it trains its own models end-to-end and is hiring specifically for “Post-Training, RL Environments.” The role owns:

- Data collection for complex, long-horizon RL tasks.
- Reward-hacking prevention.
- Sandboxed environments involving multiple agents, nodes, and users.
- Measurement of how training environments affect production behavior.
- New training environments targeted at production-model weaknesses.

This is not merely procurement or integration; it is a core internal research function. [Mirendil’s job description](https://jobs.ashbyhq.com/mirendil/9fd66ea3-817c-481a-b5c5-357dc993e18c) explicitly states that environment quality determines what its models learn.

**Mercor fit:** supplemental domain experts, professional-work tasks, evaluation labor, or replicas. Mirendil is unlikely to outsource the full environment-control plane that determines its core model behavior.

### Poolside — confirmed internal builder at scale

**Status: confirmed internal builder.**

Poolside trains coding foundation models and operates a Model Factory. Its RL-infrastructure role spans exploration algorithms, environment design and scaling, rollout systems, data control, learning-dynamics debugging, and distributed training across thousands of GPUs. [Poolside’s RL infrastructure role](https://jobs.ashbyhq.com/poolside/52fb1827-a825-456c-b772-5600b062ec91) confirms internal ownership.

Poolside’s coding domain offers executable rewards—tests, builds, linters, repository state, and tool outcomes—making environments central to its model advantage.

**Mercor fit:** expert repository tasks, code-review rubrics, difficult private-code workflows, and human evaluation. Execution and the core RL loop are likely insourced.

### Quadrillion Labs — confirmed internal research environments

**Status: confirmed internal builder.**

Quadrillion says it is turning research papers into RL environments and building fast loops between user data and model training for its research-intelligence model. It explicitly describes long-horizon post-training, model evaluation, and training infrastructure. [Role evidence](https://jobs.ashbyhq.com/quadrillion-labs/f488e9e6-e3b0-48d3-ad2a-aaab504f1181).

**Mercor fit:** scientific experts, paper-derived tasks, graders, and evaluation; less likely to own the research-agent environment architecture.

### Voltai — confirmed internal semiconductor RL environments

**Status: confirmed internal builder.**

Voltai is designing RL environments for chip architecture, RTL generation, simulation, verification, and optimization. It expects internal researchers to build structured rewards, evaluation frameworks, and large-scale RL post-training. [Role evidence](https://jobs.ashbyhq.com/voltai.careers/e44f5730-4fd7-447d-b085-ed435817d5b5/).

**Mercor fit:** semiconductor experts and human review. The actual EDA toolchain, formal verification, simulators, and reward mechanics likely remain deeply internal or are co-developed with specialist vendors.

### Mistral — established frontier lab with confirmed internal environment infrastructure

**Status: confirmed internal builder; not a neolab in the narrow sense.**

Mistral is hiring to run more than one million isolated code environments concurrently, collect trajectories and self-play data, and power interactive RL for coding agents. [Role evidence](https://jobs.ashbyhq.com/mistral.ai/af7c3cf8-f4f4-4a16-80e9-fdfb0c14104d).

**Mercor fit:** tasks, expert review, and specialized datasets rather than core execution infrastructure.

## Emerging labs with strong strategic need but incomplete direct evidence

| Lab | Environment thesis | Evidence level | Likely build/buy posture |
|---|---|---:|---|
| Core Automation | Automated AI research requires code, experiment, and research environments with measurable improvement | Strong inference from mission; no specific environment disclosure captured | Build core research loop; buy tasks, benchmarks, and overflow data |
| Discovery Loop | Automated science/engineering requires tool-rich scientific environments and experiment verification | Strong inference | Build scientific orchestration; partner for discipline experts and simulators |
| Ineffable Intelligence | David Silver-led superintelligence lab strongly implies RL-centered training | Strong team/mission inference; insufficient public stack detail | Likely internal-first and highly secretive |
| Oak Lab | Goal-directed agents in large worlds are inherently environment-centric | Strong research inference | Internal research environments; possible open/community components |
| Poetiq | Recursive self-improvement uses harnesses, verifiers, benchmarks, and iterative feedback | Strong public product/research signal | Build harness/self-improvement layer; may use third-party benchmarks |
| Recursive | Automating knowledge discovery requires long-horizon research environments | Mission inference | Internal research loop with external scientific data/expert partners |
| Ricursive Intelligence | Chip-design self-improvement requires EDA tools, verification, and executable rewards | Strong domain inference | Internal or co-developed chip environments |
| Periodic Labs | An AI scientist requires physical/digital laboratory environments and result verification | Strong mission inference | Internal lab automation; external scientific tooling and experts |
| Lila Sciences | Scientific superintelligence requires closed-loop experimental environments | Strong mission/product inference | Vertically integrated physical labs plus internal model environment |
| Physical Intelligence | Robot learning depends on real/simulated physical environments | Strong technical evidence for model training; vendor details undisclosed | Internal data/robot stack plus simulation partners |
| World Labs | 3D world models provide environments for perception, generation, reasoning, and robotics | Strong technical/product inference | Core world/environment layer is the product, so internal-first |
| General Intuition | Agents for spatial and temporal worlds require interactive environment data | Strong mission inference | Build internal worlds; purchase data/compute selectively |
| Moonlake AI | World simulations and games are directly usable as agent-training environments | Strong mission inference | Internal environment engine may itself become a supplier |
| Grafton Sciences | General physical ability needs embodied-task environments | Mission inference | Internal robotics/simulation with possible external data partners |
| Math, Inc. | Verified mathematical intelligence has unusually cheap, deterministic rewards | Strong domain inference | Build internal formal environments and verifiers |
| Harmonic | Mathematical reasoning engine benefits from formal proof/checking environments | Strong domain inference | Internal theorem/proof tooling; limited need for human-data vendors |
| Logical Intelligence | Critical-system energy models need structured simulation and constraint verification | Medium inference | Likely internal domain environments |
| Isomorphic Labs | Drug-discovery models require biological/chemical simulation and wet-lab validation | Strong domain inference | Integrated proprietary environment; expert/data partnerships possible |
| Helical | Virtual AI lab for biology implies tool-using scientific environment | Strong mission inference | Hybrid internal platform and scientific data/tool suppliers |

These entries are research leads, not proof of an active RL-environment program. Hiring pages, model cards, papers, infrastructure talks, and vendor case studies should be sought before upgrading them to “confirmed.”

## Environment suppliers that can be mistaken for neolab buyers

Some emerging labs are themselves sellers to frontier labs rather than downstream buyers:

| Company | Supplier role |
|---|---|
| Bespoke Labs | Curates RL environments, benchmarks, and training data; tests environments through small-scale training |
| Traverse | Builds environments for subjective, expert, non-deterministic work and integrates them into partner-lab post-training |
| Taste Labs | Builds post-training data and environments for visual/design taste; claims most frontier labs as customers without naming them |
| Antim Labs | Interactive play/exploration environments for machine cognitive skills |
| Fleet AI | Enterprise software and browser/computer-use replicas |
| Chakra Labs | Deterministic computer-use clones and environment hub |
| Mechanize | High-fidelity coding and digital-office environments |
| HUD | Tools to package real software as agent environments and define rewards |
| Datacurve / Proximal / Vmax | Coding environments, data, and verifiers |
| Gray Swan / Andon / Vals | Adversarial evaluation, long-horizon benchmarks, and domain evals |

This group competes with pieces of Mercor’s stack and may also supply the same major labs.

## Build-versus-buy model for neolabs

### Labs tend to build internally when

- The environment embodies the lab’s core research hypothesis.
- Training requires tight iteration between model researchers and environment engineers.
- Reward hacking or contamination would invalidate expensive training runs.
- The environment contains proprietary model behavior, data, or tools.
- Scale, latency, and observability materially affect learning dynamics.
- The domain offers deterministic verification that the lab can automate itself.

### Labs tend to buy or partner when

- Success depends on scarce domain experts.
- Large volumes of tasks, rubrics, or human judgments are required quickly.
- Many third-party applications must be replicated and maintained.
- The work spans dozens of professional domains outside the lab’s expertise.
- Independent evaluation is desirable.
- Production peaks exceed internal data-operations capacity.
- Data licensing, recruitment, payments, or compliance are operational burdens.

### Most likely equilibrium

The likely architecture is hybrid:

```text
Lab-owned RL control plane
  ├── internal north-star environments
  ├── model-specific curriculum and reward research
  ├── sensitive rollout and training infrastructure
  └── external modules
       ├── expert tasks and human judgments
       ├── maintained software replicas
       ├── licensed enterprise data
       ├── specialized vertical environments
       └── independent benchmarks and red teaming
```

Mercor is trying to become the default provider of the external modules while moving upward into the full environment layer.

## Likely Mercor customer fit among neolabs

This is a commercial-fit assessment, **not a customer claim**.

| Lab | Potential Mercor fit | Fit |
|---|---|---:|
| Mirendil | Scientific experts, long-horizon professional research tasks, human grading | High |
| Core Automation | AI-research tasks, coding environments, researcher trajectories | High |
| Discovery Loop | Scientists/engineers, research workflows, tool tasks | High |
| Recursive | Expert knowledge-work and scientific-discovery tasks | High |
| Quadrillion | Researchers, paper-derived tasks, evaluation | High |
| Poolside | Expert coding tasks and repository-scale human review | High, but crowded supplier market |
| Ricursive Intelligence | Chip experts, RTL/verifier tasks | High but specialist |
| Voltai | Semiconductor experts and design-review data | High but specialist |
| Helical | Biology experts and tool-use tasks | Medium-high |
| Isomorphic Labs | Chemistry/biology experts; strict data/IP constraints | Medium-high |
| Lila Sciences | Scientific experts and experiment rubrics | Medium-high |
| Physical Intelligence | Robot demonstrations and human task design | Medium; different data modality |
| World Labs | 3D/spatial annotations and human evaluation | Medium |
| Math, Inc. / Harmonic | Expert formalization data, though automatic verifiers reduce human dependence | Medium |
| Ineffable Intelligence | Potentially large, but likely secretive and internal-first | Unknown-high |
| Oak Lab | Research collaboration more likely than large commercial data operations | Medium-low |
| Poetiq | Benchmark/harness focus may reduce need for a full external data supplier | Medium-low |

## Competitive implications for Mercor

### Strengths

- Deep access to high-value frontier-lab budgets.
- A large expert marketplace spanning many economic domains.
- Ability to recruit domain practitioners that labs cannot access directly at scale.
- Benchmarks and public research that improve credibility with model researchers.
- Sepal and Deeptune expand Mercor from people/data into environment software.
- Enterprise-data program can connect real workflows to agent training.

### Risks

- High customer concentration and negotiating leverage held by a few labs.
- Labs can internalize environment teams once a domain becomes strategically critical.
- Security incidents are unusually damaging because training recipes, contractor data, and lab projects are sensitive.
- Specialist environment vendors may outperform Mercor in coding, computer use, robotics, or scientific domains.
- Acquiring environment startups creates integration complexity and potential channel conflict.
- Frontier labs may prefer multiple suppliers to prevent leakage, benchmark contamination, and vendor dependence.

### Strategic question

Mercor’s key challenge is whether it remains a variable-capacity supplier around lab-owned training loops or becomes the environment operating system through which a meaningful share of frontier post-training runs.

## Next research pass

1. Capture every current neolab job mentioning environments, RL, post-training, rewards, verifiers, sandboxes, simulation, or human data.
2. Search research papers and model cards for named environment frameworks and external contributors.
3. Search supplier case studies, conference talks, GitHub acknowledgments, benchmark credits, procurement records, and employee profiles for customer evidence.
4. Build one profile per confirmed lab with environment type, internal team size, tooling, reward structure, and external vendors.
5. Track Mercor’s acquisitions and whether Sepal/Deeptune products remain standalone or are integrated into a unified platform.
6. Monitor customer concentration, changes after the security incident, and whether Meta resumes work.
7. Compare Mercor directly with Surge AI, Scale AI, AfterQuery, Huzzle Labs, Fleet AI, Mechanize, and specialist environment vendors.

## Primary and attributable sources

- [Mercor Research](https://www.mercor.com/research/)
- [Mercor documentation: types of training data](https://www.mercor.com/docs/types-of-data/)
- [Mercor Enterprise AI](https://www.mercor.com/blog/introducing-mercor-enterprise-ai/)
- [Mercor enterprise-data program](https://www.mercor.space/data/)
- [Applied Compute’s Mercor case study](https://www.appliedcompute.com/case-studies/mercor)
- [TechCrunch: how AI labs use Mercor](https://techcrunch.com/2025/10/29/how-ai-labs-use-mercor-to-get-the-data-companies-wont-share/)
- [TechCrunch: RL-environment market](https://techcrunch.com/2025/09/21/silicon-valley-bets-big-on-environments-to-train-ai-agents/)
- [Fortune: Mercor acquires Deeptune](https://fortune.com/2026/07/09/ai-unicorn-mercor-acquires-deeptune-brendan-foody-investor-a16z-openai-anthropic/)
- [WIRED: Meta pauses work after Mercor security incident](https://www.wired.com/story/meta-pauses-work-with-mercor-after-data-breach-puts-ai-industry-secrets-at-risk/)
- [Mirendil: Post-Training, RL Environments role](https://jobs.ashbyhq.com/mirendil/9fd66ea3-817c-481a-b5c5-357dc993e18c)
- [Poolside: RL Infrastructure role](https://jobs.ashbyhq.com/poolside/52fb1827-a825-456c-b772-5600b062ec91)
- [Quadrillion Labs: research-model environment role](https://jobs.ashbyhq.com/quadrillion-labs/f488e9e6-e3b0-48d3-ad2a-aaab504f1181)
- [Voltai: semiconductor post-training role](https://jobs.ashbyhq.com/voltai.careers/e44f5730-4fd7-447d-b085-ed435817d5b5/)
- [Mistral: code-agent RL environment infrastructure](https://jobs.ashbyhq.com/mistral.ai/af7c3cf8-f4f4-4a16-80e9-fdfb0c14104d)
- [Bespoke Labs: RL Environments role](https://jobs.ashbyhq.com/bespokelabs/cce3b6b0-c125-4b6f-a2b3-a5e5c359b0f8)
- [Traverse: RL-environment research role](https://jobs.ashbyhq.com/Traverse/bb6cd908-dba8-414a-98d4-ff33e0a908e2)
