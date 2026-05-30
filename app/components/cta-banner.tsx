import { sectionIds } from "../lib/sections";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";

export function CtaBanner() {
  return (
    <section
      id={sectionIds.demo}
      className="py-16 lg:py-20"
      aria-labelledby="cta-heading"
    >
      <div className="container-page">
        <Reveal variant="scale">
          <div className="flex flex-col items-start justify-between gap-8 rounded-2xl bg-inverse-surface px-8 py-10 md:flex-row md:items-center md:px-12 md:py-12">
          <div className="max-w-xl">
            <h2
              id="cta-heading"
              className="text-headline text-inverse-on-surface"
            >
              Olvida el papel. Empieza a gestionar tu clínica de verdad.
            </h2>
            <p className="text-body-lg mt-3 text-inverse-on-surface/80">
              Solicita una demo y revisa cómo encaja Thalia con tu agenda y tu
              equipo actual.
            </p>
          </div>
          <div className="flex shrink-0 flex-col items-start gap-2">
            <Button href={`#${sectionIds.demo}`} variant="inverse">
              Solicitar demo gratuita
            </Button>
            <p className="text-caption text-inverse-on-surface/70">
              Sin compromiso
            </p>
          </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
