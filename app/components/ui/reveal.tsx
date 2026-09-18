"use client";

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "left" | "right" | "scale" | "fade";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: RevealVariant;
  animate?: boolean;
};

const variantClasses: Record<RevealVariant, string> = {
  up: "reveal-up",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
  fade: "reveal-fade",
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "up",
  animate = true,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(!animate);

  useEffect(() => {
    if (!animate) {
      return;
    }

    const element = ref.current;
    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.12, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [animate]);

  return (
    <div
      ref={ref}
      className={`reveal ${variantClasses[variant]} ${visible ? "reveal-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
