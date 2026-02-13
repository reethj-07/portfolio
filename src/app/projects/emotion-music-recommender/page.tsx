import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function EmotionMusicRecommender() {
  return (
    <ProjectLayout
      title="VibeTune: Multi-Modal Emotion-Based Music Recommender"
      subtitle="Production-ready emotion detection with real-time Spotify integration"
      github="https://github.com/reeth-07/emotion-music-recommender"
      liveDemo="https://vibetune.onrender.com"
      tags={[
        "ResNet50",
        "Wav2Vec2",
        "DistilRoBERTa",
        "Computer Vision",
        "Speech Recognition",
        "NLP",
        "Spotify API",
        "Streamlit",
        "Docker",
        "CI/CD"
      ]}
    >
      {/* Overview */}
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          VibeTune is a <span className="text-white font-medium">production-ready web application</span> that 
          analyzes your emotional state through three different modalities—<span className="text-white font-medium">face, 
          voice, and text</span>—and provides personalized music recommendations from Spotify to match your current vibe.
        </p>
        <p className="text-gray-300 leading-relaxed">
          Deployed with one-click on Render, featuring lazy-loaded ML models, automated CI/CD pipeline, Docker 
          containerization, and comprehensive monitoring with Sentry error tracking and Prometheus metrics.
        </p>
      </Section>

      {/* Key Features */}
      <Section title="Key Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Face Analysis
            </h3>
            <p className="text-gray-400 text-sm">
              ResNet50 fine-tuned on RAF-DB dataset achieving <span className="text-white font-medium">74% 
              validation accuracy</span>. Detects 7 emotions from webcam or uploaded images.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Text Analysis
            </h3>
            <p className="text-gray-400 text-sm">
              DistilRoBERTa transformer model from Hugging Face for contextual emotion classification 
              from user-provided text with 6-emotion support.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Voice Analysis
            </h3>
            <p className="text-gray-400 text-sm">
              Wav2Vec2-based speech emotion recognition supporting both live recording and audio file 
              uploads with multi-emotion detection.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Spotify Integration
            </h3>
            <p className="text-gray-400 text-sm">
              Real-time playlist generation with emotion-aligned tracks, album art, and 30-second 
              audio previews across 8 emotion categories.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Production Features
            </h3>
            <p className="text-gray-400 text-sm">
              Lazy-loaded ML models, automated CI/CD pipeline with GitHub Actions, Docker containerization 
              with health checks, and comprehensive error tracking.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Monitoring & Metrics
            </h3>
            <p className="text-gray-400 text-sm">
              Sentry error tracking, Prometheus metrics exposure, Grafana dashboards, and in-app 
              memory management controls.
            </p>
          </div>
        </div>
      </Section>

      {/* Model Architecture  */}
      <Section title="Model Architecture">
        <Diagram
          src="/diagrams/emotion-music-architecture.png"
          alt="VibeTune Multi-Modal Architecture"
          title="System Architecture Diagram"
          description="End-to-end multi-modal emotion detection pipeline with Spotify integration"
        />

        <div className="space-y-4 mt-6">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Face Emotion Detection</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-blue-400">Model:</span> ResNet50 fine-tuned on RAF-DB dataset</p>
              <p><span className="text-blue-400">Performance:</span> 74% validation accuracy on test set</p>
              <p><span className="text-blue-400">Emotions:</span> Happy, Sad, Angry, Surprised, Fearful, Disgust, Neutral</p>
              <p><span className="text-blue-400">Input:</span> Webcam capture or image upload</p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Text Emotion Classification</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-blue-400">Model:</span> j-hartmann/emotion-english-distilroberta-base</p>
              <p><span className="text-blue-400">Architecture:</span> DistilRoBERTa transformer (pre-trained)</p>
              <p><span className="text-blue-400">Emotions:</span> 6-class emotion classification</p>
              <p><span className="text-blue-400">Input:</span> User-provided text (any length)</p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Voice Emotion Recognition</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p><span className="text-blue-400">Model:</span> ehcalabres/wav2vec2-lg-xlsr-en-speech-emotion-recognition</p>
              <p><span className="text-blue-400">Architecture:</span> Wav2Vec2 trained on speech emotion datasets</p>
              <p><span className="text-blue-400">Input:</span> Live audio recording or file upload</p>
              <p><span className="text-blue-400">Processing:</span> Librosa for audio feature extraction</p>
            </div>
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
              <SkillBadge label="TensorFlow 2.16" />
              <SkillBadge label="Keras" />
              <SkillBadge label="PyTorch 2.3" />
              <SkillBadge label="Transformers" />
              <SkillBadge label="Hugging Face" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Audio & Vision Processing
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Librosa" />
              <SkillBadge label="Pydub" />
              <SkillBadge label="SoundDevice" />
              <SkillBadge label="FFMPEG" />
              <SkillBadge label="OpenCV" />
              <SkillBadge label="NumPy" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Web & API
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Streamlit" />
              <SkillBadge label="Spotipy" />
              <SkillBadge label="Spotify Web API" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              DevOps & Monitoring
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Docker" />
              <SkillBadge label="GitHub Actions" />
              <SkillBadge label="Render" />
              <SkillBadge label="Sentry" />
              <SkillBadge label="Prometheus" />
              <SkillBadge label="Grafana" />
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
              <span className="text-white font-medium">Lazy Model Loading</span>: ML models loaded 
              on-demand to optimize memory usage and startup time (first run can take longer)
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Normalized Emotion Mapping</span>: Consistent 
              emotion labels across all three modalities for stable downstream recommendations
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Render Deployment</span>: One-click deployment 
              with render.yaml, automatic builds, health checks, and environment secrets management
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">CI Pipeline</span>: GitHub Actions runs compile 
              checks on every push/PR to main for code quality assurance
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Interactive UI</span>: Clean Streamlit interface 
              with tabbed workflows, in-app memory controls, and real-time feedback
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Error Handling</span>: Graceful fallbacks when 
              modalities are unavailable, comprehensive error tracking with Sentry
            </span>
          </div>
        </div>
      </Section>

      {/* Deployment & Monitoring */}
      <Section title="Deployment & Monitoring">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Deployment Stack</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Docker runtime with automatic builds</p>
              <p>Health checks and auto-deploy on push</p>
              <p>Pre-configured environment variables</p>
              <p>Prometheus metrics on port 9100</p>
              <p>Render one-click deployment</p>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-3">Monitoring & Observability</h3>
            <div className="space-y-2 text-gray-300 text-sm">
              <p>Sentry for error tracking & tracing</p>
              <p>Prometheus metrics exposure at /metrics</p>
              <p>Grafana dashboards (optional local stack)</p>
              <p>Environment-based configuration</p>
              <p>In-app memory management controls</p>
            </div>
          </div>
        </div>
      </Section>

      {/* Future Improvements */}
      <Section title="Future Improvements">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Temporal emotion smoothing for stability</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Personalized emotion-to-genre mappings</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Reinforcement learning feedback loops</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">User history and preference tracking</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Real-time playlist updates</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Multi-user session support</span>
          </div>
        </div>
      </Section>
    </ProjectLayout>
  );
}
