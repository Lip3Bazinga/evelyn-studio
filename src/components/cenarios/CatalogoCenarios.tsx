"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Info, MessageCircle, Ruler, Sparkles, X } from "lucide-react";
import { categorias, cenarios, locacao, nomesDestaque, type Categoria, type Cenario } from "@/lib/cenarios";
import { espetaculos } from "@/lib/images";
import { getWhatsAppUrl } from "@/lib/data";

const mensagem = (c: Cenario) =>
  `Olá! Gostaria de consultar a disponibilidade do cenário "${c.nome}" do Evelyn Studio de Dança.`;

/** Catálogo filtrável; cada cenário abre uma ficha com fotos do painel e em cena. */
export default function CatalogoCenarios() {
  const [filtro, setFiltro] = useState<Categoria | "todos">("todos");
  const [aberto, setAberto] = useState<string | null>(null);

  const lista = useMemo(
    () => (filtro === "todos" ? cenarios : cenarios.filter((c) => c.categoria === filtro)),
    [filtro],
  );

  // Abre a ficha pelo link (#cenario-slug), para poder compartilhar um cenário específico
  useEffect(() => {
    const ler = () => {
      const slug = window.location.hash.replace("#cenario-", "");
      setAberto(cenarios.some((c) => c.slug === slug) ? slug : null);
    };
    ler();
    window.addEventListener("hashchange", ler);
    return () => window.removeEventListener("hashchange", ler);
  }, []);

  const abrir = useCallback((slug: string | null) => {
    setAberto(slug);
    const url = slug ? `#cenario-${slug}` : window.location.pathname + window.location.search;
    window.history.replaceState(null, "", url);
  }, []);

  const indice = aberto ? lista.findIndex((c) => c.slug === aberto) : -1;
  const atual = aberto ? cenarios.find((c) => c.slug === aberto) ?? null : null;

  return (
    <>
      <div className="flex flex-wrap gap-2" role="toolbar" aria-label="Filtrar cenários por tema">
        {[{ id: "todos" as const, nome: "Todos" }, ...categorias].map((cat) => {
          const qtd = cat.id === "todos" ? cenarios.length : cenarios.filter((c) => c.categoria === cat.id).length;
          const ativo = filtro === cat.id;
          return (
            <button
              key={cat.id}
              type="button"
              onClick={() => setFiltro(cat.id)}
              aria-pressed={ativo}
              className={`inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-sm font-semibold transition-colors ${
                ativo ? "bg-tinta text-white" : "glass text-tinta hover:bg-white"
              }`}
            >
              {cat.nome}
              <span className={`text-xs ${ativo ? "text-white/60" : "text-nevoa"}`}>{qtd}</span>
            </button>
          );
        })}
      </div>

      <motion.ul layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence initial={false} mode="popLayout">
          {lista.map((c) => (
            <motion.li
              key={c.slug}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <button
                type="button"
                onClick={() => abrir(c.slug)}
                className="group block w-full text-left"
              >
                <div className="relative aspect-[16/10] overflow-hidden rounded-[1.6rem] bg-tinta">
                  <Image
                    src={c.painel.src}
                    alt={c.painel.alt}
                    fill
                    sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                  {c.emCena.length > 0 && (
                    <span className="glass-dark absolute bottom-3 left-3 rounded-full px-3 py-1 text-xs font-semibold text-white">
                      +{c.emCena.length} {c.emCena.length === 1 ? "foto" : "fotos"} em cena
                    </span>
                  )}
                </div>
                <div className="mt-4 flex items-start justify-between gap-3 px-1">
                  <div>
                    <h3 className="display text-2xl text-tinta">{c.nome}</h3>
                    <p className="mt-1 text-sm text-nevoa">
                      {categorias.find((k) => k.id === c.categoria)?.nome}
                      {c.destaques.length > 0 && ` · ${c.destaques.map((d) => nomesDestaque[d]).join(" · ")}`}
                    </p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-tinta/15 px-3 py-1 text-xs font-semibold text-tinta transition-colors group-hover:bg-tinta group-hover:text-white">
                    Ver ficha
                  </span>
                </div>
              </button>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>

      <AnimatePresence>
        {atual && (
          <Ficha
            key="ficha"
            cenario={atual}
            onFechar={() => abrir(null)}
            onAnterior={indice > 0 ? () => abrir(lista[indice - 1].slug) : undefined}
            onProximo={indice >= 0 && indice < lista.length - 1 ? () => abrir(lista[indice + 1].slug) : undefined}
          />
        )}
      </AnimatePresence>
    </>
  );
}

function Ficha({
  cenario: c,
  onFechar,
  onAnterior,
  onProximo,
}: {
  cenario: Cenario;
  onFechar: () => void;
  onAnterior?: () => void;
  onProximo?: () => void;
}) {
  const fotos = [c.painel, ...c.emCena];
  const [foto, setFoto] = useState(0);
  const [slugAnterior, setSlugAnterior] = useState(c.slug);
  const painel = useRef<HTMLDivElement>(null);
  const show = c.espetaculo ? espetaculos.find((e) => e.slug === c.espetaculo) : undefined;

  // volta para a foto do painel ao trocar de cenário
  if (slugAnterior !== c.slug) {
    setSlugAnterior(c.slug);
    setFoto(0);
  }

  useEffect(() => {
    const tecla = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFechar();
      if (e.key === "ArrowLeft") onAnterior?.();
      if (e.key === "ArrowRight") onProximo?.();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", tecla);
    painel.current?.focus();
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", tecla);
    };
  }, [onFechar, onAnterior, onProximo]);

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={`Cenário ${c.nome}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[80] flex items-end justify-center bg-tinta/70 backdrop-blur-md md:items-center md:p-6"
      onClick={onFechar}
    >
      <div
        ref={painel}
        tabIndex={-1}
        onClick={(e) => e.stopPropagation()}
        className="relative grid outline-none max-h-[92svh] w-full max-w-6xl overflow-y-auto rounded-t-[2rem] bg-creme md:grid-cols-[1.5fr_1fr] md:overflow-hidden md:rounded-[2rem]"
      >
        {/* Fotos */}
        <div className="bg-tinta p-3 md:p-4">
          <div className="relative aspect-[16/10] overflow-hidden rounded-[1.3rem] md:aspect-auto md:h-[min(70svh,34rem)]">
            <AnimatePresence initial={false} mode="popLayout">
              <motion.div
                key={fotos[foto].src}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0"
              >
                <Image src={fotos[foto].src} alt={fotos[foto].alt} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-contain" />
              </motion.div>
            </AnimatePresence>
          </div>
          {fotos.length > 1 && (
            <ul className="mt-3 flex gap-2 overflow-x-auto">
              {fotos.map((f, i) => (
                <li key={f.src}>
                  <button
                    type="button"
                    onClick={() => setFoto(i)}
                    aria-label={i === 0 ? "Ver painel" : `Ver foto em cena ${i}`}
                    aria-pressed={foto === i}
                    className={`relative block h-16 w-24 overflow-hidden rounded-xl ring-2 transition ${
                      foto === i ? "ring-sol" : "ring-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={f.src} alt="" fill sizes="96px" className="object-cover" />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Ficha técnica */}
        <div className="flex flex-col p-6 md:overflow-y-auto md:p-8">
          <div className="flex items-start justify-between gap-4">
            <p className="eyebrow text-magenta-texto">{categorias.find((k) => k.id === c.categoria)?.nome}</p>
            <button
              type="button"
              onClick={onFechar}
              aria-label="Fechar"
              className="-mr-2 -mt-2 grid size-10 shrink-0 place-items-center rounded-full bg-tinta/5 text-tinta hover:bg-tinta/10"
            >
              <X size={20} />
            </button>
          </div>
          <h3 className="display display-sm mt-2 text-tinta">{c.nome}</h3>

          {show && (
            <p className="mt-3 text-sm text-nevoa">
              Criado para o espetáculo{" "}
              <Link href={`/espetaculos/${show.slug}`} className="font-semibold text-tinta underline decoration-magenta decoration-2 underline-offset-4">
                {show.titulo} ({show.ano})
              </Link>
            </p>
          )}

          <dl className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-tinta/5">
              <dt className="flex items-center gap-1.5 text-nevoa">
                <Ruler size={15} /> Medidas
              </dt>
              <dd className="mt-1 font-semibold text-tinta">
                {c.destaques.includes("medida-especial") ? "≈ 6,60 × 3 m" : `≈ ${locacao.altura} × ${locacao.largura}`}
              </dd>
            </div>
            <div className="rounded-2xl bg-white/70 p-4 ring-1 ring-tinta/5">
              <dt className="flex items-center gap-1.5 text-nevoa">
                <Sparkles size={15} /> Acabamento
              </dt>
              <dd className="mt-1 font-semibold text-tinta">
                {c.destaques.includes("impresso") ? "Impresso em malha" : `Pintado à mão · ${locacao.tecido}`}
              </dd>
            </div>
          </dl>

          {c.observacao && (
            <p className="mt-4 flex gap-3 rounded-2xl bg-sol/15 p-4 text-sm leading-relaxed text-tinta">
              <Info size={18} className="mt-0.5 shrink-0 text-laranja" />
              {c.observacao}
            </p>
          )}

          <div className="mt-auto pt-8">
            <a
              href={getWhatsAppUrl(mensagem(c))}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-4 font-semibold text-white transition hover:brightness-110"
              style={{ background: "var(--grad-palco)" }}
            >
              <MessageCircle size={19} /> Consultar disponibilidade
            </a>
            <p className="mt-3 text-center text-xs text-nevoa">
              {locacao.valor} {locacao.valorObs} · o varão não acompanha
            </p>
            <div className="mt-6 flex justify-between gap-3">
              <button
                type="button"
                onClick={onAnterior}
                disabled={!onAnterior}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-tinta hover:bg-tinta/5 disabled:opacity-30"
              >
                <ArrowLeft size={16} /> Anterior
              </button>
              <button
                type="button"
                onClick={onProximo}
                disabled={!onProximo}
                className="inline-flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-tinta hover:bg-tinta/5 disabled:opacity-30"
              >
                Próximo <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
