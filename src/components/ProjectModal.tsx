"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  X,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Calendar,
  User,
  Film,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize2
} from "lucide-react";
import { Project } from "@/types";
import { sound } from "@/utils/sound";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onNextProject?: () => void;
}

export default function ProjectModal({
  project,
  onClose,
  onNextProject,
}: ProjectModalProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [viewMode, setViewMode] = useState<"video" | "still">("video");

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      sound.playHeavyImpact();
      setIsPlaying(true);
    } else {
      document.body.style.overflow = "auto";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const togglePlay = () => {
    sound.playClick();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    sound.playClick();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <AnimatePresence>
      <motion.div
        key={project.id}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[1000] bg-black/95 backdrop-blur-2xl flex flex-col overflow-y-auto"
      >
        {/* Top Floating Control Bar */}
        <div className="sticky top-0 z-50 w-full bg-[#080808]/95 border-b border-white/15 px-5 sm:px-8 py-4 flex items-center justify-between backdrop-blur-md">
          <div className="flex items-center gap-3 font-mono text-xs text-[#888888]">
            <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-ping" />
            <span className="text-white font-bold uppercase">{project.category}</span>
            <span className="hidden sm:inline text-white/30">|</span>
            <span className="hidden sm:inline text-[#F20D18] font-bold">{project.year}</span>
            <span className="hidden md:inline text-white/30">|</span>
            <span className="hidden md:inline text-white/60">{project.location}</span>
          </div>

          <div className="flex items-center gap-3">
            {project.videoUrl && (
              <div className="hidden sm:flex items-center gap-1 bg-black/80 p-1 border border-white/20 font-mono text-[10px]">
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode("video");
                  }}
                  className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                    viewMode === "video"
                      ? "bg-[#F20D18] text-black font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  CINEMA REEL
                </button>
                <button
                  onClick={() => {
                    sound.playClick();
                    setViewMode("still");
                  }}
                  className={`px-2.5 py-1 uppercase tracking-wider transition-colors ${
                    viewMode === "still"
                      ? "bg-[#F20D18] text-black font-extrabold"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  STILL FRAME
                </button>
              </div>
            )}

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => sound.playHover()}
              data-cursor="CLOSE"
              className="flex items-center gap-2 px-4 py-2 bg-white text-black font-mono text-xs font-bold tracking-widest uppercase hover:bg-[#F20D18] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
              <span>CLOSE</span>
            </button>
          </div>
        </div>

        {/* Modal Main Content Container */}
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-8 py-8 md:py-14 space-y-10">
          {/* Project Title & Tagline Banner */}
          <div className="space-y-3">
            <span className="font-mono text-xs text-[#F20D18] font-bold tracking-[0.3em] uppercase block">
              // PRODUCTION CASE STUDY • ARCHIVE 2024–2026
            </span>
            <h1 className="font-anton text-4xl sm:text-6xl md:text-8xl uppercase tracking-tight text-white leading-[0.9]">
              {project.title}
            </h1>
            <p className="font-syne text-xl sm:text-2xl text-white/90 font-bold max-w-3xl leading-snug">
              {project.tagline}
            </p>
          </div>

          {/* Project Metadata Ribbon */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-[#111111] border border-white/10 font-mono text-xs">
            <div className="space-y-1">
              <span className="text-[#888888] flex items-center gap-1.5 uppercase">
                <User className="w-3.5 h-3.5 text-[#F20D18]" /> CLIENT / ENTITY
              </span>
              <span className="text-white font-bold uppercase block">{project.client || "AFTER THAT IP"}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888888] flex items-center gap-1.5 uppercase">
                <MapPin className="w-3.5 h-3.5 text-[#F20D18]" /> LOCATION
              </span>
              <span className="text-white font-bold uppercase block">{project.location}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888888] flex items-center gap-1.5 uppercase">
                <Calendar className="w-3.5 h-3.5 text-[#F20D18]" /> TIMELINE
              </span>
              <span className="text-white font-bold uppercase block">{project.year}</span>
            </div>
            <div className="space-y-1">
              <span className="text-[#888888] flex items-center gap-1.5 uppercase">
                <Film className="w-3.5 h-3.5 text-[#F20D18]" /> DISCIPLINE
              </span>
              <span className="text-[#F20D18] font-bold uppercase block">{project.role}</span>
            </div>
          </div>

          {/* Full-Bleed Primary Cinema Player / Hero Visual */}
          <div className="relative aspect-[16/9] w-full overflow-hidden bg-black border-2 border-white/20 shadow-[0_0_40px_rgba(242,13,24,0.2)] group">
            {project.videoUrl && viewMode === "video" ? (
              <>
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster={project.coverImage}
                  className="w-full h-full object-cover"
                >
                  <source src={project.videoUrl} type="video/mp4" />
                </video>

                {/* Cinema Overlay Controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between font-mono text-[11px] text-white/80">
                    <span className="bg-black/80 px-2.5 py-1 border border-white/20 text-[#F20D18] font-bold flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#F20D18] animate-ping" />
                      MASTER REEL 4K DCI
                    </span>
                    <span className="bg-black/80 px-2.5 py-1 border border-white/20">
                      24.00 FPS • ANAMORPHIC
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={togglePlay}
                      className="w-12 h-12 rounded-full bg-[#F20D18] text-black flex items-center justify-center hover:scale-110 transition-transform shadow-[0_0_20px_#F20D18]"
                    >
                      {isPlaying ? (
                        <Pause className="w-5 h-5 fill-black" />
                      ) : (
                        <Play className="w-5 h-5 fill-black translate-x-0.5" />
                      )}
                    </button>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={toggleMute}
                        className="p-2.5 rounded-full bg-black/80 border border-white/20 text-white hover:text-[#F20D18] hover:border-[#F20D18] transition-colors"
                      >
                        {isMuted ? (
                          <VolumeX className="w-5 h-5" />
                        ) : (
                          <Volume2 className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <Image
                  src={project.coverImage}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1200px) 100vw, 1200px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              </>
            )}
          </div>

          {/* Narrative & Challenges Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 pt-4">
            <div className="md:col-span-7 space-y-6">
              <h2 className="font-anton text-2xl sm:text-3xl uppercase tracking-wide text-white">
                THE NARRATIVE & CREATIVE DIRECTION
              </h2>
              <p className="font-space text-base md:text-lg text-[#cccccc] leading-relaxed">
                {project.overview}
              </p>

              <div className="border-l-2 border-[#F20D18] pl-5 space-y-2 py-1 bg-white/[0.02]">
                <span className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase block">
                  EXECUTION & HURDLES
                </span>
                <p className="font-space text-sm sm:text-base text-white/80 leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>

            {/* Deliverables & Production Credits */}
            <div className="md:col-span-5 space-y-6">
              <div className="bg-[#111111] border border-white/10 p-6 space-y-4">
                <h3 className="font-mono text-xs text-[#F20D18] font-bold tracking-widest uppercase">
                  // DELIVERED OUTPUTS
                </h3>
                <div className="space-y-2">
                  {project.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2.5 font-mono text-xs text-white/90">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F20D18] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {project.credits && (
                <div className="bg-[#111111] border border-white/10 p-6 space-y-3 font-mono text-xs">
                  <h3 className="text-[#888888] font-bold tracking-widest uppercase">
                    PRODUCTION CREDITS:
                  </h3>
                  {project.credits.director && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">DIRECTOR:</span>
                      <span className="text-white font-bold">{project.credits.director}</span>
                    </div>
                  )}
                  {project.credits.producer && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">PRODUCER:</span>
                      <span className="text-white font-bold">{project.credits.producer}</span>
                    </div>
                  )}
                  {project.credits.dop && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">CINEMATOGRAPHY:</span>
                      <span className="text-white font-bold">{project.credits.dop}</span>
                    </div>
                  )}
                  {project.credits.postProduction && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">POST-PRODUCTION:</span>
                      <span className="text-white font-bold">{project.credits.postProduction}</span>
                    </div>
                  )}
                  {project.credits.strategy && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">STRATEGY:</span>
                      <span className="text-white font-bold">{project.credits.strategy}</span>
                    </div>
                  )}
                  {project.credits.production && (
                    <div className="flex justify-between border-b border-white/5 pb-1.5">
                      <span className="text-[#888888]">PRODUCTION:</span>
                      <span className="text-white font-bold">{project.credits.production}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Secondary Gallery Visuals */}
          <div className="space-y-6 pt-4">
            <h3 className="font-mono text-xs text-[#888888] tracking-[0.25em] uppercase">
              // PRODUCTION STILLS & ANAMORPHIC ARCHIVE
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.gallery.map((img, i) => (
                <div
                  key={i}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-black border border-white/10 group"
                >
                  <Image
                    src={img}
                    alt={`${project.title} - Still ${i + 1}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 600px"
                  />
                  <div className="absolute bottom-3 left-3 bg-black/80 px-2 py-0.5 font-mono text-[9px] text-white">
                    FRAME 0{i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Modal Bottom CTAs */}
          <div className="pt-8 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              className="px-6 py-3 border border-white/20 font-mono text-xs uppercase tracking-wider text-white hover:border-[#F20D18] hover:text-[#F20D18] transition-colors"
            >
              ← BACK TO WORKS INDEX
            </button>

            {onNextProject && (
              <button
                onClick={() => {
                  sound.playClick();
                  onNextProject();
                }}
                className="flex items-center gap-2 px-6 py-3 bg-[#F20D18] text-black font-anton text-sm uppercase tracking-wider hover:bg-white transition-colors shadow-[0_0_20px_rgba(242,13,24,0.4)]"
              >
                <span>NEXT PROJECT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
