import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { NOTES } from "@/lib/notes";

export const metadata = {
  title: "Notes — Evan Le",
  description:
    "Essays and build notes from Evan Le — on education, AI, agentic systems, and what gets learned shipping them.",
};

export default function NotesPage() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-4 md:pt-8">
        <SectionMarker num="02" label="NOTES · ESSAYS + BUILDS" accent="var(--color-red)" />
        <h1
          className="font-display mt-6 text-[52px] font-black leading-[0.9] md:text-[96px]"
          style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
        >
          Things I&apos;ve been
          <br />
          <span style={{ color: "var(--color-red)" }}>thinking through.</span>
        </h1>
        <p
          className="mt-8 max-w-[680px] text-[18px] leading-[1.55]"
          style={{ color: "var(--color-fg)" }}
        >
          Essays where I push on something hard enough that the answer isn&apos;t obvious,
          and build notes from inside the systems I&apos;m shipping. Both kinds get
          posted here when they&apos;re honest enough to stand behind.
        </p>
      </section>

      {/* POSTS */}
      <section className="mt-20 md:mt-28">
        <div className="neon-line mb-10" />
        <ul className="space-y-4">
          {NOTES.map((n, i) => (
            <li key={n.slug}>
              <Link
                href={`/notes/${n.slug}`}
                className="card group flex flex-col gap-5 p-6 transition-colors hover:border-[color:var(--color-fg)] md:p-8"
                style={{
                  borderColor: `color-mix(in srgb, ${n.accent} 25%, var(--color-border))`,
                }}
              >
                <div className="flex flex-wrap items-center gap-4">
                  <span
                    className="font-mono text-[10px] caps"
                    style={{ color: n.accent, letterSpacing: "0.3em" }}
                  >
                    [0{i + 1} // {n.tag.toUpperCase()}]
                  </span>
                  <span
                    className="font-mono text-[10px] caps"
                    style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}
                  >
                    {n.dateLabel} · {n.minutes} min read
                  </span>
                </div>

                <h2
                  className="font-display text-[28px] font-bold leading-[1.05] transition-colors group-hover:text-[color:var(--color-fg)] md:text-[40px]"
                  style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
                >
                  {n.title}
                </h2>

                <p
                  className="max-w-[780px] text-[16px] leading-[1.6] md:text-[17px]"
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
            </li>
          ))}
        </ul>

        {/* Coming-soon footer */}
        <div
          className="mt-8 rounded-sm border border-dashed p-6 md:p-8"
          style={{ borderColor: "var(--color-border)" }}
        >
          <span
            className="font-mono text-[10px] caps"
            style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
          >
            ● drafting next
          </span>
          <p
            className="mt-3 text-[15px] leading-[1.6]"
            style={{ color: "var(--color-fg)" }}
          >
            <strong>Build notes: shipping a 7-agent live trading system.</strong>{" "}
            Architecture, the eval pipeline, what failed, what the numbers
            look like a year in. Posting soon.
          </p>
        </div>
      </section>
    </>
  );
}
