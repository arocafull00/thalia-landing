import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "inverse";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-soft-black text-on-primary hover:bg-inverse-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black",
  secondary:
    "bg-surface-container-lowest border border-outline-variant text-soft-black hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black",
  inverse:
    "bg-surface-container-lowest text-soft-black hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-inverse-on-surface",
};

type ButtonBaseProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
};

type ButtonAsButton = ButtonBaseProps &
  ComponentPropsWithoutRef<"button"> & { href?: undefined };

type ButtonAsLink = ButtonBaseProps &
  ComponentPropsWithoutRef<typeof Link> & { href: string };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const {
    children,
    variant = "primary",
    className = "",
    ...rest
  } = props;

  const classes = `pressable inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium ${variantClasses[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...linkRest } = rest as ComponentPropsWithoutRef<typeof Link>;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  const buttonRest = rest as ComponentPropsWithoutRef<"button">;
  return (
    <button type="button" className={classes} {...buttonRest}>
      {children}
    </button>
  );
}
