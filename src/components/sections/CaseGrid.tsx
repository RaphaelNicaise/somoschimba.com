import { CASES } from "@/data/cases";
import { CaseCard } from "./CaseCard";

export function CaseGrid() {
  return (
    <section
      id="casos"
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: "96px 48px",
      }}
    >
      <div style={{ marginBottom: "64px" }}>
        <div className="ch-section-title" style={{ marginBottom: "24px" }}>
          <h2 className="ch-section-title__text">Portfolio seleccionado</h2>
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
          Proyectos que <span className="ch-mark">hablan en serio</span>.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "48px 36px",
        }}
      >
        {CASES.map((item) => (
          <CaseCard key={item.id} caseStudy={item} />
        ))}
      </div>
    </section>
  );
}
