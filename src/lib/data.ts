import { foto, type Imagem } from "./images";

export const siteConfig = {
  name: "Evelyn Studio de Dança",
  shortName: "Evelyn Studio",
  description:
    "Estúdio de dança referência em Franca, SP. Ballet, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica para todas as idades.",
  // Endereço público do site (sitemap, links canônicos, imagem de compartilhamento).
  // Na Vercel usa automaticamente o domínio de produção do projeto; NEXT_PUBLIC_SITE_URL sobrescreve.
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "https://www.evelynstudiodedanca.com.br"),
  // Número do WhatsApp com DDI+DDD, só dígitos. Pode ser definido na Vercel (NEXT_PUBLIC_WHATSAPP).
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP ?? "5516999999999", // TODO: número real da cliente
  phone: "(16) 3711-4538",
  address: "Rua General Teles, 1900 — Centro, Franca/SP",
  instagram: "https://www.instagram.com/evelynstudiodedanca/",
  facebook: "https://www.facebook.com/evelynstudiodedanca/",
  horarios: [
    { dias: "Segunda a sexta", horas: "8h às 21h" },
    { dias: "Sábados", horas: "8h às 12h" },
  ],
};

export const navLinks = [
  { href: "/escola", label: "Escola" },
  { href: "/modalidades", label: "Modalidades" },
  { href: "/equipe", label: "Equipe" },
  { href: "/espetaculos", label: "Espetáculos" },
  { href: "/contato", label: "Contato" },
] as const;

export const linksSecundarios = [
  { href: "/locacao-de-cenarios", label: "Locação de Cenários" },
  { href: "/infinita-danca", label: "Infinita Dança" },
  { href: "/parceiros", label: "Parceiros" },
] as const;

export interface Modalidade {
  slug: string;
  nome: string;
  tagline: string;
  descricao: string;
  faixaEtaria: string;
  beneficios: string[];
  /** Cor de destaque da modalidade — tinge cards, hero e detalhes */
  cor: string;
  imagem?: Imagem; // sem foto → a página mostra um espaço reservado
}

export const modalidades: Modalidade[] = [
  {
    slug: "ballet-classico",
    cor: "#ff2e93",
    nome: "Ballet Clássico",
    tagline: "A base de toda a dança",
    descricao:
      "O ballet clássico desenvolve técnica, postura, disciplina e expressão artística. Nossas turmas vão desde o baby class até turmas avançadas, respeitando o desenvolvimento de cada aluno.",
    faixaEtaria: "A partir dos 3 anos",
    beneficios: [
      "Postura e consciência corporal",
      "Coordenação motora",
      "Disciplina e concentração",
      "Expressão artística",
      "Flexibilidade e força",
    ],
    imagem: foto(
      "modalidades/ballet-classico/01-img-2942-edited.webp",
      "Alunas de ballet clássico com os braços em posição, em frente ao letreiro do estúdio",
    ),
  },
  {
    slug: "jazz",
    cor: "#ff7a2f",
    nome: "Jazz",
    tagline: "Energia e expressão em cada passo",
    descricao:
      "As aulas de jazz combinam técnica, musicalidade e expressão corporal. Com coreografias dinâmicas e envolventes, os alunos desenvolvem versatilidade e presença de palco.",
    faixaEtaria: "A partir dos 6 anos",
    beneficios: [
      "Musicalidade e ritmo",
      "Expressão corporal",
      "Condicionamento físico",
      "Versatilidade artística",
      "Presença de palco",
    ],
    imagem: foto(
      "modalidades/jazz/01.jpg",
      "Turma de jazz em pose coreografada junto à barra do estúdio",
    ),
  },
  {
    slug: "contemporaneo",
    cor: "#8a4bff",
    nome: "Contemporâneo",
    tagline: "Liberdade criativa no movimento",
    descricao:
      "A dança contemporânea explora a liberdade de movimentos e a expressão individual. Os alunos são incentivados a criar, improvisar e descobrir sua própria linguagem corporal.",
    faixaEtaria: "A partir dos 10 anos",
    beneficios: [
      "Criatividade e improvisação",
      "Consciência corporal profunda",
      "Expressão emocional",
      "Flexibilidade artística",
      "Autoconhecimento",
    ],
  },
  {
    slug: "hip-hop",
    cor: "#f5b500",
    nome: "Hip Hop",
    tagline: "Ritmo e atitude",
    descricao:
      "Aulas cheias de energia com coreografias inspiradas na cultura urbana. O hip hop trabalha ritmo, coordenação e autoconfiança, conectando os alunos com a música contemporânea.",
    faixaEtaria: "A partir dos 7 anos",
    beneficios: [
      "Ritmo e musicalidade",
      "Condicionamento cardiovascular",
      "Autoconfiança e atitude",
      "Trabalho em grupo",
      "Coordenação motora",
    ],
  },
  {
    slug: "sapateado",
    cor: "#ff3b4e",
    nome: "Sapateado",
    tagline: "Musicalidade nos pés",
    descricao:
      "No sapateado, os pés são o instrumento. As aulas desenvolvem ritmo, coordenação e musicalidade de forma única, transformando cada aluno em percussionista e dançarino ao mesmo tempo.",
    faixaEtaria: "A partir dos 6 anos",
    beneficios: [
      "Ritmo e percussão corporal",
      "Coordenação motora refinada",
      "Musicalidade aprofundada",
      "Memória rítmica",
      "Condicionamento físico",
    ],
  },
  {
    slug: "ginastica-ritmica",
    cor: "#14c7a9",
    nome: "Ginástica Rítmica",
    tagline: "Flexibilidade e graça",
    descricao:
      "A ginástica rítmica une dança, ginástica e manipulação de aparelhos. As alunas desenvolvem flexibilidade, coordenação e graça em coreografias com fita, bola, arco e corda.",
    faixaEtaria: "A partir dos 4 anos",
    beneficios: [
      "Flexibilidade e alongamento",
      "Coordenação com aparelhos",
      "Graça e elegância",
      "Equilíbrio e agilidade",
      "Disciplina esportiva",
    ],
  },
];

