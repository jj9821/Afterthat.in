"use client";

import Image from "next/image";
import { Layers, Target, Cpu, CheckCircle2, MapPin, ExternalLink, Newspaper, ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import TiltCard from "@/components/motion/TiltCard";
import ScrambleText from "@/components/motion/ScrambleText";

export default function AboutSection() {
  const pillars = [
    {
      title: "STRATEGY & CREATIVE",
      desc: "Brand positioning, naming, and visual identity systems built for commercial distinction.",
      icon: Target,
    },
    {
      title: "MEDIA PRODUCTION",
      desc: "Commercial ad films, corporate films, photography, and high-velocity digital content.",
      icon: Layers,
    },
    {
      title: "DIGITAL MARKETING",
      desc: "Performance marketing, Meta & Google ads, SEO, and multi-channel audience growth.",
      icon: CheckCircle2,
    },
    {
      title: "TECH & AI WORKFLOWS",
      desc: "Custom web flagships, mobile applications, business software, and AI creative tooling.",
      icon: Cpu,
    },
  ];

  return (
    <section
      id="about"
      className="relative w-full bg-[#0A0A0A] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background grain & grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-16 md:space-y-24">
        {/* Section Header with Industrial Tag */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
                // SECTION 02
              </span>
              <span className="text-white/30 font-mono">/</span>
              <span className="font-mono text-xs text-white/50 tracking-widest uppercase">
                COMPANY OVERVIEW
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              ABOUT <span className="text-[#F20D18]">AFTER THAT</span>
            </h2>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] leading-relaxed">
            <p>
              KOCHI • BANGALORE • AHMEDABAD • INTEGRATED CREATIVE, ADVERTISING,
              MARKETING & TECHNOLOGY SOLUTIONS UNDER ONE ROOF.
            </p>
          </div>
        </div>

        {/* Asymmetrical Editorial Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Official Positioning & Copy */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-6">
              <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl lg:text-6xl uppercase tracking-tight text-white leading-[1.05]">
                {COMPANY_INFO.about.headline.split(".")[0]}.{" "}
                <span className="text-[#F20D18]">
                  {COMPANY_INFO.about.headline.split(".")[1]}.
                </span>
              </h3>

              <div className="space-y-5 text-[#cccccc] font-space text-base md:text-lg leading-relaxed pt-2">
                <p>{COMPANY_INFO.about.paragraph1}</p>
                <p>{COMPANY_INFO.about.paragraph2}</p>
                <p>{COMPANY_INFO.about.paragraph3}</p>
                <p>{COMPANY_INFO.about.paragraph4}</p>

                {/* Closing Impact Callout */}
                <div className="border-l-4 border-[#F20D18] pl-6 py-4 bg-white/[0.02] space-y-2 my-6">
                  <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                    OUR CORE DIRECTIVE
                  </span>
                  <p className="font-anton text-xl sm:text-2xl md:text-3xl text-white uppercase tracking-wide leading-snug">
                    {COMPANY_INFO.about.closing}
                  </p>
                </div>
              </div>
            </div>

            {/* Core Capabilities Pillars Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((item, i) => {
                const IconComponent = item.icon;
                return (
                  <TiltCard key={i} intensity={8} glare={true}>
                    <div className="bg-[#111111] border border-white/10 p-6 space-y-3 hover:border-[#F20D18] transition-colors group h-full">
                      <div className="w-10 h-10 bg-white/5 border border-white/10 flex items-center justify-center text-[#F20D18] group-hover:bg-[#F20D18] group-hover:text-white transition-colors">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h4 className="font-anton text-lg tracking-wide uppercase text-white">
                        <ScrambleText text={item.title} />
                      </h4>
                      <p className="font-mono text-xs text-[#888888] leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </TiltCard>
                );
              })}
            </div>
          </div>

          {/* Right Column: Layered Editorial Visuals & Hub Telemetry */}
          <div className="lg:col-span-5 space-y-8">
            <TiltCard intensity={10} glare={true}>
              <div className="relative aspect-square w-full overflow-hidden bg-black border border-white/20 group shadow-2xl">
                <Image
                  src="/media/agency/team-session.jpg"
                  alt="AFTER THAT Entertainment team strategy and creative direction session"
                  fill
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 500px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 font-mono text-[10px] bg-black/80 backdrop-blur-md px-3 py-1 text-[#F20D18] font-bold border border-white/20">
                  ESTABLISHED 2021 // INTEGRATED AGENCY
                </div>

                {/* Bottom Overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between font-mono">
                  <div>
                    <span className="text-[10px] text-[#F20D18] font-bold tracking-widest block uppercase">
                      OFFICIAL POSITIONING
                    </span>
                    <span className="text-sm font-bold text-white uppercase tracking-wider">
                      IDEAS. PEOPLE. BRANDS. BEYOND.
                    </span>
                  </div>
                  <span className="text-xs text-white/60">KOCHI • BLR • AMD</span>
                </div>
              </div>
            </TiltCard>

            {/* Hub Locations Banner */}
            <div className="p-6 bg-[#121212] border border-[#F20D18]/40 space-y-4 shadow-xl">
              <div className="flex items-center gap-3 border-b border-white/10 pb-3">
                <MapPin className="w-5 h-5 text-[#F20D18] shrink-0" />
                <span className="font-mono text-xs text-white font-bold tracking-widest uppercase">
                  ACTIVE HUB MATRIX
                </span>
              </div>
              <p className="font-space text-xs text-[#aaaaaa] leading-relaxed">
                Operating across three key regional hubs to support rapid collaboration, live media production, and scalable enterprise software deployment.
              </p>
              <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-center">
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">KOCHI</span>
                  <span className="text-[9px] text-[#F20D18]">PRODUCTION</span>
                </div>
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">BANGALORE</span>
                  <span className="text-[9px] text-[#F20D18]">TECH & GROWTH</span>
                </div>
                <div className="p-2.5 bg-black/60 border border-white/10">
                  <span className="text-white font-bold text-xs block">AHMEDABAD</span>
                  <span className="text-[9px] text-[#F20D18]">STRATEGY</span>
                </div>
              </div>
            </div>

            {/* Agency Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono">
              {COMPANY_INFO.stats.map((s, i) => (
                <div
                  key={i}
                  className="bg-[#111111] border border-white/10 p-3.5 text-center hover:border-[#F20D18] hover:scale-105 transition-all cursor-default"
                >
                  <span className="font-bebas text-3xl md:text-4xl text-white block leading-none">
                    {s.value}
                  </span>
                  <span className="text-[9px] text-[#888888] tracking-widest uppercase block mt-1">
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Dedicated: Leadership & Cinema Pedigree Section */}
        <div className="pt-12 md:pt-14 border-t border-white/10 space-y-6">
          {/* Clean Two-Sided Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div className="space-y-1.5">
              <span className="font-mono text-xs text-[#FF4750] font-bold tracking-[0.26em] uppercase block">
                // FOUNDER &amp; DIRECTION · CINEMA PEDIGREE
              </span>
              <h3 className="font-anton text-3xl sm:text-4xl md:text-5xl uppercase tracking-tight text-white">
                LEADERSHIP &amp; <span className="text-[#F20D18]">CINEMA PEDIGREE</span>
              </h3>
            </div>
            <p className="max-w-md font-mono text-xs text-[#C2C2C2] leading-relaxed">
              ENGINEERED WITH TECHNICAL RIGOR. NURTURED ON 35MM CELLULOID.
              DIRECTED FOR COMMERCIAL DOMINANCE.
            </p>
          </div>

          {/* Balanced Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-6 items-stretch">
            {/* Left 7 cols: Integrated Founder Portrait, Crisp Bio & Unified Credentials Footer */}
            <div className="lg:col-span-7 bg-[#111111] border border-white/15 p-5 sm:p-6 flex flex-col justify-between gap-5">
              <div className="space-y-4">
                {/* Portrait + Founder Identity Header */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-4 border-b border-white/10 pb-4">
                  <div className="relative w-20 sm:w-24 aspect-[3/4] shrink-0 overflow-hidden bg-black border border-white/20">
                    <Image
                      src="/media/agency/anand-bhairavv.png"
                      alt="Anand Bhairavv, Founder and Creative Director of AFTER THAT"
                      fill
                      loading="lazy"
                      sizes="96px"
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="space-y-1.5 min-w-0">
                    <span className="font-mono text-[11px] text-[#FF4750] font-bold tracking-widest uppercase block">
                      FOUNDER &amp; CREATIVE DIRECTOR
                    </span>
                    <h4 className="font-anton text-3xl sm:text-4xl text-white tracking-wide uppercase leading-none">
                      ANAND BHAIRAVV
                    </h4>
                    <span className="inline-block px-2.5 py-0.5 bg-white/5 border border-white/20 font-mono text-[11px] text-white/90 uppercase tracking-wider">
                      ECE ENGINEER × CINEMA PRACTITIONER
                    </span>
                  </div>
                </div>

                {/* Sharpened Bio Paragraphs */}
                <div className="space-y-2.5 font-space text-[#DCDCDC] text-sm leading-relaxed">
                  <p>
                    Trained as an Electronics &amp; Communication Engineer, Anand Bhairavv brought systems discipline to visual storytelling—spending seven years across Indian cinema mastering commercial sets, multi-camera shoots, and narrative pacing.
                  </p>
                  <p>
                    As an actor and producer alongside{" "}
                    <span className="text-white font-semibold">Makarand Deshpande</span>,{" "}
                    <span className="text-white font-semibold">S. Sreesanth</span>, and{" "}
                    <span className="text-white font-semibold">Nikki Galrani</span>, he grounds client work in authentic screen craft.
                  </p>
                  <p>
                    Under his direction, AFTER THAT operates as a unified film studio and technology lab—pairing theatrical aesthetics with engineering and performance media.
                  </p>
                </div>
              </div>

              {/* Anchored Practice Scope + Uniform 3-Tile Credentials Bar */}
              <div className="space-y-3.5 pt-4 border-t border-white/10">
                <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-1 font-mono text-[11px]">
                  <span className="text-[#FF4750] font-bold uppercase tracking-widest">
                    // SCREEN &amp; STUDIO PRACTICE
                  </span>
                  <span className="text-white/80 tracking-wide">
                    Feature Sets · Ad Direction · Brand Architecture
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div className="h-full p-3.5 bg-[#080808] border border-white/15 flex flex-col justify-between gap-1">
                    <span className="font-mono text-[10px] text-[#FF4750] font-bold tracking-widest uppercase block">
                      FOUNDATION
                    </span>
                    <span className="font-anton text-xl text-white block leading-tight">
                      ECE DEGREE
                    </span>
                    <span className="font-mono text-[11px] text-[#B3B3B3] block">
                      Systems &amp; Tech Pedigree
                    </span>
                  </div>
                  <div className="h-full p-3.5 bg-[#080808] border border-white/15 flex flex-col justify-between gap-1">
                    <span className="font-mono text-[10px] text-[#FF4750] font-bold tracking-widest uppercase block">
                      CINEMA EXPERIENCE
                    </span>
                    <span className="font-anton text-xl text-white block leading-tight">
                      7+ YEARS
                    </span>
                    <span className="font-mono text-[11px] text-[#B3B3B3] block">
                      Actor &amp; Film Producer
                    </span>
                  </div>
                  <div className="h-full p-3.5 bg-[#080808] border border-white/15 flex flex-col justify-between gap-1">
                    <span className="font-mono text-[10px] text-[#FF4750] font-bold tracking-widest uppercase block">
                      COLLABORATIONS
                    </span>
                    <span className="font-anton text-xl text-white block leading-tight">
                      PAN-INDIA
                    </span>
                    <span className="font-mono text-[11px] text-[#B3B3B3] block">
                      Makarand, Sreesanth, Nikki
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right 5 cols: Cohesive Press & Editorial Citations */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              <div className="flex items-center justify-between border-b border-white/10 pb-2.5 font-mono text-[11px] uppercase tracking-widest">
                <span className="flex items-center gap-2 text-white/85 font-bold">
                  <Newspaper className="w-3.5 h-3.5 text-[#F20D18]" aria-hidden="true" />
                  <span>PRESS &amp; EDITORIAL CITATIONS</span>
                </span>
                <span className="text-white/75">02 FEATURES</span>
              </div>

              <div className="flex-1 flex flex-col justify-between gap-3.5">
                {/* Citation Card 1: Entrepreneur Ethics */}
                <a
                  href="https://entrepreneurethics.com/meet-struggling-actor-anand-bhairavv/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-[#111111] border border-white/15 hover:border-[#F20D18] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,border-color] duration-200 ease-out p-4 flex flex-col sm:flex-row gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
                >
                  <div className="relative w-full sm:w-44 xl:w-48 shrink-0 aspect-[16/10] self-start overflow-hidden bg-black border border-white/15">
                    <Image
                      src="/media/press/entrepreneur-ethics-anand.jpg"
                      alt="Anand Bhairavv featured in Entrepreneur Ethics"
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] px-2 py-0.5 bg-[#F20D18]/15 text-[#FF4D56] font-bold border border-[#F20D18]/40 uppercase tracking-widest">
                          ENTREPRENEUR ETHICS
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-[#F20D18] transition-colors shrink-0" aria-hidden="true" />
                      </div>
                      <h5 className="font-anton text-lg sm:text-[21px] text-white uppercase tracking-tight leading-[1.12] group-hover:text-[#F20D18] transition-colors">
                        &ldquo;Struggle and Success – On My Terms – Anand Bhairavv&rdquo;
                      </h5>
                      <p className="font-space text-xs text-[#C2C2C2] leading-relaxed line-clamp-2">
                        Profile tracing Anand Bhairavv&apos;s transition from engineering into cinema acting and founding AFTER THAT ENTERTAINMENT LLP.
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-[11px]">
                      <span className="text-white/75 uppercase tracking-wider">
                        EDITORIAL PROFILE
                      </span>
                      <span className="text-[#FF4750] group-hover:text-white font-bold inline-flex items-center gap-1 transition-colors shrink-0">
                        <span>READ CITATION</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>

                {/* Citation Card 2: R9 News */}
                <a
                  href="https://r9news.in/2024/09/17/a-journey-of-innovation-and-excellence-after-that-entertainment-led-by-anand-bhairav/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex-1 bg-[#111111] border border-white/15 hover:border-[#F20D18] hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 transition-[transform,border-color] duration-200 ease-out p-4 flex flex-col sm:flex-row gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F20D18]"
                >
                  <div className="relative w-full sm:w-44 xl:w-48 shrink-0 aspect-[16/10] self-start overflow-hidden bg-black border border-white/15">
                    <Image
                      src="/media/press/r9-news-team.jpg"
                      alt="AFTER THAT Entertainment team featured in R9 News"
                      fill
                      loading="lazy"
                      sizes="(max-width: 640px) 100vw, 192px"
                      className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                    />
                  </div>

                  <div className="flex-1 min-w-0 flex flex-col justify-between gap-3">
                    <div className="space-y-1.5">
                      <div className="flex items-center justify-between gap-2">
                        <span className="font-mono text-[10px] px-2 py-0.5 bg-[#F20D18]/15 text-[#FF4D56] font-bold border border-[#F20D18]/40 uppercase tracking-widest">
                          R9 NEWS
                        </span>
                        <ExternalLink className="w-3.5 h-3.5 text-white/70 group-hover:text-[#F20D18] transition-colors shrink-0" aria-hidden="true" />
                      </div>
                      <h5 className="font-anton text-lg sm:text-[21px] text-white uppercase tracking-tight leading-[1.12] group-hover:text-[#F20D18] transition-colors">
                        &ldquo;A Journey of Innovation and Excellence: After That Entertainment&rdquo;
                      </h5>
                      <p className="font-space text-xs text-[#C2C2C2] leading-relaxed line-clamp-2">
                        National business feature on AFTER THAT&apos;s integrated model across commercial cinema, brand systems, and AI workflows.
                      </p>
                    </div>

                    <div className="pt-2.5 border-t border-white/10 flex items-center justify-between gap-2 font-mono text-[11px]">
                      <span className="text-white/75 uppercase tracking-wider">
                        NATIONAL COVERAGE
                      </span>
                      <span className="text-[#FF4750] group-hover:text-white font-bold inline-flex items-center gap-1 transition-colors shrink-0">
                        <span>READ CITATION</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" />
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
