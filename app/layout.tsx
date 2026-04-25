import type { Metadata } from "next";
import { Unbounded, Fraunces, Space_Mono } from "next/font/google";
import Nav from "@/components/nav";
import Footer from "@/components/footer";
import GrainOverlay from "@/components/grain-overlay";
import NowPlaying from "@/components/now-playing";
import Konami from "@/components/konami";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "500", "700", "800", "900"],
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  axes: ["opsz", "SOFT"],
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  variable: "--font-space-mono",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Evan Le — engineer, teacher, producer, founder",
  description:
    "Portfolio of Evan Le — CS grad teaching kids to code by day, building agentic LLM systems by night. Based in Irvine, CA.",
  metadataBase: new URL("https://elevan-portfolio.vercel.app"),
  openGraph: {
    title: "Evan Le",
    description:
      "Engineer, teacher, producer, founder — building agentic LLM systems and teaching the next generation.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${unbounded.variable} ${fraunces.variable} ${spaceMono.variable}`}>
      <body className="min-h-screen">
        <GrainOverlay />
        <Nav />
        <main className="relative z-10 mx-auto w-full max-w-[1280px] px-6 pb-32 pt-8 md:px-12 md:pt-12">
          {children}
        </main>
        <Footer />
        <NowPlaying />
        <Konami />
      </body>
    </html>
  );
}
