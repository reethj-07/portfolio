flowchart TD
    A[User Input] --> B[Face Module (ResNet50)]
    A --> C[Voice Module (Wav2Vec2)]
    A --> D[Text Module (DistilRoBERTa)]

    B --> E[Emotion Fusion]
    C --> E
    D --> E

    E --> F[Emotion-to-Genre Mapping]
    F --> G[Spotify API]
    G --> H[Personalized Music Output]
