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
    { label: "github.com/le11evan", href: "https://github.com/le11evan" },
    { label: "linkedin.com/in/le11evan", href: "https://linkedin.com/in/le11evan" },
    { label: "elevan-vzn.com", href: "https://elevan-vzn.com" },
    // Portfolio link — uncomment + update once the live domain is set.
    // { label: "evan-le.dev", href: "https://evan-le.dev" },
  ],
  summary:
    "Computer Science graduate (cum laude, CSUF 2023). Solo-operator of a 7-agent LLM trading platform shipping live trades. 100+ merged PRs through AI-to-AI code review. Background in elementary STEM instruction and operations adds range — I design data pipelines, train instructors, and explain either one clearly.",
  skills: [
    {
      group: "AI & Model Training",
      items:
        "Multi-agent orchestration (7-agent team), agentic learning pipelines, prompt engineering, RLHF workflows, model output evaluation, AI data annotation, image evaluation, loss-category tagging, tiered model selection (Opus / Sonnet / Haiku), Claude API, Claude Code, OpenAI Codex, MCP integrations",
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
        "Vercel, Oracle Cloud VPS, systemd, Unix-domain-socket IPC, kqueue file watching, priority-queue scheduling, token-budget tracking",
    },
    {
      group: "Design & Media",
      items: "Adobe Illustrator / Photoshop, video production, social media content creation",
    },
  ],
  experience: [
    {
      role: "AI Data Analyst (Contract)",
      company: "Handshake AI",
      location: "Remote",
      dates: "2026",
      bullets: [
        "Selected for Project Spectra. Evaluate AI-generated images for quality, accuracy, and content integrity using structured annotation frameworks, multi-step screening rubrics, and detailed evaluation criteria.",
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
      ],
    },
    {
      role: "Assistant Manager",
      company: "Phans55 Bistro & Bar",
      location: "Irvine, CA",
      dates: "Jan 2023 – Jan 2024",
      bullets: [
        "Ran daily FOH / BOH coordination, staff training, payments, and customer service.",
      ],
    },
  ],
  projects: [
    {
      name: "elevan.vzn",
      tagline: "AI-powered quantitative trading signal platform",
      role: "Founder & Full-Stack Engineer",
      link: "elevan-vzn.com",
      stack: "Next.js, TypeScript, Prisma, Neon Postgres, Python, Oracle Cloud, Vercel",
      bullets: [
        "Solo-built a live 3-sector platform (options, sports, prediction markets). 115+ settled trades across 8 options strategies. Zero-to-production in ~8 weeks.",
        "Engineered a 7-agent autonomous AI workforce: kqueue file watching, Unix-domain-socket IPC, priority-queue scheduling, 24-hour timeslot coverage, token-budget tracking.",
        "Designed an agentic learning pipeline (loss tagging, AI post-mortems, 6 pattern detectors) and shipped 100+ merged PRs with CALLDUCK, an external adversarial 7-agent Claude team.",
      ],
    },
    {
      name: "elevan.life",
      tagline: "Personal productivity dashboard (daily driver)",
      role: "",
      link: "elevan-life.vercel.app",
      stack: "",
      bullets: [
        "Built a 10-module cloud-native dashboard (Tasks, Fitness, Diet, Finance, Journal, Goals, and more) with account creation and login, using AI-assisted pair programming (Claude Code, Codex). Used daily as my primary life-management tool.",
      ],
    },
    {
      name: "Hurrikane",
      tagline: "Sugarcane juice brand (pre-launch)",
      role: "",
      link: "",
      stack: "",
      bullets: [
        "Family-run beverage brand targeting Orange County farmers markets, summer 2026. Lead on brand, operations, and sourcing.",
      ],
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
