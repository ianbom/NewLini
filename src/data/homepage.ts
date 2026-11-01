import { siteImages } from "@/config/site-images";

export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
  hasDropdown?: boolean;
}

export interface PortfolioItem {
  id: string;
  number: string;
  title: string;
  category: string;
  image: string;
  href: string;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  linkText: string;
  href: string;
  image: string;
  isDark?: boolean;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  name: string;
  role: string;
  sector: string;
  initials: string;
  tag?: string;
}

export interface PricingPlan {
  id: string;
  tag: string;
  badge?: string;
  title: string;
  description: string;
  priceLabel: string;
  priceValue: string;
  unit: string;
  features: string[];
  ctaLabel: string;
  href: string;
  isFeatured?: boolean;
}

export interface FooterColumn {
  title: string;
  links: Array<{
    label: string;
    href: string;
    icon?: string;
  }>;
}

export const navigationLinks: NavLink[] = [
  { label: "Beranda", href: "/#beranda" },
  { label: "Layanan", href: "/#layanan", hasDropdown: true },
  { label: "Portofolio", href: "/portofolio" },
  { label: "Tentang Kami", href: "/#tentang-kami" },
  { label: "Artikel", href: "/artikel" },
];

export const heroContent = {
  eyebrow: "WEBSITE PROFESIONAL UNTUK BISNIS",
  titlePart1: "Website ",
  titleAccent: "Profesional",
  titlePart2: "untuk Bisnis yang",
  titlePart3: "Siap Tumbuh.",
  description:
    "Wujudkan website modern, cepat, dan responsif yang membantu bisnis Anda tampil lebih profesional dan mudah ditemukan pelanggan.",
  primaryCta: "Konsultasi Gratis",
  secondaryCta: "Lihat Portofolio",
  socialProof: "Solusi website untuk UMKM, brand, dan perusahaan.",
  stats: {
    title: "Performa Website",
    period: "30 Hari",
    value: "12.5K",
    growth: "+32%",
  },
  mobileBadge: {
    title: "Mobile Friendly",
    subtitle: "Optimal di semua perangkat",
  },
};

export const portfolioData = {
  eyebrow: "01 / PORTOFOLIO",
  title: "Karya Digital yang Berbicara",
  description:
    "Jelajahi pilihan website yang kami rancang dengan pendekatan kreatif, teknologi modern, dan perhatian pada setiap detail.",
  viewAllText: "Lihat Semua Proyek",
  viewAllHref: "/portofolio",
  projects: [
    {
      id: "noirva",
      number: "01",
      title: "STUDIO NOIRVA",
      category: "Architecture & Interior Design",
      image: siteImages.portfolio.studioNoirva,
      href: "#",
    },
    {
      id: "arvena",
      number: "02",
      title: "ARVENA",
      category: "Property & Residential",
      image: siteImages.portfolio.arvena,
      href: "#",
    },
    {
      id: "galerya",
      number: "03",
      title: "GALERYA LIVING",
      category: "Furniture & Interior",
      image: siteImages.portfolio.galeryaLiving,
      href: "#",
    },
    {
      id: "noirel",
      number: "04",
      title: "NOIREL STUDIO",
      category: "Creative Design Studio",
      image: siteImages.portfolio.noirelStudio,
      href: "#",
    },
  ] as PortfolioItem[],
  bottomCallout: {
    text: "Punya proyek yang ingin diwujudkan?",
    linkText: "Diskusikan Proyek Anda",
    href: "#kontak",
  },
};

export const servicesData = {
  eyebrow: "02 / LAYANAN KAMI",
  titleLine1: "Solusi Digital untuk",
  titleLine2: "Setiap Tahap Bisnis.",
  description:
    "Dari website bisnis hingga aplikasi khusus, kami menghadirkan solusi digital yang dirancang sesuai kebutuhan dan tujuan bisnis Anda.",
  services: [
    {
      id: "company-profile",
      number: "01",
      title: "Website Company Profile",
      description:
        "Bangun kredibilitas bisnis melalui website profesional yang memperkenalkan brand, layanan, dan keunggulan perusahaan.",
      linkText: "Lihat Detail",
      href: "#",
      image: siteImages.services.companyProfile,
      isDark: true,
    },
    {
      id: "landing-page",
      number: "02",
      title: "Landing Page",
      description:
        "Halaman promosi yang fokus, menarik, dan dirancang untuk mengubah pengunjung menjadi calon pelanggan.",
      linkText: "Lihat Detail",
      href: "#",
      image: siteImages.services.landingPage,
      isDark: false,
    },
    {
      id: "ecommerce",
      number: "03",
      title: "Website E-Commerce",
      description:
        "Solusi toko online modern dengan katalog produk, keranjang belanja, dan pengalaman checkout yang praktis.",
      linkText: "Lihat Detail",
      href: "#",
      image: siteImages.services.ecommerce,
      isDark: false,
    },
    {
      id: "custom-app",
      number: "04",
      title: "Aplikasi Web Kustom",
      description:
        "Sistem digital yang dikembangkan sesuai alur kerja bisnis untuk meningkatkan efisiensi dan produktivitas.",
      linkText: "Lihat Detail",
      href: "#",
      image: siteImages.services.customApp,
      isDark: false,
    },
  ] as ServiceItem[],
  bottomCallout: {
    heading: "Belum yakin layanan mana yang tepat?",
    subtext: "Ceritakan kebutuhan bisnis Anda, kami bantu temukan solusinya.",
    buttonText: "Konsultasi Gratis",
    href: "#kontak",
  },
};

