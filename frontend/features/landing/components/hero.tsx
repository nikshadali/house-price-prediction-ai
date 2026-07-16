import { Sparkles, TrendingUp, Target, Zap, LineChart, Home, Activity } from "lucide-react";
import Image from "next/image";

export function Hero({ prediction }: { prediction?: number | null }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-[#00E599]/10 border border-[#00E599]/20 px-3 py-1 mb-6">
            <Sparkles className="size-3.5 text-[#00E599]" />
            <span className="text-xs font-semibold text-[#00E599] tracking-wider uppercase">AI Powered</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-2">
            House Price <br />
            <span className="text-[#00E599]">Prediction AI</span>
          </h1>

          <p className="mt-4 max-w-lg text-lg text-slate-400 leading-relaxed">
            Estimate California house prices using Machine Learning. <br />
            Get accurate predictions in seconds.
          </p>

          {/* Stats inline */}
          <div className="mt-10 flex flex-wrap gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-[#111827] border border-[#1F2937] p-3 pr-6">
              <div className="rounded-lg bg-[#00E599]/10 p-2">
                <TrendingUp className="size-5 text-[#00E599]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Trained Model</p>
                <p className="text-sm font-semibold text-white">Linear Regression</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#111827] border border-[#1F2937] p-3 pr-6">
              <div className="rounded-lg bg-[#00E599]/10 p-2">
                <Target className="size-5 text-[#00E599]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Accuracy (R²)</p>
                <p className="text-sm font-semibold text-white">62.54%</p>
              </div>
            </div>

            <div className="flex items-center gap-3 rounded-xl bg-[#111827] border border-[#1F2937] p-3 pr-6">
              <div className="rounded-lg bg-[#EAB308]/10 p-2">
                <Zap className="size-5 text-[#EAB308]" />
              </div>
              <div>
                <p className="text-[11px] text-slate-400 font-medium uppercase tracking-wider">Fast Prediction</p>
                <p className="text-sm font-semibold text-white">~20ms</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Illustration (Image) */}
        <div className="relative w-full h-[400px] lg:h-[500px] flex items-center justify-center lg:justify-end mt-12 lg:mt-0">
          {/* Main glow */}
          <div className="absolute top-1/2 left-1/2 lg:left-auto lg:right-10 -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 w-[300px] h-[300px] bg-[#00E599]/20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative w-full max-w-[500px] aspect-square">
            <Image
              src="/house.png"
              alt="House Price Prediction 3D"
              fill
              className="object-contain drop-shadow-[0_0_30px_rgba(0,229,153,0.15)] [mask-image:radial-gradient(circle_at_center,black_60%,transparent_100%)]"
              priority
            />

            {/* Price overlay on the 3D screen */}
            <div className="absolute top-[26%] right-[16%] md:right-[16%] lg:right-[9%] z-20 text-[#00E599] font-mono font-bold text-2xl md:text-3xl lg:text-4xl drop-shadow-[0_0_20px_rgba(0,229,153,1)] transform -skew-y-[2deg] rotate-[12deg]">
              {prediction ? "$" + Math.round(prediction).toLocaleString() : ""}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}