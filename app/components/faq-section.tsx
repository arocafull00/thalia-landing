import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

const faqEntries = [
  {
    question: "¿Cuánto tarda la implantación?",
    answer:
      "La mayoría de clínicas empieza con agenda y pacientes en el primer día. El resto de módulos se activan según tu ritmo, con acompañamiento del equipo.",
  },
  {
    question: "¿Necesito instalar algo en cada ordenador?",
    answer:
      "No. Thalia funciona en el navegador y en dispositivos móviles. Solo necesitas conexión a internet y usuarios configurados por rol.",
  },
  {
    question: "¿Puedo usarlo desde el móvil en recepción?",
    answer:
      "Sí. La misma información está disponible en móvil, tablet y escritorio para que recepción y profesionales trabajen con datos actualizados.",
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
        <Reveal delay={210}>
          <div className="mt-10">
            <Link
              href="#"
              className="link-interactive inline-flex items-center gap-1 text-body-md font-medium text-soft-black underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            >
              Ver todas las preguntas
              <ChevronRight className="h-4 w-4" aria-hidden />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
