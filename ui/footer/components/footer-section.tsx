"use client";

import { motion } from "framer-motion";
import { FooterSection } from "../types";
import { FooterLinkComponent } from "./footer-link";

interface FooterSectionProps {
  section: FooterSection;
  index: number;
}

export function FooterSectionComponent({ section, index }: FooterSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 * index }}
      className="space-y-6"
    >
      <h3 className="text-lg font-semibold text-foreground">{section.title}</h3>
      <ul className="space-y-4">
        {section.links.map((link, linkIndex) => (
          <FooterLinkComponent 
            key={link.label} 
            link={link} 
            index={linkIndex} 
          />
        ))}
      </ul>
    </motion.div>
  );
}