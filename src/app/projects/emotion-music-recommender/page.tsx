import Diagram from "@/components/Diagram";
import Section from "@/components/Section";

export default function EmotionMusicRecommender() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold">
          Multi-Modal Emotion-Aware Music Recommender
        </h1>

        <p className="text-gray-400 max-w-2xl">
          A real-time music recommendation system driven by emotional signals
          from face, voice, and text.
        </p>

        <Diagram
          src="/diagrams/emotion-music-architecture.png"
          alt="Emotion-aware music recommendation architecture"
        />

        <Section title="Modalities Used">
          <ul className="list-disc list-inside space-y-1">
            <li>Facial emotion detection (ResNet50)</li>
            <li>Speech emotion recognition (Wav2Vec2)</li>
            <li>Text sentiment analysis (Transformers)</li>
          </ul>
        </Section>

        <Section title="System Flow">
          Emotion scores from all modalities are fused and mapped to
          Spotify genres using a rule-based and API-driven recommender.
        </Section>

        <Section title="Key Learnings">
          <ul className="list-disc list-inside space-y-1">
            <li>Multi-modal fusion improves robustness</li>
            <li>Latency is critical for real-time UX</li>
            <li>Emotion normalization is non-trivial</li>
          </ul>
        </Section>

      </div>
    </main>
  );
}
