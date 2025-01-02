"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Star } from "lucide-react";
import { FooterLink } from "../types";

interface FooterLinkProps {
  link: FooterLink;
  index: number;
}

export function FooterLinkComponent({ link, index }: FooterLinkProps) {
  return (
    <motion.li
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.1 * index }}
    >
      <Link
        href={link.href}
        className="group flex items-center text-muted-foreground hover:text-foreground transition-colors"
      >
        <ChevronRight className="w-4 h-4 mr-1 opacity-0 -ml-2 group-hover:opacity-100 
          group-hover:ml-0 transition-all duration-300" />
        <span>{link.label}</span>
        {link.new && (
          <span className="ml-2 px-2 py-0.5 text-xs font-semibold bg-primary/10 
            text-primary rounded-full animate-pulse">
            New
          </span>
        )}
        {link.featured && (
          <Star className="ml-2 w-4 h-4 text-primary animate-pulse" />
        )}
      </Link>
    </motion.li>
  );
}