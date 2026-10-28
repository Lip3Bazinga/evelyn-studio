import { modalidades, siteConfig } from "@/lib/data";

/** Dados estruturados (schema.org) para o Google entender que é uma escola de dança local. */
export default function DadosEstruturados() {
  const dados = {
    "@context": "https://schema.org",
    "@type": "DanceSchool",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon.png`,
    image: `${siteConfig.url}/opengraph-image.jpg`,
    telephone: "+55" + siteConfig.phone.replace(/\D/g, ""),
    address: {
      "@type": "PostalAddress",
      streetAddress: "Rua General Teles, 1900",
      addressLocality: "Franca",
      addressRegion: "SP",
      addressCountry: "BR",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "21:00",
      },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "08:00", closes: "12:00" },
    ],
    sameAs: [siteConfig.instagram, siteConfig.facebook],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Modalidades",
      itemListElement: modalidades.map((m) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Course", name: m.nome, description: m.descricao },
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(dados).replace(/</g, "\\u003c") }}
    />
  );
}
