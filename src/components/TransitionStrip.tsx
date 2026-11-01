import { transitionStripData } from "@/data/homepage";
import { ArrowUpRight } from "lucide-react";

export function TransitionStrip() {
  return (
    <div className="w-full bg-[#0D182E] border-y border-[#1E2C4A]">
      <div className="max-w-container mx-auto px-6 lg:px-12 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] font-bold tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-2">
          <span>{transitionStripData.leftText}</span>
        </div>
        <div className="flex items-center gap-1.5 text-slate-400 hover:text-brand-orange transition-colors">
          <span>{transitionStripData.rightText}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-brand-orange" />
        </div>
      </div>
    </div>
  );
}
