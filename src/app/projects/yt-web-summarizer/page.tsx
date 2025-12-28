import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import Diagram from "@/components/Diagram";

export default function YTWebSummarizer() {
  return (
    <ProjectLayout
      title="GenAI-Based YouTube & Web Content Summarizer"
      description="An end-to-end GenAI pipeline that converts long-form videos and articles into concise, structured summaries."
      badges={[
        "Whisper",
        "LangChain",
        "LLMs",
        "Chunking",
        "GenAI Pipelines",
      ]}
    >
      <Section title="Problem Statement">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Long videos and articles are time-intensive to consume. This project
          aims to transform unstructured multimedia content into concise,
          readable summaries while preserving semantic coherence.
        </p>
      </Section>

      <Diagram
        src="/diagrams/yt-web-summarizer-architecture.png"
        alt="YouTube and web summarization pipeline"
        title="Summarization Pipeline"
        description="Content is ingested from YouTube or web sources, transcribed or extracted, chunked for context preservation, and summarized using LLMs orchestrated via LangChain."
      />

      <Section title="Pipeline Design">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Audio extraction from YouTube videos</li>
          <li>Speech-to-text transcription using Whisper</li>
          <li>Text extraction from web articles</li>
          <li>Chunk-based summarization using LLMs</li>
        </ul>
      </Section>

      <Section title="Optimization Decisions">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Dynamic chunk sizing to balance coherence and context length</li>
          <li>Hardware-aware inference for CPU/GPU environments</li>
          <li>Sequential vs map-reduce summarization tradeoffs</li>
        </ul>
      </Section>

      <Section title="Key Learnings">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Chunking strategy significantly impacts summary quality</li>
          <li>Transcription accuracy affects downstream performance</li>
          <li>Latency grows non-linearly with input length</li>
        </ul>
      </Section>
      <Section title="Future Improvements">
  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
    <li>Integrate retrieval-augmented summarization for factual grounding</li>
    <li>Support hierarchical summaries (bullet → paragraph → detailed)</li>
    <li>Add semantic redundancy detection across chunks</li>
    <li>Introduce user-controlled summary depth and format</li>
  </ul>
</Section>

    </ProjectLayout>
  );
}
