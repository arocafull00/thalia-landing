import { faqEntries } from "../lib/faq-entries";
import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

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
