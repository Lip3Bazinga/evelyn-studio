import Entrada from "./Entrada";
import type { CSSProperties, ReactNode } from "react";
import Aurora from "./Aurora";
import SplitText, { type Linha } from "./SplitText";

interface PageHeroProps {
  eyebrow: string;
  titulo: (string | Linha)[];
  descricao?: ReactNode;
  children?: ReactNode; // botões / chips
  lateral?: ReactNode; // imagem ou arte à direita
  cor?: string; // cor de destaque da página
}

/** Abertura padrão das páginas internas: título gigante + luzes de palco. */
export default function PageHero({ eyebrow, titulo, descricao, children, lateral, cor }: PageHeroProps) {
  return (
    <section
      className="relative isolate overflow-hidden pb-16 pt-32 md:pb-24 md:pt-44"
      style={cor ? ({ "--accent": cor } as CSSProperties) : undefined}
    >
      <Aurora
        manchas={
          cor
            ? [
                { cor: "var(--accent)", tamanho: "55vmax", opacidade: 0.38, duracao: 22, pos: { top: "-30%", right: "-15%" } },
                { cor: "var(--violeta-claro)", tamanho: "40vmax", opacidade: 0.25, duracao: 26, pos: { bottom: "-25%", left: "-10%" } },
              ]
            : undefined
        }
      />

      <div className={`shell relative z-10 ${lateral ? "grid items-center gap-12 lg:grid-cols-[1.15fr_1fr]" : ""}`}>
        <div>
          <Entrada y={16}>
            <p className="glass eyebrow inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-tinta/80">
              <span aria-hidden className="h-3.5 w-0.5 rounded-full" style={{ background: cor ?? "var(--magenta)" }} />
              {eyebrow}
            </p>
          </Entrada>

          <SplitText as="h1" linhas={titulo} noCarregamento delay={0.1} className="display display-lg mt-6 text-tinta" />

          {descricao && (
            <Entrada delay={0.35} y={20}>
              <div className="mt-7 max-w-xl text-lg leading-relaxed text-nevoa md:text-xl">{descricao}</div>
            </Entrada>
          )}

          {children && (
            <Entrada delay={0.5} y={20}>
              <div className="mt-9 flex flex-wrap items-center gap-3">{children}</div>
            </Entrada>
          )}
        </div>

        {lateral && (
          <Entrada delay={0.25} y={50}>
            {lateral}
          </Entrada>
        )}
      </div>
    </section>
  );
}
