import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { siteConfig } from "@/lib/data";
import "./globals.css";

// Fraunces variável (peso, tamanho óptico e "suavidade") — títulos delicados, com itálico
const fraunces = localFont({
  src: [
    { path: "../fonts/fraunces-latin-full-normal.woff2", style: "normal" },
    { path: "../fonts/fraunces-latin-full-italic.woff2", style: "italic" },
  ],
  weight: "100 900",
  variable: "--font-fraunces",
  display: "swap",
});

// Manrope variável — texto corrido, leve e legível
const manrope = localFont({
  src: [{ path: "../fonts/manrope-latin-wght-normal.woff2", style: "normal" }],
  weight: "200 800",
  variable: "--font-manrope",
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
    <html lang="pt-BR" className={`${fraunces.variable} ${manrope.variable}`}>
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
