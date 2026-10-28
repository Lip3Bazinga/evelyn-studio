"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section" | "li" | "article";
  y?: number;
}

/** Aparece com um fade curto quando entra na tela. */
export function Reveal({ children, className = "", delay = 0, as = "div", y = 16 }: RevealProps) {
  const Comp = motion[as];
  return (
    <Comp
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay: Math.min(delay, 0.2), ease: "easeOut" }}
      className={className}
    >
      {children}
    </Comp>
  );
}

export default function SectionReveal(props: Omit<RevealProps, "as">) {
  return <Reveal as="section" {...props} />;
}
