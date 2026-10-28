import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../SectionReveal";
import { foto } from "@/lib/images";

const img = foto("infinita-danca/01.jpg", "Professora com um grupo de crianças do projeto Infinita Dança");

/** Teaser do projeto social, com a frase mais bonita do site original. */
export default function InfinitaQuote() {
  return (
    <section className="section relative overflow-hidden">
      <div className="shell grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="relative mx-auto w-full max-w-sm lg:col-span-4">
          <div className="rounded-[2.5rem] relative aspect-[3/4] overflow-hidden shadow-[0_30px_60px_-35px_rgba(27,10,42,.35)]">
            <Image src={img.src} alt={img.alt} fill sizes="(min-width:1024px) 28vw, 80vw" className="object-cover" />
          </div>
          <span className="glass absolute -bottom-4 -right-2 rounded-full px-5 py-3 text-sm font-semibold text-tinta">
            Projeto social desde 2020
          </span>
        </Reveal>

        <div className="lg:col-span-8 lg:pl-8">
          <Reveal>
            <p className="eyebrow text-laranja-texto">Infinita Dança</p>
          </Reveal>
          <Reveal delay={0.1}>
            <blockquote className="mt-6">
              <p className="serif-accent text-[clamp(2rem,4.6vw,4rem)] leading-[1.08] text-tinta">
                <span className="text-gradient-sol">“</span>Foi a melhor aula da minha vida, na menor sala de aula
                em que já estive.<span className="text-gradient-sol">”</span>
              </p>
              <footer className="mt-6 text-nevoa">
                <span className="font-semibold text-tinta">Evelyn Branquinho</span>, sobre a aula que deu origem ao
                projeto
              </footer>
            </blockquote>
          </Reveal>
          <Reveal delay={0.2}>
            <Link href="/infinita-danca" className="group mt-10 inline-flex items-center gap-3 font-semibold text-tinta">
              <span className="grid size-12 place-items-center rounded-full text-white" style={{ background: "var(--grad-sol)" }}>
                <ArrowUpRight size={20} />
              </span>
              Conheça o projeto social
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
