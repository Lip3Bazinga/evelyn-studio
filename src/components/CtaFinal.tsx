import { ArrowUpRight, MessageCircle } from "lucide-react";
import CtaButton from "./CtaButton";
import SplitText, { type Linha } from "./SplitText";
import { Reveal } from "./SectionReveal";
import { getWhatsAppUrl } from "@/lib/data";

interface CtaFinalProps {
  titulo?: (string | Linha)[];
  texto?: string;
  mensagem?: string;
  botao?: string;
}

/** Bloco de chamada final. */
export default function CtaFinal({
  titulo = ["Sua primeira aula", { texto: "é por nossa conta.", className: "serif-accent" }],
  texto = "Agende uma aula experimental gratuita pelo WhatsApp e descubra como a dança pode transformar o seu dia a dia.",
  mensagem = "Olá! Quero agendar uma aula experimental gratuita no Evelyn Studio!",
  botao = "Agendar pelo WhatsApp",
}: CtaFinalProps) {
  return (
    <section className="section">
      <div className="shell">
        <Reveal className="relative isolate overflow-hidden rounded-[2.5rem] bg-tinta px-6 py-16 text-white md:rounded-[3rem] md:px-16 md:py-20">
          <div className="relative z-10">
            <div>
              <SplitText linhas={titulo} className="display display-md" />
              <p className="mt-6 max-w-xl text-lg text-white/70">{texto}</p>
              <div className="mt-10 flex flex-wrap gap-3">
                <CtaButton href={getWhatsAppUrl(mensagem)} external>
                  <MessageCircle size={19} />
                  {botao}
                </CtaButton>
                <CtaButton href="/modalidades" variant="vidroEscuro">
                  Ver modalidades <ArrowUpRight size={18} />
                </CtaButton>
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
