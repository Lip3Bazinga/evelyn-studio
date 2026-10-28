import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { linksSecundarios, navLinks, siteConfig, getWhatsAppUrl } from "@/lib/data";
import Aurora from "./Aurora";
import CopyrightYear from "./CopyrightYear";

const redes = [
  { href: siteConfig.instagram, label: "Instagram" },
  { href: siteConfig.facebook, label: "Facebook" },
  { href: getWhatsAppUrl(), label: "WhatsApp" },
];

export default function Footer() {
  return (
    <footer className="relative isolate mt-auto overflow-hidden bg-tinta text-white">
      <Aurora preset="escuro" />

      <div className="shell relative z-10 pt-20 md:pt-28">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid size-14 place-items-center rounded-full bg-white">
                <Image src="/images/logo.webp" alt="" width={48} height={48} className="size-12" />
              </span>
              <p className="display text-3xl">
                Evelyn <span className="serif-accent text-white/70">studio de dança</span>
              </p>
            </div>
            <p className="mt-6 max-w-sm text-white/65 leading-relaxed">
              Ballet, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica em Franca/SP. Uma escola
              onde cada aluno é visto como único.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="eyebrow text-sol">Navegue</p>
            <ul className="mt-5 grid gap-2.5">
              {[...navLinks, ...linksSecundarios].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-white/75 transition-colors hover:text-white"
                  >
                    <span className="h-px w-0 bg-magenta transition-all duration-300 group-hover:w-4" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="eyebrow text-sol">Visite</p>
            <address className="mt-5 not-italic text-white/75 leading-relaxed">
              {siteConfig.address}
              <br />
              <a href={`tel:${siteConfig.phone.replace(/\D/g, "")}`} className="hover:text-white">
                {siteConfig.phone}
              </a>
            </address>
            <ul className="mt-4 text-sm text-white/55">
              {siteConfig.horarios.map((h) => (
                <li key={h.dias}>
                  {h.dias}: {h.horas}
                </li>
              ))}
            </ul>
            <ul className="mt-7 flex flex-wrap gap-2">
              {redes.map((r) => (
                <li key={r.label}>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="glass-dark inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-sm transition-colors hover:bg-white hover:text-tinta"
                  >
                    {r.label} <ArrowUpRight size={14} />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-white/10 py-6 text-xs text-white/40 sm:flex-row sm:justify-between">
          <p>
            © <CopyrightYear /> {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p>Feito com movimento em Franca/SP</p>
        </div>
      </div>

      {/* Assinatura gigante */}
      <p
        aria-hidden
        className="display text-gradient pointer-events-none relative z-0 -mb-[0.22em] select-none whitespace-nowrap text-center text-[25vw] leading-[0.8]"
      >
        evelyn
      </p>
    </footer>
  );
}
