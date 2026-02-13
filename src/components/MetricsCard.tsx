"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MetricsCardProps {
  value: string;
  label: string;
  sublabel?: string;
  icon?: ReactNode;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  gradient?: boolean;
  delay?: number;
}

export default function MetricsCard({
  value,
  label,
  sublabel,
  icon,
  trend,
  trendValue,
  gradient = true,
  delay = 0,
}: MetricsCardProps) {
  const getTrendColor = () => {
    if (trend === "up") return "text-green-400";
    if (trend === "down") return "text-red-400";
    return "text-gray-400";
  };

  const getTrendIcon = () => {
    if (trend === "up") return "↑";
    if (trend === "down") return "↓";
    return "→";
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className="relative group"
    >
      <div className="text-center p-6 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg
                    hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
        {/* Icon */}
        {icon && (
          <div className="flex justify-center mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        )}

        {/* Value */}
        <p
          className={`text-4xl font-bold mb-2 transition-all duration-300 ${
            gradient
              ? "bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300"
              : "text-blue-400 group-hover:text-blue-300"
          }`}
        >
          {value}
        </p>

        {/* Label */}
        <p className="text-sm text-gray-400 font-medium mb-1">{label}</p>

        {/* Sublabel */}
        {sublabel && (
          <p className="text-xs text-gray-500">{sublabel}</p>
        )}

        {/* Trend Indicator */}
        {trend && (
          <div className={`mt-2 text-xs font-medium ${getTrendColor()} flex items-center justify-center gap-1`}>
            <span className="text-base">{getTrendIcon()}</span>
            {trendValue && <span>{trendValue}</span>}
          </div>
        )}

        {/* Hover Glow Effect */}
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
}
