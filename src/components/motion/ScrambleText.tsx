"use client";

import { useState, useCallback, useRef } from "react";
import { sound } from "@/utils/sound";

interface ScrambleTextProps {
  text: string;
  className?: string;
  scrambleOnHover?: boolean;
  playAudio?: boolean;
  as?: "span" | "h1" | "h2" | "h3" | "h4" | "p" | "div";
}

const CHARS = "ABCDEFGHJKLMNOPQRSTUVWXYZ0123456789!#%@$*+/?";

export default function ScrambleText({
  text,
  className = "",
  scrambleOnHover = true,
  playAudio = true,
  as: Component = "span",
}: ScrambleTextProps) {
  const [displayText, setDisplayText] = useState(text);
  const frameRef = useRef<number | null>(null);

  const triggerScramble = useCallback(() => {
    if (playAudio) sound.playHover();
    let iteration = 0;
    const maxIterations = text.length * 2.2;

    if (frameRef.current) cancelAnimationFrame(frameRef.current);

    const step = () => {
      setDisplayText(
        text
          .split("")
          .map((char, index) => {
            if (char === " " || char === "\n") return char;
            if (index < iteration / 2.2) {
              return text[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("")
      );

      iteration += 1;
      if (iteration <= maxIterations) {
        frameRef.current = requestAnimationFrame(step);
      } else {
        setDisplayText(text);
      }
    };

    frameRef.current = requestAnimationFrame(step);
  }, [text, playAudio]);

  return (
    <Component
      onMouseEnter={scrambleOnHover ? triggerScramble : undefined}
      className={className}
    >
      {displayText}
    </Component>
  );
}
