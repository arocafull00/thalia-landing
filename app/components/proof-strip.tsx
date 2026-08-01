import { Reveal } from "./ui/reveal";

type ProofItem = {
  number: string;
  title: string;
  description: string;
};

const proofItems: ProofItem[] = [
  {
    number: "01",
    title: "Agenda y recordatorios",
    description:
      "Citas por día, semana o mes, estados y recordatorios de WhatsApp configurables.",
  },
  {
    number: "02",
    title: "Expediente clínico completo",
    description:
      "Historial, notas, archivos e imágenes de antes, durante y después en cada ficha.",
  },
  {
    number: "03",
    title: "Tratamientos conectados al stock",
    description:
      "Materiales por tratamiento, consumo al completar la cita y alertas de mínimo.",
  },
  {
    number: "04",
    title: "Equipo y negocio bajo control",
    description:
      "Horarios, permisos, ingresos, gastos y balance neto sin cambiar de herramienta.",
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
          Funciones principales del software de gestión clínica Thalia
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
