import Entrada from "@/components/Entrada";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ViewTransition } from "react";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Camera, MapPin } from "lucide-react";
import PageLayout from "@/components/PageLayout";
import Galeria from "@/components/Galeria";
import SplitText from "@/components/SplitText";
import { capaDoEspetaculo, espetaculos } from "@/lib/images";

// Todas as páginas são geradas no build (generateStaticParams); a navigação
// pode esperar pelos params sem placeholder.
export const instant = false;

export function generateStaticParams() {
  return espetaculos.map((show) => ({ slug: show.slug }));
}

export async function generateMetadata({ params }: PageProps<"/espetaculos/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const show = espetaculos.find((s) => s.slug === slug);
  if (!show) return { title: "Espetáculo" };
  return {
    title: `${show.titulo} (${show.ano})`,
    description: `Fotos do espetáculo ${show.titulo}, apresentado em ${show.ano} — ${show.local}.`,
    alternates: { canonical: `/espetaculos/${show.slug}` },
  };
}

export default async function EspetaculoPage({ params }: PageProps<"/espetaculos/[slug]">) {
  const { slug } = await params;
  const i = espetaculos.findIndex((s) => s.slug === slug);
  if (i < 0) notFound();

  const show = espetaculos[i];
  const capa = capaDoEspetaculo(show);
  // a lista está do mais novo para o mais antigo
  const maisNovo = espetaculos[i - 1];
  const maisAntigo = espetaculos[i + 1];

  return (
    <PageLayout>
      {/* Capa em tela cheia */}
      <section className="relative isolate flex min-h-[88svh] items-end overflow-hidden bg-tinta pb-14 pt-32 text-white md:pb-20">
        <ViewTransition name={`show-${show.slug}`} share="morph" default="none">
          <div className="absolute inset-0 -z-10">
            <Image src={capa.src} alt={capa.alt} fill preload sizes="100vw" className="object-cover" />
          </div>
        </ViewTransition>
        <span
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to top, var(--tinta) 0%, rgba(27,10,42,.65) 35%, rgba(27,10,42,.1) 70%)",
          }}
        />

        <div className="shell">
          <Entrada y={16}>
            <Link href="/espetaculos" className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
              <ArrowLeft size={16} /> Todos os espetáculos
            </Link>
          </Entrada>
          <p className="display text-outline mt-8 text-6xl text-sol md:text-8xl">{show.ano}</p>
          <SplitText as="h1" noCarregamento delay={0.1} className="display display-lg mt-2" linhas={[show.titulo]} />
          <Entrada delay={0.3} y={16}>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <MapPin size={15} /> {show.local}
              </span>
              <span className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm">
                <Camera size={15} /> {show.fotos.length} fotos
              </span>
            </div>
          </Entrada>
        </div>
      </section>

      <section className="section">
        <div className="shell">
          <Galeria fotos={show.fotos} />

          <nav aria-label="Outros espetáculos" className="mt-20 grid gap-4 md:grid-cols-2">
            {maisAntigo ? (
              <Link prefetch href={`/espetaculos/${maisAntigo.slug}`} className="glass group flex items-center gap-5 rounded-[2rem] p-6">
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-tinta text-white transition-transform group-hover:-translate-x-1">
                  <ArrowLeft size={18} />
                </span>
                <span>
                  <span className="eyebrow text-nevoa">{maisAntigo.ano}</span>
                  <span className="display block text-2xl text-tinta">{maisAntigo.titulo}</span>
                </span>
              </Link>
            ) : (
              <span />
            )}
            {maisNovo && (
              <Link
                prefetch href={`/espetaculos/${maisNovo.slug}`}
                className="glass group flex items-center justify-end gap-5 rounded-[2rem] p-6 text-right"
              >
                <span>
                  <span className="eyebrow text-nevoa">{maisNovo.ano}</span>
                  <span className="display block text-2xl text-tinta">{maisNovo.titulo}</span>
                </span>
                <span className="grid size-12 shrink-0 place-items-center rounded-full bg-tinta text-white transition-transform group-hover:translate-x-1">
                  <ArrowRight size={18} />
                </span>
              </Link>
            )}
          </nav>
        </div>
      </section>
    </PageLayout>
  );
}
