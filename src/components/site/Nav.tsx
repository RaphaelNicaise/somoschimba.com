"use client";

import { useEffect, useState } from "react";
import { A } from "@/data/site";
import { Cw } from "@/components/bits";

const LINKS = [
  { href: "#casos", label: "Casos" },
  { href: "#que-hacemos", label: "Qué hacemos" },
  { href: "#contacto", label: "Contacto" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8);
      let current: string | null = null;
      for (const l of LINKS) {
        const s = document.querySelector(l.href);
        if (s && s.getBoundingClientRect().top < window.innerHeight * 0.4) current = l.href;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " is-scrolled" : ""}`}>
      <div className="wrap nav__in">
        <a className="brand" href="#inicio" aria-label="Chimba, inicio">
          <Cw>
            <img src={A.wordmark} alt="Chimba" />
            <span aria-hidden="true">Chimba</span>
          </Cw>
        </a>
        <nav aria-label="Principal">
          <ul className="nav__links">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a href={l.href} aria-current={active === l.href ? "true" : undefined}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <span className="nav__meta" aria-hidden="true">2025/2026</span>
        <a className="btn btn--sticker" href="#contacto">
          <img src={A.hand} alt="" />
          Hablemos
        </a>
      </div>
    </header>
  );
}
