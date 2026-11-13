import { SERVICES } from "@/data/services";
import Image from "next/image";

export function Services() {
  return (
    <section
      id="servicios"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 48px 128px",
        position: "relative",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          marginBottom: "64px",
          flexWrap: "wrap",
          gap: "24px",
        }}
      >
        <div>
          <div className="ch-section-title" style={{ marginBottom: "20px" }}>
            <h2 className="ch-section-title__text">Capacidades y oficio</h2>
          </div>
          <p
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: "-0.03em",
              color: "var(--chimba-blue)",
              margin: 0,
              maxWidth: "16ch",
            }}
          >
            Así trabajamos en <span className="ch-mark">Chimba</span>.
          </p>
        </div>

        {/* Trazo orgánico de la hoja característico de Chimba */}
        <div style={{ opacity: 0.85 }}>
          <Image
            src="/assets/Shapes/leaf-outline-blue.webp"
            alt=""
            width={110}
            height={110}
            unoptimized
            aria-hidden="true"
          />
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "24px",
        }}
      >
        {SERVICES.map((s) => (
          <div
            key={s.id}
            style={{
              background: "var(--white)",
              padding: "48px 36px",
              boxShadow: "var(--shadow-card)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "13px",
                  fontWeight: 800,
                  letterSpacing: "0.14em",
                  color: "var(--chimba-blue)",
                }}
              >
                {s.number}
              </span>
              <h3
                style={{
                  fontSize: "26px",
                  fontWeight: 800,
                  color: "var(--chimba-blue)",
                  margin: "18px 0 12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {s.name}
              </h3>
              <p
                style={{
                  fontSize: "15px",
                  color: "var(--ink)",
                  lineHeight: 1.45,
                  margin: "0 0 28px",
                }}
              >
                {s.tagline}
              </p>
            </div>

            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                borderTop: "1px solid var(--surface)",
                paddingTop: "24px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              {s.details.map((item) => (
                <li
                  key={item}
                  style={{
                    fontSize: "14px",
                    fontWeight: 500,
                    color: "var(--ink-muted)",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <span
                    style={{
                      width: "5px",
                      height: "5px",
                      backgroundColor: "var(--chimba-blue)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
