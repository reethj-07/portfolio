"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type DiagramProps = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
};

export default function Diagram({
  src,
  alt,
  title,
  description,
}: DiagramProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="my-16 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-lift)]"
    >
      {(title || description) && (
        <div className="mb-4 space-y-1">
          {title && (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--fg-muted)]">
              {title}
            </h3>
          )}
          {description && (
            <p className="max-w-2xl text-xs text-[var(--fg-faint)]">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg-sunken)] p-2">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="rounded-[calc(var(--radius)-4px)]"
        />
      </div>
    </motion.div>
  );
}
