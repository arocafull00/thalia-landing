import { sectionIds } from "../lib/sections";
import { PhoneFrame } from "./ui/device-frame";
import { Reveal } from "./ui/reveal";

type TeamFeature = {
  title: string;
  description: string;
};

const features: TeamFeature[] = [
  {
    title: "Agenda compartida al instante",
    description:
      "Citas, cambios y profesional asignado visibles para recepción y para cada profesional sin llamadas de confirmación.",
  },
  {
    title: "Ficha del paciente donde toca",
    description:
      "Historial, tratamientos y notas de la visita accesibles en recepción y en cabina, sin capturas ni hojas sueltas.",
  },
  {
    title: "Cada rol ve lo que necesita",
    description:
      "Recepción, profesionales y administración trabajan sobre los mismos datos con permisos acordes a su función.",
  },
];

function TeamFeatureRow({ title, description }: TeamFeature) {
  return (
    <div className="border-t border-outline-variant py-6 first:border-t-0 first:pt-0">
      <h3 className="text-title text-soft-black">{title}</h3>
      <p className="text-body-lg mt-2 text-on-surface-variant">{description}</p>
    </div>
  );
}

export function TeamSection() {
  return (
    <section
      id={sectionIds.funciones}
      className="split-section border-t border-outline-variant"
      aria-labelledby="team-heading"
    >
      <div className="split-panel split-panel--media flex items-center justify-center bg-surface-container-low py-12 lg:py-0">
        <Reveal variant="left" className="w-full max-w-[320px] px-6 lg:max-w-none lg:px-12">
          <PhoneFrame
            src="/images/team-mobile.png"
            alt="Recepción y profesional consultando la misma agenda en Thalia"
            fallbackLabel="Añade team-mobile.png en public/images/"
          />
        </Reveal>
      </div>
      <div className="split-panel split-panel--content">
        <Reveal variant="right">
          <div className="max-w-xl space-y-4">
            <h2
              id="team-heading"
              className="text-headline min-w-0 text-soft-black"
            >
              Todo el equipo con la misma información
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Recepción, profesionales y quien gestiona la clínica dejan de
              contrastar WhatsApp, Excel y la agenda de papel. Thalia mantiene
              agenda, ficha y movimientos alineados en móvil, tablet y
              navegador.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 max-w-xl">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90} variant="right">
              <TeamFeatureRow {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
