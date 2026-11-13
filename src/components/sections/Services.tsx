import { SERVICES } from "@/data/services";

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
          marginBottom: "64px",
        }}
      >
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(290px, 1fr))",
          gap: "36px",
        }}
      >
        {SERVICES.map((s, index) => {
          // Alternar entre hoja azul y hoja verde, y esquinas opuestas de la hoja
          const isGreen = index % 2 === 1;
          const leafBorder = isGreen ? "2px solid var(--chimba-green)" : "2px solid var(--chimba-blue)";
          const leafRadius = isGreen ? "45% 0 45% 0" : "0 45% 0 45%";
          const dotColor = isGreen ? "var(--chimba-green)" : "var(--chimba-blue)";

          return (
            <div
              key={s.id}
              className="ch-leaf-card"
              style={{
                background: "var(--white)",
                border: leafBorder,
                borderRadius: leafRadius,
                padding: "52px 40px",
                boxShadow: "var(--shadow-card)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "380px",
                position: "relative",
                transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "14px",
                    fontWeight: 800,
                    letterSpacing: "0.14em",
                    color: isGreen ? "var(--chimba-blue)" : "var(--chimba-blue)",
                    opacity: 0.85,
                  }}
                >
                  {s.number}
                </span>

                <h3
                  style={{
                    fontSize: "26px",
                    fontWeight: 800,
                    color: "var(--chimba-blue)",
                    margin: "16px 0 12px",
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
                    margin: "0 0 24px",
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
                  borderTop: "1px solid rgba(43, 73, 145, 0.08)",
                  paddingTop: "20px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "9px",
                }}
              >
                {s.details.map((item) => (
                  <li
                    key={item}
                    style={{
                      fontSize: "13px",
                      fontWeight: 500,
                      color: "var(--ink-muted)",
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                    }}
                  >
                    <span
                      style={{
                        width: "6px",
                        height: "6px",
                        backgroundColor: dotColor,
                        display: "inline-block",
                        flexShrink: 0,
                      }}
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
