"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function AnimatedGradientText({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={cn(
        "inline-block bg-gradient-to-r from-primary via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient",
        className
      )}
    >
      {children}
    </motion.span>
  );
}