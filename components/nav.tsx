import Link from "next/link";

const ROUTES = [
  { href: "/", label: "Home", num: "00" },
  { href: "/work", label: "Work", num: "01" },
  { href: "/notes", label: "Notes", num: "02" },
  { href: "/about", label: "About", num: "03" },
  { href: "/resume", label: "Resume", num: "04" },
  { href: "/contact", label: "Contact", num: "05" },
];

export default function Nav() {
  return (
    <header className="relative z-20 mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 pt-6 md:px-12 md:pt-8">
      <Link
        href="/"
        aria-label="Evan Le — home"
        className="group flex items-center gap-2.5 transition-colors"
        style={{ color: "var(--color-fg)" }}
      >
        <span
          className="inline-flex size-7 items-center justify-center transition-transform group-hover:rotate-[-6deg]"
          style={{ color: "var(--color-fg)" }}
        >
          <svg viewBox="460 460 280 280" fill="currentColor" aria-hidden="true">
            <path d="M 663.77 557.05 C 651.21 558.80 638.89 558.86 626.60 559.36 C 615.61 559.80 604.60 559.89 593.61 560.43 C 588.93 560.66 587.45 559.69 589.66 554.95 C 594.82 543.92 599.75 532.78 604.61 521.61 C 605.75 519.01 607.36 518.13 610.10 518.14 C 645.02 518.34 679.93 518.45 714.84 518.60 C 714.99 518.60 715.13 518.90 715.69 519.53 C 706.56 533.26 698.07 547.70 687.91 560.84 C 676.93 575.05 670.85 590.74 667.45 608.11 C 663.09 630.38 657.72 652.45 652.91 674.63 C 652.12 678.26 651.15 680.54 646.60 680.54 C 630.34 680.55 614.08 680.88 597.83 681.39 C 592.75 681.55 592.10 680.20 594.29 675.84 C 599.06 666.32 604.41 656.76 607.93 647.04 C 615.44 626.32 625.75 606.93 633.68 586.48 C 633.77 586.26 633.87 586.04 633.93 585.81 C 637.84 571.61 644.82 560.60 661.25 559.31 C 661.93 559.25 662.58 558.79 663.21 558.45 C 663.37 558.36 663.39 558.02 663.77 557.05 Z"/>
            <path d="M 484.31 630.05 C 500.95 593.94 517.27 558.59 533.49 523.20 C 534.88 520.18 536.80 519.00 540.13 518.97 C 556.16 518.86 572.21 518.58 588.25 518.25 C 591.93 518.18 593.68 518.73 591.71 522.99 C 582.65 542.52 574.00 562.23 564.75 581.66 C 561.19 589.14 552.98 590.91 546.05 594.28 C 548.44 596.83 551.56 596.02 554.14 595.65 C 574.11 592.86 594.21 594.73 614.22 593.71 C 618.36 593.50 619.25 594.55 617.42 598.48 C 613.17 607.58 609.23 616.84 605.25 626.06 C 604.25 628.39 603.25 630.11 600.18 630.11 C 561.89 630.02 523.60 630.05 484.31 630.05 Z"/>
            <path d="M 545.10 639.47 C 561.99 639.47 577.24 639.52 592.49 639.43 C 595.76 639.41 597.62 639.74 595.82 643.67 C 590.58 655.16 585.59 666.77 580.28 678.22 C 578.48 682.10 572.47 683.18 570.40 679.96 C 562.06 667.00 554.04 653.84 545.10 639.47 Z"/>
          </svg>
        </span>
        <span
          className="font-display caps text-[11px]"
          style={{ color: "var(--color-fg)", letterSpacing: "0.18em" }}
        >
          evan le
        </span>
      </Link>

      <nav className="flex items-center gap-1 md:gap-2">
        {ROUTES.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group relative px-2 py-1.5 md:px-3"
          >
            <span className="font-mono text-[9px] text-[color:var(--color-muted)] caps">
              {r.num}
            </span>
            <span className="font-display caps ml-1.5 text-[11px] text-[color:var(--color-fg)] transition-colors group-hover:text-[color:var(--color-gold)]">
              {r.label}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
}
