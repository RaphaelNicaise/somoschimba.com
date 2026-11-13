import { HandshakeSticker } from "@/components/ui/HandshakeSticker";

const MARQUEE_ITEMS = [
  "FERROCARGAS DEL SUR",
  "SANTARELLI CONSTRUCCIONES",
  "PSL MUNDIAL",
  "GIROTTI STUDIO",
  "CHIMBA CREATIVE AGENCY",
];

export function CollabMarquee() {
  return (
    <div
      style={{
        width: "100%",
        overflow: "hidden",
        backgroundColor: "var(--surface)",
        borderTop: "1px solid rgba(43, 73, 145, 0.1)",
        borderBottom: "1px solid rgba(43, 73, 145, 0.1)",
        padding: "18px 0",
        position: "relative",
      }}
      aria-hidden="true"
    >
      <div className="ch-marquee-track">
        <div className="ch-marquee-content">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`group-1-${idx}`} className="ch-marquee-item">
              <span>{item}</span>
              <HandshakeSticker size="sm" className="ch-marquee-hand" />
              <span style={{ color: "var(--chimba-blue)" }}>CHIMBA</span>
              <span className="ch-marquee-divider">·</span>
            </span>
          ))}
        </div>

        <div className="ch-marquee-content" aria-hidden="true">
          {MARQUEE_ITEMS.map((item, idx) => (
            <span key={`group-2-${idx}`} className="ch-marquee-item">
              <span>{item}</span>
              <HandshakeSticker size="sm" className="ch-marquee-hand" />
              <span style={{ color: "var(--chimba-blue)" }}>CHIMBA</span>
              <span className="ch-marquee-divider">·</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
