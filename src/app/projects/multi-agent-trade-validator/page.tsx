import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function MultiAgentTradeValidatorPage() {
  return (
    <ProjectLayout
      title="Multi-Agent Trade Validator"
      subtitle="Trade document extraction, validation, and routing with LangGraph"
      github="https://github.com/reethj-07/Multi-Agent-Trade-Validator"
      tags={[
        "LangGraph",
        "FastAPI",
        "Gemini 2.5",
        "Streamlit",
        "SQLModel",
        "SQLite",
        "Pydantic",
        "OpenAPI"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          Multi-Agent Trade Validator is a three-stage pipeline for trade paperwork. It
          extracts fields from PDFs or images, validates them against a customer rule set,
          and routes the outcome to auto-approve, human review, or draft amendment request.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The system uses LangGraph for orchestration and Gemini 2.5 for multimodal extraction
          and natural-language analytics. FastAPI serves the pipeline and a static web UI,
          with Streamlit available as an alternative client.
        </p>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="/diagrams/multi-agent-trade-validator-architecture.svg"
          alt="Multi-Agent Trade Validator architecture diagram"
          title="Architecture Diagram"
          description="Document extraction, rules validation, routing decisions, and storage."
        />
      </Section>

      <Section title="Pipeline">
        <ul className="space-y-2 text-gray-300">
          <li>Extractor produces structured output for eight core trade fields with confidence and snippets.</li>
          <li>Validator compares fields against JSON rules and marks match, mismatch, or uncertain.</li>
          <li>Router outputs auto_approve, human_review, or draft_amendment_request with reasoning.</li>
        </ul>
      </Section>

      <Section title="Data, Storage, and Analytics">
        <div className="space-y-3 text-gray-300">
          <p>
            Run history persists to SQLite via SQLModel for portability. A natural-language
            analytics endpoint converts questions to read-only SQL and returns grounded results.
          </p>
          <p>
            The default customer profile is expressed as JSON rules, and all agents share typed
            Pydantic contracts for predictable I/O.
          </p>
        </div>
      </Section>

      <Section title="Interfaces">
        <p className="text-gray-300 leading-relaxed">
          FastAPI hosts the OpenAPI docs, pipeline endpoints, and a static browser UI served
          from the same origin. The Streamlit app can also call the API for alternative workflows.
        </p>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Orchestration and LLM
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="LangGraph" />
              <SkillBadge label="Gemini 2.5" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Backend and Storage
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FastAPI" />
              <SkillBadge label="SQLModel" />
              <SkillBadge label="SQLite" />
              <SkillBadge label="Pydantic" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Interfaces
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="OpenAPI" />
              <SkillBadge label="Static Web UI" />
              <SkillBadge label="Streamlit" />
            </div>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
