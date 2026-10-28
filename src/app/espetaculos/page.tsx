import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { ArrowUpRight, Camera, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import Aurora from "@/components/Aurora";
import CtaButton from "@/components/CtaButton";
import { Reveal } from "@/components/SectionReveal";
import { espetaculos, capaDoEspetaculo } from "@/lib/images";

export const metadata: Metadata = {
  alternates: { canonical: "/espetaculos" },
  title: "Espetáculos",
  description: "Veja os espetáculos e apresentações do Evelyn Studio de Dança ao longo dos anos.",
};

const cores = ["var(--magenta)", "var(--laranja)", "var(--violeta)"];

export default function EspetaculosPage() {
  const desde = Math.min(...espetaculos.map((e) => e.ano));

  return (
    <PageLayout>
      <PageHero
        eyebrow={`${espetaculos.length} espetáculos desde ${desde}`}
        titulo={["O palco é onde", { texto: "tudo se encontra.", className: "serif-accent text-gradient" }]}
        descricao="Todo ano, a escola inteira sobe ao palco com uma história nova. Escolha um espetáculo e reviva as fotos."
      />

      <section className="pb-24">
        <ol className="shell relative">
          {/* linha do tempo */}
          <span aria-hidden className="absolute bottom-0 left-[calc(clamp(1rem,4.5vw,3rem)+0.5rem)] top-0 w-px bg-gradient-to-b from-magenta via-violeta to-laranja opacity-40 md:left-[calc(clamp(1rem,4.5vw,3rem)+9.5rem)]" />

          {espetaculos.map((show, i) => {
            const capa = capaDoEspetaculo(show);
            const cor = cores[i % cores.length];
            return (
              <li key={show.slug} className="relative grid gap-4 pb-14 pl-8 md:grid-cols-[9rem_1fr] md:gap-12 md:pl-0">
                <span aria-hidden className="absolute left-[0.2rem] top-3 size-3 rounded-full ring-4 ring-creme md:left-[9.2rem]" style={{ background: cor }} />
                <div className="md:sticky md:top-28 md:self-start md:text-right">
                  <Reveal y={20}>
                    <span className="display text-outline text-5xl md:text-6xl" style={{ color: cor }}>
                      {show.ano}
                    </span>
                  </Reveal>
                </div>

                <Reveal y={50}>
                  <Link
                    prefetch href={`/espetaculos/${show.slug}`}
                    className="group grid overflow-hidden rounded-[2rem] bg-white/55 p-2.5 shadow-[0_30px_60px_-40px_rgba(27,10,42,.5)] ring-1 ring-white/70 backdrop-blur-xl md:grid-cols-[1.3fr_1fr]"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem]">
                      <ViewTransition name={`show-${show.slug}`} share="morph" default="none">
                        <div className="absolute inset-0">
                          <Image
                            src={capa.src}
                            alt={capa.alt}
                            fill
                            sizes="(min-width: 768px) 45vw, 100vw"
                            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                          />
                        </div>
                      </ViewTransition>
                    </div>
                    <div className="flex flex-col justify-between gap-6 p-5 md:p-8">
                      <div>
                        <h2 className="display text-[clamp(2rem,3.6vw,3.2rem)] text-tinta">{show.titulo}</h2>
                        <p className="mt-3 flex items-center gap-2 text-sm text-nevoa">
                          <MapPin size={15} /> {show.local}
                        </p>
                        <p className="mt-1.5 flex items-center gap-2 text-sm text-nevoa">
                          <Camera size={15} /> {show.fotos.length} fotos
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-3 font-semibold text-tinta">
                        <span
                          className="grid size-12 place-items-center rounded-full text-white"
                          style={{ background: cor }}
                        >
                          <ArrowUpRight size={20} />
                        </span>
                        Ver fotos
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            );
          })}
        </ol>
      </section>

      {/* Cenários */}
      <section className="pb-20">
        <div className="shell">
          <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-tinta px-8 py-14 text-white md:px-14 md:py-20">
            <Aurora preset="escuro" />
            <div className="relative z-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div>
                <p className="eyebrow text-sol">Locação de cenários</p>
                <h2 className="display display-md mt-4 max-w-2xl">
                  Os cenários dos nossos espetáculos <span className="serif-accent text-gradient-sol">podem ir para o seu palco.</span>
                </h2>
              </div>
              <CtaButton href="/locacao-de-cenarios" variant="light">
                Conhecer os cenários <ArrowUpRight size={18} />
              </CtaButton>
            </div>
          </Reveal>
        </div>
      </section>
    </PageLayout>
  );
}
