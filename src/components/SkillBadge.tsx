"use client";

import { motion } from "framer-motion";

export default function SkillBadge({ label }: { label: string }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      className="inline-flex cursor-default items-center rounded-lg border border-[var(--line)] bg-[var(--panel)] px-3 py-1.5 text-sm text-[var(--fg-muted)] transition-colors hover:border-[var(--accent-line)] hover:text-[var(--fg)]"
    >
      {label}
    </motion.span>
  );
}
