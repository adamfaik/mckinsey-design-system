/**
 * Raw hex values for contexts Tailwind classes can't reach — SVG fill/stroke
 * attributes, canvas, inline gradients. Keep in sync with tailwind.config.js.
 */
export const color = {
  ink: "#231F20",
  inkSoft: "#4A4A4A",
  navy950: "#001B2C",
  navy900: "#061F79",
  navy700: "#1C44DC",
  azure600: "#2251FF",
  azure500: "#2972FF",
  azure400: "#5E9DFF",
  azure300: "#99C4FF",
  sky500: "#00A9F4",
  sky300: "#6ECBF7",
  sky200: "#99E6FF",
  steel400: "#6A79AF",
  steel300: "#9BA5C9",
  canvas50: "#F4F4F4",
  canvas100: "#DFDFDF",
  canvas300: "#CCCCCC",
  canvas400: "#9D9D9D",
  canvas500: "#757575",
  paleblue100: "#CBD9E6",
  white: "#FFFFFF",
};

/** Categorical series, in the order the source report used them. */
export const categorical = [
  color.navy900,
  color.azure600,
  color.sky500,
  color.canvas500,
  color.canvas300,
];

/** Three-step sequential ramp for a single measure split into bands. */
export const sequentialSky = [color.sky500, color.sky300, color.sky200];

/** Seven-step ramp for density/heatmap matrices, darkest = highest value. */
export const sequentialAzure = [
  color.navy900,
  color.navy700,
  color.azure600,
  color.azure500,
  color.azure400,
  color.azure300,
  color.canvas50,
];

/** Muted duo used for simple two-series comparisons (e.g. stacked totals). */
export const duoMuted = [color.navy900, color.steel400, color.steel300];

export function contrastText(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16);
  const g = parseInt(h.substring(2, 4), 16);
  const b = parseInt(h.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.6 ? color.ink : color.white;
}
