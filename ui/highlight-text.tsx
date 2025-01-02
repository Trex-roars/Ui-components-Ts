"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  opacity: number;
}

export const HighlightText = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [particles, setParticles] = useState<Particle[]>([]);
  const colors = ["#FFD700", "#FFA500", "#FF69B4"];

  const createParticle = () => {
    return {
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      opacity: 1,
    };
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setParticles((currentParticles) => {
        const newParticles = [...currentParticles];
        if (newParticles.length < 15) {
          newParticles.push(createParticle());
        }
        return newParticles.map((particle) => ({
          ...particle,
          opacity: particle.opacity - 0.02,
        })).filter((particle) => particle.opacity > 0);
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className={cn("relative inline-block", className)}>
      <span className="relative z-10 bg-gradient-to-r from-primary via-purple-500 to-primary bg-clip-text text-transparent animate-gradient">
        {children}
      </span>
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute inline-block rounded-full pointer-events-none"
          style={{
            x: `${particle.x}%`,
            y: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
            opacity: particle.opacity,
          }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
      ))}
      <motion.div
        className="absolute inset-0 rounded-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 2, repeat: Infinity }}
        style={{
          background: "radial-gradient(circle at center, var(--primary) 0%, transparent 70%)",
          filter: "blur(8px)",
        }}
      />
    </span>
  );
};