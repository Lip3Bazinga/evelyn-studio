import type { CSSProperties } from "react";

export interface Mancha {
  cor: string; // qualquer cor CSS, ex.: "var(--magenta)"
  tamanho?: string; // largura da mancha, ex.: "50vmax"
  opacidade?: number;
  duracao?: number; // segundos
  pos: CSSProperties; // top/left/right/bottom
}

const presets: Record<string, Mancha[]> = {
  claro: [
    { cor: "var(--magenta)", tamanho: "52vmax", opacidade: 0.16, duracao: 24, pos: { top: "-22%", right: "-14%" } },
    { cor: "var(--laranja)", tamanho: "40vmax", opacidade: 0.14, duracao: 19, pos: { bottom: "-18%", left: "-12%" } },
    { cor: "var(--violeta-claro)", tamanho: "44vmax", opacidade: 0.15, duracao: 27, pos: { top: "20%", left: "25%" } },
  ],
  escuro: [
    { cor: "var(--violeta)", tamanho: "70vmax", opacidade: 0.38, duracao: 26, pos: { top: "-35%", left: "-20%" } },
    { cor: "var(--magenta)", tamanho: "50vmax", opacidade: 0.23, duracao: 21, pos: { bottom: "-30%", right: "-10%" } },
    { cor: "var(--laranja)", tamanho: "30vmax", opacidade: 0.15, duracao: 17, pos: { top: "35%", right: "25%" } },
  ],
  vibrante: [
    { cor: "var(--magenta)", tamanho: "60vmax", opacidade: 0.45, duracao: 18, pos: { top: "-30%", left: "-15%" } },
    { cor: "var(--laranja)", tamanho: "55vmax", opacidade: 0.42, duracao: 22, pos: { bottom: "-35%", right: "-10%" } },
    { cor: "var(--sol)", tamanho: "30vmax", opacidade: 0.35, duracao: 16, pos: { top: "10%", right: "15%" } },
    { cor: "var(--violeta)", tamanho: "45vmax", opacidade: 0.4, duracao: 25, pos: { bottom: "-20%", left: "10%" } },
  ],
};

interface AuroraProps {
  preset?: keyof typeof presets;
  manchas?: Mancha[];
  className?: string;
}

/** Manchas de luz suaves e paradas atrás do conteúdo. */
export default function Aurora({ preset = "claro", manchas, className = "" }: AuroraProps) {
  const lista = manchas ?? presets[preset];
  return (
    <div className={`aurora ${className}`} aria-hidden>
      {lista.map((m, i) => (
        <span
          key={i}
          style={
            {
              "--c": m.cor,
              "--s": m.tamanho,
              "--o": m.opacidade,
              ...m.pos,
            } as CSSProperties
          }
        />
      ))}
    </div>
  );
}
