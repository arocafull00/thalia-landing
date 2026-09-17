import type { PrivacySection } from "../../lib/privacy-copy";
import { LegalMarkdown } from "./legal-markdown";

type LegalSectionProps = {
  section: PrivacySection;
};

export function LegalSection({ section }: LegalSectionProps) {
  return (
    <section
      id={section.id}
      className="scroll-mt-24 border-t border-outline-variant py-10 first:border-t-0 first:pt-0 sm:py-12"
    >
      <div className="mb-6 flex items-baseline gap-4">
        <span className="text-caption font-semibold tabular-nums text-secondary">
          {String(section.number).padStart(2, "0")}
        </span>
        <h2 className="text-title text-soft-black">{section.title}</h2>
      </div>
      <LegalMarkdown body={section.body} />
    </section>
  );
}
