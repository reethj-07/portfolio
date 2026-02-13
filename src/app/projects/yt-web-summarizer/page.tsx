import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import SkillBadge from "@/components/SkillBadge";
import Diagram from "@/components/Diagram";

export default function YTWebSummarizer() {
  return (
    <ProjectLayout
      title="YT Web Summarizer"
      subtitle="AI-powered tool to transform YouTube videos and web articles into concise summaries"
      github="https://github.com/reethj-07/yt-web-summarizer"
      liveDemo="https://huggingface.co/spaces/reethj-07/yt-web-summarizer"
      tags={[
        "Whisper",
        "LangChain",
        "Groq",
        "Llama-3.3-70b",
        "Streamlit",
        "BeautifulSoup",
        "yt-dlp",
        "Audio Processing"
      ]}
    >
      {/* Overview */}
      <Section title="Overview">
        <p className="text-gray-300 leading-relaxed mb-4">
          YT Web Summarizer is an <span className="text-white font-medium">AI-powered summarization tool</span> that 
          transforms YouTube videos and web articles into concise, actionable summaries. Built with production-ready 
          Python and deployed on <span className="text-white font-medium">Hugging Face Spaces</span>, it features 
          automatic transcription using OpenAI Whisper and intelligent summarization with Groq's Llama-3.3-70b model.
        </p>
        <p className="text-gray-300 leading-relaxed">
          The system includes <span className="text-white font-medium">smart caching to reduce API costs by ~70%</span>, 
          5 summary styles, rate limiting, export options, and comprehensive statistics tracking for optimal user experience.
        </p>
      </Section>

      {/* Key Features */}
      <Section title="Key Features">
        <div className="grid md:grid-cols-2 gap-4">
          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              YouTube Transcription
            </h3>
            <p className="text-gray-400 text-sm">
              Automatic audio extraction and transcription using OpenAI Whisper with 5 model size options 
              (Tiny, Base, Small, Medium, Large) for speed/accuracy trade-offs.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Website Summarization
            </h3>
            <p className="text-gray-400 text-sm">
              Extract and summarize content from any web article using BeautifulSoup4 for clean text 
              extraction and intelligent content parsing.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              5 Summary Styles
            </h3>
            <p className="text-gray-400 text-sm">
              Bullet points, paragraphs, key insights, Q&A format, or executive summary with customizable 
              summary length (50-500 words).
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Smart Caching
            </h3>
            <p className="text-gray-400 text-sm">
              Intelligent caching system reduces API costs by ~70% by storing recent summaries for instant 
              access without redundant processing.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Statistics & Analysis
            </h3>
            <p className="text-gray-400 text-sm">
              Word count, reading time estimates, content type analysis, and performance metrics for 
              each summarization.
            </p>
          </div>

          <div className="border border-gray-800 rounded-lg p-4 bg-gray-900/50">
            <h3 className="text-white font-semibold mb-2">
              Export & History
            </h3>
            <p className="text-gray-400 text-sm">
              Download summaries as text files, copy to clipboard, and track recent summarization history 
              for easy reference.
            </p>
          </div>
        </div>
      </Section>

      {/* System Architecture */}
      <Section title="System Architecture">
        <Diagram
          src="/diagrams/yt-web-summarizer-architecture.png"
          alt="YT Web Summarizer System Architecture"
          title="Complete System Flow"
          description="End-to-end pipeline from YouTube/Web input to AI-powered summarization with caching and export"
        />
      </Section>

      {/* Summary Styles */}
      <Section title="Summary Styles">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">📍 Bullet Points</h3>
            <p className="text-gray-400 text-sm mb-2">Quick, scannable list of key points</p>
            <p className="text-xs text-gray-500">Best for: Fast reference, meeting notes</p>
          </div>
          
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">📝 Paragraph</h3>
            <p className="text-gray-400 text-sm mb-2">Flowing narrative summary</p>
            <p className="text-xs text-gray-500">Best for: Reports, blog posts</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">💡 Key Insights</h3>
            <p className="text-gray-400 text-sm mb-2">Most important takeaways</p>
            <p className="text-xs text-gray-500">Best for: Executive reviews</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">❓ Q&A Format</h3>
            <p className="text-gray-400 text-sm mb-2">Question and answer pairs</p>
            <p className="text-xs text-gray-500">Best for: Training, FAQs</p>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-4">
            <h3 className="text-white font-semibold mb-2">📊 Executive Summary</h3>
            <p className="text-gray-400 text-sm mb-2">Business-focused overview</p>
            <p className="text-xs text-gray-500">Best for: Decision makers</p>
          </div>
        </div>
      </Section>

      {/* Whisper Model Selection */}
      <Section title="Whisper Model Options">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-left border-b border-gray-800">
              <tr>
                <th className="pb-3 pr-4 text-blue-400">Model</th>
                <th className="pb-3 pr-4 text-blue-400">Speed</th>
                <th className="pb-3 pr-4 text-blue-400">Accuracy</th>
                <th className="pb-3 text-blue-400">Use Case</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              <tr className="border-b border-gray-800/50">
                <td className="py-3 pr-4">Tiny</td>
                <td className="py-3 pr-4">Very Fast</td>
                <td className="py-3 pr-4">Low</td>
                <td className="py-3">Short videos, quick tests</td>
              </tr>
              <tr className="border-b border-gray-800/50 bg-gray-900/30">
                <td className="py-3 pr-4">Base</td>
                <td className="py-3 pr-4">Fast</td>
                <td className="py-3 pr-4">Medium</td>
                <td className="py-3"><span className="text-green-400">Recommended</span> - Best balance</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 pr-4">Small</td>
                <td className="py-3 pr-4">Moderate</td>
                <td className="py-3 pr-4">High</td>
                <td className="py-3">Longer content, better accuracy</td>
              </tr>
              <tr className="border-b border-gray-800/50">
                <td className="py-3 pr-4">Medium</td>
                <td className="py-3 pr-4">Slow</td>
                <td className="py-3 pr-4">Very High</td>
                <td className="py-3">Professional transcription</td>
              </tr>
              <tr>
                <td className="py-3 pr-4">Large</td>
                <td className="py-3 pr-4">Very Slow</td>
                <td className="py-3 pr-4">Very High</td>
                <td className="py-3">GPU required, highest quality</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>

      {/* Tech Stack */}
      <Section title="Tech Stack">
        <div className="space-y-4">
          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              AI & LLM
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Groq Cloud" />
              <SkillBadge label="Llama-3.3-70b" />
              <SkillBadge label="OpenAI Whisper" />
              <SkillBadge label="LangChain" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Video & Web Processing
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="yt-dlp" />
              <SkillBadge label="BeautifulSoup4" />
              <SkillBadge label="FFmpeg" />
              <SkillBadge label="Librosa" />
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-blue-400 mb-2 uppercase tracking-wider">
              Framework & Deployment
            </h3>
            <div className="flex flex-wrap gap-2">
              <SkillBadge label="Streamlit 1.40" />
              <SkillBadge label="Python 3.10" />
              <SkillBadge label="Hugging Face Spaces" />
            </div>
          </div>
        </div>
      </Section>

      {/* Architecture */}
      <Section title="System Architecture">
        <div className="space-y-4">
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Modular Design</h3>
            <p className="text-gray-400 text-sm mb-3">
              Built with production-ready Python featuring 7 focused modules: services, utils, config, 
              logging, exceptions, with full type hints and comprehensive error handling.
            </p>
            <div className="grid md:grid-cols-2 gap-3 text-sm font-mono text-gray-300">
              <div>📦 services/ - Core business logic</div>
              <div>🛠️ utils/ - Helper functions</div>
              <div>⚙️ config/ - Environment settings</div>
              <div>📝 logging/ - Structured logging</div>
              <div>❌ exceptions/ - Error hierarchy</div>
              <div>🧪 tests/ - 30+ unit tests (80%+ coverage)</div>
            </div>
          </div>

          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <h3 className="text-white font-semibold mb-3">Processing Pipeline</h3>
            <div className="space-y-2 font-mono text-sm text-gray-300">
              <div>User Input (YouTube URL / Website URL)</div>
              <div className="ml-4">↓</div>
              <div className="ml-4">[YouTube] Audio Extraction → Whisper Transcription</div>
              <div className="ml-4">[Website] HTML Fetch → BeautifulSoup Extraction</div>
              <div className="ml-4">↓</div>
              <div className="ml-4">Text Preprocessing & Chunking</div>
              <div className="ml-4">↓</div>
              <div className="ml-4">LangChain + Groq (Llama-3.3-70b) Summarization</div>
              <div className="ml-4">↓</div>
              <div className="ml-4">Cache Storage + Statistics Generation</div>
              <div className="ml-4">↓</div>
              <div className="ml-4">Display Summary + Export Options</div>
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
              <span className="text-white font-medium">Smart Caching</span>: Intelligent cache system 
              reduces API costs by ~70% by storing recent summaries for instant retrieval
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">GPU Support</span>: Automatic GPU detection 
              for faster video processing with Whisper models
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Rate Limiting</span>: Built-in protection 
              against excessive API usage with configurable limits
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Comprehensive Testing</span>: 30+ unit tests 
              with 80%+ code coverage for reliability
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Structured Logging</span>: Color-coded logging 
              with detailed error tracking for debugging
            </span>
          </div>
          <div className="flex gap-3 text-gray-300">
            <span className="text-blue-400 mt-1">▹</span>
            <span>
              <span className="text-white font-medium">Type Safety</span>: Full type hints throughout 
              codebase for better IDE support and error prevention
            </span>
          </div>
        </div>
      </Section>

      {/* Pro Tips */}
      <Section title="Pro Tips">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">Use base Whisper model for optimal speed/accuracy</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">Summaries of 200-300 words are typically most focused</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">Cache automatically saves recent summaries for instant access</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">GPU acceleration activates automatically when available</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">Works with any public YouTube video or web article</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-green-400">✅</span>
            <span className="text-gray-300 text-sm">API key stored only for session, never saved permanently</span>
          </div>
        </div>
      </Section>

      {/* Future Improvements */}
      <Section title="Future Improvements">
        <div className="grid md:grid-cols-2 gap-3">
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Hierarchical summaries (bullet → paragraph → detailed)</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Semantic redundancy detection across chunks</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">User-controlled summary depth and format</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Batch processing for multiple URLs</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">Multi-language support for transcription</span>
          </div>
          <div className="flex gap-2 items-start">
            <span className="text-gray-400 text-sm">PDF and document summarization support</span>
          </div>
        </div>
      </Section>

    </ProjectLayout>
  );
}
