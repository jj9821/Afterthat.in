"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FileText,
  Layers,
  Download,
  ArrowUpRight,
  Filter,
  Eye,
  CheckCircle2,
  Lock,
  Sparkles
} from "lucide-react";
import { PITCH_DECKS } from "@/data/creative-archive";
import { PitchDeck } from "@/types/creative-archive";
import { sound } from "@/utils/sound";
import PitchDeckViewerModal from "@/components/archive/PitchDeckViewerModal";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";

export default function PitchDecksSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeDeck, setActiveDeck] = useState<PitchDeck | null>(null);

  const categories = [
    { label: "ALL DECKS (10)", key: "ALL" },
    { label: "BRAND STRATEGY", key: "BRAND STRATEGY" },
    { label: "COMMERCIAL & B2B", key: "B2B" },
    { label: "CLEANTECH & MOBILITY", key: "CLEANTECH" },
    { label: "FMCG & ENTERPRISE", key: "FMCG" },
    { label: "LUXURY & RETAIL", key: "LUXURY" },
  ];

  const filteredDecks =
    selectedCategory === "ALL"
      ? PITCH_DECKS
      : PITCH_DECKS.filter((d) =>
          d.category.includes(selectedCategory) ||
          d.tags.some((t) => t.toUpperCase().includes(selectedCategory))
        );

  const handleOpenDeck = (deck: PitchDeck) => {
    sound.playClick();
    setActiveDeck(deck);
  };

  return (
    <section
      id="pitch-decks"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#F20D18]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 08</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60 tracking-widest">
                IDEAS, PRESENTED · PITCH DECKS & STRATEGY
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              IDEAS, <span className="text-[#F20D18]">PRESENTED.</span>
            </h2>
            <div className="font-anton text-2xl sm:text-4xl text-white/80 uppercase tracking-wide">
              STRATEGY BEHIND <span className="text-[#F20D18]">THE CREATIVE.</span>
            </div>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] space-y-2 leading-relaxed">
            <p>
              A curated collection of selected pitch decks, brand presentations, campaign strategies, creative proposals and visual concepts developed by AFTER THAT.
            </p>
            <div className="flex items-center gap-4 text-[#F20D18] font-bold">
              <span>• 10 DECKS ARCHIVED</span>
              <span>• INTERACTIVE SLIDE VIEWER</span>
            </div>
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest mr-3 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#F20D18]" /> FILTER:
          </span>
          {categories.map((cat) => (
            <MagneticButton key={cat.key} strength={0.2}>
              <button
                onClick={() => {
                  sound.playClick();
                  setSelectedCategory(cat.key);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 shrink-0 border transition-all duration-200 ${
                  selectedCategory === cat.key
                    ? "bg-[#F20D18] border-[#F20D18] text-white font-bold shadow-[0_0_15px_rgba(242,13,24,0.6)]"
                    : "bg-transparent border-white/15 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {cat.label}
              </button>
            </MagneticButton>
          ))}
        </div>

        {/* Pitch Decks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredDecks.map((deck) => (
            <div
              key={deck.id}
              className="bg-[#0E0E0E] border border-white/10 hover:border-[#F20D18] transition-all duration-300 flex flex-col group overflow-hidden shadow-lg"
            >
              {/* Pitch Deck Cover Thumbnail with Hover Zoom */}
              <div
                onClick={() => handleOpenDeck(deck)}
                className="relative aspect-[16/10] bg-black cursor-pointer overflow-hidden border-b border-white/10"
              >
                <Image
                  src={deck.coverImage}
                  alt={deck.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />

                {/* View Deck Trigger Icon */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex items-center gap-2 px-4 py-2 bg-[#F20D18] text-white font-mono text-xs font-bold uppercase tracking-wider shadow-2xl scale-95 group-hover:scale-100 transition-transform">
                    <Eye className="w-4 h-4" />
                    <span>VIEW PRESENTATION</span>
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2.5 py-1 bg-[#F20D18] text-white font-mono text-[9px] font-bold uppercase tracking-wider shadow-md">
                    {deck.format.split("•")[0].trim()}
                  </span>
                </div>

                <div className="absolute top-3 right-3 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white font-bold flex items-center gap-1.5">
                  <Layers className="w-3 h-3 text-[#F20D18]" />
                  <span>{deck.slidesCount} SLIDES</span>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between font-mono text-[10px] text-[#888888] uppercase">
                    <span className="text-[#F20D18] font-bold">// {deck.category}</span>
                    <span>{deck.year}</span>
                  </div>

                  <h3
                    onClick={() => handleOpenDeck(deck)}
                    className="font-anton text-2xl uppercase tracking-tight text-white group-hover:text-[#F20D18] transition-colors cursor-pointer leading-snug"
                  >
                    {deck.title}
                  </h3>

                  <p className="font-space text-xs text-[#888888] line-clamp-3 leading-relaxed">
                    {deck.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <button
                    onClick={() => handleOpenDeck(deck)}
                    className="flex items-center gap-1.5 text-white font-bold hover:text-[#F20D18] transition-colors uppercase tracking-wider text-[11px]"
                  >
                    <span>OPEN SLIDES</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F20D18]" />
                  </button>

                  {deck.pdfUrl && (
                    <a
                      href={deck.pdfUrl}
                      download
                      onClick={(e) => {
                        e.stopPropagation();
                        sound.playClick();
                      }}
                      className="text-white/40 hover:text-white flex items-center gap-1 text-[11px] uppercase tracking-wider"
                      title="Download presentation document"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>PDF</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Pitch Deck Presentation Viewer */}
      <PitchDeckViewerModal
        deck={activeDeck}
        onClose={() => setActiveDeck(null)}
      />
    </section>
  );
}
