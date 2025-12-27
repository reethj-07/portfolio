import AnimatedSection from "@/components/AnimatedSection";
import ProjectCard from "@/components/ProjectCard";
import SkillBadge from "@/components/SkillBadge";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-20">

        {/* HERO */}
        <AnimatedSection>
          <section className="text-center space-y-4">
            <h1 className="text-5xl font-bold tracking-tight">
              Reeth Jain
            </h1>

            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Exploring Machine Learning and Generative AI through practical,
              end-to-end systems.
            </p>

            <div className="flex justify-center gap-6 text-sm">
              <a
                href="https://github.com/reethj-07"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/reeth-jain-rj777"
                target="_blank"
                className="text-blue-400 hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </section>
        </AnimatedSection>

        {/* EXPERIENCE */}
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-semibold mb-8">Experience</h2>

            <div className="space-y-10">

              <div className="border-l border-gray-800 pl-6">
                <h3 className="text-lg font-medium">
                  Data Science Intern
                  <span className="text-gray-400"> · PocketFM</span>
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  May 2025 – July 2025
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                  <li>Built scalable pipelines on user behavior logs to surface early churn signals.</li>
                  <li>Segmented 2M+ users using clustering for personalization and churn risk modeling.</li>
                  <li>Developed NLP-based sentiment analysis on 50K+ reviews to extract content insights.</li>
                  <li>Evaluated A/B experiments using CTR, sessions, and impressions.</li>
                </ul>
              </div>

              <div className="border-l border-gray-800 pl-6">
                <h3 className="text-lg font-medium">
                  Data Analyst Intern
                  <span className="text-gray-400"> · Paragon</span>
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Dec 2024 – Jan 2025
                </p>

                <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                  <li>Cleaned and standardized multi-source sales data using SQL.</li>
                  <li>Performed EDA to identify trends, bottlenecks, and customer behavior.</li>
                  <li>Built optimized SQL queries and KPI tables for dashboards.</li>
                  <li>Applied clustering for customer segmentation.</li>
                </ul>
              </div>

            </div>
          </section>
        </AnimatedSection>

        {/* PROJECTS */}
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-semibold mb-8">Projects</h2>

            <div className="grid md:grid-cols-2 gap-6">

              <ProjectCard
                title="Hallucination-Aware Hybrid LLM System"
                subtitle="RAG, QLoRA, FAISS"
                href="/projects/hallucination-aware-llm"
                points={[
                  "Context-grounded RAG pipeline with refusal logic",
                  "QLoRA fine-tuning on Phi-3 Mini (4-bit)",
                  "Empirical hallucination reduction comparison",
                ]}
              />

              <ProjectCard
                title="Multi-Modal Emotion-Aware Music Recommender"
                subtitle="CV, NLP, Audio"
                href="/projects/emotion-music-recommender"
                points={[
                  "Emotion detection via face, voice & text",
                  "Spotify genre mapping for personalization",
                  "Real-time Streamlit application",
                ]}
              />

              <ProjectCard
                title="GenAI-Based YouTube & Web Summarizer"
                subtitle="Whisper, LangChain"
                href="/projects/yt-web-summarizer"
                points={[
                  "Long-form video & article summarization",
                  "Whisper-based transcription pipeline",
                  "GPU/CPU-aware inference optimization",
                ]}
              />

              <ProjectCard
                title="Credit Card Default Prediction"
                subtitle="ML, Risk Modeling"
                href="/projects/credit-card-default"
                points={[
                  "25K+ records with risk feature engineering",
                  "SMOTE + recall-focused optimization",
                  "Threshold tuning for business risk",
                ]}
              />

            </div>
          </section>
        </AnimatedSection>

        {/* SKILLS */}
        <AnimatedSection>
          <section>
            <h2 className="text-2xl font-semibold mb-6">Skills</h2>

            <div className="flex flex-wrap gap-2">
              {[
                "Python","SQL","C++",
                "PyTorch","TensorFlow","Scikit-learn",
                "Transformers","LangChain","FAISS","Whisper","RAG",
                "EDA","A/B Testing","Clustering",
                "Docker","GitHub Actions",
                "FastAPI","Flask","Streamlit","GCP"
              ].map(skill => (
                <SkillBadge key={skill} label={skill} />
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* CTA */}
        <AnimatedSection>
          <section className="text-center space-y-6">
            <h2 className="text-2xl font-semibold">
              Open to Internships & Full-Time Roles
            </h2>

            <p className="text-gray-400 max-w-xl mx-auto text-sm">
              Interested in machine learning, data science, and GenAI roles
              focused on real-world impact and scalable systems.
            </p>

            <div className="flex justify-center gap-4">
              <a
                href="/Reeth_Jain_Resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-white text-black rounded-md text-sm font-medium hover:bg-gray-200 transition"
              >
                Download Resume
              </a>

              <a
                href="mailto:reeth_j@ch.iitr.ac.in"
                className="px-6 py-3 border border-gray-600 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition"
              >
                Contact Me
              </a>
            </div>
          </section>
        </AnimatedSection>

      </div>
    </main>
  );
}
