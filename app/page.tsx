import Link from "next/link";
import IdentitySwitcher from "@/components/identity-switcher";
import SectionMarker from "@/components/section-marker";
import ProjectCard from "@/components/project-card";
import { PROJECTS } from "@/lib/data";
import { NOTES } from "@/lib/notes";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-8 md:pt-16">
        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <SectionMarker num="00" label="AI / AGENT ENGINEER" accent="var(--color-blue)" />
          <span
            className="font-mono text-[10px] caps"
            style={{ color: "var(--color-green)", letterSpacing: "0.28em" }}
          >
            ● open to AI eng · forward-deployed · agent roles
          </span>
        </div>
        <div className="mt-6">
          <IdentitySwitcher />
        </div>
      </section>

      {/* FEATURED WORK */}
      <section className="mt-28 md:mt-40">
        <div className="neon-line mb-10" />
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionMarker num="01" label="FEATURED WORK" accent="var(--color-gold)" />
            <h2
              className="font-display mt-5 text-[40px] font-bold leading-[0.95] md:text-[64px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Two things I{" "}
              <span style={{ color: "var(--color-blue)" }}>actually</span> ship.
            </h2>
          </div>
          <Link
            href="/work"
            className="font-mono hidden shrink-0 text-[10px] caps link-underline md:block"
            style={{ color: "var(--color-fg)" }}
          >
            → all projects
          </Link>
        </div>

        <div className="mt-10 space-y-5">
          {/* Flagship — full width */}
          <ProjectCard project={PROJECTS[0]} />

          {/* Secondary — slim card */}
          <Link
            href="/work"
            className="card flex flex-col gap-4 p-5 transition-colors hover:border-[color:var(--color-fg)] sm:flex-row sm:items-center sm:justify-between sm:p-6"
          >
            <div>
              <span
                className="font-mono text-[10px] caps"
                style={{ color: "var(--color-muted)", letterSpacing: "0.28em" }}
              >
                ● also building
              </span>
              <h3
                className="font-display mt-2 text-[22px] font-bold leading-[1.05] md:text-[26px]"
                style={{ color: "var(--color-fg)", letterSpacing: "-0.02em" }}
              >
                {PROJECTS[1].title}
              </h3>
              <p
                className="font-mono mt-1 text-[11px] caps"
                style={{ color: PROJECTS[1].accent }}
              >
                {PROJECTS[1].subtitle}
              </p>
            </div>
            <span
              className="font-mono shrink-0 text-[10px] caps link-underline"
              style={{ color: "var(--color-fg)" }}
            >
              → case study
            </span>
          </Link>
        </div>

        <Link
          href="/work"
          className="font-mono mt-8 inline-block text-[10px] caps link-underline md:hidden"
          style={{ color: "var(--color-fg)" }}
        >
          → all projects
        </Link>
      </section>

      {/* NOTES */}
      <section className="mt-28 md:mt-40">
        <div className="neon-line mb-10" />
        <div className="flex items-end justify-between gap-6">
          <div>
            <SectionMarker num="02" label="NOTES" accent="var(--color-red)" />
            <h2
              className="font-display mt-5 text-[40px] font-bold leading-[0.95] md:text-[64px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Things I&apos;ve been{" "}
              <span style={{ color: "var(--color-red)" }}>thinking through.</span>
            </h2>
          </div>
          <Link
            href="/notes"
            className="font-mono hidden shrink-0 text-[10px] caps link-underline md:block"
            style={{ color: "var(--color-fg)" }}
          >
            → all notes
          </Link>
        </div>

        <div className="mt-10 space-y-4">
          {NOTES.slice(0, 1).map((n) => (
            <Link
              key={n.slug}
              href={`/notes/${n.slug}`}
              className="card group flex flex-col gap-4 p-6 transition-colors hover:border-[color:var(--color-fg)] md:p-8"
              style={{
                borderColor: `color-mix(in srgb, ${n.accent} 25%, var(--color-border))`,
              }}
            >
              <div className="flex flex-wrap items-center gap-4">
                <span
                  className="font-mono text-[10px] caps"
                  style={{ color: n.accent, letterSpacing: "0.3em" }}
                >
                  ● latest · {n.tag}
                </span>
                <span
                  className="font-mono text-[10px] caps"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}
                >
                  {n.dateLabel} · {n.minutes} min read
                </span>
              </div>
              <h3
                className="font-display text-[26px] font-bold leading-[1.1] md:text-[34px]"
                style={{ color: "var(--color-fg)", letterSpacing: "-0.025em" }}
              >
                {n.title}
              </h3>
              <p
                className="max-w-[720px] text-[15px] leading-[1.6] md:text-[16px]"
                style={{ color: "var(--color-muted)" }}
              >
                {n.dek}
              </p>
              <span
                className="font-mono text-[10px] caps link-underline"
                style={{ color: "var(--color-fg)", letterSpacing: "0.22em" }}
              >
                → read
              </span>
            </Link>
          ))}
        </div>

        <Link
          href="/notes"
          className="font-mono mt-8 inline-block text-[10px] caps link-underline md:hidden"
          style={{ color: "var(--color-fg)" }}
        >
          → all notes
        </Link>
      </section>

      {/* SOUNDS */}
      <section className="mt-28 md:mt-40">
        <div className="neon-line mb-10" />
        <SectionMarker num="03" label="SOUNDS" accent="var(--color-red)" />
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr] md:items-center">
          <div>
            <h2
              className="font-display text-[36px] font-bold leading-[1.05] md:text-[56px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Lo-fi beats
              <br />
              <span style={{ color: "var(--color-red)" }}>on the side.</span>
            </h2>
            <p
              className="mt-6 max-w-[560px] text-[17px] leading-[1.55]"
              style={{ color: "var(--color-fg)" }}
            >
              I produce lo-fi hip-hop under the name <strong>elevan</strong>.
              Headphones on, chord progressions until 2am. It's where the
              engineering stops talking.
            </p>
            <Link
              href="https://open.spotify.com/artist/2kXJq5T1MBsdzdA98SYWay"
              target="_blank"
              rel="noreferrer"
              className="font-mono mt-8 inline-block text-[11px] caps link-underline"
              style={{ color: "var(--color-fg)" }}
            >
              → spotify · @elevan
            </Link>
          </div>
          <div
            className="card overflow-hidden p-0"
            style={{
              borderColor:
                "color-mix(in srgb, var(--color-red) 30%, var(--color-border))",
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--color-red) 8%, var(--color-panel)), var(--color-panel))",
            }}
          >
            <iframe
              src="https://open.spotify.com/embed/artist/2kXJq5T1MBsdzdA98SYWay?utm_source=generator&theme=0"
              width="100%"
              height="232"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              title="Evan's Spotify artist page"
            />
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="mt-28 md:mt-40">
        <div className="neon-line mb-10" />
        <SectionMarker num="04" label="THE HUMAN" accent="var(--color-green)" />
        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[2fr_1fr]">
          <div>
            <h2
              className="font-display text-[36px] font-bold leading-[1.05] md:text-[56px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              CS grad teaching kids to code by day, training{" "}
              <span style={{ color: "var(--color-gold)" }}>LLM agents to trade</span>{" "}
              by night.
            </h2>
            <p
              className="mt-6 max-w-[640px] text-[18px] leading-[1.55]"
              style={{ color: "var(--color-fg)" }}
            >
              I graduated from CSUF in 2023 and went straight into a classroom.
              I teach robotics, coding, and engineering to elementary kids across
              about twenty Orange County sites a year — during school and after-school,
              every district. The rest of the time I'm building agent systems that
              ship real code.
            </p>
            <p
              className="mt-4 max-w-[640px] text-[16px] leading-[1.55]"
              style={{ color: "var(--color-muted)" }}
            >
              Teaching is what made me a better engineer. Explaining algorithms to
              eight-year-olds forces simplicity — it's the discipline the rest of
              my work runs on.
            </p>
            <Link
              href="/about"
              className="font-mono mt-8 inline-block text-[11px] caps link-underline"
              style={{ color: "var(--color-fg)" }}
            >
              → full story
            </Link>
          </div>

          <aside
            className="card flex flex-col gap-5 p-6"
            style={{
              background:
                "linear-gradient(180deg, color-mix(in srgb, var(--color-green) 6%, var(--color-panel)), var(--color-panel))",
              borderColor: "color-mix(in srgb, var(--color-green) 25%, var(--color-border))",
            }}
          >
            <div>
              <div
                className="font-mono text-[9px] caps"
                style={{ color: "var(--color-green)", letterSpacing: "0.3em" }}
              >
                ● currently
              </div>
              <ul
                className="mt-3 space-y-2 text-[13px]"
                style={{ color: "var(--color-fg)" }}
              >
                <li>→ AI Data Analyst @ Handshake AI (Project Spectra)</li>
                <li>→ Lead Instructor @ Brainstorm STEM</li>
                <li>→ Solo-building elevan.vzn</li>
                <li>→ Pre-launching Hurrikane 🌀</li>
              </ul>
            </div>
            <div
              className="mt-2 border-t pt-4"
              style={{ borderColor: "var(--color-border)" }}
            >
              <div
                className="font-mono text-[9px] caps"
                style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
              >
                stack I reach for
              </div>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {["TypeScript", "Next.js", "Python", "Postgres", "Claude API", "MCP", "Tailwind"].map((s) => (
                  <span
                    key={s}
                    className="font-mono rounded-sm border px-2 py-1 text-[9px] caps"
                    style={{
                      borderColor: "var(--color-border)",
                      color: "var(--color-muted)",
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* CTA */}
      <section className="mt-28 md:mt-40">
        <div className="neon-line mb-10" />
        <SectionMarker num="05" label="SIGNAL ME" accent="var(--color-blue)" />
        <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-display text-[36px] font-bold leading-[1] md:text-[64px]"
            style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
          >
            Hiring, collaborating,
            <br />
            <span style={{ color: "var(--color-blue)" }}>or just curious?</span>
          </h2>
          <Link
            href="/contact"
            className="font-display caps rounded-sm border px-6 py-3 text-[12px] transition-all"
            style={{
              borderColor: "var(--color-blue)",
              color: "var(--color-blue)",
              background: "color-mix(in srgb, var(--color-blue) 8%, transparent)",
              boxShadow: "0 0 24px color-mix(in srgb, var(--color-blue) 20%, transparent)",
            }}
          >
            → get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
