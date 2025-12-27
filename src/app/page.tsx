import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* ================= HERO ================= */}
        <section className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Reeth Jain
          </h1>

          <p className="text-lg text-gray-400 max-w-2xl">
            Building end-to-end Machine Learning and Generative AI systems —
            from data pipelines and modeling to deployment and evaluation.
          </p>

          <div className="flex gap-5 text-sm">
            <a
              href="https://github.com/reethj-07"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              GitHub →
            </a>
            <a
              href="https://linkedin.com/in/reeth-jain-rj777"
              target="_blank"
              className="text-blue-400 hover:text-blue-300 transition"
            >
              LinkedIn →
            </a>
          </div>
        </section>

        {/* ================= EXPERIENCE ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Experience</h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-lg font-medium">
                Data Science Intern <span className="text-gray-400">· PocketFM</span>
              </h3>
              <p className="text-sm text-gray-500 mb-3">May 2025 – July 2025</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                <li>Built scalable pipelines on user behavior logs to surface early churn signals.</li>
                <li>Segmented 2M+ users using clustering for personalization and churn risk modeling.</li>
                <li>Developed NLP-based sentiment analysis on 50K+ reviews to extract insights.</li>
                <li>Evaluated A/B experiments using CTR, sessions, and impressions.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Data Analyst Intern <span className="text-gray-400">· Paragon</span>
              </h3>
              <p className="text-sm text-gray-500 mb-3">Dec 2024 – Jan 2025</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                <li>Cleaned and standardized multi-source sales data using SQL.</li>
                <li>Performed EDA to identify trends, bottlenecks, and customer behavior.</li>
                <li>Built optimized SQL queries and KPI tables for dashboards.</li>
                <li>Applied clustering for customer segmentation.</li>
              </ul>
            </div>

          </div>
        </section>

       {/* PROJECTS */}
<section>
  <h2 className="text-2xl font-semibold mb-8">Projects</h2>

  <div className="grid gap-6 md:grid-cols-2">

    <ProjectCard
      title="Hallucination-Aware Hybrid LLM System"
      description="Retrieval-augmented LLM system with strict grounding and refusal logic to mitigate hallucinations in generative models."
      tech={["RAG", "QLoRA", "FAISS", "Phi-3 Mini"]}
      href="/projects/hallucination-aware-llm"
    />

    <ProjectCard
      title="Multi-Modal Emotion-Aware Music Recommender"
      description="Emotion-driven music recommendation using face, voice, and text signals with real-time inference."
      tech={["ResNet50", "Wav2Vec2", "NLP", "Spotify API"]}
      href="/projects/emotion-music-recommender"
    />

    <ProjectCard
      title="GenAI-Based YouTube & Web Summarizer"
      description="End-to-end GenAI pipeline to summarize long-form videos and articles using Whisper and LLMs."
      tech={["Whisper", "LangChain", "LLMs"]}
      href="/projects/yt-web-summarizer"
    />

    <ProjectCard
      title="Credit Card Default Prediction"
      description="Risk-focused ML system for predicting credit card default with recall-optimized decision thresholds."
      tech={["Random Forest", "XGBoost", "SMOTE", "Risk Modeling"]}
      href="/projects/credit-card-default"
    />

  </div>
</section>


        {/* ================= SKILLS ================= */}
        <section>
          <h2 className="text-2xl font-semibold mb-8">Skills</h2>

          <div className="flex flex-wrap gap-3 text-sm text-gray-300">
            {[
              "Python", "SQL", "C++",
              "Machine Learning", "Deep Learning",
              "PyTorch", "TensorFlow", "Scikit-learn",
              "NLP", "Transformers", "RAG", "LangChain", "FAISS", "Whisper",
              "MLOps", "Docker", "GitHub Actions",
              "EDA", "A/B Testing", "Clustering",
              "FastAPI", "Flask", "Streamlit", "GCP (Basics)",
            ].map((skill) => (
              <span
                key={skill}
                className="px-3 py-1 rounded-full border border-gray-700
                           bg-gray-900 hover:border-blue-500/50
                           hover:text-white transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* ================= CTA ================= */}
        <section className="text-center space-y-6">
          <h2 className="text-2xl font-semibold">
            Open to Internships & Full-Time Roles
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto text-sm">
            Interested in ML, Data Science, and GenAI roles focused on
            real-world impact and scalable systems.
          </p>

          <div className="flex justify-center gap-4">
            <a
              href="/Reeth_Jain_Resume.pdf"
              target="_blank"
              className="px-6 py-3 bg-white text-black rounded-md
                         text-sm font-medium hover:bg-gray-200 transition"
            >
              Download Resume
            </a>

            <a
              href="mailto:reeth_j@ch.iitr.ac.in"
              className="px-6 py-3 border border-gray-600 rounded-md
                         text-sm font-medium hover:bg-gray-800 transition"
            >
              Contact Me
            </a>
          </div>
        </section>

      </div>
    </main>
  );
}
