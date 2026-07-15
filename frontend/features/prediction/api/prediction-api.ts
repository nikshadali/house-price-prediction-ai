import { api } from "@/lib/api";
import type {
  PredictionRequest,
  PredictionResponse,
} from "../types/prediction.types";

export async function predictHousePrice(
  data: PredictionRequest
): Promise<PredictionResponse> {
  const response = await api.post<PredictionResponse>(
    "/predict",
    data
  );

  return response.data;
}