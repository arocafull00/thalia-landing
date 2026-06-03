"use client";

import { X } from "lucide-react";
import { useEffect, useRef } from "react";
import { AccessRequestForm } from "./access-request-form";

type AccessRequestModalProps = {
  open: boolean;
  onClose: () => void;
};

export function AccessRequestModal({ open, onClose }: AccessRequestModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className="access-request-dialog fixed z-[var(--z-dialog)] w-[min(90vw,28rem)] max-w-none border-0 bg-surface-container-lowest p-0"
      aria-labelledby="access-request-title"
      onClose={onClose}
      onClick={(event) => {
        if (event.target === dialogRef.current) {
          onClose();
        }
      }}
    >
      <div className="flex items-start justify-between gap-4 border-b border-outline-variant px-5 py-4">
        <div className="min-w-0">
          <h2
            id="access-request-title"
            className="text-title text-soft-black"
          >
            Solicita tu demo gratuita
          </h2>
          <p className="text-body-md mt-1 text-on-surface-variant">
            Déjanos tu correo y te contactaremos para agendar la demo.
          </p>
        </div>
        <button
          type="button"
          className="pressable flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <X className="h-5 w-5" aria-hidden />
        </button>
      </div>
      <div className="px-5 py-5">
        <AccessRequestForm
          variant="modal"
          showBenefits
          submitLabel="Solicitar demo"
          pendingLabel="Enviando…"
        />
      </div>
    </dialog>
  );
}
