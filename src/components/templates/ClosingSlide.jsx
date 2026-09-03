import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";
import FlowFieldBackground from "../primitives/FlowFieldBackground";

/**
 * Back-matter page ("about the research", author bios): pale tint, plain
 * text column, with a circular crop of the accent graphic bleeding off the
 * trailing edge as a quiet visual bookend to the cover.
 */
export function ClosingSlide({ headline, body, credits, reportTitle, pageNumber }) {
  return (
    <Page background="paleblue">
      <div
        className="absolute -bottom-[12cqw] -right-[12cqw] h-[62cqw] w-[62cqw] overflow-hidden rounded-full"
        aria-hidden="true"
      >
        <FlowFieldBackground seed={2} />
      </div>

      <div className="relative flex h-full flex-col gap-cq-6 p-cq-12">
        <h2 className="max-w-[55%] text-ds-headline font-semibold text-ink">{headline}</h2>
        <div className="max-w-[50%] space-y-cq-4">
          {body.map((p, i) => (
            <p key={i} className="text-ds-body text-ink">
              {p}
            </p>
          ))}
          {credits && (
            <p className="text-ds-body text-ink">
              {credits.map((c, i) => (
                <span key={c.name}>
                  <span className="font-medium text-azure-600">{c.name}</span>
                  {" "}
                  {c.role}
                  {i < credits.length - 1 ? "; " : ""}
                </span>
              ))}
            </p>
          )}
        </div>
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} align="left" />
    </Page>
  );
}

export default ClosingSlide;
