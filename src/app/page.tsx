import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/sections/Hero";
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
      <Statement />
      <CaseGrid />
      <BrandInterlude />
      <Services />
      <Footer />
    </main>
  );
}
