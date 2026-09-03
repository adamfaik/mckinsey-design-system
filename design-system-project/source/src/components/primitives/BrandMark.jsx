/**
 * Placeholder wordmark + abstract logomark. Swap `name` and the SVG glyph
 * for your own brand — this exists so templates have a real element to
 * position rather than an empty corner, without borrowing anyone else's
 * identity.
 */
export function BrandMark({ name = "Meridian & Co.", tone = "dark" }) {
  const textColor = tone === "light" ? "text-white" : "text-ink";
  const glyphColor = tone === "light" ? "#FFFFFF" : "#061F79";
  return (
    <div className="flex items-center gap-cq-2">
      <svg viewBox="0 0 24 24" className="h-[2.2cqw] w-[2.2cqw]" aria-hidden="true">
        <path
          d="M3 17 L9 9 L14 13 L21 4"
          fill="none"
          stroke={glyphColor}
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="21" cy="4" r="2" fill={glyphColor} />
      </svg>
      <span className={`text-ds-label font-semibold tracking-wide ${textColor}`}>{name}</span>
    </div>
  );
}

export default BrandMark;
