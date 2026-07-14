import { useMutation } from "@tanstack/react-query";

import { predictHousePrice } from "../api/prediction-api";

export function usePrediction() {
  return useMutation({
    mutationFn: predictHousePrice,
  });
}