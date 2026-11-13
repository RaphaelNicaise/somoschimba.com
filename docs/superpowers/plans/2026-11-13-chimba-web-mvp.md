# Chimba Web Preliminar Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Construir la versión preliminar completa y navegable de la web de Chimba — Creative Agency (somoschimba.com) utilizando Next.js App Router, basada estrictamente en el Design System existente sin modificar `chimba-design-system/`, y subir los cambios a GitHub en varios commits.

**Architecture:** Next.js App Router con TypeScript en el directorio raíz. Los estilos globales cargan de forma estricta los tokens y clases (`.ch-*`) de `chimba-design-system/tokens.css` y `chimba-design-system/components/bundle.css`. Los componentes TSX modulares encapsulan los bloques visuales (Navbar, Hero, Statement, CaseCard, Services, Footer), alimentados por datasets tipados de casos y servicios.

**Tech Stack:** Next.js 15, React 19, TypeScript 5, CSS nativo del Chimba Design System (Google Font Archivo).

**Spec:** `docs/superpowers/specs/2026-11-13-chimba-web-mvp-design.md`

## Global Constraints

- La carpeta `chimba-design-system/` se mantiene estrictamente intacta (read-only).
- Tipografía exclusiva: Archivo (pesos 800 y 300 itálica).
- Paleta: `#2B4991` (Azul Chimba), `#68F293` (Verde Resaltador), `#E4E4E4` (Gris Papel), `#0D1424` (Noche).
- Tono de voz: Español rioplatense con voseo ("Escribinos", "Hablemos").
- Esquinas rectas (`radius-none`) en cards y UI; curvas reservadas exclusivamente para hoja, sticker y trazos.
- Todos los commits deben realizarse con mensajes claros y subirse a `origin main`.

---

### Task 1: Scaffolding de Next.js y Configuración de Assets y Estilos

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `next.config.mjs`
- Create: `public/assets/` (copia estructurada de imágenes necesarias desde `chimba-design-system/assets`)
- Create: `src/app/globals.css`
- Create: `src/app/layout.tsx`

**Interfaces:**
- Consumes: `chimba-design-system/tokens.css`, `chimba-design-system/components/bundle.css`
- Produces: Base ejecutable de Next.js con soporte para tipografía Archivo y estilos `.ch-*`.

- [ ] **Step 1: Crear `package.json` con dependencias requeridas**

```json
{
  "name": "somoschimba.com",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.0.0"
  }
}
```

- [ ] **Step 2: Crear `tsconfig.json` y `next.config.mjs`**

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [
      {
        "name": "next"
      }
    ],
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "chimba-design-system"]
}
```

`next.config.mjs`:
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

export default nextConfig;
```

- [ ] **Step 3: Instalar dependencias con `npm install`**

Run: `npm install`
Expected: Instalación limpia sin errores.

- [ ] **Step 4: Replicar assets a `public/assets/` sin alterar `chimba-design-system/`**

Copiar recursivamente los contenidos de `chimba-design-system/assets/` a `public/assets/` para que Next.js pueda servirlos vía `/assets/...`.

- [ ] **Step 5: Crear `src/app/globals.css` y `src/app/layout.tsx`**

`src/app/globals.css`:
```css
@import "../../chimba-design-system/tokens.css";
@import "../../chimba-design-system/components/bundle.css";

/* Estilos de layout base complementarios respetando el sistema */
html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  padding: 0;
  background-color: var(--surface);
  color: var(--ink);
  font-family: var(--font-sans);
  overflow-x: hidden;
}

::selection {
  background: var(--highlight);
  color: var(--on-highlight);
}
```

`src/app/layout.tsx`:
```tsx
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
```

- [ ] **Step 6: Verificar build inicial**

Run: `npm run typecheck` y `npm run build`
Expected: Build de Next.js exitoso.

- [ ] **Step 7: Commit y Push a origin main**

```bash
git add package.json package-lock.json tsconfig.json next.config.mjs public/assets/ src/app/
git commit -m "feat: scaffold Next.js App Router project and configure Chimba design tokens"
git push origin main
```

