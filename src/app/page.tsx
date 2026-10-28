import type { Metadata } from "next";
import PageLayout from "@/components/PageLayout";
import DadosEstruturados from "@/components/DadosEstruturados";
import CtaFinal from "@/components/CtaFinal";
import HomeHero from "@/components/home/HomeHero";
import Faixas from "@/components/home/Faixas";
import Sobre from "@/components/home/Sobre";
import ModalidadesStage from "@/components/home/ModalidadesStage";
import EspetaculosRail from "@/components/home/EspetaculosRail";
import EquipePreview from "@/components/home/EquipePreview";
import InfinitaQuote from "@/components/home/InfinitaQuote";
import ParceirosStrip from "@/components/home/ParceirosStrip";
import CenariosTeaser from "@/components/home/CenariosTeaser";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <PageLayout>
      <DadosEstruturados />
      <HomeHero />
      <Faixas />
      <Sobre />
      <ModalidadesStage />
      <EspetaculosRail />
      <EquipePreview />
      <InfinitaQuote />
      <CenariosTeaser />
      <ParceirosStrip />
      <CtaFinal />
    </PageLayout>
  );
}
