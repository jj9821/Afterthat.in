"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
  onClick?: () => void;
  dataCursor?: string;
}

export default function TiltCard({
  children,
  className = "",
  intensity = 15,
  glare = true,
  onClick,
  dataCursor,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = -((y - centerY) / centerY) * intensity;
    const rotY = ((x - centerX) / centerX) * intensity;

    setRotateX(rotX);
    setRotateY(rotY);

    if (glare) {
      const glX = (x / rect.width) * 100;
      const glY = (y / rect.height) * 100;
      setGlarePosition({ x: glX, y: glY, opacity: 0.15 });
    }
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setGlarePosition((prev) => ({ ...prev, opacity: 0 }));
  };

  return (
    <div
      style={{ perspective: 1200 }}
      className={`relative ${className}`}
      onClick={onClick}
      data-cursor={dataCursor}
    >
      <motion.div
        ref={ref}
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.4 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: "preserve-3d" }}
        className="w-full h-full relative"
      >
        {children}

        {/* Dynamic Specular Glare */}
        {glare && (
          <div
            className="absolute inset-0 pointer-events-none transition-opacity duration-300"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255,255,255,0.4) 0%, transparent 60%)`,
            }}
          />
        )}
      </motion.div>
    </div>
  );
}
