"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { motion } from "framer-motion";

export function Newsletter() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-foreground">
        Subscribe to our newsletter
      </h3>
      <p className="text-sm text-muted-foreground">
        Get the latest updates and resources delivered to your inbox.
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-background/50"
          required
        />
        <Button type="submit" className="w-full group">
          Subscribe
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: [0, 5, 0] }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
              ease: "easeInOut",
            }}
          >
            <Send className="ml-2 h-4 w-4" />
          </motion.div>
        </Button>
      </form>
    </div>
  );
}