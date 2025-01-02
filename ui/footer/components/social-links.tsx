"use client";

import { motion } from "framer-motion";
import { socialLinks } from "../data";

export function SocialLinks() {
  return (
    <div className="flex gap-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon;
        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: index * 0.1,
              type: "spring",
              stiffness: 300,
            }}
            className={`p-2 rounded-lg transition-colors duration-300 ${social.color}`}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            aria-label={social.label}
          >
            <Icon className="w-5 h-5" />
          </motion.a>
        );
      })}
    </div>
  );
}