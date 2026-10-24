import Link from "next/link";
import type { ReactNode } from "react";

interface CtaButtonProps {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  external?: boolean;
  className?: string;
}

export default function CtaButton({
  href,
  children,
  variant = "primary",
  external = false,
  className = "",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-lg text-sm font-medium transition-all duration-200";

  const variants = {
    primary: "bg-luz text-palco hover:bg-luz-light shadow-sm hover:shadow-md",
    secondary:
      "bg-impulso text-palco hover:bg-impulso-light shadow-sm hover:shadow-md",
    outline:
      "border-2 border-impulso text-impulso hover:bg-impulso hover:text-palco",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
