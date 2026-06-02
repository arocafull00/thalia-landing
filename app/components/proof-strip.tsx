import { Reveal } from "./ui/reveal";

type ProofItem = {
  number: string;
  title: string;
  description: string;
};

const proofItems: ProofItem[] = [
  {
    number: "01",
    title: "Agenda del día unificada",
    description:
      "Citas, reprogramaciones y profesional asignado en la misma vista.",
  },
  {
    number: "02",
    title: "Ficha vinculada a la cita",
    description:
      "Historial y datos de contacto del paciente junto a cada visita.",
  },
  {
    number: "03",
    title: "Stock con alertas de mínimo",
    description:
      "Entradas, salidas y avisos cuando un material baja del umbral.",
  },
  {
    number: "04",
    title: "Finanzas en el mismo panel",
    description:
      "Ingresos, gastos y cobros relacionados con la actividad de la clínica.",
  },
];

function ProofStripItem({ number, title, description }: ProofItem) {
  return (
    <div className="flex min-w-0 flex-col gap-3 px-4 py-2 text-left md:px-8 md:py-0">
      <p className="text-label-md tabular-nums text-on-surface-variant">
        {number}
      </p>
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
      className="relative z-10 pb-16"
      aria-labelledby="proof-heading"
      id="soluciones"
    >
      <div className="container-page">
        <h2 id="proof-heading" className="sr-only">
          Qué resuelve Thalia en el día a día
        </h2>
        <Reveal variant="up">
          <div className="border-y border-outline-variant py-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-0">
              {proofItems.map((item, index) => (
                <Reveal
                  key={item.title}
                  delay={index * 80}
                  className={
                    index < proofItems.length - 1
                      ? "md:border-r md:border-outline-variant"
                      : undefined
                  }
                >
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
