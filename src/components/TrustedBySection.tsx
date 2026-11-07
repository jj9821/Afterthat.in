"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ShieldCheck,
  CheckCircle2,
  ArrowUpRight,
  ExternalLink,
  Sparkles,
  X,
  Building2,
  FileCheck2,
} from "lucide-react";
import clientLogosRaw from "@/data/client-logos.json";
import { ClientLogo } from "@/types/client";
import { sound } from "@/utils/sound";

const CLIENTS = clientLogosRaw as ClientLogo[];

type CategoryFilter =
  | "ALL"
  | "RETAIL & FMCG"
  | "FINANCE & TECH"
  | "HEALTHCARE"
  | "FASHION & LUXURY"
  | "INDUSTRIAL & ENERGY";

const CATEGORY_MAP: Record<CategoryFilter, string[]> = {
  "ALL": [],
  "RETAIL & FMCG": ["lulu", "milma", "nandini", "pothys", "hapeats"],
  "FINANCE & TECH": ["au-small-finance-bank", "aptvel", "selzer-polymers"],
  "HEALTHCARE": [
    "sunrise-hospital",
    "kairali-group",
    "agali-herbal",
    "evogen",
    "rajakad-medical-centre",
  ],
  "FASHION & LUXURY": [
    "dizzire",
    "nolta",
    "maharani-wedding-collections",
    "quppayam-boutique",
  ],
  "INDUSTRIAL & ENERGY": ["selzer-polymers", "tejas-solar"],
};

