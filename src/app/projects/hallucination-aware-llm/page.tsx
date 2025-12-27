import Diagram from "@/components/Diagram";
import Section from "@/components/Section";

export default function HallucinationAwareLLM() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold">
          Hallucination-Aware Hybrid LLM System
        </h1>

        <p className="text-gray-400 max-w-2xl">
          A retrieval-augmented generation system designed to reduce hallucinations
          through strict grounding and controlled generation.
        </p>

        <Diagram
          src="/diagrams/rag-architecture.png"
          alt="Hallucination-aware RAG architecture"
        />

        <Section title="System Breakdown">
          <ul className="list-disc list-inside space-y-1">
            <li>Streamlit UI for user interaction</li>
            <li>RAG vs non-RAG routing logic</li>
            <li>FAISS for top-K document retrieval</li>
            <li>Constrained prompt construction</li>
            <li>Phi-3 Mini fine-tuned using QLoRA</li>
          </ul>
        </Section>

        <Section title="Key Learnings">
          <ul className="list-disc list-inside space-y-1">
            <li>Grounding significantly reduces hallucinations</li>
            <li>Prompt constraints are as important as retrieval</li>
            <li>Fine-tuning complements RAG, not replaces it</li>
          </ul>
        </Section>

      </div>
    </main>
  );
}
