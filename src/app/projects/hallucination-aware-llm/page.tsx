import Diagram from "@/components/Diagram";
import Section from "@/components/Section";
import ProjectLayout from "@/components/ProjectLayout";

export default function HallucinationAwareLLM() {
  return (
    <ProjectLayout
      title="Hallucination-Aware Hybrid LLM System"
      description="A retrieval-augmented generation system designed to minimize hallucinations by enforcing strict grounding, controlled prompting, and selective generation paths."
      badges={["RAG", "FAISS", "QLoRA", "Phi-3 Mini", "LLM Evaluation"]}
    >

      <Section title="Problem Statement">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Large Language Models often generate confident but incorrect responses
          when operating without sufficient grounding. This project focuses on
          reducing hallucinations by combining retrieval, prompt constraints,
          and fine-tuning into a unified inference pipeline.
        </p>
      </Section>

      <Diagram
        src="/diagrams/rag-architecture.png"
        alt="Hallucination-aware RAG architecture"
        title="System Architecture"
        description="User queries are routed through either a retrieval-augmented or standard generation path. Retrieved documents are injected into a constrained prompt before inference using a Phi-3 Mini model fine-tuned with QLoRA."
      />

      <Section title="System Design">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Streamlit-based UI for controlled user interaction.</li>
          <li>Dynamic routing between RAG and non-RAG pipelines.</li>
          <li>FAISS index for efficient semantic document retrieval.</li>
          <li>Constrained prompt templates to restrict unsupported generation.</li>
          <li>Phi-3 Mini fine-tuned using QLoRA for domain adaptation.</li>
        </ul>
      </Section>

      <Section title="Key Engineering Decisions">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Used lightweight embeddings to balance latency and recall.</li>
          <li>Separated retrieval logic from generation logic for debuggability.</li>
          <li>Combined RAG with fine-tuning instead of treating them as alternatives.</li>
        </ul>
      </Section>

      <Section title="Key Learnings">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Grounding reduces hallucinations more effectively than model scaling.</li>
          <li>Prompt constraints are critical for safe generation.</li>
          <li>Fine-tuning improves consistency but does not replace retrieval.</li>
        </ul>
      </Section>

      <Section title="Future Improvements">
  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
    <li>Introduce query-level confidence scoring for response reliability</li>
    <li>Add reranking models to improve retrieved document relevance</li>
    <li>Support multi-document citation tracking in generated answers</li>
    <li>Evaluate hybrid dense + sparse retrieval strategies</li>
  </ul>
</Section>


    </ProjectLayout>
  );
}
