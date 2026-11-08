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
  TrendingUp,
  Compass,
  Crosshair,
  Layers,
  Sparkles,
  ExternalLink,
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

  const allImages =
    project.images && project.images.length > 0
      ? project.images
      : [
          {
            src: project.coverImage,
            alt: project.title,
            sourcePdf: "AFTER THAT Master Archive.pdf",
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

  // Determine matching service vertical for contact query
  const getServiceParam = () => {
    const cat = project.category.toLowerCase();
    if (cat.includes("brand") || cat.includes("fashion")) return "Brand Strategy & Identity";
    if (cat.includes("advert") || cat.includes("film")) return "Advertising & Media Production";
    if (cat.includes("digital") || cat.includes("market")) return "Digital Marketing & Growth";
    if (cat.includes("tech") || cat.includes("soft") || cat.includes("web"))
      return "Website, App & Software Development";
    if (cat.includes("event") || cat.includes("pr")) return "PR, Celebrity & Brand Experiences";
    if (cat.includes("ai")) return "AI Advertising & Creative Technology";
    return "Brand Strategy & Identity";
  };

  const contactUrl = `/#contact?service=${encodeURIComponent(getServiceParam())}&project=${encodeURIComponent(
    project.title
  )}`;

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white">
      <CustomCursor />

      {/* Top Fixed Minimal Case-Study Navigation */}
      <header className="fixed top-0 left-0 w-full z-40 bg-[#0A0A0A]/92 backdrop-blur-md border-b border-white/10 py-4 px-5 sm:px-8 md:px-12">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between">
          <Link
            href="/#work"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            data-cursor="BACK"
            className="flex items-center gap-2 font-mono text-xs text-white/70 hover:text-white group uppercase tracking-wider"
          >
            <ArrowLeft className="w-4 h-4 text-[#F20D18] group-hover:-translate-x-1 transition-transform" />
            <span className="hidden sm:inline">PORTFOLIO DIRECTORY</span>
            <span className="sm:hidden">BACK</span>
          </Link>

          <div className="hidden md:flex items-center gap-3 font-mono text-xs text-white/50">
            <span className="text-[#F20D18] font-bold">// CASE STUDY:</span>
            <span className="text-white font-bold uppercase truncate max-w-sm">
              {project.title}
            </span>
          </div>

          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={handleShare}
              onMouseEnter={() => sound.playHover()}
              className="flex items-center gap-1.5 px-3 py-1.5 border border-white/20 hover:border-white font-mono text-[11px] uppercase tracking-wider text-white transition-colors"
            >
              <Share2 className="w-3.5 h-3.5 text-[#F20D18]" />
              <span>{copied ? "COPIED" : "SHARE"}</span>
            </button>

            <Link
              href={contactUrl}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              data-cursor="COMMISSION"
              className="px-4 py-1.5 bg-[#F20D18] hover:bg-white hover:text-black font-mono text-xs font-bold uppercase tracking-wider text-white transition-colors shadow-[0_0_15px_rgba(242,13,24,0.4)]"
            >
              COMMISSION SPRINT
            </Link>
          </div>
        </div>
      </header>

      {/* Main Case Study Content Container */}
      <main className="pt-28 md:pt-36 pb-32 px-5 sm:px-8 md:px-12 max-w-[1720px] mx-auto space-y-16 md:space-y-24">
        {/* 1. PROJECT HEADER HERO & TELEMETRY */}
        <section className="space-y-6 md:space-y-8 border-b border-white/10 pb-12">
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs">
            <span className="px-3 py-1 bg-[#F20D18] text-white font-extrabold uppercase tracking-widest shadow-[0_0_12px_rgba(242,13,24,0.5)]">
              {project.categoryLabel}
            </span>
            {project.verified && (
              <span className="flex items-center gap-1.5 px-3 py-1 bg-white/5 border border-white/20 text-white font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F20D18]" />
                VERIFIED AGENCY ASSET
              </span>
            )}
            <span className="text-white/50 tracking-widest uppercase">
              // YEAR {project.year}
            </span>
            {project.industryVertical && (
              <span className="text-white/40 tracking-wider uppercase hidden sm:inline">
                // {project.industryVertical}
              </span>
            )}
          </div>

          <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl lg:text-9xl uppercase tracking-tight text-white leading-[0.92]">
            {project.title}
          </h1>

          <p className="font-space text-lg sm:text-2xl text-white/90 max-w-4xl leading-relaxed">
            {project.headline}
          </p>

          {/* Metadata Matrix */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 border-t border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest flex items-center gap-1">
                <Building2 className="w-3 h-3 text-[#F20D18]" /> CLIENT / ENTITY
              </span>
              <span className="text-white font-bold text-sm block">
                {project.client || "Confidential Partner"}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#F20D18]" /> LOCATION / REGION
              </span>
              <span className="text-white font-bold text-sm block">
                {project.marketLocation || project.location}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#F20D18]" /> RELEASE YEAR
              </span>
              <span className="text-white font-bold text-sm block">
                {project.year}
              </span>
            </div>

            <div className="space-y-1">
              <span className="text-white/40 uppercase tracking-widest flex items-center gap-1">
                <Tag className="w-3 h-3 text-[#F20D18]" /> PRIMARY VERTICAL
              </span>
              <span className="text-[#F20D18] font-bold text-sm block uppercase">
                {project.category}
              </span>
            </div>
          </div>
        </section>

        {/* HERO COVER MEDIA */}
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
            <span className="hidden sm:inline">EXPAND ARCHIVE VIEW</span>
          </button>

          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 font-mono text-xs text-white/80">
            <span className="bg-black/85 px-3 py-1.5 border border-white/20 uppercase tracking-wider">
              {allImages[0].caption || project.headline}
            </span>
          </div>
        </section>

        {/* 2 & 3. CLIENT BACKGROUND & THE STRATEGIC BUSINESS CHALLENGE */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Left Column: Client Background */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block flex items-center gap-2">
                <Compass className="w-3.5 h-3.5" />
                // 01 · CLIENT BACKGROUND & MARKET CONTEXT
              </span>
              <h2 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                THE MARKET LANDSCAPE
              </h2>
            </div>
            <p className="font-space text-base sm:text-lg text-white/80 leading-relaxed">
              {project.clientBackground || project.description}
            </p>
          </div>

          {/* Right Column: The Business Challenge Card */}
          <div className="lg:col-span-6 bg-[#111111] border-2 border-red-900/50 p-6 sm:p-8 relative overflow-hidden flex flex-col justify-between shadow-xl">
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#F20D18]/10 rounded-bl-full pointer-events-none" />
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2">
                  <Crosshair className="w-3.5 h-3.5" />
                  // 02 · THE STRATEGIC CHALLENGE
                </span>
                <span className="px-2 py-0.5 bg-red-950/60 text-red-300 font-mono text-[10px] uppercase font-bold border border-red-500/30">
                  CRITICAL HURDLE
                </span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white">
                THE CORE BOTTLENECK
              </h3>
              <p className="font-space text-base sm:text-lg text-white/90 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 font-mono text-xs text-white/50 flex items-center justify-between">
              <span>AFTER THAT ENTERTAINMENT LLP</span>
              <span className="text-[#F20D18] font-bold">PROBLEM DIAGNOSIS</span>
            </div>
          </div>
        </section>

        {/* 4 & 5. STRATEGIC APPROACH & CREATIVE DIRECTION */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Strategic Approach */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block flex items-center gap-2">
                <Layers className="w-3.5 h-3.5" />
                // 03 · STRATEGIC APPROACH & HYPOTHESIS
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                THE STRATEGIC THESIS
              </h3>
            </div>
            <p className="font-space text-base sm:text-lg text-white/80 leading-relaxed">
              {project.strategicApproach || project.approach}
            </p>
          </div>

          {/* Creative Direction */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                // 04 · CREATIVE DIRECTION & AESTHETIC FRAMEWORK
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                THE AESTHETIC SYSTEM
              </h3>
            </div>
            <p className="font-space text-base sm:text-lg text-white/80 leading-relaxed">
              {project.creativeDirection ||
                "A brutalist, high-craft creative execution marrying strategic brand storytelling with contemporary art direction, precision typography, and cinematic lighting designed to captivate national audiences."}
            </p>
          </div>
        </section>

        {/* 6 & 7. EXECUTION PROCESS & DELIVERABLES MATRIX */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">
          {/* Left Column: Execution Process */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block flex items-center gap-2">
                <Crosshair className="w-3.5 h-3.5" />
                // 05 · EXECUTION PROCESS & METHODOLOGY
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                PRODUCTION RUNWAY
              </h3>
            </div>
            <p className="font-space text-base sm:text-lg text-white/80 leading-relaxed">
              {project.executionProcess ||
                "Executed through multi-phase sprints—concept ideation, stakeholder alignment, production logistics, high-precision prototyping, studio shoots, and final print/broadcast/digital asset mastering."}
            </p>

            {project.credits && (
              <div className="p-6 bg-[#111111] border border-white/10 space-y-3 font-mono text-xs">
                <span className="text-[#F20D18] font-bold tracking-widest uppercase block">
                  PRODUCTION CREDITS & DISCIPLINE STEWARDS
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-white/80">
                  <div>
                    <span className="text-white/40 block text-[10px]">CREATIVE DIRECTION</span>
                    <span className="font-bold text-white">
                      {project.credits.director || "Anand Bhairav"}
                    </span>
                  </div>
                  <div>
                    <span className="text-white/40 block text-[10px]">AGENCY STEWARD</span>
                    <span className="font-bold text-white">AFTER THAT ENTERTAINMENT LLP</span>
                  </div>
                  {project.credits.strategy && (
                    <div>
                      <span className="text-white/40 block text-[10px]">STRATEGIC LEAD</span>
                      <span className="font-bold text-white">{project.credits.strategy}</span>
                    </div>
                  )}
                  {project.credits.dop && (
                    <div>
                      <span className="text-white/40 block text-[10px]">CINEMATOGRAPHY</span>
                      <span className="font-bold text-white">{project.credits.dop}</span>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Deliverables & Scope Grid */}
          <div className="lg:col-span-6 bg-[#101010] border border-white/10 p-6 sm:p-8 space-y-6">
            <div className="space-y-1 border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                // 06 · DELIVERABLES & SCOPE MATRIX ({project.deliverables.length})
              </span>
              <h3 className="font-anton text-2xl uppercase text-white">
                DELIVERED ASSETS
              </h3>
            </div>

            <ul className="space-y-3 font-mono text-xs text-white/90">
              {project.deliverables.map((d, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 bg-white/[0.02] p-3 border border-white/5 hover:border-[#F20D18] transition-colors"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#F20D18] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>

            {/* Campaign Applications */}
            {project.visualIdentityApplications &&
              project.visualIdentityApplications.length > 0 && (
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <span className="font-mono text-[11px] text-white/50 tracking-widest uppercase block">
                    CAMPAIGN & TOUCHPOINT DEPLOYMENTS
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {project.visualIdentityApplications.map((app, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 bg-[#161616] border border-white/10 font-mono text-[11px] text-white/80 uppercase tracking-wider"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </section>

        {/* 8. VISUAL IDENTITY & CAMPAIGN APPLICATIONS GALLERY */}
        <section className="space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                // 07 · VISUAL ARCHIVE & APPLICATION SHOWCASE
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

        {/* 9. FINAL OUTCOMES & VERIFIED IMPACT METRICS */}
        <section className="bg-[#101010] border border-white/15 p-8 sm:p-12 space-y-10 shadow-2xl relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#F20D18]/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="space-y-3 border-b border-white/10 pb-6">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block flex items-center gap-2">
              <TrendingUp className="w-3.5 h-3.5" />
              // 08 · FINAL OUTCOME & VERIFIED IMPACT
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
              MEASURABLE BUSINESS RESULT
            </h2>
            <p className="font-space text-base sm:text-xl text-white/90 max-w-4xl leading-relaxed">
              {project.outcomes ||
                "Delivered an enduring brand asset system with nationwide scalability, establishing undeniable category authority and sustained commercial value."}
            </p>
          </div>

          {/* Verified Metrics Cards */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              {project.metrics.map((metric, i) => (
                <div
                  key={i}
                  className="bg-black/60 border border-white/10 hover:border-[#F20D18] p-5 space-y-2 transition-colors"
                >
                  <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase block">
                    {metric.label}
                  </span>
                  <div className="font-anton text-2xl sm:text-3xl md:text-4xl text-[#F20D18] tracking-tight uppercase">
                    {metric.value}
                  </div>
                  {metric.detail && (
                    <span className="font-mono text-[11px] text-white/70 block leading-tight">
                      {metric.detail}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 10. RELATED IN-VAULT DISCOVERIES */}
        {relatedProjects.length > 0 && (
          <section className="space-y-8 pt-8 border-t border-white/10">
            <div>
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
                // 09 · RELATED CASE STUDIES & IN-VAULT DISCOVERIES
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl uppercase tracking-tight text-white">
                EXPLORE FURTHER
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
                  className="group bg-[#0e0e0e] border border-white/10 hover:border-[#F20D18] transition-all p-4 sm:p-6 block space-y-4 shadow-lg"
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

        {/* PREV / NEXT NAVIGATION */}
        <section className="pt-12 border-t border-white/10 space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Link
              href={`/work/${prevProject.slug}`}
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] flex items-center justify-between group transition-all"
            >
              <div className="space-y-1">
                <span className="font-mono text-[10px] text-white/50 tracking-widest uppercase flex items-center gap-1.5">
                  <ArrowLeft className="w-3 h-3 text-[#F20D18]" /> PREVIOUS CASE STUDY
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
                  NEXT CASE STUDY <ArrowRight className="w-3 h-3 text-[#F20D18]" />
                </span>
                <h4 className="font-anton text-xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                  {nextProject.title}
                </h4>
              </div>
            </Link>
          </div>

          {/* Start a project callout card */}
          <div className="bg-[#121212] border-2 border-white/10 p-8 sm:p-12 text-center space-y-6 relative overflow-hidden">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
              // READY TO BUILD SOMETHING IMPOSSIBLE TO IGNORE?
            </span>
            <h3 className="font-anton text-3xl sm:text-5xl md:text-6xl text-white uppercase tracking-tight max-w-3xl mx-auto">
              COMMISSION A SIMILAR PROJECT IN {project.categoryLabel}
            </h3>
            <p className="font-space text-sm sm:text-base text-white/70 max-w-xl mx-auto">
              From strategic identity systems to commercial ad films, high-converting digital campaigns, and custom web software—we partner with ambitious founders and national enterprises.
            </p>
            <div className="pt-2">
              <Link
                href={contactUrl}
                onClick={() => sound.playClick()}
                onMouseEnter={() => sound.playHover()}
                data-cursor="COMMISSION"
                className="inline-flex items-center gap-2 px-8 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-colors shadow-[0_0_25px_rgba(242,13,24,0.5)]"
              >
                <span>INITIATE PROJECT ENQUIRY</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* STICKY BOTTOM COMMISSION BAR */}
      <aside className="fixed bottom-0 left-0 w-full z-40 bg-[#0A0A0A]/95 backdrop-blur-md border-t border-white/10 py-3 px-5 sm:px-8">
        <div className="max-w-[1720px] mx-auto flex items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-ping" />
            <span className="text-white/60 hidden sm:inline uppercase">
              COMMISSION SLOTS OPEN // 2026–2027
            </span>
            <span className="text-white font-bold uppercase truncate max-w-xs md:max-w-md">
              LIKE WHAT YOU SEE IN {project.title.toUpperCase()}?
            </span>
          </div>

          <Link
            href={contactUrl}
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            data-cursor="COMMISSION"
            className="px-4 sm:px-6 py-2 bg-[#F20D18] text-white font-anton text-xs sm:text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-colors shrink-0 flex items-center gap-1.5 shadow-[0_0_15px_rgba(242,13,24,0.4)]"
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </aside>

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
