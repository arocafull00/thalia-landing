"use client";

import { FormEvent, useState } from "react";
import { sectionIds } from "../lib/sections";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id={sectionIds.waitlist}
      className="bg-off-white py-24 lg:py-28"
      aria-labelledby="waitlist-heading"
    >
      <div className="container-page max-w-xl text-center">
        <Reveal>
          <h2
            id="waitlist-heading"
            className="text-headline text-soft-black"
          >
            Sé el primero en probar Thalia
          </h2>
          <p className="text-body-lg mt-4 text-on-surface-variant">
            Déjanos tu correo y te avisaremos cuando abramos el acceso anticipado
            para tu clínica.
          </p>
        </Reveal>
        {submitted ? (
          <p
            className="status-enter text-body-lg mt-8 font-medium text-secondary"
            role="status"
          >
            Gracias. Te contactaremos cuando haya plazas disponibles.
          </p>
        ) : (
          <Reveal delay={120}>
            <form
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-stretch"
              onSubmit={handleSubmit}
            >
            <label htmlFor="waitlist-email" className="sr-only">
              Correo electrónico
            </label>
            <input
              id="waitlist-email"
              name="email"
              type="email"
              required
              autoComplete="email"
              placeholder="tu@clinica.com"
              className="input-interactive min-h-11 flex-1 rounded-full border border-outline-variant bg-surface-container-lowest px-5 text-body-md text-soft-black placeholder:text-on-surface-variant focus:border-soft-black focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-black/20"
            />
            <Button type="submit" className="shrink-0 sm:px-8">
              Solicitar acceso
            </Button>
            </form>
          </Reveal>
        )}
      </div>
    </section>
  );
}
