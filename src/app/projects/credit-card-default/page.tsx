import ProjectLayout from "@/components/ProjectLayout";
import Section from "@/components/Section";
import Diagram from "@/components/Diagram";

export default function CreditCardDefault() {
  return (
    <ProjectLayout
      title="Credit Card Default Prediction"
      description="A risk-focused machine learning system designed to identify high-risk customers in an imbalanced classification setting."
      badges={[
        "Imbalanced Learning",
        "XGBoost",
        "Random Forest",
        "SMOTE",
        "Risk Modeling",
      ]}
    >
      <Section title="Problem Statement">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Credit card default prediction is a highly imbalanced classification
          problem where false negatives carry significant financial risk.
          The goal was to prioritize recall while maintaining acceptable precision.
        </p>
      </Section>

      <Diagram
        src="/diagrams/credit-card-default-architecture.png"
        alt="Credit risk modeling pipeline"
        title="Modeling Pipeline"
        description="Customer data flows through preprocessing, feature engineering, imbalance handling, model training, evaluation, and threshold optimization to produce risk-aware predictions."
      />

      <Section title="Data & Feature Engineering">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>25K+ customer records with demographic and payment history</li>
          <li>Behavior-based and trend-driven feature construction</li>
          <li>Handled class imbalance using SMOTE</li>
        </ul>
      </Section>

      <Section title="Modeling & Evaluation">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Baseline models: Logistic Regression, Random Forest, XGBoost</li>
          <li>Hyperparameter tuning via GridSearchCV</li>
          <li>Model selection based on recall-precision tradeoffs</li>
        </ul>
      </Section>

      <Section title="Threshold Optimization">
        <p className="text-gray-400 text-sm leading-relaxed max-w-2xl">
          Classification thresholds were tuned from the default 0.5 to 0.30
          using F2-score optimization, enabling better identification of
          high-risk customers.
        </p>
      </Section>

      <Section title="Key Learnings">
        <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
          <li>Metric selection directly impacts business outcomes</li>
          <li>Threshold tuning is essential in risk-sensitive domains</li>
          <li>Interpretability improves stakeholder trust</li>
        </ul>
      </Section>
      <Section title="Future Improvements">
  <ul className="list-disc list-inside space-y-2 text-gray-400 text-sm">
    <li>Integrate SHAP-based explanations for individual predictions</li>
    <li>Explore cost-sensitive learning instead of resampling</li>
    <li>Deploy real-time risk scoring via REST APIs</li>
    <li>Monitor population drift and retrain models periodically</li>
  </ul>
</Section>

    </ProjectLayout>
  );
}
