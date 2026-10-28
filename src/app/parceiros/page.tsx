import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaFinal from "@/components/CtaFinal";
import { Reveal } from "@/components/SectionReveal";
import { parceiros } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/parceiros" },
  title: "Parceiros",
  description: "Empresas e profissionais que caminham ao lado do Evelyn Studio de Dança.",
};

export default function ParceirosPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Parceiros"
        titulo={["Quem caminha", { texto: "ao nosso lado.", className: "serif-accent text-gradient" }]}
        descricao="Empresas e profissionais que acreditam na dança e apoiam o Evelyn Studio."
      />

      <section className="pb-16">
        <ul className="shell grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {parceiros.map(({ nome, logo }, i) => (
            <Reveal as="li" key={nome} delay={(i % 5) * 0.06}>
              <div className="h-full rounded-[1.8rem]">
                <div className="glass group flex h-full flex-col items-center justify-between gap-4 rounded-[1.8rem] p-5">
                  <div className="grid aspect-[3/2] w-full place-items-center">
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={logo.width}
                      height={logo.height}
                      sizes="(min-width: 1024px) 15vw, (min-width: 768px) 28vw, 45vw"
                      className="max-h-full w-auto max-w-full object-contain grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <p className="text-center text-xs font-semibold leading-snug text-nevoa">{nome}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaFinal
        titulo={["Quer ser", { texto: "parceiro?", className: "serif-accent" }]}
        texto="Fale com a gente pelo WhatsApp e vamos conversar."
        mensagem="Olá! Gostaria de conversar sobre uma parceria com o Evelyn Studio de Dança."
        botao="Falar sobre parceria"
      />
    </PageLayout>
  );
}
