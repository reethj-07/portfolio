import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("autonomous-platform-intelligence-agent")!;

export default function AutonomousPlatformIntelligenceAgent() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="An agent that writes its own capabilities and gets cheaper at repeated tasks"
      description={project.summary}
      github={project.github}
      tags={project.tech}
    >
      <Section title="Overview">
        <p className="leading-relaxed">{project.summary}</p>
        <p className="mt-4 leading-relaxed">{project.problem}</p>
        {project.stat && (
          <div className="mt-6 inline-flex flex-col rounded-[var(--radius)] border border-[var(--accent-line)] bg-[var(--accent-dim)] px-5 py-3">
            <span className="font-mono text-2xl font-semibold text-[var(--accent-bright)]">
              {project.stat.value}
            </span>
            <span className="mt-1 text-xs text-[var(--fg-muted)]">{project.stat.label}</span>
          </div>
        )}
      </Section>

      <ArchitectureFlow
        title="Planner / Executor Loop"
        description="The only hard-coded operation is a single GraphQL call — everything else is synthesised, tested, and registered at runtime."
        steps={[
          { label: "Natural-language request", note: "Operates Linear from plain instructions" },
          { label: "Planner", note: "Reads relational memory before acting" },
          { label: "Capability gap?", note: "Fast path if a proven plan already exists" },
          { label: "Runtime synthesis", note: "Generates, tests, and repairs Python against the live API" },
          { label: "Register + execute", note: "New capability persists for next time" },
        ]}
      />

      <Section title="How It Learns">
        <ul className="space-y-3">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-3">
              <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-[var(--accent)]" />
              <span className="leading-relaxed">{h}</span>
            </li>
          ))}
        </ul>
      </Section>

      <Section title="Tech Stack">
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <SkillBadge key={t} label={t} />
          ))}
        </div>
      </Section>
    </ProjectLayout>
  );
}
