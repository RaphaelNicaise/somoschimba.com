export const A = {
  wordmark: "/assets/Logos/chimba-wordmark.webp",
  hand: "/assets/Stickers/handshake-light.webp",
  oval: "/assets/Shapes/oval-scribble-green.webp",
  coverBlur: "/assets/References/cover-photo-blur.webp",
  rebranding: "/assets/References/rebranding-statement.webp",
  mundialGreen: "/assets/References/mundial-green.webp",
  pslStatement: "/assets/Portfolio/psl-statement.webp",
  pslKv2: "/assets/Portfolio/psl-key-visual-2.webp",
  pslMundial: "/assets/Portfolio/psl-mundial-moodboard.webp",
  santarelliKv1: "/assets/Portfolio/santarelli-key-visual-1.webp",
  ferroCover: "/assets/Portfolio/ferrocargas-cover.webp",
  ferroMood: "/assets/Portfolio/ferrocargas-moodboard.webp",
} as const;

export const CONTACT = {
  email: "hola@somoschimba.com",
  instagram: "https://instagram.com/somoschimba",
  instagramHandle: "@somoschimba",
};

export interface CaseStudy {
  id: string;
  client: string;
  rest: string;
  year: string;
  tags: string[];
  /** Frase del caso; las partes entre [[ ]] van resaltadas, entre [[_ _]] resaltadas en itálica. */
  quote: string;
  text: string;
  imgs: [src: string, caption: string][];
}

export const CASES: CaseStudy[] = [
  {
    id: "psl",
    client: "PSL",
    rest: "Logistics",
    year: "2025/2026",
    tags: ["Rebranding", "Key visual", "Campaña"],
    quote: "Exploramos distintos enfoques para lograr una [[evolución]] en la identidad.",
    text: "Una marca de logística que necesitaba verse a la altura de lo que hace. Nueva identidad, piezas para importación y distribución, y la campaña del Mundial.",
    imgs: [
      [A.pslStatement, "El punto de partida del rebranding"],
      [A.pslKv2, "Key visual 2: importación y distribución"],
      [A.pslMundial, "Campaña Mundial"],
      [A.mundialGreen, "Así se trabajó este Mundial"],
    ],
  },
  {
    id: "santarelli",
    client: "Santarelli",
    rest: "Construcciones",
    year: "2025",
    tags: ["Key visual", "Editorial"],
    quote: "Así comienza [[_todo._]]",
    text: "Fichas de cada obra (Lido Di Fermo, Torre Firenze, Pórticos San Giorgio, Magna Italy) con un mismo sistema: fotos grandes, datos claros y la firma de la constructora.",
    imgs: [
      [A.coverBlur, "Portada del caso"],
      [A.santarelliKv1, "Key visual 1: fichas de obra"],
    ],
  },
  {
    id: "ferrocargas",
    client: "Ferrocargas",
    rest: "del Sur",
    year: "2025",
    tags: ["Redes", "Contenido"],
    quote: "Cada carga que mueven, [[contada]] en redes.",
    text: "Contenido para redes de una empresa de transporte de cargas: la flota, los trenes, las fechas patrias y la agenda ambiental del sector.",
    imgs: [
      [A.ferroCover, "Ferrocargas del Sur y Chimba"],
      [A.ferroMood, "Publicaciones para redes"],
    ],
  },
  {
    id: "girotti",
    client: "Girotti",
    rest: "",
    year: "2025",
    tags: ["Rebranding"],
    quote: "Cambiar el logo puede [[_cambiar mucho más_]] que un logo.",
    text: "Un rebranding pensado para que la marca nueva se entienda desde el primer posteo.",
    imgs: [[A.rebranding, "Presentación del rebranding"]],
  },
];

export interface Service {
  name: string;
  tagline: string;
  items: string[];
  cases: string[];
}

export const SERVICES: Service[] = [
  { name: "Rebranding", tagline: "Tu marca evoluciona sin perder lo que la hace reconocible.", items: ["Diagnóstico de la marca actual", "Rediseño de logo", "Sistema visual", "Manual de marca"], cases: ["psl", "girotti"] },
  { name: "Identidad de marca", tagline: "Logo, colores, tipografía y forma de hablar, pensados juntos desde cero.", items: ["Concepto", "Logo y variantes", "Paleta y tipografía", "Papelería"], cases: [] },
  { name: "Key visual", tagline: "La imagen que ordena una campaña, un lanzamiento o un proyecto.", items: ["Pieza principal", "Adaptaciones a formatos", "Fichas y folletos", "Guía de aplicación"], cases: ["santarelli", "psl"] },
  { name: "Redes y contenido", tagline: "Publicaciones con criterio de marca, todo el año.", items: ["Grilla y plantillas", "Fechas y campañas", "Textos", "Calendario de publicaciones"], cases: ["ferrocargas"] },
  { name: "Dirección de arte", tagline: "Fotos, piezas y producción con una misma mirada.", items: ["Producción de fotos", "Tratamiento de imagen", "Diseño editorial", "Presentaciones"], cases: ["santarelli"] },
];
