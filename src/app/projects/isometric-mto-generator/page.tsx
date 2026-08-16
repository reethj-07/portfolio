import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("isometric-mto-generator")!;

export default function IsometricMTOGenerator() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="A vision model reads the drawing; deterministic code enforces the conventions"
      description={project.summary}
      github={project.github}
      tags={project.tech}
    >
      <Section title="Overview">
        <p className="leading-relaxed">{project.summary}</p>
        <p className="mt-4 leading-relaxed">{project.problem}</p>
      </Section>

      <ArchitectureFlow
        title="Extraction Pipeline"
        description="Vision does the reading; deterministic post-processing owns the math."
        steps={[
          { label: "Upload drawing", note: "Piping isometric, PDF or image" },
          { label: "PyMuPDF extraction", note: "Document parsing" },
          { label: "Gemini Vision", note: "Schema-constrained structured output" },
          { label: "Deterministic post-process", note: "Pipe by length, everything else by count" },
          { label: "Structured MTO", note: "Async job, polled status" },
        ]}
      />

      <Section title="Engineering Highlights">
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
