import Link from "next/link";
import SectionMarker from "@/components/section-marker";
import { CONTACT, SOCIALS } from "@/lib/data";

export const metadata = {
  title: "Contact — Evan Le",
  description: "Reach Evan Le — email, phone, and social handles.",
};

export default function ContactPage() {
  return (
    <>
      <section className="pt-4 md:pt-8">
        <SectionMarker num="05" label="CONTACT · DIRECT" accent="var(--color-green)" />
        <h1
          className="font-display mt-6 text-[52px] font-black leading-[0.9] md:text-[112px]"
          style={{ color: "var(--color-fg)", letterSpacing: "-0.04em" }}
        >
          Let's <span style={{ color: "var(--color-green)" }}>talk</span>.
        </h1>
        <p
          className="mt-6 max-w-[640px] text-[18px] leading-[1.55]"
          style={{ color: "var(--color-muted)" }}
        >
          Recruiting, collaborating, or just curious — all three welcome. I
          answer email fastest. Text works if it's time-sensitive.
        </p>
      </section>

      <section className="mt-16">
        <div className="neon-line mb-10" />
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <ContactCard
            label="email"
            value={CONTACT.email}
            href={`mailto:${CONTACT.email}`}
            accent="var(--color-green)"
            note="Primary. I check it more than I should."
          />
          <ContactCard
            label="phone"
            value={CONTACT.phone}
            href={`tel:+1${CONTACT.phone.replace(/[^0-9]/g, "")}`}
            accent="var(--color-blue)"
            note="Call or text — either is fine."
          />
        </div>
      </section>

      <section className="mt-16">
        <SectionMarker num="06" label="ELSEWHERE" accent="var(--color-gold)" />
        <div className="mt-8 grid grid-cols-1 gap-3 md:grid-cols-2">
          {SOCIALS.filter((s) => !s.href.startsWith("mailto")).map((s) => (
            <Link
              key={s.href}
              href={s.href}
              target="_blank"
              rel="noreferrer"
              className="card group flex items-center justify-between p-5"
            >
              <div>
                <div
                  className="font-mono text-[9px] caps"
                  style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
                >
                  ● {s.label}
                </div>
                <div
                  className="font-display mt-2 text-[22px] font-bold transition-colors group-hover:text-[color:var(--color-gold)]"
                  style={{ color: "var(--color-fg)" }}
                >
                  {prettyHandle(s.label)}
                </div>
              </div>
              <span
                className="font-mono text-[14px] transition-transform group-hover:translate-x-1"
                style={{ color: "var(--color-gold)" }}
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <div className="neon-line mb-10" />
        <div
          className="card p-6 md:p-8"
          style={{
            background:
              "linear-gradient(180deg, color-mix(in srgb, var(--color-gold) 6%, var(--color-panel)), var(--color-panel))",
          }}
        >
          <div
            className="font-mono text-[10px] caps"
            style={{ color: "var(--color-gold)", letterSpacing: "0.3em" }}
          >
            ● based in
          </div>
          <div
            className="font-display mt-3 text-[32px] font-bold md:text-[44px]"
            style={{ color: "var(--color-fg)" }}
          >
            {CONTACT.location}
          </div>
          <p
            className="mt-2 text-[14px]"
            style={{ color: "var(--color-muted)" }}
          >
            Pacific time · open to remote and hybrid roles across Southern California.
          </p>
        </div>
      </section>
    </>
  );
}

function ContactCard({
  label,
  value,
  href,
  accent,
  note,
}: {
  label: string;
  value: string;
  href: string;
  accent: string;
  note: string;
}) {
  return (
    <Link
      href={href}
      className="card group flex flex-col p-6 md:p-8"
      style={{
        borderColor: `color-mix(in srgb, ${accent} 25%, var(--color-border))`,
      }}
    >
      <div
        className="font-mono text-[10px] caps"
        style={{ color: accent, letterSpacing: "0.3em" }}
      >
        ● {label}
      </div>
      <div
        className="font-display mt-4 break-words text-[28px] font-bold leading-[1] transition-colors md:text-[36px]"
        style={{ color: "var(--color-fg)" }}
      >
        {value}
      </div>
      <p
        className="mt-3 text-[13px]"
        style={{ color: "var(--color-muted)" }}
      >
        {note}
      </p>
      <span
        className="font-mono mt-6 text-[10px] caps transition-transform group-hover:translate-x-1"
        style={{ color: accent }}
      >
        → open
      </span>
    </Link>
  );
}

function prettyHandle(label: string): string {
  switch (label) {
    case "GitHub":
      return "@le11evan";
    case "LinkedIn":
      return "/in/le11evan";
    case "X / Twitter":
      return "@elevanvzn";
    case "Spotify":
      return "elevan";
    default:
      return label;
  }
}
