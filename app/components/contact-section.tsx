import { contactCopy } from "../lib/contact-copy";
import { sectionIds } from "../lib/sections";
import { ContactChannelItem } from "./contact-channel-item";
import { Reveal } from "./ui/reveal";

export function ContactSection() {
  return (
    <section
      id={sectionIds.contact}
      className="border-t border-outline-variant py-24 lg:py-28"
      aria-labelledby="contact-heading"
    >
      <div className="container-page">
        <Reveal>
          <div className="max-w-2xl">
            <h2
              id="contact-heading"
              className="text-headline min-w-0 text-soft-black"
            >
              {contactCopy.title}
            </h2>
            <p className="text-body-lg mt-4 text-on-surface-variant">
              {contactCopy.description}
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
            {contactCopy.channels.map((channel) => (
              <li key={channel.href}>
                <ContactChannelItem channel={channel} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
