import Page from "../primitives/Page";
import BrandMark from "../primitives/BrandMark";

/**
 * Minimal back cover: solid navy, publication credits bottom-left, brand
 * mark bottom-right. Deliberately empty everywhere else.
 */
export function BackCoverSlide({ brandName, date, copyrightLine, publisherLine, website }) {
  return (
    <Page background="navy">
      <div className="flex h-full flex-col justify-between p-cq-10">
        <div />
        <div className="flex items-end justify-between">
          <div className="space-y-[0.3cqw] text-ds-footnote text-white/70">
            {date && <p>{date}</p>}
            {copyrightLine && <p>{copyrightLine}</p>}
            {publisherLine && <p>{publisherLine}</p>}
            {website && <p className="pt-cq-2">{website}</p>}
          </div>
          <BrandMark name={brandName} tone="light" />
        </div>
      </div>
    </Page>
  );
}

export default BackCoverSlide;
