"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink } from "lucide-react";
import { sound } from "@/utils/sound";
import { useScrollLock } from "@/utils/scrollLock";

interface YouTubePlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoId: string;
  title: string;
  subtitle?: string;
  client?: string;
  duration?: string;
}

export default function YouTubePlayerModal({
  isOpen,
  onClose,
  videoId,
  title,
  subtitle,
  client,
  duration = "01:59",
}: YouTubePlayerModalProps) {
  // Lock background scroll when modal is active
  useScrollLock(isOpen);

  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        sound.playClick();
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="modal-backdrop fixed inset-0 z-[99999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-3 sm:p-6 md:p-8 overscroll-contain overflow-y-auto modal-content-scroll"
          data-lenis-prevent="true"
          onWheel={(e) => e.stopPropagation()}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              sound.playClick();
              onClose();
            }
          }}
        >
          {/* Header Bar */}
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between border-b border-white/15 pb-4 shrink-0 gap-4">
            <div className="flex items-center gap-3 overflow-hidden">
              <span className="px-2.5 py-1 bg-[#F20D18] text-white font-mono font-bold text-[10px] sm:text-xs uppercase shrink-0">
                ON-SET CINEMA // 4K DCI
              </span>
              <div className="truncate">
                <h3 className="font-anton text-base sm:text-xl uppercase text-white tracking-wide truncate">
                  {title}
                </h3>
                {subtitle && (
                  <p className="font-mono text-[10px] text-white/50 tracking-wider truncate hidden sm:block">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4 shrink-0">
              {/* Direct YouTube Fallback Link */}
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => sound.playHover()}
                className="hidden md:flex items-center gap-1.5 px-3 py-1.5 border border-white/20 bg-white/5 text-white/70 hover:text-white hover:border-[#F20D18] font-mono text-xs uppercase tracking-wider transition-colors"
                title="Watch on official YouTube platform"
              >
                <span>WATCH ON YOUTUBE</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              {/* Close Button */}
              <button
                onClick={() => {
                  sound.playClick();
                  onClose();
                }}
                onMouseEnter={() => sound.playHover()}
                data-cursor="CLOSE"
                className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-[#F20D18] hover:text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
              >
                <X className="w-4 h-4 stroke-[2.5]" />
                <span className="hidden sm:inline">CLOSE [ESC]</span>
              </button>
            </div>
          </div>

          {/* Central Responsive Cinema Player Frame (16:9) */}
          <div className="my-auto w-full max-w-6xl mx-auto py-4 sm:py-6 shrink-0">
            <div className="relative aspect-video w-full bg-black border border-white/20 shadow-[0_0_60px_rgba(242,13,24,0.3)] overflow-hidden">
              <iframe
                src={embedUrl}
                title={title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* Footer Metadata & Telemetry */}
          <div className="max-w-6xl mx-auto w-full border-t border-white/15 pt-3 flex flex-col sm:flex-row items-center justify-between font-mono text-[11px] text-white/50 gap-2 shrink-0">
            <div className="flex items-center gap-3">
              <span className="text-[#F20D18] font-bold">CLIENT: {client || "EVA GOLD"}</span>
              <span className="text-white/20">•</span>
              <span>DURATION: {duration}</span>
              <span className="text-white/20">•</span>
              <span className="hidden sm:inline">DOMAIN: YOUTUBE-NOCOOKIE (PRIVACY ENHANCED)</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-white/70">AFTER THAT ENTERTAINMENT × GREEN PARROT TALKIES</span>
              <a
                href={youtubeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#F20D18] hover:underline flex items-center gap-1 sm:hidden"
              >
                OPEN IN APP <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
