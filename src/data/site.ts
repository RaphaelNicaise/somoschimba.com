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
  aconquijaCover: "/assets/Portfolio/aconquija-cover.webp",
  // Logos de clientes
  aconquijaLogo: "/assets/Clients/aconquija-logo.webp",
  ferrocargasLogo: "/assets/Clients/ferrocargassur.png",
  santarelliLogo: "/assets/Clients/ms.png",
  pslLogo: "/assets/Clients/psllogicists.png",
  girottiLogo: "/assets/Clients/latinidegirottisincolor.png",
} as const;

export const CONTACT = {
  /** Número de WhatsApp al que llegan los mensajes del formulario: código de país, sin + ni espacios. */
  whatsapp: "5492916438226",
  whatsappLabel: "+54 9 2916 43-8226",
  email: "hola@somoschimba.com",
  instagram: "https://instagram.com/somoschimba",
  instagramHandle: "@somoschimba",
};

export interface ClientItem {
  id: string;
  name: string;
  logo: string;
  isWhiteFilter?: boolean;
}

export const CLIENTS: ClientItem[] = [
  { id: "ferrocargas", name: "Ferrocargas del Sur", logo: A.ferrocargasLogo },
  { id: "psl", name: "PSL Logistics", logo: A.pslLogo },
  { id: "santarelli", name: "Santarelli Construcciones", logo: A.santarelliLogo },
  { id: "aconquija", name: "Aconquija Construcciones", logo: A.aconquijaLogo, isWhiteFilter: true },
  { id: "girotti", name: "Latini de Girotti", logo: A.girottiLogo },
];

export interface CaseStudy {
  id: string;
  client: string;
  rest: string;
  logo: string;
  logoWhiteFilter?: boolean;
  year: string;
  tags: string[];
  /** Frase del caso; las partes entre [[ ]] van resaltadas, entre [[_ _]] resaltadas en itálica. */
  quote: string;
  text: string;
  imgs: [src: string, caption: string][];
}

export const CASES: CaseStudy[] = [
  {
    id: "ferrocargas",
    client: "Ferrocargas",
    rest: "del Sur",
    logo: A.ferrocargasLogo,
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
    id: "psl",
    client: "PSL",
    rest: "Logistics",
    logo: A.pslLogo,
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
    logo: A.santarelliLogo,
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
    id: "aconquija",
    client: "Aconquija",
    rest: "Construcciones",
    logo: A.aconquijaLogo,
    logoWhiteFilter: true,
    year: "2025/2026",
    tags: ["Desarrollo web"],
    quote: "Una web a la altura de [[sus obras.]]",
    text: "Diseñamos y desarrollamos el sitio de una empresa de construcciones y servicios: qué hacen, sus obras y un contacto directo para pedir presupuesto.",
    imgs: [[A.aconquijaCover, "Aconquija Construcciones y Servicios"]],
  },
  {
    id: "girotti",
    client: "Girotti",
    rest: "",
    logo: A.girottiLogo,
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
  { name: "Identidad de marca", tagline: "Logo, colores, tipografía y forma de hablar, pensados juntos. Si tu marca ya existe, la hacemos evolucionar sin perder lo que la hace reconocible.", items: ["Concepto", "Logo y variantes", "Paleta y tipografía", "Manual de marca"], cases: ["psl", "girotti"] },
  { name: "Desarrollo web", tagline: "Sitios rápidos, claros y fáciles de actualizar, diseñados con la misma mirada que tu marca.", items: ["Diseño de la web", "Desarrollo y publicación", "Versión para celular", "Formularios de contacto"], cases: ["aconquija"] },
  { name: "Redes y contenido", tagline: "Publicaciones con criterio de marca, todo el año.", items: ["Grilla y plantillas", "Fechas y campañas", "Textos", "Calendario de publicaciones"], cases: ["ferrocargas"] },
  { name: "Meta Ads", tagline: "Campañas pagas en Instagram y Facebook para llegar a quien tiene que conocer tu marca.", items: ["Estrategia de campaña", "Piezas para anuncios", "Segmentación de públicos", "Seguimiento de resultados"], cases: [] },
  { name: "Dirección de arte", tagline: "Fotos, piezas y producción con una misma mirada.", items: ["Producción de fotos", "Tratamiento de imagen", "Diseño editorial", "Presentaciones"], cases: ["santarelli"] },
];
