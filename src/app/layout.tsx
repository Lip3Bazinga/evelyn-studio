import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const cormorant = localFont({
  src: [
    { path: "../fonts/cormorant-garamond-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-400-italic.woff2", weight: "400", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/cormorant-garamond-latin-500-italic.woff2", weight: "500", style: "italic" },
    { path: "../fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

const nunito = localFont({
  src: [
    { path: "../fonts/nunito-sans-latin-300-normal.woff2", weight: "300", style: "normal" },
    { path: "../fonts/nunito-sans-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "../fonts/nunito-sans-latin-500-normal.woff2", weight: "500", style: "normal" },
    { path: "../fonts/nunito-sans-latin-600-normal.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Evelyn Studio de Dança — Franca, SP",
    template: "%s | Evelyn Studio de Dança",
  },
  description:
    "Estúdio de dança referência em Franca, SP. Ballet, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica para todas as idades.",
  keywords: [
    "dança",
    "ballet",
    "jazz",
    "contemporâneo",
    "Franca",
    "São Paulo",
    "estúdio de dança",
    "aulas de dança",
  ],
  openGraph: {
    title: "Evelyn Studio de Dança",
    description:
      "Onde cada movimento conta uma história. Ballet, jazz, contemporâneo e mais em Franca, SP.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${nunito.variable}`}
    >
      <body className="min-h-dvh flex flex-col">
        {children}
      </body>
    </html>
  );
}
