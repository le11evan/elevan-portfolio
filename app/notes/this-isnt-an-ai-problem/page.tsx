import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { NOTES } from "@/lib/notes";

const NOTE = NOTES.find((n) => n.slug === "this-isnt-an-ai-problem")!;

export const metadata = {
  title: `${NOTE.title} — Evan Le`,
  description: NOTE.dek,
  openGraph: {
    title: NOTE.title,
    description: NOTE.dek,
    type: "article",
    publishedTime: NOTE.date,
  },
};

export default function Post() {
  return (
    <>
      {/* Top bar */}
      <section className="pt-4 md:pt-8">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <SectionMarker num="02" label={`NOTES · ${NOTE.tag.toUpperCase()}`} accent={NOTE.accent} />
          <Link
            href="/notes"
            className="font-mono text-[10px] caps link-underline"
            style={{ color: "var(--color-fg)", letterSpacing: "0.22em" }}
          >
            ← all notes
          </Link>
        </div>
      </section>

      {/* Title */}
      <article className="post mx-auto mt-10 max-w-[760px]">
        <header>
          <h1
            className="post-title font-display"
            style={{ color: "var(--color-fg)" }}
          >
            This Isn&apos;t an AI Problem.
            <br />
            <span style={{ color: NOTE.accent }}>It&apos;s an Education Problem.</span>
          </h1>

          <p className="post-dek">{NOTE.dek}</p>

          <div className="post-meta">
            <span>By Evan Le</span>
            <span className="post-meta-dot">·</span>
            <span>{NOTE.dateLabel}</span>
            <span className="post-meta-dot">·</span>
            <span>{NOTE.minutes} min read</span>
          </div>
        </header>

        <div className="neon-line my-10" />

        {/* Body */}
        <div className="post-body">
          <p>
            There&apos;s a familiar panic cycle every time a new technology goes
            mainstream. Social media made us anxious and shallow. Now AI is
            making us dumb. The tool changes, the fear stays the same.
          </p>

          <p>
            But here&apos;s what both conversations keep missing: the problem was
            never the technology. It&apos;s that we never built the foundation that
            would&apos;ve made people resilient to it in the first place.
          </p>

          <p>
            Lack of critical thinking isn&apos;t an AI issue. It&apos;s not even really
            a social media issue. It&apos;s a child development and education issue —
            and it&apos;s been one for a long time.
          </p>

          <hr className="post-rule" />

          <h2 className="post-h2">What School Was Actually Built For</h2>

          <p>
            Secondary education in its current form wasn&apos;t designed to produce
            critical thinkers. That&apos;s not a hot take — it&apos;s pretty well
            documented. Illich (<em>Deschooling Society</em>, 1971), Gatto
            (<em>Dumbing Us Down</em>, 1991), and more recently Caplan
            (<em>The Case Against Education</em>, 2018) all made versions of the
            same argument from different angles: the modern school system was
            built for an industrial economy that needed reliable, manageable
            workers — not independent thinkers.
          </p>

          <p>
            Bloom&apos;s Taxonomy, the framework educators have used since 1956,
            literally places recall and memorization at the <em>bottom</em> of
            the cognitive pyramid. Critical thinking — analysis, synthesis,
            evaluation — lives at the top. Most standardized curriculum never
            gets there. It teaches students to perform, not to think.
          </p>

          <p>
            So when people point to AI or social media as the reason young
            people can&apos;t think critically, they&apos;re diagnosing a symptom and
            calling it a cause. The foundation was shaky before any of these
            technologies existed.
          </p>

          <hr className="post-rule" />

          <h2 className="post-h2">Social Media and AI Exposed It, They Didn&apos;t Create It</h2>

          <p>
            Social media is genuinely complicated. It built communities,
            democratized creative industries, spread information faster than
            any institution could, and connected people who would&apos;ve otherwise
            been isolated. That&apos;s real and worth acknowledging.
          </p>

          <p>
            But at its worst — through algorithmic design built around passive
            consumption — it also revealed something: when you remove friction
            from entertainment and socializing, a lot of people default to
            passive over active. That&apos;s not a character flaw, it&apos;s a
            developmental one. If critical thinking and self-direction were
            deeply built into how people were raised and educated, a scrolling
            app wouldn&apos;t erode it so easily.
          </p>

          <p>
            Same with AI. A student using it to skip thinking wasn&apos;t turned
            lazy by the tool. The tool just made their existing disengagement
            more efficient. Haidt (<em>The Anxious Generation</em>, 2024) and
            Twenge (<em>iGen</em>, 2017) documented the psychological damage of
            the social media era — but even that damage traces back to a deeper
            issue: adolescents who weren&apos;t given strong enough developmental
            foundations — in emotional regulation, critical thinking,
            self-awareness — to absorb the impact of a radically new social
            environment.
          </p>

          <hr className="post-rule" />

          <h2 className="post-h2">The Real Gap</h2>

          <p>
            What&apos;s consistently missing from both school curriculum and public
            conversations about child development is the stuff that actually
            determines how people function:
          </p>

          <ul className="post-list">
            <li>Self-awareness and emotional regulation</li>
            <li>Financial literacy</li>
            <li>The ability to evaluate information, not just consume it</li>
            <li>Understanding of relationships, identity, mental health</li>
          </ul>

          <p>
            These aren&apos;t electives. They&apos;re the core competencies of a
            functioning adult. And they&apos;re almost entirely learned outside
            school — if they&apos;re learned at all.
          </p>

          <p>
            Howard Gardner&apos;s work on multiple intelligences (1983) and
            Goleman&apos;s research on emotional intelligence (1995) both pointed
            to the same blind spot decades ago: we were measuring and rewarding
            a narrow slice of human capability while ignoring everything that
            actually determines quality of life. Nothing structural has changed
            since.
          </p>

          <hr className="post-rule" />

          <h2 className="post-h2">Where AI Fits Into This</h2>

          <p>
            AI isn&apos;t the problem and it&apos;s not automatically the solution. But
            it does force the question.
          </p>

          <p>
            If AI can handle recall, summarization, and procedural tasks — the
            things that dominate most secondary school curriculum — then what
            exactly is the curriculum for? That question was always worth
            asking. AI just makes it impossible to avoid.
          </p>

          <p>
            Used with intention, AI could free up space for the things education
            consistently deprioritized: genuine reasoning, self-directed
            inquiry, creative synthesis. The cognitive loop of using AI well —
            forming a question, evaluating an answer, iterating — is closer to
            actual critical thinking than most standardized testing.
          </p>

          <p>
            But that potential only gets realized if child development and
            education are redesigned around it. Integrating AI into curriculum
            early — before passive habits form — is the same lesson social
            media taught the hard way. You can&apos;t suppress the technology. You
            have to build people who know how to use it.
          </p>

          <hr className="post-rule" />

          <h2 className="post-h2">The Real Conversation</h2>

          <p>
            The generation being called dumb isn&apos;t dumb. They&apos;re operating in
            an environment that was never designed to develop them fully — and
            now that environment includes tools powerful enough to make the
            gaps undeniable.
          </p>

          <p>
            The answer isn&apos;t banning AI or blaming phones. It&apos;s reckoning
            honestly with what child development and education were built to
            produce — and deciding if that&apos;s still good enough.
          </p>

          <p className="post-kicker">It isn&apos;t.</p>
        </div>

        <div className="neon-line my-12" />

        {/* Author note */}
        <aside
          className="card flex flex-col gap-4 p-6 md:flex-row md:items-start md:gap-6 md:p-7"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-gold) 6%, var(--color-panel)), var(--color-panel))",
            borderColor:
              "color-mix(in srgb, var(--color-gold) 25%, var(--color-border))",
          }}
        >
          <div
            className="font-mono shrink-0 text-[10px] caps"
            style={{ color: "var(--color-gold)", letterSpacing: "0.3em" }}
          >
            ● author
          </div>
          <div className="space-y-3">
            <p
              className="text-[15px] leading-[1.6]"
              style={{ color: "var(--color-fg)" }}
            >
              I teach robotics and engineering to elementary kids across about
              twenty Orange County school sites a year. The rest of my time
              I&apos;m building agentic LLM systems. Both jobs feed this essay —
              I see the developmental gap up close every week, and I see what
              AI can actually do in the hands of someone trained to use it.
            </p>
            <p
              className="text-[14px] leading-[1.55]"
              style={{ color: "var(--color-muted)" }}
            >
              Drafted with Claude as a thinking partner, edited and structured
              by me. The argument is mine.
            </p>
          </div>
        </aside>

        {/* Nav */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/notes"
            className="font-mono text-[11px] caps link-underline"
            style={{ color: "var(--color-fg)", letterSpacing: "0.22em" }}
          >
            ← all notes
          </Link>
          <Link
            href="/contact"
            className="font-mono text-[11px] caps link-underline"
            style={{ color: "var(--color-fg)", letterSpacing: "0.22em" }}
          >
            → push back · say hi
          </Link>
        </div>
      </article>

      <style>{`
        .post-title {
          font-size: clamp(36px, 6.5vw, 64px);
          font-weight: 900;
          line-height: 0.95;
          letter-spacing: -0.04em;
        }
        .post-dek {
          margin-top: 22px;
          font-family: var(--font-body);
          font-size: 19px;
          line-height: 1.55;
          color: var(--color-muted);
          max-width: 640px;
        }
        .post-meta {
          margin-top: 22px;
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          align-items: baseline;
          font-family: var(--font-mono);
          font-size: 11px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: var(--color-muted);
        }
        .post-meta-dot { opacity: 0.5; }

        .post-body {
          font-family: var(--font-body);
          font-size: 18px;
          line-height: 1.75;
          color: var(--color-fg);
        }
        .post-body p {
          margin: 0 0 22px 0;
        }
        .post-body p:last-child { margin-bottom: 0; }
        .post-body em { font-style: italic; }
        .post-body strong { font-weight: 700; }

        .post-h2 {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 26px;
          letter-spacing: -0.025em;
          line-height: 1.15;
          margin: 36px 0 18px 0;
          color: var(--color-fg);
        }

        .post-rule {
          border: 0;
          border-top: 1px solid var(--color-border);
          margin: 38px 0;
        }

        .post-list {
          list-style: none;
          padding: 0;
          margin: 0 0 22px 0;
        }
        .post-list li {
          position: relative;
          padding-left: 22px;
          margin-bottom: 8px;
        }
        .post-list li::before {
          content: "▸";
          position: absolute;
          left: 0;
          top: 0;
          color: ${NOTE.accent};
        }

        .post-kicker {
          font-family: var(--font-display);
          font-weight: 800;
          font-size: 28px;
          letter-spacing: -0.03em;
          line-height: 1.1;
          color: ${NOTE.accent};
          margin-top: 8px !important;
        }

        @media (max-width: 640px) {
          .post-body { font-size: 16.5px; line-height: 1.7; }
          .post-h2 { font-size: 22px; margin: 28px 0 14px 0; }
        }
      `}</style>
    </>
  );
}
