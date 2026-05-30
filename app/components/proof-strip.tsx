import { Calendar, ClipboardList, Package, Wallet } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Reveal } from "./ui/reveal";

type ProofItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const proofItems: ProofItem[] = [
  {
    icon: Calendar,
    title: "Agenda del día unificada",
    description:
      "Citas, reprogramaciones y profesional asignado en la misma vista.",
  },
  {
    icon: ClipboardList,
    title: "Ficha vinculada a la cita",
    description:
      "Historial y datos de contacto del paciente junto a cada visita.",
  },
  {
    icon: Package,
    title: "Stock con alertas de mínimo",
    description:
      "Entradas, salidas y avisos cuando un material baja del umbral.",
  },
  {
    icon: Wallet,
    title: "Finanzas en el mismo panel",
    description:
      "Ingresos, gastos y cobros relacionados con la actividad de la clínica.",
  },
];

function ProofStripItem({ icon: Icon, title, description }: ProofItem) {
  return (
    <div className="flex flex-col gap-3 px-2 py-4 text-center md:px-6 md:py-0 md:text-left">
      <div className="proof-icon mx-auto flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-container text-soft-black md:mx-0">
        <Icon className="h-5 w-5" aria-hidden />
      </div>
      <div>
        <h3 className="text-title text-soft-black">{title}</h3>
        <p className="text-body-md mt-1 text-on-surface-variant">{description}</p>
      </div>
    </div>
  );
}

export function ProofStrip() {
  return (
    <section
      className="relative z-10 -mt-6 pb-16"
      aria-labelledby="proof-heading"
      id="soluciones"
    >
      <div className="container-page">
        <h2 id="proof-heading" className="sr-only">
          Qué resuelve Thalia en el día a día
        </h2>
        <Reveal variant="up">
          <div className="card-lift rounded-2xl border border-outline-variant bg-surface-container-lowest p-6 md:p-10 shadow-card">
            <div className="grid grid-cols-1 gap-8 divide-y divide-outline-variant md:grid-cols-4 md:gap-4 md:divide-x md:divide-y-0">
              {proofItems.map((item, index) => (
                <Reveal key={item.title} delay={index * 80}>
                  <ProofStripItem {...item} />
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
