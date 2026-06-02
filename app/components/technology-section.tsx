import { sectionIds } from "../lib/sections";
import { TechnologyShowcasePanel } from "./technology-showcase-panel";

const financeFeatures = [
  { label: "Balance y movimientos al instante", number: "01" },
  { label: "Ingresos y gastos por tratamiento", number: "02" },
  { label: "Acceso desde móvil o navegador", number: "03" },
];

const agendaFeatures = [
  { label: "Agenda semanal por profesional", number: "01" },
  { label: "Cambios visibles para todo el equipo", number: "02" },
  { label: "Ficha del paciente en un toque", number: "03" },
];

const financeImages = [
  {
    src: "/images/person-phone.png",
    alt: "Gestor de clínica consultando el balance y movimientos de Thalia en el móvil",
  },
  {
    src: "/images/person-phone-2.png",
    alt: "Gestor de clínica revisando ingresos y gastos por tratamiento en Thalia",
  },
  {
    src: "/images/person-phone-3.png",
    alt: "Gestor de clínica accediendo a Thalia desde el móvil",
  },
];

const agendaImages = [
  {
    src: "/images/person-phone-4.png",
    alt: "Profesional revisando la agenda semanal de Thalia en el móvil",
  },
  {
    src: "/images/person-phone-5.png",
    alt: "Profesional consultando cambios de agenda visibles para todo el equipo",
  },
  {
    src: "/images/person-phone-6.png",
    alt: "Profesional abriendo la ficha del paciente en Thalia",
  },
];

export function TechnologySection() {
  return (
    <>
      <TechnologyShowcasePanel
        id={sectionIds.nosotros}
        headingId="technology-heading"
        images={financeImages}
        heading="Tecnología que se siente invisible"
        description="Thalia se integra en la rutina de la clínica: consultar la agenda entre citas, anotar un cobro al cerrar la visita o revisar stock sin cambiar de herramienta."
        features={financeFeatures}
        imagePosition="center"
        priority
      />
      <TechnologyShowcasePanel
        headingId="technology-agenda-heading"
        images={agendaImages}
        heading="La agenda que sigue el ritmo de tu clínica"
        description="Planifica la semana, reparte citas entre profesionales y responde a imprevistos desde el móvil, con la misma información que en recepción."
        features={agendaFeatures}
        imagePosition="center-bottom"
        reversed
      />
    </>
  );
}
