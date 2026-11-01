import Link from "next/link";
import { closingCtaData } from "@/data/homepage";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function ClosingCtaSection() {
  return (
    <section className="relative w-full bg-brand-navySecondary text-white py-20 lg:py-28 overflow-hidden">
      {/* Background dot matrix on dark */}
      <div className="absolute top-10 right-20 w-80 h-80 bg-dot-matrix-dark opacity-30 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

          {/* Left Column: Headline, Copy, Action Buttons */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-4">
              <span className="w-4 h-[2px] bg-brand-orange" />
              <span>{closingCtaData.eyebrow}</span>
            </div>

            <h2 className="text-[38px] sm:text-[48px] lg:text-[54px] font-extrabold text-white tracking-tight leading-[1.12]">
              {closingCtaData.titlePart1}
              <br />
              Mari{" "}
              <span className="text-brand-orange font-editorial-italic font-normal">
                {closingCtaData.titleAccent}
              </span>
            </h2>

            <p className="mt-5 text-[15px] sm:text-[16px] text-slate-300 max-w-[520px] leading-relaxed">
              {closingCtaData.description}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-6 mt-8">
              <Link
                href="#kontak"
                className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full transition-all shadow-md hover:shadow-lg"
              >
                <span>{closingCtaData.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <Link
                href="#portofolio"
                className="inline-flex items-center gap-2 text-white hover:text-brand-orange text-[14px] font-medium transition-colors group"
              >
                <span>{closingCtaData.secondaryCta}</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Right Column: Giant Isometric Architectural Arrow Graphic */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            <div className="relative w-full max-w-[380px] aspect-square flex items-center justify-center">
              <svg
                viewBox="0 0 360 360"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
              >
                {/* Thin background wireframe grid lines */}
                <line x1="40" y1="40" x2="320" y2="40" stroke="#1E2C4A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="320" x2="320" y2="320" stroke="#1E2C4A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="40" y1="40" x2="40" y2="320" stroke="#1E2C4A" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="320" y1="40" x2="320" y2="320" stroke="#1E2C4A" strokeWidth="1" strokeDasharray="4 4" />

                {/* Layered Architectural Arrow Stem */}
                <path
                  d="M90 270 L210 150 L250 190 L130 310 Z"
                  fill="#15223E"
                  stroke="#23355C"
                  strokeWidth="2"
                />

                {/* Orange Dynamic Facet */}
                <path
                  d="M130 310 L250 190 L280 220 L160 340 Z"
                  fill="#F26B45"
                />

                {/* Arrow Head Main Dark Navy Triangle */}
                <path
                  d="M160 60 L320 60 L320 220 L260 220 L260 120 L160 220 Z"
                  fill="#182747"
                  stroke="#2C416E"
                  strokeWidth="2.5"
                />

                {/* Arrow Outer Outline Accent */}
                <path
                  d="M140 40 L340 40 L340 240"
                  stroke="#F26B45"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Tiny geometric dot accents */}
                <circle cx="340" cy="40" r="3.5" fill="#F26B45" />
                <circle cx="140" cy="40" r="2.5" fill="#FFFFFF" />
                <circle cx="340" cy="240" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
