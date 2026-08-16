import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("trendly-support-agent")!;

export default function TrendlySupportAgent() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="Code decides eligibility. The LLM only interprets and communicates."
      description={project.summary}
      github={project.github}
      liveDemo={project.demo}
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
        title="Agent Graph"
        description="A real LangGraph state machine, not a prompt chain — with an automatic fallback chain for availability."
        steps={[
          { label: "User message", note: "SSE, token-by-token" },
          { label: "Agent node", note: "Gemini 2.5 Flash → Groq fallback" },
          { label: "Tool selection", note: "10 deterministic tools" },
          { label: "Business logic", note: "Eligibility computed in code" },
          { label: "Postprocess", note: "Streamed response" },
        ]}
      />

      <Section title="Design Decisions">
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
