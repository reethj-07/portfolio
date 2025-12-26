export default function YTWebSummarizer() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-8">

        <h1 className="text-3xl font-bold">
          GenAI-Based YouTube & Web Summarizer
        </h1>

        <p className="text-gray-400 text-sm">
          Summarizes long-form videos and web content using Whisper and LLMs.
        </p>

        <ul className="list-disc list-inside text-gray-400 space-y-2 text-sm">
          <li>Audio extraction and transcription using Whisper</li>
          <li>Chunked summarization via LangChain pipelines</li>
          <li>GPU/CPU-aware inference for performance optimization</li>
        </ul>

        <a
          href="https://github.com/reethj-07/yt-web-summarizer"
          target="_blank"
          className="text-blue-400 hover:underline text-sm"
        >
          GitHub Repository →
        </a>

      </div>
    </main>
  );
}
