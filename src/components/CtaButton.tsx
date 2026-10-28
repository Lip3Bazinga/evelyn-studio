import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "gradient" | "glass" | "dark" | "light" | "vidroEscuro";
  external?: boolean;
  className?: string;
  size?: "md" | "lg";
}

const variantes = {
  gradient: "text-white hover:brightness-110",
  glass: "glass text-tinta hover:bg-white",
  dark: "bg-tinta text-white hover:bg-tinta-2",
  light: "bg-white text-tinta hover:bg-lilas",
  vidroEscuro: "border border-white/35 bg-white/10 text-white backdrop-blur-xl hover:bg-white/20",
};

export default function CtaButton({
  href,
  children,
  variant = "gradient",
  external = false,
  className = "",
  size = "lg",
}: CtaButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2.5 rounded-full font-semibold transition duration-300 ${
    size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3.5 text-sm"
  } ${variantes[variant]} ${className}`;
  const estilo = variant === "gradient" ? { background: "var(--grad-palco)" } : undefined;

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes} style={estilo}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes} style={estilo}>
      {children}
    </Link>
  );
}
