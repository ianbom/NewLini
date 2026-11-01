import Image from "next/image";
import Link from "next/link";
import { servicesData } from "@/data/homepage";
import { ArrowRight } from "lucide-react";

export function ServicesSection() {
  return (
    <section id="layanan" className="py-20 lg:py-28 bg-brand-softWhite border-t border-brand-borderLight">
      <div className="max-w-container mx-auto px-6 lg:px-12">

        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6">
          <div>
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-wider text-brand-mutedText mb-3">
              <span className="w-4 h-[2px] bg-brand-orange" />
              <span>{servicesData.eyebrow}</span>
            </div>
            <h2 className="text-[34px] sm:text-[40px] lg:text-[44px] font-extrabold text-brand-navy tracking-tight leading-tight">
              {servicesData.titleLine1}
              <br />
              {servicesData.titleLine2}
            </h2>
          </div>

          <p className="text-[15px] text-brand-mutedText max-w-[480px] leading-relaxed self-start lg:self-end">
            {servicesData.description}
          </p>
        </div>

        {/* 2x2 Services Grid (Horizontal Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mt-12">
          {servicesData.services.map((service) => (
            <div
              key={service.id}
              className={`rounded-[20px] p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                service.isDark
                  ? "bg-brand-navy text-white shadow-xl"
                  : "bg-white text-brand-navy border border-brand-borderLight shadow-sm hover:shadow-md"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                {/* Left Content */}
                <div className="sm:col-span-6 flex flex-col justify-between h-full z-10">
                  <div>
                    {/* Number label */}
                    <span
                      className={`text-[13px] font-bold tracking-wider inline-block mb-3 ${
                        service.isDark ? "text-brand-orange" : "text-brand-orange"
                      }`}
                    >
                      {service.number}
                    </span>

                    {/* Title */}
                    <h3
                      className={`text-[20px] font-bold tracking-tight leading-snug ${
                        service.isDark ? "text-white" : "text-brand-navy"
                      }`}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      className={`mt-3 text-[13.5px] leading-relaxed ${
                        service.isDark ? "text-slate-300" : "text-brand-mutedText"
                      }`}
                    >
                      {service.description}
                    </p>
                  </div>

                  {/* Detail link */}
                  <div className="mt-6 pt-2">
                    <Link
                      href={service.href}
                      className={`inline-flex items-center gap-1.5 text-[13px] font-semibold transition-all group ${
                        service.isDark
                          ? "text-white hover:text-brand-orange"
                          : "text-brand-navy hover:text-brand-orange"
                      }`}
                    >
                      <span>{service.linkText}</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Mockup Preview Image */}
                <div className="sm:col-span-6 relative aspect-[420/280] rounded-xl overflow-hidden shadow-sm flex items-center justify-center">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={420}
                    height={280}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-14 rounded-2xl bg-white border border-brand-borderLight p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
            <span className="text-[17px] font-bold text-brand-navy">
              {servicesData.bottomCallout.heading}
            </span>
            <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-slate-300" />
            <span className="text-[14px] text-brand-mutedText">
              {servicesData.bottomCallout.subtext}
            </span>
          </div>

          <Link
            href={servicesData.bottomCallout.href}
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13.5px] font-semibold px-6 py-3 rounded-full transition-all shadow-sm hover:shadow-md shrink-0"
          >
            <span>{servicesData.bottomCallout.buttonText}</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
