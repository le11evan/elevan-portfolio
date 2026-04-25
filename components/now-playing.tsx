import Link from "next/link";

export default function NowPlaying() {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-30 border-t backdrop-blur-md"
      style={{
        borderColor: "var(--color-border)",
        background: "color-mix(in srgb, var(--color-bg) 85%, transparent)",
      }}
    >
      <div className="mx-auto flex w-full max-w-[1280px] items-center gap-4 px-6 py-2 md:px-12">
        <span
          className="pulse-dot inline-block size-1.5 shrink-0 rounded-full"
          style={{ background: "var(--color-red)", boxShadow: "0 0 8px var(--color-red)" }}
        />
        <span
          className="font-mono shrink-0 text-[9px] caps"
          style={{ color: "var(--color-red)", letterSpacing: "0.3em" }}
        >
          now playing
        </span>
        <span
          className="font-mono truncate text-[10px]"
          style={{ color: "var(--color-fg)" }}
        >
          elevan · lo-fi beats ·{" "}
          <span style={{ color: "var(--color-muted)" }}>for the late-night commits</span>
        </span>
        <Link
          href="https://open.spotify.com/artist/2kXJq5T1MBsdzdA98SYWay"
          target="_blank"
          rel="noreferrer"
          className="font-mono ml-auto shrink-0 text-[9px] caps link-underline"
          style={{ color: "var(--color-fg)" }}
        >
          → spotify
        </Link>
      </div>
    </div>
  );
}
