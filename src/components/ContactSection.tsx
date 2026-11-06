"use client";

import { useState } from "react";
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Mail, Phone, MessageSquare, Globe, MapPin } from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import MagneticButton from "@/components/motion/MagneticButton";
import ScrambleText from "@/components/motion/ScrambleText";

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Brand Strategy & Identity",
    budget: "₹15L – ₹35L",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceOptions = [
    "Brand Strategy & Identity",
    "Advertising & Media Production",
    "Digital Marketing & Growth",
    "Website, App & Software Development",
    "PR, Celebrity & Brand Experiences",
    "AI Advertising & Creative Technology",
    "Integrated Multi-Vertical Partnership",
  ];

  const budgetOptions = [
    "Under ₹10 Lakhs",
    "₹10L – ₹25 Lakhs",
    "₹25L – ₹50 Lakhs",
    "₹50L – ₹1 Crore",
    "₹1 Crore+",
    "Flexible / Discussion Phase",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Submission error");
      }

      setStatus("success");
      sound.playHeavyImpact();

      // Launch celebratory particle confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#F20D18", "#ffffff", "#0A0A0A"],
        });
      } catch {
        // Fallback
      }

      // Reset form
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        service: "Brand Strategy & Identity",
        budget: "₹15L – ₹35L",
        description: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Network error. Please email connect@afterthat.in";
      setErrorMessage(msg);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Graphic Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute left-1/3 bottom-0 w-[500px] h-[500px] bg-[#F20D18]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 11</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                START A PROJECT · ENQUIRY TERMINAL
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              HAVE A PROJECT <span className="text-[#F20D18]">IN MIND?</span>
            </h2>
            <p className="font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-2xl leading-snug">
              Let&apos;s turn your next idea into something worth paying attention to.
            </p>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WHETHER YOU ARE LAUNCHING A BRAND, PRODUCING AN AD FILM, SCALING DIGITAL
              MARKETING, OR BUILDING A HIGH-PERFORMANCE WEB PLATFORM, WE ARE READY TO COLLABORATE.
            </p>
          </div>
        </div>

        {/* Contact Layout: Form on Left + Direct Channels & Hubs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Project Enquiry Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl space-y-8">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                PROJECT ENQUIRY TERMINAL
              </span>
              <p className="font-space text-sm text-[#aaaaaa]">
                Tell us about your brand, objectives, and required capabilities. We respond within 24 business hours.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Row 1: Name & Company */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    YOUR NAME *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rahul Menon"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm placeholder-white/30 focus:outline-none focus:border-[#F20D18] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    COMPANY / ORGANISATION
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Apex Ventures"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm placeholder-white/30 focus:outline-none focus:border-[#F20D18] transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="rahul@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm placeholder-white/30 focus:outline-none focus:border-[#F20D18] transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    PHONE / WHATSAPP NUMBER
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm placeholder-white/30 focus:outline-none focus:border-[#F20D18] transition-colors"
                  />
                </div>
              </div>

              {/* Row 3: Service Required (5 Verticals + AI) */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                  SERVICE REQUIRED *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                >
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#121212] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Estimated Budget (Optional) */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                  ESTIMATED BUDGET (OPTIONAL)
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                >
                  {budgetOptions.map((b) => (
                    <option key={b} value={b} className="bg-[#121212] text-white">
                      {b}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 5: Project Description */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                  PROJECT DESCRIPTION & OBJECTIVES *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Outline your brand challenges, target timeline, deliverables, or creative direction..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm placeholder-white/30 focus:outline-none focus:border-[#F20D18] transition-colors resize-none"
                />
              </div>

              {/* Feedback messages */}
              {status === "success" && (
                <div className="p-4 bg-[#F20D18]/15 border border-[#F20D18] flex items-center gap-3 font-mono text-xs text-white">
                  <CheckCircle2 className="w-5 h-5 text-[#F20D18] shrink-0" />
                  <span>
                    TRANSMISSION SUCCESSFUL. Your enquiry has reached our team. We will review and contact you shortly.
                  </span>
                </div>
              )}

              {status === "error" && (
                <div className="p-4 bg-red-950/40 border border-red-500 flex items-center gap-3 font-mono text-xs text-red-200">
                  <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Submit CTA Button */}
              <MagneticButton strength={0.25} className="w-full">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  onMouseEnter={() => sound.playHover()}
                  className="w-full py-4 px-8 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(242,13,24,0.4)] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{status === "submitting" ? "TRANSMITTING..." : "START A PROJECT"}</span>
                </button>
              </MagneticButton>
            </form>
          </div>

          {/* Right Column: Verified Direct Channels & Operational Hubs */}
          <div className="lg:col-span-5 space-y-8">
            {/* Quick Contact Card */}
            <div className="bg-[#111111] border border-white/15 p-8 space-y-6 shadow-xl">
              <div className="space-y-1 border-b border-white/10 pb-4">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                  DIRECT TRANSMISSION CHANNELS
                </span>
                <h3 className="font-anton text-2xl text-white uppercase">
                  TALK TO OUR LEADERSHIP
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                {/* Working Email */}
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="EMAIL"
                  className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] flex items-center justify-between transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-[#F20D18]" />
                    <div>
                      <span className="text-[10px] text-white/50 block">OFFICIAL EMAIL</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        {COMPANY_INFO.contact.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#F20D18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                {/* Working Phone Call */}
                <a
                  href={`tel:${COMPANY_INFO.contact.phone.replace(/\s+/g, "")}`}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="CALL"
                  className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] flex items-center justify-between transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-[#F20D18]" />
                    <div>
                      <span className="text-[10px] text-white/50 block">DIRECT TELEPHONE</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        {COMPANY_INFO.contact.phoneFormatted}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#F20D18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                {/* Working WhatsApp */}
                <a
                  href={COMPANY_INFO.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="WHATSAPP"
                  className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] flex items-center justify-between transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <MessageSquare className="w-4 h-4 text-[#F20D18]" />
                    <div>
                      <span className="text-[10px] text-white/50 block">INSTANT WHATSAPP CHAT</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        +91 96561 66555
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#F20D18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>

                {/* Working Instagram */}
                <a
                  href={COMPANY_INFO.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="INSTAGRAM"
                  className="p-4 bg-black/60 border border-white/10 hover:border-[#F20D18] flex items-center justify-between transition-colors group block"
                >
                  <div className="flex items-center gap-3">
                    <InstagramIcon className="w-4 h-4 text-[#F20D18]" />
                    <div>
                      <span className="text-[10px] text-white/50 block">INSTAGRAM FLAGSHIP</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        {COMPANY_INFO.contact.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#F20D18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Entity Verification Badge */}
            <div className="p-6 bg-[#121212] border border-[#F20D18]/40 space-y-3 font-mono text-xs">
              <div className="flex items-center justify-between">
                <span className="text-white font-bold">{COMPANY_INFO.legalName}</span>
                <span className="text-[#F20D18]">REGISTERED ENTITY</span>
              </div>
              <p className="text-[#888888] text-[11px] leading-relaxed">
                Integrated creative strategy, media production, performance marketing and technology development across Kochi, Bangalore and Ahmedabad.
              </p>
              <div className="pt-2 text-[10px] text-white/50 flex justify-between">
                <span>OFFICIAL DOMAIN:</span>
                <span className="text-white font-bold">{COMPANY_INFO.contact.websiteDisplay}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
