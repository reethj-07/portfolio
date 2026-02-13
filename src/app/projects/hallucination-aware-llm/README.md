flowchart TD
    A[User Query] --> B[Embedding Model]
    B --> C[FAISS Vector Store]
    C --> D{Relevant Context Found?}

    D -- Yes --> E[RAG Prompt Builder]
    E --> F[Fine-tuned Phi-3 Mini (QLoRA)]
    F --> G[Grounded Response]

    D -- No --> H[Refusal Logic]
    H --> I[Explicit Abstention Response]
