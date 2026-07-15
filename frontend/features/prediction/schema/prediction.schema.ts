import { z } from "zod";

export const predictionSchema = z.object({
  longitude: z.number(),
  latitude: z.number(),
  housing_median_age: z.number(),
  total_rooms: z.number(),
  total_bedrooms: z.number(),
  population: z.number(),
  households: z.number(),
  median_income: z.number(),
  ocean_proximity: z.string(),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;