import Link from "next/link";
import { Camera, Globe, MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";
import CopyrightYear from "./CopyrightYear";

const footerLinks = [
  { href: "/escola", label: "Escola" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/equipe", label: "Equipe" },
  { href: "/espetaculos", label: "Espetáculos" },
  { href: "/contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="bg-profundidade text-palco/60 mt-auto">
      <div className="container-narrow py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <p className="font-display text-lg font-medium text-palco mb-3">
              {siteConfig.shortName}
            </p>
            <p className="text-sm leading-relaxed">
              {siteConfig.address}
              <br />
              {siteConfig.phone}
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="text-sm font-medium text-palco/80 mb-3">
              Navegação
            </p>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-palco transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <p className="text-sm font-medium text-palco/80 mb-3">
              Redes sociais
            </p>
            <div className="flex gap-3">
              <a
                href={siteConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-palco/20 flex items-center justify-center hover:border-impulso hover:text-impulso transition-colors"
                aria-label="Instagram"
              >
                <Camera size={18} />
              </a>
              <a
                href={siteConfig.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-palco/20 flex items-center justify-center hover:border-impulso hover:text-impulso transition-colors"
                aria-label="Facebook"
              >
                <Globe size={18} />
              </a>
              <a
                href={`https://wa.me/${siteConfig.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-palco/20 flex items-center justify-center hover:border-luz hover:text-luz transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-palco/10 text-xs text-palco/30">
          &copy; <CopyrightYear /> {siteConfig.name}. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
