import { Reveal } from "./SectionReveal";

/** Parágrafo de destaque (texto grande). */
export default function ScrollText({ texto, className = "" }: { texto: string; className?: string }) {
  return (
    <Reveal>
      <p className={className}>{texto}</p>
    </Reveal>
  );
}
