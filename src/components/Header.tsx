"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import Aurora from "./Aurora";
import { getWhatsAppUrl, linksSecundarios, navLinks, siteConfig } from "@/lib/data";

export default function Header() {
  const pathname = usePathname();
  const [aberto, setAberto] = useState(false);
  const [rolou, setRolou] = useState(false);
  const [hover, setHover] = useState<string | null>(null);
  const { scrollY } = useScroll();

  // Sempre fixo no topo; ao rolar, só fica um pouco mais compacto
  useMotionValueEvent(scrollY, "change", (y) => setRolou(y > 24));

  // Trava a rolagem com o menu mobile aberto
  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    if (!aberto) return;
    const tecla = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", tecla);
    return () => window.removeEventListener("keydown", tecla);
  }, [aberto]);

  const ativo = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <>
      <header
        style={{ viewTransitionName: "site-header" }}
        className="fixed inset-x-0 top-3 md:top-5 z-50 px-3 md:px-6"
      >
        <nav
          aria-label="Principal"
          className={`header-glass mx-auto flex h-16 items-center justify-between rounded-full pl-2.5 pr-2.5 md:pl-3 transition-[max-width,box-shadow] duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
            rolou ? "max-w-5xl" : "max-w-7xl"
          }`}
        >
          <Link
            href="/"
            className="group flex items-center gap-2.5 rounded-full pr-3"
          >
            <span className="relative grid size-11 place-items-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-violeta/10">
              <Image src="/images/logo.webp" alt="" width={40} height={40} className="size-10" preload />
            </span>
            <span className="leading-none">
              <span className="display block text-[1.35rem] tracking-tight text-tinta">Evelyn</span>
              <span className="eyebrow block text-[0.55rem] tracking-[0.28em] text-violeta">
                studio de dança
              </span>
            </span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1" onMouseLeave={() => setHover(null)}>
            {navLinks.map((link) => {
              const marcado = hover ? hover === link.href : ativo(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onMouseEnter={() => setHover(link.href)}
                    className={`relative isolate block rounded-full px-4 py-2 text-[0.92rem] font-medium transition-colors duration-300 ${
                      marcado ? "text-white" : "text-tinta/75 hover:text-tinta"
                    }`}
                    aria-current={ativo(link.href) ? "page" : undefined}
                  >
                    {marcado && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 -z-10 rounded-full bg-tinta"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental no Evelyn Studio.")}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full px-5 py-3 text-sm font-semibold text-white transition hover:brightness-110 shadow-[0_30px_60px_-35px_rgba(27,10,42,.35)]"
              style={{ background: "var(--grad-palco)" }}
            >
              Aula experimental
              <ArrowUpRight size={16} />
            </a>

            <button
              type="button"
              onClick={() => setAberto((v) => !v)}
              className="grid size-12 place-items-center rounded-full bg-tinta text-white lg:hidden"
              aria-label={aberto ? "Fechar menu" : "Abrir menu"}
              aria-expanded={aberto}
              aria-controls="menu-mobile"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.span
                  key={aberto ? "x" : "menu"}
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {aberto ? <X size={20} /> : <Menu size={20} />}
                </motion.span>
              </AnimatePresence>
            </button>
          </div>
        </nav>
      </header>

      {/* Menu mobile em tela cheia */}
      <AnimatePresence>
        {aberto && (
          <motion.div
            id="menu-mobile"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 overflow-y-auto bg-tinta text-white lg:hidden"
          >
            <Aurora preset="escuro" />

            <div className="relative z-10 flex min-h-full flex-col px-6 pb-10 pt-28">
              <ul className="space-y-1">
                {[...navLinks, ...linksSecundarios].map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 + i * 0.02, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setAberto(false)}
                      className={`display flex items-baseline gap-3 py-1.5 ${
                        i < navLinks.length ? "text-[2.6rem]" : "text-2xl text-white/60"
                      } ${ativo(link.href) ? "text-gradient-sol" : ""}`}
                    >
                      <span className="eyebrow w-6 text-white/55">{String(i + 1).padStart(2, "0")}</span>
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-auto pt-10 space-y-4"
              >
                <a
                  href={getWhatsAppUrl("Olá! Quero agendar uma aula experimental no Evelyn Studio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between rounded-full px-6 py-4 font-semibold"
                  style={{ background: "var(--grad-palco)" }}
                >
                  Agendar aula experimental <ArrowUpRight size={18} />
                </a>
                <p className="text-sm text-white/55">
                  {siteConfig.address}
                  <br />
                  {siteConfig.phone}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
