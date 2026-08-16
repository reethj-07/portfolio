import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("klarixa-notification-service")!;

export default function KlarixaNotificationService() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="It has to survive the queue itself failing"
      description={project.summary}
      github={project.github}
      tags={project.tech}
    >
      <Section title="Overview">
        <p className="leading-relaxed">{project.summary}</p>
        <p className="mt-4 leading-relaxed">{project.problem}</p>
      </Section>

      <ArchitectureFlow
        title="Delivery Pipeline"
        description="The database is the source of truth; Redis Streams gives at-least-once delivery, and a reconciler recovers anything the queue loses."
        steps={[
          { label: "API request", note: "Idempotency-Key + fingerprint, unique index" },
          { label: "Rate limit", note: "Sliding window in a Redis sorted set, atomic Lua" },
          { label: "Persist", note: "PostgreSQL 16, source of truth" },
          { label: "Redis Streams", note: "Consumer groups, at-least-once delivery" },
          { label: "Reconciler", note: "Re-queues anything the queue lost" },
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
