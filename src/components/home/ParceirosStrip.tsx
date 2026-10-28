import Image from "next/image";
import Link from "next/link";
import Marquee from "../Marquee";
import { parceiros } from "@/lib/data";

export default function ParceirosStrip() {
  return (
    <section aria-label="Parceiros" className="pb-6 pt-4">
      <div className="shell mb-8 flex items-center justify-between gap-4">
        <p className="eyebrow text-nevoa">Quem caminha com a gente</p>
        <Link href="/parceiros" className="text-sm font-semibold text-tinta underline decoration-magenta decoration-2 underline-offset-4">
          Parceiros
        </Link>
      </div>
      <Marquee velocidade={35} className="[mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        {parceiros.map(({ logo }) => (
          <span key={logo.src} className="glass mx-2.5 grid h-24 w-44 place-items-center rounded-2xl p-4">
            <Image
              src={logo.src}
              alt={logo.alt}
              width={logo.width}
              height={logo.height}
              sizes="160px"
              className="max-h-16 w-auto max-w-full object-contain grayscale transition duration-500 hover:grayscale-0"
            />
          </span>
        ))}
      </Marquee>
    </section>
  );
}