export default function TrustedBySection() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("ALL");
  const [activeClient, setActiveClient] = useState<ClientLogo | null>(null);

  // Background scroll locking when modal is open
  useEffect(() => {
    if (activeClient) {
      document.documentElement.classList.add("modal-open");
      document.body.classList.add("modal-open");
    } else {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveClient(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.documentElement.classList.remove("modal-open");
      document.body.classList.remove("modal-open");
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeClient]);

  const filteredClients = useMemo(() => {
    if (activeCategory === "ALL") return CLIENTS;
    const allowedSlugs = CATEGORY_MAP[activeCategory] || [];
    return CLIENTS.filter((c) => allowedSlugs.includes(c.id));
  }, [activeCategory]);

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: "ALL", label: "ALL BRANDS", count: CLIENTS.length },
    {
      key: "RETAIL & FMCG",
      label: "RETAIL & FMCG",
      count: CATEGORY_MAP["RETAIL & FMCG"].length,
    },
    {
      key: "FINANCE & TECH",
      label: "FINANCE & TECH",
      count: CATEGORY_MAP["FINANCE & TECH"].length,
    },
    {
      key: "HEALTHCARE",
      label: "HEALTHCARE",
      count: CATEGORY_MAP["HEALTHCARE"].length,
    },
    {
      key: "FASHION & LUXURY",
      label: "FASHION & LUXURY",
      count: CATEGORY_MAP["FASHION & LUXURY"].length,
    },
    {
      key: "INDUSTRIAL & ENERGY",
      label: "INDUSTRIAL & ENERGY",
      count: CATEGORY_MAP["INDUSTRIAL & ENERGY"].length,
    },
  ];

  // Marquee split into dual rows
  const row1 = useMemo(() => CLIENTS.slice(0, 9), []);
  const row2 = useMemo(() => CLIENTS.slice(9, 18), []);

  const handleOpenClient = (client: ClientLogo) => {
    sound.playClick();
    setActiveClient(client);
  };

  const handleCloseModal = () => {
    sound.playClick();
    setActiveClient(null);
  };

  return (
    <section
      id="clients"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 border-b border-white/10 overflow-hidden"
    >
      {/* Subtle Background Grids and Accents */}
      <div className="absolute inset-0 subtle-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#F20D18]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full px-5 sm:px-8 md:px-12 relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// ENTERPRISE ROSTER</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60 tracking-widest">
                VERIFIED BRAND PARTNERSHIPS
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              TRUSTED <span className="text-[#F20D18]">BY.</span>
            </h2>
            <p className="font-mono text-sm sm:text-base text-white/80 font-medium tracking-wide uppercase">
              GOOD IDEAS BRING GOOD PEOPLE TOGETHER.
            </p>
          </div>

          <div className="max-w-xl font-mono text-xs text-[#888888] leading-relaxed space-y-4">
            <p>
              From household multinational retail conglomerates and scheduled
              commercial banking leaders to pioneering FMCG enterprises, state
              dairy cooperatives, tertiary healthcare institutions, and luxury
              fashion brands — we engineer visual distinction and commercial
              velocity for leaders who refuse to blend in.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-[11px] font-mono text-white/60 pt-2 border-t border-white/10">
              <span className="flex items-center gap-1.5 text-white">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D18]" />
                18 Visionary Brands
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-[#F20D18]" />
                Official Source Verified
              </span>
              <span className="text-white/20">|</span>
              <span className="flex items-center gap-1.5 text-white">
                <FileCheck2 className="w-3.5 h-3.5 text-[#F20D18]" />
                4 Active Case Studies
              </span>
            </div>
          </div>
        </div>

        {/* 1. Continuous Kinetic Ticker Marquee Layer */}
        <div className="space-y-4">
          <div className="flex items-center justify-between text-xs font-mono text-white/40 tracking-widest uppercase">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-pulse" />
              LIVE BRAND STREAM · HOVER TO PAUSE
            </span>
            <span className="hidden sm:inline">18 / 18 ACTIVE PARTNERSHIPS</span>
          </div>

          {/* Row 1: Leftward infinite marquee */}
          <div className="relative w-full overflow-hidden border-y border-white/10 py-4 bg-white/[0.015]">
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee flex items-center gap-6">
              {[...row1, ...row1, ...row1].map((client, idx) => (
                <button
                  key={`marquee-row1-${client.id}-${idx}`}
                  onClick={() => handleOpenClient(client)}
                  onMouseEnter={() => sound.playHover()}
                  className="group flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#F20D18]/50 transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <div className="w-24 h-9 relative flex items-center justify-center bg-white rounded px-2 py-1 shadow-sm group-hover:scale-105 transition-transform">
                    <Image
                      src={client.logoPath}
                      alt={client.name}
                      fill
                      className="object-contain p-1"
                      sizes="120px"
                    />
                  </div>
                  <div className="text-left border-l border-white/10 pl-3">
                    <div className="font-space text-xs font-bold text-white group-hover:text-[#F20D18] transition-colors whitespace-nowrap">
                      {client.name}
                    </div>
                    <div className="font-mono text-[9px] text-white/50 tracking-wider uppercase whitespace-nowrap">
                      {client.category}
                    </div>
                  </div>
                  {client.caseStudySlug && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#F20D18]/20 text-[#F20D18] border border-[#F20D18]/40 tracking-wider uppercase">
                      CASE STUDY
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Row 2: Rightward infinite marquee */}
          <div className="relative w-full overflow-hidden border-b border-white/10 py-4 bg-white/[0.015]">
            <div className="absolute left-0 inset-y-0 w-24 bg-gradient-to-r from-[#0A0A0A] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 inset-y-0 w-24 bg-gradient-to-l from-[#0A0A0A] to-transparent z-10 pointer-events-none" />

            <div className="animate-marquee-reverse flex items-center gap-6">
              {[...row2, ...row2, ...row2].map((client, idx) => (
                <button
                  key={`marquee-row2-${client.id}-${idx}`}
                  onClick={() => handleOpenClient(client)}
                  onMouseEnter={() => sound.playHover()}
                  className="group flex items-center gap-4 px-5 py-2.5 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-[#F20D18]/50 transition-all duration-300 flex-shrink-0 cursor-pointer"
                >
                  <div className="w-24 h-9 relative flex items-center justify-center bg-white rounded px-2 py-1 shadow-sm group-hover:scale-105 transition-transform">
                    <Image
                      src={client.logoPath}
                      alt={client.name}
                      fill
                      className="object-contain p-1"
                      sizes="120px"
                    />
                  </div>
                  <div className="text-left border-l border-white/10 pl-3">
                    <div className="font-space text-xs font-bold text-white group-hover:text-[#F20D18] transition-colors whitespace-nowrap">
                      {client.name}
                    </div>
                    <div className="font-mono text-[9px] text-white/50 tracking-wider uppercase whitespace-nowrap">
                      {client.category}
                    </div>
                  </div>
                  {client.caseStudySlug && (
                    <span className="font-mono text-[9px] px-2 py-0.5 rounded bg-[#F20D18]/20 text-[#F20D18] border border-[#F20D18]/40 tracking-wider uppercase">
                      CASE STUDY
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* 2. Interactive Category Filter Bar */}
        <div className="space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#F20D18] tracking-widest uppercase">
                // EXPLORE BY VERTICAL
              </span>
              <span className="text-white/30 font-mono">·</span>
              <span className="font-mono text-xs text-white/50 tracking-wider">
                {filteredClients.length} of {CLIENTS.length} Brands Shown
              </span>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    key={cat.key}
                    onClick={() => {
                      sound.playClick();
                      setActiveCategory(cat.key);
                    }}
                    onMouseEnter={() => sound.playHover()}
                    className={`font-mono text-xs px-3.5 py-1.5 rounded transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                      isActive
                        ? "bg-[#F20D18] text-white border-[#F20D18] font-bold shadow-[0_0_15px_rgba(242,13,24,0.35)]"
                        : "bg-white/[0.04] text-white/60 border-white/10 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-[10px] px-1.5 py-0.2 rounded ${
                        isActive
                          ? "bg-white text-black font-bold"
                          : "bg-white/10 text-white/60"
                      }`}
                    >
                      {cat.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3. Responsive Logo Matrix Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 md:gap-5">
            {filteredClients.map((client, index) => {
              const hasCaseStudy = !!client.caseStudySlug;

              return (
                <div
                  key={client.id}
                  onClick={() => handleOpenClient(client)}
                  onMouseEnter={() => sound.playHover()}
                  className="group relative bg-[#111111] hover:bg-[#161616] border border-white/10 hover:border-[#F20D18]/60 rounded-lg p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:shadow-[0_0_30px_rgba(242,13,24,0.12)] hover:-translate-y-1 cursor-pointer min-h-[220px]"
                >
                  {/* Card Corner Index & Verification Pill */}
                  <div className="flex items-center justify-between w-full mb-2">
                    <span className="font-mono text-[10px] text-white/30 group-hover:text-white/60 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>

                    <span className="flex items-center gap-1 font-mono text-[9px] text-[#F20D18] tracking-widest uppercase bg-[#F20D18]/10 px-1.5 py-0.5 rounded border border-[#F20D18]/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F20D18]" />
                      VERIFIED
                    </span>
                  </div>

                  {/* Centered Gallery-Mat Canvas Frame */}
                  <div className="relative w-full h-24 sm:h-28 rounded-md bg-white p-2.5 sm:p-3 flex items-center justify-center shadow-inner group-hover:scale-[1.03] transition-transform duration-300 my-auto">
                    <div className="relative w-full h-full">
                      <Image
                        src={client.logoPath}
                        alt={`${client.name} logo`}
                        fill
                        className="object-contain"
                        sizes="(max-width: 640px) 160px, (max-width: 1024px) 240px, 300px"
                      />
                    </div>
                  </div>

                  {/* Bottom Meta & Action */}
                  <div className="w-full pt-3 border-t border-white/5 space-y-1">
                    <h3 className="font-space font-bold text-xs sm:text-sm text-white group-hover:text-[#F20D18] transition-colors line-clamp-1">
                      {client.name}
                    </h3>
                    <p className="font-mono text-[10px] text-white/50 tracking-wide line-clamp-1 uppercase">
                      {client.category}
                    </p>

                    {/* Bottom Status / Case Study Indicator */}
                    <div className="pt-2 flex items-center justify-between text-[10px] font-mono">
                      {hasCaseStudy ? (
                        <span className="inline-flex items-center gap-1 text-[#F20D18] font-bold group-hover:underline">
                          CASE STUDY
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      ) : (
                        <span className="text-white/30 group-hover:text-white/70 transition-colors inline-flex items-center gap-1">
                          BRIEF
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      )}

                      <span className="text-[9px] text-white/20 uppercase font-mono">
                        {client.originalFormat.toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Strategic Bottom Banner with Case Study Highlights */}
        <div className="relative rounded-xl border border-white/10 bg-gradient-to-r from-white/[0.02] via-[#F20D18]/5 to-white/[0.02] p-6 sm:p-8 md:p-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#F20D18]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2 font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                <Sparkles className="w-3.5 h-3.5" />
                <span>CASE STUDY ARCHIVE</span>
              </div>
              <h3 className="font-anton text-2xl sm:text-3xl md:text-4xl tracking-tight uppercase text-white">
                EXPLORE DEEP-DIVE CREATIVE DOCUMENTATION
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#888888] leading-relaxed">
                Discover our end-to-end creative campaigns, identity architectures,
                FMCG packaging systems, and visual productions across flagship clients.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                href="/work/dizzire-silk-and-sarees"
                onClick={() => sound.playClick()}
                className="font-mono text-xs px-5 py-3 rounded bg-[#F20D18] hover:bg-[#d60a14] text-white font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-[0_0_20px_rgba(242,13,24,0.3)] hover:shadow-[0_0_30px_rgba(242,13,24,0.5)] cursor-pointer"
              >
                <span>DIZZIRE SILKS CASE STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/work/hapeats-fmcg-packaging"
                onClick={() => sound.playClick()}
                className="font-mono text-xs px-5 py-3 rounded bg-white/10 hover:bg-white/20 text-white font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 border border-white/20 cursor-pointer"
              >
                <span>HAPEATS FMCG STUDY</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* 5. Client Dossier & Intelligence Modal */}
      {activeClient && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 modal-backdrop bg-black/80 backdrop-blur-md transition-opacity duration-300"
          onClick={handleCloseModal}
          role="dialog"
          aria-modal="true"
          aria-label={`${activeClient.name} Client Brief`}
        >
          <div
            className="relative w-full max-w-2xl bg-[#111111] border border-white/20 rounded-xl shadow-2xl overflow-hidden modal-content modal-content-scroll text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between border-b border-white/10 px-6 py-4 bg-white/[0.02]">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                  // CLIENT DOSSIER
                </span>
                <span className="text-white/30 font-mono">/</span>
                <span className="flex items-center gap-1 font-mono text-[10px] text-green-400 bg-green-500/10 px-2 py-0.5 rounded border border-green-500/20 uppercase">
                  <ShieldCheck className="w-3 h-3" />
                  {activeClient.verificationStatus.replace(/_/g, " ")}
                </span>
              </div>

              <button
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-white/60 hover:text-white transition-colors cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6">
              {/* Highlighted Logo Canvas */}
              <div className="relative w-full h-44 sm:h-52 rounded-lg bg-white border border-white/10 flex items-center justify-center p-6 shadow-inner">
                <div className="relative w-full h-full max-w-md">
                  <Image
                    src={activeClient.logoPath}
                    alt={`${activeClient.name} official logo`}
                    fill
                    className="object-contain"
                    sizes="500px"
                    priority
                  />
                </div>
              </div>

              {/* Title & Category */}
              <div className="space-y-1">
                <h3 className="font-anton text-2xl sm:text-3xl uppercase tracking-tight text-white">
                  {activeClient.name}
                </h3>
                <div className="flex items-center gap-3 font-mono text-xs text-white/60">
                  <span className="text-[#F20D18] font-bold uppercase">
                    {activeClient.category}
                  </span>
                  <span>·</span>
                  <span>ID: {activeClient.slug}</span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="font-mono text-xs text-white/40 uppercase tracking-widest">
                  // OVERVIEW & SCOPE
                </h4>
                <p className="font-mono text-xs sm:text-sm text-[#CCCCCC] leading-relaxed">
                  {activeClient.description}
                </p>
              </div>

              {/* Technical Engagement Notes */}
              <div className="space-y-2 p-4 rounded bg-white/[0.02] border border-white/5">
                <h4 className="font-mono text-[11px] text-[#F20D18] font-bold uppercase tracking-widest flex items-center gap-1.5">
                  <Building2 className="w-3.5 h-3.5" />
                  AGENCY ENGAGEMENT & VERIFICATION NOTES
                </h4>
                <p className="font-mono text-xs text-white/70 leading-relaxed">
                  {activeClient.notes}
                </p>
              </div>

              {/* Asset Technical Specs */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 font-mono text-[11px]">
                <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-white/40 uppercase">Format</div>
                  <div className="text-white font-bold uppercase mt-0.5">
                    {activeClient.originalFormat.toUpperCase()} MASTER
                  </div>
                </div>

                <div className="p-3 rounded bg-white/[0.03] border border-white/5">
                  <div className="text-white/40 uppercase">Resolution</div>
                  <div className="text-white font-bold mt-0.5">
                    {activeClient.dimensions.width} ×{" "}
                    {activeClient.dimensions.height}
                  </div>
                </div>

                <div className="p-3 rounded bg-white/[0.03] border border-white/5 col-span-2 sm:col-span-1">
                  <div className="text-white/40 uppercase">Source Type</div>
                  <div className="text-white font-bold uppercase mt-0.5 truncate">
                    {activeClient.sourceType.replace(/_/g, " ")}
                  </div>
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  {activeClient.caseStudySlug && (
                    <Link
                      href={activeClient.caseStudySlug}
                      onClick={() => sound.playClick()}
                      className="font-mono text-xs px-5 py-2.5 rounded bg-[#F20D18] hover:bg-[#d60a14] text-white font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-[0_0_15px_rgba(242,13,24,0.3)] cursor-pointer"
                    >
                      <span>VIEW FULL CASE STUDY</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  )}

                  {activeClient.sourceUrl &&
                    activeClient.sourceUrl.startsWith("http") && (
                      <a
                        href={activeClient.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-mono text-xs px-4 py-2.5 rounded bg-white/5 hover:bg-white/10 text-white/80 hover:text-white font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 border border-white/10 cursor-pointer"
                      >
                        <span>BRAND PORTAL</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}
                </div>

                <button
                  onClick={handleCloseModal}
                  className="font-mono text-xs px-4 py-2.5 rounded bg-transparent hover:bg-white/5 text-white/50 hover:text-white transition-colors cursor-pointer"
                >
                  DISMISS [ESC]
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
