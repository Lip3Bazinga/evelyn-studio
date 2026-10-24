import type { Metadata } from "next";
import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import SectionReveal from "@/components/SectionReveal";
import CtaButton from "@/components/CtaButton";
import { siteConfig, getWhatsAppUrl } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Evelyn Studio de Dança. Endereço, telefone e WhatsApp.",
};

const infoCards = [
  {
    icon: MapPin,
    titulo: "Endereço",
    texto: siteConfig.address,
  },
  {
    icon: Phone,
    titulo: "Telefone",
    texto: siteConfig.phone,
  },
  {
    icon: Clock,
    titulo: "Horário de funcionamento",
    texto: "Segunda a sexta: 8h às 21h\nSábados: 8h às 12h",
  },
];

export default function ContatoPage() {
  return (
    <PageLayout>
      <section className="bg-bastidor section-padding pt-24 md:pt-32">
        <div className="container-narrow text-center">
          <h1 className="heading-1 text-profundidade mb-4">Contato</h1>
          <p className="text-muted text-lg max-w-xl mx-auto">
            Estamos prontos para receber você. Entre em contato e agende sua
            visita.
          </p>
        </div>
      </section>

      <SectionReveal className="section-padding">
        <div className="container-narrow grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {infoCards.map((card) => (
            <div
              key={card.titulo}
              className="bg-bastidor rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-full bg-impulso/10 text-impulso mx-auto mb-4 flex items-center justify-center">
                <card.icon size={22} />
              </div>
              <h2 className="font-display text-lg font-medium text-profundidade mb-2">
                {card.titulo}
              </h2>
              <p className="text-sm text-muted whitespace-pre-line">
                {card.texto}
              </p>
            </div>
          ))}
        </div>

        {/* Map placeholder */}
        <div className="container-narrow">
          <div className="aspect-[21/9] rounded-xl img-placeholder bg-veu text-muted">
            Mapa do Google — Rua General Teles, 1900, Franca/SP
          </div>
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="bg-impulso section-padding text-center text-palco">
        <div className="max-w-lg mx-auto">
          <h2 className="font-display text-3xl font-medium mb-4">
            Fale diretamente conosco
          </h2>
          <p className="text-palco/75 mb-8">
            Tire suas dúvidas, agende uma aula experimental ou faça uma visita
            ao estúdio.
          </p>
          <CtaButton
            href={getWhatsAppUrl(
              "Olá! Gostaria de informações sobre o Evelyn Studio de Dança."
            )}
            external
          >
            <MessageCircle size={18} />
            Fale no WhatsApp
          </CtaButton>
        </div>
      </SectionReveal>
    </PageLayout>
  );
}
