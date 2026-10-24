"use client";

import { MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/data";
import { motion } from "framer-motion";

export default function WhatsAppButton() {
  return (
    <motion.a
      href={getWhatsAppUrl("Olá! Gostaria de saber mais sobre o Evelyn Studio de Dança.")}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      aria-label="Fale conosco no WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
    >
      <MessageCircle size={26} />
    </motion.a>
  );
}
