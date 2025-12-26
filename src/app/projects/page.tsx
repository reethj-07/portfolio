export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="text-gray-400 text-sm">
          A selection of applied machine learning and GenAI systems I’ve built end-to-end.
        </p>

        <div className="space-y-6">

          <ProjectCard
            title="Hallucination-Aware Hybrid LLM System"
            description="RAG-based LLM system with strict grounding and refusal logic."
            link="/projects/hallucination-aware-llm"
          />

          <ProjectCard
            title="Multi-Modal Emotion-Aware Music Recommender"
            description="Emotion detection using face, voice, and text with Spotify recommendations."
            link="/projects/emotion-music-recommender"
          />

          <ProjectCard
            title="GenAI-Based YouTube & Web Summarizer"
            description="Long-form content summarization using Whisper and LLMs."
            link="/projects/yt-web-summarizer"
          />

          <ProjectCard
            title="Credit Card Default Prediction"
            description="Recall-focused risk modeling with threshold optimization."
            link="/projects/credit-card-default"
          />


        </div>

      </div>
    </main>
  );
}

function ProjectCard({
  title,
  description,
  link,
}: {
  title: string;
  description: string;
  link: string;
}) {
  return (
    <a
      href={link}
      className="block border border-gray-800 rounded-lg p-5 hover:bg-gray-900 transition"
    >
      <h2 className="text-lg font-medium mb-1">{title}</h2>
      <p className="text-sm text-gray-400">{description}</p>
    </a>
  );
}
