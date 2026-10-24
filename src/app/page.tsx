import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import CtaButton from "@/components/CtaButton";
import { modalidades, equipe, getWhatsAppUrl } from "@/lib/data";

export default function HomePage() {
  return (
    <PageLayout>
      {/* ─── Hero ─── */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-bastidor overflow-hidden">
        {/* Decorative line */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 w-10 h-0.5 bg-impulso/40 rounded-full" />

        <div className="text-center px-6 max-w-2xl mx-auto relative z-10">
          <h1 className="heading-1 text-profundidade mb-5">
            Onde cada movimento conta uma história
          </h1>
          <p className="text-muted text-lg mb-10 max-w-md mx-auto leading-relaxed">
            Ballet, jazz, contemporâneo e mais. Descubra a modalidade que
            transforma o seu dia a dia.
          </p>
          <CtaButton
            href={getWhatsAppUrl(
              "Olá! Gostaria de agendar uma aula experimental no Evelyn Studio."
            )}
            external
          >
            <MessageCircle size={18} />
            Agende sua aula experimental
          </CtaButton>
        </div>

        {/* Background placeholder label */}
        <div className="absolute inset-0 flex items-end justify-center pb-8 pointer-events-none">
          <span className="text-xs text-profundidade/20">
            Foto ou vídeo de fundo do estúdio
          </span>
        </div>
      </section>

      {/* ─── Sobre (teaser) ─── */}
      <SectionReveal className="section-padding">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="aspect-[4/3] rounded-xl img-placeholder">
            Foto do estúdio
          </div>
          <div>
            <h2 className="heading-2 text-profundidade mb-4">
              A dança transforma
            </h2>
            <p className="text-muted leading-relaxed mb-6">
              Há mais de uma década, o Evelyn Studio é referência em dança na
              região de Franca. Um espaço onde técnica, arte e paixão se
              encontram em cada aula, formando bailarinos e transformando vidas
              pelo movimento.
            </p>
            <Link
              href="/escola"
              className="inline-flex items-center gap-2 text-impulso font-medium text-sm hover:gap-3 transition-all"
            >
              Conheça nossa história <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── Modalidades (grid) ─── */}
      <SectionReveal className="section-padding bg-bastidor">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-profundidade mb-2">Modalidades</h2>
            <p className="text-muted">Encontre a dança certa para você</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {modalidades.map((mod) => (
              <Link
                key={mod.slug}
                href={`/modalidades/${mod.slug}`}
                className="group bg-palco rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-[16/10] img-placeholder">
                  {mod.nome}
                </div>
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-profundidade group-hover:text-impulso transition-colors">
                    {mod.nome}
                  </h3>
                  <p className="text-sm text-muted mt-1">{mod.tagline}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/modalidades"
              className="inline-flex items-center gap-2 text-impulso font-medium text-sm hover:gap-3 transition-all"
            >
              Explore todas as modalidades <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── Equipe (preview) ─── */}
      <SectionReveal className="section-padding">
        <div className="container-narrow">
          <div className="text-center mb-10">
            <h2 className="heading-2 text-profundidade mb-2">Nossa equipe</h2>
            <p className="text-muted">
              Professores apaixonados pelo que fazem
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-10">
            {equipe.slice(0, 4).map((membro) => (
              <div key={membro.nome} className="text-center group">
                <div className="w-24 h-24 rounded-full img-placeholder mx-auto mb-3 border-2 border-bastidor group-hover:border-impulso transition-colors">
                  {membro.nome.charAt(0)}
                </div>
                <p className="text-sm font-medium text-profundidade">
                  {membro.nome}
                </p>
                <p className="text-xs text-muted mt-0.5">{membro.cargo}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/equipe"
              className="inline-flex items-center gap-2 text-impulso font-medium text-sm hover:gap-3 transition-all"
            >
              Conheça a equipe completa <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </SectionReveal>

      {/* ─── CTA final ─── */}
      <SectionReveal className="bg-impulso section-padding text-center text-palco">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-medium mb-4">
            Comece sua jornada na dança
          </h2>
          <p className="text-palco/75 mb-8">
            Agende uma aula experimental gratuita pelo WhatsApp e descubra como
            a dança pode transformar a sua vida.
          </p>
          <CtaButton
            href={getWhatsAppUrl(
              "Olá! Quero agendar uma aula experimental gratuita no Evelyn Studio!"
            )}
            external
            variant="primary"
          >
            <MessageCircle size={18} />
            Fale conosco no WhatsApp
          </CtaButton>
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
