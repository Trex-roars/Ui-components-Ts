"use client";

import { motion } from "framer-motion";
import { MessageSquare, ThumbsUp, LineChart, Users } from "lucide-react";

const insights = [
  { icon: MessageSquare, text: "Collect Feedback" },
  { icon: ThumbsUp, text: "Improve Experience" },
  { icon: LineChart, text: "Track Progress" },
  { icon: Users, text: "Engage Users" },
];

export function FloatingInsights() {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {insights.map((insight, index) => {
        const Icon = insight.icon;
        const angle = (index / insights.length) * Math.PI * 2;
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;

        return (
          <motion.div
            key={insight.text}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            style={{
              position: "absolute",
              transform: `translate(${x}px, ${y}px)`,
            }}
            className="flex items-center gap-2 rounded-full bg-card px-4 py-2 shadow-lg"
          >
            <Icon className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">{insight.text}</span>
          </motion.div>
        );
      })}
    </div>
  );
}