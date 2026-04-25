"use client";

import { useEffect, useRef, useState } from "react";

type Identity = {
  key: string;
  label: string;
  accent: string;
  bio: string;
  scene: "code" | "classroom" | "waveform" | "hurrikane";
  sceneLabel: string;
};

const IDENTITIES: Identity[] = [
  {
    key: "engineer",
    label: "Engineer",
    accent: "#3575FF",
    bio: "Solo-built a 7-agent LLM trading system shipping live trades on Alpaca. 115+ settled. Next.js, Postgres, Oracle Cloud.",
    scene: "code",
    sceneLabel: "~/elevan.vzn · agents/orchestrator.ts",
  },
  {
    key: "teacher",
    label: "Teacher",
    accent: "#FFB627",
    bio: "Teaching robotics, coding, and engineering to 15–25 students per session — about 20 different sites a year, during school and after-school. Every Orange County district.",
    scene: "classroom",
    sceneLabel: "brainstorm-stem · in + after school",
  },
  {
    key: "producer",
    label: "Producer",
    accent: "#FF3355",
    bio: "Lo-fi hip-hop producer on Spotify. Headphones on, chord progressions until 2am. It's where the engineering stops talking.",
    scene: "waveform",
    sceneLabel: "spotify · artist · elevan",
  },
  {
    key: "community",
    label: "Community",
    accent: "#3DE67E",
    bio: "Hurrikane — a sugarcane juice brand I'm building with family. Farmers markets, weekends, one press at a time.",
    scene: "hurrikane",
    sceneLabel: "hurrikane · launching summer 2026",
  },
];

