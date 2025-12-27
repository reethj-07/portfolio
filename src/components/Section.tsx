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
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1], // ✅ valid easing
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
        <h2 className="text-2xl font-semibold border-b border-gray-800 pb-2">
          {title}
        </h2>
      )}
      {children}
    </motion.section>
  );
}
