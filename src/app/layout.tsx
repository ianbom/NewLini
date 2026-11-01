import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "LiniWeb — Website Profesional untuk Bisnis yang Siap Tumbuh",
  description:
    "Wujudkan website modern, cepat, dan responsif yang membantu bisnis Anda tampil lebih profesional dan mudah ditemukan pelanggan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable} ${playfair.variable}`}>
      <body className="bg-brand-softWhite text-brand-navy font-sans antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
