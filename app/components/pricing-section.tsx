import { sectionIds } from "../lib/sections";
import { OpenAccessModalLink } from "./open-access-modal-button";
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
            Un plan ajustado a tu clínica
          </h2>
          <p className="text-body-lg mt-4 max-w-xl text-on-surface-variant">
            Cada clínica parte de un equipo, unos horarios y una operativa
            distintos. En la demo revisamos qué necesitas y te explicamos la
            opción adecuada sin añadir módulos que no vayas a usar.
          </p>
        </Reveal>
      </div>
      <div className="split-panel split-panel--content items-start lg:items-center">
        <Reveal delay={80}>
          <OpenAccessModalLink className="link-interactive text-title font-medium text-soft-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black">
            Revisar mi caso y ver precios →
          </OpenAccessModalLink>
        </Reveal>
      </div>
    </section>
  );
}