export const testimonialsData = {
  eyebrow: "04 / TESTIMONI KLIEN",
  titleLine1: "Pengalaman",
  titleLine2: "Mereka, Bukti",
  titleLine3: "Dedikasi Kami",
  description:
    "Setiap proyek adalah kolaborasi. Dengarkan pengalaman mereka dalam membangun solusi digital bersama LiniWeb.",
  featured: {
    id: "andi",
    quote:
      "LiniWeb sangat memahami kebutuhan bisnis kami. Prosesnya profesional, komunikatif, dan hasil website-nya benar-benar sesuai dengan yang kami harapkan. Sekarang bisnis kami terlihat jauh lebih profesional di mata pelanggan.",
    name: "Andi Darmawan",
    role: "Direktur Utama, Kreasi Arsitek",
    sector: "Arsitektur & Konstruksi",
    initials: "AD",
  } as TestimonialItem,
  secondary: [
    {
      id: "siti",
      tag: "01 / CLIENT EXPERIENCE",
      quote:
        "Tim LiniWeb sangat responsif dan terbuka selama proses pengembangan. Mereka benar-benar mendengarkan kebutuhan kami dan memberikan solusi yang tepat.",
      name: "Siti Rahmawati",
      role: "Founder, Rumah Cantik",
      sector: "Home & Living",
      initials: "SR",
    },
    {
      id: "budi",
      tag: "02 / CLIENT EXPERIENCE",
      quote:
        "Desain website-nya modern, rapi, dan mudah digunakan. LiniWeb berhasil menerjemahkan visi brand kami ke dalam tampilan yang elegan dan profesional.",
      name: "Budi Kurniawan",
      role: "Owner, Natura Food",
      sector: "F&B / Kuliner",
      initials: "BK",
    },
  ] as TestimonialItem[],
  pagination: "01 / 03",
};

export const pricingData = {
  eyebrow: "05 / INVESTASI DIGITAL",
  titleLine1: "Solusi Profesional,",
  titleLine2: "Harga Transparan",
  description:
    "Setiap bisnis punya kebutuhan berbeda. Pilih layanan website yang paling sesuai dengan tujuan dan rencana pengembangan bisnis Anda.",
  plans: [
    {
      id: "starter",
      tag: "01 / STARTER",
      title: "Landing Page",
      description:
        "Untuk promosi produk, layanan, atau kampanye bisnis yang lebih terarah.",
      priceLabel: "MULAI DARI",
      priceValue: "Rp [HARGA]",
      unit: "Per proyek",
      features: [
        "Desain responsif.",
        "Halaman promosi.",
        "Formulir kontak.",
        "Integrasi WhatsApp.",
        "Struktur SEO dasar.",
      ],
      ctaLabel: "Lihat Detail Paket",
      href: "#kontak",
      isFeatured: false,
    },
    {
      id: "business",
      tag: "02 / BUSINESS",
      badge: "UNTUK BISNIS BERKEMBANG",
      title: "Company Profile",
      description:
        "Bangun identitas digital profesional untuk memperkenalkan perusahaan dan layanan Anda.",
      priceLabel: "MULAI DARI",
      priceValue: "Rp [HARGA]",
      unit: "Per proyek",
      features: [
        "Desain sesuai identitas brand.",
        "Beberapa halaman utama.",
        "Tampilan responsif.",
        "Integrasi formulir kontak.",
        "Optimasi SEO dasar.",
        "Integrasi WhatsApp.",
      ],
      ctaLabel: "Konsultasi Sekarang",
      href: "#kontak",
      isFeatured: true,
    },
    {
      id: "commerce",
      tag: "03 / COMMERCE",
      title: "Website E-Commerce",
      description:
        "Bangun toko online dengan pengalaman belanja modern dan pengelolaan produk yang praktis.",
      priceLabel: "MULAI DARI",
      priceValue: "Rp [HARGA]",
      unit: "Per proyek",
      features: [
        "Katalog produk.",
        "Keranjang belanja.",
        "Alur checkout.",
        "Manajemen produk.",
        "Desain responsif.",
        "Integrasi pembayaran sesuai kebutuhan.",
      ],
      ctaLabel: "Lihat Detail Paket",
      href: "#kontak",
      isFeatured: false,
    },
  ] as PricingPlan[],
  bottomCallout: {
    heading: "Butuh Website dengan Fitur Khusus?",
    subtext:
      "Kami juga mengembangkan aplikasi web dan sistem digital yang disesuaikan dengan kebutuhan bisnis Anda.",
    buttonText: "Diskusikan Kebutuhan Anda",
    href: "#kontak",
  },
};

