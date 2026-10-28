import Entrada from "@/components/Entrada";
import type { Metadata } from "next";
import type { CSSProperties } from "react";
import { ViewTransition } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, MessageCircle } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Aurora from "@/components/Aurora";
import CtaButton from "@/components/CtaButton";
import CtaFinal from "@/components/CtaFinal";
import Foto from "@/components/Foto";
import Marquee from "@/components/Marquee";
import SplitText from "@/components/SplitText";
import { Reveal } from "@/components/SectionReveal";
import { getWhatsAppModalidade, modalidades, textoSobre } from "@/lib/data";

// Todas as páginas são geradas no build (generateStaticParams); a navigação
// pode esperar pelos params sem placeholder.
export const instant = false;

export function generateStaticParams() {
  return modalidades.map((mod) => ({ slug: mod.slug }));
}

export async function generateMetadata({ params }: PageProps<"/modalidades/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const mod = modalidades.find((m) => m.slug === slug);
  if (!mod) return { title: "Modalidade" };
  return { title: mod.nome, description: mod.descricao, alternates: { canonical: `/modalidades/${mod.slug}` } };
}

export default async function ModalidadePage({ params }: PageProps<"/modalidades/[slug]">) {
  const { slug } = await params;
  const indice = modalidades.findIndex((m) => m.slug === slug);
  if (indice < 0) notFound();

  const mod = modalidades[indice];
  const proxima = modalidades[(indice + 1) % modalidades.length];
  const corTexto = textoSobre(mod.cor);

  return (
    <PageLayout>
      <div style={{ "--accent": mod.cor } as CSSProperties}>
        {/* Hero */}
        <section className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40">
          <Aurora
            manchas={[
              { cor: "var(--accent)", tamanho: "60vmax", opacidade: 0.42, duracao: 20, pos: { top: "-30%", right: "-20%" } },
              { cor: "var(--violeta-claro)", tamanho: "40vmax", opacidade: 0.22, duracao: 26, pos: { bottom: "-20%", left: "-10%" } },
            ]}
          />
          <div className="shell relative z-10 grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Link
                href="/modalidades"
                className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-tinta"
              >
                <ArrowLeft size={16} /> Todas as modalidades
              </Link>
              <p className="eyebrow mt-8 flex items-center gap-2.5 text-tinta/75">
                <span aria-hidden className="h-3.5 w-0.5 rounded-full" style={{ background: mod.cor }} />
                {String(indice + 1).padStart(2, "0")} · {mod.faixaEtaria}
              </p>
              <SplitText as="h1" noCarregamento className="display display-lg mt-4 text-tinta" linhas={mod.nome.split(" ").length > 1 ? [mod.nome.split(" ")[0], { texto: mod.nome.split(" ").slice(1).join(" "), className: "serif-accent" }] : [mod.nome]} />
              <Entrada delay={0.3} y={20}>
                <p className="mt-6 max-w-lg text-xl leading-relaxed text-nevoa">{mod.descricao}</p>
              </Entrada>
              <Entrada delay={0.45} y={20}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <CtaButton href={getWhatsAppModalidade(mod.nome)} external>
                    <MessageCircle size={19} /> Agendar aula experimental
                  </CtaButton>
                </div>
              </Entrada>
            </div>

            <div className="relative">
              <ViewTransition name={`mod-${mod.slug}`} share="morph" default="none">
                <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2.5rem] shadow-[0_50px_100px_-40px_var(--accent)]">
                  <Foto imagem={mod.imagem} rotulo={mod.nome} sizes="(min-width: 1024px) 50vw, 100vw" preload />
                </div>
              </ViewTransition>
              <span
                className="absolute -bottom-5 -left-3 rounded-full px-6 py-3 text-lg font-bold shadow-xl md:-left-6"
                style={{ background: mod.cor, color: corTexto }}
              >
                {mod.tagline}
              </span>
            </div>
          </div>
        </section>

        {/* Faixa com a cor da modalidade */}
        <div className="py-4" style={{ background: mod.cor, color: corTexto }}>
          <Marquee velocidade={60}>
            {Array.from({ length: 4 }).map((_, i) => (
              <span key={i} className="display flex items-center gap-8 pr-8 text-4xl md:text-5xl">
                {mod.nome} <span className="serif-accent">{mod.tagline.toLowerCase()}</span> ✦
              </span>
            ))}
          </Marquee>
        </div>

        {/* Benefícios */}
        <section className="section">
          <div className="shell grid gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-nevoa">O que você vai desenvolver</p>
              <SplitText
                className="display display-md mt-5 text-tinta"
                linhas={["Mais que passos:", { texto: "uma nova forma de se mover.", className: "serif-accent" }]}
              />
            </div>
            <ol className="grid gap-3 sm:grid-cols-2 lg:col-span-7">
              {mod.beneficios.map((b, i) => (
                <Reveal as="li" key={b} delay={i * 0.07} className={i === mod.beneficios.length - 1 && i % 2 === 0 ? "sm:col-span-2" : ""}>
                  <div className="glass group flex h-full items-center gap-5 rounded-[1.6rem] p-5 hover:-translate-y-1">
                    <span
                      className="display grid size-14 shrink-0 place-items-center rounded-2xl text-xl"
                      style={{ background: mod.cor, color: corTexto }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-lg font-semibold text-tinta">{b}</span>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </section>

        {/* Próxima modalidade */}
        <section className="pb-8">
          <div className="shell">
            <Link
              prefetch href={`/modalidades/${proxima.slug}`}
              className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-[2.5rem] bg-tinta p-8 text-white md:flex-row md:items-center md:p-12"
            >
              <span
                aria-hidden
                className="absolute -right-20 -top-32 size-96 rounded-full opacity-60"
                style={{ background: `radial-gradient(closest-side, ${proxima.cor}, transparent)` }}
              />
              <span className="relative">
                <span className="eyebrow text-white/50">Próxima modalidade</span>
                <span className="display mt-3 block text-[clamp(2.4rem,6vw,5rem)] transition-colors duration-500">
                  {proxima.nome}
                </span>
                <span className="serif-accent text-xl text-white/60">{proxima.tagline}</span>
              </span>
              <span
                className="relative grid size-20 shrink-0 place-items-center rounded-full group-hover:scale-[1.03]"
                style={{ background: proxima.cor, color: textoSobre(proxima.cor) }}
              >
                <ArrowUpRight size={30} />
              </span>
            </Link>
          </div>
        </section>

        <CtaFinal
          titulo={[`Experimente ${mod.nome.toLowerCase()}`, { texto: "na prática.", className: "serif-accent" }]}
          texto={`Agende uma aula experimental gratuita e descubra como ${mod.nome.toLowerCase()} pode transformar o seu dia a dia.`}
          mensagem={`Olá! Tenho interesse em agendar uma aula experimental de ${mod.nome}. Poderia me dar mais informações?`}
        />
      </div>
    </PageLayout>
  );
}
