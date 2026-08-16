"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { projects } from "@/data/projects";

type Item = {
  id: string;
  label: string;
  hint: string;
  keywords: string;
  run: () => void;
};

export default function CommandPalette({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [cursor, setCursor] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Reset query/cursor when the palette transitions open — adjusted during
  // render (React's recommended pattern) rather than in an effect, so it
  // can't cause a cascading extra render.
  const [prevOpen, setPrevOpen] = useState(open);
  if (open !== prevOpen) {
    setPrevOpen(open);
    if (open) {
      setQuery("");
      setCursor(0);
    }
  }

  // Same pattern: re-clamp the cursor whenever the query changes.
  const [prevQuery, setPrevQuery] = useState(query);
  if (query !== prevQuery) {
    setPrevQuery(query);
    setCursor(0);
  }

  const items = useMemo<Item[]>(() => {
    const go = (href: string) => () => {
      onOpenChange(false);
      if (href.startsWith("http")) {
        window.open(href, "_blank", "noopener,noreferrer");
      } else {
        router.push(href);
      }
    };

    return [
      {
        id: "home",
        label: "Home",
        hint: "Page",
        keywords: "home index start",
        run: go("/"),
      },
      {
        id: "all-projects",
        label: "All projects",
        hint: "Page",
        keywords: "projects work portfolio case studies",
        run: go("/projects"),
      },
      ...projects.map((p) => ({
        id: p.slug,
        label: p.title,
        hint: p.categories[0],
        keywords: `${p.title} ${p.tech.join(" ")} ${p.categories.join(" ")} ${p.summary}`,
        run: go(p.caseStudy ?? p.github),
      })),
      {
        id: "resume",
        label: "Download résumé",
        hint: "Action",
        keywords: "resume cv pdf download",
        run: () => {
          onOpenChange(false);
          window.location.href = "/ReethJain_AIMLE.pdf";
        },
      },
      {
        id: "github",
        label: "GitHub — reethj-07",
        hint: "External",
        keywords: "github source code repos",
        run: go("https://github.com/reethj-07"),
      },
      {
        id: "linkedin",
        label: "LinkedIn",
        hint: "External",
        keywords: "linkedin contact social",
        run: go("https://linkedin.com/in/reeth-jain-rj777"),
      },
      {
        id: "email",
        label: "Email Reeth",
        hint: "Action",
        keywords: "email contact mail reach out hire",
        run: () => {
          onOpenChange(false);
          window.location.href = "mailto:reeth_j@ch.iitr.ac.in";
        },
      },
    ];
  }, [onOpenChange, router]);

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter((i) =>
      `${i.label} ${i.keywords}`.toLowerCase().includes(q),
    );
  }, [items, query]);

  // ⌘K / Ctrl-K to open from anywhere.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
      if (e.key === "Escape") onOpenChange(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onOpenChange]);

  useEffect(() => {
    if (open) {
      // Focus after the entrance transition has committed.
      const t = setTimeout(() => inputRef.current?.focus(), 40);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    listRef.current
      ?.querySelector<HTMLElement>(`[data-index="${cursor}"]`)
      ?.scrollIntoView({ block: "nearest" });
  }, [cursor]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setCursor((c) => (results.length ? (c + 1) % results.length : 0));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setCursor((c) =>
        results.length ? (c - 1 + results.length) % results.length : 0,
      );
    } else if (e.key === "Enter") {
      e.preventDefault();
      results[cursor]?.run();
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          className="fixed inset-0 z-[70] flex items-start justify-center px-4 pt-[12vh]"
          onMouseDown={() => onOpenChange(false)}
        >
          <div className="absolute inset-0 bg-[oklch(0.09_0.008_265_/_0.75)] backdrop-blur-sm" />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Command palette"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            onMouseDown={(e) => e.stopPropagation()}
            onKeyDown={onKeyDown}
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-[var(--line-strong)] bg-[var(--bg-elevated)] shadow-[0_32px_80px_-24px_oklch(0_0_0/0.9)]"
          >
            <div className="flex items-center gap-3 border-b border-[var(--line)] px-4">
              <svg
                className="h-4 w-4 shrink-0 text-[var(--fg-faint)]"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search projects, pages, links…"
                className="w-full bg-transparent py-4 text-sm text-[var(--fg)] outline-none placeholder:text-[var(--fg-faint)]"
              />
              <kbd className="hidden shrink-0 rounded border border-[var(--line)] px-1.5 py-0.5 font-mono text-[0.625rem] text-[var(--fg-faint)] sm:block">
                ESC
              </kbd>
            </div>

            <div ref={listRef} className="max-h-[52vh] overflow-y-auto p-2">
              {results.length === 0 && (
                <p className="px-3 py-8 text-center text-sm text-[var(--fg-faint)]">
                  Nothing matches “{query}”.
                </p>
              )}

              {results.map((item, i) => (
                <button
                  key={item.id}
                  data-index={i}
                  type="button"
                  onMouseEnter={() => setCursor(i)}
                  onClick={item.run}
                  className={`flex w-full items-center justify-between gap-4 rounded-lg px-3 py-2.5 text-left text-sm transition-colors ${
                    i === cursor
                      ? "bg-[var(--panel-strong)] text-[var(--fg)]"
                      : "text-[var(--fg-muted)]"
                  }`}
                >
                  <span className="truncate">{item.label}</span>
                  <span className="shrink-0 font-mono text-[0.625rem] uppercase tracking-wider text-[var(--fg-faint)]">
                    {item.hint}
                  </span>
                </button>
              ))}
            </div>

            <div className="flex items-center gap-4 border-t border-[var(--line)] px-4 py-2.5 font-mono text-[0.625rem] text-[var(--fg-faint)]">
              <span>↑↓ navigate</span>
              <span>↵ open</span>
              <span className="ml-auto">{results.length} results</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
