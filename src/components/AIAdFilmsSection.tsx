"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Play,
  Film,
  Sparkles,
  Clock,
  Layers,
  ArrowUpRight,
  Filter,
  Maximize2,
  Cpu,
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { AI_AD_FILMS } from "@/data/creative-archive";
import { AIAdFilm } from "@/types/creative-archive";
import { sound } from "@/utils/sound";
import VideoPlayerModal from "@/components/archive/VideoPlayerModal";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrambleText from "@/components/motion/ScrambleText";

export default function AIAdFilmsSection() {
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeVideo, setActiveVideo] = useState<AIAdFilm | null>(null);
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  const categories = [
    { label: "ALL FILMS", key: "ALL" },
    { label: "FASHION & COUTURE", key: "ai-fashion-ads" },
    { label: "BRAND FILMS", key: "ai-brand-films" },
    { label: "PRODUCT COMMERCIALS", key: "ai-product-commercials" },
    { label: "PROMOTIONAL VIDEOS", key: "ai-promotional-videos" },
    { label: "EXPERIMENTAL AI", key: "experimental-ai" },
  ];

  const filteredFilms =
    selectedCategory === "ALL"
      ? AI_AD_FILMS
      : AI_AD_FILMS.filter((f) => f.categoryKey === selectedCategory);

  const featuredFilm = AI_AD_FILMS[0]; // Quppayam Royal Bridal Walk 4K
  const gridFilms = filteredFilms.filter((f) => f.id !== (selectedCategory === "ALL" ? featuredFilm.id : ""));

  const handleOpenVideo = (film: AIAdFilm) => {
    sound.playClick();
    setActiveVideo(film);
  };

  return (
    <section
      id="ai-films"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Decorative Ambient Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F20D18]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 04</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60 tracking-widest">
                AI CREATIVE TECHNOLOGY & 4K COMMERCIALS
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              AI FILMS. <span className="text-[#F20D18]">REAL IMPACT.</span>
            </h2>
            <p className="font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-2xl leading-snug">
              From product commercials to cinematic brand storytelling, we use AI-powered creative production to turn ideas into compelling visual experiences.
            </p>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] space-y-2 leading-relaxed">
            <p>
              Full-scale high-cadence commercial advertising films produced with multi-agent diffusion pipelines, custom character consistency, and broadcast-grade color mastering.
            </p>
            <div className="flex items-center gap-4 text-[#F20D18] font-bold">
              <span>• 10 AD FILMS ARCHIVED</span>
              <span>• ZERO STOCK FOOTAGE</span>
            </div>
          </div>
        </div>

        {/* AI Strategic Superpower Rationale & Principle */}
        <div className="bg-[#101010] border border-[#F20D18]/30 p-8 sm:p-10 relative overflow-hidden group shadow-2xl">
          <div className="absolute top-0 right-0 w-64 h-64 subtle-red-grid opacity-15 pointer-events-none" />
          
          <div className="relative z-10 space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
              <div className="flex items-center gap-2.5 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                <Cpu className="w-4 h-4 animate-pulse" />
                <span>THE AFTER THAT AI PRINCIPLE</span>
              </div>
              <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase">
                HUMAN STRATEGIC LEADERSHIP • NEURAL PRODUCTION VELOCITY
              </span>
            </div>

            <div className="max-w-4xl space-y-3">
              <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl uppercase leading-tight tracking-wide text-white">
                “We do not use AI to replace human creativity. We use AI to multiply creative possibilities, compress production timelines and produce visual quality that was previously impossible within traditional budget constraints.”
              </h3>
              <p className="font-space text-sm sm:text-base text-white/70 leading-relaxed">
                By combining generative diffusion pipelines, camera projection, and sound engineering with experienced creative directors, we deliver commercials with the visual scale of multi-million dollar shoots at high-speed turnaround.
              </p>
            </div>

            {/* 4 Client-Centric Value Propositions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              <div className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] transition-colors">
                <span className="font-mono text-xs font-bold text-[#F20D18] block mb-1">01 // VELOCITY</span>
                <h4 className="font-anton text-base uppercase text-white tracking-wide">10x Speed to Market</h4>
                <p className="font-mono text-[11px] text-[#888888] mt-1 leading-relaxed">
                  Go from storyboard to finished 4K commercial in days instead of months of logistics.
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] transition-colors">
                <span className="font-mono text-xs font-bold text-[#F20D18] block mb-1">02 // SCALE</span>
                <h4 className="font-anton text-base uppercase text-white tracking-wide">Cinematic Boundlessness</h4>
                <p className="font-mono text-[11px] text-[#888888] mt-1 leading-relaxed">
                  Photorealistic worlds, bespoke styling, and dramatic lighting with zero stock video clips.
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] transition-colors">
                <span className="font-mono text-xs font-bold text-[#F20D18] block mb-1">03 // DIRECTION</span>
                <h4 className="font-anton text-base uppercase text-white tracking-wide">Human Art Direction</h4>
                <p className="font-mono text-[11px] text-[#888888] mt-1 leading-relaxed">
                  Every frame is orchestrated by seasoned creative directors, copywriters, and colorists.
                </p>
              </div>

              <div className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] transition-colors">
                <span className="font-mono text-xs font-bold text-[#F20D18] block mb-1">04 // OPTIMISATION</span>
                <h4 className="font-anton text-base uppercase text-white tracking-wide">High-Cadence Testing</h4>
                <p className="font-mono text-[11px] text-[#888888] mt-1 leading-relaxed">
                  Generate multiple creative angles and test varying hooks at the cost of one traditional shoot.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest mr-3 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#F20D18]" /> CATEGORIES:
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

        {/* Featured Hero Cinema Card (Visible on ALL filter) */}
        {selectedCategory === "ALL" && (
          <div className="relative w-full bg-[#0E0E0E] border-2 border-white/20 hover:border-[#F20D18] transition-all duration-300 shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Left Video Player Preview */}
              <div
                onClick={() => handleOpenVideo(featuredFilm)}
                className="lg:col-span-8 relative aspect-video bg-black cursor-pointer overflow-hidden group/thumb"
              >
                <Image
                  src={featuredFilm.thumbnailUrl}
                  alt={featuredFilm.title}
                  fill
                  className="object-cover group-hover/thumb:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Big Center Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#F20D18] text-white flex items-center justify-center shadow-[0_0_40px_rgba(242,13,24,0.8)] group-hover/thumb:scale-110 transition-transform">
                    <Play className="w-9 h-9 sm:w-10 sm:h-10 fill-white translate-x-1" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#F20D18] text-white font-mono text-[10px] font-bold uppercase tracking-wider shadow-lg">
                    FEATURED MASTER FILM
                  </span>
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white font-bold">
                    {featuredFilm.resolution}
                  </span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 font-mono text-xs text-white">
                  {featuredFilm.durationFormatted}
                </div>
              </div>

              {/* Right Editorial Info Column */}
              <div className="lg:col-span-4 p-8 sm:p-10 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                    <Film className="w-4 h-4" />
                    <span>{featuredFilm.category}</span>
                  </div>

                  <h3 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white leading-tight">
                    {featuredFilm.title}
                  </h3>

                  <p className="font-space text-sm text-[#cccccc] leading-relaxed">
                    {featuredFilm.description}
                  </p>

                  <div className="p-4 bg-black/50 border border-white/10 font-mono text-xs space-y-1.5">
                    <div className="text-[#888888] uppercase">CLIENT: <span className="text-white font-bold">{featuredFilm.client}</span></div>
                    <div className="text-[#888888] uppercase">TECH: <span className="text-[#F20D18]">{featuredFilm.productionTech}</span></div>
                  </div>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <button
                    onClick={() => handleOpenVideo(featuredFilm)}
                    className="flex items-center gap-3 px-6 py-3 bg-[#F20D18] text-white font-mono text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-colors shadow-[0_0_20px_rgba(242,13,24,0.5)]"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>WATCH FULL FILM</span>
                  </button>
                  <span className="font-mono text-xs text-white/50">{featuredFilm.year}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Asymmetrical Video Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gridFilms.map((film) => (
            <div
              key={film.id}
              className="bg-[#0E0E0E] border border-white/10 hover:border-[#F20D18] transition-all duration-300 flex flex-col group overflow-hidden"
            >
              {/* Video Thumbnail with Hover Zoom */}
              <div
                onClick={() => handleOpenVideo(film)}
                className="relative aspect-video bg-black cursor-pointer overflow-hidden"
              >
                <Image
                  src={film.thumbnailUrl}
                  alt={film.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/20" />

                {/* Play Button Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-black/70 border border-white/30 text-white flex items-center justify-center group-hover:bg-[#F20D18] group-hover:border-[#F20D18] group-hover:scale-110 transition-all duration-200 shadow-xl">
                    <Play className="w-6 h-6 fill-white translate-x-0.5" />
                  </div>
                </div>

                {/* Resolution & Duration Badges */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[9px] text-[#F20D18] font-bold uppercase">
                    {film.resolution}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3 px-2 py-0.5 bg-black/80 backdrop-blur-md border border-white/20 font-mono text-[10px] text-white">
                  {film.durationFormatted}
                </div>
              </div>

              {/* Card Meta Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase block">
                    // {film.category}
                  </span>
                  <h4
                    onClick={() => handleOpenVideo(film)}
                    className="font-anton text-2xl uppercase tracking-tight text-white group-hover:text-[#F20D18] transition-colors cursor-pointer leading-snug"
                  >
                    {film.title}
                  </h4>
                  <p className="font-space text-xs text-[#888888] line-clamp-2 leading-relaxed">
                    {film.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono text-xs">
                  <span className="text-white/50 text-[11px] truncate max-w-[180px]">
                    CLIENT: {film.client}
                  </span>
                  <button
                    onClick={() => handleOpenVideo(film)}
                    className="text-[#F20D18] font-bold text-[11px] uppercase tracking-wider flex items-center gap-1 hover:underline"
                  >
                    PLAY FILM →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cinematic Video Player Modal */}
      <VideoPlayerModal
        video={activeVideo}
        onClose={() => setActiveVideo(null)}
      />
    </section>
  );
}
