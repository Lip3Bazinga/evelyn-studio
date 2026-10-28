import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import Foto from "../Foto";
import SplitText from "../SplitText";
import { modalidades } from "@/lib/data";

/** Lista das modalidades em fundo escuro; cada linha ganha a cor da dança no hover. */
export default function ModalidadesStage() {
  return (
    <section className="relative isolate overflow-hidden bg-tinta py-24 text-white md:py-32" aria-label="Modalidades">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-[20%] -top-[30%] -z-10 size-[70vmax] rounded-full opacity-25"
        style={{ background: "radial-gradient(closest-side, var(--violeta), transparent 70%)" }}
      />

      <div className="shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-sol">Modalidades</p>
            <SplitText
              linhas={["Escolha", { texto: "o seu ritmo.", className: "serif-accent text-gradient-sol" }]}
              className="display display-lg mt-5"
            />
          </div>
          <p className="max-w-sm text-white/65 md:text-right">
            Cada dança é um universo. Encontre aquela que tem a sua cara.
          </p>
        </div>

        <ul className="mt-14 border-t border-white/12">
          {modalidades.map((m, i) => (
            <li key={m.slug} className="border-b border-white/12" style={{ "--accent": m.cor } as CSSProperties}>
              <Link
                prefetch
                href={`/modalidades/${m.slug}`}
                className="group grid grid-cols-[auto_1fr_auto] items-center gap-4 py-5 lg:grid-cols-[3rem_4.5rem_1fr_16rem_auto] md:gap-6 md:py-6"
              >
                <span className="eyebrow hidden text-white/55 lg:block">{String(i + 1).padStart(2, "0")}</span>

                <span className="relative size-14 overflow-hidden rounded-full md:size-[4.5rem]">
                  <Foto imagem={m.imagem} rotulo="" sizes="72px" />
                </span>

                <span className="min-w-0">
                  <span className="display block text-[clamp(1.9rem,5.5vw,4.5rem)] transition-colors duration-300 group-hover:text-[var(--accent)]">
                    {m.nome}
                  </span>
                  <span className="mt-1 block text-sm text-white/60 lg:hidden">{m.tagline} · {m.faixaEtaria}</span>
                </span>

                <span className="hidden text-sm leading-relaxed text-white/60 lg:block">
                  <span className="block font-semibold text-white/90">{m.tagline}</span>
                  {m.faixaEtaria}
                </span>

                <span className="grid size-11 place-items-center rounded-full border border-white/20 transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent)] md:size-12">
                  <ArrowUpRight size={20} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
