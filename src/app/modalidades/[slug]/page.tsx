import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Check, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import CtaButton from "@/components/CtaButton";
import { modalidades, getWhatsAppModalidade } from "@/lib/data";

export function generateStaticParams() {
  return modalidades.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const mod = modalidades.find((m) => m.slug === slug);
  if (!mod) return { title: "Modalidade" };
  return {
    title: mod.nome,
    description: mod.descricao,
  };
}

export default async function ModalidadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const mod = modalidades.find((m) => m.slug === slug);

  if (!mod) notFound();

  return (
    <PageLayout>
      {/* Hero */}
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-sm text-impulso font-medium mb-2">
              {mod.faixaEtaria}
            </p>
            <h1 className="heading-1 text-profundidade mb-4">{mod.nome}</h1>
            <p className="text-muted text-lg leading-relaxed mb-8">
              {mod.tagline}
            </p>
            <CtaButton
              href={getWhatsAppModalidade(mod.nome)}
              external
            >
              <MessageCircle size={18} />
              Agendar aula experimental
            </CtaButton>
          </div>
          <div className="aspect-[4/3] rounded-xl img-placeholder">
            {mod.nome}
          </div>
        </div>
      </section>

      {/* About */}
      <SectionReveal className="section-padding">
        <div className="container-narrow max-w-3xl">
          <h2 className="heading-2 text-profundidade mb-6">
            Sobre a modalidade
          </h2>
          <p className="text-muted leading-relaxed text-lg">{mod.descricao}</p>
        </div>
      </SectionReveal>

      {/* Benefits */}
      <SectionReveal className="section-padding bg-bastidor">
        <div className="container-narrow max-w-3xl">
          <h2 className="heading-2 text-profundidade mb-8">
            O que você vai desenvolver
          </h2>
          <ul className="space-y-4">
            {mod.beneficios.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 bg-palco rounded-lg p-4"
              >
                <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-impulso/10 text-impulso flex items-center justify-center">
                  <Check size={14} />
                </span>
                <span className="text-profundidade">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="bg-impulso section-padding text-center text-palco">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-3xl font-medium mb-4">
            Experimente {mod.nome}
          </h2>
          <p className="text-palco/75 mb-8">
            Agende uma aula experimental gratuita e descubra como{" "}
            {mod.nome.toLowerCase()} pode transformar o seu dia a dia.
          </p>
          <CtaButton
            href={getWhatsAppModalidade(mod.nome)}
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
