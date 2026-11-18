"use client";

import { useCallback, useEffect, useState } from "react";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Cases } from "@/components/site/Cases";
import { Clients, Manifesto, Services } from "@/components/site/Sections";
import { Contact } from "@/components/site/Contact";

export function Home() {
  const [brand, setBrandState] = useState("");

  useEffect(() => {
    try { setBrandState(localStorage.getItem("chimba-brand") ?? ""); } catch { /* sin almacenamiento */ }
  }, []);

  const setBrand = useCallback((v: string) => {
    const b = v.slice(0, 28);
    setBrandState(b);
    try { localStorage.setItem("chimba-brand", b); } catch { /* sin almacenamiento */ }
  }, []);

  return (
    <>
      <Nav />
      <main id="inicio">
        <Hero />
        <Clients />
        <Cases />
        <Manifesto />
        <Services />
        <Contact brand={brand} setBrand={setBrand} />
      </main>
    </>
  );
}