export const closingCtaData = {
  eyebrow: "PROYEK SELANJUTNYA DIMULAI DI SINI",
  titlePart1: "Punya Ide Website?",
  titleAccent: "Mari Wujudkan.",
  description:
    "Bangun kehadiran digital yang lebih profesional bersama LiniWeb. Ceritakan kebutuhan bisnis Anda, dan mari temukan solusi website yang tepat.",
  primaryCta: "Konsultasi Gratis",
  secondaryCta: "Lihat Portofolio",
};

export const transitionStripData = {
  leftText: "LINIWEB / DIGITAL DEVELOPMENT STUDIO",
  rightText: "LET'S BUILD SOMETHING MEANINGFUL",
};

export const footerData = {
  layerA: {
    brandSubtitle: "DIGITAL DEVELOPMENT STUDIO",
    headlinePart1: "Membangun Website",
    headlinePart2: "yang Jelas, Tepat, dan",
    headlineAccent: "Berdampak",
    description:
      "LiniWeb membantu bisnis membangun kehadiran digital yang lebih profesional melalui website modern, cepat, dan dirancang dengan perhatian pada detail.",
    ctaText: "Konsultasi Gratis",
    watermarkText: "LINIWEB",
  },
  columns: [
    {
      title: "TENTANG LINIWEB",
      links: [
        { label: "Tentang Kami", href: "/#tentang-kami" },
        { label: "Portofolio", href: "/portofolio" },
        { label: "Layanan", href: "/#layanan" },
        { label: "Artikel", href: "/artikel" },
        { label: "Kontak", href: "#kontak" },
      ],
    },
    {
      title: "LAYANAN",
      links: [
        { label: "Website Company Profile", href: "#" },
        { label: "Landing Page", href: "#" },
        { label: "Website E-Commerce", href: "#" },
        { label: "Aplikasi Web Kustom", href: "#" },
      ],
    },
    {
      title: "PORTOFOLIO",
      links: [
        { label: "Studio Noirva", href: "#" },
        { label: "Arvena", href: "#" },
        { label: "Galerya Living", href: "#" },
        { label: "Noirel Studio", href: "#" },
      ],
    },
    {
      title: "INFORMASI",
      links: [
        { label: "FAQ", href: "#" },
        { label: "Proses Kerja", href: "#" },
        { label: "Ringkasan Harga", href: "#" },
        { label: "Kebijakan Privasi", href: "#" },
        { label: "Syarat & Ketentuan", href: "#" },
      ],
    },
    {
      title: "HUBUNGI KAMI",
      links: [
        { label: "mail@liniweb.site", href: "mailto:mail@liniweb.site", icon: "mail" },
        { label: "www.liniweb.site", href: "https://www.liniweb.site", icon: "globe" },
        { label: "Instagram: @liniweb.id", href: "https://instagram.com/liniweb.id", icon: "instagram" },
        { label: "Surabaya, Indonesia", href: "#", icon: "map-pin" },
        { label: "WhatsApp Consultation", href: "https://wa.me/", icon: "message-circle" },
      ],
    },
  ] as FooterColumn[],
  consultationStrip: {
    heading: "Punya proyek yang ingin didiskusikan?",
    subtext:
      "Hubungi kami untuk mulai merancang solusi digital yang sesuai dengan bisnis Anda.",
    buttonText: "Mulai Konsultasi",
    href: "#kontak",
  },
  bottomBar: {
    copyright: "© 2026 LiniWeb. All rights reserved.",
    links: [
      { label: "Kebijakan Privasi", href: "#" },
      { label: "Syarat & Ketentuan", href: "#" },
      { label: "Sitemap", href: "#" },
    ],
  },
};

