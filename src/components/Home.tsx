"use client";

import { useCallback, useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Cases } from "@/components/site/Cases";
import { Clients, Manifesto, Services } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";
import { HEROES } from "@/components/heroes/Heroes";
import { HeroSelector } from "@/components/heroes/HeroSelector";

const read = (k: string) => {
  try { return localStorage.getItem(k) ?? ""; } catch { return ""; }
};
const write = (k: string, v: string) => {
  try { localStorage.setItem(k, v); } catch { /* sin almacenamiento */ }
};

export function Home() {
  const [brand, setBrandState] = useState("");
  const [hero, setHero] = useState(1);

  // Portada inicial: ?hero=N en la URL, si no la última elegida, si no la 1.
  useEffect(() => {
    const q = Number(new URLSearchParams(window.location.search).get("hero"));
    const saved = Number(read("chimba-hero"));
    const n = q >= 1 && q <= HEROES.length ? q : saved >= 1 && saved <= HEROES.length ? saved : 1;
    setHero(n);
    setBrandState(read("chimba-brand"));
  }, []);

  const setBrand = useCallback((v: string) => {
    const b = v.slice(0, 28);
    setBrandState(b);
    write("chimba-brand", b);
  }, []);

  const changeHero = useCallback((n: number) => {
    setHero(n);
    write("chimba-hero", String(n));
    const url = new URL(window.location.href);
    if (n === 1) url.searchParams.delete("hero");
    else url.searchParams.set("hero", String(n));
    window.history.replaceState(null, "", url);
    const lenis = (window as unknown as { lenis?: { scrollTo: (t: number) => void } }).lenis;
    if (window.scrollY > 40) {
      if (lenis) lenis.scrollTo(0);
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, []);

  const Hero = HEROES[hero - 1].Component;

  return (
    <>
      <Nav />
      <main id="inicio">
        <Hero key={hero} brand={brand} setBrand={setBrand} />
        <Clients />
        <Cases />
        <Manifesto />
        <Services />
        <Contact brand={brand} setBrand={setBrand} />
      </main>
      <HeroSelector value={hero} onChange={changeHero} />
    </>
  );
}
