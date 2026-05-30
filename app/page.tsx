import { CtaBanner } from "./components/cta-banner";
import { FaqSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { PricingSection } from "./components/pricing-section";
import { ProofStrip } from "./components/proof-strip";
import { SecuritySection } from "./components/security-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TechnologySection } from "./components/technology-section";
import { WaitlistSection } from "./components/waitlist-section";

export default function Home() {
  return (
    <>
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[var(--z-dialog)] focus:rounded-lg focus:bg-soft-black focus:px-4 focus:py-2 focus:text-on-primary"
      >
        Saltar al contenido
      </a>
      <SiteHeader />
      <main id="contenido-principal">
        <HeroSection />
        <ProofStrip />
        <SecuritySection />
        <TechnologySection />
        <PricingSection />
        <FaqSection />
        <CtaBanner />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </>
  );
}
