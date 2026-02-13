flowchart TD
    A[YouTube / Web URL] --> B[Content Loader]
    B --> C[Audio Extraction]

    C --> D[Whisper Transcription]
    D --> E[Text Chunking]

    E --> F[LangChain Summarization Pipeline]
    F --> G[LLM (Groq / LLaMA-3)]

    G --> H[Concise Summary Output]
