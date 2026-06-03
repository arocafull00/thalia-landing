"use client";

import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { useAccessRequest } from "./access-request-provider";
import { Button } from "./ui/button";

type ButtonVariant = "primary" | "secondary" | "inverse";

type OpenAccessModalButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"button">, "type">;

export function OpenAccessModalButton({
  children,
  variant = "primary",
  className,
  onClick,
  ...rest
}: OpenAccessModalButtonProps) {
  const { openAccessModal } = useAccessRequest();

  return (
    <Button
      type="button"
      variant={variant}
      className={className}
      aria-haspopup="dialog"
      onClick={(event) => {
        openAccessModal();
        onClick?.(event);
      }}
      {...rest}
    >
      {children}
    </Button>
  );
}

type OpenAccessModalLinkProps = {
  children: ReactNode;
  className?: string;
};

export function OpenAccessModalLink({
  children,
  className,
}: OpenAccessModalLinkProps) {
  const { openAccessModal } = useAccessRequest();

  return (
    <button
      type="button"
      className={className}
      aria-haspopup="dialog"
      onClick={openAccessModal}
    >
      {children}
    </button>
  );
}
