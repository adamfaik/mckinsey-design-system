import { contrastText } from "../../tokens";

const VB_W = 600;
const VB_H = 320;
const PAD_L = 12;
const PAD_R = 12;
const PAD_T = 40;
const PAD_B = 30;

/**
 * Vertical stacked bars (segments ordered bottom-to-top per category).
 * Optional `callout` draws the leader-line + note connecting the same
 * segment boundary across two categories — the "+6 percentage points"
 * pattern for a before/after comparison.
 */
export function StackedBarChart({ data, yMax, height = "16cqw", barWidthRatio = 0.55, callout }) {
  const max = yMax ?? Math.max(...data.map((d) => d.segments.reduce((s, seg) => s + seg.value, 0)));
  const plotW = VB_W - PAD_L - PAD_R;
  const plotH = VB_H - PAD_T - PAD_B;
  const slot = plotW / data.length;
  const barW = slot * barWidthRatio;
  const yFor = (v) => PAD_T + plotH - (v / max) * plotH;
  const barX = (i) => PAD_L + slot * i + (slot - barW) / 2;

  const boundaryTop = (categoryIndex, throughSegmentIndex) => {
    const segs = data[categoryIndex].segments;
    const cumulative = segs.slice(0, throughSegmentIndex + 1).reduce((s, seg) => s + seg.value, 0);
    return yFor(cumulative);
  };

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none" className="w-full" style={{ height }}>
      {data.map((cat, i) => {
        let cumulative = 0;
        return (
          <g key={cat.label}>
            {cat.segments.map((seg, si) => {
              const y0 = yFor(cumulative);
              cumulative += seg.value;
              const y1 = yFor(cumulative);
              const h = y0 - y1;
              return (
                <g key={si}>
                  <rect x={barX(i)} y={y1} width={barW} height={h} fill={seg.color} />
                  {h > 18 && (
                    <text
                      x={barX(i) + barW / 2}
                      y={y1 + h / 2 + 4}
                      textAnchor="middle"
                      fontSize="13"
                      fontWeight="600"
                      fill={contrastText(seg.color)}
                    >
                      {seg.value}
                    </text>
                  )}
                </g>
              );
            })}
            <text
              x={barX(i) + barW / 2}
              y={VB_H - 8}
              textAnchor="middle"
              fontSize="12"
              fontWeight="600"
              fill="#231F20"
            >
              {cat.label}
            </text>
          </g>
        );
      })}

      {callout && (
        <g>
          <line
            x1={barX(callout.fromIndex) + barW}
            y1={boundaryTop(callout.fromIndex, callout.segmentIndex)}
            x2={barX(callout.toIndex)}
            y2={boundaryTop(callout.toIndex, callout.segmentIndex)}
            stroke="#231F20"
            strokeWidth="1"
          />
          <text
            x={(barX(callout.fromIndex) + barW + barX(callout.toIndex)) / 2}
            y={
              (boundaryTop(callout.fromIndex, callout.segmentIndex) +
                boundaryTop(callout.toIndex, callout.segmentIndex)) /
                2 -
              10
            }
            textAnchor="middle"
            fontSize="13"
            fontWeight="700"
            fill="#231F20"
          >
            {callout.text}
          </text>
        </g>
      )}
    </svg>
  );
}

export default StackedBarChart;
