import { accessRequestValueCopy } from "../lib/access-request-copy";
import { sectionIds } from "../lib/sections";
import { AccessRequestForm } from "./access-request-form";
import { Reveal } from "./ui/reveal";

export function WaitlistSection() {
  return (
    <section
      id={sectionIds.waitlist}
      className="border-t border-outline-variant py-24 lg:py-28"
      aria-labelledby="waitlist-heading"
    >
      <div className="container-page max-w-2xl">
        <Reveal>
          <h2
            id="waitlist-heading"
            className="text-headline min-w-0 text-soft-black"
          >
            Sé el primero en probar Thalia
          </h2>
          <p className="text-body-lg mt-4 text-on-surface-variant">
            {accessRequestValueCopy}
          </p>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-8">
            <AccessRequestForm variant="inline" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
