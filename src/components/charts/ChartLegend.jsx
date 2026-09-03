export function ChartLegend({ items }) {
  return (
    <div className="flex flex-wrap items-center gap-x-cq-6 gap-y-cq-2">
      {items.map((item) => (
        <div key={item.label} className="flex items-center gap-cq-2">
          <span
            className="inline-block h-[1.1cqw] w-[1.1cqw] shrink-0"
            style={{ backgroundColor: item.color }}
          />
          <span className="text-ds-footnote text-ink">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default ChartLegend;
