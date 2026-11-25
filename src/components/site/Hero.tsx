"use client";

import { useEffect, useState } from "react";
import { A } from "@/data/site";
import { Cw } from "@/components/bits";

/** Portada: el logo al centro con el óvalo que se dibuja al cargar. */
export function Hero() {
  const [drawn, setDrawn] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDrawn(true), 250);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hx o6" aria-labelledby="hero-title">
      <div className="wrap hx__body">
        <div className="logo">
          <Cw drawn={drawn}>
            <img className="wm" src={A.wordmark} alt="Chimba" width={1026} height={266} fetchPriority="high" />
            <span className="wm-txt" aria-hidden="true">Chimba</span>
          </Cw>
          <p className="ag">CREATIVE AGENCY</p>
        </div>
        <h1 className="sub" id="hero-title">
          Diseñamos marcas que la gente <span className="mark mark--it">elige.</span>
        </h1>
        <p className="hx__lead">
          Agencia creativa en Argentina: identidad de marca, desarrollo web, redes, Meta Ads y dirección de arte.
        </p>
        <div className="ctas">
          <a className="btn btn--primary" href="#casos">Ver casos</a>
          <a className="btn btn--line" href="#contacto">Hablemos</a>
        </div>
      </div>
    </section>
  );
}
