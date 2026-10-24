import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { modalidades } from "@/lib/data";

export const metadata: Metadata = {
  title: "Modalidades",
  description:
    "Ballet clássico, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica. Encontre a dança certa para você no Evelyn Studio.",
};

export default function ModalidadesPage() {
  return (
    <PageLayout>
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow text-center">
          <h1 className="heading-1 text-profundidade mb-4">Modalidades</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Cada dança é um universo. Explore nossas modalidades e encontre
            aquela que move você.
          </p>
        </div>
      </section>

      <SectionReveal className="section-padding">
        <div className="container-narrow space-y-16">
          {modalidades.map((mod, i) => (
            <div
              key={mod.slug}
              className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center ${
                i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="aspect-[16/10] rounded-xl img-placeholder">
                {mod.nome}
              </div>
              <div>
                <h2 className="heading-2 text-profundidade mb-2">
                  {mod.nome}
                </h2>
                <p className="text-sm text-impulso font-medium mb-4">
                  {mod.faixaEtaria}
                </p>
                <p className="text-muted leading-relaxed mb-5">
                  {mod.descricao}
                </p>
                <Link
                  href={`/modalidades/${mod.slug}`}
                  className="inline-flex items-center gap-2 text-impulso font-medium text-sm hover:gap-3 transition-all"
                >
                  Saiba mais sobre {mod.nome} <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
