import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import PageHero from "@/components/PageHero";
import CtaFinal from "@/components/CtaFinal";
import ModalidadeCard from "@/components/modalidades/ModalidadeCard";
import { Reveal } from "@/components/SectionReveal";
import { modalidades } from "@/lib/data";

export const metadata: Metadata = {
  alternates: { canonical: "/modalidades" },
  title: "Modalidades",
  description:
    "Ballet clássico, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica. Encontre a dança certa para você no Evelyn Studio.",
};

export default function ModalidadesPage() {
  return (
    <PageLayout>
      <PageHero
        eyebrow={`${modalidades.length} modalidades`}
        titulo={["Cada dança", { texto: "é um universo.", className: "serif-accent text-gradient" }]}
        descricao="Explore nossas modalidades e encontre aquela que move você — do baby class aos adultos."
      >
        {modalidades.map((m) => (
          <a
            key={m.slug}
            href={`#${m.slug}`}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold text-tinta transition-transform hover:-translate-y-0.5"
          >
            <span className="size-2.5 rounded-full" style={{ background: m.cor }} />
            {m.nome}
          </a>
        ))}
      </PageHero>

      <section className="pb-12">
        <ul className="shell grid gap-6 md:grid-cols-2">
          {modalidades.map((mod, i) => (
            <Reveal as="li" key={mod.slug} delay={(i % 2) * 0.12} className={`scroll-mt-28 ${i % 2 ? "md:translate-y-20" : ""}`}>
              <div id={mod.slug} className="h-full">
                <ModalidadeCard mod={mod} indice={i} />
              </div>
            </Reveal>
          ))}
        </ul>
      </section>

      <CtaFinal />
    </PageLayout>
  );
}
