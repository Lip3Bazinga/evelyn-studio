import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { espetaculos } from "@/lib/data";

export const metadata: Metadata = {
  title: "Espetáculos",
  description:
    "Veja os espetáculos e apresentações do Evelyn Studio de Dança ao longo dos anos.",
};

export default function EspetaculosPage() {
  return (
    <PageLayout>
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow text-center">
          <h1 className="heading-1 text-profundidade mb-4">Espetáculos</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            O palco é onde tudo se encontra. Veja nossa trajetória de
            apresentações e espetáculos.
          </p>
        </div>
      </section>

      <SectionReveal className="section-padding">
        <div className="container-narrow max-w-3xl space-y-12">
          {espetaculos.map((show, i) => (
            <div key={show.ano} className="relative pl-8 md:pl-12">
              {/* Timeline line */}
              {i < espetaculos.length - 1 && (
                <div className="absolute left-3 md:left-5 top-8 bottom-0 w-px bg-veu" />
              )}
              {/* Timeline dot */}
              <div className="absolute left-0.5 md:left-2.5 top-1 w-5 h-5 rounded-full bg-impulso/20 border-2 border-impulso flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-impulso" />
              </div>

              <div className="bg-bastidor rounded-xl overflow-hidden">
                <div className="aspect-[21/9] img-placeholder">
                  {show.titulo}
                </div>
                <div className="p-6">
                  <span className="text-sm text-impulso font-medium">
                    {show.ano}
                  </span>
                  <h2 className="font-display text-xl font-medium text-profundidade mt-1 mb-3">
                    {show.titulo}
                  </h2>
                  <p className="text-sm text-muted leading-relaxed">
                    {show.descricao}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
