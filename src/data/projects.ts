/**
 * Single source of truth for every project surfaced on the site.
 *
 * The homepage grid, the /projects explorer, the command palette and the
 * prev/next pager on each case study all read from this array. Order here is
 * the display order everywhere.
 *
 * Rule for this file: every claim is taken from the project's own README or
 * its case-study page. Nothing is estimated.
 */

export const CATEGORIES = [
  "Agentic AI",
  "RAG & LLM",
  "Multimodal",
  "MLOps & Infra",
  "Backend Systems",
  "ML & CV",
] as const;

export type Category = (typeof CATEGORIES)[number];

export type Project = {
  slug: string;
  title: string;
  /** One line for the card. Should say what it is, not why it's good. */
  summary: string;
  /** The interesting engineering constraint. Shown on hover/expand. */
  problem: string;
  tech: string[];
  categories: Category[];
  github: string;
  demo?: string;
  /** Internal case-study route. Absent => the card links straight to GitHub. */
  caseStudy?: string;
  year: string;
  featured?: boolean;
  /** 3–4 concrete bullets revealed when the card expands. */
  highlights: string[];
  /** Optional headline figure. Must be a measured number from the README. */
  stat?: { value: string; label: string };
};

export const projects: Project[] = [
  {
    slug: "spec-grounded-rag",
    title: "Spec-Grounded RAG",
    summary:
      "RAG over 3GPP telecom standards that treats its own output as untrusted until a mechanical verification gate proves every claim is grounded.",
    problem:
      "In telecom specs a single modal verb carries normative force and answers are exact identifiers — a fluent, well-cited, wrong answer is the worst possible output.",
    tech: [
      "Hybrid Retrieval",
      "Qdrant",
      "BM25 + RRF",
      "ONNX Runtime",
      "Cross-Encoder",
      "Gemini",
      "Groq",
      "FastAPI",
    ],
    categories: ["RAG & LLM", "Agentic AI"],
    github: "https://github.com/reethj-07/spec-grounded-rag",
    caseStudy: "/projects/spec-grounded-rag",
    year: "2026",
    featured: true,
    stat: { value: "33.3% → 0.0%", label: "hallucination rate, 21-question golden set" },
    highlights: [
      "Verification gate runs five deterministic checks before release: citation validity, a numeric/identifier guard that requires every number and timer to appear literally in its cited chunk, cross-encoder support scoring, requirement-level shall/may fidelity, and a retrieval confidence floor.",
      "Three outcomes instead of two — grounded, partly grounded (passing claims released, withheld ones disclosed), or an explicit abstention with the closest clauses shown.",
      "Structure-aware ingest builds a clause tree with provenance so table rows are never severed from their headers by character splitting.",
      "The evaluation report states its own limits: 15.4% false abstention, recall falling 76.9% → 53.8%, a confidence floor fitted to the set, and hybrid retrieval failing to improve recall here.",
    ],
  },
  {
    slug: "sutradhar",
    title: "Sutradhar — Real-Time Voice AI",
    summary:
      "Low-latency voice agent platform streaming STT → LLM → TTS with a custom turn-taking and barge-in engine, running entirely on a 4 GB-VRAM machine.",
    problem:
      "Natural spoken conversation lives or dies on interruption handling — the agent has to cancel in-flight speech and reconcile state mid-utterance.",
    tech: [
      "faster-whisper",
      "Qwen2.5-3B",
      "Ollama",
      "Piper TTS",
      "Silero VAD",
      "WebRTC",
      "OpenTelemetry",
      "SQLite + sqlite-vec",
    ],
    categories: ["Agentic AI", "Multimodal", "MLOps & Infra"],
    github: "https://github.com/reethj-07/Sutradhar",
    caseStudy: "/projects/sutradhar",
    year: "2026",
    featured: true,
    stat: { value: "0.8–1.2s", label: "P50 voice-to-voice latency budget" },
    highlights: [
      "Turn-taking engine combines VAD, semantic endpointing and predictive turn detection, with interruption handling that cancels in-flight speech and reconciles conversation state.",
      "Every component — STT, LLM, TTS, VAD, turn detector and transport — sits behind an interface with at least two implementations, so a local OSS provider swaps for a commercial one without touching the architecture.",
      "Built-in evaluation suite: synthetic-caller simulation, ASR-noise and adversarial injection, LLM-as-judge scoring, per-turn latency tracing and regression tests in CI.",
      "Model placement tuned for 4 GB VRAM — STT on GPU, a Q4 3B LLM on CPU with partial offload, TTS on CPU — with the reasoning recorded across five ADRs.",
    ],
  },
  {
    slug: "hiring-engagement-agent",
    title: "Hiring Engagement Agent",
    summary:
      "Nine-agent LangGraph pipeline that moves from a raw job description to a ranked candidate shortlist, streaming every agent trace live over SSE.",
    problem:
      "Scoring candidates is only useful if it is explainable — every signal has to be traceable back to literal evidence.",
    tech: [
      "LangGraph",
      "FastAPI",
      "Gemini 2.5",
      "pgvector",
      "Supabase",
      "Next.js 15",
      "SSE",
      "SQLAlchemy",
    ],
    categories: ["Agentic AI", "RAG & LLM"],
    github: "https://github.com/reethj-07/hiring-engagement-agent",
    demo: "https://hiring-engagement-agent.vercel.app",
    caseStudy: "/projects/hiring-engagement-agent",
    year: "2026",
    featured: true,
    stat: { value: "9", label: "specialised agents in the graph" },
    highlights: [
      "JD intake parses a job description into a structured JobSpec with its inferred assumptions made explicit.",
      "Match scoring produces six weighted sub-scores with an evidence-only summary; interest scoring requires literal quote citations from the transcript.",
      "Agent steps and LLM traces persist to storage and stream to the UI over SSE for real-time visibility.",
      "Deployed end to end: Vercel UI, Render-hosted FastAPI, Supabase Postgres with pgvector.",
    ],
  },
  {
    slug: "autonomous-platform-intelligence-agent",
    title: "Autonomous Platform Intelligence Agent",
    summary:
      "An agent that operates Linear from natural language, synthesises new capabilities as Python at runtime, and gets measurably cheaper at repeated tasks.",
    problem:
      "Most 'agent memory' is a vector store of past prompts that never changes behaviour. This one reads structured knowledge before acting and promotes the cheapest successful plan.",
    tech: [
      "Gemini 2.5",
      "GraphQL",
      "SQLite",
      "Runtime Code Synthesis",
      "Planner/Executor",
      "Python",
    ],
    categories: ["Agentic AI", "Backend Systems"],
    github: "https://github.com/reethj-07/autonomous-platform-intelligence-agent",
    caseStudy: "/projects/autonomous-platform-intelligence-agent",
    year: "2026",
    featured: true,
    stat: { value: "7 → 2", label: "LLM calls on a repeated task" },
    highlights: [
      "The only hard-coded operation is a single GraphQL call. When the planner hits a capability gap, the synthesiser reasons, generates Python, tests it against the live API, repairs it, and registers it.",
      "Memory is relational, not a prompt log: capabilities, success rates, runtime constraints and proven plans, read before acting.",
      "Measured learning loop on one example run — 7→2 LLM calls, 6→3 API calls, 115s→13.5s — with confident templates triggering a fast path that skips planning entirely.",
      "No agent framework, so the memory, synthesis and learning logic are all in plain sight rather than hidden behind abstractions.",
    ],
  },
  {
    slug: "ai-loyalty-service",
    title: "AI Loyalty Service",
    summary:
      "Agentic platform for real-time loyalty operations with LangGraph pipeline orchestration, RFM + KMeans segmentation and streaming reasoning traces.",
    problem:
      "Loyalty decisions need to be both fast and auditable, which means the reasoning trace is a product surface, not a debug log.",
    tech: [
      "LangGraph",
      "FastAPI",
      "Celery",
      "Redis",
      "pgvector",
      "OpenTelemetry",
    ],
    categories: ["Agentic AI", "MLOps & Infra"],
    github: "https://github.com/reethj-07/ai-loyalty-service",
    demo: "https://ai-loyalty-service.vercel.app",
    caseStudy: "/projects/ai-loyalty-service",
    year: "2026",
    featured: true,
    highlights: [
      "LangGraph pipeline orchestration over customer events with pgvector retrieval for context.",
      "Dynamic segmentation using RFM features and KMeans clustering.",
      "Real-time WebSocket/SSE dashboard streaming of reasoning traces.",
      "Celery + Redis for asynchronous work, OpenTelemetry for tracing.",
    ],
  },
  {
    slug: "trendly-support-agent",
    title: "Trendly Support Agent",
    summary:
      "D2C customer-support agent built on a LangGraph state graph, where eligibility is decided by deterministic business logic and the LLM only interprets and communicates.",
    problem:
      "An LLM that decides refund eligibility is a liability. The interesting design work is drawing the line between what the model may decide and what code must.",
    tech: [
      "LangGraph",
      "Gemini 2.5 Flash",
      "Groq",
      "FastAPI",
      "Next.js",
      "Tailwind v4",
      "SSE",
      "Docker",
    ],
    categories: ["Agentic AI", "Backend Systems"],
    github: "https://github.com/reethj-07/trendly-support-agent",
    demo: "https://trendly-support-agent-six.vercel.app",
    caseStudy: "/projects/trendly-support-agent",
    year: "2026",
    featured: true,
    stat: { value: "10", label: "deterministic tools behind the agent" },
    highlights: [
      "Return and exchange eligibility is computed by deterministic business logic inside the tools — the LLM never decides it.",
      "SSE streaming delivers token-by-token responses; the agent → tools → postprocess graph is a real state machine, not a prompt chain.",
      "Automatic LLM fallback chain: Gemini primary → Groq fallback → graceful error, with rate limiting and CORS for production readiness.",
      "56 deterministic tests that make no LLM calls, plus pre/post safety guardrails and multi-turn session management.",
    ],
  },
  {
    slug: "isometric-mto-generator",
    title: "Isometric → MTO Generator",
    summary:
      "Upload a piping isometric drawing, get a structured Material Take-Off — a Gemini vision pipeline with schema-constrained output and deterministic engineering post-processing.",
    problem:
      "A vision model can read a drawing but cannot be trusted with MTO conventions, so quantities are re-derived and summaries recomputed in code after extraction.",
    tech: [
      "Gemini Vision",
      "Structured Output",
      "FastAPI",
      "Next.js",
      "Pydantic v2",
      "PyMuPDF",
      "Docker",
      "Clerk",
    ],
    categories: ["Multimodal", "ML & CV", "Backend Systems"],
    github: "https://github.com/reethj-07/isometric-mto-generator",
    caseStudy: "/projects/isometric-mto-generator",
    year: "2026",
    featured: true,
    highlights: [
      "Deterministic post-processing enforces MTO conventions after extraction: pipe by length, everything else by count, gaskets and bolts derived per flanged joint, summary recomputed from the items.",
      "A reusable evaluation harness scores output against hand-labelled ground truth — micro/macro detection F1, per-component-type breakdown, field accuracy, quantity MAE/MAPE, slice analysis by source type, and a RAW-vs-post-processed ablation.",
      "Real-mode run on Gemini 2.5 Flash reports micro-F1 33.3% and macro-F1 20.2% at N=4, with field accuracy of 90.9% on size/NPS — the README flags all of it as indicative, since only one drawing has complete ground truth.",
      "Runs with no API key and no network via a clearly-labelled mock provider; processing is asynchronous with a job id and polled status.",
    ],
  },
  {
    slug: "large-ds-qna",
    title: "Big Data Q&A Agent System",
    summary:
      "Multi-agent analytics over 150K Amazon reviews combining FAISS, BM25 and DuckDB SQL behind a LangGraph router.",
    problem:
      "No single retrieval mode answers every analytics question — some need semantics, some need lexical exactness, some need aggregation.",
    tech: ["LangGraph", "FAISS", "BM25", "DuckDB", "MiniLM", "Gemini", "Groq"],
    categories: ["RAG & LLM", "Agentic AI"],
    github: "https://github.com/reethj-07/LargeDS_QnA",
    caseStudy: "/projects/large-ds-qna",
    year: "2026",
    stat: { value: "150K", label: "Amazon reviews indexed" },
    highlights: [
      "Hybrid retrieval across FAISS vector search, BM25 lexical search and DuckDB SQL aggregation.",
      "CPU embeddings with MiniLM keep the whole pipeline runnable without a GPU.",
      "LangGraph multi-agent pipeline routes between Gemini and Groq.",
      "Ships with evaluation scripts and a demo.",
    ],
  },
  {
    slug: "legal-knowledge-graph",
    title: "Legal Knowledge Graph",
    summary:
      "Neo4j knowledge graph over the Companies Act 2013 and its amendments, queried through text-to-Cypher generation.",
    problem:
      "Statutory law is a graph of cross-references and amendments — flattening it into chunks loses exactly the structure that answers the question.",
    tech: ["Neo4j", "Cypher", "FastAPI", "Streamlit", "Gemini"],
    categories: ["RAG & LLM"],
    github: "https://github.com/reethj-07/legal-knowledge-graph",
    caseStudy: "/projects/legal-knowledge-graph",
    year: "2026",
    highlights: [
      "Graph model captures sections, amendments and their relationships rather than flat text chunks.",
      "Natural-language questions are translated to Cypher and executed against Neo4j.",
      "FastAPI service with a Streamlit interface for exploration.",
    ],
  },
  {
    slug: "multi-agent-trade-validator",
    title: "Multi-Agent Trade Validator",
    summary:
      "Three-stage trade-document pipeline handling extraction, validation and routing behind a FastAPI service.",
    problem:
      "Trade documents fail validation in structured, enumerable ways — the pipeline has to separate what was read from what was judged.",
    tech: ["LangGraph", "FastAPI", "Gemini 2.5", "SQLModel", "Streamlit"],
    categories: ["Agentic AI", "Backend Systems"],
    github: "https://github.com/reethj-07/Multi-Agent-Trade-Validator",
    caseStudy: "/projects/multi-agent-trade-validator",
    year: "2026",
    highlights: [
      "Extraction, validation and routing are separate stages with distinct responsibilities.",
      "SQLModel persistence behind a FastAPI service.",
      "Optional Streamlit UI for manual review.",
    ],
  },
  {
    slug: "refundwise",
    title: "RefundWise",
    summary:
      "Refund agent that approves, denies or escalates by reasoning over a CRM and a strict policy — and shows every model message and tool call in a live audit dashboard.",
    problem:
      "An ops team auditing an agent needs the whole trace, not the verdict. The dashboard is the deliverable as much as the decision is.",
    tech: [
      "Next.js",
      "Prisma",
      "SQLite / Turso",
      "Gemini",
      "Groq",
      "Tool Calling",
      "Web Speech API",
    ],
    categories: ["Agentic AI", "Backend Systems"],
    github: "https://github.com/reethj-07/refundwise",
    demo: "https://refundwise-alpha.vercel.app",
    caseStudy: "/projects/refundwise",
    year: "2026",
    stat: { value: "15", label: "seeded policy scenarios" },
    highlights: [
      "A deterministic eligibility spine enforces the policy rules in code; the LLM interprets and communicates but never decides from vibes.",
      "The admin dashboard streams a real-time, auditable timeline of every model message, tool call with arguments, tool result and final decision, tied to a conversation.",
      "Automatic Gemini → Groq fallback, so the whole stack runs on free tiers.",
      "Optional browser-native voice via the Web Speech API, behind a feature flag.",
    ],
  },
  {
    slug: "rag-retrieval-benchmark",
    title: "Context-Aware Retrieval Engine",
    summary:
      "A retrieval benchmark comparing raw vector search against TF-IDF query expansion, reported with full ranking metrics.",
    problem:
      "Retrieval strategies are usually chosen by intuition. This one makes the accuracy-versus-latency tradeoff an explicit, reproducible number.",
    tech: [
      "FAISS",
      "SentenceTransformers",
      "TF-IDF",
      "nDCG / MRR / MAP",
      "Pytest",
      "Vertex AI",
    ],
    categories: ["RAG & LLM"],
    github: "https://github.com/reethj-07/rag-retrieval-benchmark",
    caseStudy: "/projects/rag-retrieval-benchmark",
    year: "2026",
    highlights: [
      "Two strategies benchmarked across seven complex queries on a ten-document technical corpus.",
      "Precision@k, Recall@k, MRR, nDCG@k, MAP, mean cosine similarity, latency and a tradeoff ratio.",
      "Emits both a human-readable Markdown report and a structured JSON artifact.",
      "Includes a documented migration path to Vertex AI Matching Engine.",
    ],
  },
  {
    slug: "autonomous-security-mlops",
    title: "Autonomous Security MLOps Platform",
    summary:
      "Enterprise-grade MLOps platform with a five-model ensemble, drift detection, monitoring and production-safe deployment infrastructure.",
    problem:
      "Shipping a model is the easy part — the platform is everything that keeps it correct after deployment.",
    tech: [
      "XGBoost",
      "MLflow",
      "Kubernetes",
      "Prometheus",
      "SHAP",
      "A/B Testing",
    ],
    categories: ["MLOps & Infra", "ML & CV"],
    github: "https://github.com/reethj-07/autonomous-security-mlops",
    caseStudy: "/projects/autonomous-security-mlops",
    year: "2026",
    stat: { value: "5", label: "models in the ensemble" },
    highlights: [
      "Five-model ensemble with SHAP-based explainability.",
      "Drift detection and advanced monitoring wired to Prometheus.",
      "MLflow experiment tracking with production-safe deployment and A/B testing.",
    ],
  },
  {
    slug: "hallucination-aware-llm",
    title: "Hallucination-Aware Hybrid LLM",
    summary:
      "Production RAG system pairing Phi-3 with FAISS retrieval and strict context-grounding, plus QLoRA fine-tuning and explainability.",
    problem:
      "Grounding has to be enforced at generation time, not checked afterwards, or the model has already stated the wrong thing.",
    tech: ["RAG", "Phi-3", "FAISS", "LoRA / QLoRA", "FastAPI"],
    categories: ["RAG & LLM"],
    github: "https://github.com/reethj-07/hallucination-aware-hybrid-llm",
    demo: "https://huggingface.co/spaces/attentionseeker/hallucination-aware-rag",
    caseStudy: "/projects/hallucination-aware-llm",
    year: "2026",
    stat: { value: "86.7%", label: "retrieval accuracy" },
    highlights: [
      "Context-grounded generation with strict refusal when retrieval does not support an answer.",
      "QLoRA fine-tuning on top of Phi-3 with FAISS retrieval.",
      "Dual deployment modes trading latency against depth.",
    ],
  },
  {
    slug: "klarixa-notification-service",
    title: "Klarixa Notification Service",
    summary:
      "Asynchronous multi-channel notification engine — priority queues on Redis Streams, per-channel delivery tracking, idempotency and retries with backoff.",
    problem:
      "'Do not lose a notification' is a distributed-systems requirement, not a feature. It has to survive the queue itself failing.",
    tech: [
      "FastAPI",
      "PostgreSQL 16",
      "Redis Streams",
      "SQLAlchemy 2.0 async",
      "Alembic",
      "Kubernetes",
      "structlog",
      "OpenAPI 3.1",
    ],
    categories: ["Backend Systems", "MLOps & Infra"],
    github: "https://github.com/reethj-07/klarixa-notification-service",
    caseStudy: "/projects/klarixa-notification-service",
    year: "2026",
    highlights: [
      "The database is the source of truth; Redis Streams consumer groups give at-least-once delivery, and a reconciler re-queues anything the queue lost — proven by a test that flushes Redis mid-flight and still delivers.",
      "Idempotency via an Idempotency-Key header plus a request fingerprint, enforced by a unique index rather than an application-level check.",
      "Rate limiting as a sliding window in a Redis sorted set, evaluated atomically in Lua.",
      "Circuit breaker, webhooks, batch API, analytics, K8s manifests and a committed OpenAPI 3.1 document — with the README stating plainly which claims were not demonstrated on the dev machine.",
    ],
  },
  {
    slug: "emotion-music-recommender",
    title: "VibeTune — Multi-Modal Emotion Recommender",
    summary:
      "Real-time emotion detection across face, voice and text, fused into Spotify music recommendations.",
    problem:
      "Three modalities disagree constantly; the recommendation quality lives in how their signals are reconciled.",
    tech: [
      "ResNet50",
      "Wav2Vec2",
      "DistilRoBERTa",
      "Spotify API",
      "Streamlit",
      "Docker",
    ],
    categories: ["Multimodal", "ML & CV"],
    github: "https://github.com/reethj-07/Emotion-Music-Recommender",
    demo: "https://multi-modal-emotion-aware-music.onrender.com",
    caseStudy: "/projects/emotion-music-recommender",
    year: "2026",
    stat: { value: "3", label: "fused input modalities" },
    highlights: [
      "ResNet50 for facial emotion, Wav2Vec2 for voice, DistilRoBERTa for text.",
      "Spotify integration turns the fused emotion signal into recommendations.",
      "Deployed with CI/CD, Docker and monitoring.",
    ],
  },
  {
    slug: "conveyor-belt-defect-detection",
    title: "Conveyor Belt Defect Detection",
    summary:
      "YOLOv8 defect detector trained on pseudo-labels generated by classical computer vision, since the dataset had no defect annotations at all.",
    problem:
      "359 4K images labelled only with the belt outline, and no defect boxes — the labels had to be manufactured before any model could be trained.",
    tech: ["YOLOv8", "OpenCV", "CLAHE", "Hough Transform", "PyTorch", "Ultralytics"],
    categories: ["ML & CV"],
    github: "https://github.com/reethj-07/conveyor-belt-defect-detection",
    year: "2026",
    stat: { value: "359", label: "4K day/night training images" },
    highlights: [
      "Edge damage pseudo-labelled from belt-polygon irregularity — smooth edges give 4–5 vertices, torn edges trace many.",
      "Scratches pseudo-labelled via CLAHE contrast enhancement, statistical thresholding tuned separately for day and night, morphological filtering and Hough line detection.",
      "YOLOv8n fine-tuned on the generated dataset, evaluated with mF1@0.5–0.95, and falling back to the image-processing detector when weights are absent.",
    ],
  },
];

export const projectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

/** Ordered neighbours for the prev/next pager on case-study pages. */
export function projectNeighbours(slug: string) {
  const withPages = projects.filter((p) => p.caseStudy);
  const i = withPages.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: undefined, next: undefined };
  return {
    prev: i > 0 ? withPages[i - 1] : withPages[withPages.length - 1],
    next: i < withPages.length - 1 ? withPages[i + 1] : withPages[0],
  };
}

export const featuredProjects = projects.filter((p) => p.featured);
