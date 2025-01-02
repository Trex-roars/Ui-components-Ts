"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "./button";
import { HeroStats } from "./hero-stats";
import { MovingBorder } from "./moving-border";
import { motion } from "framer-motion";
import { InteractiveShowcase } from "./interactive-showcase";
import { AnimatedGradientText } from "./animated-gradient-text";
import { FloatingInsights } from "./floating-insights";

export function HeroSection() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div className="absolute inset-0 bg-gradient-to-tr from-background via-primary/10 to-background" />
      
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="space-y-24">
          {/* Hero Content */}
          <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-16">
            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-xl lg:max-w-lg"
              >
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                  Transform Feedback into{" "}
                  <AnimatedGradientText>
                    Growth
                  </AnimatedGradientText>
                </h1>
                <p className="mt-6 text-lg leading-8 text-muted-foreground">
                  Streamline your feedback collection, analysis, and implementation process. 
                  Turn customer insights into actionable improvements for your business.
                </p>
                <div className="mt-10 flex items-center gap-x-6">
                  <MovingBorder duration={3000}>
                    <Button size="lg" className="relative">
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </MovingBorder>
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </div>
              </motion.div>

              {/* Floating Insights */}
              <div className="relative h-[300px] w-[300px] mt-12">
                <FloatingInsights />
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative lg:mt-8"
            >
              <InteractiveShowcase />
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <HeroStats />
          </motion.div>
        </div>
      </div>
    </div>
  );
}