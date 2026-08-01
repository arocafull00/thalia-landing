import { sectionIds } from "../lib/sections";
import { TechnologyShowcasePanel } from "./technology-showcase-panel";

const mobileFeatures = [
  { label: "Ingresos, gastos y balance neto", number: "01" },
  { label: "Pacientes siempre accesibles", number: "02" },
  { label: "Equipo y roles desde cualquier dispositivo", number: "03" },
];

const agendaFeatures = [
  { label: "Vistas diaria, semanal y mensual", number: "01" },
  { label: "Próximas citas y accesos rápidos", number: "02" },
  { label: "Estados y profesional asignado", number: "03" },
];

const mobileImages = [
  {
    src: "/images/person-phone-2.png",
    alt: "Responsable de clínica consultando ingresos, gastos y balance neto en Thalia",
  },
  {
    src: "/images/person-phone-3.png",
    alt: "Profesional consultando el listado de pacientes de Thalia en el móvil",
  },
  {
    src: "/images/person-phone-4.png",
    alt: "Responsable de clínica revisando el equipo y sus especialidades en Thalia",
  },
];

const agendaImages = [
  {
    src: "/images/person-phone.png",
    alt: "Profesional revisando la agenda semanal por profesional de Thalia en el móvil",
  },
  {
    src: "/images/person-phone-5.png",
    alt: "Profesional consultando las próximas citas y accesos rápidos de Thalia",
  },
  {
    src: "/images/person-phone-6.png",
    alt: "Profesional revisando estados y profesionales asignados a las citas en Thalia",
  },
];

export function TechnologySection() {
  return (
    <>
      <TechnologyShowcasePanel
        id={sectionIds.aplicacion}
        headingId="technology-heading"
        images={mobileImages}
        heading="Toda la clínica, también en el móvil"
        description="Thalia funciona en el navegador y puede instalarse como una aplicación. Consulta finanzas, pacientes y equipo desde recepción, la cabina o fuera de la clínica sin cambiar de sistema."
        features={mobileFeatures}
        imagePosition="center"
        priority
      />
      <TechnologyShowcasePanel
        headingId="technology-agenda-heading"
        images={agendaImages}
        heading="Una agenda que entiende horarios y profesionales"
        description="Planifica por día, semana o mes, filtra la carga de cada profesional y responde a cambios desde el móvil. Cada cita conserva su estado, tratamiento y profesional asignado; los recordatorios pueden programarse por WhatsApp."
        features={agendaFeatures}
        imagePosition="center-bottom"
        reversed
      />
    </>
  );
}
