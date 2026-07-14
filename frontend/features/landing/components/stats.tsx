

import { Card } from "@/components/ui/card";

const stats = [
  {
    title: "Dataset",
    value: "20,640",
  },
  {
    title: "Accuracy",
    value: "62.54%",
  },
  {
    title: "Model",
    value: "Linear Regression",
  },
  {
    title: "Backend",
    value: "FastAPI",
  },
];

export function Stats() {
  return (
    <section className="mx-auto grid max-w-7xl gap-6 px-6 py-12 md:grid-cols-4">
      {stats.map((stat) => (
        <Card
          key={stat.title}
          className="border-white/10 bg-slate-900 p-6"
        >
          <p className="text-sm text-slate-400">
            {stat.title}
          </p>

          <h3 className="mt-3 text-2xl font-bold">
            {stat.value}
          </h3>
        </Card>
      ))}
    </section>
  );
}
