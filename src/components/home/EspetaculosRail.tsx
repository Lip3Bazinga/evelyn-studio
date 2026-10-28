"use client";

import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef, useState, ViewTransition } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SplitText from "../SplitText";
import { capaDoEspetaculo, espetaculos } from "@/lib/images";

const destaques = espetaculos.slice(0, 8);

/**
 * A seção fica fixa na tela e, enquanto a pessoa rola para baixo,
 * os espetáculos deslizam na horizontal. A altura da seção é calculada
 * a partir da largura do trilho, então a rolagem acompanha o conteúdo.
 */
export default function EspetaculosRail() {
  const secao = useRef<HTMLElement>(null);
  const trilho = useRef<HTMLDivElement>(null);
  const [distancia, setDistancia] = useState(0);
  const [alturaTela, setAlturaTela] = useState(0);

  useLayoutEffect(() => {
    const medir = () => {
      if (!trilho.current) return;
      setDistancia(Math.max(0, trilho.current.scrollWidth - window.innerWidth));
      setAlturaTela(window.innerHeight);
    };
    medir();
    const ro = new ResizeObserver(medir);
    if (trilho.current) ro.observe(trilho.current);
    window.addEventListener("resize", medir);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", medir);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: secao, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, (v) => -v * distancia);
  const barra = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const total = espetaculos.length;
  const desde = Math.min(...espetaculos.map((e) => e.ano));

  return (
    <section
      ref={secao}
      aria-label="Espetáculos"
      className="relative"
      style={{ height: distancia ? distancia + alturaTela : undefined }}
    >
      <div className="sticky top-0 flex min-h-[100svh] flex-col justify-center overflow-hidden py-24">
        <div className="shell mb-10 flex flex-col justify-between gap-6 md:mb-12 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-violeta">Espetáculos</p>
            <SplitText
              className="display display-lg mt-5 text-tinta"
              linhas={[`${total} espetáculos.`, { texto: "Uma vida no palco.", className: "serif-accent text-gradient" }]}
            />
          </div>
          <p className="max-w-xs text-nevoa md:text-right">
            Desde {desde}, todo ano a escola inteira sobe ao palco com uma história nova.
          </p>
        </div>

        <motion.div
          ref={trilho}
          style={{ x }}
          className="flex w-max gap-5 pl-[max(1rem,calc((100vw-82rem)/2+3rem))] pr-[max(1rem,calc((100vw-82rem)/2+3rem))] md:gap-6"
        >
          {destaques.map((show) => {
            const capa = capaDoEspetaculo(show);
            return (
              <Link
                key={show.slug}
                prefetch
                href={`/espetaculos/${show.slug}`}
                className="group block w-[78vw] shrink-0 sm:w-[24rem] md:w-[28rem]"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.8rem] bg-lilas">
                  <ViewTransition name={`show-${show.slug}`} share="morph" default="none">
                    <div className="absolute inset-0">
                      <Image
                        src={capa.src}
                        alt={capa.alt}
                        fill
                        sizes="(min-width: 768px) 28rem, 78vw"
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </ViewTransition>
                </div>
                <div className="mt-4 flex items-baseline gap-3">
                  <span className="display text-2xl text-magenta">{show.ano}</span>
                  <span className="display text-2xl text-tinta">{show.titulo}</span>
                </div>
                <p className="mt-1 text-sm text-nevoa">{show.local}</p>
              </Link>
            );
          })}

          <Link
            href="/espetaculos"
            className="grid aspect-[4/3] w-[70vw] shrink-0 place-items-center rounded-[1.8rem] bg-tinta text-white transition hover:bg-tinta-2 sm:w-[20rem]"
          >
            <span className="text-center">
              <span className="display block text-4xl">+{total - destaques.length}</span>
              <span className="serif-accent mt-1 block text-xl text-white/75">ver todos os espetáculos</span>
              <ArrowUpRight className="mx-auto mt-5" size={24} />
            </span>
          </Link>
        </motion.div>

        <div className="shell mt-10">
          <div className="h-[3px] overflow-hidden rounded-full bg-tinta/10">
            <motion.div className="h-full rounded-full" style={{ width: barra, background: "var(--grad-palco)" }} />
          </div>
        </div>
      </div>
    </section>
  );
}
