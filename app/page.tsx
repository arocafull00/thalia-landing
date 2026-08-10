import { AccessRequestProvider } from "./components/access-request-provider";
import { CtaBanner } from "./components/cta-banner";
import { FaqSection } from "./components/faq-section";
import { HeroSection } from "./components/hero-section";
import { PricingSection } from "./components/pricing-section";
import { ProofStrip } from "./components/proof-strip";
import { TeamSection } from "./components/team-section";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import { TechnologySection } from "./components/technology-section";
import { WaitlistSection } from "./components/waitlist-section";
import { faqEntries } from "./lib/faq-entries";
import { getSiteUrl } from "./lib/site-config";

const siteUrl = getSiteUrl();

const softwareApplicationJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Thalia",
  url: siteUrl,
  description:
    "Software de gestión para clínicas estéticas y dentales que conecta agenda, expedientes clínicos, tratamientos, inventario, equipo, finanzas y recordatorios.",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cualquier sistema con navegador web",
  inLanguage: "es",
  audience: {
    "@type": "Audience",
    audienceType: "Clínicas estéticas y dentales en España",
  },
  featureList: [
    "Agenda compartida y gestión de citas",
    "Expedientes clínicos con archivos e imágenes",
    "Tratamientos vinculados al inventario",
    "Gestión de personal, roles y horarios",
    "Ingresos, gastos y balance neto",
    "Recordatorios de citas por WhatsApp",
    "Aplicación web instalable",
    "Gestión multi-clínica",
  ],
};

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqEntries.map((entry) => ({
    "@type": "Question",
    name: entry.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: entry.answer,
    },
  })),
};

function serializeJsonLd(data: Record<string, unknown>) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export default function Home() {
  return (
    <AccessRequestProvider>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(softwareApplicationJsonLd),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: serializeJsonLd(faqPageJsonLd),
        }}
      />
      <SiteHeader />
      <main id="contenido-principal">
        <HeroSection />
        <ProofStrip />
        <TeamSection />
        <TechnologySection />
        <PricingSection />
        <FaqSection />
        <CtaBanner />
        <WaitlistSection />
      </main>
      <SiteFooter />
    </AccessRequestProvider>
  );
}
