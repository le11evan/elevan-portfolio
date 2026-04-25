"use client";

export default function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      className="font-display caps rounded-sm border px-5 py-2.5 text-[11px] transition-all hover:brightness-110"
      style={{
        borderColor: "var(--color-gold)",
        color: "var(--color-gold)",
        background: "color-mix(in srgb, var(--color-gold) 8%, transparent)",
        boxShadow: "0 0 18px color-mix(in srgb, var(--color-gold) 20%, transparent)",
      }}
    >
      ↓ print / save PDF
    </button>
  );
}
