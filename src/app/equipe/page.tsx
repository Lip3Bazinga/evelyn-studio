import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import { equipe } from "@/lib/data";

export const metadata: Metadata = {
  title: "Equipe",
  description:
    "Conheça os professores e a equipe do Evelyn Studio de Dança em Franca, SP.",
};

export default function EquipePage() {
  return (
    <PageLayout>
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow text-center">
          <h1 className="heading-1 text-profundidade mb-4">Nossa Equipe</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Professores dedicados, apaixonados pela dança e pelo ensino
          </p>
        </div>
      </section>

      <SectionReveal className="section-padding">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-10">
          {equipe.map((membro) => (
            <div
              key={membro.nome}
              className="flex gap-6 bg-bastidor rounded-xl p-6"
            >
              <div className="w-20 h-20 rounded-full img-placeholder flex-shrink-0 border-2 border-veu">
                {membro.nome.charAt(0)}
              </div>
              <div>
                <h2 className="font-display text-xl font-medium text-profundidade">
                  {membro.nome}
                </h2>
                <p className="text-sm text-impulso font-medium mb-3">
                  {membro.cargo}
                </p>
                <p className="text-sm text-muted leading-relaxed">
                  {membro.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
