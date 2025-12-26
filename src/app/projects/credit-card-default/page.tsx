export default function CreditCardDefault() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-10">
      <div className="max-w-3xl mx-auto space-y-10">

        <h1 className="text-3xl font-bold">
          Credit Card Default Prediction
        </h1>

        <p className="text-gray-400 text-sm">
          Risk modeling system to predict credit card default using
          supervised machine learning with recall-focused optimization.
        </p>

        <Section title="Problem Statement">
          Credit card default prediction is a highly imbalanced classification
          problem where false negatives carry high business risk.  
          The objective was to accurately identify high-risk customers while
          prioritizing recall over overall accuracy.
        </Section>

        <Section title="Data & Feature Engineering">
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>25K+ customer records with demographic and payment behavior data</li>
            <li>Engineered risk-focused features from payment history</li>
            <li>Handled severe class imbalance using SMOTE</li>
          </ul>
        </Section>

        <Section title="Modeling Approach">
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Baseline models: Logistic Regression, Random Forest, XGBoost</li>
            <li>Hyperparameter tuning using GridSearchCV</li>
            <li>Optimized for F2-score to emphasize recall</li>
          </ul>
        </Section>

        <Section title="Decision Optimization">
          Instead of relying on the default 0.5 threshold, the classification
          threshold was tuned to 0.30 to better capture high-risk customers,
          enabling more risk-sensitive decision-making.
        </Section>

        <Section title="Key Outcomes">
          <ul className="list-disc list-inside text-gray-400 space-y-1">
            <li>Improved recall for default cases without excessive false positives</li>
            <li>Identified payment history features as dominant default drivers</li>
            <li>Delivered a model aligned with real-world credit risk objectives</li>
          </ul>
        </Section>

        <Section title="Links">
          <a
            href="https://github.com/reethj-07/credit-card-default-prediction"
            target="_blank"
            className="text-blue-400 hover:underline text-sm"
          >
            GitHub Repository →
          </a>
        </Section>

      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <div className="text-gray-400 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}
