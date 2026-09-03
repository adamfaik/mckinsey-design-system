import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";
import BrandMark from "../primitives/BrandMark";
import Eyebrow from "../primitives/Eyebrow";
import ChartLegend from "../charts/ChartLegend";
import ChartFootnotes from "../charts/ChartFootnotes";

/**
 * The workhorse page: a headline + short narrative sit in a narrower,
 * indented column, while the exhibit below spans the full content width —
 * the two-column-width pattern that lets a chart carry more detail than
 * the running text next to it. `panels` renders a multi-chart exhibit
 * (e.g. two comparison cuts side by side); `chart` renders a single one.
 */
export function ExhibitSlide({
  headline,
  intro,
  exhibitNumber,
  exhibitTitle,
  metricLabel,
  metricUnit,
  legend,
  panels,
  chart,
  footnotes,
  source,
  brandName,
  reportTitle,
  pageNumber,
}) {
  return (
    <Page background="white">
      <div className="flex h-full flex-col gap-cq-6 p-cq-12">
        <div className="max-w-[70%] space-y-cq-4">
          {headline && <h2 className="text-ds-headline font-semibold text-ink">{headline}</h2>}
          {intro && <p className="text-ds-body text-ink">{intro}</p>}
        </div>

        <div className="flex flex-col gap-cq-4">
          {exhibitNumber && <Eyebrow>Exhibit {exhibitNumber}</Eyebrow>}
          {exhibitTitle && <h3 className="max-w-[85%] text-ds-exhibit-title font-bold text-ink">{exhibitTitle}</h3>}
          {(metricLabel || metricUnit) && (
            <p className="text-ds-body text-ink">
              {metricLabel && <span className="font-semibold">{metricLabel} </span>}
              {metricUnit}
            </p>
          )}
          {legend && <ChartLegend items={legend} />}

          {panels ? (
            <div className="grid gap-cq-8" style={{ gridTemplateColumns: `repeat(${panels.length}, 1fr)` }}>
              {panels.map((panel, i) => (
                <div key={i} className="space-y-cq-3">
                  {panel.title && <p className="text-ds-body font-semibold text-ink">{panel.title}</p>}
                  {panel.chart}
                </div>
              ))}
            </div>
          ) : (
            chart
          )}

          <ChartFootnotes notes={footnotes} source={source} />
          <BrandMark name={brandName} />
        </div>
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} />
    </Page>
  );
}

export default ExhibitSlide;
