# CaseCard

Tarjeta de caso para el portfolio: imagen vertical con “Cliente 🤝 Chimba”, nombre del cliente, año y servicios.

**El consumidor provee:** `<a class="ch-case" href>` con `.ch-case__media` (imagen por `background-image`, 4:5) que contiene `.ch-case__collab`, un `.ch-case__head` con `h3.ch-case__client` y `.ch-case__year`, y `.ch-case__tags` con `.ch-tag`.

- Grilla de 2–3 columnas en desktop, 1 en mobile.
- Imagen: la pieza o portada del caso, no el logo del cliente solo.
- En `.ch-case__collab` va el nombre del cliente en texto (o su logo en blanco), la manito y “Chimba”.
- Hover: sube y muestra `shadow-card`. Toda la tarjeta es el link.
