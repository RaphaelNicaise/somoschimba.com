import type { ReactNode } from "react";
import { A } from "@/data/site";

/** "Chimba" (o el logo) con el óvalo a mano que se dibuja en hover. */
export function Cw({ children = "Chimba", className = "", drawn = false }: { children?: ReactNode; className?: string; drawn?: boolean }) {
  return (
    <span className={`cw${drawn ? " is-drawn" : ""}${className ? " " + className : ""}`}>
      {children}
      <img className="cw__oval" src={A.oval} alt="" />
    </span>
  );
}

export function Hand({ alt = "", className = "", style }: { alt?: string; className?: string; style?: React.CSSProperties }) {
  return <img className={`sticker${className ? " " + className : ""}`} src={A.hand} alt={alt} style={style} />;
}

/** Convierte "texto [[resaltado]] y [[_itálica resaltada_]]" en spans .mark. */
export function Marked({ text }: { text: string }) {
  const parts = text.split(/(\[\[.*?\]\])/g);
  return (
    <>
      {parts.map((p, i) => {
        const m = p.match(/^\[\[(_?)(.*?)_?\]\]$/);
        if (!m) return p;
        return (
          <span key={i} className={`mark${m[1] ? " mark--it" : ""}`}>
            {m[2]}
          </span>
        );
      })}
    </>
  );
}

export function ClientName({ client, rest }: { client: string; rest: string }) {
  return (
    <>
      {client}
      {rest ? <> <em>{rest}</em></> : null}
    </>
  );
}
