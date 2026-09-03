import { contrastText, color as tokens } from "../../tokens";

function defaultScale(value, min, max) {
  const ramp = [tokens.canvas50, tokens.azure300, tokens.azure400, tokens.azure500, tokens.azure600, tokens.navy700, tokens.navy900];
  const t = max === min ? 0 : (value - min) / (max - min);
  const idx = Math.min(ramp.length - 1, Math.round(t * (ramp.length - 1)));
  return ramp[idx];
}

/**
 * Row/column matrix on a sequential single-hue scale — density and
 * cross-tab exhibits. Column headers rotate on the diagonal by default so a
 * wide category list still fits above a narrow column.
 */
export function HeatmapMatrix({ columns, rows, values, colorScale, diagonalHeaders = true, cellHeight = 2.6 }) {
  const flat = values.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const scale = colorScale ?? ((v) => defaultScale(v, min, max));

  return (
    <div className="w-full">
      <div className="grid" style={{ gridTemplateColumns: `12cqw repeat(${columns.length}, 1fr)` }}>
        <div />
        {columns.map((col) => (
          <div key={col} className="flex items-end justify-start pb-cq-2" style={{ height: "9cqw" }}>
            <span
              className="whitespace-nowrap text-ds-footnote text-ink"
              style={diagonalHeaders ? { transform: "rotate(-38deg)", transformOrigin: "left bottom" } : {}}
            >
              {col}
            </span>
          </div>
        ))}
      </div>

      {rows.map((rowLabel, ri) => (
        <div key={rowLabel} className="grid items-center" style={{ gridTemplateColumns: `12cqw repeat(${columns.length}, 1fr)` }}>
          <div className="truncate pr-cq-2 text-right text-ds-footnote text-ink">{rowLabel}</div>
          {values[ri].map((v, ci) => {
            const bg = scale(v);
            return (
              <div
                key={ci}
                className="flex items-center justify-center border border-white text-ds-footnote font-semibold"
                style={{ height: `${cellHeight}cqw`, background: bg, color: contrastText(bg) }}
              >
                {v}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export default HeatmapMatrix;
