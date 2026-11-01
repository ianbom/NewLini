import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import "./portfolio.css";

const categories = [
  {
    number: "01", label: "E-COMMERCE", title: "Website E-Commerce",
    description: "Pilihan karya website toko online.",
    projects: ["Galerya Living", "Klasik Leather", "SuperEgo", "Noira Home", "Aruna Goods", "Craftloft Market", "Atelier Goods", "Maison Living", "Forma Studio"],
    images: ["/placeholders/portfolio-galerya.svg", "/placeholders/service-ecommerce.svg"],
  },
  {
    number: "02", label: "COMPANY PROFILE", title: "Website Company Profile",
    description: "Pilihan karya website bisnis dan perusahaan.",
    projects: ["Studio Noirva", "Arvena", "Noirel Studio", "Arkhema Design", "Selaras Konstruksi", "Luma Interior", "Atelier Space", "Arunika Studio", "Forma Architecture"],
    images: ["/placeholders/portfolio-studio-noirva.svg", "/placeholders/portfolio-arvena.svg", "/placeholders/portfolio-noirel.svg"],
  },
];

export default function PortfolioPage() {
  return (
    <main className="portfolio-page">
      <Header />
      <section className="portfolio-hero">
        <div className="portfolio-wrap portfolio-hero-inner">
          <div className="portfolio-hero-copy">
            <p className="portfolio-eyebrow"><span />PORTOFOLIO</p>
            <h1>Karya Digital yang<br />Dirancang untuk<br />Tampil dan <em>Bekerja Nyata.</em></h1>
            <p className="portfolio-intro">Jelajahi pilihan website yang kami rancang untuk berbagai kebutuhan bisnis.</p>
            <Link href="#proyek" className="portfolio-button">Lihat Proyek Terbaru <ArrowRight size={16} /></Link>
          </div>
          <div className="portfolio-hero-art" aria-hidden="true">
            <div className="portfolio-art-dots" />
            <div className="portfolio-art-accent" />
            <div className="portfolio-screen portfolio-screen-back"><Image src="/placeholders/portfolio-galerya.svg" alt="" fill sizes="400px" /></div>
            <div className="portfolio-screen portfolio-screen-front"><Image src="/placeholders/portfolio-studio-noirva.svg" alt="" fill sizes="380px" /></div>
            <div className="portfolio-screen portfolio-screen-small"><Image src="/placeholders/service-ecommerce.svg" alt="" fill sizes="260px" /></div>
          </div>
        </div>
      </section>
      <div id="proyek">
        {categories.map((category) => (
          <section className="portfolio-category" key={category.number}>
            <div className="portfolio-wrap">
              <p className="portfolio-category-label"><span /> <b>{category.number}</b> / {category.label}</p>
              <div className="portfolio-category-heading"><h2>{category.title}</h2><p>{category.description}</p></div>
              <div className="portfolio-grid">
                {category.projects.map((project, index) => (
                  <article className="portfolio-project" key={project}>
                    <div className="portfolio-project-image"><Image src={category.images[index % category.images.length]} alt={`Placeholder untuk ${project}`} fill sizes="(max-width: 640px) 100vw, (max-width: 900px) 50vw, 33vw" /></div>
                    <h3>{project}</h3>
                  </article>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>
      <Footer />
    </main>
  );
}
