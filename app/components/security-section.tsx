import { sectionIds } from "../lib/sections";
import { PhoneFrame } from "./ui/device-frame";
import { Reveal } from "./ui/reveal";

type SecurityFeature = {
  title: string;
  description: string;
};

const features: SecurityFeature[] = [
  {
    title: "Datos cifrados en tránsito y en reposo",
    description:
      "La información clínica y financiera viaja y se almacena con cifrado estándar del sector.",
  },
  {
    title: "Acceso por roles",
    description:
      "Recepción, profesionales y administración ven solo lo que su función requiere.",
  },
  {
    title: "Copias y trazabilidad",
    description:
      "Respaldo periódico y registro de acciones para auditar cambios sensibles.",
  },
];

function SecurityFeatureRow({ title, description }: SecurityFeature) {
  return (
    <div className="border-t border-outline-variant py-6 first:border-t-0 first:pt-0">
      <h3 className="text-title text-soft-black">{title}</h3>
      <p className="text-body-lg mt-2 text-on-surface-variant">{description}</p>
    </div>
  );
}

export function SecuritySection() {
  return (
    <section
      id={sectionIds.funciones}
      className="split-section border-t border-outline-variant"
      aria-labelledby="security-heading"
    >
      <div className="split-panel split-panel--media flex items-center justify-center bg-surface-container-low py-12 lg:py-0">
        <Reveal variant="left" className="w-full max-w-[320px] px-6 lg:max-w-none lg:px-12">
          <PhoneFrame
            src="/images/security-mobile.png"
            alt="Pantalla de configuración de seguridad en Thalia"
            fallbackLabel="Añade security-mobile.png en public/images/"
          />
        </Reveal>
      </div>
      <div className="split-panel split-panel--content">
        <Reveal variant="right">
          <div className="max-w-xl space-y-4">
            <h2
              id="security-heading"
              className="text-headline min-w-0 text-soft-black"
            >
              Seguridad pensada para datos clínicos
            </h2>
            <p className="text-body-lg text-on-surface-variant">
              Tus fichas de pacientes y movimientos económicos merecen controles
              claros. Thalia separa permisos, protege el acceso y mantiene la
              información centralizada.
            </p>
          </div>
        </Reveal>
        <div className="mt-10 max-w-xl">
          {features.map((feature, index) => (
            <Reveal key={feature.title} delay={index * 90} variant="right">
              <SecurityFeatureRow {...feature} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
