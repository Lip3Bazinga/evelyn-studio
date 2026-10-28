import Image from "next/image";
import type { Imagem } from "@/lib/images";

interface FotoProps {
  imagem?: Imagem;
  rotulo?: string; // texto do placeholder quando ainda não há foto
  sizes: string;
  className?: string;
  posicao?: string; // object-position, ex.: "center top" para rostos
  preload?: boolean;
}

/** Foto que preenche o pai. O pai precisa ser `relative` e ter proporção/tamanho definidos. */
export default function Foto({ imagem, rotulo, sizes, className = "", posicao, preload }: FotoProps) {
  if (!imagem) {
    return (
      <div className="placeholder-art">
        {rotulo && (
          <>
            {/* texto decorativo gigante via CSS (::before), para não ser lido duas vezes */}
            <span data-rotulo={rotulo} className="placeholder-deco" aria-hidden />
            <span className="serif-accent relative rounded-full bg-white/90 px-5 py-1.5 text-center text-[clamp(1.3rem,2.6vw,2rem)] leading-tight text-tinta">
              {rotulo}
            </span>
          </>
        )}
      </div>
    );
  }

  return (
    <Image
      src={imagem.src}
      alt={imagem.alt}
      fill
      sizes={sizes}
      preload={preload}
      className={`object-cover ${className}`}
      style={posicao ? { objectPosition: posicao } : undefined}
    />
  );
}
