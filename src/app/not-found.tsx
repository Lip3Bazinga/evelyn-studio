import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Aurora from "@/components/Aurora";
import CtaButton from "@/components/CtaButton";

export const metadata: Metadata = {
  title: "Página não encontrada",
};

export default function NotFound() {
  return (
    <PageLayout>
      <section className="relative isolate flex min-h-[80svh] items-center overflow-hidden pb-20 pt-36">
        <Aurora preset="claro" />
        <div className="shell relative z-10">
          <p className="eyebrow text-magenta-texto">Erro 404</p>
          <h1 className="display display-lg mt-5 text-tinta">
            Essa página
            <span className="serif-accent block text-gradient">saiu de cena.</span>
          </h1>
          <p className="mt-6 max-w-md text-lg text-nevoa">
            O endereço pode ter mudado ou não existe mais. Que tal voltar ao início?
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <CtaButton href="/">Voltar ao início</CtaButton>
            <CtaButton href="/modalidades" variant="glass">
              Ver modalidades <ArrowUpRight size={18} />
            </CtaButton>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
