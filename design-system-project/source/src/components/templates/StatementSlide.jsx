import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";

/**
 * Full-bleed color-block page for a single load-bearing statement — the
 * one-sentence "so what" a reader should carry out of the section. `lead`
 * renders bold, `body` continues in regular weight as one flowing sentence.
 */
export function StatementSlide({ lead, body, byline, reportTitle, pageNumber, background = "azure" }) {
  return (
    <Page background={background}>
      <div className="flex h-full flex-col justify-start gap-cq-8 p-cq-12">
        <p className="max-w-[85%] text-ds-statement text-white">
          <span className="font-bold">{lead} </span>
          {body}
        </p>
        {byline && <p className="text-ds-footnote text-white/80">{byline}</p>}
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} tone="light" />
    </Page>
  );
}

export default StatementSlide;
