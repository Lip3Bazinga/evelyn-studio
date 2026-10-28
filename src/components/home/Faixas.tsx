import Marquee from "../Marquee";
import { modalidades } from "@/lib/data";

function Estrela({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`size-[0.7em] shrink-0 ${className}`} aria-hidden>
      <path
        fill="currentColor"
        d="M12 0c.6 6.4 5.6 11.4 12 12-6.4.6-11.4 5.6-12 12-.6-6.4-5.6-11.4-12-12C6.4 11.4 11.4 6.4 12 0Z"
      />
    </svg>
  );
}

/** Faixa reta com as modalidades, correndo devagar. */
export default function Faixas() {
  const nomes = modalidades.map((m) => m.nome);
  return (
    <section aria-label="Modalidades em destaque" className="border-y border-tinta/10 py-6">
      <Marquee velocidade={28}>
        {nomes.map((n, i) => (
          <span key={n} className="display flex items-center gap-8 pr-8 text-[clamp(1.6rem,3.4vw,2.6rem)] text-tinta">
            <span className={i % 2 ? "serif-accent text-nevoa" : ""}>{n}</span>
            <Estrela className="text-magenta" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
