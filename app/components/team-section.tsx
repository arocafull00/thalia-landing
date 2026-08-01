import { sectionIds } from "../lib/sections";
import { PhoneFrame } from "./ui/device-frame";
import { Reveal } from "./ui/reveal";

type TeamFeature = {
  title: string;
  description: string;
};

const features: TeamFeature[] = [
  {
    title: "Agenda por profesional",
    description:
      "Consulta el día, la semana o el mes, filtra por profesional y detecta huecos sin cruzar varias agendas.",
  },
  {
    title: "Roles y horarios claros",
    description:
      "Configura accesos para administración, recepción, profesionales y auxiliares, junto al horario de la clínica.",
  },
  {
    title: "Varias clínicas, datos separados",
    description:
      "Quien trabaja en más de una clínica puede cambiar de contexto sin mezclar pacientes, permisos ni actividad.",
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
            alt="Listado del personal de la clínica con sus especialidades en Thalia"
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
              Recepción, profesionales y dirección, coordinados
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Cada persona trabaja sobre la misma agenda, ficha del paciente y
              estado de la cita. Thalia adapta el acceso según el rol y mantiene
              la información separada por clínica.
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
