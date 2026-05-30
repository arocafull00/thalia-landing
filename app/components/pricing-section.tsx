import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

export function PricingSection() {
  return (
    <section
      id={sectionIds.precios}
      className="py-20 lg:py-24"
      aria-labelledby="pricing-heading"
    >
      <div className="container-page max-w-2xl text-center">
        <Reveal>
          <h2 id="pricing-heading" className="text-headline text-soft-black">
            Precios adaptados a tu clínica
          </h2>
          <p className="text-body-lg mt-4 text-on-surface-variant">
            Los planes dependen del tamaño del equipo y los módulos que actives.
            En la demo revisamos tu caso y te proponemos la opción adecuada.
          </p>
          <p className="text-body-md mt-6 text-on-surface-variant">
            <a
              href={`#${sectionIds.demo}`}
              className="font-medium text-soft-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            >
              Solicitar demo para ver precios
            </a>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
