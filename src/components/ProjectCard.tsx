"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ProjectCardProps = {
  title: string;
  description: string;
  tech: string[];
  href: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  href,
}: ProjectCardProps) {
  return (
    <Link href={href} className="block h-full">
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="group relative rounded-xl border border-gray-800 p-6 h-full
                   bg-gradient-to-br from-gray-900/80 via-gray-900/50 to-gray-900/80
                   backdrop-blur-md
                   hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20
                   transition-all duration-300 overflow-hidden"
      >
        {/* Glassmorphism gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-cyan-500/5
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Top gradient accent */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="relative z-10">
          <h3 className="text-xl font-bold mb-3 transition-all duration-300
                       text-white
                       group-hover:text-transparent group-hover:bg-gradient-to-r
                       group-hover:from-blue-400 group-hover:to-cyan-400
                       group-hover:bg-clip-text">
            {title}
          </h3>

          <p className="text-sm text-gray-400 mb-4 leading-relaxed group-hover:text-gray-300 transition-colors">
            {description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((t) => (
              <span
                key={t}
                className="text-xs px-2.5 py-1 rounded-md
                         bg-gray-800/80 text-gray-300
                         border border-gray-700
                         backdrop-blur-sm
                         group-hover:border-blue-500/50 group-hover:bg-gray-800
                         group-hover:text-white
                         transition-all duration-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="inline-flex items-center gap-2 text-sm text-blue-400 font-medium
                        group-hover:text-blue-300 group-hover:gap-3 transition-all">
            <span>View Case Study</span>
            <motion.span
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </div>
        </div>

        {/* Bottom right decorative element */}
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </Link>
  );
}
