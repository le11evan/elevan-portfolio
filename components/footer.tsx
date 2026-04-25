import Link from "next/link";
import { SOCIALS } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto mt-16 w-full max-w-[1280px] px-6 pb-24 md:px-12">
      <div className="neon-line mb-8" />
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-[14px]" style={{ color: "var(--color-fg)" }}>
            Evan Le
          </p>
          <p className="font-mono mt-1 text-[10px] caps" style={{ color: "var(--color-muted)" }}>
            Irvine, CA · Made 2026 · v1.0
          </p>
        </div>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          {SOCIALS.map((s) => (
            <li key={s.href}>
              <Link
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="font-mono caps text-[10px] text-[color:var(--color-muted)] transition-colors hover:text-[color:var(--color-gold)]"
              >
                → {s.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
