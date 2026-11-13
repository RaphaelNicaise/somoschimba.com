"use client";

import { useEffect, useState } from "react";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(window.scrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="ch-hero" style={{ minHeight: "100vh", justifyContent: "flex-end" }}>
      <div
        className="ch-hero__photo"
        style={{
          backgroundImage: "url(/assets/References/cover-photo-blur.webp)",
          transform: `translateY(${Math.min(scrollY * 0.22, 140)}px) scale(1.05)`,
          willChange: "transform",
        }}
      />
      <div className="ch-hero__body" style={{ width: "100%", maxWidth: "1100px", paddingBottom: "72px" }}>
        <h1 className="ch-hero__title">
          Así
          <br />
          comienza
          <strong>todo</strong>
        </h1>
        <div className="ch-hero__rule" />
        <p className="ch-hero__client">
          Chimba <em>Creative Agency</em>
        </p>
      </div>
    </section>
  );
}
