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
      transition={{ duration: 0.5 }}
      className="my-16 rounded-2xl border border-gray-800
                 bg-gradient-to-b from-zinc-900 to-black
                 p-6 shadow-lg"
    >
      {(title || description) && (
        <div className="mb-4 space-y-1">
          {title && (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-gray-300">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-xs text-gray-500 max-w-2xl">
              {description}
            </p>
          )}
        </div>
      )}

      <div className="rounded-xl border border-gray-700 bg-black p-2">
        <Image
          src={src}
          alt={alt}
          width={1200}
          height={700}
          className="rounded-lg"
        />
      </div>
    </motion.div>
  );
}
