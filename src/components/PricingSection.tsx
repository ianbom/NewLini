import Link from "next/link";
import { pricingData } from "@/data/homepage";
import { Check, ArrowUpRight } from "lucide-react";

export function PricingSection() {
  return (
    <section id="harga" className="py-20 lg:py-28 bg-brand-softWhite border-t border-brand-borderLight">
      <div className="max-w-container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand-mutedText mb-3">
              <span className="w-4 h-[2px] bg-brand-orange" />
              <span>{pricingData.eyebrow}</span>
            </div>
            <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-extrabold text-brand-navy tracking-tight leading-tight">
              {pricingData.titleLine1}
              <br />
              {pricingData.titleLine2}
              <span className="text-brand-orange">.</span>
            </h2>
          </div>

          <p className="text-[15px] text-brand-mutedText max-w-[480px] leading-relaxed self-start lg:self-end">
            {pricingData.description}
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 items-stretch">
          {pricingData.plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[22px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.isFeatured
                  ? "bg-brand-navy text-white shadow-2xl scale-[1.02] border border-slate-700/80 z-10"
                  : "bg-white text-brand-navy border border-brand-borderLight shadow-sm hover:shadow-md"
              }`}
            >
              <div>
                {/* Top tag & badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span
                    className={`text-[11px] font-bold tracking-wider uppercase ${
                      plan.isFeatured ? "text-brand-orange" : "text-brand-orange"
                    }`}
                  >
                    {plan.tag}
                  </span>

                  {plan.badge && (
                    <span className="px-2.5 py-1 rounded-full text-[9.5px] font-bold uppercase tracking-wide bg-brand-orange/15 text-brand-orange border border-brand-orange/30">
                      {plan.badge}
                    </span>
                  )}
                </div>

                {/* Plan Title */}
                <h3
                  className={`text-[22px] font-extrabold tracking-tight ${
                    plan.isFeatured ? "text-white" : "text-brand-navy"
                  }`}
                >
                  {plan.title}
                </h3>

                {/* Plan Description */}
                <p
                  className={`mt-2 text-[13.5px] leading-relaxed min-h-[40px] ${
                    plan.isFeatured ? "text-slate-300" : "text-brand-mutedText"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price block */}
                <div className="mt-6 pt-2">
                  <span
                    className={`text-[10px] font-bold tracking-wider uppercase block ${
                      plan.isFeatured ? "text-slate-400" : "text-slate-400"
                    }`}
                  >
                    {plan.priceLabel}
                  </span>
                  <div className="flex items-baseline gap-2 mt-1">
                    <span
                      className={`text-[28px] sm:text-[32px] font-extrabold tracking-tight ${
                        plan.isFeatured ? "text-white" : "text-brand-navy"
                      }`}
                    >
                      {plan.priceValue}
                    </span>
                    <span
                      className={`text-[12px] font-medium ${
                        plan.isFeatured ? "text-slate-400" : "text-brand-mutedText"
                      }`}
                    >
                      {plan.unit}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div
                  className={`h-[1px] w-full my-6 ${
                    plan.isFeatured ? "bg-slate-700/80" : "bg-brand-borderLight"
                  }`}
                />

                {/* Feature List */}
                <ul className="space-y-3.5">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-[13.5px]">
                      <div
                        className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${
                          plan.isFeatured
                            ? "text-brand-orange"
                            : "text-brand-navy"
                        }`}
                      >
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                      <span
                        className={
                          plan.isFeatured ? "text-slate-200" : "text-brand-navy"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Button */}
              <div className="mt-8 pt-4">
                <Link
                  href={plan.href}
                  className={`w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-[13.5px] font-semibold transition-all ${
                    plan.isFeatured
                      ? "bg-brand-orange hover:bg-brand-orangeHover text-white shadow-md hover:shadow-lg"
                      : "bg-white hover:bg-slate-50 border border-brand-navy text-brand-navy"
                  }`}
                >
                  <span>{plan.ctaLabel}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Custom Web App Callout */}
        <div className="mt-14 rounded-2xl bg-white border border-brand-borderLight p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="text-[17px] font-bold text-brand-navy">
              {pricingData.bottomCallout.heading}
            </h4>
            <p className="mt-1 text-[13.5px] text-brand-mutedText">
              {pricingData.bottomCallout.subtext}
            </p>
          </div>

          <Link
            href={pricingData.bottomCallout.href}
            className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 border border-brand-navy text-brand-navy text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all shrink-0"
          >
            <span>{pricingData.bottomCallout.buttonText}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
