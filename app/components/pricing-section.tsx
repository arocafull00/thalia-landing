import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

export function PricingSection() {
  return (
    <section
      id={sectionIds.precios}
      className="split-section split-section--compact border-t border-outline-variant"
      aria-labelledby="pricing-heading"
    >
      <div className="split-panel split-panel--content">
        <Reveal>
          <h2
            id="pricing-heading"
            className="text-headline min-w-0 text-soft-black"
          >
            Precios adaptados a tu clínica
          </h2>
          <p className="text-body-lg mt-4 max-w-xl text-on-surface-variant">
            Los planes dependen del tamaño del equipo y los módulos que actives.
            En la demo revisamos tu caso y te proponemos la opción adecuada.
          </p>
        </Reveal>
      </div>
      <div className="split-panel split-panel--content items-start lg:items-center">
        <Reveal delay={80}>
          <a
            href={`#${sectionIds.demo}`}
            className="link-interactive text-title font-medium text-soft-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
          >
            Solicitar demo para ver precios →
          </a>
        </Reveal>
      </div>
    </section>
  );
}
