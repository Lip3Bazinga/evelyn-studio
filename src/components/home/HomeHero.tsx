import Entrada from "../Entrada";
import Image from "next/image";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import Aurora from "../Aurora";
import CtaButton from "../CtaButton";
import SplitText from "../SplitText";
import { getWhatsAppUrl, modalidades } from "@/lib/data";
import { foto } from "@/lib/images";

const fotoPrincipal = foto(
  "home/02-img-9728.jpg",
  "Meninas de tutu rosa fazendo pose de ballet na barra do estúdio",
);
const fotoSecundaria = foto(
  "home/06.webp",
  "Alunas de ballet em posição na barra, em frente ao letreiro do Evelyn Studio",
);

export default function HomeHero() {
  return (
    <section className="relative isolate overflow-hidden pb-20 pt-32 md:pt-40 lg:pb-28">
      <Aurora preset="claro" />

      <div className="shell relative z-10 grid items-center gap-14 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <p className="glass eyebrow inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-tinta/80">
            <span className="size-2 rounded-full bg-magenta" />
            Estúdio de dança · Franca/SP
          </p>

          <SplitText
            as="h1"
            noCarregamento
            className="display display-xl mt-7 text-tinta"
            linhas={[
              "Onde cada",
              { texto: "movimento", className: "text-gradient pr-[0.06em]" },
              { texto: "conta uma história.", className: "serif-accent text-[0.74em] leading-[1.02] tracking-[-0.02em]" },
            ]}
          />

          <Entrada delay={0.1}>
            <p className="mt-7 max-w-lg text-lg leading-relaxed text-nevoa md:text-xl">
              Ballet, jazz, contemporâneo, hip hop e muito mais — para crianças a partir de 3 anos, jovens e
              adultos. Descubra a dança que move você.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CtaButton
                href={getWhatsAppUrl("Olá! Gostaria de agendar uma aula experimental no Evelyn Studio.")}
                external
              >
                <MessageCircle size={19} />
                Agendar aula experimental
              </CtaButton>
              <CtaButton href="/modalidades" variant="glass">
                Ver modalidades <ArrowUpRight size={18} />
              </CtaButton>
            </div>
          </Entrada>
        </div>

        <Entrada delay={0.15} className="relative mx-auto w-full max-w-[34rem] lg:col-span-5">
          <div className="relative aspect-[4/4.4] overflow-hidden rounded-[2.5rem] shadow-[0_30px_60px_-35px_rgba(27,10,42,.35)]">
            <Image
              src={fotoPrincipal.src}
              alt={fotoPrincipal.alt}
              fill
              preload
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover object-[50%_60%]"
            />
          </div>
          <div className="absolute -bottom-8 -left-2 w-[42%] sm:-left-6 overflow-hidden rounded-full border-[6px] border-creme shadow-lg md:-left-10">
            <div className="relative aspect-square">
              <Image src={fotoSecundaria.src} alt={fotoSecundaria.alt} fill sizes="20vw" className="object-cover object-[60%_50%]" />
            </div>
          </div>
          <p className="glass absolute right-3 top-4 sm:-right-2 sm:top-6 rounded-full px-4 py-2 text-sm font-semibold text-tinta md:-right-6">
            {modalidades.length} modalidades
          </p>
        </Entrada>
      </div>
    </section>
  );
}
