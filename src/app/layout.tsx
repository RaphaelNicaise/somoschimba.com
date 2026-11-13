import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chimba — Creative Agency | somoschimba.com",
  description: "Láminas limpias en gris, tipografía grotesca muy pesada en azul y resaltador verde. Creamos marcas para que la gente las elija.",
  keywords: ["Chimba", "Creative Agency", "Branding", "Rebranding", "Key Visual", "Identidad de Marca"],
  openGraph: {
    title: "Chimba — Creative Agency",
    description: "Estudio de diseño y estrategia visual. Buenos Aires.",
    url: "https://somoschimba.com",
    siteName: "Chimba",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B4991",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={archivo.variable}>
      <body className="ch-root">{children}</body>
    </html>
  );
}
