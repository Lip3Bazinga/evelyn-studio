// Catálogo de cenários para locação — extraído do PDF "CENÁRIOS ESD" (jan/2025).
// Fotos em public/images/cenarios/<slug>/ (painel.webp + cena-N.webp).
import type { Imagem } from "./images";

export type Categoria = "fantasia" | "natureza" | "ceu" | "cidade" | "interiores";
export type Destaque = "passagem" | "impresso" | "dois-tecidos" | "medida-especial" | "coxias";

export interface Cenario {
  slug: string;
  nome: string;
  categoria: Categoria;
  /** slug do espetáculo em que o cenário foi usado (ver images.ts) */
  espetaculo?: string;
  /** observação importante do catálogo (o que inclui / não inclui) */
  observacao?: string;
  destaques: Destaque[];
  painel: Imagem;
  emCena: Imagem[];
}

export const categorias: { id: Categoria; nome: string }[] = [
  { id: "fantasia", nome: "Fantasia e contos" },
  { id: "natureza", nome: "Natureza e estações" },
  { id: "cidade", nome: "Cidades e fachadas" },
  { id: "interiores", nome: "Interiores" },
  { id: "ceu", nome: "Céu e mundo" },
];

export const nomesDestaque: Record<Destaque, string> = {
  passagem: "Passagem para artistas",
  impresso: "Impresso em malha",
  "dois-tecidos": "Dois tecidos",
  "medida-especial": "Medida especial",
  coxias: "Com 6 coxias",
};

/** Informações gerais do serviço (do catálogo) — edite aqui. */
export const locacao = {
  valor: "R$ 800",
  valorObs: "por cenário, + frete e seguro",
  altura: "6,60 m",
  largura: "11 m",
  tecido: "Rioleem",
  catalogoPdf: "/catalogo-cenarios-evelyn-studio.pdf",
};

