# Navbar

Barra superior: “Chimba” a la izquierda, links al centro y el año en itálica a la derecha, como en las portadas.

**El consumidor provee:** `<nav class="ch-nav">` con `.ch-nav__brand` (texto “Chimba” o el wordmark), una lista `.ch-nav__links` y un `.ch-nav__meta` (año o CTA). Marcá la página actual con `aria-current="page"`.

- Sobre gris: tal cual. Sobre una foto (`.ch-hero`): agregá `.ch-nav--photo` y la marca pasa a verde.
- Links sugeridos: Casos, Servicios, Nosotros, Contacto.
- En mobile los links se esconden: proveé tu menú desplegable.
