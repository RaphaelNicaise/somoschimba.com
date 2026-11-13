import Image from "next/image";
import { HandshakeSticker } from "@/components/ui/HandshakeSticker";

interface StatementProps {
  id?: string;
  clientName?: string;
}

export function Statement({
  id = "manifiesto",
  clientName = "Ferrocargas",
}: StatementProps) {
  return (
    <section id={id} className="ch-statement" style={{ padding: "120px 48px" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <p className="ch-statement__text" style={{ maxWidth: "18ch" }}>
          No hacemos logos para llenar hojas de manual. Diseñamos marcas para que{" "}
          <span className="ch-mark">la gente las elija</span>.
        </p>

        <div className="ch-statement__sign" style={{ marginTop: "64px" }}>
          <span
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "24px",
              letterSpacing: "-0.02em",
              color: "var(--chimba-blue)",
            }}
          >
            {clientName}
          </span>
          <HandshakeSticker size="sm" />
          <Image
            src="/assets/Logos/chimba-wordmark.webp"
            alt="Chimba"
            width={112}
            height={36}
            className="ch-logo"
            unoptimized
            style={{ objectFit: "contain", height: "32px", width: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
