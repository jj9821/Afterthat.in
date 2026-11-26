"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Filter } from "lucide-react";
import { PROJECTS } from "@/data/projects";
import { Project } from "@/types";
import { sound } from "@/utils/sound";

interface WorkSectionProps {
  onSelectProject?: (project: Project) => void;
}

export default function WorkSection({ onSelectProject }: WorkSectionProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL WORK");

  const categories = [
    { label: "ALL WORK", key: "ALL WORK" },
    { label: "FASHION & APPAREL", key: "fashion" },
    { label: "FMCG & PACKAGING", key: "fmcg" },
    { label: "HOSPITALITY & CAFÉ", key: "hospitality" },
  ];

  const filteredProjects =
    selectedFilter === "ALL WORK"
      ? PROJECTS
      : PROJECTS.filter((p) => {
          if (selectedFilter === "fashion") {
            return (
              p.category === "fashion" ||
              p.categoryLabel.toLowerCase().includes("fashion")
            );
          }
          if (selectedFilter === "fmcg") {
            return p.id === "hapeats-fmcg-packaging";
          }
          if (selectedFilter === "hospitality") {
            return p.id === "milli-flame-bistro-paris";
          }
          return p.category === selectedFilter;
        });

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

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-14 md:space-y-20">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#FF3B44] font-bold tracking-[0.28em] uppercase">
              <span>// SECTION 06</span>
              <span className="text-white/40" aria-hidden="true">/</span>
              <span className="text-white/70 tracking-widest">
                BRAND IDENTITY &amp; PACKAGING
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              SELECTED <span className="text-[#F20D18]">WORKS.</span>
            </h2>
            <p className="font-anton text-2xl sm:text-4xl text-white/85 uppercase tracking-wide">
              REAL IDEAS. <span className="text-[#F20D18]">REAL EXECUTION.</span>
            </p>
          </div>

          <div className="max-w-md font-mono text-xs text-[#A3A3A3] leading-relaxed">
            <p>
              Brand systems, packaging architectures, and retail environments engineered for clarity and commercial scale.
            </p>
          </div>
        </div>

        {/* Category Filter Controls */}
        <div
          role="group"
          aria-label="Filter selected works by vertical"
          className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2"
        >
          <span className="font-mono text-xs text-white/70 uppercase tracking-widest mr-2 flex items-center gap-1.5 shrink-0">
            <Filter className="w-3.5 h-3.5 text-[#FF3B44]" aria-hidden="true" /> FILTER:
          </span>
          {categories.map((cat) => {
            const isSelected = selectedFilter === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleFilterClick(cat.key)}
                onMouseEnter={() => sound.playHover()}
                className={`font-mono text-xs uppercase tracking-wider px-4 py-2.5 shrink-0 border transition-[transform,background-color,border-color,color] duration-150 ease-out active:translate-y-px active:scale-[0.985] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18] ${
                  isSelected
                    ? "bg-[#F20D18] border-[#F20D18] text-white font-bold"
                    : "bg-transparent border-white/20 text-white/75 hover:-translate-y-px hover:border-white hover:text-white"
                }`}
              >
                {cat.key === "ALL WORK" ? `ALL WORK (${PROJECTS.length})` : cat.label}
              </button>
            );
          })}
        </div>

        {/* Asymmetrical Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-10">
          {filteredProjects.map((project, index) => {
            const total = filteredProjects.length;
            const colSpan =
              total === 1
                ? "md:col-span-12"
                : total === 2
                ? "md:col-span-6"
                : index === 0 || index === 3
                ? "md:col-span-7"
                : "md:col-span-5";

            const projectNumber = index < 9 ? `0${index + 1}` : `${index + 1}`;
            const cityLabel = project.location.split(",")[0];

            return (
              <article
                key={project.id}
                className={`${colSpan} group relative bg-[#0E0E0E] border border-white/15 hover:border-[#F20D18] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,border-color] duration-200 ease-out flex flex-col`}
                onMouseEnter={() => sound.playHover()}
                data-cursor="CASE STUDY"
                data-preview-img={project.coverImage}
              >
                {/* Clean Artwork Container — Title & Metadata live below to avoid logo/copy collision */}
                <Link
                  href={`/work/${project.slug}`}
                  onClick={() => sound.playClick()}
                  aria-label={`Open ${project.title} case study`}
                  className={`relative block w-full overflow-hidden bg-black focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F20D18] ${
                    total === 1
                      ? "aspect-[16/9] md:aspect-[21/9]"
                      : "aspect-[16/10]"
                  }`}
                >
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                    sizes={
                      total === 1
                        ? "100vw"
                        : colSpan === "md:col-span-7"
                        ? "(max-width: 768px) 100vw, 58vw"
                        : "(max-width: 768px) 100vw, 42vw"
                    }
                  />

                  {/* Restrained top scrim solely for corner badge legibility */}
                  <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/65 via-black/25 to-transparent pointer-events-none" />

                  {/* Corner Badges & Link Arrow */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                    <div className="flex items-center gap-2">
                      <span className="bg-black/90 px-2.5 py-1 font-mono text-[10px] text-white font-bold tracking-widest uppercase border border-white/25">
                        {projectNumber} // {project.year}
                      </span>
                      <span className="bg-[#F20D18] text-white font-mono text-[10px] font-bold px-2.5 py-1 tracking-widest uppercase">
                        {cityLabel}
                      </span>
                    </div>

                    <span
                      aria-hidden="true"
                      className="w-9 h-9 bg-black/80 border border-white/25 flex items-center justify-center text-white group-hover:bg-[#F20D18] group-hover:border-[#F20D18] transition-colors duration-200"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                  </div>
                </Link>

                {/* Card Body & Aligned Footer */}
                <div className="p-5 md:p-6 bg-[#0F0F0F] border-t border-white/10 flex-1 flex flex-col justify-between gap-5">
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[11px] uppercase tracking-wider">
                      <span className="text-[#FF3B44] font-bold">
                        // {project.categoryLabel}
                      </span>
                      {project.client && (
                        <span className="text-white/65 truncate max-w-[240px]">
                          CLIENT: {project.client}
                        </span>
                      )}
                    </div>

                    <h3 className="font-anton text-2xl sm:text-3xl lg:text-4xl uppercase tracking-tight text-white leading-[1.04]">
                      <Link
                        href={`/work/${project.slug}`}
                        onClick={() => sound.playClick()}
                        className="hover:text-[#F20D18] transition-colors duration-150 focus-visible:outline-none focus-visible:underline"
                      >
                        {project.title}
                      </Link>
                    </h3>

                    <p className="font-space text-sm text-[#B3B3B3] leading-relaxed line-clamp-2">
                      {project.headline}
                    </p>
                  </div>

                  {/* Card Footer Action Row */}
                  <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 font-mono text-xs">
                    {onSelectProject ? (
                      <button
                        type="button"
                        onClick={() => handleCardClick(project)}
                        className="py-1.5 text-white/75 hover:text-white underline underline-offset-4 text-[11px] uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
                      >
                        QUICK PREVIEW
                      </button>
                    ) : (
                      <span className="text-white/65 text-[11px] uppercase tracking-wider">
                        {project.industryVertical || project.categoryLabel}
                      </span>
                    )}

                    <Link
                      href={`/work/${project.slug}`}
                      onClick={() => sound.playClick()}
                      className="py-1.5 text-[#FF3B44] hover:text-white font-bold text-[11px] uppercase tracking-wider inline-flex items-center gap-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Archive CTA — links to /work full archive */}
        <div className="flex justify-center pt-2">
          <Link
            href="/work"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="group inline-flex items-center gap-2 font-mono text-xs font-bold text-white/75 hover:text-white uppercase tracking-widest border-b border-white/25 hover:border-[#F20D18] pb-1.5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
          >
            <span>EXPLORE FULL ARCHIVE — AI FILMS, PITCH DECKS &amp; MORE</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3B44] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" aria-hidden="true" />
          </Link>
        </div>

        {/* Portfolio Bottom Banner */}
        <div className="bg-[#121212] border border-white/15 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
          <div className="absolute right-0 top-0 bottom-0 w-1/3 subtle-red-grid opacity-20 pointer-events-none" />

          <div className="space-y-2 text-center md:text-left relative z-10">
            <span className="font-mono text-xs text-[#FF3B44] font-bold tracking-widest uppercase block">
              // MORE IN THE VAULT
            </span>
            <h4 className="font-anton text-2xl md:text-4xl text-white uppercase tracking-wide">
              HAVE A VISION FOR YOUR BRAND OR BUSINESS?
            </h4>
            <p className="font-space text-sm text-[#A3A3A3] max-w-xl leading-relaxed">
              We partner with forward-looking enterprises, fast-growing startups, and cultural promoters who demand uncompromising creative execution and measurable growth.
            </p>
          </div>

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
            className="shrink-0 relative z-10 inline-flex items-center gap-2 px-8 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:-translate-y-px hover:bg-white hover:text-black active:translate-y-px active:scale-[0.985] transition-[transform,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
