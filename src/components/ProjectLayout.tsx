import Link from "next/link";
import Badge from "@/components/Badge";
import Reveal from "@/components/motion/Reveal";
import { projectNeighbours } from "@/data/projects";

export default function ProjectLayout({
  slug,
  title,
  subtitle,
  description,
  badges,
  tags,
  github,
  liveDemo,
  children,
}: {
  slug?: string;
  title: string;
  subtitle?: string;
  description?: string;
  badges?: string[];
  tags?: string[];
  github?: string;
  liveDemo?: string;
  children: React.ReactNode;
}) {
  // Use tags if provided, otherwise fall back to badges for backward compatibility
  const displayTags = tags || badges || [];
  const displayDescription = subtitle || description;
  const { prev, next } = slug ? projectNeighbours(slug) : { prev: undefined, next: undefined };

  return (
    <main className="min-h-screen bg-[var(--bg)] px-6 pb-24 pt-[calc(var(--nav-h)+2.5rem)] text-[var(--fg)]">
      <div className="mx-auto max-w-4xl space-y-16">
        <Reveal>
          <Link
            href="/projects"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--fg-subtle)] transition-colors hover:text-[var(--fg)]"
          >
            <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11 17l-5-5 5-5M6 12h12" />
            </svg>
            All projects
          </Link>

          {/* HEADER */}
          <section className="space-y-5">
            <div className="space-y-2">
              <h1 className="display text-3xl text-[var(--fg)] md:text-5xl">
                {title}
              </h1>
              {subtitle && (
                <p className="text-lg font-medium text-[var(--accent-bright)] md:text-xl">
                  {subtitle}
                </p>
              )}
            </div>

            {displayDescription && (
              <p className="max-w-3xl leading-relaxed text-[var(--fg-subtle)]">
                {displayDescription}
              </p>
            )}

            {/* Links */}
            {(github || liveDemo) && (
              <div className="flex flex-wrap gap-3 pt-2">
                {github && (
                  <a
                    href={github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
                  >
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    GitHub
                  </a>
                )}
                {liveDemo && (
                  <a
                    href={liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-[var(--accent-line)] bg-[var(--accent-dim)] px-4 py-2 text-sm font-medium text-[var(--accent-bright)] transition-colors hover:bg-[oklch(0.72_0.15_232_/_0.24)]"
                  >
                    <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live Demo
                  </a>
                )}
              </div>
            )}

            {displayTags.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-2">
                {displayTags.map((tag) => (
                  <Badge key={tag} label={tag} />
                ))}
              </div>
            )}
          </section>
        </Reveal>

        <div className="hairline" />

        {/* CONTENT */}
        <section className="space-y-14">{children}</section>

        {/* PREV / NEXT PAGER */}
        {(prev || next) && (
          <>
            <div className="hairline" />
            <nav className="grid gap-4 sm:grid-cols-2" aria-label="More projects">
              {prev && (
                <Link
                  href={prev.caseStudy ?? prev.github}
                  className="group panel rounded-[var(--radius)] p-5 transition-colors hover:border-[var(--line-strong)]"
                >
                  <p className="eyebrow mb-2">Previous</p>
                  <p className="text-sm font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent-bright)]">
                    {prev.title}
                  </p>
                </Link>
              )}
              {next && (
                <Link
                  href={next.caseStudy ?? next.github}
                  className="group panel rounded-[var(--radius)] p-5 text-right transition-colors hover:border-[var(--line-strong)] sm:col-start-2"
                >
                  <p className="eyebrow mb-2">Next</p>
                  <p className="text-sm font-medium text-[var(--fg)] transition-colors group-hover:text-[var(--accent-bright)]">
                    {next.title}
                  </p>
                </Link>
              )}
            </nav>
          </>
        )}
      </div>
    </main>
  );
}
