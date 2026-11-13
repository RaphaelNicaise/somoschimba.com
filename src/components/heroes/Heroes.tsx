"use client";

import { useEffect, useRef, useState, type ComponentType } from "react";
import { A } from "@/data/site";
import { Cw, Hand } from "@/components/bits";

export interface HeroProps {
  brand: string;
  setBrand: (v: string) => void;
}

const reduced = () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function Ctas({ primary = "Ver casos", tone = "light" }: { primary?: string; tone?: "light" | "green" | "blue" }) {
  return (
    <div className="ctas">
      <a className={`btn ${tone === "blue" ? "btn--green" : "btn--primary"}`} href="#casos">{primary}</a>
      <a className={`btn ${tone === "blue" ? "btn--white" : "btn--line"}`} href="#contacto">Hablemos</a>
    </div>
  );
}

/* 1 · La portada actual */
function HeroMain({ brand, setBrand }: HeroProps) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="wrap hero__grid">
        <div>
          <p className="eyebrow">Creative agency</p>
          <h1 id="hero-title">
            Diseñamos marcas que la gente <span className="mark mark--it">elige.</span>
          </h1>
          <div className="lockup">
            <label className="sr-only" htmlFor="brand-input">Nombre de tu marca</label>
            <input
              className="lockup__input"
              id="brand-input"
              type="text"
              autoComplete="organization"
              maxLength={28}
              placeholder="Tu marca"
              spellCheck={false}
              value={brand}
              onChange={(e) => setBrand(e.target.value)}
              style={{ ["--len" as string]: Math.max(8, brand.length + 1) }}
            />
            <Hand alt="en colaboración con" />
            <Cw className="cw--big" />
            <p className="lockup__hint">
              {brand.trim() ? "Así firmamos los proyectos. Seguimos abajo, en Contacto." : "Escribí el nombre de tu marca y mirá cómo queda la firma."}
            </p>
          </div>
          <div className="hero__ctas">
            <a className="btn btn--primary" href="#casos">Ver casos</a>
            <a className="btn btn--line" href="#contacto">Contanos tu proyecto</a>
          </div>
        </div>
        <div className="pile" aria-hidden="true">
          <img src={A.coverBlur} alt="" />
          <img src={A.rebranding} alt="" />
          <img src={A.mundialGreen} alt="" />
        </div>
      </div>
      <div className="hero__leaf" aria-hidden="true" />
    </section>
  );
}

/* 2 · Firma gigante */
function H01({ brand, setBrand }: HeroProps) {
  return (
    <section className="hx o1"><div className="wrap hx__body">
      <p className="eyebrow">Creative agency</p>
      <div className="lock" style={{ marginTop: 20 }}>
        <input type="text" placeholder="Tu marca" maxLength={22} aria-label="Escribí tu marca" spellCheck={false} value={brand} onChange={(e) => setBrand(e.target.value)} style={{ ["--len" as string]: Math.max(8.5, brand.length + 1) }} />
        <Hand alt="y" />
        <Cw />
      </div>
      <h1 className="sub">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
      <p className="hint">Escribí el nombre de tu marca arriba.</p>
      <Ctas />
    </div></section>
  );
}

/* 3 · Portada de caso */
function H02() {
  return (
    <section className="hx o2">
      <div className="ph" style={{ backgroundImage: `url(${A.coverBlur})` }} />
      <div className="hx__body wrap">
        <h1 className="big">Diseñamos marcas que la gente <strong>elige</strong></h1>
        <div className="rule" />
        <div className="foot"><span>Rebranding, key visual <em>y redes</em></span><a className="btn btn--green" href="#casos">Ver casos</a></div>
      </div>
    </section>
  );
}

/* 4 · Pantalla verde */
function H03() {
  return (
    <section className="hx o3">
      <div className="hx__body wrap">
        <h1 className="h1">Diseñamos marcas que la gente <span className="inv">elige.</span></h1>
        <Ctas />
      </div>
      <div className="corner lock"><Hand /><Cw /></div>
    </section>
  );
}

