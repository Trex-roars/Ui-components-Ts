"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Input } from "../input";
import { Button } from "../button";
import { Send, Sparkles } from "lucide-react";
import { toast } from "sonner";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for subscribing! Welcome aboard! 🚀");
    setEmail("");
  };

  return (
    <div className="w-full space-y-4">
      <div className="space-y-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2"
        >
          <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            Join Our Newsletter
          </h3>
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </motion.div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Get exclusive updates, tips, and special offers delivered directly to your inbox.
          Join our growing community today!
        </p>
      </div>

      <motion.form 
        onSubmit={handleSubmit}
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-2">
          <Input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 h-12 px-4 bg-background border-2 focus:border-primary"
            required
          />
          <Button
            type="submit"
            className="h-12 px-6 bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Send className="w-5 h-5 mr-2" />
            <span>Subscribe</span>
          </Button>
        </div>
        
        {/* Animated border effect */}
        <motion.div
          className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-primary via-primary/50 to-primary opacity-0"
          animate={{
            opacity: isHovered ? 0.2 : 0,
          }}
          transition={{ duration: 0.3 }}
          style={{ zIndex: -1 }}
        />
      </motion.form>

      <p className="text-xs text-muted-foreground">
        By subscribing, you agree to our Privacy Policy and Terms of Service.
        You can unsubscribe at any time.
      </p>
    </div>
  );
}