---

### Task 2: Datasets y Modelos Tipados (Casos, Servicios y Navegación)

**Files:**
- Create: `src/data/cases.ts`
- Create: `src/data/services.ts`
- Create: `src/data/navigation.ts`

**Interfaces:**
- Produces:
  - `CaseStudy`: Interfaz para cada caso de portfolio (`slug`, `client`, `clientBold`, `clientItalic`, `year`, `title`, `description`, `coverImage`, `collabText`, `tags`).
  - `Service`: Interfaz para áreas de servicio (`title`, `tag`, `description`, `deliverables`).
  - `NavLinks` & `AgencyInfo`: Enlaces y canales de contacto de Chimba.

- [ ] **Step 1: Crear `src/data/cases.ts` con casos reales de Chimba**

```typescript
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
    year: "2025/2026",
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
    year: "2025/2026",
    category: "DIRECCIÓN DE ARTE",
    tags: ["DIRECCIÓN DE ARTE", "EDITORIAL"],
    image: "/assets/Portfolio/ferrocargas-moodboard.webp",
    summary: "Dirección de arte, catálogo y universo editorial para marca de diseño y objetos.",
  },
];
```

- [ ] **Step 2: Crear `src/data/services.ts` y `src/data/navigation.ts`**

`src/data/services.ts`:
```typescript
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
```

`src/data/navigation.ts`:
```typescript
export const NAV_LINKS = [
  { label: "Casos", href: "#casos" },
  { label: "Manifiesto", href: "#manifiesto" },
  { label: "Servicios", href: "#servicios" },
  { label: "Contacto", href: "#contacto" },
];

export const AGENCY_INFO = {
  email: "hola@somoschimba.com",
  instagram: "https://instagram.com/somoschimba",
  whatsapp: "https://wa.me/5491100000000",
  year: "2025/2026",
  city: "Buenos Aires, Argentina",
};
```

- [ ] **Step 3: Verificar tipado de datos**

Run: `npm run typecheck`
Expected: 0 errores de tipado.

---

### Task 3: Componentes UI Modulares (Navbar, Button, Tag, HandshakeSticker)

**Files:**
- Create: `src/components/ui/Navbar.tsx`
- Create: `src/components/ui/Button.tsx`
- Create: `src/components/ui/Tag.tsx`
- Create: `src/components/ui/HandshakeSticker.tsx`

**Interfaces:**
- Consumes: Clases `.ch-nav`, `.ch-btn`, `.ch-tag`, `.ch-sticker` de `bundle.css`.
- Produces: Componentes reutilizables con soporte accesible (`aria-*`, props de enlace y botón).

- [ ] **Step 1: Crear `src/components/ui/HandshakeSticker.tsx`**

```tsx
import Image from "next/image";

interface HandshakeStickerProps {
  size?: "sm" | "md" | "lg";
  variant?: "light" | "yellow";
  className?: string;
  alt?: string;
}

export function HandshakeSticker({
  size = "md",
  variant = "light",
  className = "",
  alt = "Colaboración Chimba",
}: HandshakeStickerProps) {
  const sizeClass = size === "sm" ? "ch-sticker--sm" : size === "lg" ? "ch-sticker--lg" : "";
  const src = variant === "yellow" ? "/assets/Stickers/handshake-yellow.webp" : "/assets/Stickers/handshake-light.webp";
  const width = size === "sm" ? 64 : size === "lg" ? 220 : 120;
  const height = width;

  return (
    <span className={`ch-sticker ${sizeClass} ${className}`.trim()}>
      <Image src={src} alt={alt} width={width} height={height} unoptimized priority={size === "lg"} />
    </span>
  );
}
```

- [ ] **Step 2: Crear `src/components/ui/Tag.tsx` y `src/components/ui/Button.tsx`**

`src/components/ui/Tag.tsx`:
```tsx
import React from "react";

interface TagProps {
  children: React.ReactNode;
  size?: "md" | "lg";
  className?: string;
}

export function Tag({ children, size = "md", className = "" }: TagProps) {
  const sizeClass = size === "lg" ? "ch-tag--lg" : "";
  return <span className={`ch-tag ${sizeClass} ${className}`.trim()}>{children}</span>;
}
```

