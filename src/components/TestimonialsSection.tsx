"use client";

import { useState } from "react";
import { testimonialsData } from "@/data/homepage";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";

export function TestimonialsSection() {
  const [currentPage, setCurrentPage] = useState("01 / 03");

  return (
    <section id="testimoni" className="py-20 lg:py-28 bg-white border-t border-brand-borderLight overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Heading & Description */}
          <div className="lg:col-span-5 flex flex-col justify-start">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand-mutedText mb-3">
              <span className="w-4 h-[2px] bg-brand-orange" />
              <span>{testimonialsData.eyebrow}</span>
            </div>

            <h2 className="text-[36px] sm:text-[42px] lg:text-[46px] font-extrabold text-brand-navy tracking-tight leading-[1.14]">
              {testimonialsData.titleLine1}
              <br />
              {testimonialsData.titleLine2}
              <br />
              {testimonialsData.titleLine3}
              <span className="text-brand-orange">.</span>
            </h2>

            <p className="mt-5 text-[15px] text-brand-mutedText max-w-[420px] leading-relaxed">
              {testimonialsData.description}
            </p>

            {/* Orange square accent and decorative line */}
            <div className="flex items-center gap-3 mt-8">
              <span className="w-2.5 h-2.5 rounded-[2px] bg-brand-orange" />
              <span className="w-16 h-[2px] bg-slate-200" />
            </div>
          </div>

          {/* Right Column: Featured + Secondary Cards */}
          <div className="lg:col-span-7 flex flex-col">

            {/* Main Featured Testimonial Card (Dark Navy) */}
            <div className="bg-brand-navy text-white rounded-[22px] p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              {/* Subtle background diagonal hatch lines */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-white/5 to-transparent pointer-events-none rounded-bl-full" />

              {/* Large Orange Quote Mark */}
              <div className="text-brand-orange font-serif text-[56px] leading-none mb-3 select-none">
                “
              </div>

              {/* Testimonial Quote */}
              <p className="text-[16px] sm:text-[17.5px] leading-relaxed text-slate-100 font-medium">
                {testimonialsData.featured.quote}
              </p>

              {/* Divider */}
              <div className="h-[1px] w-full bg-slate-700/60 my-6" />

              {/* Customer Info Row */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center text-[12.5px] font-bold text-white shrink-0">
                    {testimonialsData.featured.initials}
                  </div>
                  <div>
                    <div className="text-[14.5px] font-bold text-white">
                      {testimonialsData.featured.name}
                    </div>
                    <div className="text-[12px] text-slate-400">
                      {testimonialsData.featured.role}{" "}
                      <span className="text-slate-600 hidden sm:inline">|</span>{" "}
                      <span className="text-slate-400 hidden sm:inline">
                        {testimonialsData.featured.sector}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-9 h-9 rounded-full border border-brand-orange/60 flex items-center justify-center text-brand-orange">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* Secondary Testimonial Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-5">
              {testimonialsData.secondary.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-brand-borderLight rounded-[18px] p-6 shadow-sm flex flex-col justify-between"
                >
                  <div>
                    {/* Top tag & arrow */}
                    <div className="flex items-center justify-between text-[10.5px] font-bold text-brand-orange">
                      <span>{item.tag}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </div>

                    <div className="text-brand-orange font-serif text-[28px] leading-none mt-2">
                      “
                    </div>

                    <p className="text-[13px] text-brand-navy leading-relaxed mt-1 font-normal">
                      {item.quote}
                    </p>
                  </div>

                  {/* Customer author */}
                  <div className="flex items-center gap-3 mt-6 pt-3 border-t border-slate-100">
                    <div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-[11px] font-bold text-brand-navy shrink-0">
                      {item.initials}
                    </div>
                    <div>
                      <div className="text-[13px] font-bold text-brand-navy">
                        {item.name}
                      </div>
                      <div className="text-[11px] text-brand-mutedText">
                        {item.role}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center justify-end gap-3 mt-6">
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-brand-borderLight flex items-center justify-center text-brand-navy hover:border-brand-orange hover:text-brand-orange transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                className="w-8 h-8 rounded-full border border-brand-borderLight flex items-center justify-center text-brand-navy hover:border-brand-orange hover:text-brand-orange transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="text-[12px] font-medium text-brand-mutedText ml-2">
                {testimonialsData.pagination}
              </span>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
