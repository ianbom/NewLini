import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { articles } from "@/data/articles";
import "../articles.css";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return articles.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return article ? { title: `${article.title} | LiniWeb`, description: article.excerpt } : { title: "Artikel tidak ditemukan | LiniWeb" };
}
export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();
  return <main className="articles-page"><Header /><article>
    <header className="article-detail-hero"><div className="articles-wrap"><Link className="article-back" href="/artikel"><ArrowLeft size={16} /> Semua artikel</Link><div className="article-detail-heading"><div><p className="articles-kicker"><span /> {article.category} <b> / </b> {article.readTime} BACA</p><h1>{article.title}</h1><p>{article.excerpt}</p></div><span className="article-detail-number" aria-hidden="true">{article.number}<i>.</i></span></div></div></header>
    <div className="articles-wrap article-detail-layout"><aside className="article-detail-aside"><span>LINIWEB JOURNAL</span><strong>{article.number} / 06</strong><p>Wawasan untuk website yang bekerja lebih baik.</p><Link href="/artikel">Lihat semua artikel <ArrowUpRight size={15} /></Link></aside><div className="article-body"><p className="article-lead">{article.intro}</p>{article.sections.map((section, index) => <section className="article-body-section" key={section.heading}><span className="article-section-number">0{index + 1} /</span><div><h2>{section.heading}</h2>{section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div></section>)}<div className="article-end"><span>AKHIR CATATAN</span><Link href="/artikel">Jelajahi artikel lainnya <ArrowUpRight size={18} /></Link></div></div></div>
  </article><Footer /></main>;
}
