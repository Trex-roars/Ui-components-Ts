"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { footerLinks } from "./data";
import { Newsletter } from "./components/newsletter";
import { SocialLinks } from "./components/social-links";
import { BrandLogo } from "./components/brand-logo";
import { FooterSectionComponent } from "./components/footer-section";
import { BackgroundPattern } from "./components/background-pattern";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-32 bg-gradient-to-b from-background to-background/80">
      <BackgroundPattern />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-8 gap-12 lg:gap-8">
          {/* Branding Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-3 space-y-8"
          >
            <BrandLogo />
            
            <p className="text-muted-foreground leading-relaxed max-w-md">
              Create stunning forms with our intuitive builder. Collect responses, analyze data, 
              and make informed decisions with powerful analytics.
            </p>
            
            <SocialLinks />
          </motion.div>

          {/* Links Sections */}
          {footerLinks.map((section, index) => (
            <FooterSectionComponent 
              key={section.title} 
              section={section} 
              index={index} 
            />
          ))}

          {/* Newsletter Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-3"
          >
            <Newsletter />
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-20 pt-8 border-t border-border/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-muted-foreground">
              © {currentYear} FormBuilder. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-8">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors
                    hover:underline underline-offset-4"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}