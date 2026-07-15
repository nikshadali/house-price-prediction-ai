import { useState } from "react";
import { PredictionForm } from "./prediction-form";
import { PredictionResult } from "./prediction-result";

export function PredictionPage() {
    const [prediction, setPrediction] = useState<number | null>(null);
  return (
    <section
      id="predict"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <PredictionForm 
         onPrediction={setPrediction}
        />

        <PredictionResult 
         prediction={prediction}
        />
      </div>
    </section>
  );
}