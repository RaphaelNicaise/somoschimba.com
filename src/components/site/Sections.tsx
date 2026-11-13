"use client";

import { useState } from "react";
import { CASES, SERVICES } from "@/data/site";
import { Hand } from "@/components/bits";

export function Clients() {
  return (
    <section className="clients" aria-label="Clientes">
      <div className="wrap clients__in">
        <p className="clients__label">Trabajamos con</p>
        <ul>
          <li>Ferrocargas <em>del Sur</em></li>
          <li>PSL <em>Logistics</em></li>
          <li>Santarelli <em>Construcciones</em></li>
          <li>Girotti</li>
        </ul>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="manifesto" aria-label="Cómo pensamos">
      <div className="wrap">
        <p>
          Cambiar el logo puede cambiar <span className="mark mark--inverse">mucho más</span> que un logo.
        </p>
        <div className="manifesto__sign">
          <Hand />
          Así trabajamos con cada marca
        </div>
      </div>
      <div className="manifesto__leaf" aria-hidden="true" />
    </section>
  );
}

export function Services() {
  const [open, setOpen] = useState<Set<number>>(new Set([0]));
  const toggle = (i: number) =>
    setOpen((s) => {
      const n = new Set(s);
      if (n.has(i)) n.delete(i);
      else n.add(i);
      return n;
    });

  return (
    <section className="section" id="que-hacemos" aria-labelledby="svc-title">
      <div className="wrap">
        <div className="stitle">
          <h2 id="svc-title">Qué hacemos</h2>
        </div>
        <ul className="svc-list">
          {SERVICES.map((s, i) => {
            const isOpen = open.has(i);
            return (
              <li className={`svc${isOpen ? " is-open" : ""}`} key={s.name}>
                <button className="svc__btn" type="button" aria-expanded={isOpen} aria-controls={`svc-${i}`} id={`svc-b-${i}`} onClick={() => toggle(i)}>
                  <span className="svc__name"><span>{s.name}</span></span>
                  <span className="svc__icon" aria-hidden="true" />
                </button>
                <div className="svc__body" id={`svc-${i}`} role="region" aria-labelledby={`svc-b-${i}`} inert={!isOpen}>
                  <div className="svc__inner">
                    <div className="svc__cols">
                      <div>
                        <p className="svc__tagline">{s.tagline}</p>
                        {s.cases.length > 0 && (
                          <p className="svc__case">
                            Miralo en{" "}
                            {s.cases.map((id, j) => (
                              <span key={id}>
                                {j > 0 && " y "}
                                <a href={`#caso-${id}`}>{CASES.find((c) => c.id === id)?.client}</a>
                              </span>
                            ))}
                            .
                          </p>
                        )}
                      </div>
                      <ul className="svc__items">
                        {s.items.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
