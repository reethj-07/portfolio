import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("spec-grounded-rag")!;

export default function SpecGroundedRAG() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="RAG over 3GPP telecom standards, verified before it's ever shown"
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
        title="Pipeline"
        description="Every answer passes through a mechanical verification gate before release — nothing is trusted by default."
        steps={[
          { label: "Structure-aware ingest", note: "Clause tree with provenance, so table rows stay attached to headers" },
          { label: "Hybrid retrieval", note: "BM25 + RRF over Qdrant" },
          { label: "Cross-encoder rerank", note: "ONNX Runtime" },
          { label: "Verification gate", note: "5 deterministic checks" },
          { label: "Grounded / partial / abstain", note: "Three outcomes, never a guess" },
        ]}
      />

      <Section title="The Verification Gate">
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
