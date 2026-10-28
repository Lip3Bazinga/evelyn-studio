import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";
import "./globals.css";

// Bricolage Grotesque variável (peso, largura e tamanho óptico) — a voz do site
const bricolage = localFont({
  src: [
    { path: "../fonts/bricolage-grotesque-latin-standard-normal.woff2", style: "normal" },
    { path: "../fonts/bricolage-grotesque-latin-ext-standard-normal.woff2", style: "normal" },
  ],
  weight: "200 800",
  variable: "--font-bricolage",
  display: "swap",
  declarations: [{ prop: "font-stretch", value: "75% 100%" }],
});

// Instrument Serif itálico — o "suspiro" poético nos títulos
const instrument = localFont({
  src: [
    { path: "../fonts/instrument-serif-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/instrument-serif-latin-400-normal.woff2", weight: "400", style: "normal" },
  ],
  variable: "--font-instrument",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Evelyn Studio de Dança — Franca, SP",
    template: "%s | Evelyn Studio de Dança",
  },
  description: siteConfig.description,
  keywords: [
    "dança",
    "ballet",
    "jazz",
    "contemporâneo",
    "hip hop",
    "sapateado",
    "ginástica rítmica",
    "Franca",
    "estúdio de dança",
    "aulas de dança",
  ],
  openGraph: {
    siteName: "Evelyn Studio de Dança",
    title: "Evelyn Studio de Dança",
    description:
      "Onde cada movimento conta uma história. Ballet, jazz, contemporâneo e mais em Franca, SP.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#fff8f2",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${bricolage.variable} ${instrument.variable}`}>
      <body className="min-h-dvh flex flex-col">
        <a href="#conteudo" className="pular">
          Pular para o conteúdo
        </a>
        <Header />
        {children}
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
