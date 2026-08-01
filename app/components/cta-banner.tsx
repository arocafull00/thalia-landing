import { accessRequestValueCopy } from "../lib/access-request-copy";
import { sectionIds } from "../lib/sections";
import { OpenAccessModalButton } from "./open-access-modal-button";
import { Reveal } from "./ui/reveal";

export function CtaBanner() {
  return (
    <section
      id={sectionIds.demo}
      className="bg-inverse-surface py-20 lg:py-28"
      aria-labelledby="cta-heading"
    >
      <div className="container-page">
        <Reveal variant="up">
          <div className="max-w-3xl">
            <h2
              id="cta-heading"
              className="text-display min-w-0 text-inverse-on-surface"
            >
              Comprueba cómo encaja Thalia en tu clínica
            </h2>
            <p className="text-body-lg mt-6 max-w-xl text-inverse-on-surface/80">
              Recorremos contigo la agenda, los expedientes, el inventario y la
              gestión del equipo sobre una operativa como la tuya. {accessRequestValueCopy}
            </p>
            <div className="mt-10">
              <OpenAccessModalButton
                variant="inverse"
                className="min-h-11 px-8 py-4"
              >
                Ver Thalia en una demo →
              </OpenAccessModalButton>
              <p className="text-caption mt-3 text-inverse-on-surface/70">
                Sin compromiso
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
