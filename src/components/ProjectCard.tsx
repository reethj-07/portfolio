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
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group rounded-xl border border-gray-800 bg-zinc-900 p-6
                 hover:border-blue-500/40 hover:shadow-lg
                 transition-colors"
    >
      <h3 className="text-lg font-semibold mb-2
                     group-hover:text-blue-400 transition">
        {title}
      </h3>

      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {description}
      </p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((t) => (
          <span
            key={t}
            className="text-xs px-2 py-1 rounded-md
                       bg-gray-800 text-gray-300
                       border border-gray-700
                       group-hover:border-blue-500/40 transition"
          >
            {t}
          </span>
        ))}
      </div>

      <Link
        href={href}
        className="inline-block text-sm text-blue-400
                   hover:underline underline-offset-4"
      >
        View Case Study →
      </Link>
    </motion.div>
  );
}
