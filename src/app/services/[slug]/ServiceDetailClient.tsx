"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { SEOServiceData } from "@/data/seo-services";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";

interface ServiceDetailClientProps {
  service: SEOServiceData;
}

export default function ServiceDetailClient({ service }: ServiceDetailClientProps) {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    sound.playClick();
    setOpenFaqIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-[#F20D18] selection:text-white relative">
      <CustomCursor />
      <Navbar />

      {/* Breadcrumb Navigation Bar */}
      <nav
        aria-label="Breadcrumb"
        className="pt-28 md:pt-32 px-5 sm:px-8 md:px-12 max-w-[1720px] mx-auto w-full"
      >
        <ol className="flex flex-wrap items-center gap-2 font-mono text-[11px] text-[#888888] tracking-widest uppercase">
          <li>
            <Link
              href="/"
              onMouseEnter={() => sound.playHover()}
              className="hover:text-white transition-colors"
            >
              HOME
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <li>
            <Link
              href="/services"
              onMouseEnter={() => sound.playHover()}
              className="hover:text-white transition-colors"
            >
              SERVICES
            </Link>
          </li>
          <ChevronRight className="w-3 h-3 text-white/30" />
          <li className="text-[#F20D18] font-bold" aria-current="page">
            {service.shortTitle}
          </li>
        </ol>
      </nav>

      {/* Main Service Hero Section */}
      <header className="pt-8 pb-16 md:pb-24 px-5 sm:px-8 md:px-12 border-b border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
        <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-8">
          {/* Eyebrow & Index Indicator */}
          <div className="flex flex-wrap items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
            <span>// VERTICAL {service.number}</span>
            <span className="text-white/30">/</span>
            <span className="text-white/60 tracking-widest">{service.heroEyebrow}</span>
          </div>

          {/* Primary H1 Heading */}
          <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl lg:text-9xl tracking-tight uppercase text-white leading-[0.92]">
            {service.h1.replace(/\s*(in\s+)?india$/i, "")}{" "}
            <span className="text-[#F20D18] inline-block">
              {service.h1.toLowerCase().includes("in india") ? "IN INDIA." : "INDIA."}
            </span>
          </h1>

          {/* Headline & Narrative Lead */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            <div className="lg:col-span-7 space-y-4">
              <p className="font-anton text-xl sm:text-2xl md:text-3xl text-[#F20D18] uppercase tracking-wide leading-tight">
                {service.tagline}
              </p>
              <p className="font-syne text-base sm:text-lg md:text-xl text-white/80 font-medium leading-relaxed">
                {service.narrativeLead}
              </p>
            </div>

            {/* Quick Spec & Engagement Telemetry Box */}
            <div className="lg:col-span-5 bg-[#121212] border border-white/10 p-6 md:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4 font-mono text-xs">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#888888] uppercase">ENGAGEMENT SPRINT:</span>
                  <span className="text-white font-bold">{service.timeline}</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#888888] uppercase">COMMERCIAL REACH:</span>
                  <span className="text-white font-bold">PAN-INDIA & GLOBAL</span>
                </div>
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span className="text-[#888888] uppercase">OPERATIONAL HUBS:</span>
                  <span className="text-white font-bold">KOCHI • BLR • AMD</span>
                </div>
                <div className="pt-2">
                  <span className="text-[#888888] block text-[10px] tracking-widest uppercase mb-1">
                    PRIMARY COMMERCIAL VALUE:
                  </span>
                  <p className="text-white text-xs font-syne font-bold leading-snug">
                    {service.commercialValue}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-2">
                <a
                  href="#contact-terminal"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="flex-1 py-3 px-5 bg-[#F20D18] hover:bg-white text-white hover:text-black font-anton text-base tracking-wider uppercase flex items-center justify-center gap-2 transition-colors duration-200"
                >
                  <span>COMMISSION VERTICAL</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#case-studies"
                  onMouseEnter={() => sound.playHover()}
                  onClick={() => sound.playClick()}
                  className="py-3 px-5 border border-white/20 hover:border-white text-white font-mono text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-colors"
                >
                  <span>VIEW CASE STUDIES</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Section 01: Business Problems Solved */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // 01. MARKET REALITY
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              BUSINESS PROBLEMS <span className="text-[#F20D18]">WE ELIMINATE.</span>
            </h2>
            <p className="font-syne text-white/70 max-w-2xl text-base sm:text-lg">
              We do not sell abstract creative theory. We diagnose the commercial bottleneck
              strangling your growth and engineer a definitive solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.businessProblemsSolved.map((item, idx) => {
              const parts = item.split(":");
              const title = parts[0];
              const desc = parts.slice(1).join(":");

              return (
                <div
                  key={idx}
                  className="bg-[#111111] border border-white/10 p-6 md:p-8 space-y-4 hover:border-[#F20D18] transition-colors group"
                >
                  <div className="flex items-center justify-between font-mono text-xs">
                    <span className="text-[#F20D18] font-bold">PROBLEM 0{idx + 1}</span>
                    <span className="w-2 h-2 rounded-full bg-[#F20D18] opacity-60 group-hover:opacity-100" />
                  </div>
                  <h3 className="font-anton text-xl sm:text-2xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                    {title}
                  </h3>
                  <p className="font-syne text-sm text-[#aaaaaa] leading-relaxed">
                    {desc.trim()}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 02: Strategic Framework & Methodology */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#080808]">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // 02. STRATEGIC RIGOR
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              {service.strategicApproach.heading.toUpperCase()}
            </h2>
            <p className="font-syne text-white/70 max-w-3xl text-base sm:text-lg">
              {service.strategicApproach.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {service.strategicApproach.steps.map((st) => (
              <div
                key={st.step}
                className="bg-[#0f0f0f] border border-white/10 p-6 flex flex-col justify-between space-y-6 hover:border-white/30 transition-colors"
              >
                <div className="space-y-3">
                  <div className="w-8 h-8 bg-white/5 border border-white/10 flex items-center justify-center font-mono text-xs font-bold text-[#F20D18]">
                    {st.step}
                  </div>
                  <h3 className="font-anton text-lg tracking-wide uppercase text-white">
                    {st.title}
                  </h3>
                </div>
                <p className="font-syne text-xs sm:text-sm text-[#888888] leading-relaxed">
                  {st.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 03: Deliverables & Capabilities Matrix */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // 03. FULL DELIVERABLE SPECIFICATION
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              WHAT YOU <span className="text-[#F20D18]">RECEIVE.</span>
            </h2>
            <p className="font-syne text-white/70 max-w-2xl text-base sm:text-lg">
              Tangible, high-craft deliverables with zero ambiguous handoffs. Every asset is
              mastered for commercial deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.deliverables.map((group, idx) => (
              <div
                key={idx}
                className="bg-[#111111] border border-white/10 p-8 space-y-6 relative overflow-hidden"
              >
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 bg-[#F20D18]" />
                  <h3 className="font-anton text-2xl uppercase tracking-wide text-white">
                    {group.category}
                  </h3>
                </div>

                <ul className="space-y-3 font-syne text-sm text-[#cccccc]">
                  {group.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-[#F20D18] shrink-0 mt-0.5" />
                      <span className="leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 04: Case Studies from Active Portfolio */}
      <section id="case-studies" className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
                // 04. PROVEN COMMERCIAL WORK
              </span>
              <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
                SELECTED <span className="text-[#F20D18]">CASE STUDIES.</span>
              </h2>
            </div>
            <Link
              href="/work"
              onMouseEnter={() => sound.playHover()}
              className="font-mono text-xs text-white/70 hover:text-[#F20D18] tracking-widest uppercase flex items-center gap-2 group transition-colors"
            >
              <span>VIEW COMPLETE CREATIVE ARCHIVE</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.caseStudies.map((project) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="group bg-[#111111] border border-white/10 overflow-hidden hover:border-[#F20D18] transition-colors flex flex-col justify-between"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/60">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.role}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                  />
                  <div className="absolute top-3 left-3 bg-black/80 backdrop-blur-sm px-2.5 py-1 font-mono text-[9px] text-white tracking-widest uppercase border border-white/10">
                    {project.category}
                  </div>
                </div>

                <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-anton text-xl uppercase tracking-wide text-white group-hover:text-[#F20D18] transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-syne text-xs text-[#888888] leading-snug">
                      {project.role}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/5 flex items-center justify-between font-mono text-[10px] text-[#F20D18]">
                    <span>EXPLORE CASE STUDY</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Section 05: Editorial FAQs */}
      <section className="py-20 px-5 sm:px-8 md:px-12 border-b border-white/10 bg-[#080808]">
        <div className="max-w-[1720px] mx-auto w-full space-y-12">
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              // 05. CLEAR ANSWERS
            </span>
            <h2 className="font-anton text-3xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
              FREQUENTLY ASKED <span className="text-[#F20D18]">QUESTIONS.</span>
            </h2>
            <p className="font-syne text-white/70 max-w-2xl text-base sm:text-lg">
              Transparent answers regarding timelines, deliverables, commercial scope, and
              engagement models.
            </p>
          </div>

          <div className="max-w-4xl space-y-4">
            {service.faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;

              return (
                <div
                  key={idx}
                  className="border border-white/10 bg-[#0e0e0e] transition-colors hover:border-white/20"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    onMouseEnter={() => sound.playHover()}
                    className="w-full py-5 px-6 flex items-center justify-between text-left gap-4"
                    aria-expanded={isOpen}
                  >
                    <span className="font-anton text-lg sm:text-xl uppercase tracking-wide text-white">
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#F20D18] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 border-t border-white/5 font-syne text-sm sm:text-base text-[#aaaaaa] leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Section 06: Contextual Commission CTA */}
      <section
        id="contact-terminal"
        className="py-24 px-5 sm:px-8 md:px-12 border-b border-white/10 relative overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-96 bg-[#F20D18]/10 blur-3xl pointer-events-none" />

        <div className="max-w-[1720px] mx-auto w-full relative z-10">
          <div className="bg-[#0f0f0f] border border-white/20 p-8 sm:p-12 md:p-16 space-y-8 max-w-5xl mx-auto">
            <div className="space-y-4 text-center">
              <div className="inline-flex items-center gap-2 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase bg-black/50 border border-white/10 px-4 py-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>INITIATE PROJECT COMMISSION</span>
              </div>
              <h2 className="font-anton text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-white">
                READY TO ELEVATE YOUR <span className="text-[#F20D18]">{service.shortTitle}?</span>
              </h2>
              <p className="font-syne text-base sm:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
                Connect directly with our strategic team in Kochi, Bangalore, or Ahmedabad to
                discuss requirements, timelines, and commercial scope.
              </p>
            </div>

            {/* Direct Contact Action Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-xs pt-4">
              <a
                href={`mailto:${COMPANY_INFO.contact.email}?subject=Project%20Inquiry:%20${encodeURIComponent(
                  service.title
                )}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="p-5 bg-black/60 border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
              >
                <Mail className="w-5 h-5 text-[#F20D18]" />
                <span className="text-[#888888] uppercase">EMAIL US DIRECTLY</span>
                <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                  {COMPANY_INFO.contact.email}
                </span>
              </a>

              <a
                href={COMPANY_INFO.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="p-5 bg-black/60 border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
              >
                <MessageSquare className="w-5 h-5 text-[#F20D18]" />
                <span className="text-[#888888] uppercase">INSTANT WHATSAPP</span>
                <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                  +91 96561 66555
                </span>
              </a>

              <a
                href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="p-5 bg-black/60 border border-white/10 hover:border-[#F20D18] flex flex-col items-center justify-center gap-2 text-center group transition-colors"
              >
                <Phone className="w-5 h-5 text-[#F20D18]" />
                <span className="text-[#888888] uppercase">DIRECT TELEPHONE</span>
                <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                  +91 96561 66555
                </span>
              </a>
            </div>

            {/* Jump to Interactive Homepage Inquiry Terminal */}
            <div className="text-center pt-2">
              <Link
                href="/#contact"
                onMouseEnter={() => sound.playHover()}
                onClick={() => sound.playClick()}
                className="inline-flex items-center gap-2 font-mono text-xs tracking-widest text-[#F20D18] hover:text-white uppercase font-bold transition-colors"
              >
                <span>OPEN FULL INTERACTIVE PROJECT COMMISSION TERMINAL</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
