import { sectionIds } from "../lib/sections";
import { TechnologyShowcasePanel } from "./technology-showcase-panel";

const financeFeatures = [
  { label: "Balance y movimientos al instante", number: "01" },
  { label: "Ingresos y gastos por tratamiento", number: "02" },
  { label: "Acceso desde móvil o navegador", number: "03" },
  { label: "Varios centros cuando la clínica crece", number: "04" },
];

const agendaFeatures = [
  { label: "Agenda semanal por profesional", number: "01" },
  { label: "Cambios visibles para todo el equipo", number: "02" },
  { label: "Ficha del paciente en un toque", number: "03" },
  { label: "Consultar citas entre visitas", number: "04" },
];

export function TechnologySection() {
  return (
    <>
      <TechnologyShowcasePanel
        id={sectionIds.nosotros}
        headingId="technology-heading"
        imageSrc="/images/person-phone.png"
        imageAlt="Gestor de clínica consultando finanzas de Thalia en el móvil"
        heading="Tecnología que se siente invisible"
        description="Thalia se integra en la rutina de la clínica: consultar la agenda entre citas, anotar un cobro al cerrar la visita o revisar stock sin cambiar de herramienta."
        features={financeFeatures}
        imagePosition="center"
        priority
      />
      <TechnologyShowcasePanel
        headingId="technology-agenda-heading"
        imageSrc="/images/person-phone-2.png"
        imageAlt="Profesional revisando la agenda semanal de Thalia en el sofá"
        heading="La agenda que sigue el ritmo de tu clínica"
        description="Planifica la semana, reparte citas entre profesionales y responde a imprevistos desde el móvil, con la misma información que en recepción."
        features={agendaFeatures}
        imagePosition="center-bottom"
      />
    </>
  );
}
