import Link from "next/link";
import { ViewTransition, type CSSProperties } from "react";
import { ArrowUpRight } from "lucide-react";
import Foto from "../Foto";
import { textoSobre, type Modalidade } from "@/lib/data";

/** Card de modalidade tingido pela cor da dança; a foto "viaja" até a página da modalidade. */
export default function ModalidadeCard({ mod, indice, grande = false }: { mod: Modalidade; indice: number; grande?: boolean }) {
  return (
    <div className="h-full rounded-[2.2rem]">
      <Link
        prefetch href={`/modalidades/${mod.slug}`}
        className="group relative flex h-full flex-col overflow-hidden rounded-[2.2rem] bg-white/60 p-3 shadow-[0_30px_60px_-35px_rgba(27,10,42,.45)] ring-1 ring-white/70 backdrop-blur-xl"
        style={{ "--accent": mod.cor } as CSSProperties}
      >
        <div className={`relative overflow-hidden rounded-[1.7rem] ${grande ? "aspect-[16/11]" : "aspect-[4/3.2]"}`}>
          <ViewTransition name={`mod-${mod.slug}`} share="morph" default="none">
            <div className="absolute inset-0">
              <Foto
                imagem={mod.imagem}
                rotulo={mod.nome}
                sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </ViewTransition>
          <span
            className="absolute left-4 top-4 rounded-full px-3.5 py-1.5 text-xs font-bold"
            style={{ background: mod.cor, color: textoSobre(mod.cor) }}
          >
            {mod.faixaEtaria}
          </span>
        </div>

        <div className="flex flex-1 items-end justify-between gap-4 px-3 pb-3 pt-5">
          <div>
            <span className="eyebrow text-nevoa">{String(indice + 1).padStart(2, "0")}</span>
            <h2 className="display mt-1 text-[clamp(1.8rem,3vw,2.6rem)] text-tinta">{mod.nome}</h2>
            <p className="serif-accent mt-1 text-xl text-nevoa">{mod.tagline}</p>
          </div>
          <span
            className="grid size-14 shrink-0 place-items-center rounded-full group-hover:scale-[1.03]"
            style={{ background: mod.cor, color: textoSobre(mod.cor) }}
          >
            <ArrowUpRight size={22} />
          </span>
        </div>
      </Link>
    </div>
  );
}
