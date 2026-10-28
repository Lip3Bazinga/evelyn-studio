import type { MetadataRoute } from "next";
import { modalidades, siteConfig } from "@/lib/data";
import { espetaculos } from "@/lib/images";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;
  const fixas = [
    { path: "", priority: 1 },
    { path: "/modalidades", priority: 0.9 },
    { path: "/locacao-de-cenarios", priority: 0.9 },
    { path: "/escola", priority: 0.8 },
    { path: "/equipe", priority: 0.7 },
    { path: "/espetaculos", priority: 0.7 },
    { path: "/contato", priority: 0.8 },
    { path: "/infinita-danca", priority: 0.6 },
    { path: "/parceiros", priority: 0.4 },
  ];

  return [
    ...fixas.map((p) => ({ url: url(p.path), priority: p.priority })),
    ...modalidades.map((m) => ({ url: url(`/modalidades/${m.slug}`), priority: 0.8 })),
    ...espetaculos.map((e) => ({ url: url(`/espetaculos/${e.slug}`), priority: 0.5 })),
  ];
}
