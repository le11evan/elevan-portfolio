export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  year: string;
  status: string;
  accent: string;
  blurb: string;
  stats: { label: string; value: string }[];
  stack: string[];
  links: { label: string; href: string }[];
  // Long-form case study content (for /work)
  context: string;
  decisions: string[];
  learned: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "elevan-vzn",
    title: "elevan.vzn",
    subtitle: "AI-powered quant trading signals",
    year: "2025–26",
    status: "Live",
    accent: "#3575FF",
    blurb:
      "A live options trading platform orchestrated by a 7-agent LLM workforce. Real signals, real money on Alpaca, every trade published to a public ledger.",
    stats: [
      { label: "agents", value: "7" },
      { label: "strategies", value: "8" },
      { label: "settled trades", value: "115+" },
      { label: "zero→prod", value: "~8 wks" },
    ],
    stack: ["Next.js 16", "TypeScript", "Prisma", "Neon Postgres", "Python", "OCI VPS", "Alpaca", "Discord"],
    links: [
      { label: "elevan-vzn.com", href: "https://elevan-vzn.com" },
    ],
    context:
      "I wanted to find out how far a single developer could push an LLM-orchestrated system when the agents had real stakes — not a toy benchmark but actual positions closing in real dollars. Options felt right because the scanner has to reason across strategy, liquidity, volatility, and news in ways that reward multi-agent decomposition.",
    decisions: [
      "Event-driven architecture over polling — kqueue file watching and Unix domain sockets for inter-agent IPC, priority-queue scheduler covering 24-hour timeslots with explicit token budgets.",
      "Shipped to Oracle Cloud free-tier VPS (not Vercel) because the Python data pipeline and agent runners need persistent systemd services, WebSocket streaming, and full file-system access.",
      "Built an agentic-learning loop: every losing trade is auto-tagged across 12 loss categories, contributing factors flagged, an AI post-mortem is generated, and six pattern detectors feed back into model selection.",
      "Opened the system to CALLDUCK — an external 7-agent adversarial Claude team — and shipped 100+ merged PRs through structured code review.",
    ],
    learned: [
      "Agent specialization beats a single big prompt — distinct roles (scanner, trader, analyst, risk) surface different errors and are easier to debug.",
      "Tiered model selection (Opus for planning, Sonnet for execution, Haiku for classification) cuts cost ~70% without losing quality on the hard steps.",
      "Publishing every trade forces honesty. The system gets better faster when there's no hiding losers.",
    ],
  },
  {
    slug: "elevan-life",
    title: "elevan.life",
    subtitle: "Personal productivity dashboard",
    year: "2025",
    status: "Daily driver",
    accent: "#FFB627",
    blurb:
      "A 10-module cloud-native dashboard I use every day — Tasks, Fitness, Diet, Finance, Journal, Goals, and more. Built almost entirely through AI-assisted pair-programming with Claude Code and Codex.",
    stats: [
      { label: "modules", value: "10" },
      { label: "uses/day", value: "∞" },
      { label: "AI-assisted", value: "~90%" },
      { label: "for", value: "me" },
    ],
    stack: ["Next.js", "TypeScript", "Prisma", "Postgres", "Tailwind", "Claude Code", "Codex"],
    links: [
      { label: "elevan-life.vercel.app", href: "https://elevan-life.vercel.app" },
    ],
    context:
      "I wanted one place to run my life. Tasks and fitness and finance and journaling in one roof, with the schema and the UI tuned to *me* — not a SaaS trying to be everything to everyone. A personal dashboard is also the best classroom for testing how far agent-assisted coding can go.",
    decisions: [
      "Cloud-native from day one — Neon Postgres, Vercel, no local-first sync to reason about.",
      "10 modules kept deliberately small and separable, so each one can be rewritten without touching the others.",
      "AI-assisted workflow treated as a skill to get good at, not a shortcut — tight PRs, clear specs, aggressive review of generated code.",
    ],
    learned: [
      "Building for yourself surfaces bad abstractions fast. If I don't want to open the app tomorrow, the UX failed.",
      "Claude Code + Codex together cover different seams — planning/arch vs. fill-in-the-blanks edits.",
      "A personal dashboard is also the best onboarding doc I have — it's the inventory of what I actually value keeping track of.",
    ],
  },
];

export type Social = { label: string; href: string };

export const SOCIALS: Social[] = [
  { label: "GitHub", href: "https://github.com/le11evan" },
  { label: "LinkedIn", href: "https://linkedin.com/in/le11evan" },
  { label: "Spotify", href: "https://open.spotify.com/artist/2kXJq5T1MBsdzdA98SYWay" },
  { label: "Email", href: "mailto:le11evan@gmail.com" },
];

export const CONTACT = {
  email: "le11evan@gmail.com",
  phone: "949-689-2510",
  location: "Irvine, CA",
};
