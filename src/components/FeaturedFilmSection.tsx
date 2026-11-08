"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, ExternalLink, Clapperboard, Clock } from "lucide-react";
import { sound } from "@/utils/sound";
import YouTubePlayerModal from "@/components/archive/YouTubePlayerModal";
import TiltCard from "@/components/motion/TiltCard";
import MagneticButton from "@/components/motion/MagneticButton";

export default function FeaturedFilmSection() {
  const [modalOpen, setModalOpen] = useState(false);

  const videoData = {
    id: "5IhvGcUunFg",
    title: "EVA GOLD | Behind The Scenes | The Making of a Theatre Advertisement",
    headline: "EVA GOLD // THEATRE ADVERTISEMENT",
    subheadline: "BEHIND THE SCENES · COMMERCIAL ON-SET CINEMA",
    client: "EVA GOLD",
    production: "AFTER THAT ENTERTAINMENT × GREEN PARROT TALKIES",
    director: "VISHNU UDAYAN",
    directorialMilestone: "12TH THEATRE DIRECTORIAL",
    duration: "01:59",
    durationFormatted: "01:59 MIN",
    aspect: "16:9",
    resolution: "4K DCI WIDESCREEN",
    poster: "/media/featured-film/eva-gold-bts.webp",
    youtubeUrl: "https://www.youtube.com/watch?v=5IhvGcUunFg",
    description:
      "What happens when a film shoot gets a little too much fun? An unfiltered, high-energy behind-the-scenes look into the on-set production of the EVA GOLD theatre advertisement. Co-produced with Green Parrot Talkies and directed by Vishnu Udayan, this film captures the raw spirit, lighting craft, precision camera work, and collaborative energy of commercial cinema production.",
  };

  const handleOpenPlayer = () => {
    sound.playClick();
    setModalOpen(true);
  };

  return (
    <section
      id="featured-film"
      className="relative w-full bg-[#080808] text-white py-24 md:py-36 px-5 sm:px-8 md:px-12 border-b border-white/10 overflow-hidden"
    >
      {/* Background Decorative Ambient Grid */}
      <div className="absolute inset-0 subtle-grid opacity-20 pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#F20D18]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1720px] mx-auto w-full relative z-10 space-y-12 md:space-y-16">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-white/10 pb-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3 font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase">
              <span>// SECTION 04</span>
              <span className="text-white/30">/</span>
              <span className="text-white/60 tracking-widest">
                ON-SET COMMERCIAL CINEMA · BEHIND THE SCENES
              </span>
            </div>
            <h2 className="font-anton text-4xl sm:text-6xl md:text-8xl tracking-tight uppercase text-white">
              EVA GOLD. <span className="text-[#F20D18]">BEHIND THE SCENES.</span>
            </h2>
            <div className="font-anton text-2xl sm:text-3xl md:text-4xl text-white/80 uppercase tracking-wide">
              {videoData.subheadline}
            </div>
          </div>

          <div className="max-w-md font-mono text-xs text-[#888888] space-y-2 leading-relaxed">
            <p>{videoData.description}</p>
            <div className="flex items-center gap-3 text-[#F20D18] font-bold pt-1">
              <span>• {videoData.directorialMilestone}</span>
              <span>• LIVE STUDIO SET</span>
            </div>
          </div>
        </div>

        {/* Cinematic Main Video Viewport (16:9) */}
        <div className="relative w-full">
          <TiltCard
            intensity={6}
            glare={true}
            onClick={handleOpenPlayer}
            dataCursor="PLAY BTS"
            className="w-full bg-[#101010] border-2 border-white/15 hover:border-[#F20D18] transition-all duration-300 shadow-[0_0_50px_rgba(0,0,0,0.8)] cursor-pointer group overflow-hidden"
          >
            <div className="relative aspect-video w-full overflow-hidden bg-black">
              {/* High-Resolution Poster Image */}
              <Image
                src={videoData.poster}
                alt={videoData.title}
                fill
                priority
                className="object-cover group-hover:scale-104 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                sizes="(max-width: 1440px) 100vw, 1720px"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />

              {/* Top Viewfinder Reticles & Meta */}
              <div className="absolute top-4 sm:top-6 left-4 sm:left-6 right-4 sm:right-6 flex items-center justify-between font-mono text-xs">
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 bg-[#F20D18] text-white font-bold text-[10px] sm:text-xs uppercase shadow-lg flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    LIVE PRODUCTION FILM
                  </span>
                  <span className="px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/20 text-white font-bold text-[10px] sm:text-xs hidden sm:inline">
                    {videoData.directorialMilestone}
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-3 py-1 border border-white/20 text-white font-mono text-[10px] sm:text-xs">
                  <span className="text-[#F20D18] font-bold">TC</span> 00:01:59:00 // 4K DCI
                </div>
              </div>

              {/* Big Center Brutalist Play Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative group/btn">
                  <div className="absolute -inset-4 rounded-full bg-[#F20D18]/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-[#F20D18] text-white flex items-center justify-center shadow-[0_0_40px_rgba(242,13,24,0.8)] group-hover:scale-110 transition-transform duration-300">
                    <Play className="w-8 h-8 sm:w-12 sm:h-12 fill-white translate-x-1" />
                  </div>
                </div>
              </div>

              {/* Bottom Metadata & Credits Bar */}
              <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 right-4 sm:right-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 font-mono">
                <div className="space-y-1 bg-black/80 backdrop-blur-md p-3 sm:p-4 border border-white/20 max-w-xl">
                  <div className="flex items-center gap-2 text-[#F20D18] font-bold text-[10px] tracking-widest uppercase">
                    <Clapperboard className="w-3.5 h-3.5" />
                    <span>COMMERCIAL AD FILM ARCHIVE</span>
                  </div>
                  <h3 className="font-anton text-lg sm:text-2xl text-white uppercase tracking-wide">
                    {videoData.title}
                  </h3>
                  <p className="text-[11px] text-white/70">
                    Directed by <strong className="text-white">{videoData.director}</strong> • Co-produced with{" "}
                    <strong className="text-white">Green Parrot Talkies</strong>
                  </p>
                </div>

                <div className="flex items-center gap-2 bg-black/80 backdrop-blur-md px-4 py-2 border border-white/20 text-white font-mono text-xs">
                  <Clock className="w-3.5 h-3.5 text-[#F20D18]" />
                  <span>{videoData.durationFormatted}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-[#F20D18] font-bold">16:9 DCI</span>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* Technical Telemetry & Production Notes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
          <div className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] transition-colors space-y-3">
            <span className="font-mono text-xs font-bold text-[#F20D18] block tracking-widest uppercase">
              01 // THE PRODUCTION SET
            </span>
            <h4 className="font-anton text-xl uppercase text-white tracking-wide">
              On-Set Energy & Real Film Craft
            </h4>
            <p className="font-mono text-xs text-[#888888] leading-relaxed">
              Traditional auspicious pooja ceremony, high-power lighting grids, multi-camera coordination, and real actors in traditional Kerala bridal couture.
            </p>
          </div>

          <div className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] transition-colors space-y-3">
            <span className="font-mono text-xs font-bold text-[#F20D18] block tracking-widest uppercase">
              02 // DIRECTORIAL VISION
            </span>
            <h4 className="font-anton text-xl uppercase text-white tracking-wide">
              12th Theatre Directorial
            </h4>
            <p className="font-mono text-xs text-[#888888] leading-relaxed">
              Directed by Vishnu Udayan (Green Parrot Talkies) in collaboration with AFTER THAT ENTERTAINMENT, bringing high-energy commercial filmmaking to life.
            </p>
          </div>

          <div className="p-6 bg-[#111111] border border-white/10 hover:border-[#F20D18] transition-colors space-y-3">
            <span className="font-mono text-xs font-bold text-[#F20D18] block tracking-widest uppercase">
              03 // THEATRE PROJECTION
            </span>
            <h4 className="font-anton text-xl uppercase text-white tracking-wide">
              Theatrical Commercial Scale
            </h4>
            <p className="font-mono text-xs text-[#888888] leading-relaxed">
              Engineered specifically for cinema screen projection, high-impact retail footfall conversion, and brand memorability across Kerala theatre networks.
            </p>
          </div>
        </div>

        {/* Action Buttons Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <MagneticButton strength={0.3} onClick={handleOpenPlayer} className="w-full sm:w-auto">
              <div className="w-full sm:w-auto px-8 py-4 bg-[#F20D18] text-white font-anton text-base tracking-wider uppercase hover:bg-white hover:text-black transition-colors duration-200 flex items-center justify-center gap-3 shadow-[0_0_25px_rgba(242,13,24,0.4)]">
                <Play className="w-4 h-4 fill-current" />
                <span>PLAY FULL BTS FILM (01:59)</span>
              </div>
            </MagneticButton>

            <a
              href={videoData.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => sound.playHover()}
              className="hidden md:flex items-center gap-2 px-6 py-4 bg-black/80 border border-white/20 text-white font-mono text-xs font-bold tracking-widest uppercase hover:border-[#F20D18] hover:text-[#F20D18] transition-colors"
            >
              <span>WATCH ON YOUTUBE</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="font-mono text-xs text-white/40 flex items-center gap-4">
            <span>CLIENT: {videoData.client}</span>
            <span>•</span>
            <span className="text-[#F20D18]">VERIFIED PRODUCTION PROOF</span>
          </div>
        </div>
      </div>

      {/* YouTube Privacy-Enhanced Modal Player */}
      <YouTubePlayerModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        videoId={videoData.id}
        title={videoData.title}
        subtitle="Directed by Vishnu Udayan • Green Parrot Talkies × AFTER THAT ENTERTAINMENT"
        client={videoData.client}
        duration={videoData.duration}
      />
    </section>
  );
}
