"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contact" },
];

export default function Nav({ onOpenPalette }: { onOpenPalette: () => void }) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight whichever section owns the upper third of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const targets = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: 0 },
    );

    targets.forEach((t) => observer.observe(t));
    return () => observer.disconnect();
  }, [isHome]);

  // Lock body scroll while the mobile drawer is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close the mobile drawer on navigation — adjusted during render (React's
  // recommended pattern) rather than in an effect, so it can't cause a
  // cascading extra render.
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setMenuOpen(false);
  }

  const href = (id: string) => (isHome ? `#${id}` : `/#${id}`);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? "border-b border-[var(--line)] bg-[oklch(0.145_0.008_265_/_0.72)] backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[var(--nav-h)] max-w-6xl items-center justify-between gap-4 px-5 sm:px-8"
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight"
          >
            <span className="relative grid h-7 w-7 place-items-center rounded-md border border-[var(--line-strong)] bg-[var(--panel-strong)] font-mono text-[0.6875rem] text-[var(--accent-bright)] transition-colors group-hover:border-[var(--accent-line)]">
              RJ
              <span className="absolute -right-0.5 -top-0.5 h-1.5 w-1.5 rounded-full bg-[var(--accent)] animate-pulse-dot" />
            </span>
            <span className="hidden sm:inline">Reeth Jain</span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <Link
              href="/projects"
              className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                pathname.startsWith("/projects")
                  ? "text-[var(--fg)]"
                  : "text-[var(--fg-subtle)] hover:text-[var(--fg)]"
              }`}
            >
              {pathname.startsWith("/projects") && (
                <motion.span
                  layoutId="nav-pill"
                  className="absolute inset-0 -z-10 rounded-full bg-[var(--panel-strong)] ring-1 ring-[var(--line)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              Projects
            </Link>

            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={href(s.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isHome && active === s.id
                    ? "text-[var(--fg)]"
                    : "text-[var(--fg-subtle)] hover:text-[var(--fg)]"
                }`}
              >
                {isHome && active === s.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-[var(--panel-strong)] ring-1 ring-[var(--line)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {s.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onOpenPalette}
              aria-label="Open command palette"
              className="hidden items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] py-1.5 pl-3 pr-2 text-xs text-[var(--fg-subtle)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)] sm:flex"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" strokeLinecap="round" />
              </svg>
              <span className="hidden lg:inline">Jump to…</span>
              <kbd className="rounded border border-[var(--line)] bg-[var(--bg-sunken)] px-1.5 py-0.5 font-mono text-[0.625rem] text-[var(--fg-faint)]">
                ⌘K
              </kbd>
            </button>

            <a
              href="/ReethJain_AIMLE.pdf"
              download
              className="hidden rounded-full border border-[var(--accent-line)] bg-[var(--accent-dim)] px-4 py-1.5 text-xs font-medium text-[var(--accent-bright)] transition-colors hover:bg-[oklch(0.72_0.15_232_/_0.24)] sm:block"
            >
              Résumé
            </a>

            <button
              type="button"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="grid h-9 w-9 place-items-center rounded-full border border-[var(--line)] text-[var(--fg-muted)] md:hidden"
            >
              <span className="relative block h-3 w-4">
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 block h-px w-4 bg-current transition-opacity duration-200 ${
                    menuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 block h-px w-4 bg-current transition-transform duration-300 ${
                    menuOpen ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        <motion.div
          style={{ scaleX: progress }}
          className="h-px origin-left bg-gradient-to-r from-[var(--accent)] to-[var(--accent-bright)]"
        />
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-[var(--bg)]/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex h-full flex-col gap-2 px-6 pb-10 pt-[calc(var(--nav-h)+2rem)]">
              {[{ id: "projects", label: "Projects", to: "/projects" }].map(
                (item) => (
                  <MobileLink
                    key={item.id}
                    href={item.to}
                    label={item.label}
                    index={0}
                    onClick={() => setMenuOpen(false)}
                  />
                ),
              )}
              {SECTIONS.map((s, i) => (
                <MobileLink
                  key={s.id}
                  href={href(s.id)}
                  label={s.label}
                  index={i + 1}
                  onClick={() => setMenuOpen(false)}
                />
              ))}

              <div className="mt-auto flex flex-col gap-3">
                <a
                  href="/ReethJain_AIMLE.pdf"
                  download
                  className="rounded-xl border border-[var(--accent-line)] bg-[var(--accent-dim)] px-5 py-3.5 text-center text-sm font-medium text-[var(--accent-bright)]"
                >
                  Download résumé
                </a>
                <a
                  href="mailto:reeth_j@ch.iitr.ac.in"
                  className="rounded-xl border border-[var(--line)] px-5 py-3.5 text-center text-sm text-[var(--fg-muted)]"
                >
                  reeth_j@ch.iitr.ac.in
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function MobileLink({
  href,
  label,
  index,
  onClick,
}: {
  href: string;
  label: string;
  index: number;
  onClick: () => void;
}) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.05 + index * 0.05, duration: 0.4 }}
      className="flex items-baseline gap-4 border-b border-[var(--line)] py-4 text-2xl font-medium tracking-tight text-[var(--fg-muted)] transition-colors active:text-[var(--fg)]"
    >
      <span className="font-mono text-xs text-[var(--fg-faint)]">
        0{index + 1}
      </span>
      {label}
    </motion.a>
  );
}
