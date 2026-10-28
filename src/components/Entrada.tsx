import type { CSSProperties, ReactNode } from "react";

/**
 * Entrada do topo da página em CSS puro: aparece assim que o HTML chega,
 * sem esperar o JavaScript (melhor para o carregamento percebido / LCP).
 */
export default function Entrada({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <div className={`entrada ${className}`} style={{ "--atraso": `${delay}s` } as CSSProperties}>
      {children}
    </div>
  );
}
