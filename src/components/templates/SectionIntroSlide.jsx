import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";
import FlowFieldBackground from "../primitives/FlowFieldBackground";

/**
 * Section-opening executive summary: full-bleed accent art with a frosted
 * text panel laid over it so a long-form intro stays legible regardless of
 * what's behind it. First paragraph gets a dropped first letter.
 */
export function SectionIntroSlide({ paragraphs, linkText, reportTitle, pageNumber }) {
  const [first, ...rest] = paragraphs;
  const dropCap = first.charAt(0);
  const remainder = first.slice(1);

  return (
    <Page background="navy">
      <FlowFieldBackground seed={1} className="opacity-70" />
      <div className="relative flex h-full items-center p-cq-10">
        <div
          className="max-w-[68%] space-y-cq-4 p-cq-8 text-ink shadow-[0_0_6cqw_rgba(0,0,0,0.15)]"
          style={{ backgroundColor: "rgba(255,255,255,0.96)" }}
        >
          <p className="text-ds-body-lg">
            <span
              className="float-left mr-[0.6cqw] font-display text-[9cqw] font-semibold leading-[0.8] text-ink"
              aria-hidden="true"
            >
              {dropCap}
            </span>
            {remainder}
          </p>
          {rest.map((p, i) => (
            <p key={i} className="text-ds-body text-ink">
              {p}
            </p>
          ))}
          {linkText && <p className="text-ds-body font-medium text-azure-600">{linkText}</p>}
        </div>
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} tone="light" />
    </Page>
  );
}

export default SectionIntroSlide;
