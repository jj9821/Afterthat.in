"use client";

import { useState } from "react";
import { ArrowUpRight, Send, CheckCircle2, AlertCircle, Mail, MapPin } from "lucide-react";
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
    email: "",
    projectType: "Ad Film / Commercial",
    budget: "₹15L – ₹35L",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const projectTypes = [
    "Ad Film / Commercial",
    "Festival IP / Live Experience",
    "Celebrity & Influencer Campaign",
    "Maximalist Brand Identity",
    "Film Production & CBFC Clearance",
  ];

  const budgetTiers = [
    "< ₹10L",
    "₹10L – ₹25L",
    "₹25L – ₹50L",
    "₹50L+",
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
          particleCount: 100,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#ff2020", "#ffffff", "#080808"],
        });
      } catch {
        // Safe fallback
      }

      // Reset form
      setFormData({
        name: "",
        email: "",
        projectType: "Ad Film / Commercial",
        budget: "₹15L – ₹35L",
        message: "",
      });
    } catch (err: unknown) {
      setStatus("error");
      const msg = err instanceof Error ? err.message : "Network error";
      setErrorMessage(msg);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#ff2020]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3 font-mono text-xs text-[#ff2020] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 06</span>
              <span className="text-white/30">/</span>
              <span className="text-white/50 tracking-widest">TRANSMISSION TERMINAL</span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              START A <span className="text-[#ff2020]">COLLISION</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              WE SELECTIVELY COMMENCE 3–4 SIGNIFICANT CAMPAIGNS OR CULTURAL PRODUCTIONS PER QUARTER.
            </p>
          </div>
        </div>

        {/* Form and Contact Meta Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Real-Time Interactive Form */}
          <div className="lg:col-span-7 bg-[#101010] border border-white/10 p-6 sm:p-10 relative">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-8">
              <span className="font-mono text-xs text-[#ff2020] font-bold tracking-widest uppercase flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#ff2020] animate-ping" />
                COMMISSION INQUIRY FORM
              </span>
              <span className="font-mono text-[10px] text-white/50">SECURE DISPATCH TERMINAL</span>
            </div>

            {status === "success" ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-16 h-16 bg-[#ff2020] text-black mx-auto flex items-center justify-center rounded-none shadow-[0_0_35px_#ff2020] animate-bounce">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>
                <h3 className="font-anton text-3xl sm:text-4xl uppercase text-white">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-space text-white/80 max-w-md mx-auto text-sm sm:text-base leading-relaxed">
                  Your project brief has reached Anand Bhairav and the AFTER THAT creative board. Expect a direct response within 24 hours.
                </p>
                <MagneticButton strength={0.3}>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-4 px-6 py-2.5 border border-white/30 font-mono text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
                  >
                    SEND ANOTHER TRANSMISSION
                  </button>
                </MagneticButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {status === "error" && (
                  <div className="p-4 bg-red-950/60 border border-[#ff2020] flex items-center gap-3 text-red-300 font-mono text-xs">
                    <AlertCircle className="w-4 h-4 shrink-0 text-[#ff2020]" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Name & Email Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                      YOUR NAME / ENTITY *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Maya Nair / Redline Corp"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#080808] border border-white/15 px-4 py-3.5 text-white placeholder-white/20 font-space text-sm focus:outline-none focus:border-[#ff2020] focus:ring-1 focus:ring-[#ff2020] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                      DIRECT EMAIL *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. maya@enterprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-[#080808] border border-white/15 px-4 py-3.5 text-white placeholder-white/20 font-space text-sm focus:outline-none focus:border-[#ff2020] focus:ring-1 focus:ring-[#ff2020] transition-all"
                    />
                  </div>
                </div>

                {/* Project Type Selector */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                    PRIMARY DISCIPLINE
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {projectTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setFormData({ ...formData, projectType: type });
                        }}
                        className={`text-left p-3 font-mono text-xs uppercase tracking-wider border transition-all ${
                          formData.projectType === type
                            ? "bg-[#ff2020] border-[#ff2020] text-black font-bold shadow-[0_0_15px_rgba(255,32,32,0.5)]"
                            : "bg-[#080808] border-white/10 text-white/70 hover:border-white/30"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Budget Range Tier */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                    ESTIMATED BUDGET SCOPE (INR)
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                    {budgetTiers.map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => {
                          sound.playClick();
                          setFormData({ ...formData, budget: tier });
                        }}
                        className={`text-center py-2.5 font-mono text-xs uppercase tracking-wider border transition-all ${
                          formData.budget === tier
                            ? "bg-white border-white text-black font-bold"
                            : "bg-[#080808] border-white/10 text-white/70 hover:border-white/30"
                        }`}
                      >
                        {tier}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="font-mono text-xs text-white/70 uppercase tracking-wider block">
                    PROJECT VISION & TIMELINE *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell us about the creative vision, target audience, deliverables, or desired launch window..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#080808] border border-white/15 p-4 text-white placeholder-white/20 font-space text-sm focus:outline-none focus:border-[#ff2020] focus:ring-1 focus:ring-[#ff2020] transition-all resize-none"
                  />
                </div>

                {/* Submit Action Button with Magnetic Attract */}
                <MagneticButton strength={0.25} className="w-full">
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    onMouseEnter={() => sound.playHover()}
                    data-cursor="DISPATCH"
                    className="w-full py-4 bg-[#ff2020] text-black font-anton text-base tracking-widest uppercase hover:bg-white transition-colors flex items-center justify-center gap-3 disabled:opacity-50 shadow-[0_0_25px_rgba(255,32,32,0.5)]"
                  >
                    {status === "submitting" ? (
                      <span>ENCRYPTING & TRANSMITTING...</span>
                    ) : (
                      <>
                        <span>TRANSMIT COMMISSION BRIEF</span>
                        <Send className="w-4 h-4 fill-black" />
                      </>
                    )}
                  </button>
                </MagneticButton>
              </form>
            )}
          </div>

          {/* Right Column: Direct Contact Details & Brand Verified Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="font-mono text-xs text-[#ff2020] font-bold tracking-[0.3em] uppercase block">
                DIRECT CHANNELS
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl uppercase tracking-tight text-white">
                WE ANSWER TO THOSE WHO DARE TO DISRUPT.
              </h3>
              <p className="font-space text-sm sm:text-base text-[#888888] leading-relaxed">
                Whether you are an established brand planning a cinema commercial, a music label launching a regional hip-hop IP, or a feature film seeking creative packaging:
              </p>
            </div>

            {/* Direct Contact Cards with Magnetic Pull */}
            <div className="space-y-4">
              {/* Instagram Card */}
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={COMPANY_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="INSTAGRAM"
                  className="group flex items-center justify-between p-5 bg-[#111111] border border-white/10 hover:border-[#ff2020] transition-all w-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2020] group-hover:bg-[#ff2020] group-hover:text-black transition-colors">
                      <InstagramIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#888888] tracking-widest uppercase block">
                        OFFICIAL INSTAGRAM
                      </span>
                      <span className="font-anton text-xl uppercase text-white group-hover:text-[#ff2020] transition-colors">
                        <ScrambleText text={COMPANY_INFO.social.instagramHandle} />
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ff2020] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </MagneticButton>

              {/* Direct Email Card */}
              <MagneticButton strength={0.2} className="w-full">
                <a
                  href={`mailto:${COMPANY_INFO.social.email}`}
                  onMouseEnter={() => sound.playHover()}
                  data-cursor="EMAIL"
                  className="group flex items-center justify-between p-5 bg-[#111111] border border-white/10 hover:border-[#ff2020] transition-all w-full"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#ff2020] group-hover:bg-[#ff2020] group-hover:text-black transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-mono text-[10px] text-[#888888] tracking-widest uppercase block">
                        EXECUTIVE INQUIRIES
                      </span>
                      <span className="font-mono text-sm sm:text-base font-bold text-white group-hover:text-[#ff2020] transition-colors">
                        {COMPANY_INFO.social.email}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-white/40 group-hover:text-[#ff2020] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </a>
              </MagneticButton>

              {/* Physical Base */}
              <div className="p-5 bg-[#111111] border border-white/10 space-y-2 font-mono text-xs">
                <div className="flex items-center gap-2 text-[#ff2020] font-bold tracking-widest uppercase">
                  <MapPin className="w-4 h-4" />
                  <span>REGISTERED ENTITY ADDRESS</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  {COMPANY_INFO.legalName}
                  <br />
                  {COMPANY_INFO.headquarters.address}
                </p>
                <span className="text-[#888888] block text-[10px] pt-1">
                  COORDINATES: {COMPANY_INFO.headquarters.coordinates}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
