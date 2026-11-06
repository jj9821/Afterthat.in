"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Calendar,
  MapPin,
  Tag,
  Maximize2,
  Share2,
  FileText,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { PortfolioProject } from "@/types";
import { sound } from "@/utils/sound";
import ImageViewerModal from "@/components/ImageViewerModal";
import CustomCursor from "@/components/CustomCursor";

interface ProjectDetailClientProps {
  project: PortfolioProject;
  prevProject: PortfolioProject;
  nextProject: PortfolioProject;
  relatedProjects: PortfolioProject[];
}

export default function ProjectDetailClient({
  project,
  prevProject,
  nextProject,
  relatedProjects,
}: ProjectDetailClientProps) {
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerIndex, setViewerIndex] = useState(0);
  const [copied, setCopied] = useState(false);

  const allImages = project.images && project.images.length > 0
    ? project.images
    : [
        {
          src: project.coverImage,
          alt: project.title,
          sourcePdf: "The AFTERTHAT Playbook (1).pdf",
          sourcePage: 1,
          caption: project.headline,
        },
      ];

  const handleOpenViewer = (index: number) => {
    sound.playClick();
    setViewerIndex(index);
    setViewerOpen(true);
  };

  const handleShare = async () => {
    sound.playClick();
    if (typeof window !== "undefined") {
      try {
        await navigator.clipboard.writeText(window.location.href);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard fallback
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white">
      <CustomCursor />

      {/* Top Fixed Minimal Case-Study Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            data-cursor="BACK"
            className="flex items-center gap-2 font-mono text-xs text-white/70 hover:text-white group uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#F20D18] group-hover:-translate-x-1 transition-transform" />
            <span>PORTFOLIO DIRECTORY</span>
          </Link>

          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-white/50">
            <span className="text-[#F20D18] font-bold">// CASE STUDY:</span>
            <span className="text-white font-bold uppercase truncate max-w-sm">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={handleShare}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white font-mono text-[11px] uppercase tracking-wider text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#F20D18]" />
              <span>{copied ? "COPIED" : "SHARE"}</span>
            </button>

            <Link
              href="/#contact"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              data-cursor="CONTACT"
              className="px-4 py-1.5 bg-[#F20D18] hover:bg-white hover:text-black font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors"
            >
              START A PROJECT
            </Link>
          </div>
        </div>
      </header>

      {/* Main Case Study Content Container */}
      <main className="pt-28 md:pt-36 pb-24 px-5 sm:px-8 md:px-12 max-w-[1720px] mx-auto space-y-16 md:space-y-24">
        {/* Project Header Hero */}
        <section className="space-y-6 md:space-y-8 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-[#F20D18] text-white font-mono text-xs font-extrabold uppercase tracking-widest shadow-[0_0_12px_rgba(242,13,24,0.5)]">
              {project.categoryLabel}
            </span>
            {project.verified && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/20 font-mono text-xs text-white font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F20D18]" />
                VERIFIED ARCHIVE ASSET
              </span>
            )}
            <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
              // YEAR {project.year}
            </span>
          </div>

          <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-[0.95]">
            {project.title}
          </h1>

          <p className="font-space text-lg sm:text-2xl text-white/90 max-w-4xl leading-relaxed">
            {project.headline}
          </p>

          {/* Quick Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest block flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#F20D18]" /> CLIENT / ENTITY
              </span>
              <span className="text-white font-bold text-sm block">
                {project.client || "Confidential Partner"}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest block flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#F20D18]" /> LOCATION
              </span>
              <span className="text-white font-bold text-sm block">
                {project.location}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest block flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#F20D18]" /> TIMELINE
              </span>
              <span className="text-white font-bold text-sm block">
                {project.year}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest block flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#F20D18]" /> PRIMARY DISCIPLINE
              </span>
              <span className="text-[#F20D18] font-bold text-sm block uppercase">
                {project.category}
              </span>
            </div>
          </div>
        </section>

        {/* Hero Cover Image with Expand Trigger */}
        <section className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#111111] border border-white/15 overflow-hidden group cursor-pointer shadow-2xl">
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            priority
            className="object-cover group-hover:scale-103 transition-transform duration-700"
            sizes="100vw"
            onClick={() => handleOpenViewer(0)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

          {/* Expand badge */}
          <button
            onClick={() => handleOpenViewer(0)}
            aria-label="Expand image full screen"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 px-3.5 py-2 bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-[#F20D18] hover:border-[#F20D18] transition-colors"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">EXPAND VIEW</span>
          </button>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-xs text-white/80">
            <span className="bg-black/80 px-3 py-1 border border-white/20 uppercase tracking-wider">
              {allImages[0].caption || project.headline}
            </span>
          </div>
        </section>

        {/* Strategic Overview: Description, Challenge, Approach, Deliverables */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Left Column: Description & Strategic Narrative */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                // 01 · CONTEXT & POSITIONING
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
                THE ASSIGNMENT
              </h2>
              <p className="font-space text-base sm:text-lg text-white/80 leading-relaxed pt-2">
                {project.description}
              </p>
            </div>

            {project.challenge && (
              <div className="p-6 bg-[#111111] border-l-4 border-[#F20D18] space-y-2">
                <span className="font-mono text-xs text-[#F20D18] font-bold uppercase tracking-wider block">
                  THE STRATEGIC CHALLENGE
                </span>
                <p className="font-space text-sm sm:text-base text-white/90 leading-relaxed">
                  {project.challenge}
                </p>
              </div>
            )}

            {project.approach && (
              <div className="space-y-3">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                  // 02 · CREATIVE & TECHNICAL METHODOLOGY
                </span>
                <h3 className="font-anton text-2xl sm:text-4xl uppercase tracking-tight text-white">
                  OUR APPROACH
                </h3>
                <p className="font-space text-base text-white/80 leading-relaxed">
                  {project.approach}
                </p>
              </div>
            )}
          </div>

          {/* Right Column: Deliverables & Tags */}
          <div className="lg:col-span-5 space-y-8 bg-[#101010] border border-white/10 p-6 sm:p-8">
            <div className="space-y-4">
              <div className="border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                  DELIVERABLES & SCOPE ({project.deliverables.length})
                </span>
              </div>
              <ul className="space-y-3 font-mono text-xs text-white/90">
                {project.deliverables.map((d, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#F20D18] shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>

            {project.tags && project.tags.length > 0 && (
              <div className="space-y-3 pt-6 border-t border-white/10">
                <span className="font-mono text-[11px] text-white/50 tracking-widest uppercase block">
                  TAXONOMY & CAPABILITY TAGS
                </span>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 bg-white/5 border border-white/10 font-mono text-[11px] text-white/70 uppercase tracking-wider"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {project.credits && (
              <div className="space-y-2 pt-6 border-t border-white/10 font-mono text-xs">
                <span className="text-white/40 tracking-widest uppercase block">
                  PRODUCTION CREDITS
                </span>
                <div className="text-white space-y-1">
                  <div>
                    <span className="text-white/50">DIRECTION: </span>
                    <span className="font-bold">{project.credits.director || "Anand Bhairav"}</span>
                  </div>
                  <div>
                    <span className="text-white/50">AGENCY: </span>
                    <span className="font-bold">AFTER THAT ENTERTAINMENT LLP</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Visual Showcase Gallery */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                // 03 · VISUAL ARCHIVE
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
                PROJECT GALLERY
              </h2>
            </div>
            <span className="font-mono text-xs text-white/50">
              CLICK ANY ASSET TO EXPAND FULL SCREEN ({allImages.length} ASSETS)
            </span>
          </div>

          {/* Varied Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {allImages.map((image, index) => {
              const isFull = index === 0 || index === 3;
              return (
                <div
                  key={index}
                  onClick={() => handleOpenViewer(index)}
                  data-cursor="EXPAND"
                  className={`${
                    isFull ? "md:col-span-2" : "md:col-span-1"
                  } group relative bg-[#0e0e0e] border border-white/10 hover:border-[#F20D18] transition-all duration-300 overflow-hidden cursor-pointer flex flex-col justify-between`}
                >
                  <div
                    className={`relative w-full bg-black overflow-hidden ${
                      isFull ? "aspect-[16/9] md:aspect-[21/9]" : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-contain md:object-cover p-2 md:p-0 group-hover:scale-104 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 1200px"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                    <div className="absolute top-3 right-3 w-9 h-9 rounded-full bg-black/80 border border-white/20 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      <Maximize2 className="w-4 h-4 text-[#F20D18]" />
                    </div>
                  </div>

                  {/* Caption & Source Bar */}
                  <div className="p-4 bg-[#111111] border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 font-mono text-[11px] text-white/70">
                    <span className="text-white font-medium truncate">
                      {image.caption || image.alt}
                    </span>
                    {image.sourcePdf && (
                      <span className="text-white/40 flex items-center gap-1.5 shrink-0">
                        <FileText className="w-3 h-3 text-[#F20D18]" />
                        <span>PDF P.{image.sourcePage}</span>
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Related Projects */}
        {relatedProjects.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-white/10">
            <div>
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                // 04 · EXPLORE MORE
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
                RELATED CASE STUDIES
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {relatedProjects.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/work/${rel.slug}`}
                  onClick={() => sound.playClick()}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="VIEW"
                  className="group bg-[#0e0e0e] border border-white/10 hover:border-[#F20D18] transition-all p-4 sm:p-6 block space-y-4"
                >
                  <div className="relative w-full aspect-[16/9] bg-black overflow-hidden border border-white/5">
                    <Image
                      src={rel.coverImage}
                      alt={rel.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 600px"
                    />
                  </div>
                  <div>
                    <span className="font-mono text-[10px] text-[#F20D18] tracking-widest font-bold uppercase block mb-1">
                      // {rel.categoryLabel}
                    </span>
                    <h3 className="font-anton text-2xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                      {rel.title}
                    </h3>
                    <p className="font-space text-xs text-white/70 line-clamp-2 mt-1">
                      {rel.headline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom Project Pagination & Conversion Callout */}
        <section className="pt-12 border-t border-white/10 space-y-12">
          {/* Previous / Next Navigation */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex items-center justify-between group transition-all"
            >
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase flex items-center gap-1.5">
                  <ArrowLeft className="w-3 h-3 text-[#F20D18]" /> PREVIOUS PROJECT
                </span>
                <h4 className="font-anton text-xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                  {prevProject.title}
                </h4>
              </div>
            </Link>

            <Link
              href={`/work/${nextProject.slug}`}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex items-center justify-between group transition-all text-right"
            >
              <div className="space-y-1 ml-auto">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase flex items-center gap-1.5 justify-end">
                  NEXT PROJECT <ArrowRight className="w-3 h-3 text-[#F20D18]" />
                </span>
                <h4 className="font-anton text-xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                  {nextProject.title}
                </h4>
              </div>
            </Link>
          </div>

          {/* Start a project callout */}
          <div className="bg-[#121212] border-2 border-white/10 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
              // READY TO BUILD SOMETHING IMPOSSIBLE TO IGNORE?
            </span>
            <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight max-w-3xl mx-auto">
              HAVE A VISION FOR YOUR BRAND OR PRODUCT?
            </h3>
            <p className="font-space text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              From identity and packaging to commercial advertisements, digital campaigns, and custom software — let&apos;s talk.
            </p>
            <div className="pt-2">
              <Link
                href="/#contact"
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                data-cursor="COMMISSION"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-colors shadow-[0_0_25px_rgba(242,13,24,0.5)]"
              >
                <span>START A PROJECT</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Full-Screen Image Viewer Modal */}
      <ImageViewerModal
        images={allImages}
        currentIndex={viewerIndex}
        isOpen={viewerOpen}
        onClose={() => setViewerOpen(false)}
        onNavigate={setViewerIndex}
      />
    </div>
  );
}
