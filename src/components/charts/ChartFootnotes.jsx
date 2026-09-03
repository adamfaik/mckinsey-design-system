export function ChartFootnotes({ notes = [], source }) {
  if (!notes.length && !source) return null;
  return (
    <div className="mt-cq-4 space-y-[0.3cqw] text-ds-footnote text-canvas-500">
      {notes.map((note, i) => (
        <p key={i}>{note}</p>
      ))}
      {source && <p>Source: {source}</p>}
    </div>
  );
}

export default ChartFootnotes;
