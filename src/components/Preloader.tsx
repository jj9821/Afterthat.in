"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PreloaderProps {
  onComplete: () => void;
}

export default function Preloader({ onComplete }: PreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"loading" | "reveal" | "done">("loading");
  const [statusText, setStatusText] = useState("INITIALIZING AUDIOVISUAL ENGINE");

  useEffect(() => {
    // Sequence progress
    const phrases = [
      "INITIALIZING AUDIOVISUAL ENGINE",
      "SYNCHRONIZING WESTERN GHATS COORDINATES [10.02°N, 77.06°E]",
      "LOADING 70MM ANAMORPHIC FRAMES",
      "CALIBRATING MONOCHROME CONTRAST",
      "AFTER THAT — WHAT HAPPENS NEXT",
    ];

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 3;
      if (current >= 100) {
        current = 100;
        setProgress(100);
        clearInterval(interval);
        setTimeout(() => setPhase("reveal"), 400);
        setTimeout(() => {
          setPhase("done");
          onComplete();
        }, 1300);
      } else {
        setProgress(current);
        const idx = Math.min(
          Math.floor((current / 100) * phrases.length),
          phrases.length - 1
        );
        setStatusText(phrases[idx]);
      }
    }, 45);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase !== "done" && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 z-[10000] bg-[#080808] flex flex-col justify-between p-6 md:p-12 text-white select-none overflow-hidden"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 subtle-grid opacity-30 pointer-events-none" />

          {/* Top bar metadata */}
          <div className="relative z-10 flex items-center justify-between text-[11px] font-mono tracking-widest text-[#888888] uppercase">
            <div className="flex items-center gap-3">
              <span className="w-2 h-2 bg-[#ff2020] animate-ping rounded-full inline-block" />
              <span className="text-white font-bold">SYSTEM ACTIVE</span>
              <span className="hidden sm:inline text-white/30">|</span>
              <span className="hidden sm:inline">KERALA [IST +05:30]</span>
            </div>
            <div>
              <span>SPEC: 35MM / 4K / BRUTALIST</span>
            </div>
          </div>

          {/* Center massive typographic statement */}
          <div className="relative z-10 my-auto py-8">
            <div className="overflow-hidden">
              <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-baseline gap-4 md:gap-8 flex-wrap"
              >
                <span className="text-xs md:text-sm font-mono text-[#ff2020] tracking-[0.3em] font-bold">
                  STUDIO ARCHIVE
                </span>
                <span className="text-xs md:text-sm font-mono text-white/40 tracking-[0.2em]">
                  EST. 2021
                </span>
              </motion.div>
            </div>

            <div className="overflow-hidden mt-2">
              <motion.h1
                initial={{ y: 120 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-anton text-6xl sm:text-8xl md:text-9xl lg:text-[13vw] leading-[0.85] tracking-tight text-white uppercase"
              >
                AFTER <span className="text-[#ff2020]">THAT</span>
              </motion.h1>
            </div>

            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="font-syne text-sm md:text-xl font-bold tracking-[0.25em] text-white/90 uppercase"
              >
                WHAT HAPPENS NEXT CHANGES EVERYTHING.
              </motion.p>
            </div>
          </div>

          {/* Bottom progress bar & counter */}
          <div className="relative z-10 space-y-4">
            <div className="flex items-end justify-between font-mono">
              <div className="space-y-1">
                <span className="text-[10px] md:text-xs text-[#888888] tracking-widest uppercase block">
                  STATUS
                </span>
                <span className="text-xs md:text-sm text-white font-bold tracking-wider uppercase">
                  {statusText}
                </span>
              </div>
              <div className="text-right">
                <span className="font-bebas text-5xl md:text-7xl leading-none text-white tracking-wider">
                  {progress}
                  <span className="text-[#ff2020] text-3xl md:text-5xl">%</span>
                </span>
              </div>
            </div>

            {/* Industrial progress bar */}
            <div className="h-[3px] w-full bg-white/10 relative overflow-hidden">
              <motion.div
                className="h-full bg-[#ff2020] shadow-[0_0_15px_#ff2020]"
                style={{ width: `${progress}%` }}
                transition={{ ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between items-center text-[10px] font-mono text-[#666666] tracking-widest">
              <span>ANAND BHAIRAV / DIRECTION</span>
              <span>CALICUT • KOCHI • IDUKKI</span>
            </div>
          </div>

          {/* Dramatic red flash overlay when reveal starts */}
          {phase === "reveal" && (
            <motion.div
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ duration: 0.4, ease: "circIn" }}
              className="absolute inset-0 bg-[#ff2020] z-20 origin-bottom"
            />
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
