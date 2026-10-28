"use client";

import { motion } from "framer-motion";
import type { CSSProperties, ElementType } from "react";

export interface Linha {
  texto: string;
  /** Classe extra da linha, ex.: "serif-accent text-gradient" */
  className?: string;
}

interface SplitTextProps {
  linhas: (string | Linha)[];
  as?: ElementType;
  className?: string;
  delay?: number;
  /** Anima já no carregamento (padrão: ao entrar na tela) */
  noCarregamento?: boolean;
}

/** Título em linhas; aparece com um fade discreto. */
export default function SplitText({ linhas, as: Tag = "h2", className = "", delay = 0, noCarregamento = false }: SplitTextProps) {
  const conteudo = linhas.map((l, i) => {
    const linha = typeof l === "string" ? { texto: l } : l;
    return (
      <span key={i} className={`block ${linha.className ?? ""}`}>
        {linha.texto}
      </span>
    );
  });

  // No topo da página a entrada é em CSS, para o título aparecer antes do JavaScript
  if (noCarregamento) {
    return (
      <Tag className={className}>
        <span className="entrada block" style={{ "--atraso": `${delay}s` } as CSSProperties}>
          {conteudo}
        </span>
      </Tag>
    );
  }

  return (
    <Tag className={className}>
      <motion.span
        className="block"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-10% 0px" }}
        transition={{ duration: 0.6, delay, ease: "easeOut" }}
      >
        {conteudo}
      </motion.span>
    </Tag>
  );
}