/* 5 · Manifiesto con etiqueta */
function H04() {
  return (
    <section className="hx o4"><div className="wrap">
      <div className="top"><span className="tag tag--lg">Rebranding · Key visual · Redes</span></div>
      <div className="hx__body">
        <h1 className="h1">Diseñamos marcas que <span className="mark mark--it">la gente elige.</span></h1>
        <div className="sign lock"><span>Tu marca</span><Hand alt="y" /><Cw /></div>
      </div>
    </div></section>
  );
}

/* 6 · Franja de foto */
function H05() {
  return (
    <section className="hx o5">
      <div className="split">
        <div className="strip" aria-hidden="true"><div style={{ backgroundImage: `url(${A.ferroCover})` }} /></div>
        <div className="txt">
          <h1 className="h1"><span className="mark">Diseñamos</span> <span className="mark">marcas</span> que la gente <span className="mark mark--it">elige</span> y reconoce.</h1>
          <Ctas />
        </div>
      </div>
    </section>
  );
}

/* 7 · Logo con óvalo */
function H06() {
  const ref = useRef<HTMLDivElement>(null);
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 250);
    return () => clearTimeout(t);
  }, []);
  return (
    <section className="hx o6"><div className="wrap hx__body">
      <div className="logo" ref={ref}>
        <Cw drawn={drawn}>
          <img className="wm" src={A.wordmark} alt="Chimba" />
          <span className="wm-txt" aria-hidden="true">Chimba</span>
        </Cw>
        <p className="ag">CREATIVE AGENCY</p>
      </div>
      <h1 className="sub">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
      <Ctas />
    </div></section>
  );
}

/* 8 · Palabra que cambia */
const W7 = ["elige.", "recuerda.", "entiende.", "recomienda."];
function H07() {
  const [k, setK] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || reduced()) return;
    const t = setInterval(() => setK((v) => (v + 1) % W7.length), 2200);
    return () => clearInterval(t);
  }, [auto]);
  return (
    <section className="hx o7"><div className="wrap hx__body">
      <h1 className="h1">Diseñamos marcas que la gente <span className="word swap" key={k}><span className="mark mark--it">{W7[k]}</span></span></h1>
      <div className="list" aria-label="Elegí una palabra">
        {W7.map((w, i) => (
          <button key={w} type="button" aria-pressed={i === k} onClick={() => { setAuto(false); setK(i); }}>{w.slice(0, -1)}</button>
        ))}
      </div>
      <Ctas />
    </div></section>
  );
}

/* 9 · Cinta de láminas */
const BELT = [A.coverBlur, A.pslStatement, A.mundialGreen, A.santarelliKv1, A.rebranding, A.ferroCover, A.pslKv2, A.ferroMood];
function H08() {
  return (
    <section className="hx o8">
      <div className="hx__body wrap">
        <h1 className="h1">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
        <Ctas />
      </div>
      <div className="belt" aria-hidden="true"><div className="belt__in">
        {[...BELT, ...BELT].map((src, i) => <img key={i} className="lam" src={src} alt="" />)}
      </div></div>
    </section>
  );
}

/* 10 · Hoja con foto */
function H09() {
  return (
    <section className="hx o9"><div className="wrap hx__body">
      <div className="grid">
        <div>
          <p className="eyebrow">Creative agency</p>
          <h1 className="h1" style={{ marginTop: 20 }}>Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
          <Ctas />
        </div>
        <div className="frame">
          <div className="leaf" />
          <div className="photo"><img src={A.pslKv2} alt="Key visual de PSL Logistics" /></div>
          <Hand />
        </div>
      </div>
    </div></section>
  );
}