export default function IdentitySwitcher() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [pinned, setPinned] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (pinned) return;
    intervalRef.current = setInterval(() => {
      setActiveIdx((i) => (i + 1) % IDENTITIES.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [pinned]);

  const active = IDENTITIES[activeIdx];

  return (
    <section className="relative">
      {/* Massive wordmark */}
      <h1
        className="font-display relative select-none text-[clamp(72px,14vw,200px)] font-black leading-[0.85] tracking-[-0.04em]"
        style={{ color: "var(--color-fg)" }}
      >
        <span className="chromatic chromatic-glitch inline-block">EVAN</span>{" "}
        <span
          className="inline-block"
          style={{ color: active.accent, transition: "color 600ms ease" }}
        >
          LE
        </span>
        <span
          className="font-mono ml-3 inline-block align-top text-[12px] caps"
          style={{ color: "var(--color-muted)", letterSpacing: "0.3em" }}
        >
          /{active.key}
        </span>
      </h1>

      {/* Identity bio */}
      <p
        key={active.key}
        className="fade-up mt-8 max-w-[720px] text-[18px] leading-[1.55] md:text-[22px]"
        style={{ color: "var(--color-fg)" }}
      >
        {active.bio}
      </p>

      {/* Tab row */}
      <div
        className="mt-10 flex flex-wrap gap-2"
        role="tablist"
        aria-label="Identity switcher"
      >
        {IDENTITIES.map((id, i) => {
          const isActive = i === activeIdx;
          return (
            <button
              key={id.key}
              role="tab"
              aria-selected={isActive}
              onClick={() => {
                setActiveIdx(i);
                setPinned(true);
              }}
              className={`font-display caps relative rounded-sm border px-4 py-2.5 text-[11px] transition-all ${
                isActive ? "tab-active" : ""
              }`}
              style={
                {
                  borderColor: isActive ? id.accent : "var(--color-border)",
                  color: isActive ? id.accent : "var(--color-muted)",
                  background: isActive
                    ? `color-mix(in srgb, ${id.accent} 8%, var(--color-panel))`
                    : "var(--color-panel)",
                  ["--tab-accent" as string]: id.accent,
                } as React.CSSProperties
              }
            >
              <span className="font-mono mr-2 text-[9px] opacity-60">
                0{i + 1}
              </span>
              {id.label}
            </button>
          );
        })}
        {pinned && (
          <button
            onClick={() => setPinned(false)}
            className="font-mono caps ml-2 text-[9px] text-[color:var(--color-muted)] underline decoration-dotted underline-offset-4 hover:text-[color:var(--color-fg)]"
          >
            → auto
          </button>
        )}
      </div>

      {/* Micro-scene card */}
      <div
        key={`scene-${active.key}`}
        className="fade-up card mt-10 overflow-hidden p-0"
        style={{
          borderColor: `color-mix(in srgb, ${active.accent} 30%, var(--color-border))`,
        }}
      >
        <div
          className="flex items-center justify-between border-b px-4 py-2.5"
          style={{
            borderColor: "var(--color-border)",
            background: "color-mix(in srgb, var(--color-bg) 50%, transparent)",
          }}
        >
          <span
            className="font-mono text-[10px] caps"
            style={{ color: active.accent, letterSpacing: "0.2em" }}
          >
            ● {active.sceneLabel}
          </span>
          <span
            className="font-mono text-[9px] caps"
            style={{ color: "var(--color-muted)" }}
          >
            scene {activeIdx + 1}/4
          </span>
        </div>
        <div className="min-h-[180px] p-5 md:p-6">
          <MicroScene kind={active.scene} accent={active.accent} />
        </div>
      </div>
    </section>
  );
}

function MicroScene({ kind, accent }: { kind: Identity["scene"]; accent: string }) {
  if (kind === "code") {
    const agents = [
      { name: "scanner", role: "options screening" },
      { name: "trader", role: "order execution" },
      { name: "analyst", role: "thesis writing" },
      { name: "risk", role: "position sizing" },
      { name: "post-mortem", role: "loss tagging" },
      { name: "pattern", role: "model improvement" },
      { name: "orchestrator", role: "scheduling" },
    ];
    return (
      <div>
        <div
          className="font-mono mb-4 flex items-center justify-between text-[10px] caps"
          style={{ color: "var(--color-muted)", letterSpacing: "0.22em" }}
        >
          <span>● 7 agents online</span>
          <span>24h coverage</span>
        </div>
        <ul className="space-y-1.5">
          {agents.map((a, i) => (
            <li
              key={a.name}
              className="grid grid-cols-[10px_1fr_auto] items-center gap-3 font-mono text-[12px]"
            >
              <span
                className="pulse-dot inline-block size-1.5 rounded-full"
                style={{
                  background: accent,
                  boxShadow: `0 0 6px ${accent}`,
                  animationDelay: `${i * 200}ms`,
                }}
              />
              <span>
                <span style={{ color: "var(--color-fg)" }}>{a.name}</span>
                <span style={{ color: "var(--color-muted)" }}> · {a.role}</span>
              </span>
              <span
                className="text-[9px] caps"
                style={{ color: accent, letterSpacing: "0.2em" }}
              >
                online
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  if (kind === "classroom") {
    const stats = [
      { k: "sites/yr", v: "~20" },
      { k: "students/session", v: "15–25" },
      { k: "districts", v: "all OC" },
      { k: "since", v: "Sep 2023" },
    ];
    return (
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {stats.map((s) => (
          <div key={s.k}>
            <div
              className="font-display text-[28px] md:text-[36px]"
              style={{ color: accent }}
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
    );
  }
  if (kind === "waveform") {
    const bars = Array.from({ length: 64 }, (_, i) => {
      const h = 20 + Math.abs(Math.sin(i * 0.6) * 50) + Math.abs(Math.cos(i * 0.27) * 30);
      return h;
    });
    return (
      <div className="flex h-[120px] items-center gap-[3px]">
        {bars.map((h, i) => (
          <div
            key={i}
            className="flex-1 rounded-sm"
            style={{
              height: `${h}%`,
              background: `linear-gradient(to top, ${accent}, color-mix(in srgb, ${accent} 40%, transparent))`,
              boxShadow: `0 0 8px color-mix(in srgb, ${accent} 40%, transparent)`,
              opacity: 0.4 + (h / 200),
            }}
          />
        ))}
      </div>
    );
  }
  // hurrikane
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <div
          className="font-display text-[36px] md:text-[44px]"
          style={{ color: accent, letterSpacing: "-0.04em" }}
        >
          HURRIKANE
        </div>
        <div
          className="font-mono mt-1 text-[10px] caps"
          style={{ color: "var(--color-muted)" }}
        >
          raw-pressed sugarcane · farmers markets
        </div>
      </div>
      <div className="flex gap-2">
        {["family-run", "summer 2026", "OC farmers markets"].map((t) => (
          <span
            key={t}
            className="font-mono rounded-sm border px-2 py-1 text-[9px] caps"
            style={{
              borderColor: `color-mix(in srgb, ${accent} 40%, var(--color-border))`,
              color: accent,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
