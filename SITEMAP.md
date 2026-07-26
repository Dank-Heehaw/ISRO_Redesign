# Information architecture

## The problem being solved

The live isro.gov.in homepage exposes roughly ninety distinct destinations
above the fold and below it: a rotating flash-news ticker, four card links
(Press / Careers / Students / Tenders), a "Latest News" list running to
several hundred entries, a highlights carousel, a nine-logo portals strip, a
recent-launches rail, an autonomous-bodies rail, a fourteen-item centres rail,
an IN-SPACe / NSIL rail, and a five-tab "Useful Links" accordion holding
another twenty-odd links.

Everything is one click away, which is another way of saying nothing is
prioritised. The redesign collapses that into **five clusters**, and gives the
homepage a single reading order rather than nine parallel ones.

## Full sitemap

Routes marked ✅ are built in this demonstrator. The rest are documented so the
IA is legible as a design decision, not an accident of scope.

```
/                                    ✅ Home
│
├── /missions                        ✅ Mission index (filter by category + status)
│   ├── /missions/[slug]             ✅ Mission profile
│   │     chandrayaan-3 · gaganyaan · aditya-l1 · nisar
│   │     mangalyaan · navic · astrosat · spadex
│   ├── ?category=human                 Human spaceflight
│   ├── ?category=planetary             Planetary exploration
│   ├── ?category=earth                 Earth observation
│   └── ?category=navigation            NavIC
│
├── /launch-vehicles                 ✅ Fleet, compared to scale
│   └── /launch-vehicles/[slug]         PSLV · GSLV · LVM3 · SSLV
│
├── /science                            Science overview
│   ├── /science/space                  Astronomy, heliophysics, planetary science
│   ├── /science/earth                  Climate, cryosphere, agriculture, disaster response
│   ├── /science/microgravity           IMEx, Axiom-4 results, CROPS
│   └── (external) Bhuvan · Bhoonidhi · MOSDAC · ISSDC · VEDAS · NDEM
│
├── /newsroom                        ✅ Latest updates
│   ├── /newsroom/[slug]             ✅ Article
│   ├── ?type=press | launch | science | outreach
│   ├── /newsroom/gallery               Image archive
│   └── /newsroom/media-kit             Logos, b-roll, usage terms
│
├── /about                           ✅ Organisation
│   ├── /about/centres                  VSSC · LPSC · SDSC SHAR · URSC · SAC · NRSC ·
│   │                                   HSFC · IPRC · IISU · ISTRAC · MCF · LEOS · IIRS
│   ├── /about/autonomous-bodies        PRL · NARL · NESAC · IIST
│   ├── /about/leadership               Chairman, Space Commission, directorates
│   └── /about/history                  1962 INCOSPAR → today
│
├── /connect                            Engagement hub
│   ├── /connect/careers                Recruitment notices
│   ├── /connect/students               YUVIKA · START · NE-SPARKS · STEM
│   ├── /connect/tenders                Procurement, corrigenda, e-procurement
│   ├── /connect/ask                    Ask an Expert
│   └── /connect/contact                Centres, media, general
│
├── /brand                           ✅ Design case study + credits
├── /sitemap                            Human-readable sitemap
├── /policy · /accessibility · /rti     Statutory pages
└── /404                             ✅ Not found
```

## What changed, and why

**Nine nav clusters become five.** Missions, Science, Newsroom, Organisation,
Connect. Every one of the ninety original destinations still has a home; it is
just reachable by reasoning rather than by scanning.

**Portals get names.** The live site presents Bhuvan, MOSDAC, ISSDC, Bhoonidhi,
VEDAS and NDEM as a strip of logos with expanded acronyms. Almost nobody can
tell from that which one has the radar granules. The redesign gives each a
one-sentence description of what you would go there to do.

**"Latest News" is split by intent.** A single reverse-chronological list mixing
PDF circulars, launch results and scientific findings serves nobody. Splitting
into press / launch / science / outreach lets a journalist and a researcher
each ignore four-fifths of it.

**Centres are a page, not a carousel.** Fourteen auto-rotating logo tiles is a
hostile way to present the organisation's geography.

**Flash-news ticker is retired.** Ten rotating items competing with the hero is
the pattern the ticker was invented to avoid.

## Homepage reading order

1. **Hero** — one sentence on what the organisation does, two ways in
2. **Next launch** — live countdown; the single most-searched fact
3. **Mission in focus** — pinned scroll section on Gaganyaan
4. **Missions grid** — six cards into the index
5. **Fleet** — four launch vehicles drawn to scale, horizontally scrollable
6. **By the numbers** — four animated counters
7. **Newsroom** — five most recent updates
8. **Open data** — the six portals, described
9. **Footer** — full IA, plus design credits