/* 11 · Recorrido */
function H10() {
  return (
    <section className="hx o10"><div className="wrap hx__body">
      <div className="stage">
        <svg className="path" viewBox="0 0 1000 560" preserveAspectRatio="none" aria-hidden="true">
          <path d="M-20 470 H 330 C 420 470 440 400 470 330 S 560 110 640 110 H 760 C 860 110 880 200 890 260 V 420 C 890 500 840 540 760 540 H 640" />
        </svg>
        <h1 className="h1">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
        <Ctas />
        <img className="lam p p1" src={A.pslStatement} alt="" />
        <img className="lam p p2" src={A.mundialGreen} alt="" />
        <img className="lam p p3" src={A.ferroCover} alt="" />
      </div>
    </div></section>
  );
}

/* 12 · Mesa de trabajo */
function H11() {
  const ref = useRef<HTMLElement>(null);
  const onMove = (e: React.PointerEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5, y = (e.clientY - r.top) / r.height - 0.5;
    el.querySelectorAll<HTMLElement>(".desk img.lam").forEach((im, i) => {
      const f = i % 2 ? 18 : -14;
      im.style.setProperty("--mx", (x * f).toFixed(1) + "px");
      im.style.setProperty("--my", (y * f).toFixed(1) + "px");
    });
  };
  return (
    <section className="hx o11" ref={ref} onPointerMove={onMove}>
      <div className="desk" aria-hidden="true">
        <img className="lam d1" src={A.coverBlur} alt="" />
        <img className="lam d2" src={A.santarelliKv1} alt="" />
        <img className="lam d3" src={A.rebranding} alt="" />
        <img className="lam d4" src={A.pslStatement} alt="" />
        <Hand />
      </div>
      <div className="hx__body wrap">
        <h1 className="h1">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1>
        <Ctas />
      </div>
    </section>
  );
}

/* 13 · Cliente 🤝 Chimba */
const C12: [string, string, string][] = [
  ["PSL", "Logistics", A.pslStatement],
  ["Santarelli", "Construcciones", A.coverBlur],
  ["Ferrocargas", "del Sur", A.ferroCover],
  ["Girotti", "", A.rebranding],
];
function H12() {
  const [k, setK] = useState(0);
  const [shown, setShown] = useState(0);
  const [fade, setFade] = useState(false);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto || reduced()) return;
    const t = setInterval(() => setK((v) => (v + 1) % C12.length), 2800);
    return () => clearInterval(t);
  }, [auto]);
  useEffect(() => {
    if (k === shown) return;
    setFade(true);
    const t = setTimeout(() => { setShown(k); setFade(false); }, 280);
    return () => clearTimeout(t);
  }, [k, shown]);
  const [c, r, img] = C12[shown];
  return (
    <section className="hx o12"><div className="wrap hx__body">
      <div className="grid">
        <div>
          <p className="small">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></p>
          <h1 className="lock" aria-live="polite">
            <span className={`client${fade ? " fade" : ""}`}>{c}{r && <> <em>{r}</em></>}</span>
            <Hand alt="y" />
            <Cw />
          </h1>
          <div className="dots">
            {C12.map(([n], i) => (
              <button key={n} type="button" aria-label={n} aria-current={i === k} onClick={() => { setAuto(false); setK(i); }} />
            ))}
          </div>
          <Ctas primary="Ver el caso" />
        </div>
        <img className={`lam cover${fade ? " fade" : ""}`} src={img} alt="Lámina del caso" />
      </div>
    </div></section>
  );
}

