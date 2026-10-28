import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaFinal from "@/components/CtaFinal";
import ScrollText from "@/components/ScrollText";
import { Reveal } from "@/components/SectionReveal";
import { foto } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/infinita-danca" },
  title: "Projeto Social Infinita Dança",
  description: "Conheça o Infinita Dança, projeto social do Evelyn Studio de Dança que leva a dança a crianças.",
};

const img = foto("infinita-danca/01.jpg", "Professora com um grupo de crianças do projeto Infinita Dança");

export default function InfinitaDancaPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow="Projeto social"
        cor="#ff7a2f"
        titulo={["Infinita", { texto: "Dança.", className: "serif-accent text-gradient-sol" }]}
        descricao="Uma história que começou na menor sala de aula — e mudou a forma como o estúdio enxerga o próprio trabalho."
        lateral={
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md">
            <div className="rounded-[2.5rem] absolute inset-0 overflow-hidden shadow-[0_30px_60px_-35px_rgba(27,10,42,.35)]">
              <Image src={img.src} alt={img.alt} fill preload sizes="(min-width:1024px) 35vw, 85vw" className="object-cover" />
            </div>
            <span className="glass absolute -left-4 bottom-10 rounded-full px-5 py-3 font-semibold text-tinta">
              desde 2020 ✦
            </span>
          </div>
        }
      />

      <section className="section pt-8">
        <div className="shell max-w-4xl">
          <ScrollText
            className="display display-sm leading-[1.15] text-tinta"
            texto="Em 2020, a humanidade se depara com um momento de muita dor, desafios, reflexões sobre valores e prioridades — mas, na mesma proporção, a oportunidade de mudar, aprender, crescer e, principalmente, SER e FAZER diferente."
          />

          <div className="mt-14 space-y-6 text-lg leading-relaxed text-nevoa md:text-xl">
            <Reveal>
              <p>
                No ano de 2020, além das aulas on-line, fui recebida em diversos lares para aulas presenciais
                particulares. Quantas descobertas técnicas e emocionais pude perceber neste formato de trabalho, algo
                que foi simplesmente engrandecedor.
              </p>
            </Reveal>
            <Reveal>
              <p>
                Normalmente, para assumir um compromisso de aulas nesse formato, é necessário um poder aquisitivo
                favorável para o momento em que estávamos vivendo, até que me foi mostrado o contrário. Cheguei em um
                lar muito simples, onde encontrei uma rainha em seu trono de rodas e uma princesa, que me receberam
                como se eu fosse a rainha.
              </p>
            </Reveal>
          </div>

          <Reveal className="my-16">
            <blockquote
              className="relative overflow-hidden rounded-[2.5rem] p-10 text-white md:p-14"
              style={{ background: "var(--grad-sol)" }}
            >
              <span aria-hidden className="serif-accent absolute -left-2 -top-16 text-[14rem] leading-none text-white/25">
                “
              </span>
              <p className="serif-accent relative text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.1]">
                Foi a melhor aula da minha vida, na menor sala de aula em que já estive. Nunca chorei tanto ao terminar
                uma aula.
              </p>
            </blockquote>
          </Reveal>

          <Reveal>
            <p className="text-lg leading-relaxed text-nevoa md:text-xl">
              Ela me fez perceber o valor e a importância do meu trabalho na vida daquela criança. Naquele momento,
              percebi que era a hora de ampliar a minha maneira de trabalhar, de olhar para tudo que a dança
              proporcionou na minha vida, de forma a dividir meu conhecimento e, ao mesmo tempo, poder dar a
              oportunidade de aprendizado para outras crianças. Assim, surgiu o projeto social{" "}
              <strong className="text-gradient-sol font-bold">INFINITA DANÇA</strong>.
            </p>
            <p className="mt-6 font-semibold text-tinta">— Evelyn Branquinho</p>
          </Reveal>
        </div>
      </section>

      <CtaFinal
        titulo={["A dança", { texto: "é para todos.", className: "serif-accent" }]}
        texto="Quer saber mais sobre o Infinita Dança? Fale com a gente pelo WhatsApp."
        mensagem="Olá! Gostaria de saber mais sobre o projeto social Infinita Dança."
        botao="Quero saber mais"
      />
    </PageLayout>
  );
}