`src/components/ui/Button.tsx`:
```tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "highlight" | "line" | "sticker";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
  disabled,
}: ButtonProps) {
  const variantClass =
    variant === "primary"
      ? "ch-btn--primary"
      : variant === "highlight"
      ? "ch-btn--highlight"
      : variant === "line"
      ? "ch-btn--line"
      : "ch-btn--sticker";

  const combinedClass = `ch-btn ${variantClass} ${className}`.trim();

  if (variant === "sticker") {
    const content = (
      <>
        <Image
          src="/assets/Stickers/handshake-light.webp"
          alt=""
          width={56}
          height={56}
          unoptimized
          aria-hidden="true"
        />
        <span>{children}</span>
      </>
    );

    if (href) {
      return (
        <Link href={href} className={combinedClass}>
          {content}
        </Link>
      );
    }

    return (
      <button type="button" onClick={onClick} disabled={disabled} className={combinedClass}>
        {content}
      </button>
    );
  }

  if (href) {
    return (
      <Link href={href} className={combinedClass}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} disabled={disabled} className={combinedClass}>
      {children}
    </button>
  );
}
```

- [ ] **Step 3: Crear `src/components/ui/Navbar.tsx`**

`src/components/ui/Navbar.tsx`:
```tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, AGENCY_INFO } from "@/data/navigation";

interface NavbarProps {
  floating?: boolean;
}

export function Navbar({ floating = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: floating ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.25s ease, backdrop-filter 0.25s ease",
        backgroundColor: isScrolled ? "rgba(228, 228, 228, 0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(43, 73, 145, 0.1)" : "none",
      }}
    >
      <nav
        className={`ch-nav ${!isScrolled ? "ch-nav--photo" : ""}`}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="ch-nav__brand"
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
        >
          {isScrolled ? (
            <Image
              src="/assets/Logos/chimba-wordmark.webp"
              alt="Chimba"
              width={112}
              height={36}
              unoptimized
              style={{ objectFit: "contain", height: "32px", width: "auto" }}
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "28px",
                letterSpacing: "-0.03em",
                color: "var(--chimba-green)",
              }}
            >
              Chimba
            </span>
          )}
        </Link>

        {/* Desktop Links */}
        <div
          className="ch-nav__links"
          style={{
            display: "none",
            gap: "36px",
            alignItems: "center",
          }}
          id="desktop-links"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "14px",
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isScrolled ? "var(--chimba-blue)" : "var(--white)",
                transition: "color 0.15s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            className="ch-nav__meta"
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "14px",
              color: isScrolled ? "var(--ink-muted)" : "rgba(255, 255, 255, 0.7)",
            }}
          >
            {AGENCY_INFO.year}
          </span>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            style={{
              background: isScrolled ? "var(--chimba-blue)" : "var(--chimba-green)",
              color: isScrolled ? "var(--white)" : "var(--chimba-blue)",
              border: "none",
              padding: "8px 14px",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "0.08em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {menuOpen ? "CERRAR" : "MENÚ"}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            background: "var(--chimba-blue)",
            color: "var(--white)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--white)",
                fontSize: "24px",
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              style={{ color: "var(--chimba-green)", textDecoration: "none", fontWeight: 700 }}
            >
              {AGENCY_INFO.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 4: Verificar typecheck**

Run: `npm run typecheck`
Expected: 0 errores.

- [ ] **Step 5: Commit y Push**

```bash
git add src/data/ src/components/ui/
git commit -m "feat: implement base UI components (Navbar, Button, Tag, HandshakeSticker) and data models"
git push origin main
```

---

### Task 4: Secciones de Alto Impacto (Hero, Statement y BrandInterlude)

**Files:**
- Create: `src/components/sections/Hero.tsx`
- Create: `src/components/sections/Statement.tsx`
- Create: `src/components/sections/BrandInterlude.tsx`

**Interfaces:**
- Consumes: `Hero`, `Statement` de `bundle.css` y `HandshakeSticker`.
- Produces: Portada visual con foto desenfocada + velo, bloque manifiesto con `.ch-mark` y bloque de pausa en verde.

- [ ] **Step 1: Crear `src/components/sections/Hero.tsx`**

`src/components/sections/Hero.tsx`:
```tsx
import React from "react";

