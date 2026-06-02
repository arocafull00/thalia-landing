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
