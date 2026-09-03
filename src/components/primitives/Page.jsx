const BACKGROUNDS = {
  white: "bg-white text-ink",
  surface: "bg-canvas-50 text-ink",
  navy: "bg-navy-950 text-white",
  azure: "bg-azure-600 text-white",
  paleblue: "bg-paleblue-100 text-ink",
};

/**
 * Fixed-ratio page canvas every template is built on. All type sizes and
 * spacing inside a template are expressed in `cqw` (via the ds-* tokens),
 * so a Page dropped into any container — a 320px card or a 2000px monitor —
 * keeps the exact same proportions instead of just cropping or reflowing.
 */
export default function Page({
  ratio = "8.5 / 11",
  background = "white",
  className = "",
  children,
}) {
  return (
    <div
      className={`ds-page relative w-full overflow-hidden ${BACKGROUNDS[background]} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {children}
    </div>
  );
}
