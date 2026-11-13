import type { Metadata, Viewport } from "next";
import { Archivo } from "next/font/google";
import { SmoothScroll } from "@/components/providers/SmoothScroll";
import "./globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  style: ["normal", "italic"],
  axes: ["wdth"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Chimba Creative Agency",
  description: "Chimba es una agencia creativa: rebranding, identidad, key visual, redes y dirección de arte.",
  keywords: ["Chimba", "Creative Agency", "Branding", "Rebranding", "Key Visual", "Identidad de Marca"],
  openGraph: {
    title: "Chimba Creative Agency",
    description: "Diseñamos marcas que la gente elige.",
    url: "https://somoschimba.com",
    siteName: "Chimba",
    locale: "es_AR",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#2B4991",
  viewportFit: "cover",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={archivo.variable}>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
