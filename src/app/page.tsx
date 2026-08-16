"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Reveal, { Stagger, StaggerItem } from "@/components/motion/Reveal";
import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/SkillBadge";
import { featuredProjects } from "@/data/projects";

const EXPERIENCE = [
  {
    role: "AI/ML Expert",
    org: "Deccan AI Experts · Freelance",
    location: "Hyderabad, Telangana, India · Remote",
    period: "Mar 2026 – Present",
    tags: ["LLM Evaluation", "RLHF", "SFT", "Prompt Engineering", "Model Alignment", "Benchmarking"],
    points: [
      "Focused on improving the reliability, alignment, and performance of large-scale AI systems through human-in-the-loop evaluation.",
      "Contributed to LLM evaluation pipelines, including RLHF, response ranking, and preference modeling.",
      "Curated datasets for supervised fine-tuning (SFT) and evaluation, including prompt-response pairs and edge cases.",
      "Evaluated model outputs across factuality, reasoning, coherence, safety, and instruction adherence.",
      "Applied prompt engineering to stress-test and improve model robustness while supporting benchmarking workflows with structured evaluation criteria and quality metrics.",
    ],
  },
  {
    role: "AI SDE Intern",
    org: "Xelron.ai",
    period: "Feb 2026 – Present",
    tags: ["AI Agents", "Benchmarking", "Docker", "pytest", "TOML", "JSON Specs", "Python"],
    points: [
      "Built 15+ production-grade AI agent benchmarks using Dockerized environments, pytest suites, and TOML-driven configs to ensure reproducible Harbor evaluations across runs.",
      "Engineered an automated validation harness with 11 quality gates covering format checks, deterministic outputs, edge-case handling, and scoring consistency to reduce benchmark drift.",
      "Standardized task specifications with JSON schemas, explicit constraints, and adversarial edge-case definitions, significantly improving reproducibility, traceability, and auditability.",
      "Delivered benchmark packs across ML, data processing, security, and scientific-computing domains, expanding evaluation coverage and enabling more reliable cross-domain model comparisons.",
    ],
  },
  {
    role: "AI Developer Intern",
    org: "Hello agentic.ai",
    period: "Dec 2025 – Feb 2026",
    tags: ["Agentic AI", "LangGraph", "Multi-Agent Systems", "AI Workflows", "Python"],
    points: [
      "Designed and developed agentic AI systems with LangGraph state-machine workflows, enabling autonomous task decomposition, planning, and coordinated multi-agent execution.",
      "Built robust tool-augmented pipelines integrating memory, retrieval, and external APIs so agents could handle complex multi-step tasks with better context retention and decision quality.",
      "Implemented production-focused reliability patterns including structured error handling, retries, guardrails, and fallback paths to improve safety and reduce workflow failure rates.",
      "Collaborated on deployment readiness by improving observability, evaluation loops, and maintainable Python module design for scalable agent operations.",
    ],
  },
];

