import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <aside aria-label="Atendimento">
      <a
        href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre o Evelyn Studio de Dança.")}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Fale conosco no WhatsApp"
        className="fixed bottom-5 right-5 z-40 grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-105 md:bottom-7 md:right-7"
      >
        <MessageCircle size={24} />
      </a>
    </aside>
  );
}
