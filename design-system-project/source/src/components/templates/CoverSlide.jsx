import Page from "../primitives/Page";
import BrandMark from "../primitives/BrandMark";
import FlowFieldBackground from "../primitives/FlowFieldBackground";

/**
 * Report cover: deep navy field, generative accent graphic anchored bottom
 * right, serif display title over a plain-sans deck line.
 */
export function CoverSlide({ brandName, eyebrow, title, subtitle, date }) {
  return (
    <Page background="navy">
      <FlowFieldBackground seed={0} className="opacity-90" />
      <div className="relative flex h-full flex-col justify-between p-cq-8">
        <BrandMark name={brandName} tone="light" />

        <div className="max-w-[78%] space-y-cq-4">
          {eyebrow && <p className="text-ds-body font-medium text-white/70">{eyebrow}</p>}
          <h1 className="whitespace-pre-line font-display text-ds-display font-semibold text-white">{title}</h1>
          {subtitle && <p className="text-ds-body-lg text-white/85">{subtitle}</p>}
          {date && <p className="pt-cq-2 text-ds-footnote text-white/60">{date}</p>}
        </div>

        <div />
      </div>
    </Page>
  );
}

export default CoverSlide;
