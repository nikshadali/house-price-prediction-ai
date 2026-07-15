"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";



import {
  predictionSchema,
  PredictionFormData,
} from "../schema/prediction.schema";
import { usePrediction } from "../hooks/usePrediction";
import { SectionTitle } from "@/components/ui/shared/section-title";
import { AppFormField } from "@/components/ui/shared/form-field";



interface PredictionFormProps {
  onPrediction: (price: number) => void;
}

export function PredictionForm({
  onPrediction,
}: PredictionFormProps) {
  const predictionMutation = usePrediction();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PredictionFormData>({
    resolver: zodResolver(predictionSchema),

    defaultValues: {
      longitude: -122.23,
      latitude: 37.88,
      housing_median_age: 41,
      total_rooms: 880,
      total_bedrooms: 129,
      population: 322,
      households: 126,
      median_income: 8.3252,
      ocean_proximity: "NEAR BAY",
    },
  });

 const onSubmit = (values: PredictionFormData) => {
  predictionMutation.mutate(values, {
    onSuccess: (response) => {
      onPrediction(response.predicted_price);
    },

    onError: (error) => {
      console.error(error);
      alert("Prediction failed.");
    },
  });
};

  return (
    <Card className="border-white/10 bg-slate-900 p-8">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-8"
      >
        {/* Location */}

        <div>
          <SectionTitle title="📍 Location" />

          <div className="grid gap-4 md:grid-cols-2">
            <AppFormField
              label="Longitude"
              placeholder="-122.23"
              type="number"
              registration={register("longitude")}
              error={errors.longitude?.message}
            />

            <AppFormField
              label="Latitude"
              placeholder="37.88"
              type="number"
              registration={register("latitude")}
              error={errors.latitude?.message}
            />
          </div>
        </div>

        {/* Property */}

        <div>
          <SectionTitle title="🏠 Property Details" />

          <div className="grid gap-4 md:grid-cols-2">
            <AppFormField
              label="House Age"
              placeholder="41"
              type="number"
              registration={register("housing_median_age")}
              error={errors.housing_median_age?.message}
            />

            <AppFormField
              label="Total Rooms"
              placeholder="880"
              type="number"
              registration={register("total_rooms")}
              error={errors.total_rooms?.message}
            />

            <AppFormField
              label="Bedrooms"
              placeholder="129"
              type="number"
              registration={register("total_bedrooms")}
              error={errors.total_bedrooms?.message}
            />
          </div>
        </div>

        {/* Community */}

        <div>
          <SectionTitle title="👨‍👩‍👧 Community" />

          <div className="grid gap-4 md:grid-cols-2">
            <AppFormField
              label="Population"
              placeholder="322"
              type="number"
              registration={register("population")}
              error={errors.population?.message}
            />

            <AppFormField
              label="Households"
              placeholder="126"
              type="number"
              registration={register("households")}
              error={errors.households?.message}
            />
          </div>
        </div>

        {/* Financial */}

        <div>
          <SectionTitle title="💰 Financial" />

          <AppFormField
            label="Median Income"
            placeholder="8.3252"
            type="number"
            registration={register("median_income")}
            error={errors.median_income?.message}
          />
        </div>

        {/* Environment */}

        <div>
          <SectionTitle title="🌊 Environment" />

          <select
            {...register("ocean_proximity")}
            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
          >
            <option value="<1H OCEAN">&lt;1H OCEAN</option>
            <option value="INLAND">INLAND</option>
            <option value="NEAR OCEAN">NEAR OCEAN</option>
            <option value="NEAR BAY">NEAR BAY</option>
            <option value="ISLAND">ISLAND</option>
          </select>
        </div>

        <Button
          type="submit"
          className="w-full"
          size="lg"
          disabled={predictionMutation.isPending}
        >
          {predictionMutation.isPending
            ? "Predicting..."
            : "✨ Predict House Price"}
        </Button>
      </form>
    </Card>
  );
}