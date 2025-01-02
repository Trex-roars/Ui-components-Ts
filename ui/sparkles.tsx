"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

export const Sparkles = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const [sparkles, setSparkles] = useState<Array<{ id: number; createdAt: number; size: number; style: any }>>([]);
  const rand = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min;

  const createSparkle = () => {
    const sparkle = {
      id: Math.random(),
      createdAt: Date.now(),
      size: rand(10, 20),
      style: {
        top: rand(0, 100) + "%",
        left: rand(0, 100) + "%",
        zIndex: 2,
      },
    };
    return sparkle;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const sparkle = createSparkle();
      const nextSparkles = [...sparkles, sparkle].filter(
        (sp) => now - sp.createdAt < 750
      );
      setSparkles(nextSparkles);
    }, 250);

    return () => clearInterval(interval);
  }, [sparkles]);

  return (
    <span className={cn("relative inline-block", className)}>
      {sparkles.map((sparkle) => (
        <motion.span
          key={sparkle.id}
          className="absolute inline-block animate-ping"
          style={sparkle.style}
          initial={{ scale: 0, rotate: 0, opacity: 1 }}
          animate={{ scale: 1, rotate: 180, opacity: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          ✨
        </motion.span>
      ))}
      <span className="relative z-10">{children}</span>
    </span>
  );
};