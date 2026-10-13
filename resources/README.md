# Resources

```text
JASON / RESOURCE LIBRARY
────────────────────────────────────────────
start     choose a resource type below
browse    sites.md for collected destinations
extend    update one canonical record, then rebuild
```

This is the library's front door. Design definitions and external capabilities live here; [agents](../agents/README.md) describe the roles that use them, and [tools](../tools/README.md) contains runnable code.

```text
resources/
├── README.md                 Start here; where to save
├── structure.md              The complete six-layer design skeleton
├── diagrams/                 Downloadable GitHub-dark PNG screenshots
├── apps/                     App product categories, interface families, and styles
├── games/                    Game genres, screen families, and art direction
├── websites/                 Website uses, page families, and styles
├── devices/                  Mobile · tablet · desktop · TV
├── viewports/                Sizes, Chrome presets, and native units
├── styles/                   Shared visual vocabulary and record template
├── motion/                   Motion terminology, Remotion, and Jitter
├── sites.md                  Design-site directory, grouped by source type
├── mcps/                     MCP references and connection records
├── skills.md                 Installed skills and pointers
├── agents/                   Supporting agent and craft references
├── tools/                    Tool research and setup receipts
├── jigs/                     Shared layout jig and experiments
├── guides/                   Reference intake and design methods
├── sources/                  Detailed source records and collections
└── history/                  Preserved earlier versions and captures
```

## Design

| Resource | What it answers |
| --- | --- |
| [Full Atlas](../agents/ATLAS.md#full-atlas) | Every app, website, and game category, subcategory, and style family on one page. |
| [Structure](structure.md) | How do the six layers fit together? |
| [Diagram PNGs](diagrams/README.md) | Download the trees, folder maps, and role overview as GitHub-dark images. |
| [Apps](apps/README.md) · [Games](games/README.md) · [Websites](websites/README.md) | What are we designing? Which category, subcategory, and style vocabulary applies? |
| [Devices](devices/README.md) | What device class and input context are we targeting? |
| [Viewports](viewports/README.md) | What exact width × height and Chrome preset are we using? |
| [Styles](styles/README.md) | What visual language defines the direction? |
| [Motion](motion/README.md) | What moves, how, and with which terminology? |

## Capabilities

| Resource | What lives here |
| --- | --- |
| [MCPs](mcps/README.md) | Providers, documented capabilities, connection records |
| [Skills](skills.md) | Installed instructions, catalogue guides, and pointers |
| [Agent resources](agents/README.md) | Craft foundation and supporting agent research |
| [Tool references](tools/README.md) | Tool capabilities and machine-specific setup receipts |
| [Jigs](jigs/README.md) | Review controls and interactive experiments |
| [Guides](guides/README.md) | Intake, reconstruction, composition, handoff, and Dream methods |

## Collected references

**[Inspiration](inspiration.md)** groups the saved visual references into [WebGL / shaders](inspiration.md#webgl--shaders), [Product](inspiration.md#product), and [Websites](inspiration.md#websites), with website links, video previews, source credits, and downloads.

[sites.md](sites.md) is the single design-site directory, grouped by source type. [Sources](sources/README.md) retains the underlying observations, IDs, dates, clips, images, and collection-specific detail. [History](history/README.md) retains previous versions. A source entry is evidence to inspect, not an instruction to install a tool or a confirmed design preference.

[Motion and website downloads](sources/motion-references/README.md) collects Jason’s supplied X posts, websites, jelly-glass demo, image/video galleries, individual media downloads, and public contacts. [UI downloads](sources/ui-references/README.md) keeps interface references in a separate Markdown collection.

## Where to save

- Design definitions: the relevant type folder, `devices/`, `viewports/`, `styles/`, or `motion/`.
- External design sites and new links: `sources/source-records.md`; larger collections can keep one supporting source folder.
- MCPs, skills, agent references, and tool research: their named resource record above.
- Actual builds, screenshots chosen for a project, custom kits, and versions: that project's recorded destination.
- Superseded material: `history/`, with provenance and a link from the replacement.

## Add a reference

1. Search [sites.md](sites.md) for the URL or name; update its existing source record when present.
2. For a new link, append a record to [sources/source-records.md](sources/source-records.md) using this shape. Keep the original source ID and prior observations when revisiting it.
3. Record the pages, frames, or sections actually inspected. Keep pending work and the next crawl cursor in that source record. Follow relevant links in batches; do not treat discovery as review.
4. Rebuild the browsing directory and check the kit:

```sh
python3 tools/workspace.py catalogue
python3 tools/workspace.py check
```

```md
## Reference name

- **Id:** stable-reference-id
- **Name:** Reference name
- **Url:** https://example.com/
- **Categories:** ["Product and website inspiration"]
- **Summary:** What it is useful for
- **Source status:** discovered
- **Observed at:** YYYY-MM-DD
- **Website reviewed:** No
- **License:** Not recorded
- **Notes:** []
- **Origin:** ["user_supplied"]
- **Inspected scope:** None yet
- **Next cursor:** First relevant page
```

> By the way — `websites/` describes websites we can design. `sites.md` lists websites we collect as references. They have different jobs.
