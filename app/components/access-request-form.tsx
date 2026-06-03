"use client";

import { Check } from "lucide-react";
import { FormEvent, useId, useState, useTransition } from "react";
import { submitWaitlist } from "../actions/waitlist";
import { accessRequestBenefits } from "../lib/access-request-copy";
import { isValidEmail, normalizeEmail } from "../lib/validate-email";
import { Button } from "./ui/button";

const errorMessages = {
  invalid: "Introduce un correo electrónico válido.",
  duplicate: "Este correo ya está en la lista de espera.",
  unknown: "No hemos podido guardar tu correo. Inténtalo de nuevo.",
  empty: "Introduce tu correo electrónico.",
} as const;

type ErrorCode = keyof typeof errorMessages;

function resolveClientError(value: string): ErrorCode | null {
  if (!normalizeEmail(value)) {
    return "empty";
  }
  if (!isValidEmail(value)) {
    return "invalid";
  }
  return null;
}

type AccessRequestFormProps = {
  variant: "inline" | "modal";
  showBenefits?: boolean;
  submitLabel?: string;
  pendingLabel?: string;
};

export function AccessRequestForm({
  variant,
  showBenefits = false,
  submitLabel = "Solicitar acceso",
  pendingLabel = "Enviando…",
}: AccessRequestFormProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errorCode, setErrorCode] = useState<ErrorCode | null>(null);
  const [touched, setTouched] = useState(false);
  const [isPending, startTransition] = useTransition();
  const errorId = useId();
  const inputId = useId();

  const clientError = touched ? resolveClientError(email) : null;
  const fieldErrorCode =
    errorCode === "empty" || errorCode === "invalid"
      ? errorCode
      : clientError;
  const showFieldError = fieldErrorCode !== null;
  const serverErrorCode =
    errorCode === "duplicate" || errorCode === "unknown" ? errorCode : null;

  const handleBlur = () => {
    setTouched(true);
    const clientError = resolveClientError(email);
    if (clientError) {
      setErrorCode(clientError);
      return;
    }
    if (errorCode === "empty" || errorCode === "invalid") {
      setErrorCode(null);
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);

    const clientError = resolveClientError(email);
    if (clientError) {
      setErrorCode(clientError);
      return;
    }

    setErrorCode(null);

    startTransition(async () => {
      const result = await submitWaitlist(email);

      if (result.ok) {
        setSubmitted(true);
        return;
      }

      setErrorCode(result.code);
    });
  };

  if (submitted) {
    return (
      <p
        className="status-enter text-body-lg font-medium text-secondary"
        role="status"
      >
        Gracias. Te contactaremos cuando haya plazas disponibles.
      </p>
    );
  }

  const isModal = variant === "modal";
  const inputStateClass = showFieldError
    ? "border-error focus:border-error focus-visible:ring-error/20"
    : "border-outline-variant focus:border-soft-black focus-visible:ring-soft-black/20";

  return (
    <div className={showBenefits ? "space-y-6" : undefined}>
      {showBenefits ? (
        <ul className="space-y-3">
          {accessRequestBenefits.map((benefit) => (
            <li
              key={benefit}
              className="flex items-start gap-2 text-body-md text-on-surface-variant"
            >
              <Check
                className="mt-0.5 h-4 w-4 shrink-0 text-secondary"
                aria-hidden
              />
              {benefit}
            </li>
          ))}
        </ul>
      ) : null}
      <form
        className={
          isModal
            ? "flex flex-col gap-3"
            : "flex flex-col sm:flex-row sm:items-stretch"
        }
        onSubmit={handleSubmit}
        noValidate
      >
        <div className={isModal ? "w-full" : "min-w-0 flex-1"}>
          <label htmlFor={inputId} className="sr-only">
            Correo electrónico
          </label>
          <input
            id={inputId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@clinica.com"
            disabled={isPending}
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              if (errorCode === "empty" || errorCode === "invalid") {
                setErrorCode(null);
              }
            }}
            onBlur={handleBlur}
            aria-invalid={showFieldError}
            aria-describedby={showFieldError ? errorId : undefined}
            className={`input-interactive min-h-11 w-full rounded border bg-surface-container-lowest px-5 text-body-md text-soft-black placeholder:text-on-surface-variant focus:outline-none focus-visible:ring-2 disabled:opacity-60 ${inputStateClass} ${isModal ? "" : "sm:rounded-r-none sm:border-r-0"}`}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          className={
            isModal
              ? "w-full shrink-0"
              : "mt-3 w-full shrink-0 sm:mt-0 sm:w-auto sm:rounded-l-none sm:px-8"
          }
        >
          {isPending ? pendingLabel : submitLabel}
        </Button>
        {showFieldError && fieldErrorCode ? (
          <p
            id={errorId}
            className={`text-body-md text-error ${isModal ? "w-full" : "w-full sm:col-span-2"}`}
            role="alert"
          >
            {errorMessages[fieldErrorCode]}
          </p>
        ) : null}
        {serverErrorCode ? (
          <p className="text-body-md w-full text-error" role="alert">
            {errorMessages[serverErrorCode]}
          </p>
        ) : null}
      </form>
    </div>
  );
}