export const cenarios: Cenario[] = [
  {
    slug: "toca-do-coelho",
    nome: "Toca do Coelho",
    categoria: "fantasia",
    espetaculo: "2015-a-origem-dos-guardioes",
    destaques: [],
    painel: { src: "/images/cenarios/toca-do-coelho/painel.webp", width: 1146, height: 686, alt: "Painel do cenário Toca do Coelho" },
    emCena: [{ src: "/images/cenarios/toca-do-coelho/cena-1.webp", width: 740, height: 490, alt: "Cenário Toca do Coelho em cena — foto 1" }, { src: "/images/cenarios/toca-do-coelho/cena-2.webp", width: 740, height: 490, alt: "Cenário Toca do Coelho em cena — foto 2" }],
  },
  {
    slug: "floresta-avatar",
    nome: "Floresta Avatar",
    categoria: "fantasia",
    espetaculo: "2012-avatar",
    observacao: "Possui uma abertura na cachoeira que permite a passagem dos artistas.",
    destaques: ["passagem"],
    painel: { src: "/images/cenarios/floresta-avatar/painel.webp", width: 1270, height: 717, alt: "Painel do cenário Floresta Avatar" },
    emCena: [{ src: "/images/cenarios/floresta-avatar/cena-1.webp", width: 1086, height: 776, alt: "Cenário Floresta Avatar em cena — foto 1" }, { src: "/images/cenarios/floresta-avatar/cena-2.webp", width: 641, height: 939, alt: "Cenário Floresta Avatar em cena — foto 2" }, { src: "/images/cenarios/floresta-avatar/cena-3.webp", width: 720, height: 991, alt: "Cenário Floresta Avatar em cena — foto 3" }],
  },
  {
    slug: "castelo-pequena-sereia",
    nome: "Castelo da Pequena Sereia",
    categoria: "fantasia",
    espetaculo: "2008-a-pequena-sereia",
    observacao: "A porta do castelo é vazada, permitindo a passagem dos artistas.",
    destaques: ["passagem"],
    painel: { src: "/images/cenarios/castelo-pequena-sereia/painel.webp", width: 1062, height: 659, alt: "Painel do cenário Castelo da Pequena Sereia" },
    emCena: [{ src: "/images/cenarios/castelo-pequena-sereia/cena-1.webp", width: 1111, height: 813, alt: "Cenário Castelo da Pequena Sereia em cena — foto 1" }, { src: "/images/cenarios/castelo-pequena-sereia/cena-2.webp", width: 1029, height: 746, alt: "Cenário Castelo da Pequena Sereia em cena — foto 2" }],
  },
  {
    slug: "castelo-encantado",
    nome: "Castelo Encantado",
    categoria: "fantasia",
    destaques: [],
    painel: { src: "/images/cenarios/castelo-encantado/painel.webp", width: 1172, height: 702, alt: "Painel do cenário Castelo Encantado" },
    emCena: [],
  },
  {
    slug: "ceu-estrelado",
    nome: "Céu Estrelado",
    categoria: "ceu",
    observacao: "Os planetas não estão inclusos — são feitos de isopor, não pintados no painel.",
    destaques: [],
    painel: { src: "/images/cenarios/ceu-estrelado/painel.webp", width: 1192, height: 671, alt: "Painel do cenário Céu Estrelado" },
    emCena: [{ src: "/images/cenarios/ceu-estrelado/cena-1.webp", width: 1337, height: 930, alt: "Cenário Céu Estrelado em cena — foto 1" }, { src: "/images/cenarios/ceu-estrelado/cena-2.webp", width: 971, height: 705, alt: "Cenário Céu Estrelado em cena — foto 2" }],
  },
  {
    slug: "galaxia",
    nome: "Galáxia",
    categoria: "ceu",
    observacao: "O planeta Terra não está incluso — é feito de isopor, não pintado no painel.",
    destaques: [],
    painel: { src: "/images/cenarios/galaxia/painel.webp", width: 640, height: 427, alt: "Painel do cenário Galáxia" },
    emCena: [{ src: "/images/cenarios/galaxia/cena-1.webp", width: 640, height: 427, alt: "Cenário Galáxia em cena — foto 1" }],
  },
  {
    slug: "galeria-de-artes",
    nome: "Galeria de Artes",
    categoria: "interiores",
    observacao: "A escada não está inclusa; ela foi feita de MDF para os bailarinos subirem.",
    destaques: [],
    painel: { src: "/images/cenarios/galeria-de-artes/painel.webp", width: 455, height: 357, alt: "Painel do cenário Galeria de Artes" },
    emCena: [{ src: "/images/cenarios/galeria-de-artes/cena-1.webp", width: 925, height: 616, alt: "Cenário Galeria de Artes em cena — foto 1" }, { src: "/images/cenarios/galeria-de-artes/cena-2.webp", width: 740, height: 416, alt: "Cenário Galeria de Artes em cena — foto 2" }],
  },
  {
    slug: "ilhas-divertidamente",
    nome: "Ilhas Divertidamente",
    categoria: "fantasia",
    espetaculo: "2017-divertidamente",
    observacao: "Acompanha um segundo tecido pintado que simula as cabines de comando dos sentimentos (necessita de outro varão).",
    destaques: ["dois-tecidos"],
    painel: { src: "/images/cenarios/ilhas-divertidamente/painel.webp", width: 1046, height: 645, alt: "Painel do cenário Ilhas Divertidamente" },
    emCena: [{ src: "/images/cenarios/ilhas-divertidamente/cena-1.webp", width: 1056, height: 703, alt: "Cenário Ilhas Divertidamente em cena — foto 1" }, { src: "/images/cenarios/ilhas-divertidamente/cena-2.webp", width: 954, height: 635, alt: "Cenário Ilhas Divertidamente em cena — foto 2" }],
  },
  {
    slug: "memorias-divertidamente",
    nome: "Memórias Divertidamente",
    categoria: "fantasia",
    espetaculo: "2017-divertidamente",
    destaques: [],
    painel: { src: "/images/cenarios/memorias-divertidamente/painel.webp", width: 1280, height: 720, alt: "Painel do cenário Memórias Divertidamente" },
    emCena: [{ src: "/images/cenarios/memorias-divertidamente/cena-1.webp", width: 775, height: 498, alt: "Cenário Memórias Divertidamente em cena — foto 1" }, { src: "/images/cenarios/memorias-divertidamente/cena-2.webp", width: 1040, height: 693, alt: "Cenário Memórias Divertidamente em cena — foto 2" }],
  },
  {
    slug: "primavera-jardim",
    nome: "Primavera — Jardim",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/primavera-jardim/painel.webp", width: 1199, height: 691, alt: "Painel do cenário Primavera — Jardim" },
    emCena: [{ src: "/images/cenarios/primavera-jardim/cena-1.webp", width: 800, height: 577, alt: "Cenário Primavera — Jardim em cena — foto 1" }, { src: "/images/cenarios/primavera-jardim/cena-2.webp", width: 471, height: 339, alt: "Cenário Primavera — Jardim em cena — foto 2" }, { src: "/images/cenarios/primavera-jardim/cena-3.webp", width: 365, height: 506, alt: "Cenário Primavera — Jardim em cena — foto 3" }],
  },
  {
    slug: "outono",
    nome: "Outono",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/outono/painel.webp", width: 1074, height: 686, alt: "Painel do cenário Outono" },
    emCena: [],
  },
  {
    slug: "verao-praia",
    nome: "Verão — Praia",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/verao-praia/painel.webp", width: 365, height: 506, alt: "Painel do cenário Verão — Praia" },
    emCena: [{ src: "/images/cenarios/verao-praia/cena-1.webp", width: 365, height: 506, alt: "Cenário Verão — Praia em cena — foto 1" }],
  },
  {
    slug: "inverno-neve",
    nome: "Inverno — Neve",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/inverno-neve/painel.webp", width: 1124, height: 715, alt: "Painel do cenário Inverno — Neve" },
    emCena: [],
  },
  {
    slug: "casa-de-doces",
    nome: "Casa de Doces — João e Maria",
    categoria: "fantasia",
    espetaculo: "2007-joao-e-maria",
    destaques: [],
    painel: { src: "/images/cenarios/casa-de-doces/painel.webp", width: 1216, height: 720, alt: "Painel do cenário Casa de Doces — João e Maria" },
    emCena: [],
  },
  {
    slug: "fundo-do-mar",
    nome: "Fundo do Mar",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/fundo-do-mar/painel.webp", width: 1052, height: 664, alt: "Painel do cenário Fundo do Mar" },
    emCena: [{ src: "/images/cenarios/fundo-do-mar/cena-1.webp", width: 640, height: 423, alt: "Cenário Fundo do Mar em cena — foto 1" }, { src: "/images/cenarios/fundo-do-mar/cena-2.webp", width: 426, height: 640, alt: "Cenário Fundo do Mar em cena — foto 2" }],
  },
  {
    slug: "caminho-magico-de-oz",
    nome: "Caminho — Mágico de Oz",
    categoria: "fantasia",
    espetaculo: "2006-o-magico-de-oz",
    destaques: [],
    painel: { src: "/images/cenarios/caminho-magico-de-oz/painel.webp", width: 1088, height: 681, alt: "Painel do cenário Caminho — Mágico de Oz" },
    emCena: [],
  },
  {
    slug: "lago-acampamento",
    nome: "Lago — Acampamento",
    categoria: "natureza",
    destaques: [],
    painel: { src: "/images/cenarios/lago-acampamento/painel.webp", width: 884, height: 531, alt: "Painel do cenário Lago — Acampamento" },
    emCena: [],
  },
  {
    slug: "deserto-pequeno-principe",
    nome: "Deserto — O Pequeno Príncipe",
    categoria: "fantasia",
    espetaculo: "2011-o-pequeno-principe",
    destaques: [],
    painel: { src: "/images/cenarios/deserto-pequeno-principe/painel.webp", width: 1024, height: 576, alt: "Painel do cenário Deserto — O Pequeno Príncipe" },
    emCena: [{ src: "/images/cenarios/deserto-pequeno-principe/cena-1.webp", width: 924, height: 656, alt: "Cenário Deserto — O Pequeno Príncipe em cena — foto 1" }],
  },
  {
    slug: "fachada-casa-extraordinario",
    nome: "Fachada Casa — Extraordinário",
    categoria: "cidade",
    espetaculo: "2019-extraordinario",
    observacao: "As janelas são vazadas, permitindo que o artista apareça de dentro da casa.",
    destaques: ["passagem"],
    painel: { src: "/images/cenarios/fachada-casa-extraordinario/painel.webp", width: 1091, height: 689, alt: "Painel do cenário Fachada Casa — Extraordinário" },
    emCena: [{ src: "/images/cenarios/fachada-casa-extraordinario/cena-1.webp", width: 1139, height: 759, alt: "Cenário Fachada Casa — Extraordinário em cena — foto 1" }, { src: "/images/cenarios/fachada-casa-extraordinario/cena-2.webp", width: 1139, height: 759, alt: "Cenário Fachada Casa — Extraordinário em cena — foto 2" }],
  },
  {
    slug: "fachada-escola-extraordinario",
    nome: "Fachada Escola — Extraordinário",
    categoria: "cidade",
    espetaculo: "2019-extraordinario",
    observacao: "A porta da fachada é vazada, permitindo a passagem dos artistas.",
    destaques: ["passagem"],
    painel: { src: "/images/cenarios/fachada-escola-extraordinario/painel.webp", width: 1280, height: 720, alt: "Painel do cenário Fachada Escola — Extraordinário" },
    emCena: [{ src: "/images/cenarios/fachada-escola-extraordinario/cena-1.webp", width: 1124, height: 748, alt: "Cenário Fachada Escola — Extraordinário em cena — foto 1" }, { src: "/images/cenarios/fachada-escola-extraordinario/cena-2.webp", width: 1151, height: 658, alt: "Cenário Fachada Escola — Extraordinário em cena — foto 2" }],
  },
  {
    slug: "mapa-mundi",
    nome: "Mapa Múndi",
    categoria: "ceu",
    observacao: "Painel em malha, impresso.",
    destaques: ["impresso"],
    painel: { src: "/images/cenarios/mapa-mundi/painel.webp", width: 640, height: 426, alt: "Painel do cenário Mapa Múndi" },
    emCena: [{ src: "/images/cenarios/mapa-mundi/cena-1.webp", width: 426, height: 640, alt: "Cenário Mapa Múndi em cena — foto 1" }],
  },
  {
    slug: "sala-de-aula",
    nome: "Sala de Aula",
    categoria: "interiores",
    destaques: [],
    painel: { src: "/images/cenarios/sala-de-aula/painel.webp", width: 1005, height: 671, alt: "Painel do cenário Sala de Aula" },
    emCena: [{ src: "/images/cenarios/sala-de-aula/cena-1.webp", width: 918, height: 612, alt: "Cenário Sala de Aula em cena — foto 1" }, { src: "/images/cenarios/sala-de-aula/cena-2.webp", width: 762, height: 508, alt: "Cenário Sala de Aula em cena — foto 2" }],
  },
  {
    slug: "sala-de-casa-divertidamente",
    nome: "Sala de Casa — Divertidamente",
    categoria: "interiores",
    espetaculo: "2017-divertidamente",
    destaques: [],
    painel: { src: "/images/cenarios/sala-de-casa-divertidamente/painel.webp", width: 1382, height: 921, alt: "Painel do cenário Sala de Casa — Divertidamente" },
    emCena: [{ src: "/images/cenarios/sala-de-casa-divertidamente/cena-1.webp", width: 1099, height: 733, alt: "Cenário Sala de Casa — Divertidamente em cena — foto 1" }, { src: "/images/cenarios/sala-de-casa-divertidamente/cena-2.webp", width: 1117, height: 744, alt: "Cenário Sala de Casa — Divertidamente em cena — foto 2" }],
  },
  {
    slug: "comodo-antigo",
    nome: "Cômodo Antigo",
    categoria: "interiores",
    espetaculo: "2015-a-origem-dos-guardioes",
    observacao: "As rampas e pilares não acompanham o cenário (foram feitos de MDF).",
    destaques: [],
    painel: { src: "/images/cenarios/comodo-antigo/painel.webp", width: 1107, height: 691, alt: "Painel do cenário Cômodo Antigo" },
    emCena: [{ src: "/images/cenarios/comodo-antigo/cena-1.webp", width: 740, height: 490, alt: "Cenário Cômodo Antigo em cena — foto 1" }, { src: "/images/cenarios/comodo-antigo/cena-2.webp", width: 740, height: 490, alt: "Cenário Cômodo Antigo em cena — foto 2" }],
  },
  {
    slug: "rua",
    nome: "Rua",
    categoria: "cidade",
    espetaculo: "2015-a-origem-dos-guardioes",
    destaques: [],
    painel: { src: "/images/cenarios/rua/painel.webp", width: 1119, height: 698, alt: "Painel do cenário Rua" },
    emCena: [{ src: "/images/cenarios/rua/cena-1.webp", width: 922, height: 614, alt: "Cenário Rua em cena — foto 1" }, { src: "/images/cenarios/rua/cena-2.webp", width: 740, height: 490, alt: "Cenário Rua em cena — foto 2" }],
  },
  {
    slug: "rua-antiga",
    nome: "Rua Antiga",
    categoria: "cidade",
    destaques: [],
    painel: { src: "/images/cenarios/rua-antiga/painel.webp", width: 1155, height: 683, alt: "Painel do cenário Rua Antiga" },
    emCena: [],
  },
  {
    slug: "cidade-dos-anoes",
    nome: "Cidade dos Anões",
    categoria: "cidade",
    observacao: "Metragem diferente dos demais: aproximadamente 6,60 m de largura por 3 m de altura.",
    destaques: ["medida-especial"],
    painel: { src: "/images/cenarios/cidade-dos-anoes/painel.webp", width: 868, height: 415, alt: "Painel do cenário Cidade dos Anões" },
    emCena: [],
  },
  {
    slug: "floresta-impressa",
    nome: "Floresta",
    categoria: "natureza",
    observacao: "Painel em malha, impresso. Acompanha 6 coxias.",
    destaques: ["impresso", "coxias"],
    painel: { src: "/images/cenarios/floresta-impressa/painel.webp", width: 1577, height: 1230, alt: "Painel do cenário Floresta" },
    emCena: [],
  },
];
