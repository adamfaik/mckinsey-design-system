/**
 * Meridian Report System — Tailwind theme
 *
 * Token values below were reverse-engineered by pixel-sampling and visual
 * analysis of a professional analytical-report PDF (cool navy/blue/cyan
 * palette, serif+sans type pairing, single-hue data viz). Nothing here
 * reproduces any company's logo, wordmark, or literal proprietary typeface —
 * see README.md for the extraction notes and substitutions made.
 */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#231F20",
          soft: "#4A4A4A",
        },
        navy: {
          950: "#001B2C",
          900: "#061F79",
          700: "#1C44DC",
        },
        azure: {
          600: "#2251FF",
          500: "#2972FF",
          400: "#5E9DFF",
          300: "#99C4FF",
        },
        sky: {
          500: "#00A9F4",
          300: "#6ECBF7",
          200: "#99E6FF",
        },
        steel: {
          400: "#6A79AF",
          300: "#9BA5C9",
        },
        canvas: {
          50: "#F4F4F4",
          100: "#DFDFDF",
          300: "#CCCCCC",
          400: "#9D9D9D",
          500: "#757575",
        },
        paleblue: {
          100: "#CBD9E6",
        },
      },
      fontFamily: {
        display: ["'Source Serif 4'", "Georgia", "'Times New Roman'", "serif"],
        sans: ["'Public Sans'", "-apple-system", "'Segoe UI'", "sans-serif"],
      },
      fontSize: {
        "ds-footnote": ["1cqw", { lineHeight: "1.5" }],
        "ds-label": ["1.05cqw", { lineHeight: "1.4", letterSpacing: "0.06em" }],
        "ds-body": ["1.5cqw", { lineHeight: "1.6" }],
        "ds-body-lg": ["1.75cqw", { lineHeight: "1.55" }],
        "ds-exhibit-title": ["1.95cqw", { lineHeight: "1.35" }],
        "ds-headline": ["3.1cqw", { lineHeight: "1.2" }],
        "ds-statement": ["4.2cqw", { lineHeight: "1.15" }],
        "ds-display": ["6.5cqw", { lineHeight: "1.02" }],
      },
      spacing: {
        "cq-1": "0.5cqw",
        "cq-2": "1cqw",
        "cq-3": "1.5cqw",
        "cq-4": "2cqw",
        "cq-6": "3cqw",
        "cq-8": "4cqw",
        "cq-10": "5cqw",
        "cq-12": "6cqw",
        "cq-16": "8cqw",
        "cq-20": "10cqw",
      },
    },
  },
  plugins: [],
};
