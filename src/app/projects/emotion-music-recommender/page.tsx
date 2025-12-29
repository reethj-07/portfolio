import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import Diagram from "@/components/Diagram";

export default function EmotionMusicRecommender() {
  return (
    <ProjectLayout
      title="Multi-Modal Emotion-Aware Music Recommendation System"
      description="A real-time music recommender that adapts playlists based on emotional signals inferred from face, voice, and text inputs."
      badges={[
        "Computer Vision",
        "Speech Emotion",
        "NLP",
        "Multi-Modal Fusion",
        "Spotify API",
      ]}
    >
      <Section title="Problem Statement">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Most music recommendation systems rely heavily on historical listening
          behavior and collaborative filtering. This project investigates whether
          incorporating <span className="text-white font-medium">real-time emotional context </span>
          can enhance personalization, especially in short-session or cold-start scenarios.
        </p>
      </Section>

      <Diagram
        src="/diagrams/emotion-music-architecture.png"
        alt="Emotion-aware music recommendation pipeline"
        caption="Multi-modal emotion inference pipeline combining face, voice, and text signals for playlist generation."
      />

      <Section title="Modeling Approach">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>ResNet50 fine-tuned for facial emotion recognition from webcam input.</li>
          <li>Wav2Vec2 for speech-based emotion inference from short audio clips.</li>
          <li>Transformer-based sentiment analysis for text emotion extraction.</li>
          <li>Score normalization and aggregation for multi-modal emotion fusion.</li>
        </ul>
      </Section>

      <Section title="System Integration & Inference">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Streamlit UI supporting webcam, microphone, and text input.</li>
          <li>Latency-aware execution to ensure responsive user experience.</li>
          <li>Emotion-to-genre mapping used to generate Spotify playlists.</li>
          <li>Fallback logic when one or more modalities are unavailable.</li>
        </ul>
      </Section>

      <Section title="Evaluation & Limitations">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Qualitative evaluation based on perceived relevance of recommendations.</li>
          <li>Latency constraints limited model size for real-time inference.</li>
          <li>Emotion predictions can be noisy for short or ambiguous inputs.</li>
        </ul>
      </Section>

      <Section title="Key Learnings">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Multi-modal fusion improves robustness over single-modality signals.</li>
          <li>Latency trade-offs significantly influence model and UX design.</li>
          <li>Emotion normalization is critical for stable downstream decisions.</li>
        </ul>
      </Section>

      <Section title="Future Improvements">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Temporal emotion smoothing for more stable recommendations.</li>
          <li>Personalized emotion-to-genre mappings per user.</li>
          <li>Reinforcement learning-based feedback loops.</li>
          <li>Deploy models as lightweight inference services for scalability.</li>
        </ul>
      </Section>
    </ProjectLayout>
  );
}
