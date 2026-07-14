"use client";

import { useState } from "react";
import { PredictionPage } from "@/features/prediction/components/prediction-page";
import { Hero } from "./hero";
import Navbar from "./navbar";
import Footer from "./footer";

export function LandingPage() {
  const [prediction, setPrediction] = useState<number | null>(null);

  return (
    <>
      <Navbar />
      <Hero prediction={prediction} />
      <PredictionPage prediction={prediction} onPrediction={setPrediction} />
      <Footer />
    </>
  );
}