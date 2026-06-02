import Link from "next/link";
import { Reveal } from "./ui/reveal";

const legalLinks = [
  { label: "Aviso legal", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant py-16 lg:py-20">
      <div className="container-page">
        <Reveal>
          <div className="max-w-[60ch]">
            <p className="text-headline italic text-soft-black">
              Tu clínica, simplificada.
            </p>
            <p className="text-title mt-6 text-soft-black">Thalia, 2026.</p>
            <p className="text-body-md mt-4 text-on-surface-variant">
              Damos soporte personalizado a cada clínica.
            </p>
          </div>
        </Reveal>
        <Reveal delay={120}>
          <div className="mt-12 flex flex-col gap-6 border-t border-outline-variant pt-8 text-caption text-on-surface-variant md:flex-row md:flex-wrap md:items-center md:gap-x-6 md:gap-y-3">
            <p>© {new Date().getFullYear()} Thalia. Todos los derechos reservados.</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 md:ml-auto">
              <Link
                href="https://instagram.com"
                className="link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
              >
                Instagram
              </Link>
              <Link
                href="https://linkedin.com"
                className="link-interactive focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
              >
                LinkedIn
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </footer>
  );
}
