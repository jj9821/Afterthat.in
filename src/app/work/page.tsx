import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WorkSection from "@/components/WorkSection";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";
import PitchDecksSection from "@/components/PitchDecksSection";

export const metadata: Metadata = {
  title: "Creative Showcase & Archive | AFTER THAT ENTERTAINMENT",
  description:
    "Explore the complete creative archive of AFTER THAT ENTERTAINMENT: AI-powered advertising films, brand campaigns, pitch decks, and commercial case studies.",
  alternates: {
    canonical: "https://www.afterthat.in/work",
  },
  openGraph: {
    title: "Creative Showcase & Archive | AFTER THAT ENTERTAINMENT",
    description:
      "AI-powered advertising commercials, brand identity systems, strategy pitch decks, and digital experiences.",
    url: "https://www.afterthat.in/work",
    siteName: "AFTER THAT ENTERTAINMENT",
    type: "website",
  },
};

export default function WorkHubPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      {/* Hero Header for Work Hub */}
      <section className="pt-32 sm:pt-40 pb-16 px-5 sm:px-8 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
            <span>// MASTER ARCHIVE</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60 tracking-widest">
              KOCHI • BANGALORE • AHMEDABAD
            </span>
          </div>

          <h1 className="font-anton text-5xl sm:text-7xl md:text-9xl uppercase tracking-tight text-white leading-[0.9]">
            CREATIVE <span className="text-[#F20D18]">SHOWCASE.</span>
          </h1>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-4">
            <p className="font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-2xl leading-snug">
              Every commercial film, strategic presentation, and brand identity architecture produced by AFTER THAT ENTERTAINMENT.
            </p>

            <div className="flex flex-wrap items-center gap-2 font-mono text-xs">
              <a
                href="#ai-films"
                className="px-3.5 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white transition-colors border border-white/20 uppercase"
              >
                AI AD FILMS
              </a>
              <a
                href="#work"
                className="px-3.5 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white transition-colors border border-white/20 uppercase"
              >
                SELECTED WORK
              </a>
              <a
                href="#creative-archive"
                className="px-3.5 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white transition-colors border border-white/20 uppercase"
              >
                THE ARCHIVE
              </a>
              <a
                href="#pitch-decks"
                className="px-3.5 py-1.5 bg-white/10 hover:bg-[#F20D18] text-white transition-colors border border-white/20 uppercase"
              >
                PITCH DECKS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* AI Ad Films Section */}
      <AIAdFilmsSection />

      {/* Primary Selected Works Section */}
      <WorkSection />

      {/* The Creative Archive (Unified Showcase) */}
      <CreativeArchiveSection />

      {/* Pitch Decks & Strategy Presentations Section */}
      <PitchDecksSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
