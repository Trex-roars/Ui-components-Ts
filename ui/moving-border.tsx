"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  duration?: number;
  className?: string;
  containerClassName?: string;
}) => {
  const variants = {
    initial: {
      backgroundPosition: "0 0",
    },
    animate: {
      backgroundPosition: ["0 0", "100% 100%"],
    },
  };

  return (
    <div className={cn("relative p-[4px] group", containerClassName)}>
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1] opacity-60 group-hover:opacity-100 blur-xl transition-opacity",
          "bg-[linear-gradient(45deg,transparent_25%,var(--primary)_50%,transparent_75%)]"
        )}
      />
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        transition={{
          duration: duration / 1000,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundSize: "400% 400%",
        }}
        className={cn(
          "absolute inset-0 rounded-3xl z-[1]",
          "bg-[linear-gradient(45deg,transparent_25%,var(--primary)_50%,transparent_75%)]"
        )}
      />

      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
};