import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

const faqEntries = [
  {
    question: "¿Para qué tipo de clínicas está pensado Thalia?",
    answer:
      "Está diseñado para clínicas estéticas y dentales que necesitan coordinar agenda, pacientes, tratamientos, equipo, inventario y finanzas desde un mismo sistema.",
  },
  {
    question: "¿Qué incluye el expediente de cada paciente?",
    answer:
      "Reúne sus datos, historial de citas y tratamientos, notas clínicas, archivos y una galería de imágenes con fases de antes, durante y después.",
  },
  {
    question: "¿Cómo se relacionan los tratamientos y el inventario?",
    answer:
      "Puedes definir la duración, el precio y los materiales habituales de cada tratamiento. Al completar una cita, Thalia descuenta esos materiales del stock y avisa si no hay suficiente.",
  },
  {
    question: "¿Thalia envía recordatorios de citas?",
    answer:
      "Sí. La clínica puede configurar recordatorios automáticos por WhatsApp, elegir cuándo enviarlos y consultar o realizar un envío manual desde el detalle de la cita.",
  },
  {
    question: "¿Puedo usarlo en varios dispositivos o clínicas?",
    answer:
      "Sí. Thalia funciona en el navegador y puede instalarse como aplicación en móvil, tablet y ordenador. Los usuarios con acceso a varias clínicas pueden cambiar entre ellas manteniendo separados sus datos y permisos.",
  },
];

export function FaqSection() {
  return (
    <section
      id={sectionIds.faq}
      className="border-t border-outline-variant py-24 lg:py-32"
      aria-labelledby="faq-heading"
    >
      <div className="container-page">
        <Reveal>
          <h2
            id="faq-heading"
            className="text-headline min-w-0 text-soft-black"
          >
            Preguntas frecuentes
          </h2>
        </Reveal>
        <div className="mt-12 space-y-0">
          {faqEntries.map((entry, index) => (
            <Reveal key={entry.question} delay={index * 70}>
              <article className="grid grid-cols-1 gap-4 border-t border-outline-variant py-8 lg:grid-cols-[5fr_7fr] lg:gap-12">
                <h3 className="text-title text-soft-black">{entry.question}</h3>
                <p className="text-body-lg text-on-surface-variant">
                  {entry.answer}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
