"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com",
    label: "GitHub",
    color: "hover:bg-[#333] hover:text-white",
  },
  {
    icon: Twitter,
    href: "https://twitter.com",
    label: "Twitter",
    color: "hover:bg-[#1DA1F2] hover:text-white",
  },
  {
    icon: Linkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
    color: "hover:bg-[#0A66C2] hover:text-white",
  },
  {
    icon: Mail,
    href: "mailto:contact@example.com",
    label: "Email",
    color: "hover:bg-primary hover:text-primary-foreground",
  },
];

export function SocialLinks() {
  return (
    <div className="flex flex-wrap gap-3">
      {socialLinks.map((social) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`p-3 rounded-xl bg-background border-2 border-border shadow-sm 
            ${social.color} transition-all duration-300 group flex items-center gap-2`}
        >
          <social.icon className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
          <span className="text-sm font-medium hidden sm:inline">{social.label}</span>
          <ExternalLink className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
        </motion.a>
      ))}
    </div>
  );
}