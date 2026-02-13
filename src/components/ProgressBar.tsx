"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface ProgressBarProps {
  label: string;
  value: number; // 0-100
  maxValue?: number;
  color?: "blue" | "green" | "purple" | "cyan";
  showPercentage?: boolean;
  delay?: number;
  height?: "sm" | "md" | "lg";
}

export default function ProgressBar({
  label,
  value,
  maxValue = 100,
  color = "blue",
  showPercentage = true,
  delay = 0,
  height = "md",
}: ProgressBarProps) {
  const [animatedValue, setAnimatedValue] = useState(0);
  const percentage = Math.min((value / maxValue) * 100, 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedValue(percentage);
    }, delay * 1000);
    return () => clearTimeout(timer);
  }, [percentage, delay]);

  const getColorClasses = () => {
    switch (color) {
      case "green":
        return {
          bg: "bg-green-500",
          glow: "shadow-green-500/50",
          text: "text-green-400",
        };
      case "purple":
        return {
          bg: "bg-purple-500",
          glow: "shadow-purple-500/50",
          text: "text-purple-400",
        };
      case "cyan":
        return {
          bg: "bg-cyan-500",
          glow: "shadow-cyan-500/50",
          text: "text-cyan-400",
        };
      default:
        return {
          bg: "bg-blue-500",
          glow: "shadow-blue-500/50",
          text: "text-blue-400",
        };
    }
  };

  const getHeightClass = () => {
    switch (height) {
      case "sm":
        return "h-2";
      case "lg":
        return "h-4";
      default:
        return "h-3";
    }
  };

  const colors = getColorClasses();

  return (
    <div className="w-full">
      {/* Label and Value */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-300">{label}</span>
        {showPercentage && (
          <span className={`text-sm font-bold ${colors.text}`}>
            {value}%
          </span>
        )}
      </div>

      {/* Progress Bar Track */}
      <div className={`relative w-full ${getHeightClass()} bg-gray-800 rounded-full overflow-hidden`}>
        {/* Animated Fill */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${animatedValue}%` }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
            delay: delay,
          }}
          className={`h-full ${colors.bg} rounded-full relative`}
        >
          {/* Shimmer Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent
                        animate-shimmer" />
        </motion.div>

        {/* Glow Effect on Hover */}
        <motion.div
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          className={`absolute inset-0 ${colors.bg} opacity-0 blur-md ${colors.glow}`}
          style={{ width: `${animatedValue}%` }}
        />
      </div>
    </div>
  );
}
