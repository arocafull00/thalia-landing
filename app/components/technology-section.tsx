import { sectionIds } from "../lib/sections";
import { TechnologyShowcasePanel } from "./technology-showcase-panel";

const mobileFeatures = [
  { label: "Ingresos, gastos y balance neto", number: "01" },
  { label: "Pacientes siempre accesibles", number: "02" },
  { label: "Equipo y roles desde cualquier dispositivo", number: "03" },
];

const agendaFeatures = [
  { label: "Inventario vinculado a tratamientos", number: "01" },
  { label: "Campañas y mensajes a pacientes", number: "02" },
  { label: "Estados y profesional asignado", number: "03" },
];

const mobileImages = [
  {
    src: "/images/person-phone-2.png",
    alt: "Responsable de clínica consultando ingresos, gastos y balance neto en Thalia",
  },
  {
    src: "/images/person-phone-4.png",
    alt: "Profesional accediendo a pacientes y accesos rápidos desde Thalia en el móvil",
  },
  {
    src: "/images/person-phone-3.png",
    alt: "Responsable de clínica revisando el equipo y sus especialidades en Thalia",
  },
];

const agendaImages = [
  {
    src: "/images/person-laptop-inventory.png",
    alt: "Profesional revisando el inventario de materiales de la clínica en Thalia",
  },
  {
    src: "/images/person-laptop-marketing.png",
    alt: "Profesional gestionando campañas de marketing de la clínica en Thalia",
  },
  {
    src: "/images/person-phone.png",
    alt: "Profesional revisando citas del día con estados y profesional asignado en Thalia",
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
        heading="Inventario, marketing y agenda conectados"
        description="Controla materiales vinculados a tratamientos, lanza campañas a pacientes y gestiona citas con estados y profesionales asignados desde el mismo sistema."
        features={agendaFeatures}
        imagePosition="center-bottom"
        reversed
      />
    </>
  );
}