/* 14 · Pregunta */
function H13() {
  const [a, setA] = useState<"" | "si" | "no">("");
  return (
    <section className="hx o13">
      <div className="hx__body wrap">
        <h1 className="h1">¿La gente <span className="mark mark--it">elige</span> tu marca?</h1>
        <div className="ans">
          <button className="btn btn--green" type="button" onClick={() => setA("si")}>Sí, siempre</button>
          <button className="btn btn--white" type="button" onClick={() => setA("no")}>Todavía no</button>
        </div>
        <p className="reply" aria-live="polite">
          {a === "" && (<>Diseñamos marcas que la gente elige. <span className="lock">Tu marca <Hand alt="y" style={{ width: 52 }} /> <Cw /></span></>)}
          {a === "si" && (<>Buenísimo. Hagamos que se note todavía más: <span className="mark">rebranding, key visual y redes.</span></>)}
          {a === "no" && (<>Para eso estamos. Diseñamos marcas que la gente <span className="mark">elige.</span></>)}
          {a !== "" && <a className="btn btn--green" href="#contacto" style={{ marginLeft: 8, verticalAlign: "middle" }}>Hablemos</a>}
        </p>
      </div>
    </section>
  );
}

/* 15 · Resaltador que se pinta */
const WORDS14 = "Diseñamos marcas que la gente elige.".split(" ");
function H14() {
  const [on, setOn] = useState<Set<number>>(new Set([WORDS14.length - 1]));
  const timers = useRef<Record<number, ReturnType<typeof setTimeout>>>({});
  const mark = (i: number) => {
    setOn((s) => new Set(s).add(i));
    if (i === WORDS14.length - 1) return;
    clearTimeout(timers.current[i]);
    timers.current[i] = setTimeout(() => setOn((s) => { const n = new Set(s); n.delete(i); return n; }), 1600);
  };
  useEffect(() => () => Object.values(timers.current).forEach(clearTimeout), []);
  return (
    <section className="hx o14"><div className="wrap hx__body">
      <h1 className="h1">
        {WORDS14.map((w, i) => (
          <span key={i}>
            <span className={`w${i === WORDS14.length - 1 ? " it" : ""}${on.has(i) ? " on" : ""}`} onPointerEnter={() => mark(i)} onClick={() => mark(i)}>{w}</span>{" "}
          </span>
        ))}
      </h1>
      <p className="hint">Pasá el mouse por las palabras.</p>
      <Ctas />
    </div></section>
  );
}

/* 16 · Bento */
function H15() {
  return (
    <section className="hx o15"><div className="wrap">
      <div className="bento">
        <div className="cell a"><p className="eyebrow">Creative agency</p><h1 className="h1">Diseñamos marcas que la gente <span className="mark mark--it">elige.</span></h1><div className="ctas" style={{ marginTop: 0 }}><a className="btn btn--primary" href="#casos">Ver casos</a></div></div>
        <div className="cell b"><p className="k">Qué hacemos</p><ul><li>Rebranding</li><li>Identidad</li><li>Key visual</li><li>Redes</li></ul></div>
        <div className="cell c"><img src={A.santarelliKv1} alt="Key visual de Santarelli Construcciones" /></div>
        <div className="cell d"><p className="k">¿Arrancamos?</p><p className="lock"><span>Tu marca</span><Hand alt="y" /><Cw /></p><a className="btn btn--green" href="#contacto">Hablemos</a></div>
      </div>
    </div></section>
  );
}

export const HEROES: { name: string; Component: ComponentType<HeroProps> }[] = [
  { name: "Actual", Component: HeroMain },
  { name: "Firma gigante", Component: H01 },
  { name: "Portada de caso", Component: H02 },
  { name: "Pantalla verde", Component: H03 },
  { name: "Manifiesto con etiqueta", Component: H04 },
  { name: "Franja de foto", Component: H05 },
  { name: "Logo con óvalo", Component: H06 },
  { name: "Palabra que cambia", Component: H07 },
  { name: "Cinta de láminas", Component: H08 },
  { name: "Hoja con foto", Component: H09 },
  { name: "Recorrido", Component: H10 },
  { name: "Mesa de trabajo", Component: H11 },
  { name: "Cliente y Chimba", Component: H12 },
  { name: "Pregunta", Component: H13 },
  { name: "Resaltador que se pinta", Component: H14 },
  { name: "Bento", Component: H15 },
];
