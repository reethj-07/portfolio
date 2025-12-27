"use client";

import { motion } from "framer-motion";

// Define animation locally to avoid import errors
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { ease: "easeOut" },
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
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
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