import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function AILoyaltyServicePage() {
  return (
    <ProjectLayout
      title="AI Loyalty Service"
      subtitle="Agentic AI platform for real-time customer loyalty operations"
      github="https://github.com/reethj-07/ai-loyalty-service"
      tags={[
        "LangGraph",
        "FastAPI",
        "Celery",
        "Redis",
        "PostgreSQL",
        "pgvector",
        "Scikit-learn",
        "OpenTelemetry",
        "Prometheus",
        "React"
      ]}
    >
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          AI Loyalty Service is a production-oriented <span className="text-white font-medium">agentic decision system</span>
          for lifecycle marketing. It combines a LangGraph pipeline, ML-based customer segmentation,
          human review workflows, and real-time dashboards for campaign execution.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The platform is designed around practical deployment constraints: low-cost inference,
          asynchronous task orchestration, streaming UX for reasoning traces, and full observability
          through traces, metrics, and structured logs.
        </p>
      </Section>

      <Section title="System Architecture">
        <Diagram
          src="/diagrams/ai-loyalty-service-architecture.svg"
          alt="AI Loyalty Service architecture showing dashboard, FastAPI, LangGraph pipeline, ML/data layer, async workers, and observability stack"
          title="AI Loyalty Service Architecture"
          description="End-to-end flow from dashboard requests to agentic decisioning, human approval routing, and real-time operational monitoring"
        />

        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">End-to-End Flow</h3>
            <div className="space-y-2 text-sm text-gray-300 font-mono">
              <div>React dashboard -&gt; FastAPI API layer</div>
              <div className="ml-4">-&gt; LangGraph pipeline (stateful node orchestration)</div>
              <div className="ml-4">-&gt; pgvector retrieval over historical campaign outcomes</div>
              <div className="ml-4">-&gt; ROI estimation + confidence scoring</div>
              <div className="ml-4">-&gt; Auto-publish or human review queue</div>
              <div className="ml-4">-&gt; WebSocket/SSE updates back to dashboard</div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Asynchronous Execution Layer</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Celery + Redis run recurring jobs for segmentation, behavioral detection, and retraining.
              The scheduler includes three core routines: re-segmentation every 2 hours, alert scanning
              every 5 minutes, and daily model retraining at 3:00 AM.
            </p>
          </div>
        </div>
      </Section>

      <Section title="Agent Pipeline Design">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Context Gatherer</h3>
            <p className="text-gray-400 text-sm">
              Pulls member segment context and behavioral alerts before reasoning starts.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Reasoning Node</h3>
            <p className="text-gray-400 text-sm">
              Uses LLM reasoning with top-3 similar campaign retrieval to ground proposal strategy.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Proposal Generator</h3>
            <p className="text-gray-400 text-sm">
              Builds structured campaign proposals with segment targeting and action recommendations.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">ROI Estimator</h3>
            <p className="text-gray-400 text-sm">
              Enriches each proposal with expected ROI fields for decision support.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Confidence Scorer</h3>
            <p className="text-gray-400 text-sm">
              Computes proposal confidence from signals and projected outcome quality.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">Human Approval Gate</h3>
            <p className="text-gray-400 text-sm">
              Routes decisions using a threshold policy: confidence &gt; 0.85 auto-propose, otherwise review.
            </p>
          </div>
        </div>
      </Section>

      <Section title="ML + Real-Time Capabilities">
        <div className="space-y-3">
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">&gt;</span>
            <span>
              <span className="text-white font-medium">Dynamic Segmentation</span>: KMeans over RFM scores
              (5 clusters mapped to Champions, Loyal, At Risk, Dormant, and New)
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">&gt;</span>
            <span>
              <span className="text-white font-medium">Semantic Grounding</span>: pgvector retrieval
              of historically similar campaign outcomes for better targeting consistency
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">&gt;</span>
            <span>
              <span className="text-white font-medium">Reasoning Streaming</span>: SSE endpoints expose node-level
              reasoning traces to the frontend during execution
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">&gt;</span>
            <span>
              <span className="text-white font-medium">Live Event Channels</span>: WebSocket channels broadcast
              proposals, alerts, transactions, and KPI changes to dashboard clients
            </span>
          </div>
        </div>
      </Section>

      <Section title="Operational Metrics and Reliability">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">0.85</p>
            <p className="text-sm text-gray-400 mt-1">Auto-Approval Threshold</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">Top-3</p>
            <p className="text-sm text-gray-400 mt-1">Similarity Retrieval</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">5</p>
            <p className="text-sm text-gray-400 mt-1">RFM Clusters</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">3</p>
            <p className="text-sm text-gray-400 mt-1">Scheduled Celery Jobs</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">100</p>
            <p className="text-sm text-gray-400 mt-1">Max LLM Telemetry Records/API Call</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">~14.4k</p>
            <p className="text-sm text-gray-400 mt-1">Groq Free-Tier Requests/Day</p>
          </div>
        </div>

        <div className="mt-6 bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Observed Monitoring Surface</h3>
          <p className="text-sm text-gray-400 leading-relaxed">
            Prometheus captures proposal volume, behavioral detections, segmentation transitions,
            LLM latency histograms, token usage counters, and active campaign gauges.
            OpenTelemetry spans are exported for distributed tracing, and Grafana dashboards
            visualize operational health.
          </p>
        </div>
      </Section>

      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Agentic AI and Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="LangGraph" />
              <SkillBadge label="LangChain" />
              <SkillBadge label="FastAPI" />
              <SkillBadge label="Pydantic" />
              <SkillBadge label="Groq" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Data and ML
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="PostgreSQL" />
              <SkillBadge label="Supabase" />
              <SkillBadge label="pgvector" />
              <SkillBadge label="Scikit-learn" />
              <SkillBadge label="SentenceTransformers" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Realtime, Infra, and Observability
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Celery" />
              <SkillBadge label="Redis" />
              <SkillBadge label="WebSocket" />
              <SkillBadge label="SSE" />
              <SkillBadge label="Docker Compose" />
              <SkillBadge label="OpenTelemetry" />
              <SkillBadge label="Prometheus" />
              <SkillBadge label="Grafana" />
            </div>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}