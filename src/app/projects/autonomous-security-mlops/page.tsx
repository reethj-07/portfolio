import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";

export default function SecurityMLOpsPage() {
  return (
    <ProjectLayout
      title="Autonomous Security MLOps Platform"
      subtitle="Enterprise-grade MLOps + AI-powered Security Inference System"
      github="https://github.com/reethj-07/autonomous-security-mlops"
      tags={[
        "MLOps",
        "XGBoost",
        "LightGBM",
        "CatBoost",
        "Kubernetes",
        "Docker",
        "Prometheus",
        "Grafana",
        "MLflow",
        "FastAPI",
        "SHAP",
        "A/B Testing",
        "Airflow",
        "PostgreSQL"
      ]}
    >
      {/* Overview */}
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          Production-ready MLOps platform demonstrating enterprise-grade ML engineering at scale. 
          The system features <span className="text-white font-medium">5 ensemble ML models</span> for 
          detecting anomalous security patterns, <span className="text-white font-medium">50+ engineered features</span>, 
          comprehensive monitoring with drift detection, statistical A/B testing framework, and full 
          infrastructure-as-code deployment.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Showcasing real-world MLOps patterns and production safety practices with comprehensive documentation, 
          advanced monitoring, and scalable infrastructure design.
        </p>
      </Section>

      {/* Key Features */}
      <Section title="Key Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              5 Ensemble Models
            </h3>
            <p className="text-gray-400 text-sm">
              XGBoost, LightGBM, CatBoost, Stacking, and Voting ensembles with automatic 
              best-model selection and feature importance tracking.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              50+ Engineered Features
            </h3>
            <p className="text-gray-400 text-sm">
              Temporal, behavioral, sequence-based, and attack pattern features with 
              automated selection using SelectKBest and mutual information.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Advanced Monitoring
            </h3>
            <p className="text-gray-400 text-sm">
              Evidently AI for drift detection, SHAP for explainability, real-time anomaly 
              detection, and comprehensive performance tracking with alerts.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-400">🧪</span>
              Statistical A/B Testing
            </h3>
            <p className="text-gray-400 text-sm">
              Two-proportion z-test, Welch&apos;s t-test, Mann-Whitney U test with sample size 
              calculation, power analysis, and experiment tracking.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-400">☸️</span>
              Production Infrastructure
            </h3>
            <p className="text-gray-400 text-sm">
              Kubernetes with auto-scaling (3-10 replicas), Docker Compose stack with 8 services, 
              persistent storage, network policies, and secrets management.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Production Safety
            </h3>
            <p className="text-gray-400 text-sm">
              3-tier fallback system (Prod → Staging → Safe Mode), canary deployments, 
              health checks, rate limiting, and API authentication.
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Architecture */}
      <Section title="System Architecture">
        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Data Pipeline</h3>
            <p className="text-gray-400 text-sm mb-3">
              Security logs → Schema Validation (Pydantic) → Data Quality Checks (Great Expectations) 
              → Feature Engineering (50+ features) → DVC Versioning
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Model Training & Selection</h3>
            <p className="text-gray-400 text-sm mb-3">
              5 Ensemble Models (XGBoost, LightGBM, CatBoost, Stacking, Voting) → MLflow Tracking 
              → Automatic Best-Model Selection → Model Registry → Canary Evaluation → Deployment
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Inference Service</h3>
            <p className="text-gray-400 text-sm mb-3">
              FastAPI with Hybrid Risk Scoring → Rate Limiting (100 req/min) → API Authentication 
              → Prometheus Metrics → Health Checks → Auto-Scaling
            </p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Monitoring & Observability</h3>
            <p className="text-gray-400 text-sm mb-3">
              Evidently AI (Drift Reports every 6 hrs) → SHAP Explanations → Real-time Anomaly Detection 
              → Prometheus + Grafana Dashboards → Alert System → Auto-Retrain Triggers
            </p>
          </div>
        </div>
      </Section>

      {/* Technical Metrics */}
      <Section title="Technical Metrics">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">92-95%</p>
            <p className="text-sm text-gray-400 mt-1">F1 Score</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">&lt;100ms</p>
            <p className="text-sm text-gray-400 mt-1">Inference Latency (p95)</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">99.9%</p>
            <p className="text-sm text-gray-400 mt-1">Uptime Target</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">5</p>
            <p className="text-sm text-gray-400 mt-1">Ensemble Models</p>
          </div>
        </div>
      </Section>

      {/* Implementation Highlights */}
      <Section title="Implementation Highlights">
        <div className="space-y-3">
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">12+ Pydantic schemas</span> for comprehensive 
              data validation across the entire pipeline with runtime type checking
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Great Expectations</span> integration for 
              automated data profiling and quality assurance
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">5 monitoring systems</span>: Drift detection, 
              SHAP explanations, anomaly detection, performance tracking, and real-time monitoring
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Kubernetes manifests</span> with StatefulSets, 
              HPA (3-10 replicas), Network Policies, and persistent storage for production deployment
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Docker Compose stack</span> with 8 services: 
              PostgreSQL, MLflow, Prometheus, Grafana, FastAPI, Airflow, Redis, and monitoring
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Comprehensive documentation</span>: 
              80-page system guide, 70-page deployment runbook, and 40-page implementation summary
            </span>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              ML Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Python" />
              <SkillBadge label="XGBoost" />
              <SkillBadge label="LightGBM" />
              <SkillBadge label="CatBoost" />
              <SkillBadge label="Scikit-learn" />
              <SkillBadge label="NumPy" />
              <SkillBadge label="Pandas" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              MLOps & Infrastructure
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="MLflow" />
              <SkillBadge label="DVC" />
              <SkillBadge label="Airflow" />
              <SkillBadge label="Kubernetes" />
              <SkillBadge label="Docker" />
              <SkillBadge label="Helm" />
              <SkillBadge label="Terraform" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Monitoring & Observability
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Prometheus" />
              <SkillBadge label="Grafana" />
              <SkillBadge label="Evidently AI" />
              <SkillBadge label="SHAP" />
              <SkillBadge label="OpenTelemetry" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Backend & Data
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FastAPI" />
              <SkillBadge label="PostgreSQL" />
              <SkillBadge label="Redis" />
              <SkillBadge label="Pydantic" />
              <SkillBadge label="Great Expectations" />
            </div>
          </div>
        </div>
      </Section>

      {/* Key Achievements */}
      <Section title="Key Achievements">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">5 ensemble models with auto-selection</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">50+ engineered features</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">12+ Pydantic validation schemas</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">5 comprehensive monitoring systems</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">8-service Docker infrastructure</span>
          </div>
          <div className="flex gap-3 items-start">
            <span className="text-gray-300">Production-safe 3-tier deployment</span>
          </div>
        </div>
      </Section>

      {/* Learning Outcomes */}
      <Section title="Engineering Principles Demonstrated">
        <div className="space-y-3">
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Reliability</span>: Comprehensive testing, 
              error handling, graceful degradation, and 3-tier fallback system
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Scalability</span>: Horizontal auto-scaling, 
              caching strategies, efficient resource utilization, and load balancing
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Observability</span>: Detailed logging, 
              Prometheus metrics, distributed tracing, and comprehensive monitoring dashboards
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Reproducibility</span>: Version control for 
              data (DVC), code (Git), models (MLflow), and infrastructure (Terraform/Helm)
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Security</span>: API authentication, 
              rate limiting, secure secret management, network policies, and RBAC controls
            </span>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
