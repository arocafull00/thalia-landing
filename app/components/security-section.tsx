import { KeyRound, Lock, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { sectionIds } from "../lib/sections";
import { PhoneFrame } from "./ui/device-frame";

type SecurityFeature = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const features: SecurityFeature[] = [
  {
    icon: Lock,
    title: "Datos cifrados en tránsito y en reposo",
    description:
      "La información clínica y financiera viaja y se almacena con cifrado estándar del sector.",
  },
  {
    icon: KeyRound,
    title: "Acceso por roles",
    description:
      "Recepción, profesionales y administración ven solo lo que su función requiere.",
  },
  {
    icon: Shield,
    title: "Copias y trazabilidad",
    description:
      "Respaldo periódico y registro de acciones para auditar cambios sensibles.",
  },
];

function SecurityFeatureRow({
  icon: Icon,
  title,
  description,
}: SecurityFeature) {
  return (
    <div className="flex gap-5">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-warm-gray">
        <Icon className="h-5 w-5 text-soft-black" aria-hidden />
      </div>
      <div>
        <h3 className="text-title text-soft-black">{title}</h3>
        <p className="text-body-lg mt-2 text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export function SecuritySection() {
  return (
    <section
      id={sectionIds.funciones}
      className="bg-surface-container-lowest py-20 lg:py-28"
      aria-labelledby="security-heading"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2 lg:gap-24">
          <PhoneFrame
            src="/images/security-mobile.png"
            alt="Pantalla de configuración de seguridad en Thalia"
            fallbackLabel="Añade security-mobile.png en public/images/"
          />
          <div className="space-y-10">
            <div className="space-y-4">
              <h2
                id="security-heading"
                className="text-headline text-soft-black"
              >
                Seguridad pensada para datos clínicos
              </h2>
              <p className="text-body-lg max-w-xl text-on-surface-variant">
                Tus fichas de pacientes y movimientos económicos merecen controles
                claros. Thalia separa permisos, protege el acceso y mantiene la
                información centralizada.
              </p>
            </div>
            <div className="space-y-8">
              {features.map((feature) => (
                <SecurityFeatureRow key={feature.title} {...feature} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
