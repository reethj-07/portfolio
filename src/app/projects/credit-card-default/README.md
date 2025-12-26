flowchart TD
    A[Raw Customer Data] --> B[Data Cleaning & EDA]
    B --> C[Feature Engineering]
    C --> D[Class Imbalance Handling (SMOTE)]

    D --> E[Model Training]
    E --> F[Logistic Regression]
    E --> G[Random Forest]
    E --> H[XGBoost]

    G --> I[Hyperparameter Tuning]
    I --> J[F2-score Optimization]

    J --> K[Threshold Tuning (0.30)]
    K --> L[Risk-Aware Predictions]
