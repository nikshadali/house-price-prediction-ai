import { z } from "zod";

export const predictionSchema = z.object({
  longitude: z.coerce.number(),
  latitude: z.coerce.number(),
  housing_median_age: z.coerce.number(),
  total_rooms: z.coerce.number(),
  total_bedrooms: z.coerce.number(),
  population: z.coerce.number(),
  households: z.coerce.number(),
  median_income: z.coerce.number(),
  ocean_proximity: z.string(),
});

export type PredictionFormData = z.infer<typeof predictionSchema>;