"use client";

import { Card } from "./card";
import { MessageSquare, Star, TrendingUp, Users } from "lucide-react";
import { AnimatedNumbers } from "./animated-numbers";

export function HeroStats() {
  const stats = [
    {
      icon: <MessageSquare className="h-5 w-5 text-primary" />,
      value: 10000,
      label: "Active Users",
    },
    {
      icon: <Star className="h-5 w-5 text-primary" />,
      value: 98,
      label: "Satisfaction Rate",
      suffix: "%",
    },
    {
      icon: <Users className="h-5 w-5 text-primary" />,
      value: 500,
      label: "Enterprise Clients",
    },
    {
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
      value: 250,
      label: "Daily Insights",
    },
  ];

  return (
    <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={index} className="p-4 backdrop-blur-sm bg-card/50">
          <div className="flex items-center gap-x-2">
            {stat.icon}
            <span className="text-2xl font-bold">
              <AnimatedNumbers value={stat.value} />
              {stat.suffix}
            </span>
          </div>
          <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
        </Card>
      ))}
    </div>
  );
}