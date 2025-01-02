"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export function BrandLogo() {
  return (
    <Link href="/" className="inline-flex items-center space-x-3 group">
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 
          flex items-center justify-center ring-2 ring-primary/20 group-hover:ring-primary/30 
          transition-all duration-300"
      >
        <Heart className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
      </motion.div>
      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r 
        from-primary via-primary/80 to-primary">
        FormBuilder
      </span>
    </Link>
  );
}