export default function EmotionMusicRecommender() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold">
          Multi-Modal Emotion-Aware Music Recommender
        </h1>

        <p className="text-gray-400 text-sm">
          Personalized music recommendations based on real-time emotional signals.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
          <li>Facial emotion detection using ResNet50 (RAF-DB)</li>
          <li>Speech emotion recognition using Wav2Vec2</li>
          <li>Text sentiment modeling using transformer-based NLP</li>
          <li>Emotion-to-genre mapping via Spotify API</li>
        </ul>

        <a
          href="https://github.com/reethj-07/emotion-music-recommender"
          target="_blank"
          className="text-blue-400 hover:underline text-sm"
        >
          GitHub Repository →
        </a>

      </div>
    </main>
  );
}
