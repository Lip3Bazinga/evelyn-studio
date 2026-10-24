export const siteConfig = {
  name: "Evelyn Studio de Dança",
  shortName: "Evelyn Studio",
  description:
    "Estúdio de dança referência em Franca, SP. Ballet, jazz, contemporâneo, hip hop, sapateado e ginástica rítmica para todas as idades.",
  url: "https://www.evelynstudiodedanca.com.br",
  whatsapp: "5516999999999", // placeholder — cliente fornece
  phone: "(16) 3711-4538",
  address: "Rua General Teles, 1900 — Centro, Franca/SP",
  instagram: "https://www.instagram.com/evelynstudiodedanca/",
  facebook: "https://www.facebook.com/evelynstudiodedanca/",
};

export interface Modalidade {
  slug: string;
  nome: string;
  tagline: string;
  descricao: string;
  faixaEtaria: string;
  beneficios: string[];
  imagem: string; // placeholder path
}

export const modalidades: Modalidade[] = [
  {
    slug: "ballet-classico",
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
    imagem: "/placeholder-ballet.jpg",
  },
  {
    slug: "jazz",
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
    imagem: "/placeholder-jazz.jpg",
  },
  {
    slug: "contemporaneo",
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
    imagem: "/placeholder-contemporaneo.jpg",
  },
  {
    slug: "hip-hop",
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
    imagem: "/placeholder-hiphop.jpg",
  },
  {
    slug: "sapateado",
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
    imagem: "/placeholder-sapateado.jpg",
  },
  {
    slug: "ginastica-ritmica",
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
    imagem: "/placeholder-gr.jpg",
  },
];

export interface MembroEquipe {
  nome: string;
  cargo: string;
  bio: string;
  imagem: string;
}

export const equipe: MembroEquipe[] = [
  {
    nome: "Evelyn",
    cargo: "Diretora e Professora",
    bio: "Fundadora do estúdio, Evelyn traz mais de uma década de experiência em dança e pedagogia. Sua paixão pela arte move cada aula e cada decisão do estúdio.",
    imagem: "/placeholder-evelyn.jpg",
  },
  {
    nome: "Professora Ana",
    cargo: "Ballet Clássico",
    bio: "Formada em dança clássica com especialização em metodologia Vaganova. Dedica-se ao ensino do ballet desde as turmas infantis até as avançadas.",
    imagem: "/placeholder-prof2.jpg",
  },
  {
    nome: "Professora Carla",
    cargo: "Jazz e Contemporâneo",
    bio: "Com formação em dança contemporânea e jazz, Carla traz coreografias autorais que desafiam e inspiram os alunos a irem além.",
    imagem: "/placeholder-prof3.jpg",
  },
  {
    nome: "Professora Mariana",
    cargo: "Hip Hop e Sapateado",
    bio: "Especialista em danças urbanas e sapateado americano, Mariana conecta seus alunos com a energia e a musicalidade dessas modalidades.",
    imagem: "/placeholder-prof4.jpg",
  },
];

export interface Espetaculo {
  ano: number;
  titulo: string;
  descricao: string;
  imagem: string;
}

export const espetaculos: Espetaculo[] = [
  {
    ano: 2024,
    titulo: "Espetáculo de Encerramento 2024",
    descricao:
      "Uma noite mágica que reuniu todas as turmas no palco do Teatro Municipal de Franca, celebrando um ano de dedicação e evolução.",
    imagem: "/placeholder-show1.jpg",
  },
  {
    ano: 2023,
    titulo: "Festival de Dança 2023",
    descricao:
      "Participação no festival regional com apresentações de ballet clássico, jazz e contemporâneo, com destaque para as coreografias autorais.",
    imagem: "/placeholder-show2.jpg",
  },
  {
    ano: 2022,
    titulo: "Mostra de Dança 2022",
    descricao:
      "Primeira grande mostra pós-pandemia, trazendo emoção ao público e marcando o retorno triunfal ao palco.",
    imagem: "/placeholder-show3.jpg",
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
