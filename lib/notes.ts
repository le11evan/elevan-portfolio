export type Note = {
  slug: string;
  title: string;
  dek: string;
  date: string;
  dateLabel: string;
  tag: string;
  accent: string;
  minutes: number;
};

export const NOTES: Note[] = [
  {
    slug: "this-isnt-an-ai-problem",
    title: "This Isn't an AI Problem. It's an Education Problem.",
    dek: "The panic about AI making people dumb is a re-run. Same script as social media, same misdiagnosis. The foundation was shaky long before any of this.",
    date: "2026-04-25",
    dateLabel: "Apr 2026",
    tag: "essay",
    accent: "var(--color-red)",
    minutes: 5,
  },
];
