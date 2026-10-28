import Entrada from "@/components/Entrada";
import type { Metadata } from "next";
import Image from "next/image";
import { ArrowDown, Brush, Download, Drama, Maximize, MessageCircle, Quote, Theater, Truck } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import CtaButton from "@/components/CtaButton";
import SplitText from "@/components/SplitText";
import CatalogoCenarios from "@/components/cenarios/CatalogoCenarios";
import { Reveal } from "@/components/SectionReveal";
import { getWhatsAppUrl } from "@/lib/data";
import { cenarios, locacao } from "@/lib/cenarios";
import { espetaculos } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/locacao-de-cenarios" },
  title: "Locação de Cenários",
  description: `${cenarios.length} cenários de palco pintados à mão, com cerca de ${locacao.altura} de altura por ${locacao.largura} de largura, disponíveis para locação em Franca/SP.`,
};

const mensagem = "Olá! Gostaria de um orçamento para locação de cenários do Evelyn Studio de Dança.";
const capa = cenarios.find((c) => c.slug === "castelo-pequena-sereia")!.painel;

const diferenciais = [
  {
    icone: Brush,
    titulo: "Pintados à mão",
    texto: "Painéis pintados por um artista francano — cada cenário é uma peça única, com profundidade e textura que a impressão não alcança.",
  },
  {
    icone: Maximize,
    titulo: "Grande formato",
    texto: `Cerca de ${locacao.altura} de altura por ${locacao.largura} de largura, em tecido ${locacao.tecido}: preenchem o fundo de um palco de teatro.`,
  },
  {
    icone: Drama,
    titulo: "Pensados para a cena",
    texto: "Vários painéis têm portas, janelas e passagens vazadas para os artistas entrarem e aparecerem em cena.",
  },
  {
    icone: Theater,
    titulo: "Aprovados no palco",
    texto: "Criados para os nossos próprios espetáculos e apresentados no palco do Teatro Municipal de Franca.",
  },
];

const passos = [
  { titulo: "Escolha o cenário", texto: "Navegue pelo catálogo abaixo ou baixe o PDF completo." },
  { titulo: "Consulte a data", texto: "Fale com a gente pelo WhatsApp com o cenário e a data do seu evento." },
  { titulo: "Combine o transporte", texto: "Somos um studio de dança, não uma transportadora: definimos juntos a melhor solução de frete." },
  { titulo: "Brilhe no palco", texto: "Monte o painel no seu varão e transforme a sua apresentação." },
];

const perguntas = [
  {
    p: "Qual o tamanho dos cenários?",
    r: `Os painéis têm aproximadamente ${locacao.altura} de altura por ${locacao.largura} de largura. A exceção é a Cidade dos Anões, com cerca de 6,60 m por 3 m de altura.`,
  },
  {
    p: "O varão acompanha o cenário?",
    r: "Não. O varão não acompanha — o painel precisa ser instalado na estrutura do seu palco. O cenário Ilhas Divertidamente usa um segundo tecido, que precisa de outro varão.",
  },
  {
    p: "Os objetos de cena estão inclusos?",
    r: "Apenas o painel. Elementos como os planetas de isopor do Céu Estrelado e da Galáxia, a escada da Galeria de Artes e as rampas do Cômodo Antigo não acompanham.",
  },
  {
    p: "Como funciona o transporte?",
    r: "Por sermos um studio de dança e não uma empresa de locação, trabalhamos junto com você na solução de transporte. O frete e o seguro são à parte do valor da locação.",
  },
  {
    p: "Todos são pintados?",
    r: "Sim, exceto o Mapa Múndi e a Floresta, que são impressos em malha. A Floresta acompanha 6 coxias.",
  },
];

