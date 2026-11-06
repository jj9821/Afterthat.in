"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function registerGsapPlugins() {
  if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
  }
}

// Linear interpolation
export const lerp = (a: number, b: number, n: number) => (1 - n) * a + n * b;

// Distance between 2 points
export const distance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.hypot(x2 - x1, y2 - y1);

// Scramble text effect hook for cyberpunk/brutalist typography
const SCRAMBLE_CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789#%&@$*+!?/<>";

export function useScrambleText(originalText: string, active: boolean = true) {
  const [displayText, setDisplayText] = useState(originalText);
  const frameRef = useRef<number | null>(null);

  const scramble = useCallback(() => {
    let iteration = 0;
    const maxIterations = originalText.length * 2.5;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const step = () => {
      setDisplayText(
        originalText
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration / 2.5) {
              return originalText[index];
            }
            return SCRAMBLE_CHARS[
              Math.floor(Math.random() * SCRAMBLE_CHARS.length)
            ];
          })
          .join("")
      );

      iteration += 1;
      if (iteration <= maxIterations) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(originalText);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [originalText]);

  useEffect(() => {
    if (active) {
      scramble();
    } else {
      setDisplayText(originalText);
    }
    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, [active, originalText, scramble]);

  return { displayText, scramble };
}
