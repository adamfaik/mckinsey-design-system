import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";
import BrandMark from "../primitives/BrandMark";
import Eyebrow from "../primitives/Eyebrow";
import ChartFootnotes from "../charts/ChartFootnotes";

/**
 * Callout / deep-dive page on a tinted surface — three-column running text
 * (the first column carries the kicker + headline) over a supporting
 * exhibit, for detail that would otherwise crowd the main narrative flow.
 */
export function SidebarSlide({
  kicker = "Sidebar",
  headline,
  columns,
  exhibitNumber,
  exhibitTitle,
  chart,
  footnotes,
  source,
  brandName,
  reportTitle,
  pageNumber,
}) {
  return (
    <Page background="surface">
      <div className="flex h-full flex-col gap-cq-8 p-cq-12">
        <div className="grid grid-cols-3 gap-cq-8">
          <div className="space-y-cq-3">
            <Eyebrow>{kicker}</Eyebrow>
            <h2 className="text-ds-headline font-semibold text-ink">{headline}</h2>
          </div>
          {columns.map((text, i) => (
            <p key={i} className="text-ds-footnote text-ink">
              {text}
            </p>
          ))}
        </div>

        <div className="flex flex-col gap-cq-4">
          {exhibitNumber && <Eyebrow>Exhibit {exhibitNumber}</Eyebrow>}
          {exhibitTitle && <h3 className="max-w-[85%] text-ds-exhibit-title font-bold text-ink">{exhibitTitle}</h3>}
          {chart}
          <ChartFootnotes notes={footnotes} source={source} />
          <BrandMark name={brandName} />
        </div>
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} />
    </Page>
  );
}

export default SidebarSlide;
