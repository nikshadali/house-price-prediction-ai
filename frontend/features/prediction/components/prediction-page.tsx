"use client";

import { useState } from "react";
import { PredictionForm } from "./prediction-form";
import { PredictionResult } from "./prediction-result";

export function PredictionPage({
  prediction,
  onPrediction,
}: {
  prediction: number | null;
  onPrediction: (val: number | null) => void;
}) {
  return (
    <section
      id="predict"
      className="mx-auto max-w-7xl px-4 md:px-6 py-16 md:py-24"
    >
      <div className="grid gap-8 lg:grid-cols-2">
        <PredictionForm
          onPrediction={onPrediction}
        />

        <PredictionResult
          prediction={prediction}
        />
      </div>
    </section>
  );
}