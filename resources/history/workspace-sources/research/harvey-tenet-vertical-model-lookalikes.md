# Harvey Tenet Lookalikes: Vertical AI Companies That Own Their Models

_Research snapshot: August 19, 2026_

## Research objective

Find companies resembling Harvey after its reported launch of **Tenet**, its first in-house proprietary legal LLM: vertical application companies that own a meaningful part of the intelligence layer rather than only wrapping a third-party foundation-model API.

This is an evidence-led market map, not a claim that every company trains a foundation model from scratch. It distinguishes four increasingly weaker forms of model ownership:

- **Tier A — owned core model:** a named, in-house domain model or foundation model is deployed in the product.
- **Tier B — owned specialized models:** proprietary task models or a model suite are trained in-house, while frontier LLMs may still handle general reasoning.
- **Tier C — post-trained/custom model:** the company controls domain adaptation or RL of an open or partner model, but does not clearly own the original base model.
- **Tier D — system moat, not model moat:** proprietary data, retrieval, evals, orchestration, workflows, or agents layered over third-party models.

The strict Harvey/Tenet comparison is **Tier A**. Tiers B–D are included because they can evolve into Tier A and because marketing language often obscures the distinction.

## Executive findings

1. **The clearest Tenet peers are Luminance, Hippocratic AI, Intercom/Fin, Cursor, Poolside, Skild AI, Waabi, and Covariant.** Each publicly identifies an owned, domain-specific core model.
2. **Legal is becoming a multi-model vertical, not a winner-take-all model market.** Harvey and Luminance both combine proprietary models with outside frontier models. Robin AI and EvenUp own specialized model layers but disclose less evidence of an owned general legal LLM.
3. **Healthcare has the deepest evidence of domain training loops.** Hippocratic AI has a named healthcare model constellation; Abridge is building a clinical-conversation foundation model with NVIDIA and already owns medical ASR, hallucination detection, and specialty models; Nabla owns medically adapted speech/language models.
4. **Coding has the densest cluster of application companies that became model labs.** Cursor, Poolside, Magic, Windsurf/Cognition, and Replit all show in-house model work, often using executable environments and RL.
5. **Customer support has a canonical vertical-model transition.** Intercom replaced its frontier core answering model with Apex after accumulating large-scale resolution data. This is perhaps the closest non-legal analogue to Harvey’s strategic move.
6. **Finance application startups generally remain model orchestrators.** Bloomberg is the strongest owned-model example; Rogo, Hebbia, Boosted.ai, and RavenPack disclose strong data/workflow advantages but rely substantially on third-party models.
7. **“Proprietary AI” is not enough evidence.** A proprietary platform, prompt layer, agent engine, or knowledge graph does not establish ownership of model weights.

## Closest cross-vertical analogues

| Company | Vertical | Owned model | Tier | Why it resembles Harvey/Tenet |
|---|---|---|---|---|
| Harvey | Legal | Tenet (reported); custom legal models | A/C | Vertical application leader moving from model orchestration into owned legal intelligence |
| Luminance | Legal | Luna Crescent | A | Proprietary legal intelligence model trained on contract concepts; deployed beside frontier models |
| Hippocratic AI | Healthcare | Polaris | A | Owned healthcare LLM constellation trained and evaluated with clinical data and experts |
| Abridge | Healthcare | Clinical-conversation foundation model in development | A/B | Builds its own clinical model stack and is training a domain foundation model with NVIDIA |
| Intercom / Fin | Customer service | Apex | A | Replaced the third-party core answering model with a proprietary vertical model trained on support data |
| Cursor | Software engineering | Composer; Fusion/Tab | A | Own MoE coding-agent and completion models trained with RL in real coding environments |
| Poolside | Software engineering | Laguna family; Malibu; Point | A | Builds full coding foundation models and model-training infrastructure |
| Windsurf / Cognition | Software engineering | SWE-1 family | A | Proprietary software-engineering agent models trained for long trajectories |
| Skild AI | Robotics | Skild Brain | A | Omni-bodied robotics foundation model trained across embodiments and data sources |
| Waabi | Autonomous vehicles | Waabi Driver shared AI model | A | Owned end-to-end reasoning model paired with a neural simulator |
| Covariant | Robotics | RFM-1 | A | Commercial robotics foundation model grounded in deployed warehouse systems |

