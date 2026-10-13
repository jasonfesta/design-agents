# Google Antigravity research shared on X

Reviewed October 12, 2026. Starting reference: [Alex K’s Blob3d demo](https://x.com/uialexk/status/2027007619320193105), published February 26, 2026.

The useful material around this reference concerns Google Antigravity as a tool for building interfaces, creative websites, and agent workflows. The recurring approach is to establish a design or reference set, pass that context to a coding agent, then refine and verify the implementation. The collection below preserves the original X posts, public tutorials, repositories, and relevant current documentation.

This is a broad, curated research pass, not a complete archive of everything posted on X. The evidence is mainly creator demonstrations, tutorials, and product announcements. It does not establish comparative performance, production readiness, or independently measured time savings. Historical instructions are dated; current documentation checks appear near the end.

## GitHub ecosystem follow-up

Checked October 12, 2026, after Jason asked whether Antigravity has many GitHub repositories. GitHub's topic pages reported **3,531 public repositories tagged `antigravity`** and **334 tagged `google-antigravity`**. These are overlapping, self-selected topic counts. They include tools supporting several coding agents, experiments, utilities, and other material; they are not a deduplicated count of Antigravity-specific implementations. Do not add them together. Sources: [antigravity topic](https://github.com/topics/antigravity), [google-antigravity topic](https://github.com/topics/google-antigravity).

The [Google Antigravity organization](https://github.com/google-antigravity) separately showed **two public repositories**, the CLI and Python SDK. This is the count in that organization, not a count of every Google-maintained integration elsewhere on GitHub. A public repository also does not imply that the full desktop product or every runtime component is open source: the SDK README explicitly says it depends on a compiled runtime distributed in its Python packages.

The sampled results show several distinct branches: design skills, reusable workflows, SDK examples, UI extensions, quota/account utilities, API bridges, and localization. Ten representative repositories are below. Repository descriptions and selected READMEs were inspected; none was installed or run.

| Repository | Branch | What is available / scope |
| --- | --- | --- |
| [google-antigravity/antigravity-sdk-python](https://github.com/google-antigravity/antigravity-sdk-python) | Official SDK | Python agent library, examples, and skills. Apache-2.0 repository; requires a separately packaged compiled runtime to execute. |
| [google-antigravity/antigravity-cli](https://github.com/google-antigravity/antigravity-cli) | Official CLI | CLI documentation, releases, and issue tracking. A public distribution/support repository does not establish that the full implementation source is available. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | Design and implementation | Skills/plugins for Stitch design generation, design systems, source-code extraction, build workflows, and utilities. Explicit Antigravity compatibility; requires Stitch MCP setup. |
| [nextlevelbuilder/ui-ux-pro-max-skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) | Design guidance | UI/UX guidance for multiple coding agents, including Antigravity. Cross-tool resource rather than an Antigravity-only project. |
| [rominirani/antigravity-skills](https://github.com/rominirani/antigravity-skills) | Learning examples | Four progressive skills examples: commit formatting, license headers, JSON-to-Pydantic conversion, and SQL schema validation. Linked to the codelab reviewed earlier. |
| [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills) | Large skills catalogue | Current destination of the previously shared Antigravity Awesome Skills project. Now describes 2,400-plus skills with a CLI, local MCP, plugins, and a workbench. That is a skill count inside one repository, not a repository count. |
| [gemini-cli-extensions/conductor](https://github.com/gemini-cli-extensions/conductor) | Development workflow | A plugin for specification, planning, and implementation, explicitly supporting Antigravity and Claude Code. |
| [danicat/agy-paint-studio](https://github.com/danicat/agy-paint-studio) | Creative UI extension | Layered drawing, PSD editing, and Gemini image refinement within Antigravity. Connects directly to Daniela's X demonstration above. |
| [wusimpl/AntigravityQuotaWatcher](https://github.com/wusimpl/AntigravityQuotaWatcher) | Usage utility | Community extension for monitoring model quota. Described capability verified from the repository, not runtime-tested. |
| [lbjlaq/Antigravity-Manager](https://github.com/lbjlaq/Antigravity-Manager) | Account utility | Community account manager and switcher built with Tauri, React, and Rust. Included to map the ecosystem, not as an installation recommendation. |

For continuing the creative-interface research, the most directly relevant starting points are **Stitch Skills, UI UX Pro Max, Paint Studio, and Romin's smaller skills examples**. The larger skills catalogue is useful for discovery, but its current tooling and dependencies should be evaluated separately from individual Markdown skills. This relevance assessment does not establish personal visual preferences.

Method: GitHub repository search with `antigravity fork:false sort:stars` and `antigravity in:name fork:false archived:false sort:stars`, primary topic pages, the official organization page, and selected repository pages. The search filters apply to those searches only; the displayed topic totals were not independently deduplicated or filtered for forks, maintenance, relevance, or quality. Exact counts will change.

## People posting beyond Alex K

Expanded October 12, 2026, after Jason asked to go wider on who is posting. This directory identifies **34 people or creator accounts beyond Alex K**, plus **four organization or resource accounts**. Pseudonymous creator handles are retained as displayed; inclusion does not imply an independently verified identity. Each entry has an observed X post supporting its inclusion. A representative post establishes that an account has posted on the topic, not that Antigravity is its principal subject or that it posts regularly.

The selection includes original builds, practical teaching, product development, international discussion, and adjacent tools. “Adjacent” means the material includes or supports Antigravity but does not establish that the demonstrated work was built with it. Author claims about speed, cost, security, and quality remain untested unless separately noted.

### Design, creative websites, and prototypes — 10 accounts

| Person / creator account | What the observed material covers | Representative X evidence |
| --- | --- | --- |
| [Viktor Oddy — @viktoroddy](https://x.com/viktoroddy) | Repeated animated-site tutorials combining generated imagery/video with Antigravity. One of the deeper public video sources in this collection. | [Flow and Antigravity tutorial, Feb 2026](https://x.com/viktoroddy/status/2024415243473211646); [dental-clinic site, Jun 2026](https://x.com/viktoroddy/status/2070428537790877738). |
| [Shruti — @ShruPosts](https://x.com/ShruPosts) | Repeated Figma, ChatGPT, and Antigravity design-to-live-site demonstrations. Completion times are self-reported. | [Full design sequence, Apr 2026](https://x.com/ShruPosts/status/2049350715068625008); [another build, Aug 2026](https://x.com/ShruPosts/status/2088491372923986107). |
| [Emisho — @Emishonowayi](https://x.com/Emishonowayi) | A portfolio with an orbital media gallery and desktop spatial mode. Credits Codex, Claude, and Antigravity together. | [Portfolio process, Oct 2026](https://x.com/Emishonowayi/status/2107781166212284884). |
| [MotionViz — @Motion_Viz](https://x.com/Motion_Viz) | Stitch screens exported as HTML/CSS, followed by implementation in Antigravity. | [Stitch-to-Antigravity workflow, Feb 2026](https://x.com/Motion_Viz/status/2021409101096550801). |
| [Tushar Mehta — @tushaarmehtaa](https://x.com/tushaarmehtaa) | AI Studio prototyping, export to a coding agent, prompt preparation, voice input, and reference context. Antigravity is one of several agents discussed. | [Mixed-tool build workflow, Feb 2026](https://x.com/tushaarmehtaa/status/2018387356722888925). |
| [Rohit — @Rohit_115](https://x.com/Rohit_115) | A cinematic space website made with Gemini and Antigravity; also describes generated imagery failing to match his reference. | [“Into the Unknown” experiment, Oct 2026](https://x.com/Rohit_115/status/2108949578603261965). |
| [Alex Killby — @alexkillby](https://x.com/alexkillby) | A small-business website build. Claims about accessibility, SEO, responsiveness, and completion time were not independently audited. | [Website build report, Oct 2026](https://x.com/alexkillby/status/2109083084847009807). |
| [Prathit — @prathitjoshi_](https://x.com/prathitjoshi_) | A prototype responding to an idea for AI music stations controlled by a mood or vibe prompt. | [Antigravity prototype, Dec 2025](https://x.com/prathitjoshi_/status/2005224098960707922). |
| [Paul Bakaus — @pbakaus](https://x.com/pbakaus) | Impeccable design skills and commands, including explicit Antigravity support. Adjacent reusable design tooling. | [Impeccable v1.1 announcement, Mar 2026](https://x.com/pbakaus/status/2029334353894162720). |
| [Rachel How — @rachelhxw](https://x.com/rachelhxw) | Mobbin reference research, visual reports, specifications, and design systems for coding agents. Her shown agent is Claude; Antigravity compatibility is explicit. | [Mobbin MCP process, Jul 2026](https://x.com/rachelhxw/status/2082663915117498416). |

### Technical tutorials, extensions, and agent development — 8 accounts

| Person / creator account | What the observed material covers | Representative X evidence |
| --- | --- | --- |
| [Romin Irani — @iRomin](https://x.com/iRomin) | A four-part learning path covering Antigravity 2.0, skills, the CLI, and deployment to Google Cloud. His skills codelab and repository were inspected in the original pass. | [Codelab learning roadmap, Sep 2026](https://x.com/iRomin/status/2097290437359026565). |
| [Mete Atamel — @meteatamel](https://x.com/meteatamel) | Explanations of configuration, agent permissions, and task scheduling. Multiple original tutorial announcements were observed. Linked articles were not all read in this expansion. | [Permissions guide, Sep 2026](https://x.com/meteatamel/status/2099454419356012816); [scheduling guide, Sep 2026](https://x.com/meteatamel/status/2102437123496309115). |
| [Daniela Petruzalek — @danicat83](https://x.com/danicat83) | Paint Studio, custom UI extensions, and a Game Studio extension with game-development skills and playtesting UI. Strong leads for editable tools inside the agent interface. | [Paint Studio, Oct 2026](https://x.com/danicat83/status/2108737082550079809); [Game Studio release, Oct 2026](https://x.com/danicat83/status/2108985391038476611). |
| [Kunal Chaturvedi — @chaturvedikun](https://x.com/chaturvedikun) | A detailed first-person article about building a native Android app on an Android phone using Antigravity CLI, Termux, and a Debian environment. Full article read; setup not executed. | [Phone-only Android development, Oct 2026](https://x.com/chaturvedikun/status/2107026587082424448). |
| [Paige Bailey — @DynamicWebPaige](https://x.com/DynamicWebPaige) | Browser-agent exploration of user journeys, plan editing, and generation of screenshots and instructions. | [Browser QA and documentation example, Dec 2025](https://x.com/DynamicWebPaige/status/2003159982464696827). |
| [N. Taylor Mullen — @ntaylormullen](https://x.com/ntaylormullen) | Detailed SDK release notes: preview APIs, subagent skill scope, bulk hooks, and tool context types. | [SDK v0.1.21 update, Oct 2026](https://x.com/ntaylormullen/status/2107902989705052300). |
| [Jack Wotherspoon — @JackWoth98](https://x.com/JackWoth98) | Local-model support in the Antigravity SDK. The post distinguishes SDK support from the app and CLI; do not generalize it to every product surface. | [Local models in the SDK, Sep 2026](https://x.com/JackWoth98/status/2102830265399656469). |
| [Shengzhe — @shengzheyao](https://x.com/shengzheyao) | Repeated CLI release details, including Android/Termux support and interface improvements. | [Android CLI announcement, Oct 2026](https://x.com/shengzheyao/status/2106086044143902812); [CLI 1.3.3, Oct 2026](https://x.com/shengzheyao/status/2108783264479744008). |

### Educators, automation, and international discussion — 9 accounts

| Person / creator account | What the observed material covers | Representative X evidence |
| --- | --- | --- |
| [Res — @resdegen](https://x.com/resdegen) | A beginner walkthrough using the Antigravity IDE alongside Claude Code, with plans and implementation documents passed between agents. Full article read; January model and pricing details are historical. | [Beginner setup article, Jan 2026](https://x.com/resdegen/status/2008277182238343636). |
| [WorldofAI — @intheworldofai](https://x.com/intheworldofai) | Video education about agent skills, subagents, and Antigravity/OpenCode workflows. Videos located, not fully watched. | [Skills and subagents, Jan 2026](https://x.com/intheworldofai/status/2011643805255287106); [OpenCode walkthrough, Jan 2026](https://x.com/intheworldofai/status/2014242653504692532). |
| [Richard Seroter — @rseroter](https://x.com/rseroter) | Technical curation, including directing readers to Romin Irani’s skills tutorial. Useful discovery source; this example shares someone else’s tutorial. | [Skills tutorial recommendation, Jan 2026](https://x.com/rseroter/status/2011518931861979221). |
| [Alvaro Cintas — @dr_cintas](https://x.com/dr_cintas) | Skills marketplace discovery and broad tool roundups. Treat as resource discovery rather than proof of a tested Antigravity workflow. | [SkillsMP roundup, Feb 2026](https://x.com/dr_cintas/status/2026725771738268135). |
| [Julian Goldie — @JulianGoldieSEO](https://x.com/JulianGoldieSEO) | Skills bundles, SEO, and automation promotion. Some key material is gated behind replies or DMs. | [Skills bundle video, Jan 2026](https://x.com/JulianGoldieSEO/status/2014599579283390738). |
| [Alton Syn — @WorkflowWhisper](https://x.com/WorkflowWhisper) | Antigravity-generated n8n workflows for reservations, leads, reminders, and invoicing. The advertised setup PDF is DM-gated. | [n8n automation examples, Mar 2026](https://x.com/WorkflowWhisper/status/2028866699697750158). |
| [テツメモ / tetumemo — @tetumemo](https://x.com/tetumemo) | Japanese-language discussion of coordinating Codex, Claude Code, and Antigravity across tools. X’s displayed translation was used for the cited October post. | [Cross-agent workflow discussion, Oct 2026](https://x.com/tetumemo/status/2106406998967542066). |
| [梅干しくん — @pikapika_mma](https://x.com/pikapika_mma) | Japanese introductory explanation of skills for documents, spreadsheets, video, and websites. Full post read. Its simplified setup and “fully automatic/free” framing should not substitute for current documentation. | [Skills explainer, Jan 2026](https://x.com/pikapika_mma/status/2017804056845291918). |
| [Guizang — @op7418](https://x.com/op7418) | Chinese-language discussion of the Agent Skills release, with the original official announcement quoted. | [Skills-release discussion, Jan 2026](https://x.com/op7418/status/2011264060663484531). |

### Product direction, supporting tools, and broader commentary — 7 accounts

| Person / creator account | What the observed material covers | Representative X evidence |
| --- | --- | --- |
| [Varun Mohan — @_mohansolo](https://x.com/_mohansolo) | Product capability announcements, represented here by integrated image generation. | [Nano Banana Pro rollout, Nov 2025](https://x.com/_mohansolo/status/1991562652511007014). |
| [Adhithya Ramakumar — @adhidesign](https://x.com/adhidesign) | Announces joining Google DeepMind to lead Antigravity design and invites UX feedback. Product-direction source rather than a tutorial. | [Design leadership announcement, Oct 2026](https://x.com/adhidesign/status/2107300073646526638). |
| [Alexis Moussine-Pouchkine — @alexismp](https://x.com/alexismp) | Explains Antigravity access, plans, cost, and quota, and shares related technical guides. The linked pricing article was located, not checked as current purchasing advice. | [Antigravity 2.0 access guide announcement, Aug 2026](https://x.com/alexismp/status/2093352403957334059). |
| [Edward Luo — @edwardluox](https://x.com/edwardluox) | A Mac notch utility for coding-agent completion and approval notifications, explicitly including Antigravity. Adjacent tool compatibility; not evidence it was built with Antigravity. | [Agent notification app, Jul 2026](https://x.com/edwardluox/status/2078111197212414447). |
| [Giorgio Nícolas — @GioNicolas_](https://x.com/GioNicolas_) | Catenary, a workspace for multiple agents and terminals, explicitly including Antigravity. Adjacent orchestration tool; platform and pricing claims were not tested. | [Catenary introduction, Oct 2026](https://x.com/GioNicolas_/status/2109742187718328665). |
| [Burak Eregar — @burakeregar](https://x.com/burakeregar) | Security commentary about apps made with multiple AI coding tools, including Antigravity. Full article read; it promotes his audit service and contains prescriptive architecture claims that were not validated here. | [Security article, Jan 2026](https://x.com/burakeregar/status/2014696329549648137). |
| [Sachin Rekhi — @sachinrekhi](https://x.com/sachinrekhi) | Broader product-management and AI-workflow commentary covering company context, artifacts, and code-based design systems; mentions Antigravity among agentic platforms. | [Course and workflow update, Oct 2026](https://x.com/sachinrekhi/status/2108931445486235768). |

### Organization and resource accounts — 4 additional sources

| Account | Why it belongs in the wider map | Evidence |
| --- | --- | --- |
| [Google Antigravity — @antigravity](https://x.com/antigravity) | Official launches, capability demonstrations, and workflow examples. | [Stitch MCP to Android development, Oct 2026](https://x.com/antigravity/status/2107585958245712263). |
| [Stitch by Google — @stitchbygoogle](https://x.com/stitchbygoogle) | Adjacent design-tool announcements relevant to agent handoff; separate from Antigravity-specific implementation evidence. | [Stitch CLI announcement, Oct 2026](https://x.com/stitchbygoogle/status/2105695155164741984). |
| [Autodesk Fusion — @adskFusion](https://x.com/adskFusion) | A wider engineering branch: Fusion Compute MCP, with Antigravity listed among supported agent clients. | [Fusion Compute MCP post, Oct 2026](https://x.com/adskFusion/status/2106613306215510024). |
| [bluebag.ai — @BluebagAI](https://x.com/BluebagAI) | Provides a public repository link in a skills-bundle discussion. Kept as a resource account rather than assuming a personal identity. | [Repository reply, Jan 2026](https://x.com/BluebagAI/status/2014605569261277562). |

For the closest continuation of the original creative-interface interest, start with **Viktor, Shruti, Emisho, MotionViz, and Rohit**. For concrete implementation teaching and extensibility, start with **Romin, Mete, Daniela, Kunal, and Paige**. Paul and Rachel provide useful design context and tooling that can feed those builds. These are relevance judgments for this request, not an inferred personal taste ranking.

Multiple relevant posts were directly observed for Viktor, Shruti, Daniela, Shengzhe, WorldofAI, Mete, Romin, Alexis, and tetumemo. Their evidence supports exploring more of their timelines. For the other accounts, this pass establishes individual relevant posts; it does not establish a posting cadence.

## Alex K and the Blob3d reference

The supplied video shows a 3D blob generator with controls for complexity, blob color, and background color, plus a download button. The post credits Antigravity but does not disclose source code or a reproducible prompt. Its visible replies contain reactions and Alex’s portfolio link, rather than a technical breakdown.

Blob3d existed before that post. The earlier design and v0 prototype matter because the February clip should not be interpreted as evidence that Antigravity invented the complete product in one pass.

| Date | Original source | What it establishes |
| --- | --- | --- |
| Jan 14, 2025 | [Blob3D UI design](https://x.com/uialexk/status/1879252283659272566) | An earlier interface design for the project. |
| Oct 9, 2025 | [Blob3d generator in v0](https://x.com/uialexk/status/1976240310432022933) | Alex shared a v0 demo and said that version had not been made live. |
| Feb 26, 2026 | [The supplied Antigravity demo](https://x.com/uialexk/status/2027007619320193105) | A new video credits Antigravity and describes launch as forthcoming. |
| Mar 9, 2026 | [Paper and Antigravity prototype](https://x.com/uialexk/status/2031000722184065248) | Alex describes designing an app in Paper and connecting it to Antigravity through MCP. He says it still needs work. |
| Mar 19, 2026 | [Refining Blob3d](https://x.com/uialexk/status/2034652319753666747) | Explicitly identifies the Blob3d workflow as Paper followed by Antigravity. Launch remains forthcoming in this post. |
| Apr 6, 2026 | [Portfolio build guide](https://x.com/uialexk/status/2041174332089434495) | Design in Wonder, Paper, or Figma; implement the frontend and interactions with Claude Code or Antigravity; host on Cloudflare and connect a domain. |
| Apr 16, 2026 | [Frosbyte and the Paper challenge](https://x.com/uialexk/status/2044815096942129163) | Uses Paper MCP with Antigravity for exploration, then Paper, Claude Code, and GitHub for the live prototype. This is a mixed-tool workflow. |
| Apr 29, 2026 | [Another Paper to Antigravity design](https://x.com/uialexk/status/2049410446625571058) | A further demonstration of the same pairing. |
| Jul 9, 2026 | [Creative website demonstration](https://x.com/uialexk/status/2075220108134244748) | Again credits Paper for design and Antigravity for development. |

**Most useful follow-up:** the March 19 post identifies the process behind the original reference; the April 6 post supplies a compact implementation and hosting sequence. No public Blob3d repository, exact prompt, or confirmed current deployment was established in this pass.

## Design and animation tutorials

| Creator and date | Source | What to learn and how to interpret it |
| --- | --- | --- |
| Viktor Oddy, Feb 13, 2026 | [Antigravity with Nano Banana and Veo 3](https://x.com/viktoroddy/status/2022348069002780712) | An approximately 18-minute tutorial advertised for animated websites. Useful for the image-generation and video-generation parts of the stack. The complete video was not transcribed in this pass. |
| Viktor Oddy, Feb 19, 2026 | [Antigravity with Google Flow](https://x.com/viktoroddy/status/2024415243473211646) | An embedded tutorial of roughly 34 minutes. Its author-supplied timestamps cover references, assets, animated backgrounds, hero refinement, supporting sections, icons, and deployment. |
| Viktor Oddy, May 27, 2026 | [Antigravity with GPT Image 2](https://x.com/viktoroddy/status/2059636921962545657) | A later animated-site tutorial, approximately 19 minutes. The post’s description of the result as award-winning was not independently verified. |
| MotionViz, Feb 10, 2026 | [Stitch design before Antigravity implementation](https://x.com/Motion_Viz/status/2021409101096550801) | Design the complete set of screens in Stitch, export a ZIP, then use Antigravity to implement from the HTML and CSS. The transferable idea is giving the agent an explicit visual target. Production-readiness claims remain the author’s claims. |
| Tushar Mehta, Feb 2, 2026 | [AI Studio prototype to coding agent](https://x.com/tushaarmehtaa/status/2018387356722888925) | Prototype in AI Studio, export the project, and continue in Antigravity or another coding agent. He also uses ChatGPT for prompts, voice input, Vercel’s skill directory, and meeting transcripts as context. |
| Shruti, Apr 29, 2026 | [ChatGPT, Figma, and Antigravity](https://x.com/ShruPosts/status/2049350715068625008) | Shows a sequence from concept through moodboard, imagery, design, and a live result. The approximately two-hour completion time is self-reported. |
| Rachel How, Jul 29, 2026 | [Mobbin MCP research workflow](https://x.com/rachelhxw/status/2082663915117498416) | Research relevant production screens and flows, compile a visual report, then give the agent that report with the product specification and design system. Her demonstration uses Claude; she explicitly lists Antigravity compatibility. This is a transferable workflow, not an Antigravity-specific benchmark. |

Viktor’s [February tutorial timestamp reply](https://x.com/viktoroddy/status/2024415503822061916) provides useful entry points: 00:27 for reference and asset gathering, 02:54 for the animated hero, 07:35 for spacing refinements, 09:49 for supporting content, 17:19 for features and icon work, and 24:54 for the final business and deployment discussion. His separate [course reply](https://x.com/viktoroddy/status/2024415977723875632) points to [DesignRocket](https://designrocket.io); the public embedded video and the paid course are different resources.

Rachel’s full process is especially concrete: find examples from the product’s industry, preserve the findings in a visual report, and attach that report before implementation. The model still needs a specification and design constraints; the reference library supplies examples rather than deciding the design.

## Skills and reusable agent instructions

| Creator and date | Source | Public resource or finding |
| --- | --- | --- |
| Google Antigravity, Jan 13, 2026 | [Agent Skills announcement](https://x.com/antigravity/status/2011248170299498637) | Announces reusable skills for project workflows and general utilities. This announcement was visible as a quoted post in [Guizang’s discussion](https://x.com/op7418/status/2011264060663484531). |
| Google Antigravity, Jan 19, 2026 | [Creating skills from recurring work](https://x.com/antigravity/status/2013325586945691933) | Demonstrates asking the agent to capture repetitive coding tasks as reusable skills. |
| Richard Seroter, Jan 14, 2026 | [Romin Irani’s skills tutorial](https://x.com/rseroter/status/2011518931861979221) | Shares a tutorial distinguishing skills, MCP tools, rules, and workflows. The [original article](https://medium.com/google-cloud/tutorial-getting-started-with-antigravity-skills-864041811e0d), [official codelab](https://codelabs.developers.google.com/getting-started-with-antigravity-skills), and [sample repository](https://github.com/rominirani/antigravity-skills) provide a more concrete learning path than a skill-count roundup. |
| Alvaro Cintas, Feb 25, 2026 | [Skills marketplace roundup](https://x.com/dr_cintas/status/2026725771738268135) | His [link-bearing reply](https://x.com/dr_cintas/status/2026725776821743893) identifies [SkillsMP](https://skillsmp.com/). The large catalogue count is a dated promotional claim, not evidence that every entry is useful or compatible. |
| Julian Goldie, Jan 23, 2026 | [Collection of 200-plus skills](https://x.com/JulianGoldieSEO/status/2014599579283390738) | A video promotes a broad skill collection and asks readers to DM for an installation prompt. The public post alone does not provide that prompt. |
| bluebag.ai, Jan 23, 2026 | [Public repository reply](https://x.com/BluebagAI/status/2014605569261277562) | Links a repository in the preceding discussion. Its current destination is [sickn33/agentic-awesome-skills](https://github.com/sickn33/agentic-awesome-skills), now a broader catalogue and tooling project. Treat the repository’s current contents separately from January’s advertised bundle size. |

Google’s current [skills documentation](https://antigravity.google/docs/skills?app=antigravity-ide) describes a folder containing `SKILL.md`, with a name and description for discovery and additional instructions loaded when relevant. The official codelab demonstrates commit formatting, license headers, database schema validation, and JSON-to-Pydantic conversion. These examples show how instructions can be supplemented with references and scripts.

For practical use, start with a few task-specific skills and examine their actual files and dependencies. The collection size alone does not establish quality. The community repository above now includes CLI, MCP, plugins, and a workbench; it should not be mistaken for a small instruction-only download. Nothing from these sources was installed during this research.

## Assets and automation

| Creator and date | Source | What it contributes |
| --- | --- | --- |
| Varun Mohan, Nov 20, 2025 | [Nano Banana Pro rollout](https://x.com/_mohansolo/status/1991562652511007014) | Historical context for integrated image generation in Antigravity and its use in design work. |
| Google Antigravity, Mar 4, 2026 | [Nano Banana 2 for visual prototyping](https://x.com/antigravity/status/2029248004868194812) | Official promotion of mockups and iterative character work within Antigravity. It is an announcement, not an independent evaluation of fidelity. |
| Paige Bailey, Dec 22, 2025 | [User journeys, screenshots, and tutorials](https://x.com/DynamicWebPaige/status/2003159982464696827) | Ask the browser agent to identify journeys on a site, then produce instructions and screenshots for each. The post also shows editing a proposed plan. Useful for QA exploration and documentation. |
| WorldofAI, Jan 22, 2026 | [Antigravity and OpenCode tutorial](https://x.com/intheworldofai/status/2014242653504692532) | Links a [YouTube walkthrough](https://youtu.be/dzDVt3-MTRk). The post establishes the resource’s existence; the video’s configuration and performance claims were not validated here. |
| Alton Syn, Mar 3, 2026 | [Antigravity to n8n workflows](https://x.com/WorkflowWhisper/status/2028866699697750158) | Claims to generate reservation, lead-routing, waitlist, reminder, and invoicing automations. A promised PDF covers deployment and Synta MCP, but access requires commenting and following for a DM. The timings, consulting-price comparison, and reliability claims are unverified. |

Paige’s browser walkthrough is the clearest public example in this group of inspecting an actual interface and returning reviewable artifacts. The n8n post is a discovery lead whose central setup document remains unavailable in the public thread reviewed here. No messages or comments were sent to obtain gated material.

## Recent product and interface developments

| Date | Source | Finding |
| --- | --- | --- |
| Oct 5, 2026 | [Adhithya Ramakumar joins Antigravity design](https://x.com/adhidesign/status/2107300073646526638) | Announces joining Google DeepMind to lead design for Antigravity and invites UX feedback. Useful context for following interface changes; this is not a technical tutorial. |
| Oct 9, 2026 | [Daniela Petruzalek on UI Extensions](https://x.com/danicat83/status/2108737082550079809) | Shows a Paint Studio extension and discusses adopting the Sidecar SDK. The public [Paint Studio repository](https://github.com/danicat/agy-paint-studio) documents layered drawing, PSD editing, and Gemini image refinement. |
| Oct 10, 2026 | [Shengzhe’s CLI 1.3.3 post](https://x.com/shengzheyao/status/2108783264479744008) | Describes a pinned prompt header, plugin browsing, grouped output, diff improvements, and an MCP loading option. This is a dated release post, not a guarantee that every account has the same version. |

Google’s [October 8 changelog entry](https://antigravity.google/docs/changelog/) independently confirms custom UI extensions in the side panel as part of installed plugins. Paint Studio is therefore a particularly useful implementation reference beyond a social video. Its repository lists Apache-2.0 licensing and says it ships prebuilt UI assets using Antigravity’s bundled runtime. The code was inspected through the repository documentation, not executed.

## Current documentation checks

Older posts refer to product surfaces and configuration paths that have since changed. These primary sources help translate the historical workflows into the current product.

| Resource | What is confirmed |
| --- | --- |
| [Google’s Antigravity launch article](https://developers.googleblog.com/en/build-with-google-antigravity-our-new-agentic-development-platform/) | Agents work across the editor, terminal, and browser, with plans, screenshots, recordings, and other artifacts for review. |
| [Antigravity 2.0 overview](https://www.antigravity.google/docs/overview) | The newer standalone app manages agents independently of an IDE and supports coding and broader knowledge tasks. |
| [Paper MCP documentation](https://paper.design/docs/mcp) | Paper supports Antigravity directly. The current setup uses Paper Desktop’s connection panel and the Paper CLI. Agents can read and write designs and implement selected frames. |
| [Google’s Agent Skills documentation](https://antigravity.google/docs/skills?app=antigravity-ide) | Current workspace location is `.agents/skills`; global location is `~/.gemini/config/skills`. The docs retain backward support for `.agent/skills`. |
| [Skills authoring codelab](https://codelabs.developers.google.com/getting-started-with-antigravity-skills) | Practical examples and the distinction between skills, tools, rules, and workflows. |
| [Workflow migration guide](https://antigravity.google/docs/migration/workflows-to-skills) | Google states that legacy workflows stop working on October 19, 2026, and documents `/migrate-workflows` for moving them into skills. This is immediately relevant when following early-2026 workflow tutorials. |
| [Sidecars documentation](https://antigravity.google/docs/sidecars/) | Current technical reference for persistent helper processes used by plugins. |
| [Google’s changelog](https://antigravity.google/docs/changelog/) | Confirms the October UI extension release and warns that versions roll out gradually. |

Paper’s official guide also explains that structured containers and flex layouts help translation to code, and that starting with a small selected section makes iteration more manageable. That supplies a concrete basis for Alex’s design-to-code process without assuming a screenshot alone will reproduce an entire site accurately.

The central synthesis from these sources is **reference or design → explicit context → implementation → visual and behavioral verification → reusable instructions**. This is an interpretation of the recurring workflows, not a measured claim that one tool outperforms another.

## Reading order

1. Start with [Alex’s March 19 Blob3d follow-up](https://x.com/uialexk/status/2034652319753666747) and the [Paper MCP guide](https://paper.design/docs/mcp) to understand the original reference’s tool chain.
2. Watch [Viktor’s February 19 tutorial](https://x.com/viktoroddy/status/2024415243473211646) for a longer creative-site build with navigation timestamps.
3. Read [Rachel’s Mobbin process](https://x.com/rachelhxw/status/2082663915117498416) for collecting and handing over design evidence.
4. Read the [official skills codelab](https://codelabs.developers.google.com/getting-started-with-antigravity-skills) to make a successful procedure reusable.
5. Review [Paige’s browser QA example](https://x.com/DynamicWebPaige/status/2003159982464696827) and [Paint Studio](https://github.com/danicat/agy-paint-studio) for verification and an editable visual tool inside the agent interface.

## Coverage and provenance

The pass used the supplied post and visible replies, X’s own search results, selected full post pages and author replies, and public primary documentation. Search branches included:

- `Antigravity (design OR workflow OR skills OR tutorial)`
- The same query before May 1, 2026 with a minimum-like filter, to surface older material.
- `from:uialexk (antigravity OR blob3d)`
- `Antigravity (github OR skills OR tutorial) min_faves:100 -filter:replies`

The people-focused expansion also used both **Top and Latest** results, searches excluding Alex and the official account, older date-bounded searches, and targeted author searches after identifying tutorial authors and quoted sources. Branches included creative builds, games and apps, SDK/MCP/plugins, and first-person “built/building/made” posts. The Latest pass had no minimum-engagement requirement, which surfaced smaller creators such as Kunal and recent independent makers. Japanese and Chinese creator posts were included, but this was not a systematic multilingual census.

The expansion read full posts or articles for Emisho, Paul, Daniela’s Game Studio, Kunal, N. Taylor Mullen, Res, Burak, Sachin, and 梅干しくん, alongside visible full text in search results for other directory entries. Inclusion of a video, linked article, or repository records its discovery; it does not imply that every linked resource was watched, read, or executed. The tables explicitly distinguish supporting-tool compatibility and broad commentary from direct Antigravity builds.

Full text was read for the central portfolio, Stitch, Mobbin, AI Studio, browser QA, skills marketplace, skill-bundle, n8n, UI-extension, and CLI posts. Other rows are scoped to the visible post text or author-supplied video description. The supplied Blob3d video was visually inspected; long tutorial videos were not fully watched or transcribed. Links supplied in author replies are kept with their originating post.

Search ranking and engagement filters make this a selected collection. Deleted, private, unindexed, low-engagement, and media-only material may be missing. Image-only links, every reply, and all quote-post branches were not exhaustively recovered. Search results can include older posts alongside current ones; dates above distinguish them. No account-wide or platform-wide completeness claim is made.

These are tooling and workflow references. Inclusion does not establish Jason’s visual preferences, approve a design baseline, or verify that a listed integration is installed. Preserve upstream attribution and inspect the applicable license before reusing source code or assets.
