import FadeIn from "@/components/motion/FadeIn";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-12">

        <FadeIn>
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Projects
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-3xl leading-relaxed">
              Production-ready ML systems and GenAI applications showcasing end-to-end development 
              from problem formulation to deployment. Each project demonstrates real-world engineering 
              practices including <span className="text-blue-400 font-medium">MLOps</span>, 
              <span className="text-blue-400 font-medium"> monitoring</span>, and 
              <span className="text-blue-400 font-medium"> scalable infrastructure</span>.
            </p>
          </div>
        </FadeIn>

        <div className="space-y-6">

          <FadeIn delay={0.1}>
            <ProjectCard
              title="AI Loyalty Service"
              description="Agentic customer-loyalty platform with LangGraph pipeline orchestration, RFM + KMeans dynamic segmentation, pgvector retrieval, and real-time WebSocket/SSE dashboard streaming."
              tags={["LangGraph", "FastAPI", "Celery", "Redis", "pgvector", "OpenTelemetry"]}
              link="/projects/ai-loyalty-service"
            />
          </FadeIn>

          <FadeIn delay={0.15}>
            <ProjectCard
              title="Autonomous Security MLOps Platform"
              description="Enterprise-grade MLOps platform with 5 ensemble models, advanced monitoring, drift detection, and production-safe deployment infrastructure with comprehensive documentation."
              tags={["MLOps", "XGBoost", "Kubernetes", "Prometheus", "SHAP", "A/B Testing"]}
              link="/projects/autonomous-security-mlops"
            />
          </FadeIn>

          <FadeIn delay={0.2}>
            <ProjectCard
              title="Hallucination-Aware Hybrid LLM System"
              description="Production-grade RAG system with Phi-3, FAISS retrieval, and strict context-grounding to prevent hallucinations. 86.7% retrieval accuracy with dual deployment modes (lightweight 20-50ms / full 100-500ms)."
              tags={["RAG", "Phi-3", "FAISS", "LoRA", "FastAPI"]}
              link="/projects/hallucination-aware-llm"
            />
          </FadeIn>

          <FadeIn delay={0.25}>
            <ProjectCard
              title="VibeTune: Multi-Modal Emotion Music Recommender"
              description="Real-time emotion detection from face, voice, and text with Spotify integration. ResNet50 + Wav2Vec2 + DistilRoBERTa for multi-modal analysis. Deployed with CI/CD, Docker, and comprehensive monitoring."
              tags={["ResNet50", "Wav2Vec2", "Transformers", "Spotify API", "Streamlit"]}
              link="/projects/emotion-music-recommender"
            />
          </FadeIn>

          <FadeIn delay={0.3}>
            <ProjectCard
              title="YT Web Summarizer"
              description="AI-powered summarization tool using Whisper for transcription and LLMs for intelligent content summarization. 5 summary styles, smart caching (70% cost reduction), and production-ready Python architecture."
              tags={["Whisper", "LangChain", "Groq", "Streamlit", "BeautifulSoup"]}
              link="/projects/yt-web-summarizer"
            />
          </FadeIn>

        </div>

      </div>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  tags,
  link,
}: {
  title: string;
  description: string;
  tags: string[];
  link: string;
}) {
  return (
    <a
      href={link}
      className="block border border-gray-800 rounded-xl p-6 hover:bg-gradient-to-br 
                 hover:from-gray-900/80 hover:to-black/80 hover:border-blue-500/30 
                 transition-all duration-300 group bg-gradient-to-br from-gray-900/50 to-black/50"
    >
      <h2 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
        {title}
      </h2>
      <p className="text-sm text-gray-300 mb-4 leading-relaxed">
        {description}
      </p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-2.5 py-1 rounded-md text-xs border border-gray-700 
                       bg-gray-800/50 text-gray-300 group-hover:border-blue-500/30 
                       transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>
    </a>
  );
}
