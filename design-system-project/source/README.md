# Meridian Report System

A React + Tailwind component library for professional analytical reports —
title pages, statement/divider pages, bulleted findings, chart-driven
"exhibit" pages, sidebar callouts, section intros, and back matter. Eight
page templates, five chart primitives, one proportional token scale.

## Where this came from

The palette, type pairing, chart conventions, and page grid were reverse
engineered by rendering and pixel-sampling a professional analytical PDF
report the user supplied (`pdftoppm` + Pillow — see extraction notes
below). Two things were deliberately **not** carried over, out of respect
for the source publisher's brand:

- **No logo, wordmark, or company name.** `BrandMark` is an original
  abstract glyph with a placeholder name prop — swap in your own.
- **No proprietary typefaces.** The source uses a custom serif + a
  custom geometric sans that aren't licensed for reuse here. This system
  pairs **Source Serif 4** (display headlines) with **Public Sans**
  (everything else) as open, Google-Fonts-hosted substitutes with a
  similar personality — confident serif accent, clean humanist body text.

Everything else — the cool navy/blue/cyan-only color system, the
exhibit-labeled chart pattern, the two-width column grid, the single-hue
data viz discipline — is a genre convention common across professional
research reports, not any one publisher's IP, and is fair game to build
a reusable system around.

### Extraction notes

**Color.** The source uses a strictly cool, single-hue-family palette —
navy, electric blue, cyan, and neutral grays. No warm colors (red,
orange, green) appear anywhere, including for "negative" data points;
sentiment is carried by labels and copy, not traffic-light color. That
discipline is worth keeping: it's what makes a 30-page deck with a dozen
charts feel like one document.

| Token | Hex | Used for |
|---|---|---|
| `navy-950` | `#001B2C` | Cover / back-cover fields |
| `navy-900` | `#061F79` | Primary data series, dark accents |
| `navy-700` | `#1C44DC` | Heatmap ramp step |
| `azure-600` | `#2251FF` | Section-divider fields, secondary series |
| `azure-500/400/300` | `#2972FF` / `#5E9DFF` / `#99C4FF` | Heatmap ramp steps |
| `sky-500/300/200` | `#00A9F4` / `#6ECBF7` / `#99E6FF` | Sequential 3-step bar ramps |
| `steel-400/300` | `#6A79AF` / `#9BA5C9` | Muted secondary/tertiary series |
| `canvas-50` | `#F4F4F4` | Sidebar / tinted-surface backgrounds |
| `canvas-100` | `#DFDFDF` | Bar chart tracks |
| `canvas-300/400/500` | `#CCCCCC` / `#9D9D9D` / `#757575` | Gridlines, eyebrows, axis labels |
| `paleblue-100` | `#CBD9E6` | Back-matter page tint |
| `ink` | `#231F20` | Body text (a warm near-black, not pure `#000`) |

**Typography scale.** Headline sizes step roughly 1.5–2× between levels
(footnote → label → body → exhibit title → headline → statement →
display), and every step is expressed as a `cqw` (container-query-width)
unit rather than `rem` — see "Why cqw" below.

**Chart styling.** Thin 1px gridlines in `canvas-300`, horizontal only;
axis and category labels in `canvas-500`; value labels printed directly
on or above marks rather than requiring a reader to trace back to an
axis; legends are small square swatches, not lines or circles; every
exhibit carries a numbered eyebrow, a bolded "so what" title (not a
neutral chart title), a metric/unit line, and a source footnote.

**Spatial hierarchy.** Two content widths, not one: headlines and body
copy sit in a narrower, indented column (~70% width), while the exhibit
below spans the full content width. That extra width is exactly what
lets a chart carry more density than the prose next to it.

## Why `cqw`

Every template is built on one `Page` primitive with
`container-type: inline-size`, and every font size, padding, and gap
inside a template is expressed in `cqw` (1cqw = 1% of the Page's own
rendered width — see `tailwind.config.js`'s `ds-*` font sizes and
`cq-*` spacing scale). Drop a `Page` into a 320px card or a 2000px
monitor and it holds its proportions instead of just reflowing or
clipping — genuinely reusable across a phone-width preview, a doc
embed, or a full-bleed export. This needs a Chromium- or
Safari-class browser (Container Query Units, widely supported since
2023).

## Structure

```
src/
  tokens.js                     raw hex values + categorical/sequential
                                 chart palettes (for SVG fill/stroke —
                                 Tailwind classes can't reach those)
  components/
    primitives/
      Page.jsx                  the cqw-scaled canvas every template sits on
      PageFooter.jsx            report title + page number
      BrandMark.jsx             placeholder logo + name
      Eyebrow.jsx                small-caps label ("Exhibit 1", "Sidebar")
      FlowFieldBackground.jsx   original generative accent graphic
    charts/
      LineChart.jsx             single-series trend line
      StackedBarChart.jsx       vertical stacked bars + optional callout
      HorizontalBarChart.jsx    ranked bars on a track
      HorizontalStackedBarChart.jsx   grouped stacked rows
      HeatmapMatrix.jsx         row/column sequential-color matrix
      ChartLegend.jsx / ChartFootnotes.jsx
    templates/
      CoverSlide.jsx
      StatementSlide.jsx        full-bleed single statement
      BulletListSlide.jsx       "key findings" bulleted page
      ExhibitSlide.jsx          headline + narrative + chart (the workhorse)
      SidebarSlide.jsx          tinted surface, 3-col text + exhibit
      SectionIntroSlide.jsx     full-bleed art + frosted drop-cap intro
      ClosingSlide.jsx          back matter / about-the-research
      BackCoverSlide.jsx
  App.jsx                       demo assembling all 8 templates
```

## Use it

```bash
npm install
npm run dev
```

Opens the showcase (`src/App.jsx`) with all eight templates populated
with fictional sample data. Import what you need into your own app:

```jsx
import { ExhibitSlide, HorizontalBarChart } from "./components";

<ExhibitSlide
  headline="Adoption keeps climbing"
  exhibitNumber={1}
  exhibitTitle="Share of teams using the tool, by region."
  metricUnit="% of respondents"
  chart={<HorizontalBarChart data={[{ label: "EMEA", value: 41 }]} />}
  source="Internal survey, 2026"
  reportTitle="Q3 report"
  pageNumber={4}
/>
```

Swap `brandName`, the Google Fonts import in `src/index.css`, and the
token hexes in `tailwind.config.js` / `src/tokens.js` to fit your own
brand — that's the whole surface area to restyle the system.
