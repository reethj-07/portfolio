"use client";

import { motion, type Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 16,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Section({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className="space-y-6"
    >
      {title && (
        <h2 className="border-b border-[var(--line)] pb-3 text-xl font-semibold tracking-tight text-[var(--fg)] md:text-2xl">
          {title}
        </h2>
      )}

      <div className="text-sm leading-relaxed text-[var(--fg-subtle)]">
        {children}
      </div>
    </motion.section>
  );
}
