import React from "react";

export function BrandInterlude() {
  return (
    <section
      className="ch-statement ch-statement--brand"
      style={{
        padding: "140px 48px",
        margin: "64px 0",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="ch-statement__text" style={{ maxWidth: "18ch" }}>
          Cambiar el logo puede{" "}
          <span className="ch-mark ch-mark--inverse">
            cambiar mucho más
          </span>{" "}
          que un logo.
        </p>
      </div>
    </section>
  );
}
