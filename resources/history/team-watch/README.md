# Design team watch

Purpose: scan design opportunities and build a cumulative catalogue of X and LinkedIn posts about software/product design teams, using Ramp's public team storytelling as the reference. Jason says his design team is modeled after Ramp. Prioritize examples useful for understanding team composition, hiring, culture, and ways of working.

## Inclusion rules

Keep attributable posts about a named organization's design team: team websites and introductions; team culture, critique, offsites and workshops; process, tools and collaboration; work shipped with team attribution; formation or restructuring; named people joining; completed hires; and explicit openings. A company need not be hiring to qualify. Prefer employees, design leaders, founders and company accounts. Keep substantive third-party references with a clear attribution label.

Disciplines: product/UX/UI, brand/visual, design engineering, design systems, motion/interaction, research, content design and design leadership. These are discovery categories, not assertions about Ramp's exact org chart. Preserve interesting adjacent teams; exclude unrelated CAD, construction, chip design, generic inspiration, lone portfolio posts, recruiters' undifferentiated job dumps and keyword-only mentions.

## Search variety

Use the existing X Pro design deck https://pro.x.com/i/decks/1990941665800999115 as one seed source; it has eight Designers columns containing 177 accounts, all excluding replies. Search beyond the deck and include relevant replies. Preserve the original eight Designers columns. The user authorized a new ramp design column and ongoing enrichment with verified Ramp design team accounts.

Rotate plain-language searches, adapting syntax to each platform. Start broad; narrow using the results rather than requiring every term at once:

- "design team", "our designers", "design at", "meet the design team"
- "design team" with "website", "culture", "offsite", "critique", "how we work", "process", "shipped"
- "design team" with "hiring", "growing", "building", "join", "welcoming", "joined", "signed offers"
- "founding designer", "first designer", "head of design", "design director"
- "product designer", "brand designer", "design engineer", "design systems", "motion designer", "UX researcher", "content designer" with recruiting or joining language

Use Ramp, Mercury, Xbox, Vercel, Figma, Linear, Shopify and Flutterwave as initial discovery seeds, then expand to organizations mentioned in qualifying sources. These are seeds, not an exclusive company list or confirmed active hirers.

## Run procedure

1. Read instances.json and coverage.json. Verify account identity before using signed-in pages. Use existing browser capabilities and connectors; no new paid services or dependencies are required.
2. Check X first, then LinkedIn. Use the deck, platform searches and public web search. If X search errors, try the visible retry once, then use indexed search/known profiles. Record degraded coverage. Never interpret an error or login wall as zero matches.
3. Review new posts since the last successful source checkpoint with a 48-hour overlap. On early runs also backfill the last 30 days in bounded slices. Save older strong examples as historical references without presenting them as fresh.
4. Open primary posts when available, expand truncated text, capture exact permalinks and verify author/team relationships. Mirrors and search snippets are leads until verified; mark them indexed_only. Linked team websites and job pages are supporting evidence, not X posts. Dates shown on mirrors are unreliable relative dates; do not infer publication dates from them.
5. Save every qualifying discovered instance, without claiming exhaustive access to X or LinkedIn. Use roughly 100 candidate posts or 15 minutes per run as a practical bound; persist unfinished work and rotate searches on the next run.
6. Deduplicate by normalized platform post ID/URL. Group related company/event posts, but preserve each distinct author's post and evidence. Cross-platform reposts can share an event key while retaining separate records. A new source strengthens an existing event rather than becoming an invented new hire.
7. Record platform, canonical post URL, author, company/team, event types, design discipline, short evidence summary, original date if known, observed date, verification state and supporting URLs. Separate openings from completed hires; verify whether jobs remain open before labeling them current. Do not invent names, headcounts, dates or employment relationships.
8. Update instances.json, coverage.json and a readable digest.md. Notify in this task only for meaningful new matches, materially changed evidence, completed backfill, or a new access failure requiring action. Otherwise stay quiet. Do not repeat unchanged findings.

External discovery is read-only except maintaining the explicitly authorized ramp design column. No messages, follows, likes, applications, external drafts, paid enrichment or changes to other automations. Local catalogue updates are authorized.

## Known access limits

Signed-in X Pro and LinkedIn were available during discovery on 2026-09-23. Standalone X search subsequently returned errors. Unattended browser access has not yet been proven. Web-index fallbacks have partial coverage. This monitor should state these limits and retain unfinished checkpoints.

## Ramp team column

Created and visibly verified on 2026-09-23 in the design deck: **ramp design**, Latest, excluding replies. Initial eight accounts: lalizlabeth, PaulJun_, viktorhofte, celinekeomany, pontusab, reallygoodwork, RikinPatel13, baothiento. This is a verified starting set, not the complete team. Ramp’s team article describes 40 people. Continue mapping public professional profiles and expand the column when current design-team affiliation is verified. Affiliates include non-design employees; never import all affiliates indiscriminately. Contractor credits alone do not establish employment.

Evidence: https://x.com/tryramp/affiliates (Elizabeth Lin: design programs; Paul Jun: leading brand; Viktor: designing/building; Celine: design/art; Pontus: building, also credited on design site). https://x.com/reallygoodwork bio identifies Drew Minns as senior staff design engineer at Ramp. https://ramp.design/blog/behind-ramp-design names Bao, Rikin, Nicholas and Paul; https://x.com/PaulJun_/status/2098080850164281394 credits team contributors. https://x.com/RikinPatel13/status/2102851334374306212 is a direct Ramp mobile design post.

Pending direct profile checks: diegozaks, racheljychen, _angelaliu, TheWifiPirate, ssrenali, floguo, bradleyziffer, jack_beveridge. Known team names with unresolved X identities: Nicholas Ano and Jon Howell. Keep unresolved candidates separate from verified membership. Expand discovery to other teams; propose their columns when enough evidence exists. No outreach is authorized.
