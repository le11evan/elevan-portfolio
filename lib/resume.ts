export type ResumeSection = {
  id: string;
  label: string;
  accent: string;
};

export const RESUME = {
  name: "Evan Le",
  location: "Irvine, CA",
  email: "Le11evan@gmail.com",
  phone: "949-689-2510",
  links: [
    { label: "elevan-portfolio.vercel.app", href: "https://elevan-portfolio.vercel.app" },
    { label: "github.com/le11evan", href: "https://github.com/le11evan" },
    { label: "linkedin.com/in/le11evan", href: "https://linkedin.com/in/le11evan" },
    { label: "elevan-vzn.com", href: "https://elevan-vzn.com" },
  ],
  summary:
    "Solo-operate elevan.vzn — a 7-agent LLM trading platform running live on Alpaca (115+ settled trades, 100+ adversarial-reviewed PRs from an external Claude agent team). CS grad (cum laude, CSUF 2023). Day job teaches engineering to elementary students across ~20 OC sites a year — the same 'translate technical to anyone' skill core to AI engineering and forward-deployed work.",
  skills: [
    {
      group: "AI & Agent Engineering",
      items:
        "Multi-agent orchestration (7-agent production system), agent eval pipelines (12-category loss tagging, AI post-mortems, 6 pattern detectors), tool use / function calling, tiered model selection (Opus / Sonnet / Haiku), token-budget guardrails, prompt engineering, RLHF data annotation, Claude API, Claude Code, OpenAI Codex, MCP integrations",
    },
    {
      group: "Languages",
      items: "TypeScript, Python, JavaScript, SQL, Bash",
    },
    {
      group: "Web & Data",
      items:
        "Next.js 16, React, Prisma ORM, PostgreSQL (Neon), Tailwind CSS, Framer Motion, WebSocket streaming, multi-API pipelines, Git / GitHub, Discord bots (discord.py)",
    },
    {
      group: "Systems & DevOps",
      items:
        "Vercel, Oracle Cloud VPS, systemd, Unix-domain-socket IPC, kqueue file watching, priority-queue scheduling, observability via public trade ledger + Discord alerts",
    },
    {
      group: "Design & Media",
      items: "Adobe Illustrator / Photoshop, video production, social media content creation",
    },
  ],
  experience: [
    {
      role: "AI Data Analyst (Contract) — Project Spectra",
      company: "Handshake AI",
      location: "Remote",
      dates: "2026",
      bullets: [
        "Contribute RLHF training data through structured annotation rubrics for image evaluation — quality, accuracy, and content-integrity scoring across multi-step screening criteria.",
      ],
    },
    {
      role: "Warehouse Manager",
      company: "Brainstorm STEM Education",
      location: "Irvine, CA",
      dates: "Aug 2024 – Present",
      bullets: [
        "Own end-to-end warehouse operations supporting ~20 instructors and 20+ school sites weekly.",
        "Manage equipment staging, deployment logistics, and inventory lifecycle across a multi-site delivery model.",
      ],
    },
    {
      role: "Production Manager",
      company: "Brainstorm STEM Education",
      location: "Irvine, CA",
      dates: "2024",
      bullets: [
        "Ran production floor (laser cutter, raw-to-finished goods, team scheduling). Delivered a ~$150K peak-season fulfillment cycle on schedule.",
        "Wrote SOPs and trained staff to standardize throughput for the company's highest-volume months.",
      ],
    },
    {
      role: "Lead Instructor (Part-Time)",
      company: "Brainstorm STEM Education",
      location: "Orange County, CA",
      dates: "Sep 2023 – Present",
      bullets: [
        "Teach robotics, coding, and engineering to 15–25 elementary students per session — ~20 sites a year, in-school and after-school programs across every Orange County district.",
        "Translate technical concepts (algorithms, robotics, engineering) to non-technical, mixed-age audiences daily — directly transferable to forward-deployed and stakeholder-facing engineering roles.",
      ],
    },
  ],
  projects: [
    {
      name: "elevan.vzn",
      tagline: "Live multi-agent LLM trading platform",
      role: "Founder & Full-Stack Engineer",
      link: "elevan-vzn.com",
      stack: "Next.js, TypeScript, Prisma, Neon Postgres, Python, Oracle Cloud, Alpaca",
      bullets: [
        "Engineered a 7-agent autonomous AI workforce — kqueue file watching, Unix-domain-socket IPC, priority-queue scheduling, 24-hour timeslot coverage, token-budget guardrails. Solo, end-to-end.",
        "Designed an agentic-learning eval pipeline: every losing trade auto-tagged across 12 loss categories, AI post-mortem generated, 6 pattern detectors feed back into model selection — measurable cost / quality wins from tiered model routing (Opus / Sonnet / Haiku).",
        "Shipped 100+ merged PRs through CALLDUCK — an external 7-agent adversarial Claude review team. Live on Alpaca: 115+ settled trades across 8 options strategies. Zero-to-prod in ~8 weeks.",
      ],
    },
    {
      name: "elevan.life",
      tagline: "10-module personal productivity dashboard — daily driver, ~90% built with Claude Code + Codex as a controlled experiment in agent-paired solo development.",
      role: "",
      link: "elevan-life.vercel.app",
      stack: "",
      bullets: [],
    },
  ],
  education: [
    {
      degree: "B.S. Computer Science, cum laude (GPA 3.51)",
      school: "California State University, Fullerton",
      dates: "May 2023",
    },
    {
      degree: "Google UX Design Professional Certificate",
      school: "Coursera",
      dates: "Jun 2022",
    },
  ],
};
