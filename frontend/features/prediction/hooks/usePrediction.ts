import { useMutation } from "@tanstack/react-query";

import { predictHousePrice } from "../api/prediction-api";
import type {
  PredictionRequest,
  PredictionResponse,
} from "../types/prediction.types";

export function usePrediction() {
  return useMutation<
    PredictionResponse, // Success data
    Error,              // Error type
    PredictionRequest   // Variables
  >({
    mutationFn: predictHousePrice,
  });
}