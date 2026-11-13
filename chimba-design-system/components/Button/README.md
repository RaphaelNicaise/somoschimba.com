# Button

Botón de acción con cuatro variantes: primario azul, resaltador verde, contorno y sticker con la manito.

**El consumidor provee:** un `<a>` o `<button>` con la clase `.ch-btn` + una variante, y el texto. Para `--sticker`, un `<img>` con `Stickers/handshake-light` como primer hijo.

| Variante | Cuándo |
|---|---|
| `.ch-btn--primary` | La acción principal de la pantalla (“Ver casos”). Una por sección. |
| `.ch-btn--highlight` | Acción sobre fondo azul o noche, o segunda acción con peso. |
| `.ch-btn--line` | Acciones secundarias (“Más info”). |
| `.ch-btn--sticker` | Solo el contacto: “Hablemos”, “Escribinos”. Una por página (nav o footer). |

- Texto en verbo + voseo: “Escribinos”, “Mirá el caso”, “Hablemos”.
- Esquinas rectas; el único redondeado es el sticker.
- Hover: azul ↔ verde. Foco: contorno `line-strong`.
- No pongas dos botones primarios juntos.
