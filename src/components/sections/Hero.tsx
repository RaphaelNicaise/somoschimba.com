import React from "react";

export function Hero() {
  return (
    <section className="ch-hero" style={{ minHeight: "100vh", justifyContent: "flex-end" }}>
      <div
        className="ch-hero__photo"
        style={{ backgroundImage: "url(/assets/References/cover-photo-blur.webp)" }}
      />
      <div className="ch-hero__body" style={{ width: "100%", maxWidth: "1100px", paddingBottom: "64px" }}>
        <h1 className="ch-hero__title">
          Así
          <br />
          comienza
          <strong>todo</strong>
        </h1>
        <div className="ch-hero__rule" />
        <p className="ch-hero__client">
          Santarelli <em>Construcciones</em>
        </p>
      </div>
    </section>
  );
}
