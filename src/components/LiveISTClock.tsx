"use client";

import { useEffect, useRef } from "react";

interface LiveISTClockProps {
  className?: string;
}

function formatISTTime(): string {
  const now = new Date();
  return (
    now.toLocaleTimeString("en-GB", {
      timeZone: "Asia/Kolkata",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }) + " IST"
  );
}

/**
 * Isolated 1Hz IST clock leaf component so parent navigation/footer trees
 * do not re-render every second.
 */
export default function LiveISTClock({ className = "" }: LiveISTClockProps) {
  const timeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const update = () => {
      if (timeRef.current) {
        timeRef.current.textContent = formatISTTime();
      }
    };

    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <span
      ref={timeRef}
      className={`tabular-nums inline-block min-w-[88px] ${className}`}
      suppressHydrationWarning
    >
      --:--:-- IST
    </span>
  );
}
