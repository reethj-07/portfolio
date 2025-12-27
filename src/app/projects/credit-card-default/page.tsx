import Diagram from "@/components/Diagram";
import Section from "@/components/Section";

export default function CreditCardDefault() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-12">
      <div className="max-w-4xl mx-auto space-y-12">

        <h1 className="text-3xl font-bold">
          Credit Card Default Prediction
        </h1>

        <p className="text-gray-400 max-w-2xl">
          A risk-focused ML system prioritizing recall to reduce
          false negatives in default prediction.
        </p>

        <Diagram
          src="/diagrams/credit-card-default-architecture.png"
          alt="Credit card default prediction pipeline"
        />

        <Section title="Data & Features">
          <ul className="list-disc list-inside space-y-1">
            <li>25K+ customer records</li>
            <li>Behavioral & payment history features</li>
            <li>Class imbalance handled via SMOTE</li>
          </ul>
        </Section>

        <Section title="Modeling & Evaluation">
          Models were evaluated using recall, precision,
          and F2-score with explicit threshold tuning.
        </Section>

        <Section title="Key Learnings">
          <ul className="list-disc list-inside space-y-1">
            <li>Metric choice impacts business risk</li>
            <li>Threshold tuning is essential</li>
            <li>Interpretability builds trust</li>
          </ul>
        </Section>

      </div>
    </main>
  );
}
