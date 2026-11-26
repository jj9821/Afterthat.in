"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  Plus,
  Minus,
  CheckCircle2,
  Layers,
  ArrowRight,
  Briefcase,
} from "lucide-react";
import { SERVICES, VerticalService } from "@/data/services";
import { sound } from "@/utils/sound";

export default function ServicesSection() {
  const [activeService, setActiveService] = useState<string>(SERVICES[0].id);

  const currentService: VerticalService =
    SERVICES.find((s) => s.id === activeService) || SERVICES[0];

  const handleSelect = (id: string) => {
    sound.playClick();
    setActiveService(id);
  };

  const handleCommissionClick = (serviceTitle: string) => {
    sound.playClick();
    const contactElem = document.querySelector("#contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
      window.dispatchEvent(
        new CustomEvent("afterthat:select-service", { detail: { service: serviceTitle } })
      );
    }
  };

  return (
    <section
      id="services"
      className="relative w-full bg-[#0A0A0A] text-white py-20 md:py-28 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[480px] h-[480px] bg-[#F20D18]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#FF4750] font-bold tracking-[0.28em] uppercase">
              <span>// SECTION 03</span>
              <span className="text-white/40" aria-hidden="true">/</span>
              <span className="text-white/75 tracking-widest">
                FIVE CORE CAPABILITY VERTICALS
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              INTEGRATED <span className="text-[#F20D18]">DISCIPLINES</span>
            </h2>
          </div>

          <p className="max-w-md font-mono text-xs text-[#C2C2C2] leading-relaxed">
            WE UNITE BRAND STRATEGY, COMMERCIAL AD FILMS, PERFORMANCE MARKETING,
            CUSTOM SOFTWARE &amp; PR UNDER ONE ACCOUNTABLE ROOF.
          </p>
        </div>

        {/* Split View: Streamlined Interactive Vertical Accordion + Sticky Editorial Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: 5 Focused Capability Verticals */}
          <div className="lg:col-span-7 space-y-3.5">
            {SERVICES.map((service) => {
              const isActive = activeService === service.id;
              const panelId = `service-panel-${service.id}`;
              const headerId = `service-header-${service.id}`;

              return (
                <div
                  key={service.id}
                  data-preview-img={service.bgImage}
                  className={`border transition-colors duration-200 ${
                    isActive
                      ? "bg-[#121212] border-[#F20D18]"
                      : "bg-[#0D0D0D] border-white/15 hover:border-white/35"
                  }`}
                >
                  {/* Accordion Header Trigger */}
                  <button
                    id={headerId}
                    type="button"
                    aria-expanded={isActive}
                    aria-controls={panelId}
                    onClick={() => handleSelect(service.id)}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor={isActive ? "ACTIVE" : "EXPAND"}
                    className="w-full p-5 sm:p-6 flex items-center justify-between text-left group gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#F20D18]"
                  >
                    <div className="flex items-baseline gap-4 sm:gap-5 min-w-0">
                      <span
                        className={`font-mono text-sm sm:text-base font-bold tracking-widest shrink-0 transition-colors ${
                          isActive
                            ? "text-[#FF4750]"
                            : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {service.number}
                      </span>
                      <div className="min-w-0">
                        <h3
                          className={`font-anton text-2xl sm:text-3xl md:text-4xl uppercase tracking-wide leading-tight transition-colors ${
                            isActive
                              ? "text-white"
                              : "text-white/80 group-hover:text-white"
                          }`}
                        >
                          {service.title}
                        </h3>
                        <span className="font-mono text-[11px] text-[#FF4750] tracking-wider uppercase block mt-1">
                          {service.tagline}
                        </span>
                      </div>
                    </div>

                    <div
                      aria-hidden="true"
                      className={`w-9 h-9 flex items-center justify-center shrink-0 border transition-colors duration-150 ${
                        isActive
                          ? "bg-[#F20D18] border-[#F20D18] text-white"
                          : "border-white/25 text-white group-hover:border-white"
                      }`}
                    >
                      {isActive ? (
                        <Minus className="w-4 h-4" />
                      ) : (
                        <Plus className="w-4 h-4" />
                      )}
                    </div>
                  </button>

                  {/* Streamlined Expanded Drawer */}
                  {isActive && (
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={headerId}
                      className="px-5 sm:px-6 pb-6 pt-4 border-t border-white/10 space-y-5"
                    >
                      {/* Positioning Statement & Strategic Approach */}
                      <div className="border-l-2 border-[#F20D18] pl-4 space-y-1.5">
                        <h4 className="font-anton text-lg sm:text-xl text-white uppercase tracking-wide leading-snug">
                          {service.headline}
                        </h4>
                        <p className="font-space text-sm text-[#D4D4D4] leading-relaxed">
                          {service.editorialIntro || service.description}
                        </p>
                      </div>

                      {/* Curated Distinct Deliverables (4-6 items) */}
                      <div className="space-y-2.5">
                        <span className="font-mono text-[11px] text-white/75 font-bold tracking-widest uppercase block">
                          CORE DELIVERABLES ({service.services.length})
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {service.services.map((item, i) => (
                            <div
                              key={i}
                              className="flex items-start gap-2.5 font-mono text-xs text-[#E5E5E5] bg-[#0A0A0A] p-2.5 border border-white/10"
                            >
                              <CheckCircle2
                                className="w-3.5 h-3.5 text-[#FF4750] shrink-0 mt-0.5"
                                aria-hidden="true"
                              />
                              <span className="leading-relaxed">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Focused 1-2 Case Study Proof Cards (Full-Bleed Dark/Clean Framing) */}
                      {service.projectReferences && service.projectReferences.length > 0 && (
                        <div className="space-y-2.5">
                          <span className="font-mono text-[11px] text-[#FF4750] font-bold tracking-widest uppercase flex items-center gap-2">
                            <Briefcase className="w-3.5 h-3.5" aria-hidden="true" />
                            <span>RELEVANT CASE STUDIES</span>
                          </span>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                            {service.projectReferences.slice(0, 2).map((ref) => (
                              <Link
                                key={ref.slug + ref.title}
                                href={`/work/${ref.slug}`}
                                onClick={() => sound.playClick()}
                                onMouseEnter={() => sound.playHover()}
                                data-cursor="CASE STUDY"
                                className="group/card bg-[#0A0A0A] border border-white/15 hover:border-[#F20D18] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,border-color] duration-200 ease-out overflow-hidden flex flex-col focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
                              >
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#121212]">
                                  <Image
                                    src={ref.image}
                                    alt={ref.title}
                                    fill
                                    loading="lazy"
                                    className="object-cover transition-transform duration-500 ease-out group-hover/card:scale-[1.03] motion-reduce:group-hover/card:scale-100"
                                    sizes="(max-width: 640px) 100vw, 340px"
                                  />
                                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
                                </div>
                                <div className="p-3.5 flex-1 flex flex-col justify-between gap-1.5 border-t border-white/10">
                                  <div className="flex items-center justify-between gap-2">
                                    <span className="font-mono text-[10px] text-[#FF4750] font-bold uppercase tracking-wider truncate">
                                      {ref.client}
                                    </span>
                                    <ArrowUpRight
                                      className="w-3.5 h-3.5 text-white/70 group-hover/card:text-[#F20D18] group-hover/card:translate-x-0.5 group-hover/card:-translate-y-0.5 transition-all shrink-0"
                                      aria-hidden="true"
                                    />
                                  </div>
                                  <h5 className="font-anton text-base uppercase text-white group-hover/card:text-[#F20D18] transition-colors truncate">
                                    {ref.title}
                                  </h5>
                                  <span className="font-mono text-[11px] text-[#B3B3B3] block truncate">
                                    {ref.role}
                                  </span>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Single Clear Commission Footer Action */}
                      <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-t border-white/10">
                        <span className="font-mono text-xs text-white/75">
                          {service.engagementModels?.[0] || `READY TO COMMISSION ${service.shortTitle}?`}
                        </span>
                        <button
                          type="button"
                          onClick={() => handleCommissionClick(service.title)}
                          onMouseEnter={() => sound.playHover()}
                          data-cursor="COMMISSION"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#F20D18] text-white font-anton text-xs uppercase tracking-wider hover:-translate-y-px hover:bg-white hover:text-black active:translate-y-px active:scale-[0.985] transition-[transform,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white shrink-0"
                        >
                          <span>COMMISSION THIS VERTICAL</span>
                          <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Sticky Editorial Preview Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-24 hidden lg:block">
            <div className="bg-[#121212] border border-white/15 p-5 space-y-5">
              {/* Media Preview Window */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-white/15">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService.id}
                    initial={{ opacity: 0.25 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0.25 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="relative w-full h-full"
                  >
                    <Image
                      src={currentService.bgImage}
                      alt={currentService.title}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="(max-width: 1280px) 42vw, 620px"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/25 pointer-events-none" />
                  </motion.div>
                </AnimatePresence>

                {/* Top Overlay Badge */}
                <div className="absolute top-3.5 left-3.5 bg-black/85 backdrop-blur-sm px-3 py-1 border border-white/20 font-mono text-[10px] text-white font-bold tracking-widest uppercase flex items-center gap-2">
                  <Layers className="w-3 h-3 text-[#F20D18]" aria-hidden="true" />
                  <span>VERTICAL {currentService.number} // ACTIVE</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 font-mono space-y-1">
                  <span className="text-[10px] text-[#FF4750] font-bold tracking-widest block uppercase">
                    CORE STRATEGIC MANDATE
                  </span>
                  <span className="text-sm font-bold text-white uppercase block line-clamp-1">
                    {currentService.headline}
                  </span>
                </div>
              </div>

              {/* Service Directive Quote */}
              <div className="p-4 bg-[#0A0A0A] border-l-2 border-[#F20D18] space-y-1">
                <p className="font-syne text-sm italic text-white/90">
                  &ldquo;{currentService.tagline}&rdquo;
                </p>
                <span className="font-mono text-[10px] text-[#B3B3B3] tracking-widest uppercase block pt-1">
                  AFTER THAT ENTERTAINMENT · CAPABILITY BLUEPRINT
                </span>
              </div>

              {/* Direct Semantic Action Button (No MagneticButton nested role wrapper) */}
              <button
                type="button"
                onClick={() => handleCommissionClick(currentService.title)}
                onMouseEnter={() => sound.playHover()}
                data-cursor="COMMISSION"
                className="w-full flex items-center justify-between px-5 py-4 bg-[#F20D18] text-white font-anton text-sm tracking-wider uppercase hover:-translate-y-px hover:bg-white hover:text-black active:translate-y-px active:scale-[0.985] transition-[transform,background-color,color] duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <span>COMMISSION {currentService.shortTitle}</span>
                <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
