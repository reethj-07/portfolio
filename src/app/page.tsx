import FadeIn from "@/components/motion/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
        <FadeIn>
          <section className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Reeth Jain
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl">
              Aspiring Machine Learning & Generative AI Engineer focused on
              building end-to-end, data-driven systems — from problem formulation
              and modeling to evaluation and real-world deployment.
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
        </FadeIn>

        {/* ================= EXPERIENCE ================= */}
        <FadeIn delay={0.1}>
          <section>
            <h2 className="text-2xl font-semibold mb-8">Experience</h2>

            <div className="space-y-12">

              {/* PocketFM */}
              <div>
                <h3 className="text-lg font-medium">
                  Data Science Intern
                  <span className="text-gray-400"> · PocketFM</span>
                </h3>

                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <Badge label="Churn Modeling" />
                  <Badge label="Sentiment Analysis" />
                  <Badge label="Clustering" />
                  <Badge label="NLP" />
                  <Badge label="A/B Testing" />
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  May 2025 – July 2025
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Worked on large-scale user behavior data to identify early churn signals.</li>
                  <li>Applied clustering techniques to support personalization and churn modeling.</li>
                  <li>Built sentiment analysis pipelines to extract content and product signals.</li>
                  <li>Collaborated on experiment analysis using engagement metrics.</li>
                </ul>
              </div>

              {/* Paragon */}
              <div>
                <h3 className="text-lg font-medium">
                  Data Analyst Intern
                  <span className="text-gray-400"> · Paragon</span>
                </h3>

                <div className="flex flex-wrap gap-2 mt-2 mb-3">
                  <Badge label="SQL" />
                  <Badge label="EDA" />
                  <Badge label="Dashboards" />
                  <Badge label="Customer Segmentation" />
                </div>

                <p className="text-sm text-gray-500 mb-3">
                  Dec 2024 – Jan 2025
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-1">
                  <li>Cleaned and standardized multi-source sales data using SQL.</li>
                  <li>Performed EDA to identify trends, bottlenecks, and customer behavior.</li>
                  <li>Built optimized SQL queries and KPI tables for dashboards.</li>
                  <li>Applied clustering for customer segmentation.</li>
                </ul>
              </div>

            </div>
          </section>
        </FadeIn>

        {/* ================= PROJECTS ================= */}
        <FadeIn delay={0.2}>
          <section>
            <h2 className="text-2xl font-semibold mb-8">Projects</h2>

            <div className="grid gap-6 md:grid-cols-2">

              <ProjectCard
                title="Hallucination-Aware Hybrid LLM System"
                description="Retrieval-augmented LLM system with strict grounding and controlled generation to reduce unreliable model outputs."
                tech={["RAG", "QLoRA", "FAISS", "Phi-3 Mini"]}
                href="/projects/hallucination-aware-llm"
              />

              <ProjectCard
                title="Multi-Modal Emotion-Aware Music Recommender"
                description="Emotion-driven music recommendation system using face, voice, and text signals with real-time inference."
                tech={["ResNet50", "Wav2Vec2", "NLP", "Spotify API"]}
                href="/projects/emotion-music-recommender"
              />

              <ProjectCard
                title="GenAI-Based YouTube & Web Summarizer"
                description="End-to-end GenAI pipeline to summarize long-form videos and articles using speech-to-text and LLMs."
                tech={["Whisper", "LangChain", "LLMs"]}
                href="/projects/yt-web-summarizer"
              />

              <ProjectCard
                title="Credit Card Default Prediction"
                description="Risk-focused ML system for predicting credit card default with recall-oriented evaluation and decision tuning."
                tech={["Random Forest", "XGBoost", "SMOTE", "Risk Modeling"]}
                href="/projects/credit-card-default"
              />

            </div>
          </section>
        </FadeIn>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={0.3}>
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
        </FadeIn>

        {/* ================= CTA ================= */}
        <FadeIn delay={0.4}>
          <section className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">
              Open to ML, GenAI & Data Science Opportunities
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
        </FadeIn>

      </div>
    </main>
  );
}
