import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import CtaButton from "../CtaButton";
import SplitText from "../SplitText";
import { Reveal } from "../SectionReveal";
import { cenarios, locacao } from "@/lib/cenarios";

const vitrine = ["castelo-pequena-sereia", "fundo-do-mar", "rua-antiga", "memorias-divertidamente"]
  .map((s) => cenarios.find((c) => c.slug === s)!)
  .filter(Boolean);

/** Chamada na home para o serviço de locação de cenários. */
export default function CenariosTeaser() {
  return (
    <section className="section">
      <div className="shell">
        <div className="relative isolate overflow-hidden rounded-[2.5rem] bg-tinta p-6 text-white md:p-12">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <p className="eyebrow text-sol">Serviço exclusivo</p>
              <SplitText
                className="display display-md mt-5"
                linhas={["Locação de cenários", { texto: "pintados à mão.", className: "serif-accent text-gradient-sol" }]}
              />
              <p className="mt-5 max-w-md leading-relaxed text-white/70">
                {cenarios.length} painéis de {locacao.altura} × {locacao.largura} criados para os nossos espetáculos —
                disponíveis para dar vida à sua apresentação.
              </p>
              <div className="mt-8">
                <CtaButton href="/locacao-de-cenarios" variant="light">
                  Ver catálogo <ArrowUpRight size={18} />
                </CtaButton>
              </div>
            </div>
            <ul className="grid grid-cols-2 gap-3">
              {vitrine.map((c, i) => (
                <Reveal as="li" key={c.slug} delay={i * 0.05}>
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[1.2rem]">
                    <Image src={c.painel.src} alt={c.painel.alt} fill sizes="(min-width:1024px) 22vw, 45vw" className="object-cover" />
                  </div>
                  <p className="mt-2 text-sm text-white/70">{c.nome}</p>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
