const TONES = {
  dark: "text-canvas-500",
  light: "text-white/70",
};

/** Small caps-weight label used above exhibit titles and sidebar kickers. */
export function Eyebrow({ children, tone = "dark", className = "" }) {
  return (
    <div className={`text-ds-label font-semibold uppercase tracking-[0.08em] ${TONES[tone]} ${className}`}>
      {children}
    </div>
  );
}

export default Eyebrow;
