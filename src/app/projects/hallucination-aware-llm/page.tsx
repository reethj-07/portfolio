export default function HallucinationAwareLLM() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">
          Hallucination-Aware Hybrid LLM System
        </h1>

        <p className="text-gray-400 text-sm">
          A retrieval-augmented LLM system designed to reduce hallucinations
          through strict grounding and refusal logic.
        </p>

        <Section title="Problem">
          LLMs often hallucinate when asked questions outside their training data.
          This project focuses on building a system that answers **only when grounded
          evidence is available**, otherwise explicitly refusing.
        </Section>

        <Section title="System Architecture">
          The system uses FAISS-based dense retrieval to fetch relevant documents,
          followed by a constrained prompt that enforces context-only generation.
          A fallback refusal path is triggered when evidence is insufficient.
        </Section>

        <Section title="Modeling & Techniques">
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>FAISS for dense vector retrieval</li>
            <li>Phi-3 Mini fine-tuned using QLoRA (4-bit)</li>
            <li>Prompt-level hallucination guardrails</li>
            <li>Dual inference: RAG vs non-RAG comparison</li>
          </ul>
        </Section>

        <Section title="Key Outcomes">
          Demonstrated clear hallucination reduction when operating in
          retrieval-grounded mode compared to vanilla LLM inference.
        </Section>

        <Section title="Links">
          <a
            href="https://github.com/reethj-07/hallucination-aware-hybrid-llm"
            target="_blank"
            className="text-blue-400 hover:underline text-sm"
          >
            GitHub Repository →
          </a>
        </Section>

      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