export default function LocacaoDeCenariosPage() {
  const desde = Math.min(...espetaculos.map((e) => e.ano));

  return (
    <PageLayout>
      {/* Hero — palco escuro */}
      <section className="relative isolate flex min-h-[92svh] items-end overflow-hidden bg-tinta pb-14 pt-36 text-white md:pb-20">
        <Image src={capa.src} alt={capa.alt} fill preload sizes="100vw" className="-z-10 object-cover object-[50%_35%] opacity-80" />
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "linear-gradient(to top, var(--tinta) 8%, rgba(27,10,42,.7) 45%, rgba(27,10,42,.25) 100%)" }}
        />

        <div className="shell">
          <p className="glass-dark eyebrow inline-flex items-center gap-2 rounded-full px-4 py-2 text-white/85">
            <span className="size-2 rounded-full bg-sol" /> Serviço exclusivo · Locação de cenários
          </p>
          <SplitText
            as="h1"
            noCarregamento
            className="display display-lg mt-6 max-w-4xl"
            linhas={["Cenários pintados à mão,", { texto: "prontos para o seu palco.", className: "serif-accent text-gradient-sol" }]}
          />
          <Entrada delay={0.1}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/75">
              {cenarios.length} painéis de grande formato criados para os nossos espetáculos — de castelos e florestas a
              cidades, salas e céus estrelados. Difíceis de encontrar, feitos para impressionar.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <CtaButton href="#catalogo" variant="light">
                Ver catálogo <ArrowDown size={18} />
              </CtaButton>
              <CtaButton href={getWhatsAppUrl(mensagem)} external>
                <MessageCircle size={19} /> Solicitar orçamento
              </CtaButton>
            </div>
          </Entrada>

          <Entrada delay={0.2}>
            <dl className="glass-dark mt-14 grid grid-cols-2 gap-6 rounded-[1.8rem] p-6 md:grid-cols-4 md:p-8">
              {[
                { v: String(cenarios.length), l: "cenários disponíveis" },
                { v: `${locacao.altura.replace(" m", "")} × ${locacao.largura}`, l: "altura × largura" },
                { v: "À mão", l: "pintura artística" },
                { v: `desde ${desde}`, l: "no palco com a escola" },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="sr-only">{s.l}</dt>
                  <dd className="display whitespace-nowrap text-2xl sm:text-3xl md:text-4xl">{s.v}</dd>
                  <dd className="mt-1 text-sm text-white/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </Entrada>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="section">
        <div className="shell">
          <div className="grid gap-8 md:grid-cols-2 md:items-end">
            <div>
              <p className="eyebrow text-magenta-texto">Por que alugar com a gente</p>
              <SplitText
                className="display display-md mt-5 text-tinta"
                linhas={["Arte de verdade,", { texto: "em escala de teatro.", className: "serif-accent" }]}
              />
            </div>
            <p className="text-lg leading-relaxed text-nevoa">
              Não é cenário de catálogo genérico: são telas pintadas para contar histórias no palco, com o cuidado de
              quem vive a dança há décadas.
            </p>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {diferenciais.map((d, i) => (
              <Reveal as="li" key={d.titulo} delay={i * 0.05}>
                <div className="glass h-full rounded-[1.8rem] p-7">
                  <span className="grid size-12 place-items-center rounded-2xl bg-tinta text-white">
                    <d.icone size={22} />
                  </span>
                  <h3 className="display mt-6 text-2xl text-tinta">{d.titulo}</h3>
                  <p className="mt-3 leading-relaxed text-nevoa">{d.texto}</p>
                </div>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Catálogo */}
      <section id="catalogo" className="scroll-mt-24 pb-24">
        <div className="shell">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="eyebrow text-violeta">Catálogo</p>
              <SplitText
                className="display display-md mt-5 text-tinta"
                linhas={[`${cenarios.length} cenários.`, { texto: "Um mundo para cada história.", className: "serif-accent text-gradient" }]}
              />
            </div>
            <a
              href={locacao.catalogoPdf}
              download
              className="inline-flex items-center gap-2 self-start rounded-full border border-tinta/15 px-5 py-3 text-sm font-semibold text-tinta transition-colors hover:bg-tinta hover:text-white md:self-auto"
            >
              <Download size={16} /> Baixar catálogo em PDF
            </a>
          </div>

          <div className="mt-10">
            <CatalogoCenarios />
          </div>
        </div>
      </section>

      {/* Como funciona + valores */}
      <section className="relative isolate overflow-hidden bg-tinta py-24 text-white md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <p className="eyebrow text-sol">Como funciona</p>
            <SplitText
              className="display display-md mt-5"
              linhas={["Do catálogo", { texto: "ao seu palco.", className: "serif-accent text-gradient-sol" }]}
            />
            <ol className="mt-12 grid gap-6 sm:grid-cols-2">
              {passos.map((p, i) => (
                <Reveal as="li" key={p.titulo} delay={i * 0.05}>
                  <span className="display text-outline text-5xl text-white/40">0{i + 1}</span>
                  <h3 className="display mt-3 text-2xl">{p.titulo}</h3>
                  <p className="mt-2 leading-relaxed text-white/65">{p.texto}</p>
                </Reveal>
              ))}
            </ol>
          </div>

          <Reveal>
            <div className="rounded-[2rem] bg-white p-8 text-tinta md:p-10">
              <p className="eyebrow text-magenta-texto">Investimento</p>
              <p className="display mt-4 text-6xl">{locacao.valor}</p>
              <p className="mt-1 text-nevoa">{locacao.valorObs}</p>
              <ul className="mt-8 space-y-3 border-t border-tinta/10 pt-6 text-sm leading-relaxed">
                <li className="flex gap-3">
                  <Maximize size={18} className="mt-0.5 shrink-0 text-violeta" />
                  Painel de ≈ {locacao.altura} × {locacao.largura}, tecido {locacao.tecido}
                </li>
                <li className="flex gap-3">
                  <Brush size={18} className="mt-0.5 shrink-0 text-violeta" />
                  Pintura à mão (exceto Mapa Múndi e Floresta, impressos)
                </li>
                <li className="flex gap-3">
                  <Truck size={18} className="mt-0.5 shrink-0 text-violeta" />
                  Transporte combinado com você; frete e seguro à parte
                </li>
                <li className="flex gap-3">
                  <Theater size={18} className="mt-0.5 shrink-0 text-violeta" />
                  O varão não acompanha o cenário
                </li>
              </ul>
              <a
                href={getWhatsAppUrl(mensagem)}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition hover:brightness-110"
                style={{ background: "var(--grad-palco)" }}
              >
                <MessageCircle size={19} /> Solicitar orçamento
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Perguntas */}
      <section className="section">
        <div className="shell grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow text-laranja-texto">Dúvidas frequentes</p>
            <SplitText
              className="display display-md mt-5 text-tinta"
              linhas={["Antes de", { texto: "alugar.", className: "serif-accent" }]}
            />
          </div>
          <div className="divide-y divide-tinta/10 border-y border-tinta/10">
            {perguntas.map((q) => (
              <details key={q.p} className="group py-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold text-tinta [&::-webkit-details-marker]:hidden">
                  {q.p}
                  <span className="grid size-8 shrink-0 place-items-center rounded-full border border-tinta/15 text-xl leading-none transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 max-w-2xl leading-relaxed text-nevoa">{q.r}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Fechamento */}
      <section className="pb-20">
        <div className="shell">
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-tinta px-6 py-16 text-white md:px-16 md:py-20">
            <Quote aria-hidden className="text-sol" size={36} />
            <p className="serif-accent mt-4 max-w-3xl text-[clamp(1.8rem,3.6vw,3rem)] leading-[1.1]">
              A arte está em todo lugar para aqueles que enxergam a vida com amor.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <CtaButton href={getWhatsAppUrl(mensagem)} external>
                <MessageCircle size={19} /> Solicitar orçamento
              </CtaButton>
              <a
                href={locacao.catalogoPdf}
                download
                className="inline-flex items-center gap-2.5 rounded-full border border-white/35 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/20"
              >
                <Download size={18} /> Catálogo em PDF
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
