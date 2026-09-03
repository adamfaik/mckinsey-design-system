import Page from "../primitives/Page";
import PageFooter from "../primitives/PageFooter";

/**
 * "Key takeaways" page: a section headline over an indented, generously
 * spaced list where each item leads with a bold claim and closes in
 * regular weight — a scan-then-read pattern.
 */
export function BulletListSlide({ headline, items, reportTitle, pageNumber }) {
  return (
    <Page background="white">
      <div className="flex h-full flex-col gap-cq-10 p-cq-12">
        <h2 className="text-ds-headline font-semibold text-ink">{headline}</h2>
        <ul className="max-w-[76%] space-y-cq-6 pl-cq-4">
          {items.map((item, i) => (
            <li key={i} className="flex gap-cq-3 text-ds-body text-ink">
              <span className="text-canvas-500">—</span>
              <p>
                <span className="font-semibold">{item.lead} </span>
                {item.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <PageFooter reportTitle={reportTitle} pageNumber={pageNumber} />
    </Page>
  );
}

export default BulletListSlide;
