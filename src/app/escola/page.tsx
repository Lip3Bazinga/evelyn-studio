import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import CtaButton from "@/components/CtaButton";
import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "A Escola",
  description:
    "Conheça a história, a filosofia e o espaço do Evelyn Studio de Dança em Franca, SP.",
};

export default function EscolaPage() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow text-center">
          <h1 className="heading-1 text-profundidade mb-4">A Escola</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Um espaço criado para transformar vidas através da dança
          </p>
        </div>
      </section>

      {/* Historia */}
      <SectionReveal className="section-padding">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="heading-2 text-profundidade mb-4">Nossa história</h2>
            <p className="text-muted leading-relaxed mb-4">
              O Evelyn Studio de Dança nasceu do sonho de democratizar o acesso
              à dança em Franca e região. Há mais de uma década, o estúdio
              forma bailarinos, artistas e pessoas que descobriram na dança uma
              forma de expressão e transformação pessoal.
            </p>
            <p className="text-muted leading-relaxed">
              Desde o primeiro dia, o compromisso é o mesmo: oferecer ensino de
              qualidade em um ambiente acolhedor, onde cada aluno é visto como
              único e sua evolução é celebrada a cada passo.
            </p>
          </div>
          <div className="aspect-[4/3] rounded-xl img-placeholder order-first md:order-last">
            Foto histórica do estúdio
          </div>
        </div>
      </SectionReveal>

      {/* Filosofia */}
      <SectionReveal className="section-padding bg-bastidor">
        <div className="container-narrow">
          <h2 className="heading-2 text-profundidade mb-8 text-center">
            Nossa filosofia
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                titulo: "Técnica com sensibilidade",
                texto:
                  "Acreditamos que a técnica é o alicerce, mas a sensibilidade é o que transforma movimento em arte. Cada aula equilibra rigor e expressão.",
              },
              {
                titulo: "Respeito ao tempo de cada um",
                texto:
                  "Cada aluno tem seu ritmo. Nossas turmas são organizadas por nível e faixa etária para garantir que todos evoluam com segurança e prazer.",
              },
              {
                titulo: "Dança como formação",
                texto:
                  "Mais do que passos, ensinamos disciplina, trabalho em equipe, autoconfiança e expressão emocional. A dança forma pessoas inteiras.",
              },
            ].map((item) => (
              <div key={item.titulo} className="bg-palco rounded-xl p-6">
                <h3 className="font-display text-xl font-medium text-profundidade mb-3">
                  {item.titulo}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionReveal>

      {/* Espaco */}
      <SectionReveal className="section-padding">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-xl img-placeholder">
            Foto da sala principal
          </div>
          <div>
            <h2 className="heading-2 text-profundidade mb-4">Nosso espaço</h2>
            <p className="text-muted leading-relaxed mb-4">
              O estúdio conta com salas amplas e climatizadas, piso adequado
              para dança, espelhos de parede inteira, barras fixas e móveis, e
              sistema de som profissional.
            </p>
            <p className="text-muted leading-relaxed">
              Um ambiente cuidadosamente preparado para que cada aula aconteça
              com segurança, conforto e inspiração.
            </p>
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="bg-impulso section-padding text-center text-palco">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-3xl font-medium mb-4">
            Venha nos conhecer
          </h2>
          <p className="text-palco/75 mb-8">
            Agende uma visita ao nosso espaço e sinta a energia do estúdio
          </p>
          <CtaButton
            href={getWhatsAppUrl(
              "Olá! Gostaria de agendar uma visita ao Evelyn Studio de Dança."
            )}
            external
          >
            <MessageCircle size={18} />
            Agendar visita
          </CtaButton>
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
