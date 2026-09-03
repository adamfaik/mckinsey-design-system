import { contrastText } from "../../tokens";

/**
 * Ranked rows of horizontal stacked segments (e.g. phase-of-adoption by
 * category). Pair with <ChartLegend> above and, when two of these sit
 * side by side comparing a split (company size, region), a shared
 * left-hand label column reads as one grouped exhibit.
 */
export function HorizontalStackedBarChart({ data, labelWidth = "34%", rowGap = "1.1cqw", rowHeight = 2.4 }) {
  return (
    <div className="flex flex-col" style={{ gap: rowGap }}>
      {data.map((row) => (
        <div key={row.label} className="grid items-center gap-cq-3" style={{ gridTemplateColumns: `${labelWidth} 1fr` }}>
          <div className="truncate text-right text-ds-footnote text-ink">{row.label}</div>
          <div className="flex overflow-hidden" style={{ height: `${rowHeight}cqw` }}>
            {row.segments.map((seg, i) => (
              <div
                key={i}
                className="flex h-full items-center justify-center"
                style={{ width: `${seg.value}%`, background: seg.color }}
              >
                {seg.value >= 6 && (
                  <span className="text-ds-footnote font-semibold" style={{ color: contrastText(seg.color) }}>
                    {seg.value}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HorizontalStackedBarChart;
