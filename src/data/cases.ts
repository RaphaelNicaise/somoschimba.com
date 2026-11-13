export interface CaseStudy {
  id: string;
  client: string;
  clientStyled?: { normal: string; italic: string };
  year: string;
  category: string;
  tags: string[];
  image: string;
  summary: string;
  highlightWords?: string[];
}

export const CASES: CaseStudy[] = [
  {
    id: "ferrocargas",
    client: "Ferrocargas del Sur",
    clientStyled: { normal: "Ferrocargas ", italic: "del Sur" },
    year: "2025",
    category: "REBRANDING",
    tags: ["REBRANDING", "IDENTIDAD"],
    image: "/assets/Portfolio/ferrocargas-cover.webp",
    summary: "Rediseño integral de la identidad visual y sistema de flotas de carga pesada nacional.",
  },
  {
    id: "psl-mundial",
    client: "PSL Mundial",
    clientStyled: { normal: "PSL ", italic: "Mundial" },
    year: "2025",
    category: "KEY VISUAL",
    tags: ["KEY VISUAL", "CAMPAÑA"],
    image: "/assets/Portfolio/psl-statement.webp",
    summary: "Sistema gráfico y conceptual para el lanzamiento y comunicación de eventos deportivos.",
  },
  {
    id: "santarelli",
    client: "Santarelli Construcciones",
    clientStyled: { normal: "Santarelli ", italic: "Construcciones" },
    year: "2025",
    category: "IDENTIDAD",
    tags: ["KEY VISUAL", "ARQUITECTURA"],
    image: "/assets/Portfolio/santarelli-key-visual-1.webp",
    summary: "Identidad visual y piezas de obra para desarrollos constructivos y arquitectura contemporánea.",
  },
  {
    id: "girotti",
    client: "Girotti",
    clientStyled: { normal: "Girotti ", italic: "Studio" },
    year: "2025",
    category: "DIRECCIÓN DE ARTE",
    tags: ["DIRECCIÓN DE ARTE", "EDITORIAL"],
    image: "/assets/Portfolio/ferrocargas-moodboard.webp",
    summary: "Dirección de arte, catálogo y universo editorial para marca de diseño y objetos.",
  },
];
