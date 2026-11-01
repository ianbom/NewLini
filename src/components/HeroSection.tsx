"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { heroContent } from "@/data/homepage";
import { ArrowRight, Sparkles } from "lucide-react";

const heroImages = [
  { src: "/home/Digital Dashboard Creator with Tablet.png", alt: "Desainer digital dengan tablet dan tampilan dashboard" },
  { src: "/home/SaaS Success Celebration with Indonesian Dashboards.png", alt: "Tim merayakan pencapaian dengan dashboard digital" },
  { src: "/home/Web Agency Dashboard with Smiling Designer.png", alt: "Desainer dengan tampilan dashboard website" },
];

export function HeroSection() {
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer: ReturnType<typeof setInterval> | undefined;
    const updateTimer = () => {
      clearInterval(timer);
      if (reducedMotion.matches) setActiveImage(0);
      else timer = setInterval(() => setActiveImage((index) => (index + 1) % heroImages.length), 3000);
    };
    updateTimer();
    reducedMotion.addEventListener("change", updateTimer);
    return () => {
      clearInterval(timer);
      reducedMotion.removeEventListener("change", updateTimer);
    };
  }, []);

  return (
    <section id="beranda" className="relative pt-10 pb-20 lg:pt-16 lg:pb-28 overflow-hidden bg-brand-softWhite">
      {/* Subtle background matrix dots & geometric lines */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-dot-matrix opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-dot-matrix opacity-40 pointer-events-none" />

      <div className="max-w-container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Column: Typography & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start z-10">
            {/* Eyebrow badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-brand-borderLight shadow-sm mb-6">
              <Sparkles className="w-3.5 h-3.5 text-brand-orange fill-brand-orange" />
              <span className="text-[11px] font-bold tracking-wider text-brand-navy uppercase">
                {heroContent.eyebrow}
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-[42px] sm:text-[50px] lg:text-[56px] font-extrabold text-brand-navy tracking-tight leading-[1.12]">
              {heroContent.titlePart1}
              <span className="relative inline-block font-editorial-italic font-normal text-brand-orange mx-1.5">
                {heroContent.titleAccent}
                {/* Hand-drawn underline curve */}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-orange"
                  viewBox="0 0 180 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M3 9C45 2.5 135 2 177 8.5"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              <br />
              {heroContent.titlePart2}
              <br />
              {heroContent.titlePart3}
            </h1>

            {/* Description */}
            <p className="mt-6 text-[15px] sm:text-[16px] text-brand-mutedText leading-relaxed max-w-[520px]">
              {heroContent.description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Link
                href="#kontak"
                className="inline-flex items-center gap-2.5 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13.5px] font-semibold px-7 py-3.5 rounded-full transition-all shadow-sm hover:shadow-md"
              >
                <span>{heroContent.primaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="#portofolio"
                className="inline-flex items-center gap-2.5 bg-white hover:bg-slate-50 border border-brand-navy text-brand-navy text-[13.5px] font-semibold px-7 py-3.5 rounded-full transition-all"
              >
                <span>{heroContent.secondaryCta}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-3.5 mt-10 pt-2">
              <div className="flex -space-x-2.5 overflow-hidden">
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#D57E4E] text-white text-[10px] font-bold flex items-center justify-center">
                  AD
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#3B82F6] text-white text-[10px] font-bold flex items-center justify-center">
                  SR
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#10B981] text-white text-[10px] font-bold flex items-center justify-center">
                  BK
                </div>
                <div className="inline-block h-8 w-8 rounded-full ring-2 ring-white bg-[#8B5CF6] text-white text-[10px] font-bold flex items-center justify-center">
                  LW
                </div>
              </div>
              <span className="text-[12.5px] font-medium text-brand-mutedText">
                — {heroContent.socialProof}
              </span>
            </div>
          </div>

          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="hero-slideshow relative w-full max-w-[540px] aspect-[1422/1106] overflow-hidden">
              {heroImages.map((image, index) => (
                <Image
                  key={image.src}
                  src={image.src}
                  alt={index === activeImage ? image.alt : ""}
                  aria-hidden={index !== activeImage}
                  fill
                  sizes="(max-width: 1023px) 100vw, 45vw"
                  priority={index === 0}
                  className={`hero-slide object-contain ${index === activeImage ? "hero-slide-active" : ""}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
