"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter, Disc, Play, ShieldCheck, Sparkles } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { sound } from "@/utils/sound";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrambleText from "@/components/motion/ScrambleText";

interface WorkSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL WORK");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);

  const categories = [
    { label: "ALL WORK", key: "ALL WORK" },
    { label: "BRANDING", key: "branding" },
    { label: "ADVERTISING", key: "advertising" },
    { label: "DIGITAL MARKETING", key: "digital-marketing" },
    { label: "AI ADVERTISING", key: "ai-advertising" },
    { label: "TECHNOLOGY", key: "technology" },
    { label: "PR & EXPERIENCES", key: "events-pr" },
  ];

  const filteredProjects =
    selectedFilter === "ALL WORK"
      ? PROJECTS
      : PROJECTS.filter(
          (p) =>
            p.category === selectedFilter ||
            (selectedFilter === "ai-advertising" && (p.category === "ai-advertising" || p.tags.some(t => t.toLowerCase().includes("ai"))))
        );

  const handleFilterClick = (key: string) => {
    sound.playClick();
    setSelectedFilter(key);
  };

  const handleCardClick = (project: Project) => {
    sound.playClick();
    if (onSelectProject) {
      onSelectProject(project);
    }
  };

  return (
    <section
      id="work"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Grid Layer */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 05</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                VERIFIED ARCHIVE · PDF EXTRACTED
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              SELECTED <span className="text-[#F20D18]">WORKS.</span>
            </h2>
            <div className="font-anton text-2xl sm:text-4xl text-white/80 uppercase tracking-wide">
              REAL IDEAS. <span className="text-[#F20D18]">REAL EXECUTION.</span>
            </div>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              A collection of creative projects, campaigns and digital experiences across branding, advertising, marketing and technology.
            </p>
          </div>
        </div>

        {/* Category Filters Bar with Magnetic Pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          <span className="font-mono text-xs text-white/40 uppercase tracking-widest mr-3 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#F20D18]" /> FILTER:
          </span>
          {categories.map((cat) => (
            <MagneticButton key={cat.key} strength={0.2}>
              <button
                onClick={() => handleFilterClick(cat.key)}
                onMouseEnter={() => sound.playHover()}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2 shrink-0 border transition-all duration-200 ${
                  selectedFilter === cat.key
                    ? "bg-[#F20D18] border-[#F20D18] text-white font-bold shadow-[0_0_15px_rgba(242,13,24,0.6)]"
                    : "bg-transparent border-white/15 text-white/70 hover:border-white hover:text-white"
                }`}
              >
                {cat.key === "ALL WORK" ? `ALL WORK (${PROJECTS.length})` : cat.label}
              </button>
            </MagneticButton>
          ))}
        </div>

        {/* Asymmetrical Portfolio Grid with 3D Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => {
            const isSpanFull = index === 0;
            const colSpan = isSpanFull
              ? "md:col-span-12"
              : index % 3 === 1
              ? "md:col-span-7"
              : "md:col-span-5";

            const isHovered = hoveredProjectId === project.id;
            const projectNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;

            return (
              <div
                key={project.id}
                className={`${colSpan} group relative bg-[#0e0e0e] border border-white/10 hover:border-[#F20D18] transition-all duration-500 flex flex-col justify-between shadow-2xl`}
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredProjectId(project.id);
                }}
                onMouseLeave={() => setHoveredProjectId(null)}
                data-cursor="CASE STUDY"
                data-preview-img={project.coverImage}
              >
                {/* 3D Tilt Wrapper for Media */}
                <TiltCard intensity={6} glare={true} className="w-full">
                  <div
                    className={`relative w-full overflow-hidden bg-black ${
                      isSpanFull
                        ? "aspect-[16/9] md:aspect-[21/9]"
                        : index % 3 === 1
                        ? "aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    {/* Primary Image Still */}
                    <Image
                      src={project.coverImage}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-90" />

                    {/* Corner Badges */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="bg-black/90 px-3 py-1 font-mono text-[10px] text-[#F20D18] font-bold tracking-widest uppercase border border-white/20">
                        {projectNumber} // {project.year}
                      </span>
                      <span className="bg-[#F20D18] text-white font-mono text-[10px] font-extrabold px-2.5 py-1 tracking-widest uppercase shadow-[0_0_12px_rgba(242,13,24,0.6)]">
                        {project.location.split(",")[0]}
                      </span>
                      {project.verified && (
                        <span className="hidden sm:flex items-center gap-1 bg-black/80 px-2 py-1 font-mono text-[9px] text-white/80 font-bold border border-white/20">
                          <ShieldCheck className="w-3 h-3 text-[#F20D18]" /> VERIFIED
                        </span>
                      )}
                    </div>

                    <Link
                      href={`/work/${project.slug}`}
                      onClick={() => sound.playClick()}
                      className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#F20D18] group-hover:text-white group-hover:border-[#F20D18] group-hover:scale-110 transition-all z-20"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>

                    {/* Bottom Title on Image */}
                    <div className="absolute bottom-4 left-4 right-4 z-10">
                      <span className="font-mono text-[10px] md:text-xs text-[#F20D18] tracking-[0.2em] font-bold uppercase block mb-1">
                        // {project.categoryLabel}
                      </span>
                      <h3 className="font-anton text-2xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white group-hover:text-[#F20D18] transition-colors leading-[0.95]">
                        <ScrambleText text={project.title} />
                      </h3>
                      {project.client && (
                        <span className="font-mono text-[11px] text-white/60 tracking-wider uppercase block mt-1">
                          CLIENT: {project.client}
                        </span>
                      )}
                    </div>
                  </div>
                </TiltCard>

                {/* Footer Meta Row with Direct Links */}
                <div className="p-5 md:p-6 bg-[#0f0f0f] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 font-mono text-xs">
                  <p className="text-white/70 line-clamp-2 max-w-xl">
                    {project.headline}
                  </p>
                  <div className="flex items-center gap-4 shrink-0">
                    <button
                      onClick={() => handleCardClick(project)}
                      className="text-white/50 hover:text-white underline text-[11px] uppercase tracking-wider"
                    >
                      QUICK PREVIEW
                    </button>
                    <Link
                      href={`/work/${project.slug}`}
                      onClick={() => sound.playClick()}
                      className="text-[#F20D18] font-bold uppercase tracking-wider flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      VIEW CASE STUDY →
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Portfolio Bottom Banner */}
        <div className="bg-[#121212] border border-white/10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 subtle-red-grid opacity-20 pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2 justify-center md:justify-start">
              <Disc className="w-3.5 h-3.5 animate-spin" /> MORE IN THE VAULT
            </span>
            <h4 className="font-anton text-2xl md:text-4xl text-white uppercase tracking-wide">
              HAVE A VISION FOR YOUR BRAND OR BUSINESS?
            </h4>
            <p className="font-space text-sm text-[#888888] max-w-xl">
              We partner with forward-looking enterprises, fast-growing startups, and cultural promoters who demand uncompromising creative execution and measurable growth.
            </p>
          </div>

          <MagneticButton strength={0.3} className="shrink-0 relative z-10">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                sound.playClick();
                document
                  .querySelector("#contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              onMouseEnter={() => sound.playHover()}
              data-cursor="INQUIRE"
              className="px-8 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-colors block shadow-[0_0_20px_rgba(242,13,24,0.4)]"
            >
              START A PROJECT
            </a>
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