## Legal

_The full competitive universe is mapped in [Harvey-Like Legal AI Companies: Global Market Landscape](./harvey-like-legal-ai-company-landscape.md)._

### Confirmed or strong model owners

| Company | Tier | Evidence | Data/eval flywheel | Upstream dependencies disclosed |
|---|---:|---|---|---|
| **Harvey** | A/C | Tenet is reported as its first in-house proprietary legal LLM. Separately, Harvey and Applied Compute disclosed full-parameter RL post-training of GLM-5.1 on Harvey’s Legal Agent Benchmark. | Legal Agent Benchmark, expert legal workflows, partner content, product interactions subject to contractual data rules | OpenAI, Anthropic, Google, Mistral and other providers; Applied Compute for post-training |
| **Luminance** | A | [Luna Crescent](https://www.luminance.com/resources/insights/the-era-of-vertical-ai-is-here-introducing-luna-crescent-luminances-proprietary-legal-intelligence-model/) is a proprietary legal intelligence model operating inside Luminance’s multi-model product. | Curated examples spanning about 3.4M legal concepts/data points; ContractIQ Bench with 189K manually reviewed points; exposure to 220M+ verified legal documents | Own AWS environment plus outside foundation, open-source, embedding, and reasoning models |
| **EvenUp** | B | [Piai](https://www.evenuplaw.com/piai/) is a system of specialized personal-injury models rather than a disclosed general legal LLM. | 100K+ personal-injury cases, 1M+ medical records/visits, and 150+ legal/medical reviewers | Not sufficiently disclosed publicly |
| **Robin AI** | B/D | Robin says it uses proprietary models trained on more than 100M contract clauses alongside Anthropic Claude. | Contract corpus and lawyers-in-the-loop review | Anthropic Claude, AWS Bedrock, SageMaker |
| **Isaacus** | B/C | Legal-model research company behind legal embeddings, corpora, and model work; evidence supports genuine model R&D, though a Tenet-scale deployed core model is not yet clearly disclosed. | Open Australian Legal Corpus and Massive Legal Embedding Benchmark | Open-source model ecosystem; verify current production architecture |

### Important lookalikes without strong owned-core-model evidence

| Company | Current classification | Assessment |
|---|---|---|
| Legora | D | Strong legal workflow platform and verified-source layer; public materials emphasize platform and external models more than an owned core legal LLM. |
| Spellbook | D | Legal drafting product historically built on outside foundation models; verify any new in-house training. |
| Thomson Reuters CoCounsel | C/D | Deep proprietary legal data and evaluations, but product model strategy includes major model-provider partnerships. |
| LexisNexis Protégé / Lexis+ AI | C/D | Exceptional proprietary legal corpus and retrieval layer; require clearer proof of an owned generative core model. |
| Ivo | D | Contract-review application; model ownership not clearly substantiated publicly. |
| Eudia | D | Agentic legal services/product model; model-weight ownership remains unclear. |
| Eve | D | Plaintiff-law workflow platform; verify proprietary training claims separately from workflow automation. |
| Luminance competitor Kira | B/D | Longstanding proprietary contract-analysis ML, but less evidence of a current owned generative core model. |

**Legal conclusion:** Luminance is the closest confirmed direct analogue to Tenet. EvenUp and Robin AI possess meaningful owned specialist intelligence, but the public evidence supports hybrid stacks rather than a standalone core legal LLM.

## Healthcare and life sciences

### Confirmed or strong model owners

| Company | Tier | Owned model strategy | Training/evaluation loop |
|---|---:|---|---|
| **Hippocratic AI** | A | [Polaris](https://hippocraticai.com/polaris2/) is an owned safety-focused healthcare LLM constellation with a primary model and specialist support models. Polaris 5.0 is described as a 5T-parameter constellation powered by a 700B core. | Proprietary clinical data, care plans, regulatory documents, clinician testing, and large-scale real-world interaction evidence |
| **Abridge** | A/B | Owns medical ASR, specialty models, and an in-house unsupported-claim detector; in 2026 announced a clinical-conversation foundation model built on NVIDIA Nemotron with pre-, mid-, and post-training. | More than 100M annual clinical conversations, de-identified data, clinician-in-the-loop teams, automated judges, external audits |
| **Nabla** | B/C | Own medical ASR and proprietary LLMs/models; its speech model adapts Whisper using 7,000 hours of annotated medical encounters. | Clinician use and manually annotated medical audio; disclosed $5M/three-year training effort |
| **OpenEvidence** | C/D | Domain clinical system with specialized models and licensed medical content, but available evidence does not cleanly establish a wholly owned core LLM comparable to Polaris. | Physician queries, medical literature, Elsevier content partnerships, proprietary evaluation |

### Additional candidates to investigate

| Company | Why it belongs in the candidate universe | Evidence needed |
|---|---|---|
| Ambience Healthcare | Clinical documentation and coding intelligence at scale | Named owned models, training stages, and base-model dependencies |
| PathAI | Proprietary pathology models deployed in clinical/research workflows | Whether a general pathology foundation model is productized |
| Paige | Foundation-model work in computational pathology | Current owned-model products and downstream use |
| Aidoc | Proprietary radiology models and clinical workflow platform | Whether the model platform has a cross-task foundation model |
| Tempus AI | Proprietary clinical/molecular datasets and predictive models | Generative/foundation-model ownership versus analytics models |
| Owkin | Multimodal biomedical foundation models and federated data access | Which models are proprietary and deployed commercially |
| EvolutionaryScale | ESM biological foundation-model family | Strong model ownership, but more model lab than Harvey-style vertical workflow company |
| Profluent | Protein language/design models | Product deployment and recurring workflow feedback loop |
| Generate Biomedicines | Chroma and generative protein design | Model ownership is strong; business resembles drug discovery more than SaaS |

**Healthcare conclusion:** Hippocratic AI is the strongest direct cross-vertical Tenet analogue. Abridge is the most compelling transition story because it is moving from a proprietary task-model stack to a domain foundation model trained across the full lifecycle.

## Finance, investment, and accounting

### Confirmed or plausible model owners

| Company | Tier | Assessment |
|---|---:|---|
| **Bloomberg** | A | BloombergGPT is a 50B-parameter finance model trained from scratch on Bloomberg’s proprietary financial corpus plus general data. Bloomberg is an incumbent rather than a startup, but it remains the cleanest finance analogue. |
| **RavenPack / Bigdata.com** | B/D | Owns finance NLP, a knowledge graph, and finance-specific language-model components, but its MCP terms explicitly say it does not own the host platform’s underlying LLM. Its moat is primarily data and grounding. |
| **Boosted.ai** | B/D | Has proprietary quantitative/ML systems and the Alfa platform, but Alfa’s terms disclose use of third-party LLMs. Not a confirmed Tenet-like core LLM owner. |
| **Rogo** | D | Strong finance platform, datasets, Big Finance Bench, experts, and model broker; public evidence points to use of OpenAI and multiple outside models rather than an owned core model. |
| **Hebbia** | D | Proprietary orchestration and information-processing architecture, but Matrix cycles among third-party text and vision models and states no fine-tuning is needed. |

### Additional candidates

| Company | Model-moat hypothesis | Priority |
|---|---|---:|
| Kensho / S&P Global | Proprietary financial NLP/ASR models plus S&P data | High |
| AlphaSense | Proprietary search, ranking, summarization, and financial corpus | High |
| FactSet | Mercury AI plus proprietary market data and workflows | High |
| RavenPack / Bigdata.com | Specialized finance language/data models | High |
| Numeric | Accounting workflow data and agent evaluations | Medium; owned weights unproven |
| Basis | Accounting agents trained against real workflows | Medium; verify model ownership |
| Puzzle | Accounting data graph and automation | Medium; likely system rather than model moat |
| Daloopa | Financial data extraction models and analyst-verified data | Medium |
| Hudson Labs | Finance-focused AI research/product company | Medium; verify current models |
| Boosted.ai | Investment-specific predictive models | Medium |

**Finance conclusion:** Bloomberg is the only clean Tier-A match in the current seed set. The startup field is rich in proprietary data and evaluation systems but thin on disclosed owned core models.

## Cybersecurity

| Company | Tier | Model position | Assessment |
|---|---:|---|---|
| **XBOW** | B/C | Autonomous offensive-security agents, safety judge, and training/evaluation systems | Strong model-lab behavior, but public docs do not yet clearly prove an owned base/core LLM |
| **Gray Swan AI** | B/D | Proprietary red-team models, attack/eval systems, and runtime security | Owns specialist security intelligence; Cygnal can wrap OpenAI, Anthropic, Gemini, or other providers |
| **Dropzone AI** | D | Pre-trained multi-agent SOC analyst | Discloses reliance on Anthropic, Azure/OpenAI, Perplexity, and others; strongest moat is security workflow and validation |
| **Prophet Security** | D | Dedicated-tenant security-agent constellation | Adapts to customer context but says customer data is not used to train models; owned weights not proven |
| **CAI** | A/B | Specialized `alias1` model architecture for autonomous cybersecurity | Technically promising owned-model evidence; commercial maturity and independent validation need work |

### Further candidates

- **RunSybil**, **Simbian**, **7AI**, **Torq**, **Radiant Security**, **Expel**, and **Horizon3.ai** should be screened for owned security models versus agent orchestration.
- **Fabraix** and **Andon Labs** belong in the environment/evaluation supplier layer and may become upstream partners to vertical cyber model builders.

**Cybersecurity conclusion:** no current seed company matches Tenet as cleanly as Luminance or Polaris. The strongest proprietary assets are attack environments, specialized judges, security graphs, and agent policies rather than clearly disclosed core LLMs.

## Software engineering

| Company | Tier | Owned models | Evidence of a training moat |
|---|---:|---|---|
| **Cursor / Anysphere** | A | Composer, Composer 2/2.5, Fusion/Tab | MoE agent model; continued pretraining and RL in production-like coding environments; proprietary Cursor Bench; online RL from real scenarios |
| **Poolside** | A | Laguna XS/M/S family, Malibu, Point | Full Model Factory; foundation-model pretraining and post-training; RL from code execution; enterprise control of weights |
| **Windsurf / Cognition** | A | SWE-1, SWE-1.5, SWE-1.6 | Agent models trained for long multi-turn software trajectories using policy-gradient methods |
| **Magic** | A | LTM-1, LTM-2-mini | Trains ultra-long-context coding models and custom architecture; commercial product maturity should be rechecked |
| **Replit** | B/C | Replit-native code-repair and coding models | Own task models and historical code-model training; current Agent may combine proprietary and third-party models |
| **Cognition / Devin** | B/D | Proprietary agent system; Windsurf acquisition adds SWE models | Devin’s core base-model ownership is not clearly disclosed; combined company now unquestionably owns coding models through Windsurf |
| **Sourcegraph** | D | Cody model orchestration and code intelligence | Strong code graph/context moat; primarily integrates external foundation models |
| **Augment Code** | D | Proprietary context engine | Verify whether any generative model weights are owned; evidence is stronger for retrieval/context |
| **Factory** | D | Droids and proprietary agent/eval system | Strong workflow/eval layer; owned core model not clearly proven |
| **Qodo** | B/D | Specialized testing and code-quality models | Verify current generative model ownership and base dependencies |
| **Tabnine** | B/C | Proprietary coding models with private deployment | Longstanding owned models; assess current competitive relevance and training architecture |

**Software conclusion:** this is the richest hunting ground. Cursor and Poolside are especially relevant because their training explicitly depends on coding environments, verifiers, execution feedback, and RL—the upstream supplier ecosystem covered in the companion report.

## Robotics, autonomous systems, and physical AI

| Company | Tier | Owned model | Training flywheel |
|---|---:|---|---|
| **Skild AI** | A | Skild Brain | Unified omni-bodied foundation model trained from robot experience, simulation, and human video |
| **Physical Intelligence** | A | π-series vision-language-action models | Cross-robot data, foundation-model research, and real-world manipulation |
| **Waabi** | A | End-to-end reasoning model / Waabi Driver | Shared model across vehicles paired with Waabi World neural simulation and verifiable testing |
| **Covariant** | A | RFM-1 | Commercial robotics foundation model trained from warehouse robot deployments |
| **Field AI** | A/B | Field Foundation Models | Embodied autonomy across robots and environments; verify current model names and architecture |
| **Wayve** | A | GAIA/world models and end-to-end driving foundation models | Fleet/road data, simulation, and embodied driving deployment |
| **1X** | A/B | World and robot-control models | Humanoid deployment data and simulation; verify which models are production core versus research releases |
| **Figure AI** | A/B | Helix family | Vision-language-action model for humanoids; strong owned-model claim, deployment scale still developing |

**Physical-AI conclusion:** these are genuine owned-model companies, although many resemble integrated AI labs/hardware businesses more than Harvey’s software workflow model.

## Customer service and enterprise operations

| Company | Tier | Model strategy | Assessment |
|---|---:|---|---|
| **Intercom / Fin** | A | Apex and a seven-model CX suite | Closest non-legal analogue: replaced Sonnet as core answer model after training on proprietary support data; reports higher resolution and lower cost |
| **Decagon** | B/C | Proprietary engine and specialized models combined with frontier models | Strong learning loop from customer interactions, but public language describes a network rather than a clearly owned standalone core LLM |
| **Sierra** | D | Agent platform, model routing, testing, and outcome optimization | No strong public proof of a proprietary core model; likely system/eval moat |
| **Parloa** | D | Voice/customer-service agent stack | Verify speech and domain model ownership; likely hybrid model architecture |
| **Maven AGI** | D | Enterprise support agent and knowledge system | Model ownership not clearly disclosed |
| **Ada** | B/D | Automated customer-service intelligence | Long history of proprietary classification/automation models; current core generative model ownership unclear |

**Customer-service conclusion:** Fin Apex is the model case study to follow. It demonstrates the path vertical application companies want: use frontier models to establish product-market fit, accumulate outcome-labeled interactions, then replace the expensive core model with an owned specialist model.

## Insurance, accounting, and regulated operations

| Company | Tier | Assessment |
|---|---:|---|
| **Roots Automation** | B/C | Markets InsurGPT as insurance-specific intelligence; verify whether it is an owned LLM, a fine-tuned base, or a branded system. |
| **ZestyAI** | A/B | Owns regulated property-risk models such as Z-FIRE; not an LLM company, but a strong vertical-model analogue with proprietary data and regulatory acceptance. |
| **FurtherAI** | D | Insurance workflow agents; public evidence for owned core model weights is weak. |
| **VILA** | C/D | Operates inside regulated verticals to generate real workflow data before selling agents; compelling feedback-loop thesis but owned model evidence remains limited. |
| **Basis** | C/D | Accounting agents and domain evaluation/training opportunity; verify model-weight ownership. |
| **Numeric** | D | Accounting close workflows and proprietary operational data; no clear owned core LLM. |
| **Thrive Holdings portfolio** | C | OpenAI partnership explicitly aims to train models on real accounting and IT-services work; likely an important future vertical-model incubator. |

## Evidence-based ranking

### Tier A: most credible owned vertical core models

1. Luminance — Luna Crescent
2. Hippocratic AI — Polaris
3. Intercom / Fin — Apex
4. Cursor — Composer
5. Poolside — Laguna
6. Windsurf / Cognition — SWE family
7. Skild AI — Skild Brain
8. Waabi — Waabi Driver / shared end-to-end AI model
9. Covariant — RFM-1
10. Physical Intelligence — π family
11. Bloomberg — BloombergGPT
12. Magic — LTM family
13. Wayve — driving/world-model family
14. Harvey — Tenet, pending fuller primary technical disclosure

### Tier B/C: owns meaningful specialist models or post-training

- Abridge
- Nabla
- EvenUp
- Robin AI
- Replit
- Decagon
- Gray Swan AI
- XBOW
- Roots Automation
- ZestyAI
- Figure AI
- Field AI

### Tier D: strong vertical AI, but presently a system/data moat

- Legora
- Rogo
- Hebbia
- RavenPack / Bigdata.com
- Boosted.ai
- Sierra
- Dropzone AI
- Prophet Security
- Sourcegraph
- Factory
- Numeric
- FurtherAI
- Maven AGI

## How these companies use the upstream RL ecosystem

Publicly named supplier relationships are rare. The likely supply chain should be mapped without assuming undisclosed contracts:

| Downstream need | Relevant upstream category | Example suppliers from the companion research |
|---|---|---|
| Executable coding tasks and reward signals | Coding RL environments | Mechanize, Datacurve, Proximal, Refresh, Vmax |
| Browser and desktop workflows | Computer-use environments | Fleet AI, Chakra Labs, HUD, Halluminate, Matrices, Plato |
| Enterprise software simulations | Enterprise environments | Huzzle Labs, Veris AI, HUD, AIChamp, Habitat |
| Expert trajectories and rubrics | Human/expert data | AfterQuery, Huzzle Labs, Scale AI, Mercor, Surge AI |
| Independent evaluation and adversarial testing | Evals/security | Gray Swan AI, Andon Labs, Vals AI, Fabraix |
| Sandboxed execution at scale | Infrastructure | Modal, E2B, Runloop, Daytona, Cua, Morph |
| Full-stack model post-training | Training platforms | Applied Compute, Osmosis, Prime Intellect, TrainLoop |

Only record a supplier relationship as fact when confirmed by the buyer, supplier, a technical paper, procurement record, or another attributable primary source.

## Research gaps and next passes

### Highest-priority verification

1. Obtain primary technical disclosure for Harvey Tenet: base architecture, pretraining versus continued pretraining, parameter count, training data rights, RL method, inference host, and actual product routing share.
2. Determine which legal competitors are actively training owned core models: Legora, LexisNexis, Thomson Reuters, Ivo, Eudia, and Eve.
3. Identify actual environment/data suppliers to Cursor, Poolside, Windsurf/Cognition, Harvey, Luminance, Abridge, and Intercom.
4. Split “customer data” from consented training data, licensed corpora, synthetic data, expert demonstrations, and aggregate product telemetry.
5. Locate model cards, benchmark methodology, held-out sets, and independent evaluations for every Tier-A claim.

### Company-profile schema for the next iteration

For each priority company, capture:

- Company, vertical, headquarters, founding year, and funding stage
- Named model and launch date
- Model ownership tier
- Base model/architecture and whether trained from scratch
- Pretraining, mid-training, SFT, RL/RLHF/RLAIF, and distillation methods
- Proprietary/licensed/synthetic/customer data sources
- Human expert loop and reward/verifier design
- Evaluation suite, benchmark leakage controls, and independent validation
- Compute, hosting, inference, environment, and data suppliers
- Deployment share: what percentage of production actually uses the owned model
- Unit-economics rationale: quality, latency, cost, privacy, control, or strategic independence
- Evidence confidence and source dates

## Key sources

- [Applied Compute: Training a State-of-the-Art Legal Agent with Harvey](https://www.appliedcompute.com/case-studies/harvey)
- [Luminance: Introducing Luna Crescent](https://www.luminance.com/resources/insights/the-era-of-vertical-ai-is-here-introducing-luna-crescent-luminances-proprietary-legal-intelligence-model/)
- [EvenUp: Piai](https://www.evenuplaw.com/piai/)
- [Robin AI and Claude](https://robinai.com/news-and-resources/news/robin-ai-brings-power-of-claude-3-to-customers)
- [Hippocratic AI: Polaris 2.0](https://hippocraticai.com/polaris2/)
- [Hippocratic AI: Polaris 5.0](https://hippocraticai.com/hippocratic-ai-launches-polaris-5-0/)
- [Abridge–NVIDIA clinical foundation-model announcement](https://www.abridge.com/press-release/patient-centered-clinician-intelligence-platform-keynote)
- [Abridge: task-specific hallucination model](https://www.abridge.com/ai/science-confabulation-hallucination-elimination)
- [Nabla’s medically adapted speech model](https://www.nabla.com/fr/blog/how-nabla-uses-whisper)
- [Cursor: Composer](https://cursor.com/blog/composer)
- [Cursor: proprietary Tab model](https://cursor.com/en-US/tab)
- [Poolside research and model releases](https://www.poolside.ai/blog)
- [Magic: LTM-2-mini](https://magic.dev/blog/100m-token-context-windows)
- [Cognition/Windsurf: SWE-1.5](https://cognition.com/blog/swe-1-5)
- [Skild AI: general-purpose robotic brain](https://www.skild.ai/blogs/building-the-general-purpose-robotic-brain)
- [Waabi technology overview](https://waabi.ai/)
- [Covariant approach and RFM-1](https://covariant.ai/our-approach/)
- [Intercom: Fin Apex](https://www.intercom.com/blog/announcing-fin-apex-the-age-of-vertical-models-is-here/)
- [Rogo and OpenAI](https://openai.com/index/rogo/)
- [RavenPack/Bigdata MCP terms](https://bigdata.com/mcp-terms-and-conditions)
- [Hebbia Matrix product architecture](https://www.hebbia.com/product)
- [Dropzone security and model-provider disclosure](https://www.dropzone.ai/security-privacy-trust)
