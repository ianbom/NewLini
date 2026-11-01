import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles } from "@/data/articles";
import "./articles.css";

export const metadata: Metadata = { title: "Artikel | LiniWeb", description: "Panduan praktis tentang website, konten, dan kebutuhan digital bisnis." };

export default function ArticlesPage() {
  return <main className="articles-page"><Header />
    <section className="articles-hero"><div className="articles-wrap articles-hero-inner">
      <div><p className="articles-kicker"><span /> JURNAL LINIWEB</p><h1>Ide yang membuat<br /><em>website bekerja</em><br />lebih baik.</h1><p className="articles-hero-intro">Catatan dan panduan praktis untuk membangun kehadiran digital yang lebih jelas bagi bisnis Anda.</p><a className="articles-hero-link" href="#daftar-artikel">Jelajahi artikel <ArrowDownRight size={18} /></a></div>
      <div className="articles-hero-art" aria-hidden="true"><span className="hero-art-label">PERSPEKTIF<br />UNTUK BISNIS<br />YANG BERTUMBUH</span><span className="hero-art-orbit" /><span className="hero-art-disc" /><span className="hero-art-number">A<span>.</span></span><span className="hero-art-bottom">IDE / DESAIN / DIGITAL</span></div>
    </div></section>
    <section className="articles-list" id="daftar-artikel"><div className="articles-wrap"><div className="articles-list-heading"><div><p className="articles-kicker dark"><span /> WAWASAN LINIWEB</p><h2>Catatan untuk<br /><em>langkah berikutnya.</em></h2></div><p>Enam bacaan untuk membantu Anda merencanakan, membangun, dan merawat website.</p></div>
      <div className="articles-grid">{articles.map(article => <article className="article-card" key={article.slug}><Link className="article-card-link" href={`/artikel/${article.slug}`}><div className={`article-art art-${article.theme}`} aria-hidden="true"><span className="article-art-index">L / {article.number}</span><span className="article-art-shape" /><span className="article-art-label">{article.visual}</span><span className="article-art-arrow">↗</span></div><div className="article-card-meta"><span>{article.category}</span><span>{article.readTime} baca</span></div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="article-card-more">Baca artikel <ArrowUpRight size={16} /></span></Link></article>)}</div>
    </div></section><Footer /></main>;
}
