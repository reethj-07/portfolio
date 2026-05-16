import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function LegalKnowledgeGraphPage() {
  return (
    <ProjectLayout
      title="Legal Knowledge Graph"
      subtitle="Neo4j knowledge graph with text-to-Cypher legal QA"
      github="https://github.com/reethj-07/legal-knowledge-graph"
      tags={[
        "Neo4j",
        "Cypher",
        "FastAPI",
        "Streamlit",
        "Knowledge Graph",
        "Gemini",
        "LLM",
        "Python"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          This project models the Companies Act, 2013, the 2026 amendments, and the
          Companies (Incorporation) Rules, 2014 as a Neo4j knowledge graph to enable
          precise, traceable legal querying. A text-to-Cypher layer translates natural
          language questions into grounded graph queries.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The ingestion pipeline parses PDFs into structured JSON, loads the graph, and
          exposes both a FastAPI service and a Streamlit demo UI for interactive exploration.
        </p>
      </Section>

      <Section title="Architecture">
        <Diagram
          src="/diagrams/legal-knowledge-graph-architecture.svg"
          alt="Legal Knowledge Graph architecture diagram"
          title="Architecture Diagram"
          description="PDF ingestion, Neo4j graph modeling, and text-to-Cypher query flow."
        />
        <div className="space-y-3 text-gray-300">
          <p>
            Ingestion flows from PDF documents to regex and LLM parsing, structured JSON,
            and Neo4j loading. Querying uses Cypher templates and a schema-aware LLM with
            validation and self-correction before response generation.
          </p>
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4 text-sm">
            <div className="font-mono">PDF &rarr; Parser &rarr; JSON &rarr; Neo4j &rarr; Cypher &rarr; Response</div>
          </div>
        </div>
      </Section>

      <Section title="Graph Schema">
        <ul className="space-y-2 text-gray-300">
          <li>Node types include Act, Chapter, Section, SubSection, Proviso, Explanation, Amendment, and Rule.</li>
          <li>Typed amendment edges preserve provenance: AMENDED_BY, SUBSTITUTES, INSERTS, DELETES.</li>
          <li>Cross-reference edges connect sections that refer to one another for multi-hop context.</li>
        </ul>
      </Section>

      <Section title="Modeling Decisions">
        <ul className="space-y-2 text-gray-300">
          <li>Temporal versioning stores both original and current section text for 2013 and 2026 states.</li>
          <li>Amendments are first-class nodes with before and after text for full traceability.</li>
          <li>Rule mapping links sections to derived procedural rules in both directions.</li>
          <li>Hierarchy mirrors Act to Chapter to Section to SubSection for accurate navigation.</li>
        </ul>
      </Section>

      <Section title="Interfaces">
        <p className="text-gray-300 leading-relaxed">
          The system exposes a FastAPI REST API with nine endpoints and a Streamlit UI that
          queries Neo4j directly. An intent classifier routes questions, the text-to-Cypher
          layer generates schema-aware queries, and a grounded response generator returns
          traceable answers.
        </p>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Graph and Query
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Neo4j" />
              <SkillBadge label="Cypher" />
              <SkillBadge label="Knowledge Graph" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              LLM and Services
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Gemini" />
              <SkillBadge label="FastAPI" />
              <SkillBadge label="Streamlit" />
              <SkillBadge label="Python" />
            </div>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
