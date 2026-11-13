import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
import { CollabMarquee } from "@/components/sections/CollabMarquee";
import { Statement } from "@/components/sections/Statement";
import { CaseGrid } from "@/components/sections/CaseGrid";
import { BrandInterlude } from "@/components/sections/BrandInterlude";
import { Services } from "@/components/sections/Services";
import { Footer } from "@/components/sections/Footer";

export default function HomePage() {
  return (
    <main>
      <Navbar floating />
      <Hero />
      <CollabMarquee />
      <Statement />

      {/* Recorrido conectivo (.ch-track) característico de Chimba */}
      <div className="ch-track-connector" aria-hidden="true">
        <svg
          width="100%"
          height="80"
          viewBox="0 0 1200 80"
          fill="none"
          preserveAspectRatio="none"
          style={{ overflow: "visible" }}
        >
          <path
            d="M 60,0 V 30 A 50,50 0 0 0 110,80 H 600 A 50,50 0 0 1 650,130"
            stroke="var(--chimba-green)"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.85"
          />
        </svg>
      </div>

      <CaseGrid />
      <BrandInterlude />
      <Services />
      <Footer />
    </main>
  );
}
