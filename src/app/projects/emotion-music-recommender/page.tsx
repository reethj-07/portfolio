import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import Diagram from "@/components/Diagram";

export default function EmotionMusicRecommender() {
  return (
    <ProjectLayout
      title="Multi-Modal Emotion-Aware Music Recommendation System"
      description="A real-time music recommender that adapts playlists based on emotional signals derived from face, voice, and text inputs."
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
          Traditional music recommender systems rely primarily on historical
          listening behavior. This project explores whether incorporating
          real-time emotional context can improve personalization and user
          experience.
        </p>
      </Section>

      <Diagram
        src="/diagrams/emotion-music-architecture.png"
        alt="Emotion-aware music recommendation pipeline"
        title="System Architecture"
        description="User emotion is inferred independently from face, voice, and text modalities. These signals are fused into a unified emotional representation that drives playlist generation via Spotify APIs."
      />

      <Section title="Modeling Approach">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>ResNet50 fine-tuned for facial emotion recognition</li>
          <li>Wav2Vec2 for speech-based emotion inference</li>
          <li>Transformer-based sentiment analysis for text input</li>
          <li>Emotion fusion via normalized score aggregation</li>
        </ul>
      </Section>

      <Section title="System Integration">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Streamlit UI supporting webcam, audio, and text inputs</li>
          <li>Real-time inference with latency-aware execution</li>
          <li>Emotion-to-genre mapping for playlist construction</li>
        </ul>
      </Section>

      <Section title="Key Learnings">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Multi-modal signals outperform single-modality emotion detection</li>
          <li>Latency constraints strongly influence UX design</li>
          <li>Emotion normalization is critical for stable recommendations</li>
        </ul>
      </Section>
      <Section title="Future Improvements">
  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
    <li>Incorporate temporal emotion smoothing for more stable recommendations.</li>
    <li>Learn personalized emotion-to-genre mappings per user.</li>
    <li>Add reinforcement learning based feedback loops.</li>
    <li>Deploy models as lightweight inference services for scalability.</li>
  </ul>
</Section>



    </ProjectLayout>
  );
}
