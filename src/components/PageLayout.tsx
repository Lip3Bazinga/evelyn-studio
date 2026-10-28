import { ViewTransition, type ReactNode } from "react";

/** Envolve o conteúdo de cada página; a troca entre páginas é um fade curto. */
export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <ViewTransition enter="cortina" exit="cortina" default="none">
      <main id="conteudo" tabIndex={-1} className="relative flex-1 outline-none">{children}</main>
    </ViewTransition>
  );
}
