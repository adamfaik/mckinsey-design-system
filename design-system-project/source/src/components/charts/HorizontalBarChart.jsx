import { color as tokens, contrastText } from "../../tokens";

/**
 * Ranked horizontal bars on a full-width track — for "who does this most"
 * comparisons. Set `separateTotal` to true on a row (e.g. a "Total") to
 * pull it away from the ranked list with extra space, matching how a
 * summary row reads apart from the ranking above it.
 */
export function HorizontalBarChart({ data, max, color = tokens.sky500, trackColor = tokens.canvas100, rowHeight = 2.6 }) {
  const scaleMax = max ?? Math.max(...data.map((d) => d.value));

  return (
    <div className="flex flex-col">
      {data.map((row, i) => {
        const pct = Math.max((row.value / scaleMax) * 100, 4);
        const prevSeparate = i > 0 && data[i - 1].separateTotal;
        return (
          <div
            key={row.label}
            className="grid items-center gap-cq-3"
            style={{
              gridTemplateColumns: "28% 1fr",
              marginTop: row.separateTotal || prevSeparate ? "1.6cqw" : "0.5cqw",
              paddingTop: row.separateTotal ? "1cqw" : 0,
              borderTop: row.separateTotal ? `1px solid ${tokens.canvas300}` : "none",
            }}
          >
            <div className="truncate text-right text-ds-footnote text-ink" style={{ fontWeight: row.separateTotal ? 700 : 400 }}>
              {row.label}
            </div>
            <div className="relative" style={{ height: `${rowHeight}cqw`, background: trackColor }}>
              <div
                className="flex h-full items-center justify-end pr-[0.6cqw]"
                style={{ width: `${pct}%`, background: row.color ?? color }}
              >
                <span className="text-ds-footnote font-semibold" style={{ color: contrastText(row.color ?? color) }}>
                  {row.value}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default HorizontalBarChart;
