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
      setIsScrolled(window.scrollY > 80);
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
        transition: "background-color 0.25s ease, backdrop-filter 0.25s ease, border-color 0.25s ease",
        backgroundColor: isScrolled ? "rgba(228, 228, 228, 0.94)" : "transparent",
        backdropFilter: isScrolled ? "blur(12px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(43, 73, 145, 0.12)" : "1px solid transparent",
      }}
    >
      <nav
        className={`ch-nav ${!isScrolled ? "ch-nav--photo" : ""}`}
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Link
          href="/"
          className="ch-nav__brand"
          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
        >
          {isScrolled ? (
            <Image
              src="/assets/Logos/chimba-wordmark.webp"
              alt="Chimba"
              width={112}
              height={36}
              unoptimized
              style={{ objectFit: "contain", height: "30px", width: "auto" }}
            />
          ) : (
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontWeight: 800,
                fontSize: "30px",
                letterSpacing: "-0.04em",
                color: "var(--chimba-green)",
                lineHeight: 1,
              }}
            >
              Chimba
            </span>
          )}
        </Link>

        {/* Desktop Links */}
        <div
          style={{
            display: "flex",
            gap: "32px",
            alignItems: "center",
          }}
          className="nav-desktop-links"
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
                transition: "opacity 0.15s ease",
                opacity: 0.9,
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span
            className="ch-nav__meta"
            style={{
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "14px",
              color: isScrolled ? "var(--ink-muted)" : "rgba(255, 255, 255, 0.75)",
            }}
          >
            {AGENCY_INFO.year}
          </span>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
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

      {/* Mobile Drawer */}
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
                fontSize: "24px",
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
              href={`mailto:${AGENCY_INFO.email}`}
              style={{ color: "var(--chimba-green)", textDecoration: "none", fontWeight: 700 }}
            >
              {AGENCY_INFO.email}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
