import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function HiringEngagementAgentPage() {
  return (
    <ProjectLayout
      title="Hiring Engagement Agent"
      subtitle="AI-powered talent scouting and engagement pipeline"
      github="https://github.com/reethj-07/hiring-engagement-agent"
      liveDemo="https://hiring-engagement-agent.vercel.app"
      tags={[
        "LangGraph",
        "FastAPI",
        "Gemini 2.5",
        "pgvector",
        "Supabase",
        "Next.js 15",
        "SSE",
        "Pydantic",
        "SQLAlchemy"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          Hiring Engagement Agent orchestrates nine specialized agents with LangGraph
          to move from a raw job description to a ranked candidate shortlist. The
          system uses Gemini 2.5 Pro and Flash for reasoning and pgvector search
          for candidate retrieval, with a Next.js UI that streams agent traces
          in real time.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Every step is grounded with evidence. Match scoring produces explainable
          sub-scores, interest scoring requires literal quote citations, and the
          final ranking blends signals into tiered recommendations.
        </p>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="/diagrams/hiring-engagement-agent-architecture.svg"
          alt="Hiring Engagement Agent architecture diagram"
          title="Architecture Diagram"
          description="UI, FastAPI orchestration, LangGraph agents, and Supabase-backed retrieval."
        />
      </Section>

      <Section title="Workflow">
        <ul className="space-y-2 text-gray-300">
          <li>JD intake parses the job description into a structured JobSpec with inferred assumptions.</li>
          <li>Sourcing retrieves candidates via pgvector with optional query expansion.</li>
          <li>Match scoring produces six weighted sub-scores and an evidence-only summary.</li>
          <li>Engagement drafts outreach, simulates candidate replies, and applies conversation critique.</li>
          <li>Interest scoring validates signals with literal quote checks and the ranking agent tiers candidates.</li>
        </ul>
      </Section>

      <Section title="Key Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Nine-agent LangGraph pipeline</h3>
            <p className="text-gray-400 text-sm">
              Orchestrates JD intake, sourcing, engagement, interest scoring, and ranking with
              stateful LangGraph flows.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Evidence-first scoring</h3>
            <p className="text-gray-400 text-sm">
              Match summaries are grounded to resume evidence, and interest signals must cite
              literal transcript snippets.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Live trace streaming</h3>
            <p className="text-gray-400 text-sm">
              Agent steps and LLM traces persist to storage and stream to the UI over SSE for
              real-time visibility.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Production-ready stack</h3>
            <p className="text-gray-400 text-sm">
              FastAPI, async SQLAlchemy, Alembic, and Supabase Postgres with pgvector support a
              full deployment workflow.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              LLM and Orchestration
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="LangGraph" />
              <SkillBadge label="Gemini 2.5 Pro" />
              <SkillBadge label="Gemini 2.5 Flash" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Backend and Data
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FastAPI" />
              <SkillBadge label="SQLAlchemy" />
              <SkillBadge label="Pydantic" />
              <SkillBadge label="Supabase Postgres" />
              <SkillBadge label="pgvector" />
              <SkillBadge label="Alembic" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Frontend and Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Next.js 15" />
              <SkillBadge label="Tailwind CSS" />
              <SkillBadge label="Render" />
              <SkillBadge label="Vercel" />
              <SkillBadge label="SSE" />
            </div>
          </div>
        </div>
      </Section>

      <Section title="Deployment and Links">
        <div className="space-y-2 text-gray-300">
          <p>
            Live UI on Vercel with a Render-hosted FastAPI backend and Supabase Postgres.
            API docs and health checks are publicly exposed.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="https://hiring-engagement-agent.onrender.com/docs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              API docs
            </a>
            <a
              href="https://hiring-engagement-agent.onrender.com/healthz"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 underline underline-offset-4"
            >
              Health check
            </a>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
