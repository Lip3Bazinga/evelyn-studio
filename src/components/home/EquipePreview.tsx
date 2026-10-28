import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "../SectionReveal";
import SplitText from "../SplitText";
import { equipe } from "@/lib/data";


export default function EquipePreview() {
  const professores = equipe.filter((m) => m.cargo.toLowerCase().includes("profess")).slice(0, 4);

  return (
    <section className="section relative">
      <div className="shell">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-magenta-texto">Equipe</p>
            <SplitText
              className="display display-lg mt-5 text-tinta"
              linhas={["Quem faz", { texto: "o estúdio dançar.", className: "serif-accent" }]}
            />
          </div>
          <Link href="/equipe" className="group inline-flex items-center gap-3 font-semibold text-tinta">
            Conheça a equipe completa
            <span className="grid size-11 place-items-center rounded-full bg-tinta text-white">
              <ArrowUpRight size={18} />
            </span>
          </Link>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {professores.map((p, i) => (
            <Reveal as="li" key={p.nome} delay={i * 0.08} className={i % 2 ? "lg:translate-y-12" : ""}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                  <Image
                    src={p.imagem.src}
                    alt={p.imagem.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="display mt-3 px-1 text-lg leading-tight text-tinta md:text-xl">{p.nome}</p>
                <p className="mt-1 px-1 text-sm leading-snug text-nevoa">{p.cargo}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
