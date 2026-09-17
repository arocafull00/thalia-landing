import { ChevronDown } from "lucide-react";
import type { PrivacySection } from "../../lib/privacy-copy";

type LegalIndexProps = {
  desktop?: boolean;
  label: string;
  sections: PrivacySection[];
};

export function LegalIndex({ desktop = false, label, sections }: LegalIndexProps) {
  const links = sections.map((section) => (
    <li key={section.id}>
      <a
        href={`#${section.id}`}
        className="group flex gap-2 py-1.5 text-body-md leading-5 text-on-surface-variant transition-colors hover:text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
      >
        <span className="w-6 shrink-0 text-right text-caption tabular-nums text-on-surface-variant group-hover:text-secondary">
          {section.number}.
        </span>
        <span>{section.title}</span>
      </a>
    </li>
  ));

  if (desktop) {
    return (
      <nav aria-label={label}>
        <p className="text-caption mb-3 font-semibold uppercase tracking-[0.16em] text-on-surface-variant">
          Índice
        </p>
        <ol className="space-y-0.5">{links}</ol>
      </nav>
    );
  }

  return (
    <details className="group mb-10 border-y border-outline-variant py-1 lg:hidden">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-body-md font-semibold text-soft-black marker:content-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black [&::-webkit-details-marker]:hidden">
        Índice de contenidos
        <ChevronDown
          aria-hidden
          className="h-4 w-4 text-on-surface-variant transition-transform group-open:rotate-180"
        />
      </summary>
      <nav aria-label={label} className="border-t border-outline-variant py-4">
        <ol className="grid gap-x-6 sm:grid-cols-2">{links}</ol>
      </nav>
    </details>
  );
}
