"use client";

import { useEffect, useRef, useState } from "react";
import { CASES } from "@/data/site";
import { ClientName, Cw, Hand, Marked } from "@/components/bits";

type LenisLike = { stop: () => void; start: () => void };
const lenis = () => (window as unknown as { lenis?: LenisLike }).lenis;

export function Cases() {
  const dlg = useRef<HTMLDialogElement>(null);
  const strip = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const section = useRef<HTMLElement>(null);
  const opener = useRef<HTMLElement | null>(null);
  const [cur, setCur] = useState(0);
  const c = CASES[cur];

  // La línea de recorrido se dibuja a medida que se scrollea la sección.
  useEffect(() => {
    const onScroll = () => {
      const s = section.current, t = track.current;
      if (!s || !t) return;
      const r = s.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (window.innerHeight * 0.7 - r.top) / r.height));
      t.style.setProperty("--p", p.toFixed(3));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    if (strip.current) strip.current.scrollLeft = 0;
  }, [cur]);

  const open = (i: number, el: HTMLElement) => {
    opener.current = el;
    setCur(i);
    lenis()?.stop();
    dlg.current?.showModal();
  };
  const go = (d: number) => setCur((v) => (v + d + CASES.length) % CASES.length);

  return (
    <section className="section cases" id="casos" aria-labelledby="casos-title" ref={section}>
      <div className="track" ref={track} aria-hidden="true" />
      <div className="wrap">
        <div className="stitle">
          <h2 id="casos-title">Casos</h2>
        </div>
        <p className="lead">Cuatro marcas, cuatro problemas distintos. Tocá las láminas para ver cada caso completo.</p>
        <div>
          {CASES.map((cs, i) => {
            const pics = cs.imgs.slice(0, 3);
            const pileCls = pics.length === 1 ? " pile--one" : pics.length === 2 ? " pile--two" : "";
            return (
              <article className="case" id={`caso-${cs.id}`} key={cs.id}>
                <div>
                  <h3 className="case__collab">
                    <ClientName client={cs.client} rest={cs.rest} /> <Hand alt="y" /> <Cw />
                  </h3>
                  <div className="case__tags">
                    {cs.tags.map((t) => (
                      <span className="tag" key={t}>{t}</span>
                    ))}
                  </div>
                  <p className="case__quote"><Marked text={cs.quote} /></p>
                  <p className="case__text">{cs.text}</p>
                  <div className="case__foot">
                    <button className="btn btn--line" type="button" onClick={(e) => open(i, e.currentTarget)}>Ver el caso</button>
                    <span className="year">{cs.year}</span>
                  </div>
                </div>
                <button className="case__media" type="button" aria-label={`Ver las láminas de ${cs.client} ${cs.rest}`} onClick={(e) => open(i, e.currentTarget)}>
                  <span className={`pile${pileCls}`}>
                    {pics.map(([src]) => (
                      <img key={src} src={src} alt="" />
                    ))}
                  </span>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      <dialog
        className="dlg"
        ref={dlg}
        aria-labelledby="dlg-title"
        data-lenis-prevent
        onClose={() => {
          lenis()?.start();
          opener.current?.focus({ preventScroll: true });
        }}
        onClick={(e) => {
          if (e.target === dlg.current) dlg.current?.close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
      >
        <div className="dlg__in">
          <div className="dlg__head">
            <div>
              <h2 id="dlg-title">
                <ClientName client={c.client} rest={c.rest} /> <Hand alt="y" /> <Cw />
              </h2>
              <p className="dlg__sub">{c.text}</p>
            </div>
            <button className="x" type="button" aria-label="Cerrar caso" onClick={() => dlg.current?.close()}>×</button>
          </div>
          <div className="strip" ref={strip} tabIndex={0} aria-label="Láminas del caso">
            {c.imgs.map(([src, cap]) => (
              <figure key={src}>
                <img src={src} alt={cap} />
                <figcaption>{cap}</figcaption>
              </figure>
            ))}
          </div>
          <div className="dlg__foot">
            <span className="year">{c.tags.join(" · ")} · {c.year}</span>
            <div className="dlg__nav">
              <button className="btn btn--line" type="button" onClick={() => go(-1)}>Caso anterior</button>
              <button className="btn btn--primary" type="button" onClick={() => go(1)}>Caso siguiente</button>
            </div>
          </div>
        </div>
      </dialog>
    </section>
  );
}
