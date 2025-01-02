import { Github, Twitter, Linkedin, Mail } from "lucide-react";
import { FooterSection, SocialLink } from "./types";

export const footerLinks: FooterSection[] = [
  {
    title: "Product",
    links: [
      { label: "Form Builder", href: "/form-builder", new: true },
      { label: "Templates", href: "/templates" },
      { label: "Analytics", href: "/analytics", featured: true },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation", href: "/docs" },
      { label: "API Reference", href: "/api", new: true },
      { label: "Tutorials", href: "/tutorials" },
      { label: "Examples", href: "/examples" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog", featured: true },
      { label: "Careers", href: "/careers", new: true },
      { label: "Contact", href: "/contact" },
    ],
  },
];

export const socialLinks: SocialLink[] = [
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