export interface MembroEquipe {
  nome: string;
  cargo: string;
  bio?: string;
  imagem: Imagem;
}

export const equipe: MembroEquipe[] = [
  {
    nome: "Evelyn Branquinho",
    cargo: "Diretora e Professora de Baby Class, Ballet e Yoga",
    bio: "Iniciou seus estudos aos 5 anos, em Franca, e aos 15 passou a lecionar. Fundou sua escola aos 24 anos com o objetivo de ajudar o desenvolvimento da criança através da dança.",
    imagem: foto("equipe/01-whatsapp-image-2023-03-23-at-14-17-30.jpg", "Evelyn Branquinho, diretora do Evelyn Studio"),
  },
  {
    nome: "Fabiana Durigan",
    cargo: "Professora de Ballet",
    imagem: foto("equipe/02-img-7190.jpg", "Fabiana Durigan, professora de ballet"),
  },
  {
    nome: "Juliane Ribeiro",
    cargo: "Professora de Baby Class e Ballet",
    imagem: foto("equipe/03-2019-01-09-11-45-48-1.jpg", "Juliane Ribeiro, professora de baby class e ballet"),
  },
  {
    nome: "Guilherme Avelar",
    cargo: "Professor de Jazz e Ballet Fitness",
    imagem: foto("equipe/04-img-0238.jpg", "Guilherme Avelar, professor de jazz e ballet fitness"),
  },
  {
    nome: "Naiara Malaspini",
    cargo: "Professora de Baby Class e Ballet",
    imagem: foto("equipe/05-img-3120.jpg", "Naiara Malaspini, professora de baby class e ballet"),
  },
  {
    nome: "Letícia Castro",
    cargo: "Professora de Ballet Adulto",
    imagem: foto("equipe/06-06760128-d674-4f28-834d-0c97b6ebe5a2.jpg", "Letícia Castro, professora de ballet adulto"),
  },
  {
    nome: "Noemia Branquinho",
    cargo: "Financeiro",
    imagem: foto("equipe/07-img-3138.jpg", "Noemia Branquinho, do financeiro"),
  },
  {
    nome: "Neiva Branquinho",
    cargo: "Secretaria",
    imagem: foto("equipe/08-img-3141.jpg", "Neiva Branquinho, da secretaria"),
  },
];

export function getWhatsAppUrl(mensagem?: string): string {
  const base = `https://wa.me/${siteConfig.whatsapp}`;
  if (mensagem) {
    return `${base}?text=${encodeURIComponent(mensagem)}`;
  }
  return base;
}

export function getWhatsAppModalidade(modalidade: string): string {
  return getWhatsAppUrl(
    `Olá! Tenho interesse em agendar uma aula experimental de ${modalidade}. Poderia me dar mais informações?`
  );
}

export const parceiros = [
  { nome: "Sensus Vitae — Instituto de Terapia Ocupacional", arquivo: "01-captura-de-tela-2022-04-15-as-13-23-10.webp" },
  { nome: "Juliane Andrade Estética", arquivo: "02-logo-juliane-andrade-edited.webp" },
  { nome: "Pão Nosso Cafés Especiais", arquivo: "03-logo-pao-nosso-cafes-especiais-degrade-2.webp" },
  { nome: "Tutto Acessórios", arquivo: "04-1676985843505-tutto-acessorios-prancheta-1-copia.webp" },
  { nome: "Ballet & Cia Store", arquivo: "05-image-6487327.jpg" },
  { nome: "Tip Top", arquivo: "06-logo-tip-top-horizontal.webp" },
  { nome: "Dunz", arquivo: "07-14792487-d329-4f2d-b04e-c9b361530161.jpg" },
  { nome: "Bamblas Maquiagem e Acessórios", arquivo: "08-bamblas.jpg" },
  { nome: "CCBEU American Space", arquivo: "09-logo-ccbeu.jpg" },
  { nome: "Brownie Lab", arquivo: "10-alinhado-fundo-transparente.webp" },
].map((p) => ({ nome: p.nome, logo: foto(`parceiros/${p.arquivo}`, `Logo ${p.nome}`) }));

/** Texto escuro ou claro sobre uma cor de destaque: escolhe o de maior contraste (WCAG). */
export function textoSobre(cor: string): string {
  const lum = (hex: string) => {
    const h = hex.replace("#", "");
    const [r, g, b] = [0, 2, 4].map((i) => {
      const c = parseInt(h.slice(i, i + 2), 16) / 255;
      return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
  };
  const contraste = (a: number, b: number) => (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
  const l = lum(cor);
  return contraste(l, 1) >= contraste(l, lum("#1b0a2a")) ? "#ffffff" : "var(--tinta)";
}
