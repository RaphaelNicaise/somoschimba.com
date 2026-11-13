Sistema de diseño de **Chimba — Creative Agency** para la web somoschimba.com. Todo sale de las piezas reales de la agencia: el logo azul, el verde de resaltador, el gris de fondo, los trazos a mano y la manito 🤝 como sticker. Cargá `tokens.css` y `components/bundle.css` y usá las clases `.ch-*`.

## La idea en una línea

Láminas limpias en gris, tipografía grotesca muy pesada en azul, y **una o dos palabras subrayadas con resaltador verde**. Sobre esa calma aparecen gestos a mano (el óvalo, la hoja, una línea que recorre la página) y la manito que sella cada colaboración: *Cliente 🤝 Chimba*.

## Cómo habla Chimba

- **Español rioplatense, con voseo y cercano.** “Importá tranquilo”, “Escribinos”, “Hablemos”. Nunca “usted”, nunca “tú”.
- **Frases cortas con giro.** Primero una afirmación simple, después el remate resaltado: “Cambiar el logo puede **cambiar mucho más** que un logo.”
- **Primera persona del plural** para la agencia (“Exploramos”, “Diseñamos”, “Así se trabajó”) y segunda persona para el cliente.
- **Mayúsculas solo en portadas** (`display-xl`: “ASÍ COMIENZA TODO”) y en etiquetas (`label`: “REBRANDING”). El resto, oración normal.
- **El nombre del cliente va completo y con su grafía:** “Santarelli *Construcciones*”, “Ferrocargas del Sur”.
- **Emoji: uno solo, la manito 🤝**, y siempre como sticker (`Stickers/handshake-light`), no como carácter de texto. Ningún otro emoji decorativo.
- Términos de oficio en inglés se aceptan tal cual: *Key visual*, *Rebranding*, *Creative Agency*.

## Color

| Token | Rol |
|---|---|
| `chimba-blue` #2B4991 | La marca. Logo, titulares, botón primario. |
| `chimba-green` #68F293 | El gesto. Resaltador, bloques de esquina, líneas, óvalo, pantallas completas. |
| `chimba-gray` #E4E4E4 | El papel. Fondo de casi todo. |
| `chimba-night` #0D1424 | Tema oscuro y portadas con foto. |
| `white` | Láminas de portfolio, texto sobre azul. |

Reglas:

- Fondo por defecto `surface` (gris). Texto en `ink` (azul). Así se ven las láminas.
- El verde **nunca es texto sobre gris ni blanco** (no se lee). Va como fondo (`highlight`, `surface-brand`) o como texto sobre azul, noche o foto con `scrim` (`on-photo-accent`).
- Combinaciones válidas: azul sobre gris, azul sobre verde, verde sobre azul, blanco sobre azul, verde o blanco sobre foto con `scrim`.
- Una pantalla completa en verde (`.ch-statement--brand`) por página, como mucho; funciona como pausa entre casos.
- Los colores de los clientes (rojo y azul de Ferrocargas, verde oscuro de PSL) viven solo dentro de sus fotos y piezas. No se mezclan con los tokens de Chimba.

## Tipografía

Una sola familia grotesca, `--font-sans`, usada en extremos de peso: **800 para gritar, 300 itálica para susurrar.**

- `display-xl` y `display-l`: portadas y hero, apretadas (interlineado 0.88–0.92, tracking negativo).
- `headline` + `headline-italic`: frases de manifiesto. La palabra clave pasa a itálica liviana **dentro de** `.ch-mark`.
- `title-italic`: encabezados de galería (“Key visual 2”) junto al bloque verde.
- `eyebrow`: MAYÚSCULAS espaciadas, como “CREATIVE AGENCY” bajo el logo.
- `meta`: itálica 300 para el año (“2025/2026”) en esquinas.

**La fuente de la web es Archivo** (Google Fonts, pesos 300–900 con itálicas), cargada desde `components/bundle.css`. Usala para todo: titulares, texto, botones y etiquetas. Las láminas impresas usan una grotesca tipo Helvetica Neue y una variante de *t*, *q* e *y* con cola curva. En la web no se imitan: Archivo 800 cubre los titulares y Archivo 300 itálica, los resaltados.

## Elementos gráficos

