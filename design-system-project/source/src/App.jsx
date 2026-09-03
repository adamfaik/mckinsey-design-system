import {
  CoverSlide,
  StatementSlide,
  BulletListSlide,
  ExhibitSlide,
  SidebarSlide,
  SectionIntroSlide,
  ClosingSlide,
  BackCoverSlide,
  LineChart,
  StackedBarChart,
  HorizontalBarChart,
  HorizontalStackedBarChart,
  HeatmapMatrix,
} from "./components";
import { color, categorical, sequentialSky, duoMuted } from "./tokens";

const BRAND = "Meridian Analytics";
const REPORT_TITLE = "The state of workplace automation, 2026";

const adoptionTrend = [
  { label: "2019", value: 22 },
  { label: "2020", value: 34 },
  { label: "2021", value: 41 },
  { label: "2022", value: 45 },
  { label: "2023", value: 48 },
  { label: "2024", value: 63 },
  { label: "2025", value: 74 },
  { label: "2026", value: 79 },
];

const phaseByYear = [
  {
    label: "2025",
    segments: [
      { value: 33, color: duoMuted[0] },
      { value: 27, color: duoMuted[1] },
      { value: 29, color: duoMuted[2] },
    ],
  },
  {
    label: "2026",
    segments: [
      { value: 39, color: duoMuted[0] },
      { value: 31, color: duoMuted[1] },
      { value: 22, color: duoMuted[2] },
    ],
  },
];

const industryBuild = [
  { label: "Technology", value: 44 },
  { label: "Financial services", value: 40 },
  { label: "Healthcare", value: 37 },
  { label: "Manufacturing", value: 33 },
  { label: "Retail", value: 29 },
  { label: "Public sector", value: 19 },
  { label: "Total", value: 34, separateTotal: true },
];

const scalingBySize = [
  {
    label: "Chatbots and assistants",
    segments: [
      { value: 41, color: categorical[0] },
      { value: 22, color: categorical[1] },
      { value: 20, color: categorical[2] },
      { value: 17, color: categorical[3] },
    ],
  },
  {
    label: "Workflow agents",
    segments: [
      { value: 24, color: categorical[0] },
      { value: 19, color: categorical[1] },
      { value: 28, color: categorical[2] },
      { value: 29, color: categorical[3] },
    ],
  },
  {
    label: "Coding agents",
    segments: [
      { value: 21, color: categorical[0] },
      { value: 18, color: categorical[1] },
      { value: 24, color: categorical[2] },
      { value: 37, color: categorical[3] },
    ],
  },
];

const revenueByFunction = [
  { label: "Sales and marketing", segments: [{ value: 9, color: sequentialSky[0] }, { value: 11, color: sequentialSky[1] }, { value: 22, color: sequentialSky[2] }] },
  { label: "Product development", segments: [{ value: 7, color: sequentialSky[0] }, { value: 9, color: sequentialSky[1] }, { value: 19, color: sequentialSky[2] }] },
  { label: "Operations", segments: [{ value: 6, color: sequentialSky[0] }, { value: 8, color: sequentialSky[1] }, { value: 17, color: sequentialSky[2] }] },
  { label: "Finance", segments: [{ value: 5, color: sequentialSky[0] }, { value: 6, color: sequentialSky[1] }, { value: 12, color: sequentialSky[2] }] },
];

const heatColumns = ["Technology", "Financial svcs", "Healthcare", "Retail", "Manufacturing", "Public sector"];
const heatRows = ["IT", "Operations", "Customer service", "Product", "Marketing", "HR"];
const heatValues = [
  [23, 18, 14, 12, 9, 7],
  [16, 21, 11, 15, 18, 6],
  [19, 14, 22, 20, 8, 9],
  [22, 12, 9, 8, 7, 5],
  [15, 17, 8, 19, 6, 4],
  [8, 9, 6, 5, 4, 11],
];

