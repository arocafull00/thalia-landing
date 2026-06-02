"use client";

import { FormEvent, useState, useTransition } from "react";
import { submitWaitlist } from "../actions/waitlist";
import { sectionIds } from "../lib/sections";
import { Button } from "./ui/button";
import { Reveal } from "./ui/reveal";

const errorMessages = {
  invalid: "Introduce un correo electrónico válido.",
  duplicate: "Este correo ya está en la lista de espera.",
  unknown: "No hemos podido guardar tu correo. Inténtalo de nuevo.",
} as const;

export function WaitlistSection() {
  const [submitted, setSubmitted] = useState(false);
  const [errorCode, setErrorCode] = useState<
    keyof typeof errorMessages | null
  >(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorCode(null);

    const formData = new FormData(event.currentTarget);
    const email = formData.get("email");

    if (typeof email !== "string") {
      setErrorCode("invalid");
      return;
    }

    startTransition(async () => {
      const result = await submitWaitlist(email);

      if (result.ok) {
        setSubmitted(true);
        return;
      }

      setErrorCode(result.code);
    });
  };

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
              className="mt-8 flex flex-col sm:flex-row sm:items-stretch"
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
                disabled={isPending}
                className="input-interactive min-h-11 w-full flex-1 rounded border border-outline-variant bg-surface-container-lowest px-5 text-body-md text-soft-black placeholder:text-on-surface-variant focus:border-soft-black focus:outline-none focus-visible:ring-2 focus-visible:ring-soft-black/20 disabled:opacity-60 sm:rounded-r-none sm:border-r-0"
              />
              <Button
                type="submit"
                disabled={isPending}
                className="mt-3 w-full shrink-0 sm:mt-0 sm:w-auto sm:rounded-l-none sm:px-8"
              >
                {isPending ? "Enviando…" : "Solicitar acceso"}
              </Button>
            </form>
            {errorCode ? (
              <p className="text-body-md mt-3 text-soft-black" role="alert">
                {errorMessages[errorCode]}
              </p>
            ) : null}
          </Reveal>
        )}
      </div>
    </section>
  );
};