export function Hero() {
  return (
    <section className="ch-hero" style={{ minHeight: "100vh", position: "relative" }}>
      <div
        className="ch-hero__photo"
        style={{
          backgroundImage: "url(/assets/References/cover-photo-blur.webp)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      />
      <div
        className="ch-hero__body"
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "160px 24px 64px",
        }}
      >
        <h1 className="ch-hero__title" style={{ fontSize: "clamp(64px, 12vw, 150px)", lineHeight: 0.88 }}>
          Así<br />
          comienza<br />
          <strong>todo</strong>
        </h1>
        <div className="ch-hero__rule" />
        <p className="ch-hero__client">
          Santarelli <em>Construcciones</em>
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Crear `src/components/sections/Statement.tsx`**

`src/components/sections/Statement.tsx`:
```tsx
import { HandshakeSticker } from "@/components/ui/HandshakeSticker";

interface StatementProps {
  text?: React.ReactNode;
  clientName?: string;
}

export function Statement({
  text,
  clientName = "Ferrocargas",
}: StatementProps) {
  return (
    <section
      id="manifiesto"
      className="ch-statement"
      style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "120px 24px 96px",
      }}
    >
      <p
        className="ch-statement__text"
        style={{
          fontSize: "clamp(36px, 6vw, 68px)",
          lineHeight: 1.05,
          fontWeight: 800,
          letterSpacing: "-0.03em",
          maxWidth: "20ch",
        }}
      >
        {text || (
          <>
            No hacemos logos para llenar hojas de manual. Diseñamos marcas para que{" "}
            <span className="ch-mark">la gente las elija</span>.
          </>
        )}
      </p>

      <div
        className="ch-statement__sign"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "24px",
          marginTop: "64px",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "20px",
            color: "var(--chimba-blue)",
          }}
        >
          {clientName}
        </span>
        <HandshakeSticker size="sm" />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 800,
            fontSize: "20px",
            color: "var(--chimba-blue)",
          }}
        >
          Chimba
        </span>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Crear `src/components/sections/BrandInterlude.tsx`**

`src/components/sections/BrandInterlude.tsx`:
```tsx
import React from "react";

export function BrandInterlude() {
  return (
    <section
      className="ch-statement--brand"
      style={{
        backgroundColor: "var(--chimba-green)",
        color: "var(--chimba-blue)",
        padding: "140px 24px",
        margin: "80px 0",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "clamp(40px, 7vw, 84px)",
            lineHeight: 0.95,
            fontWeight: 800,
            letterSpacing: "-0.03em",
            maxWidth: "18ch",
            margin: 0,
          }}
        >
          Cambiar el logo puede{" "}
          <span className="ch-mark ch-mark--inverse">
            cambiar mucho más
          </span>{" "}
          que un logo.
        </p>

        <p
          style={{
            marginTop: "36px",
            fontSize: "14px",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            fontWeight: 700,
            color: "var(--chimba-blue)",
            opacity: 0.85,
          }}
        >
          CHIMBA — CREATIVE AGENCY · 2025/2026
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 4: Typecheck y verificación**

Run: `npm run typecheck`
Expected: 0 errores.

---

### Task 5: Secciones de Portfolio, Servicios y Footer

**Files:**
- Create: `src/components/sections/CaseCard.tsx`
- Create: `src/components/sections/CaseGrid.tsx`
- Create: `src/components/sections/Services.tsx`
- Create: `src/components/sections/Footer.tsx`

**Interfaces:**
- Consumes: Datasets de `CASES` y `SERVICES`, `Tag`, `Button`, `HandshakeSticker`.
- Produces: Portfolio interactivo con tarjetas 4:5, sección editorial de servicios y pie de página con llamado de contacto.

- [ ] **Step 1: Crear `src/components/sections/CaseCard.tsx` y `CaseGrid.tsx`**

`src/components/sections/CaseCard.tsx`:
```tsx
import { CaseStudy } from "@/data/cases";
import { Tag } from "@/components/ui/Tag";
import { HandshakeSticker } from "@/components/ui/HandshakeSticker";

interface CaseCardProps {
  caseStudy: CaseStudy;
}

export function CaseCard({ caseStudy }: CaseCardProps) {
  return (
    <article
      className="ch-case"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        color: "inherit",
        position: "relative",
      }}
    >
      <div
        className="ch-case__media"
        style={{
          aspectRatio: "4 / 5",
          backgroundImage: `url(${caseStudy.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          backgroundColor: "var(--surface-raised)",
          overflow: "hidden",
        }}
      >
        <div
          className="ch-case__collab"
          style={{
            position: "absolute",
            top: "20px",
            left: "20px",
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            background: "rgba(13, 20, 36, 0.75)",
            backdropFilter: "blur(6px)",
            padding: "6px 14px",
            color: "var(--white)",
            fontSize: "13px",
            fontWeight: 700,
          }}
        >
          <span>{caseStudy.client}</span>
          <HandshakeSticker size="sm" />
          <span>Chimba</span>
        </div>
      </div>

      <div
        className="ch-case__head"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          marginTop: "16px",
          marginBottom: "8px",
        }}
      >
        <h3
          className="ch-case__client"
          style={{
            margin: 0,
            fontSize: "24px",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "var(--chimba-blue)",
          }}
        >
          {caseStudy.clientStyled ? (
            <>
              {caseStudy.clientStyled.normal}
              <em>{caseStudy.clientStyled.italic}</em>
            </>
          ) : (
            caseStudy.client
          )}
        </h3>
        <span
          className="ch-case__year"
          style={{
            fontStyle: "italic",
            fontWeight: 300,
            fontSize: "14px",
            color: "var(--ink-muted)",
          }}
        >
          {caseStudy.year}
        </span>
      </div>

      <p style={{ margin: "0 0 16px", fontSize: "15px", color: "var(--ink)", lineHeight: 1.4 }}>
        {caseStudy.summary}
      </p>

      <div className="ch-case__tags" style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
        {caseStudy.tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
    </article>
  );
}
```

`src/components/sections/CaseGrid.tsx`:
```tsx
import { CASES } from "@/data/cases";
import { CaseCard } from "./CaseCard";

export function CaseGrid() {
  return (
    <section
      id="casos"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 24px",
      }}
    >
      <div style={{ marginBottom: "64px" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "var(--ink-muted)",
            margin: "0 0 8px",
          }}
        >
          PORTFOLIO SELECCIONADO
        </p>
        <h2
          style={{
            fontSize: "clamp(40px, 6vw, 72px)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: "var(--chimba-blue)",
            margin: 0,
          }}
        >
          Proyectos que <span className="ch-mark">hablan en serio</span>.
        </h2>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px 32px",
        }}
      >
        {CASES.map((item) => (
          <CaseCard key={item.id} caseStudy={item} />
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Crear `src/components/sections/Services.tsx`**

`src/components/sections/Services.tsx`:
```tsx
import { SERVICES } from "@/data/services";
import Image from "next/image";

export function Services() {
  return (
    <section
      id="servicios"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 24px 120px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <p
            style={{
              fontSize: "13px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--ink-muted)",
              margin: "0 0 8px",
            }}
          >
            DISCIPLINAS & CAPACIDADES
          </p>
          <h2
            style={{
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              color: "var(--chimba-blue)",
              margin: 0,
            }}
          >
            Así trabajamos en <span className="ch-mark">Chimba</span>.
          </h2>
        </div>

        {/* Trazo de la hoja de Chimba */}
        <div style={{ opacity: 0.8 }}>
          <Image
            src="/assets/Shapes/leaf-outline-blue.webp"
            alt=""
            width={100}
            height={100}
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.id}
            style={{
              background: "var(--white)",
              padding: "40px 32px",
              border: "1px solid rgba(43, 73, 145, 0.12)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "14px",
                  fontWeight: 800,
                  color: "var(--chimba-blue)",
                  letterSpacing: "0.1em",
                }}
              >
                {s.number}
              </span>
              <h3
                style={{
                  fontSize: "28px",
                  fontWeight: 800,
                  color: "var(--chimba-blue)",
                  margin: "16px 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--ink)",
                  lineHeight: 1.4,
                  margin: "0 0 24px",
                }}
              >
                {s.tagline}
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderTop: "1px solid var(--surface)",
                paddingTop: "20px",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              {s.details.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "var(--ink-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "var(--chimba-blue)",
                      display: "inline-block",
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Crear `src/components/sections/Footer.tsx`**

`src/components/sections/Footer.tsx`:
```tsx
import { Button } from "@/components/ui/Button";
import { AGENCY_INFO } from "@/data/navigation";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="ch-footer"
      style={{
        backgroundColor: "var(--chimba-blue)",
        color: "var(--white)",
        padding: "120px 24px 64px",
      }}
    >
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            marginBottom: "64px",
          }}
        >
          <p
            className="ch-footer__cta"
            style={{
              fontSize: "clamp(48px, 8vw, 96px)",
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: "-0.04em",
              margin: "0 0 32px",
            }}
          >
            ¿Arrancamos?{" "}
            <span className="ch-mark" style={{ color: "var(--chimba-blue)" }}>
              Escribinos.
            </span>
          </p>

          <Button href={`mailto:${AGENCY_INFO.email}`} variant="sticker">
            Hablemos
          </Button>
        </div>

        <div
          className="ch-footer__row"
          style={{
            borderTop: "1px solid rgba(255, 255, 255, 0.15)",
            paddingTop: "36px",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            fontSize: "14px",
            fontWeight: 500,
          }}
        >
          <div style={{ display: "flex", gap: "32px", flexWrap: "wrap" }}>
            <a
              href={`mailto:${AGENCY_INFO.email}`}
              style={{ color: "var(--chimba-green)", textDecoration: "none", fontWeight: 700 }}
            >
              {AGENCY_INFO.email}
            </a>
            <a
              href={AGENCY_INFO.instagram}
              target="_blank"
              rel="noreferrer"
              style={{ color: "var(--white)", textDecoration: "none" }}
            >
              Instagram
            </a>
            <span style={{ color: "rgba(255, 255, 255, 0.6)" }}>{AGENCY_INFO.city}</span>
          </div>

          <div style={{ color: "rgba(255, 255, 255, 0.6)", fontStyle: "italic", fontWeight: 300 }}>
            Chimba — Creative Agency · {AGENCY_INFO.year}
          </div>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 4: Verificar typecheck**

Run: `npm run typecheck`
Expected: 0 errores.

- [ ] **Step 5: Commit y Push**

```bash
git add src/components/sections/
git commit -m "feat: implement CaseGrid, Services and Footer sections"
git push origin main
```

---

### Task 6: Integración en Home Page (`page.tsx`), Smoke Test y Despliegue

**Files:**
- Create/Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `Navbar`, `Hero`, `Statement`, `CaseGrid`, `BrandInterlude`, `Services`, `Footer`.
- Produces: Home page completa renderizada en `/`.

- [ ] **Step 1: Crear `src/app/page.tsx` integrando toda la web**

```tsx
import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { Statement } from "@/components/sections/Statement";
import { CaseGrid } from "@/components/sections/CaseGrid";
import { BrandInterlude } from "@/components/sections/BrandInterlude";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar floating />
      <Hero />
      <Statement />
      <CaseGrid />
      <BrandInterlude />
      <Services />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Ejecutar verificación exhaustiva de producción**

Run: `npm run build`
Expected: Compilación estática/SSR limpia de Next.js sin warnings ni errores.

- [ ] **Step 3: Commit y Push final a origin main**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble complete preliminary Home page and integrate all sections"
git push origin main
```
