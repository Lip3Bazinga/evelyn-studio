"use client";

import { useRef, type ReactNode } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "framer-motion";

interface MarqueeProps {
  children: ReactNode;
  /** pixels por segundo */
  velocidade?: number;
  direcao?: 1 | -1;
  className?: string;
}

/** Faixa que corre devagar e em velocidade constante. */
export default function Marquee({ children, velocidade = 30, direcao = -1, className = "" }: MarqueeProps) {
  const x = useMotionValue(0);
  const trilho = useRef<HTMLDivElement>(null);
  const parado = useReducedMotion();

  useAnimationFrame((_, delta) => {
    if (parado) return;
    const largura = (trilho.current?.scrollWidth ?? 0) / 2;
    if (!largura) return;
    let novo = x.get() + direcao * velocidade * (delta / 1000);
    if (novo <= -largura) novo += largura;
    if (novo > 0) novo -= largura;
    x.set(novo);
  });

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div ref={trilho} style={{ x }} className="flex w-max">
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </motion.div>
    </div>
  );
}
