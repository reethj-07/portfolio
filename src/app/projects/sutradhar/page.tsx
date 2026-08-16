import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import ArchitectureFlow from "@/components/ArchitectureFlow";
import { projectBySlug } from "@/data/projects";

const project = projectBySlug("sutradhar")!;

export default function Sutradhar() {
  return (
    <ProjectLayout
      slug={project.slug}
      title={project.title}
      subtitle="A low-latency voice agent that runs entirely on a 4GB-VRAM machine"
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
        title="Voice Pipeline"
        description="Streaming STT → LLM → TTS, with a turn-taking engine that can cancel and reconcile state mid-utterance."
        steps={[
          { label: "VAD + turn detection", note: "Silero VAD, semantic + predictive endpointing" },
          { label: "STT", note: "faster-whisper, GPU" },
          { label: "LLM", note: "Qwen2.5-3B via Ollama, CPU, Q4 partial offload" },
          { label: "TTS", note: "Piper, CPU" },
          { label: "Barge-in", note: "Cancels in-flight speech, reconciles state" },
        ]}
      />

      <Section title="Engineering Decisions">
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
