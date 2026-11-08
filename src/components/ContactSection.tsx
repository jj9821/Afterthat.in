"use client";

import { useState, useEffect } from "react";
import {
  ArrowUpRight,
  Send,
  CheckCircle2,
  AlertCircle,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import confetti from "canvas-confetti";
import { COMPANY_INFO } from "@/data/company";
import { sound } from "@/utils/sound";
import MagneticButton from "@/components/motion/MagneticButton";

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

const SERVICE_OPTIONS = [
  "Brand Strategy & Identity",
  "Advertising & Media Production",
  "Digital Marketing & Growth",
  "Website, App & Software Development",
  "PR, Celebrity & Brand Experiences",
  "AI Advertising & Creative Technology",
  "Integrated Multi-Vertical Enterprise Partnership",
];

const BUDGET_OPTIONS = [
  "₹3L – ₹10 Lakhs (Sprint)",
  "₹10L – ₹25 Lakhs (Core Project)",
  "₹25L – ₹50 Lakhs (Integrated Campaign)",
  "₹50L – ₹1 Crore (Comprehensive National)",
  "₹1 Crore+ (Enterprise Flagship)",
  "Flexible / Exploratory Phase",
];

const CONTACT_METHODS = [
  "WhatsApp",
  "Phone Call",
  "Google Meet Video",
  "In-Person Hub Meeting",
];

const TIMELINE_OPTIONS = [
  "Immediate Priority (< 30 Days)",
  "1–3 Months (Q2 Launch)",
  "3–6 Months (Strategic Build)",
  "Q3 / Q4 Strategic Roadmap",
  "Flexible / Discovery Phase",
];

const HUB_OPTIONS = [
  "Remote / Pan-India Mandate",
  "Kochi Flagship Studio (Kerala)",
  "Bangalore Technology Lab (Karnataka)",
  "Ahmedabad Commercial Hub (Gujarat)",
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "Brand Strategy & Identity",
    budget: "₹10L – ₹25 Lakhs",
    preferredContactMethod: "WhatsApp",
    timeline: "1–3 Months (Q2 Launch)",
    preferredHub: "Remote / Pan-India Mandate",
    description: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  // Listen for custom event or hash query params to pre-populate service
  useEffect(() => {
    const handleSelectService = (e: Event) => {
      const customEvent = e as CustomEvent<{ service?: string }>;
      if (customEvent.detail && customEvent.detail.service) {
        const found = SERVICE_OPTIONS.find((opt) =>
          opt.toLowerCase().includes(customEvent.detail.service!.toLowerCase())
        );
        if (found) {
          setFormData((prev) => ({ ...prev, service: found }));
        }
      }
    };

    window.addEventListener("afterthat:select-service", handleSelectService);

    // Also parse window.location.search or hash
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const srvParam = params.get("service");
      if (srvParam) {
        const match = SERVICE_OPTIONS.find((opt) =>
          opt.toLowerCase().includes(srvParam.toLowerCase())
        );
        if (match) {
          setTimeout(() => {
            setFormData((prev) => ({ ...prev, service: match }));
          }, 0);
        }
      }
    }

    return () => {
      window.removeEventListener("afterthat:select-service", handleSelectService);
    };
  }, []);

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
          particleCount: 140,
          spread: 85,
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
        budget: "₹10L – ₹25 Lakhs",
        preferredContactMethod: "WhatsApp",
        timeline: "1–3 Months (Q2 Launch)",
        preferredHub: "Remote / Pan-India Mandate",
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
      <div className="absolute left-1/3 bottom-0 w-[550px] h-[550px] bg-[#F20D18]/12 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 12</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">
                COMMISSION TERMINAL · START A PROJECT
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              START A <span className="text-[#F20D18]">PROJECT</span>
            </h2>
            <p className="font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-2xl leading-snug">
              Let&apos;s build work that commands national attention and delivers measurable business impact.
            </p>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WHETHER YOU ARE LAUNCHING A CONSUMER BRAND, PRODUCING A CINEMATIC AD FILM, SCALING
              PAID MEDIA, OR ENGINEERING BESPOKE SOFTWARE, OUR LEADERSHIP IS READY TO COLLABORATE.
            </p>
          </div>
        </div>

        {/* Contact Layout: Form on Left + Direct Channels & Hubs on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Comprehensive Project Enquiry Form */}
          <div className="lg:col-span-7 bg-[#111111] border border-white/15 p-6 sm:p-10 md:p-12 shadow-2xl space-y-8">
            <div className="space-y-2 border-b border-white/10 pb-4">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase flex items-center gap-2">
                <Sparkles className="w-3.5 h-3.5" />
                PROJECT COMMISSION BRIEF
              </span>
              <p className="font-space text-sm text-[#aaaaaa]">
                Detail your brand challenge, required vertical, and target timeline. The AFTER THAT leadership team reviews and responds within 24 business hours.
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
                    placeholder="e.g. Apex Consumer Brands"
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
                    BUSINESS EMAIL *
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

              {/* Row 3: Service Required */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                  SERVICE REQUIRED *
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#121212] text-white">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Row 4: Budget & Timeline */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    APPROXIMATE BUDGET BRACKET
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                  >
                    {BUDGET_OPTIONS.map((b) => (
                      <option key={b} value={b} className="bg-[#121212] text-white">
                        {b}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    TARGET LAUNCH WINDOW
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                  >
                    {TIMELINE_OPTIONS.map((t) => (
                      <option key={t} value={t} className="bg-[#121212] text-white">
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 5: Preferred Contact Method & Hub */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    PREFERRED CONTACT METHOD
                  </label>
                  <select
                    value={formData.preferredContactMethod}
                    onChange={(e) =>
                      setFormData({ ...formData, preferredContactMethod: e.target.value })
                    }
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                  >
                    {CONTACT_METHODS.map((m) => (
                      <option key={m} value={m} className="bg-[#121212] text-white">
                        {m}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                    PREFERRED OPERATING HUB
                  </label>
                  <select
                    value={formData.preferredHub}
                    onChange={(e) => setFormData({ ...formData, preferredHub: e.target.value })}
                    className="w-full bg-black/60 border border-white/20 px-4 py-3 text-white font-space text-sm focus:outline-none focus:border-[#F20D18] transition-colors"
                  >
                    {HUB_OPTIONS.map((h) => (
                      <option key={h} value={h} className="bg-[#121212] text-white">
                        {h}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Row 6: Project Scope & Objectives */}
              <div className="space-y-2">
                <label className="font-mono text-xs uppercase tracking-wider text-white/80 block">
                  PROJECT DESCRIPTION & STRATEGIC OBJECTIVES *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell us about your brand, current challenges, desired deliverables, target timeline, or creative ambition..."
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
                    TRANSMISSION SUCCESSFUL. Your enquiry has reached the AFTER THAT leadership team. We will review and contact you within 24 business hours.
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
                  <span>{status === "submitting" ? "TRANSMITTING BRIEF..." : "COMMISSION PROJECT"}</span>
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
                  AGENCY LEADERSHIP ACCESS
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
                      <span className="text-[10px] text-white/50 block">DIRECT WHATSAPP DESK</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        Connect with Agency Directors
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
                      <span className="text-[10px] text-white/50 block">OFFICIAL INSTAGRAM</span>
                      <span className="text-white font-bold group-hover:text-[#F20D18] transition-colors">
                        {COMPANY_INFO.contact.instagramHandle}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#F20D18] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </div>
            </div>

            {/* Operating Presence Overview */}
            <div className="bg-[#111111] border border-white/15 p-6 space-y-4">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                REGIONAL OPERATIONAL HUBS
              </span>
              <div className="space-y-3 font-mono text-xs">
                {COMPANY_INFO.locations.cities.map((city, idx) => (
                  <div
                    key={idx}
                    className="p-3 bg-black/40 border border-white/10 flex items-start justify-between gap-3"
                  >
                    <div>
                      <span className="text-white font-bold text-sm block">
                        {city.name}, {city.state}
                      </span>
                      <span className="text-white/60 text-[11px] block">{city.role}</span>
                      <span className="text-white/40 text-[10px] block mt-0.5">
                        {city.description}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-[#F20D18]/20 border border-[#F20D18]/40 text-[#F20D18] text-[9px] uppercase font-bold shrink-0">
                      {city.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
