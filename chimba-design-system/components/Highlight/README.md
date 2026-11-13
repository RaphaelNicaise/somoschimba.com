# Highlight

Resaltador verde detrás de una o tres palabras clave: el gesto más reconocible de Chimba.

**El consumidor provee:** un `<span class="ch-mark">` dentro de un titular o párrafo. Agregá `.ch-mark--italic` para la palabra en itálica liviana (como “*cambiar mucho más*”) y `.ch-mark--inverse` sobre fondos verdes.

- Máximo dos resaltados por bloque. Resaltá la idea, no la frase entera.
- Funciona en cualquier tamaño: de `body` a `display-xl`. Corta bien en varias líneas (`box-decoration-break: clone`).
- Sobre gris o blanco: `.ch-mark`. Sobre `surface-brand`: `.ch-mark--inverse`.
- El texto tiene que tener sentido sin el resaltado.
