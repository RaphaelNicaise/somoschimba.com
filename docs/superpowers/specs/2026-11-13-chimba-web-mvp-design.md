# Spec: Chimba Web Preliminar (somoschimba.com)

**Fecha:** 2026-11-13  
**Estado:** Propuesto / Aprobado preliminar  
**Objetivo:** Desarrollar la primera versión web navegable de Chimba Creative Agency (somoschimba.com) basada estrictamente en el Design System existente, sin modificar la carpeta `chimba-design-system/`.

---

## 1. Contexto y Principios de Diseño

El sitio web traduce digitalmente el sistema de identidad de **Chimba — Creative Agency**:
- **Paleta central:**
  - Azul Chimba `#2B4991` (`--chimba-blue`): Logo, titulares, fondo de footer y botones primarios.
  - Verde Resaltador `#68F293` (`--chimba-green`): El gesto. Fondos de resaltadores, etiquetas inclinadas (−1.6°), línea decorativa, statement verde de transición y botón de acción.
  - Gris Papel `#E4E4E4` (`--surface`): Fondo base de toda la web.
  - Noche `#0D1424` (`--chimba-night`): Fondo del hero con scrim sobre foto.
- **Tipografía:** Archivo (Google Fonts), pesos 800 para titulares de impacto, 300 itálica para susurros y matices dentro de resaltadores.
- **Voz y tono:** Español rioplatense, voseo cercano ("Escribinos", "Hablemos"), frases concisas con remate resaltado.
- **Gestos:** La manito colaborativa 🤝 como sticker rotado (−6°), etiquetas inclinadas (−1.6°), esquinas rectas en UI y contornos orgánicos en trazos.

> **Regla de oro:** La carpeta `chimba-design-system/` se mantiene 100% intacta. Sirve como fuente de verdad y referencia.

---

## 2. Arquitectura Técnica

- **Framework:** Next.js (App Router, React 19 / TypeScript).
- **Estilos:** Carga directa de `chimba-design-system/tokens.css` y `chimba-design-system/components/bundle.css` a través de `src/app/globals.css`.
- **Assets:** Distribuidos en `public/assets/` replicando las imágenes de portfolio, logos, stickers y formas requeridas para visualización web.
- **Componentes:** Componentes TSX modulares y fuertemente tipados que encapsulan la semántica y clases `.ch-*`.

```text
somoschimba.com/
├── chimba-design-system/          # [Intacto / Read-only] Tokens y CSS
├── imagenes/                      # [Intacto] Renders originales
├── public/assets/                 # Assets servidos estáticamente para Next.js
│   ├── Logos/
│   ├── Portfolio/
│   ├── Shapes/
│   └── Stickers/
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Archivo font, metadata SEO, viewport
│   │   ├── page.tsx                # Home Page completa
│   │   └── globals.css            # Import de tokens y bundle
│   ├── components/
│   │   ├── Navbar.tsx             # Barra fija / sticky con soporte para hero oscuro y scroll
│   │   ├── Hero.tsx               # Portada con foto blur + velo + "ASÍ COMIENZA TODO"
│   │   ├── Statement.tsx          # Bloques de manifiesto con .ch-mark y firma 🤝
│   │   ├── CaseCard.tsx           # Tarjeta de portfolio vertical 4:5 con hover
│   │   ├── CaseGrid.tsx           # Grilla de proyectos destacados
│   │   ├── Services.tsx           # Áreas de experiencia y capacidades de la agencia
│   │   └── Footer.tsx             # Cierre en azul Chimba con sticker interactivo y contacto
│   └── data/
│       ├── cases.ts               # Dataset de casos reales (Ferrocargas, PSL, Santarelli, Girotti)
│       └── navigation.ts          # Enlaces de navegación y datos de contacto
```

---

## 3. Desglose de Secciones (Home Page)

### 3.1. Navbar (`Navbar.tsx`)
- Logo tipográfico / wordmark "Chimba".
- Enlaces de navegación: `#casos`, `#manifiesto`, `#servicios`, `#contacto`.
- Metadato a la derecha: `2025/2026` en itálica liviana.
- Variante dinámica o traslúcida que se integra al pasar del hero oscuro al fondo gris.

### 3.2. Hero (`Hero.tsx`)
- Fotografía real desenfocada con velo oscuro (`chimba-night`).
- Titular en display gigante: `ASÍ COMIENZA TODO` (con `TODO` destacado).
- Línea horizontal verde divisoria.
- Pie de hero: `Santarelli Construcciones` con segunda palabra en itálica.

### 3.3. Statement Principal (`Statement.tsx`)
- Frase de manifiesto en Archivo 800:
  *"No hacemos logos para llenar hojas de manual. Diseñamos marcas para que la gente las elija."* con resaltador verde en palabras clave.
- Firma institucional: `Cliente 🤝 Chimba` con sticker rotado a −6°.

### 3.4. Grilla de Casos / Portfolio (`CaseGrid.tsx` & `CaseCard.tsx`)
- Tarjetas con proporción 4:5, elevación en hover con sombra larga (`shadow-card`).
- Casos iniciales incluidos:
  1. **Ferrocargas del Sur** — Rebranding / Identidad ferroviaria.
  2. **PSL Mundial** — Campaña / Key Visual.
  3. **Santarelli Construcciones** — Key Visual / Arquitectura & Obra.
  4. **Girotti** — Identidad visual & Dirección de arte.
- Badge inclinado (`.ch-tag` a −1.6°) con la disciplina.
- Firma colaborativa `Cliente 🤝 Chimba` en la pieza.

### 3.5. Statement Brand Verde de Transición
- Bloque `.ch-statement--brand` con fondo verde resaltador plano (`#68F293`):
  *"Cambiar el logo puede cambiar mucho más que un logo."*
- Variante `.ch-mark--inverse` (texto verde sobre fondo azul) para contraste de alta jerarquía.

### 3.6. Servicios y Enfoque (`Services.tsx`)
- Sección estructurada con láminas limpias sobre gris papel:
  - **Rebranding:** Evolución y rediseño de marcas existentes.
  - **Key Visual:** El sistema visual rector de campañas y lanzamientos.
  - **Identidad de Marca:** Naming, universo gráfico, tipografía y voz.
  - **Dirección de Arte:** Cuidado estético de piezas, fotografía y contenido.
- Acompañado por el trazo orgánico de la hoja (`radius-leaf`) característico de Chimba.

### 3.7. Footer y Contacto (`Footer.tsx`)
- Bloque pleno en azul Chimba (`#2B4991`).
- Titular de llamado a la acción: *"¿Arrancamos? Escribinos."* con resaltador.
- Botón interactivo tipo sticker (`.ch-btn--sticker`) con la manito 🤝 que rota al hover.
- Vías de contacto directas: mail (`hola@somoschimba.com`), WhatsApp / Calendly, Instagram, LinkedIn.
- Copyright y firma de oficio: *Chimba — Creative Agency 2025/2026*.

---

## 4. Plan de Commits

Para cumplir con el requerimiento de enlazar el repositorio remoto y subir en varios commits:
1. `commit 1`: `chore: initialize repo with gitignore, chimba design system and original assets`
2. `commit 2`: `feat: scaffold Next.js App Router project and configure Chimba design tokens`
3. `commit 3`: `feat: implement Chimba UI components (Navbar, Hero, Statement, CaseCard, Footer)`
4. `commit 4`: `feat: assemble complete preliminary Home page and integrate real case studies`
5. `commit 5`: `docs: add project design specification and execution plan`
