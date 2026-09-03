const TONES = {
  dark: "text-canvas-500",
  light: "text-white/80",
};

export function PageFooter({ reportTitle, pageNumber, tone = "dark", align = "right" }) {
  const alignClass = align === "left" ? "left-cq-8" : "right-cq-8";
  return (
    <div
      className={`absolute bottom-cq-6 ${alignClass} flex items-baseline gap-cq-3 text-ds-footnote font-semibold ${TONES[tone]}`}
    >
      <span>{reportTitle}</span>
      {pageNumber != null && <span>{pageNumber}</span>}
    </div>
  );
}

export default PageFooter;