const STACK = [
  {
    label: "AI/ML Frameworks & Libraries",
    items: ["Python", "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "OpenCV", "NumPy", "Pandas"],
  },
  {
    label: "LLM & GenAI Tools",
    items: ["LangChain", "LangGraph", "LlamaIndex", "OpenAI API", "Mistral", "RAG", "FAISS", "Whisper", "LoRA/QLoRA", "Phi-3", "AI Agents"],
  },
  {
    label: "Backend & APIs",
    items: ["FastAPI", "Flask", "Streamlit", "SQL", "PostgreSQL", "Redis"],
  },
  {
    label: "DevOps & Cloud Infrastructure",
    items: ["Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions", "AWS", "Azure", "GCP", "TOML"],
  },
  {
    label: "MLOps & Observability",
    items: ["MLflow", "DVC", "Airflow", "Kafka", "Prometheus", "Grafana", "OpenTelemetry", "Sentry", "Benchmarking", "Deterministic Evaluation"],
  },
  {
    label: "Development & Analysis",
    items: ["Git", "Jupyter", "VS Code", "C++", "JSON", "pytest", "NLP", "Computer Vision", "Edge-Case Testing"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--fg)]">
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden px-6 pb-20 pt-[calc(var(--nav-h)+3.5rem)] sm:pb-28 sm:pt-[calc(var(--nav-h)+5rem)]">
        <div className="grid-mesh pointer-events-none absolute inset-0 -z-10" aria-hidden />
        <div
          className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
          aria-hidden
          style={{ background: "radial-gradient(circle, oklch(0.72 0.15 232 / 0.16), transparent 70%)" }}
        />

        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="mb-6 flex items-center gap-2.5">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] animate-pulse-dot" />
              </span>
              <span className="eyebrow">Open to ML / GenAI / MLOps roles</span>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display text-5xl text-[var(--fg)] sm:text-6xl md:text-7xl">
              Reeth Jain
            </h1>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-4 text-xl font-medium text-[var(--accent-bright)] sm:text-2xl">
              ML Engineer · GenAI &amp; Agentic AI Systems · MLOps
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <p className="text-pretty mt-6 max-w-2xl text-base leading-relaxed text-[var(--fg-subtle)] md:text-lg">
              Building production-grade AI systems across{" "}
              <span className="font-medium text-[var(--fg)]">large language models</span>,{" "}
              <span className="font-medium text-[var(--fg)]">retrieval-augmented generation</span>, and{" "}
              <span className="font-medium text-[var(--fg)]">autonomous agent frameworks</span> — from
              research prototype to deployed infrastructure.
            </p>
          </Reveal>

          <Reveal delay={0.26}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#work"
                className="rounded-full bg-[var(--accent)] px-5 py-2.5 text-sm font-medium text-[var(--bg)] transition-transform hover:scale-[1.03]"
              >
                View work
              </a>
              <a
                href="https://github.com/reethj-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-2.5 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/reeth-jain-rj777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-5 py-2.5 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
              >
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:reeth_j@ch.iitr.ac.in"
                className="flex items-center gap-2 rounded-full border border-[var(--line)] px-5 py-2.5 text-sm font-medium text-[var(--fg-muted)] transition-colors hover:border-[var(--line-strong)] hover:text-[var(--fg)]"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6">
        {/* ================= WORK ================= */}
        <section id="work" className="scroll-mt-[var(--nav-h)] py-20 sm:py-28">
          <SectionHeading
            eyebrow="Selected Work"
            title="Featured Projects"
            description="Agentic pipelines, retrieval systems, and infrastructure built end-to-end — from problem framing to a deployed, evaluated system."
            action={
              <Link
                href="/projects"
                className="flex items-center gap-1.5 text-sm font-medium text-[var(--accent-bright)] transition-colors hover:text-[var(--accent)]"
              >
                All projects
                <span aria-hidden>→</span>
              </Link>
            }
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* ================= EXPERIENCE ================= */}
        <section id="experience" className="scroll-mt-[var(--nav-h)] py-20 sm:py-28">
          <SectionHeading eyebrow="Career" title="Experience" />

          <Stagger className="space-y-5">
            {EXPERIENCE.map((job) => (
              <StaggerItem key={job.role + job.org}>
                <div className="panel rounded-[var(--radius-lg)] p-6 transition-colors hover:border-[var(--line-strong)] sm:p-7">
                  <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--fg)]">{job.role}</h3>
                      <p className="font-medium text-[var(--accent-bright)]">{job.org}</p>
                      {job.location && (
                        <p className="mt-0.5 text-sm text-[var(--fg-faint)]">{job.location}</p>
                      )}
                    </div>
                    <span className="font-mono text-xs text-[var(--fg-faint)] sm:text-right">
                      {job.period}
                    </span>
                  </div>

                  <div className="mb-4 flex flex-wrap gap-2">
                    {job.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--line)] bg-[var(--bg-sunken)] px-2.5 py-1 text-[0.6875rem] text-[var(--fg-muted)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-2">
                    {job.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-[var(--fg-subtle)]">
                        <span className="mt-1 shrink-0 text-[var(--accent)]">▹</span>
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </section>

        <div className="hairline" />

        {/* ================= STACK ================= */}
        <section id="stack" className="scroll-mt-[var(--nav-h)] py-20 sm:py-28">
          <SectionHeading eyebrow="Toolbox" title="Technical Stack" />

          <div className="space-y-7">
            {STACK.map((group) => (
              <div key={group.label}>
                <h3 className="eyebrow mb-3">{group.label}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="hairline" />

        {/* ================= CONTACT ================= */}
        <section id="contact" className="scroll-mt-[var(--nav-h)] py-20 sm:py-28">
          <div className="panel relative overflow-hidden rounded-[var(--radius-lg)] px-6 py-14 text-center sm:px-12">
            <div
              className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full opacity-30 blur-3xl"
              aria-hidden
              style={{ background: "radial-gradient(circle, oklch(0.72 0.15 232 / 0.2), transparent 70%)" }}
            />

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative space-y-5"
            >
              <h2 className="display text-3xl text-[var(--fg)] sm:text-4xl">
                Let&apos;s build something impactful
              </h2>
              <p className="text-pretty mx-auto max-w-xl text-base leading-relaxed text-[var(--fg-subtle)]">
                Open to <span className="font-medium text-[var(--fg)]">ML Engineering</span>,{" "}
                <span className="font-medium text-[var(--fg)]">GenAI</span>, and{" "}
                <span className="font-medium text-[var(--fg)]">MLOps</span> roles where I can
                contribute to production-grade AI systems and scalable infrastructure.
              </p>

              <div className="flex flex-col justify-center gap-3 pt-4 sm:flex-row">
                <a
                  href="/ReethJain_AIMLE.pdf"
                  download
                  className="flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-7 py-3.5 text-sm font-semibold text-[var(--bg)] transition-transform hover:scale-[1.03]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download résumé
                </a>
                <a
                  href="mailto:reeth_j@ch.iitr.ac.in"
                  className="flex items-center justify-center gap-2 rounded-full border border-[var(--line-strong)] px-7 py-3.5 text-sm font-semibold text-[var(--fg)] transition-colors hover:bg-[var(--panel-strong)]"
                >
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Get in touch
                </a>
              </div>
            </motion.div>
          </div>

          <p className="mt-10 text-center text-sm italic text-[var(--fg-faint)]">
            &quot;Building AI systems that scale from prototype to production&quot;
          </p>
        </section>
      </div>
    </main>
  );
}
