"use client";

import FadeIn from "@/components/motion/FadeIn";
import ProjectCard from "@/components/ProjectCard";
import Badge from "@/components/Badge";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-5xl mx-auto space-y-24">

        {/* ================= HERO ================= */}
        <FadeIn>
          <section className="relative space-y-6 overflow-hidden">
            {/* Animated Background Orbs */}
            <div className="absolute inset-0 -z-10">
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1,
                }}
                className="absolute top-20 right-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.25, 0.45, 0.25],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
                className="absolute -bottom-20 left-1/3 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl"
              />
            </div>

            <div className="space-y-2 relative">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-bold tracking-tight bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-transparent"
              >
                Reeth Jain
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
              >
                ML Engineer | GenAI & Agentic AI Systems | MLOps
              </motion.p>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-3xl leading-relaxed relative"
            >
              Building production-grade AI systems with focus on <span className="text-white font-medium">Large Language Models</span>,
              <span className="text-white font-medium"> Retrieval-Augmented Generation</span>, and
              <span className="text-white font-medium"> autonomous agent frameworks</span>.
              Experienced in deploying scalable ML infrastructure from research to production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <a
                href="https://github.com/reethj-07"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 
                           border border-gray-700 rounded-lg text-sm font-medium transition-all
                           hover:border-blue-500/50"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/reeth-jain-rj777"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 
                           rounded-lg text-sm font-medium transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>
              <a
                href="mailto:reeth_j@ch.iitr.ac.in"
                className="flex items-center gap-2 px-4 py-2 border border-gray-700 
                           hover:border-gray-600 rounded-lg text-sm font-medium transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email
              </a>
            </motion.div>
          </section>
        </FadeIn>

        {/* ================= EXPERIENCE ================= */}
        <FadeIn delay={0.1}>
          <section>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Professional Experience
            </h2>

            <div className="space-y-8">
              {/* Hello Agentic.AI */}
              <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all bg-gradient-to-br from-gray-900/50 to-black/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      AI Developer Intern
                    </h3>
                    <p className="text-blue-400 font-medium">Hello agentic.ai</p>
                  </div>
                  <span className="text-sm text-gray-400 md:text-right">
                    Jan 2026 – Present
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge label="Agentic AI" />
                  <Badge label="LangGraph" />
                  <Badge label="Multi-Agent Systems" />
                  <Badge label="AI Workflows" />
                  <Badge label="Python" />
                </div>

                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Developing advanced agentic AI systems using LangGraph for autonomous task execution and multi-agent orchestration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Building intelligent workflows that enable AI agents to solve complex problems with planning, memory, and tool integration</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Implementing production-ready agent systems focusing on reliability, safety, and scalable deployment</span>
                  </li>
                </ul>
              </div>

              {/* Xelron.ai */}
              <div className="border border-gray-800 rounded-xl p-6 hover:border-gray-700 transition-all bg-gradient-to-br from-gray-900/50 to-black/50">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">
                      AI SDE Intern
                    </h3>
                    <p className="text-blue-400 font-medium">Xelron.ai</p>
                  </div>
                  <span className="text-sm text-gray-400 md:text-right">
                    Feb 2025 – March 2025
                  </span>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  <Badge label="AI Agents" />
                  <Badge label="Benchmarking" />
                  <Badge label="Docker" />
                  <Badge label="pytest" />
                  <Badge label="TOML" />
                  <Badge label="JSON Specs" />
                  <Badge label="Python" />
                </div>

                <ul className="space-y-2 text-gray-300">
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Built 15+ production AI agent benchmarks using Docker, pytest, and TOML to enable reproducible Harbor evaluation</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Automated validation with 11 quality gates, reducing inconsistencies and ensuring deterministic evaluation outcomes</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Standardized task schemas with JSON specs and edge-case coverage to improve reproducibility and auditability</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-blue-400 mt-1">▹</span>
                    <span>Delivered multi-domain benchmark suites spanning ML, data processing, security, and scientific computing workflows</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ================= PROJECTS ================= */}
        <FadeIn delay={0.2}>
          <section>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Featured Projects
            </h2>

            <div className="grid gap-6 md:grid-cols-2">

              <ProjectCard
                title="Autonomous Security MLOps Platform"
                description="Enterprise-grade MLOps platform with 5 ensemble models, advanced monitoring, drift detection, and production-safe deployment infrastructure."
                tech={["XGBoost", "MLflow", "Kubernetes", "Prometheus", "SHAP", "A/B Testing"]}
                href="/projects/autonomous-security-mlops"
              />

              <ProjectCard
                title="Hallucination-Aware Hybrid LLM System"
                description="Production-grade RAG system with Phi-3, FAISS retrieval, and strict context-grounding to prevent hallucinations. 86.7% retrieval accuracy."
                tech={["RAG", "Phi-3", "FAISS", "LoRA", "FastAPI"]}
                href="/projects/hallucination-aware-llm"
              />

              <ProjectCard
                title="VibeTune: Multi-Modal Emotion Music Recommender"
                description="Real-time emotion detection from face, voice, and text with Spotify integration. ResNet50 + Wav2Vec2 + DistilRoBERTa for multi-modal analysis."
                tech={["ResNet50", "Wav2Vec2", "Transformers", "Spotify API", "Streamlit"]}
                href="/projects/emotion-music-recommender"
              />

              <ProjectCard
                title="GenAI YouTube & Web Summarizer"
                description="AI-powered summarization tool using Whisper for transcription and LLMs for intelligent content summarization with 5 summary styles."
                tech={["Whisper", "LangChain", "Groq", "Streamlit", "BeautifulSoup"]}
                href="/projects/yt-web-summarizer"
              />

            </div>
          </section>
        </FadeIn>

        {/* ================= SKILLS ================= */}
        <FadeIn delay={0.3}>
          <section>
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
              Technical Expertise
            </h2>

            <div className="space-y-6">
              {/* AI/ML Frameworks */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  AI/ML Frameworks & Libraries
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Python", "PyTorch", "TensorFlow", "Scikit-learn", "HuggingFace", "OpenCV", "NumPy", "Pandas"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* LLM & GenAI */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  LLM & GenAI Tools
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["LangChain", "LangGraph", "LlamaIndex", "OpenAI API", "Mistral", "RAG", "FAISS", "Whisper", "LoRA/QLoRA", "Phi-3", "AI Agents"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Backend & APIs */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  Backend & APIs
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["FastAPI", "Flask", "Streamlit", "SQL", "PostgreSQL", "Redis"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* DevOps & Cloud */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  DevOps & Cloud Infrastructure
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Docker", "Kubernetes", "Terraform", "Helm", "GitHub Actions", "AWS", "Azure", "GCP", "TOML"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* MLOps & Observability */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  MLOps & Observability
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["MLflow", "DVC", "Airflow", "Kafka", "Prometheus", "Grafana", "OpenTelemetry", "Sentry", "Benchmarking", "Deterministic Evaluation"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Other Tools */}
              <div>
                <h3 className="text-sm font-semibold text-blue-400 mb-3 uppercase tracking-wider">
                  Development & Analysis
                </h3>
                <div className="flex flex-wrap gap-2">
                  {["Git", "Jupyter", "VS Code", "C++", "JSON", "pytest", "NLP", "Computer Vision", "Edge-Case Testing"].map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className="px-3 py-1.5 rounded-lg border border-gray-700
                                 bg-gradient-to-br from-gray-800 to-gray-900
                                 hover:border-blue-500/50 hover:from-gray-700 hover:to-gray-800
                                 text-sm text-gray-200 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </FadeIn>

        {/* ================= CTA ================= */}
        <FadeIn delay={0.4}>
          <section className="text-center space-y-8 py-12">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Let's Build Something Impactful
              </h2>

              <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                Open to <span className="text-blue-400 font-medium">ML Engineering</span>, 
                <span className="text-blue-400 font-medium"> GenAI</span>, and 
                <span className="text-blue-400 font-medium"> MLOps</span> roles where I can contribute to 
                production-grade AI systems and scalable infrastructure.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <a
                href="/AIML_latest.pdf"
                download
                className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 
                           hover:from-blue-500 hover:to-blue-600 rounded-lg
                           text-base font-semibold transition-all duration-300
                           shadow-lg hover:shadow-xl hover:shadow-blue-500/20
                           flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>

              <a
                href="mailto:reeth_j@ch.iitr.ac.in"
                className="px-8 py-4 border-2 border-gray-700 hover:border-blue-500 
                           rounded-lg text-base font-semibold transition-all duration-300
                           hover:bg-gray-800/50 flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Get In Touch
              </a>
            </div>

            <div className="pt-8 border-t border-gray-800">
              <p className="text-sm text-gray-500 italic">
                "Building AI systems that scale from prototype to production"
              </p>
            </div>
          </section>
        </FadeIn>

      </div>
    </main>
  );
}
