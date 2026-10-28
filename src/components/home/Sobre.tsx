import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import Counter from "../Counter";
import ScrollText from "../ScrollText";
import { Reveal } from "../SectionReveal";
import { modalidades } from "@/lib/data";
import { espetaculos, foto } from "@/lib/images";

const fotoAula = foto("home/01-img-9179.jpg", "Professora orientando uma turma infantil de ballet no estúdio");

export default function Sobre() {
  const anoMaisAntigo = Math.min(...espetaculos.map((e) => e.ano));
  const stats = [
    { valor: modalidades.length, label: "modalidades para todas as idades", cor: "var(--magenta)" },
    { valor: espetaculos.length, label: `espetáculos no palco desde ${anoMaisAntigo}`, cor: "var(--laranja)" },
    { valor: 3, sufixo: "+", label: "anos: idade para começar no baby class", cor: "var(--violeta)" },
  ];

  return (
    <section id="sobre" className="section relative">
      <div className="shell">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow text-magenta-texto">A dança transforma</p>
              <div className="mt-6 rounded-[2rem]">
                <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
                  <Image src={fotoAula.src} alt={fotoAula.alt} fill sizes="(min-width:1024px) 30vw, 90vw" className="object-cover" />
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-8 lg:pt-12">
            <ScrollText
              className="display display-md text-tinta"
              texto="Há mais de uma década, o Evelyn Studio é referência em dança na região de Franca. Um espaço onde técnica, arte e paixão se encontram em cada aula — formando bailarinos e transformando vidas pelo movimento."
            />
            <Reveal className="mt-10">
              <Link
                href="/escola"
                className="group inline-flex items-center gap-3 text-lg font-semibold text-tinta"
              >
                <span className="grid size-12 place-items-center rounded-full bg-tinta text-white">
                  <ArrowUpRight size={20} />
                </span>
                Conheça nossa história
              </Link>
            </Reveal>
          </div>
        </div>

        <ul className="mt-20 grid gap-4 md:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 0.1}>
              <div className="glass relative overflow-hidden rounded-[2rem] p-8">
                <p className="display text-[clamp(4rem,8vw,6rem)]" style={{ color: s.cor }}>
                  <Counter valor={s.valor} sufixo={s.sufixo} />
                </p>
                <p className="mt-2 max-w-[16rem] text-nevoa">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
