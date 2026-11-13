import { Button } from "@/components/ui/Button";
import { AGENCY_INFO } from "@/data/navigation";

export function Footer() {
  return (
    <footer id="contacto" className="ch-footer" style={{ padding: "140px 48px 64px" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
        <div style={{ maxWidth: "800px", marginBottom: "80px" }}>
          <p className="ch-footer__cta">
            ¿Arrancamos?{" "}
            <span className="ch-mark">Escribinos.</span>
          </p>

          <Button href={`mailto:${AGENCY_INFO.email}`} variant="sticker">
            Hablemos
          </Button>
        </div>

        <div className="ch-footer__row">
          <div style={{ display: "flex", gap: "36px", flexWrap: "wrap", alignItems: "center" }}>
            <a href={`mailto:${AGENCY_INFO.email}`} style={{ fontWeight: 700 }}>
              {AGENCY_INFO.email}
            </a>
            <a href={AGENCY_INFO.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
            <span style={{ color: "rgba(255, 255, 255, 0.7)" }}>{AGENCY_INFO.city}</span>
          </div>

          <div style={{ color: "rgba(255, 255, 255, 0.7)", fontStyle: "italic", fontWeight: 300 }}>
            Chimba — Creative Agency
          </div>
        </div>
      </div>
    </footer>
  );
}
