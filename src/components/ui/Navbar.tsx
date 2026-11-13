"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS, AGENCY_INFO } from "@/data/navigation";

interface NavbarProps {
  floating?: boolean;
}

export function Navbar({ floating = true }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        position: floating ? "fixed" : "relative",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease, padding 0.2s ease",
        backgroundColor: isScrolled ? "rgba(228, 228, 228, 0.92)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(43, 73, 145, 0.12)" : "1px solid transparent",
      }}
    >
      <nav
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: isScrolled ? "14px 32px" : "24px 32px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.2s ease",
        }}
      >
        {/* Brand con óvalo a mano multi-vuelta animado en hover */}
        <Link
          href="/"
          className="ch-logo-scribble-container"
          style={{ textDecoration: "none" }}
          aria-label="Chimba Creative Agency"
        >
          {/* SVG Óvalo con múltiples vueltas que simula el boceto real */}
          <svg
            className="ch-logo-scribble-svg"
            viewBox="0 0 144 64"
            fill="none"
            aria-hidden="true"
          >
            <path
              className="ch-scribble-path"
              d="M 18,34 C 15,16 42,8 76,8 C 114,8 136,18 135,33 C 133,48 102,55 64,54 C 24,53 8,44 11,27 C 14,13 46,6 84,6 C 122,6 140,19 138,35 C 136,51 98,56 52,55 C 15,54 5,42 12,24 C 18,10 52,5 92,6 C 126,7 139,21 134,36 C 128,51 86,55 58,54"
            />
          </svg>

          {isScrolled ? (
            <Image
              src="/assets/Logos/chimba-wordmark.webp"
              alt="Chimba"
              width={105}
              height={32}
              unoptimized
              style={{ objectFit: "contain", height: "26px", width: "auto", display: "block" }}
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "28px",
                letterSpacing: "-0.04em",
                color: "var(--chimba-green)",
                lineHeight: 1,
                display: "inline-block",
              }}
            >
              Chimba
            </span>
          )}
        </Link>

        {/* Links Minimalistas de Centro */}
        <div
          className="nav-desktop-links"
          style={{
            display: "flex",
            gap: "36px",
            alignItems: "center",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 700,
                fontSize: "13px",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                textDecoration: "none",
                color: isScrolled ? "var(--chimba-blue)" : "var(--white)",
                transition: "color 0.15s ease, opacity 0.15s ease",
                opacity: isScrolled ? 0.9 : 0.85,
                position: "relative",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Acciones de la derecha: botón WhatsApp */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <a
            href={AGENCY_INFO.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta-btn"
            style={{
              fontFamily: "var(--font-sans)",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              textDecoration: "none",
              padding: "10px 20px",
              background: isScrolled ? "var(--chimba-blue)" : "var(--chimba-green)",
              color: isScrolled ? "var(--white)" : "var(--chimba-blue)",
              border: "none",
              transition: "transform 0.15s ease, background-color 0.15s ease, color 0.15s ease",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            Hablemos
          </a>

          {/* Botón menú mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Abrir menú"
            className="nav-mobile-toggle"
            style={{
              display: "none",
              background: isScrolled ? "var(--chimba-blue)" : "var(--chimba-green)",
              color: isScrolled ? "var(--white)" : "var(--chimba-blue)",
              border: "none",
              padding: "8px 14px",
              fontWeight: 800,
              fontSize: "12px",
              letterSpacing: "0.08em",
              cursor: "pointer",
              textTransform: "uppercase",
            }}
          >
            {menuOpen ? "CERRAR" : "MENÚ"}
          </button>
        </div>
      </nav>

      {/* Drawer mobile */}
      {menuOpen && (
        <div
          style={{
            background: "var(--chimba-blue)",
            color: "var(--white)",
            padding: "32px 24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--white)",
                fontSize: "22px",
                fontWeight: 800,
                textDecoration: "none",
                letterSpacing: "-0.02em",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ marginTop: "16px", paddingTop: "16px", borderTop: "1px solid rgba(255,255,255,0.2)" }}>
            <a
              href={AGENCY_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "var(--chimba-green)", textDecoration: "none", fontWeight: 700 }}
            >
              WhatsApp: Hablemos
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
