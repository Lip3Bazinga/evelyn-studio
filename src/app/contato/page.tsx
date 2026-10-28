import type { Metadata } from "next";
import { ArrowUpRight, Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaButton from "@/components/CtaButton";
import { Reveal } from "@/components/SectionReveal";
import { getWhatsAppUrl, siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/contato" },
  title: "Contato",
  description: "Entre em contato com o Evelyn Studio de Dança. Endereço, telefone e WhatsApp.",
};

const mapaUrl = `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.address.replace("—", ","))}&output=embed`;
const rotaUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(siteConfig.address.replace("—", ","))}`;

export default function ContatoPage() {
  const cards = [
    { icone: MapPin, cor: "var(--magenta)", titulo: "Endereço", texto: siteConfig.address, link: rotaUrl, acao: "Como chegar" },
    {
      icone: Phone,
      cor: "var(--laranja)",
      titulo: "Telefone",
      texto: siteConfig.phone,
      link: `tel:+55${siteConfig.phone.replace(/\D/g, "")}`,
      acao: "Ligar agora",
    },
    {
      icone: Clock,
      cor: "var(--violeta)",
      titulo: "Horário",
      texto: siteConfig.horarios.map((h) => `${h.dias}: ${h.horas}`).join("\n"),
    },
  ];

  return (
    <PageLayout>
      <PageHero
        eyebrow="Contato"
        titulo={["Bora", { texto: "conversar?", className: "serif-accent text-gradient" }]}
        descricao="Tire suas dúvidas, agende uma aula experimental ou venha conhecer o estúdio. A resposta mais rápida é pelo WhatsApp."
      >
        <CtaButton href={getWhatsAppUrl("Olá! Gostaria de informações sobre o Evelyn Studio de Dança.")} external>
          <MessageCircle size={19} /> Falar no WhatsApp
        </CtaButton>
        <CtaButton href={siteConfig.instagram} external variant="glass">
          Instagram <ArrowUpRight size={18} />
        </CtaButton>
      </PageHero>

      <section className="pb-24">
        <div className="shell">
          <ul className="grid gap-4 md:grid-cols-3">
            {cards.map((c, i) => (
              <Reveal as="li" key={c.titulo} delay={i * 0.08}>
                <div className="h-full rounded-[2rem]">
                  <div className="glass flex h-full flex-col rounded-[2rem] p-7">
                    <span className="grid size-14 place-items-center rounded-2xl text-white" style={{ background: c.cor }}>
                      <c.icone size={24} />
                    </span>
                    <h2 className="display mt-6 text-2xl text-tinta">{c.titulo}</h2>
                    <p className="mt-2 whitespace-pre-line leading-relaxed text-nevoa">{c.texto}</p>
                    {c.link && (
                      <a
                        href={c.link}
                        target={c.link.startsWith("http") ? "_blank" : undefined}
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-semibold text-tinta underline decoration-2 underline-offset-4"
                        style={{ textDecorationColor: c.cor }}
                      >
                        {c.acao} <ArrowUpRight size={15} />
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>

          <Reveal className="mt-6">
            <div className="overflow-hidden rounded-[2.5rem] border border-tinta/10 bg-white/50 p-2">
              <iframe
                title={`Mapa — ${siteConfig.address}`}
                src={mapaUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="aspect-[4/3] w-full rounded-[2.1rem] border-0 saturate-[1.15] md:aspect-[21/9]"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
