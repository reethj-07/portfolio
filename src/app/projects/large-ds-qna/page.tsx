import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function LargeDSQnaPage() {
  return (
    <ProjectLayout
      title="Big Data Q&A Agent System"
      subtitle="Multi-agent analytics over 150K Amazon reviews"
      github="https://github.com/reethj-07/LargeDS_QnA"
      tags={[
        "LangGraph",
        "FAISS",
        "BM25",
        "DuckDB",
        "Gemini",
        "Groq",
        "FastAPI",
        "Gradio",
        "Cross-Encoder",
        "RRF"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          Big Data Q&A is a multi-agent analytics system over 150,000 Amazon reviews from
          the McAuley-Lab Amazon-Reviews-2023 dataset. It combines FAISS dense retrieval,
          BM25 keyword search, DuckDB analytics, and cross-encoder reranking behind a
          LangGraph pipeline that adapts to query complexity.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The system routes each question through Planner and Router agents into direct
          retrieval, SQL-first aggregation, or decomposition before Analyst and Critic
          agents produce grounded answers. Gemini is the primary model with Groq
          fallback for reliability.
        </p>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="/diagrams/large-ds-qna-architecture.svg"
          alt="Big Data Q and A architecture diagram"
          title="Architecture Diagram"
          description="Planner and router orchestration with hybrid retrieval, evaluation, and observability."
        />
      </Section>

      <Section title="Data and Indexing">
        <div className="space-y-3 text-gray-300">
          <p>
            Five categories with 30,000 reviews each are ingested directly from JSONL files,
            normalized, and stored as Parquet. Indices are built for FAISS, BM25, and DuckDB,
            enabling hybrid retrieval and SQL analytics from the same corpus.
          </p>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-sm">
            <div className="font-mono">FAISS index + BM25 index + DuckDB analytics layer</div>
          </div>
        </div>
      </Section>

      <Section title="Multi-Agent Architecture">
        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 font-mono text-sm text-gray-300">
          <div>Planner &rarr; Router &rarr; [Direct | SQL-first | Decompose]</div>
          <div className="ml-4">Decompose &rarr; Sub-Retriever &rarr; Synthesizer</div>
          <div className="ml-4">Direct/SQL-first &rarr; Retriever &rarr; Analyst &rarr; Critic</div>
        </div>
        <p className="text-gray-300 leading-relaxed mt-4">
          The retriever blends FAISS, BM25, and reciprocal rank fusion with optional
          cross-encoder reranking, while category filters keep single-category queries fair.
        </p>
      </Section>

      <Section title="Evaluation and Experiments">
        <ul className="space-y-2 text-gray-300">
          <li>Retrieval metrics: Recall@K, Precision@K, Hit@K, MRR@K, and nDCG@K with eval modes.</li>
          <li>Ablation study across vector-only, BM25-only, hybrid, and hybrid plus cross-encoder.</li>
          <li>Batch answer quality with critic scoring (mean 4.79/5) and SQL accuracy checks.</li>
          <li>60+ unit tests covering metrics, SQL safety, agents, and pipeline timeout behavior.</li>
        </ul>
      </Section>

      <Section title="Observability and Deployment">
        <div className="space-y-3 text-gray-300">
          <p>
            Structured JSON logs include trace_id correlation for every pipeline stage, with
            optional LangSmith and OpenTelemetry tracing. Deployment targets include Docker,
            Render, and Hugging Face Spaces.
          </p>
        </div>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Retrieval and Data
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FAISS" />
              <SkillBadge label="BM25" />
              <SkillBadge label="DuckDB" />
              <SkillBadge label="Cross-Encoder" />
              <SkillBadge label="Reciprocal Rank Fusion" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Agents and LLMs
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="LangGraph" />
              <SkillBadge label="Gemini 2.5" />
              <SkillBadge label="Groq" />
              <SkillBadge label="LangChain" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Interfaces and APIs
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FastAPI" />
              <SkillBadge label="Gradio" />
              <SkillBadge label="Docker" />
              <SkillBadge label="Render" />
            </div>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
