"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HighlightCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  metrics?: { label: string; value: string }[];
  delay?: number;
}

export default function HighlightCard({
  icon,
  title,
  description,
  metrics,
  delay = 0,
}: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8 }}
      className="relative group h-full"
    >
      <div className="h-full p-6 bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-900/80
                    backdrop-blur-md border border-gray-800 rounded-xl
                    hover:border-blue-500/50 transition-all duration-300
                    hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Icon with gradient background */}
        <div className="mb-4 w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20
                      flex items-center justify-center text-2xl
                      group-hover:from-blue-500/30 group-hover:to-cyan-500/30
                      transition-all duration-300 group-hover:scale-110">
          {icon}
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-white mb-3
                     group-hover:text-transparent group-hover:bg-gradient-to-r
                     group-hover:from-blue-400 group-hover:to-cyan-400
                     group-hover:bg-clip-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-4 text-sm">
          {description}
        </p>

        {/* Metrics Grid */}
        {metrics && metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 mt-auto pt-4 border-t border-gray-800/50">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <p className="text-lg font-bold text-blue-400 group-hover:text-blue-300 transition-colors">
                  {metric.value}
                </p>
                <p className="text-xs text-gray-500">{metric.label}</p>
              </div>
            ))}
          </div>
        )}

        {/* Animated border gradient on hover */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/0 via-cyan-500/0 to-blue-500/0
                      group-hover:from-blue-500/10 group-hover:via-cyan-500/10 group-hover:to-blue-500/10
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      </div>
    </motion.div>
  );
}
