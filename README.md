# ISRO — concept redesign

A portfolio demonstrator that reimagines [isro.gov.in](https://www.isro.gov.in/)
with the clarity of [nasa.gov](https://www.nasa.gov/), the restraint of
[spacex.com](https://www.spacex.com/) and the calm of
[blueorigin.com](https://www.blueorigin.com/).

**Live:** https://dank-heehaw.github.io/ISRO_Redesign

> This is unofficial concept work. It is not affiliated with, endorsed by, or
> connected to the Indian Space Research Organisation or the Department of
> Space. All ISRO names and mission designations belong to them.

## Stack

| Concern         | Choice                                                            |
| --------------- | ----------------------------------------------------------------- |
| Framework       | [Astro 7](https://astro.build) — static output, zero JS by default |
| Styling         | Sass (SCSS) with a token layer and per-component scoped styles     |
| Motion          | [GSAP](https://gsap.com) + ScrollTrigger + SplitText, [Lenis](https://lenis.darkroom.engineering) smooth scroll |
| Content         | Astro content collections, Markdown + Zod schemas                  |
| Type safety     | TypeScript strict, `astro check` in CI                             |
| Hosting         | GitHub Pages, built and deployed by GitHub Actions                 |

Astro was chosen over Next.js because the only JavaScript this site needs is the
scroll choreography. Astro ships nothing else; a React framework would ship a
runtime to render what is fundamentally a document.

## Running it

```bash
npm install
npm run dev       # http://localhost:4321/ISRO_Redesign
npm run build     # type check, then static build to dist/
npm run preview   # serve dist/ locally
```

Node 20 or newer.

## How it is organised

```
src/
├── components/
│   ├── brand/         Mark and wordmark
│   ├── home/          Homepage sections, each self-contained
│   ├── Header.astro   Five-cluster nav with mega-menus and a mobile drawer
│   └── Footer.astro
├── content/
│   ├── missions/      One Markdown file per mission
│   ├── vehicles/      One per launch vehicle
│   └── news/          Newsroom entries
├── data/navigation.ts The single source of truth for the IA
├── layouts/           BaseLayout — fonts, meta, header, footer
├── pages/             File-based routes
├── scripts/motion.ts  The whole animation system
├── styles/            Tokens, mixins, reset, typography, globals
└── utils/url.ts       Base-path helpers for GitHub Pages
```

### The motion system

`src/scripts/motion.ts` is declarative. Markup opts into an animation with a
data attribute and never imports GSAP directly:

```html
<h2 data-anim="split-lines">Animates in line by line</h2>
<p data-anim="fade-up" data-anim-delay="0.1">Rises and fades</p>
<span data-counter="433">0</span>
<div data-parallax="0.2">Drifts against the scroll</div>
```

Everything respects `prefers-reduced-motion`: Lenis is not initialised, reveals
resolve instantly, counters jump to their final value, and the orbit animations
stop. There is also a `no-js` guard so a script failure leaves the content
readable rather than invisible.

### Styling conventions

Compile-time values (breakpoints, easings, durations) are SCSS variables in
`_tokens.scss`. Runtime values (colour, type scale, spacing) are CSS custom
properties in `_root.scss`. `loadPaths` is configured so any component can write
`@use 'mixins' as *;` regardless of its depth.

Type and spacing scale fluidly through a `fluid()` function that emits `clamp()`,
so there are almost no breakpoint-specific font sizes.

### Base path

GitHub Pages serves from `/ISRO_Redesign`, so every internal link goes through
`withBase()` from `src/utils/url.ts`. Writing a bare `href="/missions"` will
404 in production.

## Credits

**Logotype direction** — inspired by
[Swarna Manjari's ISRO rebranding study](https://www.behance.net/gallery/91862335/Rebranding-ISRO-Indian-Space-Research-Organisation)
and its use of parabolic and hyperbolic curves in place of the official 2002
mark. The mark used here is **original artwork drawn for this project**, not a
reproduction of hers — her study is the reason it looks the way it does, and the
credit belongs to her. Full attribution is on the `/brand` page and in the site
footer.

**Typefaces** — Space Grotesk (display), Inter (body), JetBrains Mono
(telemetry and labels), Noto Sans Devanagari (Hindi), all self-hosted via
Fontsource.

## A note on the data

Mission facts are drawn from ISRO's public communications and are accurate to
the best of a portfolio project's ability. The aggregate figures in the "by the
numbers" section are indicative, and the launch countdown uses a placeholder
manifest entry in `src/components/home/NextLaunch.astro`. Do not cite this site.

## Licence

Code is MIT (see `LICENSE`). ISRO names, mission designations and any
organisational marks are the property of ISRO / Department of Space and are used
here for non-commercial illustrative purposes only.
