import type { Metadata } from "next";
import Image from "next/image";
import { Award, HeartHandshake, Sparkles, Timer } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaFinal from "@/components/CtaFinal";
import Foto from "@/components/Foto";
import SplitText from "@/components/SplitText";
import ScrollText from "@/components/ScrollText";
import Aurora from "@/components/Aurora";
import { Reveal } from "@/components/SectionReveal";
import { foto } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/escola" },
  title: "A Escola",
  description: "Conheça a história, a filosofia e o espaço do Evelyn Studio de Dança em Franca, SP.",
};

const rad = foto("filosofia/03-rad-logo.webp", "Logo da Royal Academy of Dance");

const espaco = [
  { img: foto("filosofia/09.jpg", "Sala de aula iluminada com espelhos e barras"), classe: "md:col-span-2 md:row-span-2" },
  { img: foto("filosofia/04-944ba277-5da3-4029-b9a4-da9f62aeb853.jpg", "Fachada do Evelyn Studio de Dança"), classe: "" },
  { img: foto("filosofia/01.jpg", "Recepção do estúdio com bancos e plantas"), classe: "" },
  { img: foto("filosofia/06.jpg", "Área de convivência com mesas e painel colorido"), classe: "md:col-span-2" },
  { img: foto("filosofia/07.jpg", "Pátio coberto com deck de madeira"), classe: "" },
  { img: foto("filosofia/10-f6e71dc2-79af-4727-a9a8-2df43fe45693.jpg", "Sala de aula com espelhos e piso de dança"), classe: "" },
];

const filosofia = [
  {
    icone: Sparkles,
    cor: "var(--magenta)",
    titulo: "Técnica com sensibilidade",
    texto:
      "Acreditamos que a técnica é o alicerce, mas a sensibilidade é o que transforma movimento em arte. Cada aula equilibra rigor e expressão.",
  },
  {
    icone: Timer,
    cor: "var(--laranja)",
    titulo: "Respeito ao tempo de cada um",
    texto:
      "Cada aluno tem seu ritmo. Nossas turmas são organizadas por nível e faixa etária para garantir que todos evoluam com segurança e prazer.",
  },
  {
    icone: HeartHandshake,
    cor: "var(--violeta)",
    titulo: "Dança como formação",
    texto:
      "Mais do que passos, ensinamos disciplina, trabalho em equipe, autoconfiança e expressão emocional. A dança forma pessoas inteiras.",
  },
];

export default function EscolaPage() {
  const capa = foto("filosofia/02-img-9115.jpg", "Professora de ballet ajustando a postura de uma aluna na barra");

  return (
    <PageLayout>
      <PageHero
        eyebrow="A Escola"
        titulo={["Um palco", { texto: "para crescer.", className: "serif-accent text-gradient" }]}
        descricao="Um espaço criado para transformar vidas através da dança — com técnica, acolhimento e muita alegria."
        lateral={
          <div className="relative mx-auto aspect-[4/3.4] w-full max-w-xl">
            <div className="rounded-[2.5rem] absolute inset-0 overflow-hidden shadow-[0_30px_60px_-35px_rgba(27,10,42,.35)]">
              <Image src={capa.src} alt={capa.alt} fill preload sizes="(min-width:1024px) 45vw, 90vw" className="object-cover" />
            </div>
            <div className="glass absolute -bottom-6 left-4 flex max-w-xs items-center gap-4 rounded-3xl p-4 md:-left-8">
              <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white">
                <Image src={rad.src} alt={rad.alt} width={rad.width} height={rad.height} className="h-6 w-auto" />
              </span>
              <p className="text-sm leading-snug text-tinta/80">
                Formação pela <strong className="text-tinta">Royal Academy of Dance</strong>, Grade 8 com nota máxima.
              </p>
            </div>
          </div>
        }
      />

      {/* História */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow text-magenta-texto">Nossa história</p>
            <Reveal className="mt-8 hidden lg:block">
              <div className="glass rounded-[2rem] p-7">
                <Award className="text-violeta" size={28} />
                <p className="mt-4 text-nevoa leading-relaxed">
                  Evelyn realizou os exames da Royal Academy of Dance entre 1994 e 1998, concluindo o Grade 8 com
                  nota máxima.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <ScrollText
              className="display display-sm leading-[1.12] text-tinta"
              texto="O Evelyn Studio de Dança nasceu do sonho de democratizar o acesso à dança em Franca e região. Há mais de uma década, o estúdio forma bailarinos, artistas e pessoas que descobriram na dança uma forma de expressão e transformação pessoal."
            />
            <Reveal className="mt-8">
              <p className="max-w-2xl text-lg leading-relaxed text-nevoa">
                Desde o primeiro dia, o compromisso é o mesmo: oferecer ensino de qualidade em um ambiente acolhedor,
                onde cada aluno é visto como único e sua evolução é celebrada a cada passo.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Filosofia */}
      <section className="relative isolate overflow-hidden bg-tinta py-24 text-white md:py-32">
        <Aurora preset="escuro" />
        <div className="shell relative z-10">
          <p className="eyebrow text-sol">Nossa filosofia</p>
          <SplitText
            className="display display-md mt-5 max-w-3xl"
            linhas={["Três passos", { texto: "que guiam cada aula.", className: "serif-accent text-gradient-sol" }]}
          />
          <ul className="mt-14 grid gap-5 md:grid-cols-3">
            {filosofia.map((f, i) => (
              <Reveal as="li" key={f.titulo} delay={i * 0.1}>
                <div className="h-full rounded-[2rem]">
                  <div className="glass-dark h-full rounded-[2rem] p-8">
                    <div className="flex items-center justify-between">
                      <span className="grid size-14 place-items-center rounded-2xl" style={{ background: f.cor }}>
                        <f.icone size={24} />
                      </span>
                      <span className="display text-outline text-6xl text-white/30">0{i + 1}</span>
                    </div>
                    <h3 className="display mt-8 text-2xl">{f.titulo}</h3>
                    <p className="mt-3 leading-relaxed text-white/65">{f.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Espaço */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-laranja-texto">Nosso espaço</p>
              <SplitText
                className="display display-md mt-5 text-tinta"
                linhas={["Feito para", { texto: "você se mover.", className: "serif-accent" }]}
              />
            </div>
            <p className="text-lg leading-relaxed text-nevoa">
              Salas amplas e climatizadas, piso adequado para dança, espelhos de parede inteira, barras fixas e
              móveis e som profissional. Um ambiente preparado para que cada aula aconteça com segurança, conforto
              e inspiração.
            </p>
          </div>

          <ul className="mt-14 grid auto-rows-[11rem] grid-cols-2 gap-3 md:auto-rows-[14rem] md:grid-cols-4 md:gap-4">
            {espaco.map(({ img, classe }, i) => (
              <Reveal as="li" key={img.src} delay={i * 0.06} className={`group relative overflow-hidden rounded-[1.6rem] ${classe}`}>
                <div className="absolute inset-0">
                  <Foto
                    imagem={img}
                    sizes="(min-width: 768px) 40vw, 50vw"
                    className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaFinal
        titulo={["Venha sentir", { texto: "a energia do estúdio.", className: "serif-accent" }]}
        texto="Agende uma visita ao nosso espaço — ou já marque sua aula experimental gratuita."
        mensagem="Olá! Gostaria de agendar uma visita ao Evelyn Studio de Dança."
        botao="Agendar visita"
      />
    </PageLayout>
  );
}
