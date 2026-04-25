import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { SOCIALS } from "@/lib/data";

export const metadata = {
  title: "About — Evan Le",
  description:
    "The story behind the work — Evan Le on teaching, building agent systems, producing lo-fi, and starting Hurrikane.",
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO */}
      <section className="pt-4 md:pt-8">
        <SectionMarker num="02" label="ABOUT · THE LONG VERSION" accent="var(--color-red)" />
        <h1
          className="font-display mt-6 text-[52px] font-black leading-[0.9] md:text-[96px]"
          style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
        >
          One person,
          <br />
          <span style={{ color: "var(--color-red)" }}>four tabs open.</span>
        </h1>
        <p
          className="mt-8 max-w-[720px] text-[20px] leading-[1.55]"
          style={{ color: "var(--color-fg)" }}
        >
          I'm Evan — 26, based in Irvine, CA. I graduated cum laude from Cal State
          Fullerton with a B.S. in Computer Science in 2023 and picked a path
          that doesn't really exist on a career ladder: teach kids by day, build
          agent systems by night, make lo-fi beats in between, and start a
          sugarcane juice brand on the weekends.
        </p>
        <p
          className="mt-4 max-w-[720px] text-[16px] leading-[1.6]"
          style={{ color: "var(--color-muted)" }}
        >
          None of it feels random to me. Each part teaches something the others
          can't.
        </p>
      </section>

      {/* TEACHING */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionMarker num="A" label="TEACHING" accent="var(--color-gold)" />
            <h2
              className="font-display mt-5 text-[36px] font-bold leading-[1] md:text-[48px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              I chose this
              <br />
              on purpose.
            </h2>
          </div>
          <div className="space-y-5">
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              I went into teaching straight out of college because it's something
              I always wanted to pursue and try. The company I joined — Brainstorm
              STEM Education — runs in-school and after-school STEM programs across
              Orange County. It was the rare spot that combined my CS major with
              the classroom. I started part-time, grew into full-time, and then
              into other aspects of the company: production, warehouse, operations.
            </p>
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              Teaching has improved so many areas I was undeveloped in before.
              Public speaking. Classroom management. Reading a room of twenty
              eight-year-olds and figuring out which one is about to melt down.
              The engineering side of me pulls from that every day — most of my
              best simplifications started as "how would I explain this to a
              nine-year-old?"
            </p>
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              The other part I take real pride in: I teach at about twenty
              different sites a year — every district, every background, every
              class. Every week I get a wholesome moment — a kid lighting up
              when their robot finally moves, real appreciation when I bring a
              project that clicks. That part doesn't show up on a resume, but
              it's most of why I stayed.
            </p>

            <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
              {[
                { k: "since", v: "Sep 2023" },
                { k: "sites/yr", v: "~20" },
                { k: "districts", v: "all OC" },
                { k: "schedule", v: "in + after" },
              ].map((s) => (
                <div
                  key={s.k}
                  className="card p-4"
                  style={{
                    borderColor:
                      "color-mix(in srgb, var(--color-gold) 30%, var(--color-border))",
                  }}
                >
                  <div
                    className="font-display text-[22px] font-bold md:text-[26px]"
                    style={{ color: "var(--color-gold)" }}
                  >
                    {s.v}
                  </div>
                  <div
                    className="font-mono mt-1 text-[9px] caps"
                    style={{ color: "var(--color-muted)" }}
                  >
                    {s.k}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ENGINEERING */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionMarker num="B" label="ENGINEERING" accent="var(--color-blue)" />
            <h2
              className="font-display mt-5 text-[36px] font-bold leading-[1] md:text-[48px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Agents,
              <br />
              not assistants.
            </h2>
          </div>
          <div className="space-y-5">
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              My flagship project is{" "}
              <Link
                href="/work"
                className="link-underline"
                style={{ color: "var(--color-blue)" }}
              >
                elevan.vzn
              </Link>{" "}
              — a live options trading platform where a team of seven LLM
              specialists run the show. Scanner, trader, analyst, risk officer,
              post-mortem writer, pattern detector, the one that ties it
              together. Real money, real trades, every one of them published.
            </p>
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              I'm interested in the version of software where the agents do the
              compounding. Where learning doesn't mean retraining a model — it
              means tagging a loss, writing a post-mortem, and letting the next
              instance of the agent read it before it makes the next call. I've
              also shipped 100+ PRs reviewed by an external adversarial agent
              team (CALLDUCK). That workflow is the future of solo development.
            </p>
          </div>
        </div>
      </section>

      {/* MUSIC */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionMarker num="C" label="MUSIC" accent="var(--color-red)" />
            <h2
              className="font-display mt-5 text-[36px] font-bold leading-[1] md:text-[48px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Headphones on,
              <br />
              commits later.
            </h2>
          </div>
          <div className="space-y-6">
            <p
              className="text-[17px] leading-[1.65]"
              style={{ color: "var(--color-fg)" }}
            >
              I make lo-fi hip-hop. It's where the engineer in me stops talking
              and the pattern-matcher runs free. Chord progressions, dusty
              samples, drums that don't try too hard. If you want the late-night
              version of me, it's on Spotify.
            </p>

            <iframe
              src="https://open.spotify.com/embed/artist/2kXJq5T1MBsdzdA98SYWay?utm_source=generator&theme=0"
              width="100%"
              height="352"
              frameBorder={0}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                borderRadius: 6,
                border: "1px solid var(--color-border)",
              }}
              title="Evan's Spotify artist page"
            />
          </div>
        </div>
      </section>

      {/* HURRIKANE */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1fr_2fr]">
          <div>
            <SectionMarker num="D" label="HURRIKANE" accent="var(--color-green)" />
            <h2
              className="font-display mt-5 text-[36px] font-bold leading-[1] md:text-[48px]"
              style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
            >
              Sugarcane
              <br />
              on weekends.
            </h2>
          </div>
          <div className="space-y-5">
            <div
              className="card p-6 md:p-8"
              style={{
                background:
                  "linear-gradient(180deg, color-mix(in srgb, var(--color-green) 8%, var(--color-panel)), var(--color-panel))",
                borderColor: "color-mix(in srgb, var(--color-green) 30%, var(--color-border))",
              }}
            >
              <div
                className="font-display text-[44px] font-black md:text-[64px]"
                style={{ color: "var(--color-green)", letterSpacing: "-0.04em" }}
              >
                HURRIKANE
              </div>
              <div
                className="font-mono mt-2 text-[10px] caps"
                style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
              >
                raw-pressed · family-run · launching summer 2026
              </div>
              <p
                className="mt-6 text-[16px] leading-[1.6]"
                style={{ color: "var(--color-fg)" }}
              >
                Hurrikane is a sugarcane juice brand I'm starting with my dad,
                family, and friends. The plan is simple: set up at OC farmers
                markets on weekends, press the cane fresh on site, hand people
                something cold that actually tastes like where it came from. It
                hasn't launched yet. That's the honest status.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PERSONAL */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <SectionMarker num="E" label="OFF THE CLOCK" accent="var(--color-gold)" />
        <h2
          className="font-display mt-5 text-[36px] font-bold leading-[1] md:text-[48px]"
          style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
        >
          The rest of the <span style={{ color: "var(--color-bolt)" }}>person</span>.
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div className="card p-5">
            <div
              className="font-mono text-[10px] caps"
              style={{ color: "var(--color-bolt)", letterSpacing: "0.3em" }}
            >
              ● sports
            </div>
            <p className="mt-3 text-[15px]" style={{ color: "var(--color-fg)" }}>
              Chargers on Sundays. Clippers most nights they play. Fan through
              the hard years on both — try the Konami code, by the way.
            </p>
          </div>
          <div className="card p-5">
            <div
              className="font-mono text-[10px] caps"
              style={{ color: "var(--color-red)", letterSpacing: "0.3em" }}
            >
              ● training
            </div>
            <p className="mt-3 text-[15px]" style={{ color: "var(--color-fg)" }}>
              Lifting most days. Running when the weather's right. Both keep
              the rest of the schedule honest.
            </p>
          </div>
          <div className="card p-5">
            <div
              className="font-mono text-[10px] caps"
              style={{ color: "var(--color-green)", letterSpacing: "0.3em" }}
            >
              ● family + friends
            </div>
            <p className="mt-3 text-[15px]" style={{ color: "var(--color-fg)" }}>
              The rest of the calendar. The reason any of the rest of it
              matters.
            </p>
          </div>
        </div>
      </section>

      {/* OUTRO */}
      <section className="mt-24 md:mt-36">
        <div className="neon-line mb-10" />
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <h2
            className="font-display text-[32px] font-bold leading-[1.05] md:text-[48px]"
            style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
          >
            That's most of it.
            <br />
            <span style={{ color: "var(--color-blue)" }}>Say hi if any of it resonates.</span>
          </h2>
          <div className="flex flex-col gap-2">
            {SOCIALS.slice(0, 4).map((s) => (
              <Link
                key={s.href}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noreferrer" : undefined}
                className="font-mono text-[11px] caps link-underline"
                style={{ color: "var(--color-fg)" }}
              >
                → {s.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
