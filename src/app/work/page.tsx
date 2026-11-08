import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import WorkSection from "@/components/WorkSection";
import AIAdFilmsSection from "@/components/AIAdFilmsSection";
import CreativeArchiveSection from "@/components/CreativeArchiveSection";
import PitchDecksSection from "@/components/PitchDecksSection";

export const metadata: Metadata = {
  title: "Work & Case Studies — Creative Agency India",
  description:
    "Explore commercial advertising campaigns, brand identity systems, AI ad film productions, and bespoke technology case studies developed by AFTER THAT across India.",
  keywords: [
    "Creative agency portfolio India",
    "Advertising case studies India",
    "Brand identity portfolio",
    "Commercial video showcase",
    "AI ad films India",
    "AFTER THAT ENTERTAINMENT",
  ],
  alternates: {
    canonical: "https://www.afterthat.in/work",
  },
  openGraph: {
    title: "Work & Case Studies | AFTER THAT Creative Agency India",
    description:
      "Explore commercial advertising campaigns, brand identity systems, AI ad film productions, and bespoke technology case studies developed by AFTER THAT across India.",
    url: "https://www.afterthat.in/work",
    siteName: "AFTER THAT ENTERTAINMENT",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/portfolio/branding/dizzire/cover.webp",
        width: 1200,
        height: 630,
        alt: "AFTER THAT ENTERTAINMENT — Master Creative Archive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Work & Case Studies | AFTER THAT Creative Agency India",
    description:
      "Commercial advertising campaigns, brand identity systems, and bespoke digital experiences by AFTER THAT.",
    images: ["/portfolio/branding/dizzire/cover.webp"],
  },
};

export default function WorkHubPage() {
  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.afterthat.in",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Work",
        item: "https://www.afterthat.in/work",
      },
    ],
  };

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.afterthat.in/work#collection",
    name: "AFTER THAT Creative Archive & Portfolio",
    description:
      "Comprehensive repository of commercial advertising films, brand design systems, and digital engineering case studies.",
    url: "https://www.afterthat.in/work",
    publisher: {
      "@type": "AdvertisingAgency",
      name: "AFTER THAT ENTERTAINMENT LLP",
      url: "https://www.afterthat.in",
    },
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
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
