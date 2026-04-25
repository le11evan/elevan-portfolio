import Link from "next/link";
import type { Project } from "@/lib/data";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card flex h-full flex-col p-5 md:p-6">
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-[10px] caps"
          style={{ color: project.accent, letterSpacing: "0.25em" }}
        >
          ● {project.status}
        </span>
        <span
          className="font-mono text-[9px] caps"
          style={{ color: "var(--color-muted)" }}
        >
          {project.year}
        </span>
      </div>

      <h3
        className="font-display mt-5 text-[32px] font-bold leading-[1] md:text-[42px]"
        style={{ color: "var(--color-fg)", letterSpacing: "-0.03em" }}
      >
        {project.title}
      </h3>
      <p
        className="font-mono mt-2 text-[11px] caps"
        style={{ color: project.accent }}
      >
        {project.subtitle}
      </p>

      <p
        className="mt-5 text-[15px] leading-[1.55]"
        style={{ color: "var(--color-fg)" }}
      >
        {project.blurb}
      </p>

      <ul className="mt-5 grid grid-cols-2 gap-y-2">
        {project.stats.map((s) => (
          <li key={s.label}>
            <div
              className="font-display text-[20px] font-bold"
              style={{ color: project.accent }}
            >
              {s.value}
            </div>
            <div
              className="font-mono text-[9px] caps"
              style={{ color: "var(--color-muted)" }}
            >
              {s.label}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-wrap gap-1.5">
        {project.stack.map((t) => (
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

      <div className="mt-auto flex gap-3 pt-6">
        {project.links.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel={l.href.startsWith("http") ? "noreferrer" : undefined}
            className="font-mono text-[10px] caps link-underline"
            style={{ color: "var(--color-fg)" }}
          >
            → {l.label}
          </Link>
        ))}
      </div>
    </article>
  );
}
