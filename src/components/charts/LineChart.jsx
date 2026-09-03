import { color as tokens } from "../../tokens";

const VB_W = 600;
const VB_H = 320;
const PAD_L = 34;
const PAD_R = 12;
const PAD_T = 26;
const PAD_B = 28;

/**
 * Single-series trend line: thin gray gridlines, one accent line with dot
 * markers, value labels floating above each point. Matches the "metric over
 * time" exhibit pattern — pair it with a stacked bar chart for a two-panel
 * exhibit.
 */
export function LineChart({ data, yMax = 100, yStep = 20, color = tokens.navy900, height = "16cqw" }) {
  const plotW = VB_W - PAD_L - PAD_R;
  const plotH = VB_H - PAD_T - PAD_B;
  const x = (i) => PAD_L + (i / (data.length - 1)) * plotW;
  const y = (v) => PAD_T + plotH - (v / yMax) * plotH;

  const ticks = [];
  for (let t = 0; t <= yMax; t += yStep) ticks.push(t);

  const points = data.map((d, i) => `${x(i)},${y(d.value)}`).join(" ");

  return (
    <svg viewBox={`0 0 ${VB_W} ${VB_H}`} preserveAspectRatio="none" className="w-full" style={{ height }}>
      {ticks.map((t) => (
        <g key={t}>
          <line
            x1={PAD_L}
            x2={VB_W - PAD_R}
            y1={y(t)}
            y2={y(t)}
            stroke={tokens.canvas300}
            strokeWidth="1"
          />
          <text x={PAD_L - 8} y={y(t) + 3} textAnchor="end" fontSize="11" fill={tokens.canvas500}>
            {t}
          </text>
        </g>
      ))}

      <polyline points={points} fill="none" stroke={color} strokeWidth="2.5" />

      {data.map((d, i) => (
        <g key={d.label}>
          <circle cx={x(i)} cy={y(d.value)} r="4" fill={color} />
          <text x={x(i)} y={y(d.value) - 12} textAnchor="middle" fontSize="12" fontWeight="600" fill={tokens.ink}>
            {d.value}
          </text>
          <text x={x(i)} y={VB_H - 6} textAnchor="middle" fontSize="11" fill={tokens.canvas500}>
            {d.label}
          </text>
        </g>
      ))}
    </svg>
  );
}

export default LineChart;
