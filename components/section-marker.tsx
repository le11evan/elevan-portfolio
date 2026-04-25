export default function SectionMarker({
  num,
  label,
  accent = "var(--color-gold)",
}: {
  num: string;
  label: string;
  accent?: string;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="pulse-dot inline-block size-1.5 rounded-full"
        style={{ background: accent, boxShadow: `0 0 8px ${accent}` }}
      />
      <span
        className="font-mono text-[10px] caps"
        style={{ color: accent, letterSpacing: "0.32em" }}
      >
        [{num} // {label}]
      </span>
    </div>
  );
}
