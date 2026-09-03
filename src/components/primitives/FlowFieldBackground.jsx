/**
 * Original generative accent graphic — soft glowing curves on deep navy,
 * standing in for the licensed photography a real deck would use on its
 * cover / section-break pages. Pure SVG, no external assets.
 */
export function FlowFieldBackground({ className = "", seed = 0 }) {
  const shift = seed * 40;
  return (
    <svg
      viewBox="0 0 1000 1000"
      preserveAspectRatio="xMidYMid slice"
      className={`absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`flow-a-${seed}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#99C4FF" />
          <stop offset="45%" stopColor="#2251FF" />
          <stop offset="75%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#00A9F4" />
        </linearGradient>
        <linearGradient id={`flow-b-${seed}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#00A9F4" />
          <stop offset="50%" stopColor="#5E9DFF" />
          <stop offset="100%" stopColor="#C084FC" />
        </linearGradient>
        <filter id={`glow-${seed}`} x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <rect width="1000" height="1000" fill="#001B2C" />
      <g filter={`url(#glow-${seed})`} opacity="0.9">
        {[0, 1, 2, 3, 4, 5].map((i) => {
          const y = 620 + i * 55 + shift * 0.2;
          const bow = 260 + i * 18;
          return (
            <path
              key={i}
              d={`M -100 ${y + bow} C 250 ${y - bow}, 650 ${y + bow * 0.6}, 1100 ${y - bow * 0.8}`}
              fill="none"
              stroke={i % 2 === 0 ? `url(#flow-a-${seed})` : `url(#flow-b-${seed})`}
              strokeWidth={i === 2 ? 5 : 2.5}
              strokeLinecap="round"
              opacity={0.55 + i * 0.06}
            />
          );
        })}
      </g>
    </svg>
  );
}

export default FlowFieldBackground;
