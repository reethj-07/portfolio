import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function RagRetrievalBenchmarkPage() {
  return (
    <ProjectLayout
      title="Context-Aware Retrieval Engine"
      subtitle="RAG retrieval benchmark with query expansion and evaluation metrics"
      github="https://github.com/reethj-07/rag-retrieval-benchmark"
      tags={[
        "RAG",
        "FAISS",
        "SentenceTransformers",
        "Benchmarking",
        "TF-IDF",
        "Pytest",
        "Vertex AI",
        "Gemini"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          This project benchmarks two retrieval strategies across seven complex queries on a
          ten-document technical corpus. The primary output is a detailed evaluation report
          with accuracy and latency tradeoffs for each strategy.
        </p>
        <p className="text-gray-300 leading-relaxed">
          A local RAG pipeline runs the benchmark, producing both a human-readable Markdown
          report and a structured JSON artifact for downstream analysis.
        </p>
      </Section>

      <Section title="Architecture">
        <Diagram
          src="/diagrams/rag-retrieval-benchmark-architecture.svg"
          alt="RAG retrieval benchmark architecture diagram"
          title="Architecture Diagram"
          description="Corpus indexing, dual retrieval strategies, and benchmark reporting."
        />
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-sm text-gray-300">
          <div className="font-mono">Corpus -> Embeddings -> FAISS Vector Store</div>
          <div className="font-mono">Query -> Raw Vector Search or Query Expansion -> Retrieval -> Benchmark</div>
        </div>
      </Section>

      <Section title="Retrieval Strategies">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Strategy A: Raw Vector Search</h3>
            <p className="text-gray-400 text-sm">
              Embeds the original query and performs cosine similarity search over the FAISS index.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Strategy B: AI-Enhanced Retrieval</h3>
            <p className="text-gray-400 text-sm">
              Expands the query with TF-IDF vocabulary terms, re-embeds the expanded string, and
              searches again to close vocabulary gaps.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Evaluation Metrics">
        <ul className="space-y-2 text-gray-300">
          <li>Precision@k and Recall@k for early relevance signals.</li>
          <li>MRR and nDCG@k to reward high-ranked, graded relevance.</li>
          <li>MAP for overall ranking quality across relevant positions.</li>
          <li>Mean cosine similarity, latency, and tradeoff ratio for accuracy vs cost.</li>
        </ul>
      </Section>

      <Section title="Production Path">
        <p className="text-gray-300 leading-relaxed">
          The benchmark includes a migration guide to Vertex AI: swap local embeddings for
          textembedding-gecko, move FAISS to Matching Engine, and use Gemini for generative
          query expansion when desired.
        </p>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Retrieval and Evaluation
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FAISS" />
              <SkillBadge label="SentenceTransformers" />
              <SkillBadge label="TF-IDF" />
              <SkillBadge label="Benchmarking" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Tooling
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Python" />
              <SkillBadge label="Pytest" />
              <SkillBadge label="Vertex AI" />
              <SkillBadge label="Gemini" />
            </div>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