- **Resaltador** (`.ch-mark`): bloque verde plano detrás de 1–3 palabras. Rectangular, sin bordes redondeados. Máximo dos resaltados por bloque de texto. Variante `.ch-mark--inverse` (azul con texto verde) para usar sobre fondo verde.
- **Etiqueta inclinada** (`.ch-tag`): el “REBRANDING” sobre una franja verde levemente torcida (−1.6°). Indica el tipo de trabajo.
- **Óvalo a mano** (`.ch-scribble`, asset `Shapes/oval-scribble-green`): rodea el logo de Chimba o UNA palabra/CTA para señalarla. Una vez por pantalla.
- **Hoja** (`.ch-leaf`, assets `Shapes/leaf-outline-*`): cuadrado con dos esquinas opuestas redondeadas (`radius-leaf`). Solo contorno de `stroke-hair`. Marca de agua o marco de fotos, nunca relleno de texto.
- **Recorrido** (`.ch-track`): una línea fina verde (o azul) que baja y dobla con curva amplia (`radius-track`), conectando secciones como en los moodboards. Decorativa, `pointer-events: none`.
- **Bloque de esquina** (`.ch-corner-block`): rectángulo verde que sangra desde el borde de la pantalla, al lado de títulos de sección o en una esquina inferior.
- **Foto desenfocada + velo** (`.ch-hero`): las portadas de caso usan una foto del lugar o el producto muy desenfocada, con `scrim`, y texto verde enorme encima.
- **Láminas con sombra** (`shadow-card`): piezas de portfolio apoyadas sobre el gris, rectas, con sombra larga hacia abajo.

Las esquinas son **rectas** (`radius-none`) en todo lo que es UI. La curva solo aparece en los gestos: hoja, recorrido y el botón sticker.

## La manito 🤝

- Es el símbolo de la colaboración: va **entre** el logo del cliente y el de Chimba (“Ferrocargas 🤝 Chimba”), o al final de un manifiesto como firma.
- Siempre como sticker (`.ch-sticker`): borde blanco y sombra corta, girado unos −6°.
- Versión principal: `Stickers/handshake-light` (tonos de piel). `Stickers/handshake-yellow` queda para fondos donde el tono piel se pierde, o piezas más lúdicas.
- En la web, además: botón “Hablemos” con sticker (`.ch-btn--sticker`), que gira levemente al pasar el mouse.

## Logos

- `Logos/chimba-creative-agency`: logotipo + “CREATIVE AGENCY”. Para la portada de la home, el footer y documentos.
- `Logos/chimba-wordmark`: solo “Chimba”. Para la barra de navegación y la firma junto a la manito.
- Ambos archivos son **azul `chimba-blue` sobre transparente**: usalos sobre gris, blanco o verde. Sobre noche o foto, escribí “Chimba” en `--font-sans` 800 con `on-photo-accent`, como hacen las portadas, hasta tener una versión en negativo.
- Aire mínimo alrededor del logo: la altura de la “C”.

## Espaciado y layout

- Gutter lateral: `space-4` en mobile, `space-7` en desktop.
- Las secciones respiran mucho: `space-8` arriba y abajo, `space-9` alrededor de manifiestos.
- Texto de manifiesto alineado a la izquierda, ancho máximo 16 caracteres por línea aprox. (`max-width: 16ch`), como las láminas.
- Formato vertical 3:4 / 4:5 para piezas y casos, igual que las publicaciones.

## Movimiento

- Rápido y seco: 150–200 ms, `ease`.
- Hover de botones: intercambio azul ↔ verde.
- Hover de casos: sube 4px y aparece `shadow-card`.
- La manito puede girar −8° en hover. Nada de rebotes ni animaciones en loop.

## Estados y accesibilidad

- Foco: `outline` de `stroke-bold` en `line-strong` con 3px de separación. Se ve sobre gris, blanco y noche.
- Deshabilitado: 45% de opacidad, cursor `not-allowed`.
- El resaltador y los trazos son énfasis visual: el texto tiene que tener sentido sin ellos.

## No hacer

- Degradés, sombras de color o esquinas redondeadas en tarjetas.
- Verde como color de texto sobre gris o blanco.
- Más de dos resaltados por frase, o resaltar frases enteras.
- Emojis que no sean la manito, o la manito como carácter de texto.
- Mezclar los colores de un cliente con los de Chimba fuera de sus piezas.
- Redibujar el logo: usá siempre los archivos de `Logos`.
