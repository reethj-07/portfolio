"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import ProjectCard from "@/components/ProjectCard";
import { CATEGORIES, projects, type Category } from "@/data/projects";

type Filter = "All" | Category;

export default function ProjectsPage() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return projects.filter((p) => {
      const matchesCategory = filter === "All" || p.categories.includes(filter);
      if (!matchesCategory) return false;
      if (!q) return true;
      return `${p.title} ${p.summary} ${p.tech.join(" ")}`.toLowerCase().includes(q);
    });
  }, [filter, query]);

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pb-24 pt-[calc(var(--nav-h)+2.5rem)] text-[var(--fg)]">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-4 flex items-center gap-3">
            <span aria-hidden className="h-px w-6 bg-[var(--accent-line)]" />
            <span className="eyebrow">Portfolio</span>
          </div>
          <h1 className="display text-4xl text-[var(--fg)] sm:text-5xl md:text-[3.25rem]">
            Projects
          </h1>
          <p className="text-pretty mt-4 max-w-2xl text-base leading-relaxed text-[var(--fg-subtle)] md:text-lg">
            Production-oriented ML and GenAI systems — end to end, from problem framing to
            deployment. Every claim on these pages is sourced from the project&apos;s own README.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-2">
              {(["All", ...CATEGORIES] as Filter[]).map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setFilter(cat)}
                  className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                    filter === cat
                      ? "text-[var(--fg)]"
                      : "text-[var(--fg-subtle)] hover:text-[var(--fg)]"
                  }`}
                >
                  {filter === cat && (
                    <motion.span
                      layoutId="project-filter-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-[var(--panel-strong)] ring-1 ring-[var(--line)]"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                    />
                  )}
                  {cat}
                </button>
              ))}
            </div>

            <div className="relative sm:w-64">
              <svg
                className="pointer-events-none absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[var(--fg-faint)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Filter by tech, keyword…"
                className="w-full rounded-full border border-[var(--line)] bg-[var(--panel)] py-2 pl-9 pr-3 text-sm text-[var(--fg)] outline-none transition-colors placeholder:text-[var(--fg-faint)] focus:border-[var(--line-strong)]"
              />
            </div>
          </div>
        </Reveal>

        <div className="mt-10">
          {filtered.length === 0 ? (
            <p className="py-20 text-center text-sm text-[var(--fg-faint)]">
              No projects match &ldquo;{query}&rdquo; in {filter}.
            </p>
          ) : (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((project, i) => (
                <ProjectCard key={project.slug} project={project} index={i} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
