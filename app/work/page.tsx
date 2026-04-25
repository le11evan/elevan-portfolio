import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { PROJECTS } from "@/lib/data";

export const metadata = {
  title: "Work — Evan Le",
  description: "Projects Evan Le has shipped — case studies with context, decisions, and what was learned.",
};

export default function WorkPage() {
  return (
    <>
      <section className="pt-4 md:pt-8">
        <SectionMarker num="01" label="WORK · ALL PROJECTS" accent="var(--color-gold)" />
        <h1
          className="font-display mt-6 text-[52px] font-black leading-[0.9] md:text-[96px]"
          style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
        >
          The <span style={{ color: "var(--color-gold)" }}>shipped</span> list.
        </h1>
        <p
          className="mt-6 max-w-[640px] text-[17px] leading-[1.55]"
          style={{ color: "var(--color-muted)" }}
        >
          Two projects I actively maintain. Case studies, not screenshots — context,
          the decisions that shaped them, and what I actually learned.
        </p>
      </section>

      {PROJECTS.map((p, i) => (
        <section key={p.slug} className="mt-24 md:mt-36">
          <div className="neon-line mb-10" />
          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
            {/* Left rail */}
            <aside className="md:sticky md:top-12 md:self-start">
              <span
                className="font-mono text-[10px] caps"
                style={{ color: p.accent, letterSpacing: "0.3em" }}
              >
                [0{i + 1} // {p.slug.toUpperCase()}]
              </span>
              <h2
                className="font-display mt-4 text-[44px] font-bold leading-[0.95] md:text-[60px]"
                style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
              >
                {p.title}
              </h2>
              <p
                className="font-mono mt-2 text-[11px] caps"
                style={{ color: p.accent }}
              >
                {p.subtitle}
              </p>

              <dl className="mt-8 grid grid-cols-2 gap-y-4">
                {p.stats.map((s) => (
                  <div key={s.label}>
                    <dt
                      className="font-mono text-[9px] caps"
                      style={{ color: "var(--color-muted)" }}
                    >
                      {s.label}
                    </dt>
                    <dd
                      className="font-display mt-1 text-[24px] font-bold"
                      style={{ color: p.accent }}
                    >
                      {s.value}
                    </dd>
                  </div>
                ))}
              </dl>

              <div className="mt-8 flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="font-mono rounded-sm border px-2 py-1 text-[9px] caps"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col gap-2">
                {p.links.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    target={l.href.startsWith("http") ? "_blank" : undefined}
                    rel={l.href.startsWith("http") ? "noreferrer" : undefined}
                    className="font-mono text-[11px] caps link-underline"
                    style={{ color: "var(--color-fg)" }}
                  >
                    → {l.label}
                  </Link>
                ))}
              </div>
            </aside>

            {/* Right content */}
            <div>
              <p
                className="text-[20px] leading-[1.5] md:text-[24px]"
                style={{ color: "var(--color-fg)" }}
              >
                {p.blurb}
              </p>

              <div className="mt-10">
                <h3
                  className="font-mono text-[10px] caps"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
                >
                  ● context
                </h3>
                <p
                  className="mt-4 text-[16px] leading-[1.65]"
                  style={{ color: "var(--color-fg)" }}
                >
                  {p.context}
                </p>
              </div>

              <div className="mt-10">
                <h3
                  className="font-mono text-[10px] caps"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
                >
                  ● key decisions
                </h3>
                <ul className="mt-4 space-y-4">
                  {p.decisions.map((d, di) => (
                    <li key={di} className="flex gap-4">
                      <span
                        className="font-mono shrink-0 text-[11px] pt-1"
                        style={{ color: p.accent }}
                      >
                        0{di + 1}
                      </span>
                      <p
                        className="text-[15px] leading-[1.6]"
                        style={{ color: "var(--color-fg)" }}
                      >
                        {d}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10">
                <h3
                  className="font-mono text-[10px] caps"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
                >
                  ● what I learned
                </h3>
                <ul className="mt-4 space-y-3">
                  {p.learned.map((l, li) => (
                    <li
                      key={li}
                      className="border-l-2 pl-4 text-[15px] italic leading-[1.6]"
                      style={{
                        borderColor: p.accent,
                        color: "var(--color-fg)",
                      }}
                    >
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  );
}
