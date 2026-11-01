import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowDownRight, ArrowRight, Check } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ServicesFAQ } from "@/components/ui/services-faq";
import { services, servicePrice, type Service } from "@/data/services";
import { consultationHref } from "@/lib/contact";
import "./services.css";

export const metadata: Metadata = { title: "Jasa Pembuatan Website & Harga | LiniWeb", description: "Jelajahi layanan pembuatan website LiniWeb, mulai dari landing page, company profile, toko online, hingga aplikasi web kustom. Konsultasikan kebutuhan bisnis Anda." };

function Button({ href, children, secondary = false }: { href: string; children: React.ReactNode; secondary?: boolean }) {
  return <Link className={secondary ? "svc-link" : "svc-button"} href={href}>{children}<ArrowRight size={17} aria-hidden="true" /></Link>;
}
function Preview({ service, hero = false }: { service: Service; hero?: boolean }) {
  const titles: Record<string, [string, string]> = { landing: ["Ruang yang terasa seperti rumah.", "Ruang hidup yang dirancang dengan perhatian pada setiap detail."], company: ["Ruang untuk hidup lebih baik.", "Arsitektur yang berpijak pada manusia dan lingkungannya."], commerce: ["Temukan bentuk yang berarti.", "Pilihan furnitur untuk ruang yang terasa personal."] };
  const [title, description] = titles[service.id] || titles.company;
  return <div className={`svc-preview svc-preview-${service.id} ${hero ? "svc-preview-hero" : ""}`} aria-label={`Contoh ilustrasi website ${service.title}`}>
    <div className="svc-preview-top"><b>{service.id === "company" ? "RUANG / STUDIO" : service.id === "commerce" ? "RUMA." : "HUNIAN / CO"}</b><span>Tentang &nbsp;&nbsp; Koleksi &nbsp;&nbsp; Kontak</span><i>JELAJAHI</i></div>
    <div className="svc-preview-body"><Image src={service.image} alt="" fill sizes="(max-width: 768px) 100vw, 55vw" priority={hero} /><div className="svc-preview-overlay"><small>CONTOH TAMPILAN WEBSITE</small><strong>{title}</strong><p>{description}</p><span>SELENGKAPNYA &nbsp; ↗</span></div></div>
    <div className="svc-preview-bottom"><span>DIRANCANG UNTUK KEHIDUPAN</span><b>Kesederhanaan dalam setiap detail.</b><span>01 / 03</span></div>
  </div>;
}
function Price({ service }: { service: Service }) {
  return <div className="svc-price"><div><span className="svc-small">{service.pricingMode === "custom" ? "PENAWARAN" : "HARGA MULAI"}</span><strong>{servicePrice(service)}</strong>{service.pricingMode !== "custom" && <small>Biaya per proyek</small>}<p>{service.priceNote}</p></div><Button href={consultationHref(service.title)}>{service.ctaLabel}</Button></div>;
}
function Details({ service }: { service: Service }) {
  return <div className="svc-details"><p className="svc-kicker"><span>{service.number}</span> / {service.title.toUpperCase()}</p><h2>{service.headline}</h2><p className="svc-description">{service.description}</p><div className="svc-suitable"><span className="svc-small">COCOK UNTUK</span><p>{service.suitableFor.join(" · ")}</p></div><div className="svc-features"><span className="svc-small">FITUR UTAMA</span><ul>{service.features.map(feature => <li key={feature}><Check size={15} aria-hidden="true" />{feature}</li>)}</ul></div><Price service={service} /></div>;
}
function Dashboard() {
  return <div className="svc-dashboard-frame"><div className="svc-dashboard"><aside><b>RUANG KERJA <span>/</span></b><small>MENU</small><strong>Ringkasan</strong><span>Proyek</span><span>Data pelanggan</span><span>Dokumen</span><span>Pengaturan</span></aside><div className="svc-dashboard-main"><div className="svc-dashboard-top"><span>Ruang kerja / Ringkasan</span><span>Contoh tampilan</span></div><h3>Selamat datang di ruang kerja.</h3><p>Kelola informasi dan proses bisnis dalam satu tempat.</p><div className="svc-dashboard-cards"><div><small>PROYEK</small><strong>Daftar proyek</strong><span>Kelola pekerjaan dan tahapan.</span></div><div><small>PELANGGAN</small><strong>Data pelanggan</strong><span>Temukan informasi kontak.</span></div><div><small>DOKUMEN</small><strong>Dokumen tim</strong><span>Akses berkas yang dibutuhkan.</span></div></div><div className="svc-dashboard-table"><strong>Aktivitas terbaru</strong><div><span>Nama</span><span>Kategori</span><span>Status</span></div><div><span>Data proyek</span><span>Proyek</span><span>Dalam proses</span></div><div><span>Informasi pelanggan</span><span>Pelanggan</span><span>Ditinjau</span></div></div></div></div><p>ILUSTRASI ANTARMUKA APLIKASI WEB</p></div>;
}
const steps = [["Konsultasi", "Memahami kebutuhan dan tujuan bisnis."], ["Perencanaan & Desain", "Menyusun struktur dan tampilan website."], ["Pengembangan", "Membangun website serta fitur yang dibutuhkan."], ["Pengujian & Peluncuran", "Memastikan website siap digunakan."]];
export default function ServicesPage() {
  return <main className="services-page"><Header />
    <section className="svc-hero"><div className="svc-wrap svc-hero-grid"><div className="svc-hero-copy"><p className="svc-kicker"><span>LAYANAN & HARGA</span> / LINIWEB</p><h1>Website Profesional.<br />Harga yang <em>Jelas.</em></h1><p>Pilih solusi website yang sesuai dengan kebutuhan bisnis Anda, lengkap dengan informasi layanan, fitur, dan harga yang transparan.</p><div className="svc-actions"><Button href="#layanan-kami">Lihat Layanan & Harga</Button><Button href={consultationHref()} secondary>Konsultasi Gratis</Button></div></div><div className="svc-hero-art"><Preview service={services[1]} hero /></div></div></section>
    <nav id="layanan-kami" className="svc-index svc-wrap" aria-label="Daftar layanan">{services.map(service => <a href={`#${service.slug}`} key={service.id}><span>{service.number}</span><strong>{service.id === "app" ? "Web Application" : service.title}</strong><ArrowDownRight size={17} aria-hidden="true" /></a>)}</nav>
    <section id={services[0].slug} className="svc-section svc-wrap svc-split svc-landing"><div className="svc-visual"><Preview service={services[0]} /><p className="svc-caption">01 / CONTOH LANDING PAGE <span>DIRANCANG UNTUK KONVERSI</span></p></div><Details service={services[0]} /></section>
    <section id={services[1].slug} className="svc-company"><div className="svc-wrap svc-section svc-split"><Details service={services[1]} /><div className="svc-company-visual"><Preview service={services[1]} /><p className="svc-caption">02 / CONTOH COMPANY PROFILE <span>IDENTITAS DALAM SETIAP DETAIL</span></p></div></div></section>
    <section id={services[2].slug} className="svc-commerce"><div className="svc-wrap svc-section svc-split"><div className="svc-commerce-visual"><Preview service={services[2]} /><p className="svc-caption">03 / CONTOH E-COMMERCE <span>PENGALAMAN BELANJA DIGITAL</span></p></div><Details service={services[2]} /></div></section>
    <section id={services[3].slug} className="svc-section svc-wrap svc-app"><div className="svc-app-top"><Details service={services[3]} /></div><Dashboard /></section>
    <section className="svc-cost"><div className="svc-wrap svc-section svc-cost-grid"><div><p className="svc-kicker"><span>05</span> / CAKUPAN PROYEK</p><h2>Apa yang Termasuk dalam Biaya?</h2><p className="svc-description">Setiap proyek memiliki cakupan yang berbeda. Berikut beberapa komponen yang perlu diperhatikan sebelum memulai.</p><p className="svc-cost-note">Komponen yang termasuk ditentukan dalam paket atau penawaran yang disepakati.</p></div><div className="svc-cost-lists"><div><h3>Komponen yang dibahas</h3><ul>{["Desain website", "Pengembangan", "Responsivitas", "Pengujian", "Revisi sesuai kesepakatan"].map(x => <li key={x}>{x}</li>)}</ul></div><div><h3>Potensi biaya tambahan</h3><ul>{["Domain", "Hosting", "Fitur tambahan", "Integrasi pihak ketiga", "Maintenance", "Penambahan konten"].map(x => <li key={x}>{x}</li>)}</ul></div></div></div></section>
    <section className="svc-wrap svc-section svc-process"><p className="svc-kicker"><span>06</span> / PROSES KERJA</p><h2>Dari Ide Menjadi Website<br />yang Siap Digunakan.</h2><div className="svc-timeline">{steps.map(([title, text], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></section>
    <section className="svc-faq"><div className="svc-wrap svc-section svc-faq-grid"><div><p className="svc-kicker"><span>07</span> / FAQ</p><h2>Pertanyaan yang Sering Ditanyakan.</h2><p className="svc-description">Informasi awal untuk membantu Anda merencanakan proyek bersama kami.</p></div><ServicesFAQ /></div></section>
    <section className="svc-final"><div className="svc-wrap svc-final-inner"><p className="svc-kicker"><span>PROYEK BERIKUTNYA</span> / BERSAMA LINIWEB</p><h2>Punya Ide Website?<br /><em>Mari Wujudkan.</em></h2><div><p>Ceritakan kebutuhan bisnis Anda. Kami siap membantu menentukan solusi yang tepat.</p><div className="svc-actions"><Button href={consultationHref()}>Konsultasi Gratis</Button><Button href="/portofolio" secondary>Lihat Portofolio</Button></div></div></div></section>
    <Footer />
  </main>;
}
