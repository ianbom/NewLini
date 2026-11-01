import Image from "next/image";
import Link from "next/link";
import { portfolioData } from "@/data/homepage";
import { ArrowUpRight, ArrowRight } from "lucide-react";

export function PortfolioSection() {
  return (
    <section id="portofolio" className="py-20 lg:py-28 bg-white border-t border-brand-borderLight">
      <div className="max-w-container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-4">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand-mutedText mb-3">
              <span className="w-4 h-[2px] bg-brand-orange" />
              <span>{portfolioData.eyebrow}</span>
            </div>
            <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-extrabold text-brand-navy tracking-tight leading-tight">
              {portfolioData.title}
              <span className="text-brand-orange">.</span>
            </h2>
            <p className="mt-3 text-[15px] text-brand-mutedText max-w-[560px] leading-relaxed">
              {portfolioData.description}
            </p>
          </div>

          <Link
            href={portfolioData.viewAllHref}
            className="inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-brand-navy hover:text-brand-orange transition-colors group self-start md:self-end pb-1"
          >
            <span>{portfolioData.viewAllText}</span>
            <ArrowUpRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* 2x2 Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10 mt-12">
          {portfolioData.projects.map((project) => (
            <div key={project.id} className="group flex flex-col">
              {/* Image Frame */}
              <div className="relative w-full aspect-[600/380] rounded-[16px] overflow-hidden bg-slate-100 border border-brand-borderLight shadow-sm transition-all duration-300 group-hover:shadow-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={380}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>

              {/* Bottom Project Metadata Row */}
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-brand-orange">
                    {project.number}
                  </span>
                  <span className="h-3.5 w-[1px] bg-slate-300" />
                  <span className="text-[14px] font-extrabold tracking-wide text-brand-navy">
                    {project.title}
                  </span>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <span className="text-[13px] text-brand-mutedText hidden sm:inline">
                    {project.category}
                  </span>
                </div>

                {/* Circular Arrow Button */}
                <Link
                  href={project.href}
                  className="w-9 h-9 rounded-full border border-brand-borderLight flex items-center justify-center text-brand-orange hover:bg-brand-orange hover:text-white hover:border-brand-orange transition-all duration-200"
                  aria-label={`View ${project.title}`}
                >
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Inquiry Callout */}
        <div className="mt-16 pt-8 border-t border-brand-borderLight flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[15px] sm:text-[16px] font-bold text-brand-navy">
            {portfolioData.bottomCallout.text}
          </span>
          <Link
            href={portfolioData.bottomCallout.href}
            className="inline-flex items-center gap-1.5 text-[14px] font-semibold text-brand-navy hover:text-brand-orange transition-colors group"
          >
            <span>{portfolioData.bottomCallout.linkText}</span>
            <ArrowUpRight className="w-4 h-4 text-brand-orange transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

      </div>
    </section>
  );
}
