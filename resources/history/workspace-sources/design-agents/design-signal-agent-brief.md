# Design signal agent — discovery pass

Observed September 23, 2026 (America/New_York).

## Verified access and scope

X Pro and LinkedIn were accessible in the signed-in Codex browser. X account: @jasonfesta. LinkedIn: Jason Festa.

The [design deck](https://pro.x.com/i/decks/1990941665800999115) contains eight search columns, Designers 1–8, covering 177 distinct account handles. All eight use account-based OR queries and exclude replies with `-filter:replies`.

This was an initial discovery sample of loaded posts across those eight columns, the first LinkedIn feed post, and nine loaded results for “design team hiring.” It is not an exhaustive historical crawl. Timelines virtualize and refresh; no total historical coverage is claimed. Full text was expanded for the Xbox recruiting post. LinkedIn job cards were observed; application availability was not separately verified.

## Initial signal register

| Organization / person | Classification | Observed evidence | Source / next check |
|---|---|---|---|
| Instagram / Dave Nguyen | Explicit design hiring | Director of Product Design posted about Design Systems Product Designer and Senior Product Designer openings. Feed showed 2h. | [Author](https://www.linkedin.com/in/davidnguyen/), [Design Systems role](https://www.metacareers.com/profile/job_details/1382825436728337/), [Senior role link](https://lnkd.in/gTYQFEZB). Post permalink not captured. |
| Xbox / Adrián Mato | Team formation + recruiting | Invites product builders working across 3D, rich interfaces, platforms, CLIs and creator tools. Explicitly describes a cross-disciplinary product team. | [Post](https://x.com/adrianmg/status/2102919488299745319). No specific requisition, level, or location stated. |
| Mercury / Lauren LoPrete | Recent hiring / team growth | Reports four signed offers in two weeks. Her profile identifies her as head of design foundations at Mercury. | [Post](https://x.com/laurenloprete/status/2102860064864502190), [profile](https://x.com/laurenloprete). Company attribution inferred from profile; exact hires and remaining openings unknown. |
| Northwestern Mutual / Tom McQuaid | Explicit digital product design hiring | Product Designer III for financial-advisor workflows; NYC or Milwaukee. Search result showed 9h. | [Application link](https://lnkd.in/d9-w79_E). Direct post permalink not captured. |
| Negative Inc. / Usman K. | Explicit designer hiring | Designer role; New York metro, hybrid. Search result showed 7h. | [Job](https://www.linkedin.com/jobs/view/4468753698/). Design discipline needs verification. |
| Georgia Tech / Stephanie Stephens | Explicit creative leadership hiring | Assistant Director of Creative Services; Atlanta, on-site. Search result showed 7h. | [Job](https://www.linkedin.com/jobs/view/4467649026/). Creative services, not necessarily digital product. |
| RosanneBECK / Rosanne Beck | Explicit creative team hiring | Full-time Product Designer and part-time Custom Event Designer; Dallas, on-site; watercolor-derived products and events. | [Author / hiring profile](https://www.linkedin.com/in/rosannebeck/). Physical product/event design. |
| Wonder / Mike Smith | Design work / team reference | Describes in-house brand refresh followed by outside help with the logo. | [Post](https://x.com/mikesmith187/status/2102770737341665462). No open role established. |
| Column / Ryan Miyoshi | Brand work reference | Shares Column brand guidelines. | [Post](https://x.com/ryry__mimi/status/2102898998722121873). Employment relationship and team structure unverified. |
| Clay / Justin Rands | Brand work reference | Shares branding for a new Clay series. | [Post](https://x.com/jayrizpop/status/2102832604148097070). No hiring claim. |
| AirOps / Tommy Geoco, referring to @jessperate | Historical team-change reference | Podcast discussion mentions departure of AirOps head of brand. | [Post](https://x.com/designertom/status/2102796478729396321). Truncated text; validate original interview and timing before recording as a current change. |

## What the agent should do

Use two linked records: organizations/teams and individual evidence events. An organization can have many sources and multiple roles. Keep these event types distinct: explicit opening, recruiting invitation, completed hire, team formation/change, and general team/design-work reference.

For each event retain source URL, platform, author and profile, posted date, observed date, short evidence excerpt, organization, team, discipline, role, level, location, remote status, job URL, evidence confidence, and verification status. Unknown fields stay unknown. A post is evidence of a claim, not proof that a role remains open.

Deduplicate exact post IDs first, then group repeated references to the same company/role. Preserve every supporting source. Keep the original post date when a later repost resurfaces an older opening. Distinguish an employee’s own hiring announcement from a third-party share.

Use the existing 177-account deck as the initial source roster. Read its general posts for team context, then perform focused hiring searches for coverage beyond that roster. A separate reply-inclusive search is needed because every existing column excludes replies. LinkedIn needs both network-feed discovery and explicit searches; the feed alone cannot provide complete coverage.

Broad “design” searches return interior design, CAD, chip design, and unrelated company names such as Designs for Health. Record discipline before prioritizing. Product design can mean software or physical goods; do not classify by title alone.

Suggested initial backfill: seven days, with a per-source checkpoint and a coverage log noting oldest post reached, number reviewed, access errors, and incomplete intervals. Then compare new evidence with the previous checkpoint. An eventual recurring run should surface new openings and material team changes, while retaining general mentions in the team directory.

## Decisions still needed

Primary use: personal career opportunities, design-services prospects, or a general design-team directory. This changes prioritization, not the evidence captured. Also establish intended design disciplines, geography, backfill period, and update cadence before a larger crawl or recurring setup.

Update: the active scope is now Ramp-style design-team examples across X and LinkedIn, including a variety of hiring and team-growth signals. The Design team watch recurring agent has been created. Its current instructions and catalogue live in `design-team-watch/`. No outreach was sent.
