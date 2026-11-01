import Link from "next/link";
import { ArrowUpRight, Globe, Instagram, Mail, MapPin, MessageCircle } from "lucide-react";
import { footerData } from "@/data/homepage";

const contactIcons = { mail: Mail, globe: Globe, instagram: Instagram, "map-pin": MapPin, "message-circle": MessageCircle };

export function Footer() {
  return (
    <footer id="kontak" className="site-footer">
      <section id="tentang-kami" className="footer-hero">
        <div className="footer-art" aria-hidden="true">
          <span className="footer-watermark">LINIWEB</span>
          <span className="footer-art-caption">WEBSITE<br />FOR A<br />BRIGHTER<br />BUSINESS<br />TOMORROW</span>
          <span className="footer-art-square" />
          <span className="footer-art-dots" />
          <span className="footer-art-tagline">SOLUSI DIGITAL<br />UNTUK BISNIS<br />YANG LEBIH MAJU</span>
          <svg className="footer-art-drawing" viewBox="0 0 870 491" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="facade" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#354b69" /><stop offset="1" stopColor="#0b1d39" /></linearGradient>
              <radialGradient id="glow"><stop stopColor="#e6683c" stopOpacity=".25" /><stop offset="1" stopColor="#e6683c" stopOpacity="0" /></radialGradient>
              <clipPath id="building"><path d="M645 388 L870 214 L870 491 L817 439 Q757 409 645 388Z" /></clipPath>
            </defs>
            <ellipse cx="735" cy="300" rx="230" ry="180" fill="url(#glow)" />
            <path d="M374 0 C200 135 292 285 471 348 C624 402 787 365 870 491" fill="none" stroke="#43536a" strokeWidth="1" opacity=".7" />
            <path d="M600 382 C590 235 712 86 870 56" fill="none" stroke="#fc6837" strokeWidth="1" />
            <path d="M720 331 Q753 216 870 155 L870 215Z" fill="#ff6b3b" />
            <path d="M645 388 L870 214 L870 491 L817 439 Q757 409 645 388Z" fill="url(#facade)" />
            <g clipPath="url(#building)" fill="none" stroke="#0a1a32" strokeWidth="1.2" opacity=".85">
              <path d="M700 250V490 M723 230V490 M747 210V490 M771 190V490 M795 170V490 M819 150V490 M843 140V490" />
              <path d="M620 421 L880 255 M620 473 L880 307 M650 500 L880 359 M820 300 L880 320" />
            </g>
            <path d="M645 388 Q797 408 870 491" fill="none" stroke="#ff6937" strokeWidth="1.2" />
          </svg>
        </div>
        <div className="footer-wrap footer-hero-content">
          <div className="footer-logo">LiniWeb<span /></div>
          <div className="footer-brand-subtitle"><i />{footerData.layerA.brandSubtitle}</div>
          <h2>{footerData.layerA.headlinePart1}<br />{footerData.layerA.headlinePart2}<br /><em>{footerData.layerA.headlineAccent}</em>.</h2>
          <p>{footerData.layerA.description}</p>
          <Link className="footer-button footer-hero-button" href="#kontak">{footerData.layerA.ctaText}<ArrowUpRight size={18} /></Link>
        </div>
      </section>

      <nav className="footer-navigation" aria-label="Navigasi footer">
        <div className="footer-wrap footer-columns">
          {footerData.columns.map((column, index) => (
            <div className="footer-column" key={column.title}>
              <h3>{column.title}</h3>
              <ul>{column.links.map((link) => {
                const Icon = link.icon ? contactIcons[link.icon as keyof typeof contactIcons] : undefined;
                return <li key={link.label}><Link href={link.href}>
                  {Icon && <Icon className="footer-contact-icon" size={20} strokeWidth={1.6} />}
                  <span>{link.label}</span>
                </Link></li>;
              })}</ul>
            </div>
          ))}
        </div>
      </nav>

      <section className="footer-consultation">
        <div className="footer-wrap footer-consultation-inner">
          <div><h2>{footerData.consultationStrip.heading}</h2><p>{footerData.consultationStrip.subtext}</p></div>
          <div className="footer-consultation-action"><Link className="footer-button" href={footerData.consultationStrip.href}>{footerData.consultationStrip.buttonText}<ArrowUpRight size={18} /></Link></div>
        </div>
      </section>

      <div className="footer-wrap footer-bottom">
        <p>{footerData.bottomBar.copyright}</p>
        <div className="footer-bottom-right">
          <div className="footer-legal">{footerData.bottomBar.links.map((link) => <Link href={link.href} key={link.label}>{link.label}</Link>)}</div>
          <div className="footer-social">
            <Link href="https://instagram.com/liniweb.id" aria-label="Instagram"><Instagram size={22} /></Link>
            <Link href="https://behance.net" aria-label="Behance">Bē</Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn">in</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
