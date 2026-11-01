"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { navigationLinks } from "@/data/homepage";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-[#E4E8EF]/60">
      <div className="max-w-container mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <Link href="/#beranda" className="flex items-center gap-1 group">
          <span className="text-[22px] font-extrabold tracking-tight text-brand-navy">
            LiniWeb
          </span>
          <span className="w-2 h-2 rounded-sm bg-brand-orange inline-block -mt-3.5 transition-transform group-hover:scale-125" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((item) => (
            <div key={item.label} className="relative py-2">
              <Link
                href={item.href}
                className={`text-[13.5px] font-medium transition-colors flex items-center gap-1 ${
                  (item.href === "/artikel" ? pathname.startsWith("/artikel") : item.href === "/portofolio" ? pathname.startsWith("/portofolio") : item.href === "/#beranda" && pathname === "/")
                    ? "text-brand-navy font-semibold"
                    : "text-brand-mutedText hover:text-brand-navy"
                }`}
              >
                {item.label}
                {item.hasDropdown && (
                  <ChevronDown className="w-3.5 h-3.5 text-brand-mutedText opacity-70" />
                )}
              </Link>
              {(item.href === "/artikel" ? pathname.startsWith("/artikel") : item.href === "/portofolio" ? pathname.startsWith("/portofolio") : item.href === "/#beranda" && pathname === "/") && (
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-brand-orange rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Right CTA Button */}
        <div className="hidden md:flex items-center">
          <Link
            href="#kontak"
            className="inline-flex items-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all shadow-sm hover:shadow-md"
          >
            <span>Konsultasi Gratis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-brand-navy hover:text-brand-orange"
            aria-label="Toggle navigation"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E4E8EF] px-6 py-5 shadow-lg">
          <div className="flex flex-col gap-3">
            {navigationLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-[15px] py-1.5 flex items-center justify-between ${
                  (item.href === "/artikel" ? pathname.startsWith("/artikel") : item.href === "/portofolio" ? pathname.startsWith("/portofolio") : item.href === "/#beranda" && pathname === "/")
                    ? "text-brand-orange font-semibold"
                    : "text-brand-navy hover:text-brand-orange"
                }`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </Link>
            ))}
            <div className="pt-3 border-t border-[#E4E8EF]">
              <Link
                href="#kontak"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 bg-brand-orange hover:bg-brand-orangeHover text-white text-[13px] font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                <span>Konsultasi Gratis</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
