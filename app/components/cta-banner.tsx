import Link from "next/link";
import { sectionIds } from "../lib/sections";
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
              Olvida el papel. Empieza a gestionar tu clínica de verdad.
            </h2>
            <p className="text-body-lg mt-6 max-w-xl text-inverse-on-surface/80">
              Solicita una demo y revisa cómo encaja Thalia con tu agenda y tu
              equipo actual.
            </p>
            <div className="mt-10">
              <Link
                href={`#${sectionIds.demo}`}
                className="pressable inline-flex min-h-11 items-center justify-center gap-2 rounded border border-surface-container-lowest px-8 py-4 text-sm font-medium text-inverse-on-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-on-surface"
              >
                Solicitar demo gratuita →
              </Link>
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
