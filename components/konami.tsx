"use client";

import { useEffect, useState } from "react";

const SEQUENCE = [
  "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
  "b", "a",
];

type Piece = {
  id: number;
  x: number;
  kind: "bolt" | "clip";
  delay: number;
  drift: number;
  rot: number;
};

export default function Konami() {
  const [idx, setIdx] = useState(0);
  const [active, setActive] = useState(false);
  const [pieces, setPieces] = useState<Piece[]>([]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const key = e.key.length === 1 ? e.key.toLowerCase() : e.key;
      const expected = SEQUENCE[idx];
      if (key === expected) {
        const next = idx + 1;
        if (next === SEQUENCE.length) {
          fire();
          setIdx(0);
        } else {
          setIdx(next);
        }
      } else {
        setIdx(0);
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [idx]);

  function fire() {
    const next: Piece[] = Array.from({ length: 64 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      kind: Math.random() > 0.5 ? "bolt" : "clip",
      delay: Math.random() * 400,
      drift: (Math.random() - 0.5) * 200,
      rot: Math.random() * 720 - 360,
    }));
    setPieces(next);
    setActive(true);
    setTimeout(() => setActive(false), 4000);
  }

  if (!active) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((p) => (
        <span
          key={p.id}
          style={{
            position: "absolute",
            top: "-10%",
            left: `${p.x}%`,
            color: p.kind === "bolt" ? "var(--color-bolt)" : "var(--color-clip)",
            filter: `drop-shadow(0 0 6px ${p.kind === "bolt" ? "var(--color-bolt)" : "var(--color-clip)"})`,
            animation: `konami-fall 3.5s ${p.delay}ms cubic-bezier(0.25,0.46,0.45,0.94) forwards`,
            // @ts-expect-error custom props
            "--drift": `${p.drift}px`,
            "--rot": `${p.rot}deg`,
            fontSize: 24,
          }}
        >
          {p.kind === "bolt" ? "⚡" : "🏀"}
        </span>
      ))}
      <style jsx>{`
        @keyframes konami-fall {
          to {
            transform: translate(var(--drift, 0), 110vh) rotate(var(--rot, 0));
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
