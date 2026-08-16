"use client";

import { motion } from "framer-motion";
import { Fragment } from "react";

export type FlowStep = {
  label: string;
  note?: string;
};

/**
 * Lightweight text-based pipeline diagram for case studies that don't have
 * a rendered architecture image yet. Steps are read left-to-right on
 * desktop and top-to-bottom on mobile, connected by arrows.
 */
export default function ArchitectureFlow({
  title,
  description,
  steps,
}: {
  title?: string;
  description?: string;
  steps: FlowStep[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className="my-16 rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--bg-elevated)] p-6 shadow-[var(--shadow-lift)]"
    >
      {(title || description) && (
        <div className="mb-6 space-y-1">
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

      <div className="flex flex-col items-stretch gap-2 rounded-[var(--radius)] border border-[var(--line)] bg-[var(--bg-sunken)] p-4 md:flex-row md:items-center md:gap-0 md:overflow-x-auto">
        {steps.map((step, i) => (
          <Fragment key={step.label}>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="shrink-0 rounded-[var(--radius)] border border-[var(--line-strong)] bg-[var(--panel-strong)] px-4 py-3 text-center md:min-w-[9.5rem]"
            >
              <p className="font-mono text-[0.625rem] uppercase tracking-wider text-[var(--accent-bright)]">
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-1 text-sm font-medium text-[var(--fg)]">
                {step.label}
              </p>
              {step.note && (
                <p className="mt-1 text-xs leading-snug text-[var(--fg-faint)]">
                  {step.note}
                </p>
              )}
            </motion.div>

            {i < steps.length - 1 && (
              <div
                aria-hidden
                className="flex shrink-0 items-center justify-center py-1 text-[var(--fg-faint)] md:px-2 md:py-0"
              >
                <svg
                  className="h-4 w-4 rotate-90 md:rotate-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </div>
            )}
          </Fragment>
        ))}
      </div>
    </motion.div>
  );
}
