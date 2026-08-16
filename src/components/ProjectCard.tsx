"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useSpotlight } from "@/lib/useSpotlight";
import type { Project } from "@/data/projects";

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const { ref, onPointerMove } = useSpotlight<HTMLDivElement>();
  const primaryHref = project.caseStudy ?? project.github;
  const isInternal = Boolean(project.caseStudy);

  return (
    <motion.div
      ref={ref}
      onPointerMove={onPointerMove}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.3), ease: EASE }}
      className="spotlight spotlight-border group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--panel)] p-6 transition-colors hover:border-[var(--line-strong)]"
    >
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <span className="eyebrow">{project.categories[0]}</span>
          <span className="text-[var(--fg-faint)]">·</span>
          <span className="font-mono text-[0.6875rem] text-[var(--fg-faint)]">{project.year}</span>
        </div>
        {project.stat && (
          <div className="shrink-0 text-right">
            <p className="font-mono text-sm font-semibold text-[var(--accent-bright)]">
              {project.stat.value}
            </p>
          </div>
        )}
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-[var(--fg)]">
        {isInternal ? (
          <Link href={primaryHref} className="transition-colors hover:text-[var(--accent-bright)]">
            {project.title}
          </Link>
        ) : (
          <a
            href={primaryHref}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[var(--accent-bright)]"
          >
            {project.title}
          </a>
        )}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-[var(--fg-subtle)]">
        {project.summary}
      </p>

      {project.stat && (
        <p className="mt-2 text-xs text-[var(--fg-faint)]">{project.stat.label}</p>
      )}

      <div className="mt-4 flex flex-wrap gap-1.5">
        {project.tech.slice(0, 5).map((t) => (
          <span
            key={t}
            className="rounded-md border border-[var(--line)] bg-[var(--bg-sunken)] px-2 py-1 text-[0.6875rem] text-[var(--fg-muted)]"
          >
            {t}
          </span>
        ))}
        {project.tech.length > 5 && (
          <span className="rounded-md px-2 py-1 text-[0.6875rem] text-[var(--fg-faint)]">
            +{project.tech.length - 5}
          </span>
        )}
      </div>

      <AnimatePresence initial={false}>
        {expanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="mt-5 space-y-4 border-t border-[var(--line)] pt-4">
              <p className="text-sm leading-relaxed text-[var(--fg-subtle)]">
                <span className="font-mono text-[0.6875rem] uppercase tracking-wider text-[var(--fg-faint)]">
                  The constraint —{" "}
                </span>
                {project.problem}
              </p>
              <ul className="space-y-2">
                {project.highlights.map((h) => (
                  <li key={h} className="flex gap-2.5 text-sm leading-relaxed text-[var(--fg-subtle)]">
                    <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="mt-5 flex items-center justify-between gap-3 border-t border-[var(--line)] pt-4">
        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          aria-expanded={expanded}
          className="flex items-center gap-1.5 text-xs font-medium text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
        >
          {expanded ? "Less" : "Details"}
          <motion.svg
            animate={{ rotate: expanded ? 180 : 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="h-3 w-3"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </motion.svg>
        </button>

        <div className="flex items-center gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
            className="text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
          >
            <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${project.title} live demo`}
              className="text-[var(--fg-faint)] transition-colors hover:text-[var(--fg)]"
            >
              <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          )}
          {isInternal && (
            <Link
              href={primaryHref}
              className="flex items-center gap-1 text-xs font-medium text-[var(--accent-bright)] transition-colors hover:text-[var(--accent)]"
            >
              Case study
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
