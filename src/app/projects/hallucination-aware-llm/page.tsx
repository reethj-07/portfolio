import Diagram from "@/components/Diagram";
import Section from "@/components/Section";
import ProjectLayout from "@/components/ProjectLayout";
import SkillBadge from "@/components/SkillBadge";

export default function HallucinationAwareLLM() {
  return (
    <ProjectLayout
      title="Hallucination-Aware Hybrid LLM System"
      subtitle="Production-Grade RAG with Phi-3 and FAISS Retrieval"
      github="https://github.com/reethj-07/hallucination-aware-hybrid-llm"
      tags={[
        "RAG",
        "Phi-3",
        "FAISS",
        "LoRA",
        "FastAPI",
        "SentenceTransformers",
        "Cross-Encoder",
        "Prometheus",
        "Docker"
      ]}
    >

      {/* Overview */}
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          Production-ready <span className="text-white font-medium">Retrieval-Augmented Generation (RAG)</span> system 
          that prevents hallucinations through strict context-grounding. Responses are retrieved from a 
          <span className="text-white font-medium"> FAISS vector index</span> and verified against source documents 
          before returning to users.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Features two deployment modes: <span className="text-white font-medium">Lightweight Mode</span> (fast retrieval 
          + template generation, 20-50ms) and <span className="text-white font-medium">Full Mode</span> (Phi-3 LoRA 
          with cross-encoder reranking, 100-500ms). Current operational status: 
          <span className="text-green-400 font-medium"> 🟢 86.7% retrieval accuracy</span> on test queries.
        </p>
      </Section>

      {/* System Architecture */}
      <Section title="System Architecture">
        <Diagram
          src="/diagrams/rag-architecture.png"
          alt="RAG System Architecture - End-to-end data flow"
          title="Visual System Architecture"
          description="Complete RAG pipeline from client request to response with hallucination prevention mechanisms"
        />

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6 mt-6">
          <h3 className="text-white font-semibold mb-4">Data Flow Breakdown</h3>
          <div className="space-y-3 font-mono text-sm text-gray-300">
            <div>Client Request → FastAPI /query endpoint</div>
            <div className="ml-4">↓ Middleware: Auth + Rate Limiting + Logging</div>
            <div className="ml-4">↓ Async Inference Queue (bounded concurrency)</div>
            <div className="ml-4">↓ RAG Pipeline:</div>
            <div className="ml-8">├─ Load FAISS index (LRU cache)</div>
            <div className="ml-8">├─ Embed query (SentenceTransformer, cached)</div>
            <div className="ml-8">├─ Retrieve top-K documents (&lt;1ms)</div>
            <div className="ml-8">├─ Optional: Cross-encoder reranking</div>
            <div className="ml-8">├─ Budget context to MAX_CONTEXT_CHARS</div>
            <div className="ml-8">├─ [LIGHTWEIGHT] Template-based answer extraction</div>
            <div className="ml-8">└─ [FULL] Phi-3 LoRA generation (100-500ms)</div>
            <div className="ml-4">↓ Citation generation (span-level grounding)</div>
            <div className="ml-4">↓ Hallucination guard (token overlap verification)</div>
            <div className="ml-4">↓ JSON response with metrics to client</div>
          </div>
        </div>
      </Section>

      {/* Key Features */}
      <Section title="Key Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              FAISS Vector Retrieval
            </h3>
            <p className="text-gray-400 text-sm">
              Fast, accurate document similarity search on normalized embeddings with inner-product 
              similarity for stable retrieval.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Dual Deployment Modes
            </h3>
            <p className="text-gray-400 text-sm">
              Lightweight mode for fast template generation (20-50ms) or Full mode with Phi-3 
              reasoning (100-500ms) based on hardware availability.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Hallucination Guards
            </h3>
            <p className="text-gray-400 text-sm">
              Multi-level safeguards: retrieval constraints + prompt engineering + token overlap 
              verification to prevent unreliable outputs.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2 flex items-center gap-2">
              <span className="text-blue-400">📊</span>
              Production Features
            </h3>
            <p className="text-gray-400 text-sm">
              Rate limiting, API key auth, structured logging with request IDs, Prometheus metrics, 
              and comprehensive evaluation framework.
            </p>
          </div>
        </div>
      </Section>

      {/* Hallucination Prevention Strategy */}
      <Section title="Hallucination Prevention Strategy">
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4 bg-gray-900/30 py-3">
            <h3 className="text-white font-semibold mb-2">1️⃣ Retrieval Constraint</h3>
            <p className="text-gray-400 text-sm mb-2">
              Query embedded using SentenceTransformer (all-MiniLM-L6-v2), top-K relevant documents 
              retrieved via FAISS inner-product search. Only retrieved documents passed as context to LLM.
            </p>
            <p className="text-gray-400 text-sm">
              <span className="text-red-400 font-medium">No parametric knowledge allowed during generation.</span>
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-gray-900/30 py-3">
            <h3 className="text-white font-semibold mb-2">2️⃣ Prompt-Level Generation Constraints</h3>
            <p className="text-gray-400 text-sm">
              Strict instructions in system prompt: Answer ONLY using provided context, do NOT use prior 
              knowledge, if answer not in context respond exactly: "Not found in retrieved documents"
            </p>
          </div>

          <div className="border-l-4 border-blue-500 pl-4 bg-gray-900/30 py-3">
            <h3 className="text-white font-semibold mb-2">3️⃣ Token Overlap Verification</h3>
            <p className="text-gray-400 text-sm">
              Generated answer verified against retrieved documents. If below threshold overlap, forces 
              abstention. Citations track exact document spans used.
            </p>
          </div>
        </div>
      </Section>

      {/* Evaluation Results */}
      <Section title="Evaluation Results">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-green-400">86.7%</p>
            <p className="text-sm text-gray-400 mt-1">Success Rate</p>
            <p className="text-xs text-gray-500">13/15 correct retrievals</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">100%</p>
            <p className="text-sm text-gray-400 mt-1">Precision</p>
            <p className="text-xs text-gray-500">Retrieved match keywords</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">20-50ms</p>
            <p className="text-sm text-gray-400 mt-1">Lightweight Mode</p>
            <p className="text-xs text-gray-500">Fast retrieval</p>
          </div>
          <div className="text-center p-4 bg-gray-900/50 border border-gray-800 rounded-lg">
            <p className="text-3xl font-bold text-blue-400">100-500ms</p>
            <p className="text-sm text-gray-400 mt-1">Full Mode</p>
            <p className="text-xs text-gray-500">With Phi-3 generation</p>
          </div>
        </div>

        <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
          <h3 className="text-white font-semibold mb-3">Live API Testing Examples</h3>
          <div className="space-y-2 text-sm font-mono">
            <div className="flex justify-between items-start gap-4">
              <span className="text-gray-400">"What is the rate limit?"</span>
              <span className="text-green-400">✅ 20-50ms</span>
            </div>
            <div className="flex justify-between items-start gap-4">
              <span className="text-gray-400">"What encryption is used?"</span>
              <span className="text-green-400">✅ 20-50ms</span>
            </div>
          </div>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              LLM & Retrieval
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Phi-3 Mini" />
              <SkillBadge label="FAISS 1.8" />
              <SkillBadge label="SentenceTransformer" />
              <SkillBadge label="CrossEncoder" />
              <SkillBadge label="LoRA (PEFT)" />
              <SkillBadge label="HuggingFace" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Backend & API
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="FastAPI 0.111" />
              <SkillBadge label="Uvicorn" />
              <SkillBadge label="Pydantic" />
              <SkillBadge label="asyncio" />
              <SkillBadge label="SlowAPI" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Observability & Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Prometheus" />
              <SkillBadge label="Docker" />
              <SkillBadge label="docker-compose" />
              <SkillBadge label="Streamlit" />
              <SkillBadge label="pytest" />
            </div>
          </div>
        </div>
      </Section>

      {/* Implementation Highlights */}
      <Section title="Implementation Highlights">
        <div className="space-y-3">
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Normalized Embeddings</span>: Inner-product 
              similarity instead of L2 distance for improved retrieval stability
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Context Budgeting</span>: 4000-char limit 
              prevents token overflow in model context window
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">LRU Caching</span>: Models, embeddings, and 
              reranker scores cached for 2048+ entries for performance
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Async Inference Queue</span>: Bounded concurrency 
              with configurable worker threads for stable performance
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Comprehensive Logging</span>: Structured JSON 
              logging with request IDs for debugging and monitoring
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Docker-Ready</span>: Separate API + UI services 
              with docker-compose for easy deployment
            </span>
          </div>
        </div>
      </Section>

      {/* Future Improvements */}
      <Section title="Future Improvements">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Adaptive similarity threshold for abstention</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Fine-tuned domain-specific embedder</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Explicit "not in corpus" detection</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Confidence scoring per answer</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Knowledge graph-based retrieval</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Streaming response support</span>
          </div>
        </div>
      </Section>


    </ProjectLayout>
  );
}
