export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  details: string[];
}

export const SERVICES: ServiceItem[] = [
  {
    id: "rebranding",
    number: "01",
    name: "Rebranding",
    tagline: "Evolución gráfica sin perder el oficio ni el reconocimiento.",
    details: ["Auditoría visual", "Rediseño de marca", "Sistemas de identidad", "Manuales y pautas vivas"],
  },
  {
    id: "key-visual",
    number: "02",
    name: "Key Visual",
    tagline: "La imagen que manda en cada campaña, evento y lanzamiento.",
    details: ["Pieza rectora", "Grillas y modulación", "Adaptaciones a formatos reales", "Guía de aplicación"],
  },
  {
    id: "identidad",
    number: "03",
    name: "Identidad de Marca",
    tagline: "Todo el universo gráfico, desde la tipografía hasta la voz.",
    details: ["Naming y concepto", "Familia tipográfica", "Paleta cromática", "Papelería y packaging"],
  },
  {
    id: "direccion-arte",
    number: "04",
    name: "Dirección de Arte",
    tagline: "Cuidado milimétrico de la fotografía, el espacio y el contenido.",
    details: ["Tomas de producto y obra", "Tratamiento de color", "Producción audiovisual", "Diseño editorial"],
  },
];
