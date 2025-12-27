import Diagram from "@/components/Diagram";
import Section from "@/components/Section";

export default function YTWebSummarizer() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold">
          GenAI-Based YouTube & Web Summarizer
        </h1>

        <p className="text-gray-400 max-w-2xl">
          A GenAI system that converts long-form videos and articles
          into concise summaries.
        </p>

        <Diagram
          src="/diagrams/yt-web-summarizer-architecture.png"
          alt="YouTube and web summarization pipeline"
        />

        <Section title="Pipeline Design">
          <ul className="list-disc list-inside space-y-1">
            <li>Audio extraction from YouTube</li>
            <li>Whisper-based transcription</li>
            <li>Chunked summarization via LangChain</li>
          </ul>
        </Section>

        <Section title="Optimization">
          GPU/CPU-aware inference dynamically adjusts processing
          based on hardware availability.
        </Section>

        <Section title="Key Learnings">
          <ul className="list-disc list-inside space-y-1">
            <li>Chunk size affects coherence</li>
            <li>Transcription quality propagates errors</li>
            <li>Latency must be controlled for UX</li>
          </ul>
        </Section>

      </div>
    </main>
  );
}
