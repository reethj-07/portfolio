export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-4xl mx-auto space-y-16">

        {/* HERO */}
        <section>
          <h1 className="text-4xl font-bold mb-3">Reeth Jain</h1>
          <p className="text-lg text-gray-400 mb-4">
            Exploring Machine Learning and Generative AI through practical,
            end-to-end systems.
          </p>

          <div className="flex gap-4 text-sm">
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

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Experience</h2>

          <div className="space-y-8">

            {/* PocketFM */}
            <div>
              <h3 className="text-lg font-medium">
                Data Science Intern
                <span className="text-gray-400"> · PocketFM</span>
              </h3>
              <p className="text-sm text-gray-500 mb-2">May 2025 – July 2025</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1">
                <li>Built scalable pipelines on user behavior logs to surface early churn signals.</li>
                <li>Segmented 2M+ users using clustering for personalization and churn risk modeling.</li>
                <li>Developed NLP-based sentiment analysis on 50K+ reviews to extract content insights.</li>
                <li>Evaluated A/B experiments using CTR, sessions, and impressions.</li>
              </ul>
            </div>

            {/* Paragon */}
            <div>
              <h3 className="text-lg font-medium">
                Data Analyst Intern
                <span className="text-gray-400"> · Paragon</span>
              </h3>
              <p className="text-sm text-gray-500 mb-2">Dec 2024 – Jan 2025</p>

              <ul className="list-disc list-inside text-gray-400 space-y-1">
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
          <h2 className="text-2xl font-semibold mb-6">Projects</h2>

          <div className="space-y-8">

            <div>
              <h3 className="text-lg font-medium">
                Hallucination-Aware Hybrid LLM System
                <span className="text-sm text-gray-400"> · RAG, QLoRA, FAISS</span>
              </h3>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Designed a hallucination-aware RAG pipeline with strict context grounding.</li>
                <li>Fine-tuned Phi-3 Mini using QLoRA (4-bit) for efficient adaptation.</li>
                <li>Implemented refusal logic when answers lacked retrieved evidence.</li>
              </ul>
              <a
                href="/projects/hallucination-aware-llm"
                className="text-blue-400 text-sm hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Multi-Modal Emotion-Aware Music Recommender
                <span className="text-sm text-gray-400"> · CV, NLP, Audio</span>
              </h3>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Detected emotions using face, voice, and text signals.</li>
                <li>Mapped emotional context to Spotify genres for personalization.</li>
                <li>Built an interactive Streamlit application for real-time inference.</li>
              </ul>
              <a
                href="/projects/emotion-music-recommender"
                className="text-blue-400 text-sm hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                GenAI-Based YouTube & Web Summarizer
                <span className="text-sm text-gray-400"> · Whisper, LangChain</span>
              </h3>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Built an end-to-end pipeline for summarizing long videos and articles.</li>
                <li>Used Whisper for transcription and LLMs for abstractive summarization.</li>
                <li>Implemented GPU/CPU-aware inference for efficiency.</li>
              </ul>
              <a
                href="/projects/yt-web-summarizer"
                className="text-blue-400 text-sm hover:underline mt-2 inline-block"
              >
                View Project →
              </a>
            </div>

            <div>
              <h3 className="text-lg font-medium">
                Credit Card Default Prediction
                <span className="text-sm text-gray-400"> · ML, Risk Modeling</span>
              </h3>
              <ul className="list-disc list-inside text-gray-400 mt-2 space-y-1">
                <li>Engineered risk features from 25K+ customer records.</li>
                <li>Handled class imbalance using SMOTE and optimized for recall.</li>
                <li>Tuned decision thresholds for risk-sensitive predictions.</li>
              </ul>
            </div>

          </div>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Skills</h2>

          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
            <p><span className="text-white font-medium">Programming:</span> Python, SQL, C++</p>
            <p><span className="text-white font-medium">ML & DL:</span> Feature Engineering, Model Evaluation, PyTorch, TensorFlow, Scikit-learn</p>
            <p><span className="text-white font-medium">NLP & GenAI:</span> Transformers, HuggingFace, LangChain, RAG, FAISS, Whisper</p>
            <p><span className="text-white font-medium">MLOps:</span> Experiment Tracking, Model Versioning, Docker, GitHub Actions</p>
            <p><span className="text-white font-medium">Data:</span> EDA, A/B Testing, Clustering, Pandas, NumPy, Matplotlib</p>
            <p><span className="text-white font-medium">Backend:</span> FastAPI, Flask, Streamlit, REST APIs, GCP (Basics)</p>
          </div>
        </section>

        {/* CTA */}
        <section className="mt-16 text-center">
          <h2 className="text-2xl font-semibold mb-4">
            Open to Internships & Full-Time Roles
          </h2>

          <p className="text-gray-400 max-w-xl mx-auto mb-6 text-sm">
            Interested in machine learning, data science, and GenAI roles focused
            on real-world impact and scalable systems.
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

      </div>
    </main>
  );
}
