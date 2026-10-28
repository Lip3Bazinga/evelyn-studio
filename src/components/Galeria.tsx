"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Plus, X } from "lucide-react";
import type { Imagem } from "@/lib/images";

const POR_PAGINA = 30;

/** Galeria em mosaico + lightbox de vidro (teclado: ← → Esc). */
export default function Galeria({ fotos }: { fotos: Imagem[] }) {
  const [visiveis, setVisiveis] = useState(POR_PAGINA);
  const [aberta, setAberta] = useState<number | null>(null);
  const [direcao, setDirecao] = useState(1);
  const fecharRef = useRef<HTMLButtonElement>(null);

  const fechar = useCallback(() => setAberta(null), []);
  const anterior = useCallback(() => {
    setDirecao(-1);
    setAberta((i) => (i === null ? i : (i - 1 + fotos.length) % fotos.length));
  }, [fotos.length]);
  const proxima = useCallback(() => {
    setDirecao(1);
    setAberta((i) => (i === null ? i : (i + 1) % fotos.length));
  }, [fotos.length]);

  useEffect(() => {
    if (aberta === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") fechar();
      if (e.key === "ArrowLeft") anterior();
      if (e.key === "ArrowRight") proxima();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    fecharRef.current?.focus();
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [aberta, fechar, anterior, proxima]);

  const atual = aberta === null ? null : fotos[aberta];

  return (
    <>
      <ul className="columns-2 gap-3 md:columns-3 md:gap-4 lg:columns-4">
        {fotos.slice(0, visiveis).map((foto, i) => (
          <motion.li
            key={foto.src}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-5% 0px" }}
            transition={{ duration: 0.5 }}
            className="mb-3 break-inside-avoid md:mb-4"
          >
            <button
              type="button"
              onClick={() => {
                setDirecao(1);
                setAberta(i);
              }}
              aria-label={`Ampliar foto ${i + 1} de ${fotos.length}`}
              className="group relative block w-full overflow-hidden rounded-[1.3rem] bg-lilas"
              style={{ aspectRatio: `${foto.width} / ${foto.height}` }}
            >
              <Image
                src={foto.src}
                alt={foto.alt}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              <span className="glass absolute bottom-3 right-3 grid size-10 place-items-center rounded-full text-tinta opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Plus size={18} />
              </span>
            </button>
          </motion.li>
        ))}
      </ul>

      {visiveis < fotos.length && (
        <div className="mt-10 text-center">
          <button
            type="button"
            onClick={() => setVisiveis((v) => v + POR_PAGINA)}
            className="glass inline-flex items-center gap-2 rounded-full px-7 py-4 font-semibold text-tinta transition-transform hover:-translate-y-0.5"
          >
            <Plus size={18} /> Ver mais fotos ({fotos.length - visiveis})
          </button>
        </div>
      )}

      <AnimatePresence>
        {atual && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`Foto ${aberta! + 1} de ${fotos.length}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-tinta/85"
            onClick={fechar}
          >
            <button
              ref={fecharRef}
              type="button"
              onClick={fechar}
              aria-label="Fechar"
              className="glass-dark absolute right-4 top-4 z-10 grid size-12 place-items-center rounded-full text-white transition-transform"
            >
              <X size={22} />
            </button>

            {fotos.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    anterior();
                  }}
                  aria-label="Foto anterior"
                  className="glass-dark absolute left-3 z-10 grid size-12 place-items-center rounded-full text-white md:left-6"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    proxima();
                  }}
                  aria-label="Próxima foto"
                  className="glass-dark absolute right-3 z-10 grid size-12 place-items-center rounded-full text-white md:right-6"
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            <div className="relative h-[80vh] w-[calc(100%-7.5rem)]" onClick={(e) => e.stopPropagation()}>
              <AnimatePresence initial={false} custom={direcao} mode="popLayout">
                <motion.div
                  key={atual.src}
                  custom={direcao}
                  variants={{
                    entra: { opacity: 0 },
                    centro: { opacity: 1 },
                    sai: { opacity: 0 },
                  }}
                  initial="entra"
                  animate="centro"
                  exit="sai"
                  transition={{ duration: 0.2 }}
                  className="absolute inset-0"
                >
                  <Image src={atual.src} alt={atual.alt} fill sizes="100vw" className="object-contain" />
                </motion.div>
              </AnimatePresence>
            </div>

            <p className="glass-dark absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full px-4 py-1.5 text-xs font-semibold text-white/80">
              {aberta! + 1} / {fotos.length}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
