import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { RESUME } from "@/lib/resume";
import PrintButton from "./print-button";

export const metadata = {
  title: "Resume — Evan Le",
  description: "Evan Le — resume. Computer Science graduate building agentic LLM systems and teaching elementary STEM.",
};

export default function ResumePage() {
  return (
    <>
      {/* Screen-only header (hidden on print) */}
      <section className="resume-screen-only pt-4 md:pt-8">
        <SectionMarker num="04" label="RESUME · RÉSUMÉ" accent="var(--color-gold)" />
        <div className="mt-6 flex flex-col items-start gap-6 md:flex-row md:items-end md:justify-between">
          <h1
            className="font-display text-[44px] font-black leading-[0.9] md:text-[80px]"
            style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
          >
            The <span style={{ color: "var(--color-gold)" }}>one</span>-pager.
          </h1>
          <PrintButton />
        </div>
        <p
          className="mt-5 max-w-[640px] text-[15px] leading-[1.6]"
          style={{ color: "var(--color-muted)" }}
        >
          On-brand on screen, clean on paper. Hit the print button for a
          PDF-ready version — your browser's "Save as PDF" does the rest.
        </p>
      </section>

      {/* The resume itself */}
      <article className="resume-doc mt-12 mx-auto max-w-[860px]">
        {/* Header */}
        <header className="resume-header">
          <h2 className="resume-name">{RESUME.name}</h2>
          <div className="resume-contact">
            <span>{RESUME.location}</span>
            <span className="resume-dot">·</span>
            <a href={`mailto:${RESUME.email}`}>{RESUME.email}</a>
            <span className="resume-dot">·</span>
            <span>{RESUME.phone}</span>
          </div>
          <div className="resume-contact resume-contact-links">
            {RESUME.links.map((l, i) => (
              <span key={l.href}>
                {i > 0 && <span className="resume-dot">·</span>}
                <a href={l.href.startsWith("http") ? l.href : `https://${l.href}`}>
                  {l.label}
                </a>
              </span>
            ))}
          </div>
        </header>

        {/* Summary */}
        <p className="resume-summary">{RESUME.summary}</p>

        <hr className="resume-rule" />

        {/* Skills */}
        <section className="resume-section">
          <h3 className="resume-h3">Technical Skills</h3>
          <dl className="resume-skills">
            {RESUME.skills.map((s) => (
              <div key={s.group} className="resume-skill-row">
                <dt>{s.group}</dt>
                <dd>{s.items}</dd>
              </div>
            ))}
          </dl>
        </section>

        <hr className="resume-rule" />

        {/* Projects */}
        <section className="resume-section">
          <h3 className="resume-h3">Projects</h3>
          {RESUME.projects.map((p) => (
            <div key={p.name} className="resume-item">
              <div className="resume-item-head">
                <div>
                  <span className="resume-item-title">{p.name}</span>
                  <span className="resume-item-sep"> — </span>
                  <span className="resume-item-subtitle">{p.tagline}</span>
                </div>
              </div>
              {(p.role || p.link) && (
                <div className="resume-item-meta">
                  {p.link && (
                    <a
                      href={p.link.startsWith("http") ? p.link : `https://${p.link}`}
                    >
                      {p.link}
                    </a>
                  )}
                  {p.role && (
                    <>
                      {p.link && <span className="resume-dot"> | </span>}
                      <span>{p.role}</span>
                    </>
                  )}
                  {p.stack && (
                    <>
                      <span className="resume-dot"> | </span>
                      <span>{p.stack}</span>
                    </>
                  )}
                </div>
              )}
              <ul className="resume-bullets">
                {p.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="resume-rule" />

        {/* Experience */}
        <section className="resume-section">
          <h3 className="resume-h3">Experience</h3>
          {RESUME.experience.map((x, i) => (
            <div key={i} className="resume-item">
              <div className="resume-item-head">
                <div>
                  <span className="resume-item-title">{x.role}</span>
                  <span className="resume-item-sep"> | </span>
                  <span className="resume-item-subtitle">{x.company}</span>
                  <span className="resume-item-sep"> — </span>
                  <span className="resume-item-subtitle">{x.location}</span>
                </div>
                <div className="resume-item-dates">{x.dates}</div>
              </div>
              <ul className="resume-bullets">
                {x.bullets.map((b, bi) => (
                  <li key={bi}>{b}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <hr className="resume-rule" />

        {/* Education */}
        <section className="resume-section">
          <h3 className="resume-h3">Education</h3>
          {RESUME.education.map((e, i) => (
            <div key={i} className="resume-edu">
              <div>
                <span className="resume-item-title">{e.degree}</span>
                <span className="resume-item-sep"> — </span>
                <span className="resume-item-subtitle">{e.school}</span>
              </div>
              <div className="resume-item-dates">{e.dates}</div>
            </div>
          ))}
        </section>
      </article>

      {/* Screen-only footer */}
      <section className="resume-screen-only mt-16">
        <div className="neon-line mb-8" />
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <p
            className="font-mono text-[11px] caps"
            style={{ color: "var(--color-muted)", letterSpacing: "0.2em" }}
          >
            ● rev. 2026-04-24 · v4
          </p>
          <Link
            href="/contact"
            className="font-mono text-[11px] caps link-underline"
            style={{ color: "var(--color-fg)" }}
          >
            → get in touch
          </Link>
        </div>
      </section>

      <style>{`
        /* ── Screen styles (dark, on-brand) ─────────────────────────── */
        .resume-doc {
          background: var(--color-panel);
          border: 1px solid var(--color-border);
          border-radius: 6px;
          padding: 44px 48px;
          font-family: var(--font-body);
          color: var(--color-fg);
          font-size: 14px;
          line-height: 1.55;
        }
        .resume-header { margin-bottom: 18px; }
        .resume-name {
          font-family: var(--font-display);
          font-weight: 900;
          font-size: 40px;
          letter-spacing: -0.04em;
          line-height: 1;
          color: var(--color-fg);
        }
        .resume-contact {
          margin-top: 10px;
          font-family: var(--font-mono);
          font-size: 11px;
          color: var(--color-muted);
          letter-spacing: 0.02em;
        }
        .resume-contact a {
          color: var(--color-gold);
          text-decoration: none;
        }
        .resume-contact a:hover { text-decoration: underline; }
        .resume-contact-links a { color: var(--color-blue); }
        .resume-dot { opacity: 0.5; margin: 0 8px; }
        .resume-summary {
          margin-top: 14px;
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--color-fg);
        }
        .resume-rule {
          border: 0;
          border-top: 1px solid var(--color-border);
          margin: 22px 0;
        }
        .resume-section { margin-top: 4px; }
        .resume-h3 {
          font-family: var(--font-display);
          text-transform: uppercase;
          letter-spacing: 0.22em;
          font-size: 11px;
          font-weight: 700;
          color: var(--color-gold);
          margin-bottom: 14px;
        }
        .resume-skills { display: flex; flex-direction: column; gap: 8px; }
        .resume-skill-row { display: grid; grid-template-columns: 180px 1fr; gap: 16px; }
        .resume-skill-row dt {
          font-family: var(--font-mono);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--color-blue);
          padding-top: 1px;
        }
        .resume-skill-row dd { font-size: 13.5px; color: var(--color-fg); line-height: 1.55; }
        .resume-item { margin-bottom: 16px; }
        .resume-item:last-child { margin-bottom: 0; }
        .resume-item-head {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          align-items: baseline;
        }
        .resume-item-title {
          font-family: var(--font-display);
          font-weight: 700;
          font-size: 15px;
          color: var(--color-fg);
        }
        .resume-item-sep { color: var(--color-muted); opacity: 0.6; }
        .resume-item-subtitle {
          font-family: var(--font-body);
          font-size: 14px;
          color: var(--color-fg);
        }
        .resume-item-dates {
          font-family: var(--font-mono);
          font-size: 10.5px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: var(--color-muted);
          white-space: nowrap;
        }
        .resume-item-meta {
          font-family: var(--font-mono);
          font-size: 10.5px;
          color: var(--color-muted);
          margin-top: 2px;
        }
        .resume-item-meta a { color: var(--color-blue); text-decoration: none; }
        .resume-item-meta a:hover { text-decoration: underline; }
        .resume-bullets {
          list-style: none;
          padding: 0;
          margin: 8px 0 0 0;
        }
        .resume-bullets li {
          position: relative;
          padding-left: 16px;
          margin-bottom: 4px;
          font-size: 13.5px;
          line-height: 1.55;
          color: var(--color-fg);
        }
        .resume-bullets li::before {
          content: "▸";
          position: absolute;
          left: 0;
          color: var(--color-gold);
        }
        .resume-edu {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          margin-bottom: 6px;
        }

        @media (max-width: 640px) {
          .resume-doc { padding: 28px 20px; }
          .resume-skill-row { grid-template-columns: 1fr; gap: 2px; }
          .resume-item-head { flex-direction: column; gap: 2px; }
          .resume-edu { flex-direction: column; gap: 2px; }
        }

        /* ── Print styles (clean paper version, fits 1 page letter) ─── */
        @media print {
          @page { margin: 0.4in; size: letter; }
          html, body { background: #fff !important; color: #111 !important; }
          .grain-overlay { display: none !important; }
          header, footer, .resume-screen-only { display: none !important; }
          main { padding: 0 !important; max-width: 100% !important; }

          .resume-doc {
            background: #fff !important;
            border: 0 !important;
            padding: 0 !important;
            color: #111 !important;
            font-size: 9.5pt;
            line-height: 1.32;
            max-width: 100% !important;
          }
          .resume-header { margin-bottom: 6pt !important; }
          .resume-name { color: #111 !important; font-size: 19pt; }
          .resume-contact { color: #333 !important; font-size: 8.5pt; margin-top: 4pt; }
          .resume-contact a { color: #0057d1 !important; }
          .resume-contact-links { margin-top: 1pt; }
          .resume-contact-links a { color: #0057d1 !important; }
          .resume-summary { color: #222 !important; font-size: 9.25pt; line-height: 1.35; margin-top: 6pt; }
          .resume-rule { border-top-color: #ccc !important; margin: 7pt 0; }
          .resume-h3 { color: #111 !important; font-size: 9pt; margin-bottom: 5pt; letter-spacing: 0.18em; }
          .resume-skills { gap: 3pt !important; }
          .resume-skill-row { grid-template-columns: 110pt 1fr !important; gap: 10pt !important; }
          .resume-skill-row dt { color: #333 !important; font-size: 8pt; }
          .resume-skill-row dd { color: #111 !important; font-size: 9pt; line-height: 1.32; }
          .resume-item { margin-bottom: 6pt !important; }
          .resume-item-title, .resume-item-subtitle { color: #111 !important; }
          .resume-item-title { font-size: 10pt; }
          .resume-item-subtitle { font-size: 9.5pt; }
          .resume-item-sep { color: #666 !important; }
          .resume-item-dates { color: #555 !important; font-size: 8pt; }
          .resume-item-meta { color: #555 !important; font-size: 8pt; margin-top: 0; }
          .resume-item-meta a { color: #0057d1 !important; }
          .resume-bullets { margin-top: 3pt !important; }
          .resume-bullets li {
            color: #111 !important;
            font-size: 9pt;
            line-height: 1.32;
            margin-bottom: 1.5pt;
            padding-left: 11pt;
          }
          .resume-bullets li::before { color: #0057d1 !important; }
          .resume-edu { margin-bottom: 2pt; }
          .resume-section, .resume-item { break-inside: avoid; }
        }
      `}</style>
    </>
  );
}
