import { Card, CardHeader } from "@/components/ui/card";
import { 
  BarChart3, 
  Check, 
  Home, 
  Box, 
  Target, 
  Zap, 
  Database, 
  CheckCircle2, 
  Calendar 
} from "lucide-react";

function numberToWords(num: number): string {
  if (num === 0) return "Zero Dollars";
  const a = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  const convert = (n: number): string => {
    if (n < 20) return a[n];
    if (n < 100) return b[Math.floor(n / 10)] + (n % 10 !== 0 ? " " + a[n % 10] : "");
    if (n < 1000) return a[Math.floor(n / 100)] + " Hundred" + (n % 100 !== 0 ? " " + convert(n % 100) : "");
    if (n < 1000000) return convert(Math.floor(n / 1000)) + " Thousand" + (n % 1000 !== 0 ? " " + convert(n % 1000) : "");
    if (n < 1000000000) return convert(Math.floor(n / 1000000)) + " Million" + (n % 1000000 !== 0 ? " " + convert(n % 1000000) : "");
    return "";
  };
  
  return convert(num) + " Dollars";
}

export function PredictionResult({ prediction , predictionTime}: { prediction: number | null, predictionTime: number | null}) {
  const isCompleted = prediction !== null;
  const MODEL_NAME = "Random Forest";
  const R2_SCORE = 0.8169;

  return (
    <Card className="w-full border-white/10 bg-[#0A1017]/40 backdrop-blur-xl flex flex-col justify-between overflow-hidden shadow-2xl rounded-2xl relative">
      <CardHeader className="border-b border-white/10 pb-4 pt-6 px-4 sm:px-6 bg-transparent">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <BarChart3 className="size-5 text-[#00E599]" />
              <h2 className="text-xl font-semibold text-white tracking-tight">Prediction Result</h2>
            </div>
            <p className="text-sm text-slate-400">Estimated house price</p>
          </div>
          {isCompleted && (
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-[#00E599]/10 border border-[#00E599]/20 rounded-full text-[#00E599] text-xs font-medium">
              <Check className="size-3.5" />
              Completed
            </div>
          )}
        </div>
      </CardHeader>

      <div className="flex flex-col flex-1 p-4 sm:p-6 relative min-h-[400px] md:min-h-[500px]">
        {/* Background glow effect */}
        {isCompleted && (
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[80%] h-[30%] bg-[#00E599]/5 blur-[80px] rounded-[100%] pointer-events-none" />
        )}

        {isCompleted ? (
          <div className="flex flex-col items-center justify-center flex-1 z-10 animate-in fade-in zoom-in duration-500">
            {/* Glowing Icon */}
            <div className="relative mb-6">
              <div className="absolute inset-0 bg-[#00E599]/20 rounded-full blur-xl animate-pulse" />
              <div className="w-20 h-20 rounded-full border border-[#00E599]/40 bg-[#0A1017] flex items-center justify-center relative z-10 shadow-[0_0_30px_rgba(0,229,153,0.2)]">
                <Home className="size-8 text-[#00E599]" />
              </div>
            </div>

            <p className="text-slate-400 font-medium mb-2 tracking-wide text-sm">Estimated Price</p>
            <h1 className="text-4xl md:text-6xl font-bold text-[#00E599] tracking-tighter drop-shadow-[0_0_20px_rgba(0,229,153,0.4)]">
              ${prediction.toLocaleString()}
            </h1>
            <p className="text-slate-500 text-sm mt-3 font-medium uppercase tracking-widest text-center max-w-[80%]">
              {numberToWords(prediction)}
            </p>

            {/* Stat Boxes */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full mt-10">
              <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#111827] border border-[#1F2937]">
                <Box className="size-6 text-[#38BDF8] mb-2" />
                <p className="text-[11px] text-slate-400 font-medium mb-1">Model</p>
                <p className="text-sm text-white font-semibold text-center leading-tight"> {MODEL_NAME}</p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#111827] border border-[#1F2937]">
                <Target className="size-6 text-[#00E599] mb-2" />
                <p className="text-[11px] text-slate-400 font-medium mb-1">R² Score</p>
                <p className="text-sm text-white font-semibold mt-1"> {(R2_SCORE * 100).toFixed(2)}%</p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#111827] border border-[#1F2937]">
                <Zap className="size-6 text-[#00E599] mb-2" />
                <p className="text-[11px] text-slate-400 font-medium mb-1">Prediction Time</p>
                <p className="text-sm text-white font-semibold mt-1">{predictionTime ?? "--"} ms</p>
              </div>
              <div className="flex flex-col items-center justify-center py-4 px-2 rounded-xl bg-[#111827] border border-[#1F2937]">
                <Database className="size-6 text-[#38BDF8] mb-2" />
                <p className="text-[11px] text-slate-400 font-medium mb-1">Dataset</p>
                <p className="text-sm text-white font-semibold text-center leading-tight">California<br/>Housing</p>
              </div>
            </div>

            {/* Success Banner */}
            <div className="w-full mt-6 bg-[#00E599]/10 border border-[#00E599]/20 rounded-xl p-4 flex items-start gap-3">
              <CheckCircle2 className="size-5 text-[#00E599] shrink-0 mt-0.5" />
              <div>
                <p className="text-[#00E599] font-medium text-sm">Prediction completed successfully!</p>
                <p className="text-slate-400 text-xs mt-1">The model has analyzed the provided features and predicted the house price.</p>
              </div>
            </div>

            {/* Footer */}
            <div className="w-full flex items-center justify-between mt-6 pt-4 border-t border-white/5 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-1.5">
                <Calendar className="size-3.5" />
                May 21, 2025 • 11:42 AM
              </div>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center flex-1 h-full min-h-[400px]">
            <div className="w-20 h-20 rounded-full border border-[#1F2937] bg-[#111827] flex items-center justify-center mb-6">
              <Home className="size-8 text-slate-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-300">Waiting for Prediction</h2>
            <p className="mt-2 text-slate-500 text-center max-w-[250px]">
              Fill out the form and click Predict House Price to see results.
            </p>
          </div>
        )}
      </div>
    </Card>
  );
}