function Frame({ label, children }) {
  return (
    <div className="space-y-3">
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>
      <div className="mx-auto w-full max-w-3xl shadow-xl ring-1 ring-black/5">{children}</div>
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-200 px-6 py-12">
      <div className="mx-auto mb-16 max-w-3xl space-y-2">
        <p className="text-sm font-semibold uppercase tracking-wide text-azure-600">Design system showcase</p>
        <h1 className="text-3xl font-bold text-ink">Meridian Report System</h1>
        <p className="text-slate-600">
          Eight composable page templates and five chart primitives, built on one proportional token scale so every
          template scales cleanly at any width. Populated here with fictional sample data.
        </p>
      </div>

      <div className="mx-auto flex max-w-3xl flex-col gap-16">
        <Frame label="1 · Cover">
          <CoverSlide
            brandName={BRAND}
            eyebrow="Annual research"
            title={"The state of\nworkplace automation"}
            subtitle="Momentum, spending, and the gap between adoption and results"
            date="March 2026"
          />
        </Frame>

        <Frame label="2 · Statement / section divider">
          <StatementSlide
            lead="Adoption is outpacing readiness."
            body="Teams are rolling out automation faster than they can measure what it actually returns, and leaders are starting to feel that gap."
            byline="Findings from the 2026 Workplace Automation Survey"
            reportTitle={REPORT_TITLE}
            pageNumber={2}
          />
        </Frame>

        <Frame label="3 · Bulleted findings">
          <BulletListSlide
            headline="Key findings"
            reportTitle={REPORT_TITLE}
            pageNumber={3}
            items={[
              { lead: "Adoption keeps climbing, led by large organizations.", body: "Seventy-nine percent of respondents now use automation in at least one function, up from 74 percent a year ago." },
              { lead: "Coding agents are the fastest-scaling tool.", body: "More than a third of large enterprises report scaling coding agents across engineering teams." },
              { lead: "Spend is starting to constrain rollout.", body: "One in five organizations say compute and licensing costs are limiting how widely they deploy automation." },
              { lead: "Financial impact is lagging individual gains.", body: "Most employees report personal productivity gains, but enterprise-level margin impact has held flat year over year." },
              { lead: "A small group of high performers is pulling ahead.", body: "Organizations that redesign workflows around automation, rather than bolting it onto old ones, report meaningfully larger returns." },
            ]}
          />
        </Frame>

        <Frame label="4 · Exhibit — line + stacked bar">
          <ExhibitSlide
            headline="Automation use keeps deepening as organizations move past pilots"
            intro="Adoption has climbed steadily for seven years, and the mix is shifting: more organizations now describe their use as fully scaled rather than experimental."
            exhibitNumber={1}
            exhibitTitle="Organizations are increasingly reaching the scaling phase."
            metricLabel="Use of automation by organization,"
            metricUnit="% of respondents"
            reportTitle={REPORT_TITLE}
            pageNumber={4}
            brandName={BRAND}
            source="Meridian Analytics Workplace Automation Survey, 2019–26"
            panels={[
              { title: "Organizations using automation in ≥1 function", chart: <LineChart data={adoptionTrend} color={color.navy900} /> },
              {
                title: "Phase of use among adopters",
                chart: (
                  <StackedBarChart
                    data={phaseByYear}
                    callout={{ fromIndex: 0, toIndex: 1, segmentIndex: 0, text: "+6 pts" }}
                  />
                ),
              },
            ]}
          />
        </Frame>

        <Frame label="5 · Exhibit — ranked horizontal bars">
          <ExhibitSlide
            headline="Technology and financial services are furthest along in building automation in-house"
            intro="Access to engineering talent and existing data infrastructure explain much of the gap between the fastest- and slowest-moving industries."
            exhibitNumber={2}
            exhibitTitle="Share of organizations building automation capability in-house, by industry."
            metricUnit="% of respondents"
            reportTitle={REPORT_TITLE}
            pageNumber={5}
            brandName={BRAND}
            source="Meridian Analytics Workplace Automation Survey, 2026"
            chart={<HorizontalBarChart data={industryBuild} />}
          />
        </Frame>

        <Frame label="6 · Exhibit — grouped stacked bars">
          <ExhibitSlide
            exhibitNumber={3}
            exhibitTitle="Coding agents show the widest gap between piloting and full scale."
            metricLabel="Phase of tool adoption,"
            metricUnit="% of respondents"
            reportTitle={REPORT_TITLE}
            pageNumber={6}
            brandName={BRAND}
            source="Meridian Analytics Workplace Automation Survey, 2026"
            legend={[
              { label: "At least scaling", color: categorical[0] },
              { label: "Piloting", color: categorical[1] },
              { label: "Experimenting", color: categorical[2] },
              { label: "Not yet started", color: categorical[3] },
            ]}
            chart={<HorizontalStackedBarChart data={scalingBySize} />}
          />
        </Frame>

        <Frame label="7 · Exhibit — sequential stacked bars">
          <ExhibitSlide
            exhibitNumber={4}
            exhibitTitle="Sales, marketing, and product teams report the largest revenue gains."
            metricLabel="Revenue increase attributed to automation, past 12 months,"
            metricUnit="% of respondents by function"
            reportTitle={REPORT_TITLE}
            pageNumber={7}
            brandName={BRAND}
            source="Meridian Analytics Workplace Automation Survey, 2026"
            legend={[
              { label: "Increase by >10%", color: sequentialSky[0] },
              { label: "Increase by 6–10%", color: sequentialSky[1] },
              { label: "Increase by ≤5%", color: sequentialSky[2] },
            ]}
            chart={<HorizontalStackedBarChart data={revenueByFunction} />}
          />
        </Frame>

        <Frame label="8 · Sidebar / callout — heatmap">
          <SidebarSlide
            kicker="Sidebar"
            headline={"Automation use varies\nsharply by function"}
            reportTitle={REPORT_TITLE}
            pageNumber={8}
            brandName={BRAND}
            source="Meridian Analytics Workplace Automation Survey, 2026"
            columns={[
              "IT and engineering teams report the deepest use of automation across every industry we studied, reflecting both technical readiness and easier access to tooling.",
              "Customer-facing functions follow a different pattern: adoption concentrates in a handful of industries — retail, healthcare, and financial services — where volume justifies the investment.",
            ]}
            exhibitNumber={5}
            exhibitTitle="IT teams in technology and financial services report the deepest automation use."
            chart={<HeatmapMatrix columns={heatColumns} rows={heatRows} values={heatValues} />}
          />
        </Frame>

        <Frame label="9 · Section intro — full-bleed">
          <SectionIntroSlide
            reportTitle={REPORT_TITLE}
            pageNumber={9}
            linkText="Read the full methodology"
            paragraphs={[
              "early into its second decade of research on enterprise technology adoption, Meridian Analytics finds that organizations are past the point of asking whether to automate. The latest survey shows nearly eight in ten organizations using automation in at least one function, with the fastest movers now redesigning entire workflows around it rather than layering it onto existing processes.",
              "Individual impact is real and immediate: most employees report meaningful personal productivity gains. Enterprise-level financial impact is a different story, and has barely moved in twelve months — a gap this report explores in detail.",
            ]}
          />
        </Frame>

        <Frame label="10 · Closing / back matter">
          <ClosingSlide
            headline="About the research"
            reportTitle={REPORT_TITLE}
            pageNumber={10}
            body={[
              "The survey was fielded from January 6 to February 14, 2026, and drew responses from 1,842 participants across 63 countries, spanning company sizes, industries, and functional specialties.",
            ]}
            credits={[
              { name: "Dana Ferris", role: "leads the Automation Practice at Meridian Analytics" },
              { name: "Priya Anand", role: "is a senior researcher on the same team" },
            ]}
          />
        </Frame>

        <Frame label="11 · Back cover">
          <BackCoverSlide
            brandName={BRAND}
            date="March 2026"
            copyrightLine="Copyright © Meridian Analytics"
            publisherLine="Designed by Meridian Global Publishing"
            website="meridiananalytics.example"
          />
        </Frame>
      </div>
    </div>
  );
}
