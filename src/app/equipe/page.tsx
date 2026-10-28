import type { Metadata } from "next";
import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaFinal from "@/components/CtaFinal";
import { Reveal } from "@/components/SectionReveal";
import { equipe } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/equipe" },
  title: "Equipe",
  description: "Conheça os professores e a equipe do Evelyn Studio de Dança em Franca, SP.",
};


export default function EquipePage() {
  const [diretora, ...demais] = equipe;

  return (
    <PageLayout>
      <PageHero
        eyebrow="Nossa equipe"
        titulo={["Gente que vive", { texto: "a dança todo dia.", className: "serif-accent text-gradient" }]}
        descricao="Professores dedicados, apaixonados pela dança e pelo ensino — e quem cuida de tudo para a aula acontecer."
      />

      {/* Diretora em destaque */}
      <section className="pb-16">
        <div className="shell">
          <Reveal>
            <div className="relative isolate grid overflow-hidden rounded-[2.5rem] bg-tinta text-white md:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[4/4.2] md:aspect-auto md:min-h-[32rem]">
                <Image
                  src={diretora.imagem.src}
                  alt={diretora.imagem.alt}
                  fill
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="object-cover object-[50%_25%]"
                />
              </div>
              <div className="relative flex flex-col justify-center p-8 md:p-14">
                <span
                  aria-hidden
                  className="absolute -right-24 -top-24 -z-10 size-96 rounded-full opacity-60"
                  style={{ background: "radial-gradient(closest-side, var(--violeta), transparent)" }}
                />
                <p className="eyebrow text-sol">Fundadora e diretora</p>
                <h2 className="display display-md mt-4">
                  {diretora.nome.split(" ")[0]}{" "}
                  <span className="serif-accent text-gradient-sol">{diretora.nome.split(" ").slice(1).join(" ")}</span>
                </h2>
                <p className="mt-3 font-semibold text-white/80">{diretora.cargo}</p>
                {diretora.bio && <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70">{diretora.bio}</p>}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="pb-12">
        <ul className="shell grid grid-cols-2 gap-4 md:gap-6 lg:grid-cols-4">
          {demais.map((m, i) => (
            <Reveal as="li" key={m.nome} delay={(i % 4) * 0.08} className={i % 2 ? "lg:translate-y-10" : ""}>
              <div className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem]">
                  <Image
                    src={m.imagem.src}
                    alt={m.imagem.alt}
                    fill
                    sizes="(min-width: 1024px) 22vw, 45vw"
                    className="object-cover object-[50%_20%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                </div>
                <p className="display mt-3 px-1 text-lg leading-tight text-tinta md:text-xl">{m.nome}</p>
                <p className="mt-1 px-1 text-sm leading-snug text-nevoa">{m.cargo}</p>
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaFinal
        titulo={["Venha dançar", { texto: "com a gente.", className: "serif-accent" }]}
      />
    </PageLayout>
  );
}
