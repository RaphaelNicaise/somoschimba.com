"use client";

import { useState } from "react";
import { HEROES } from "./Heroes";

const pad = (n: number) => String(n).padStart(2, "0");

export function HeroSelector({ value, onChange }: { value: number; onChange: (n: number) => void }) {
  const [open, setOpen] = useState(false);
  const total = HEROES.length;
  const go = (n: number) => onChange(((n - 1 + total) % total) + 1);

  return (
    <div className={`hsel${open ? " is-open" : ""}`} role="region" aria-label="Elegir portada">
      {open && (
        <div className="hsel__panel" id="hsel-panel">
          <p className="hsel__title">Portada</p>
          <div className="hsel__grid">
            {HEROES.map((h, i) => (
              <button
                key={h.name}
                type="button"
                className="hsel__num"
                aria-pressed={value === i + 1}
                title={h.name}
                onClick={() => onChange(i + 1)}
              >
                {pad(i + 1)}
              </button>
            ))}
          </div>
        </div>
      )}
      <div className="hsel__bar">
        <button type="button" className="hsel__arrow" aria-label="Portada anterior" onClick={() => go(value - 1)}>‹</button>
        <button type="button" className="hsel__toggle" aria-expanded={open} aria-controls="hsel-panel" onClick={() => setOpen((v) => !v)}>
          <b>{pad(value)}</b>
          <span>{HEROES[value - 1].name}</span>
        </button>
        <button type="button" className="hsel__arrow" aria-label="Portada siguiente" onClick={() => go(value + 1)}>›</button>
      </div>
    </div>
  );
}
