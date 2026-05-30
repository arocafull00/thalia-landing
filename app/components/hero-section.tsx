import { Check, Play } from "lucide-react";
import { sectionIds } from "../lib/sections";
import { Button } from "./ui/button";
import { HeroDeviceFrame } from "./ui/device-frame";

const trustItems = [
  "Implantación en menos de 48 h",
  "Sin permanencia",
  "Soporte personalizado",
];

export function HeroSection() {
  return (
    <section
      className="pt-28 pb-16 lg:pt-36 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-2xl">
            <h1
              id="hero-heading"
              className="hero-enter hero-enter-1 text-display text-soft-black"
            >
              Gestiona toda tu clínica estética desde un único lugar.
            </h1>
            <p className="hero-enter hero-enter-2 text-body-lg mt-6 max-w-xl text-on-surface-variant">
              Agenda, pacientes, stock, equipo y finanzas en una sola plataforma
              diseñada para clínicas estéticas que quieren crecer sin el caos
              administrativo.
            </p>
            <div className="hero-enter hero-enter-3 mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button href={`#${sectionIds.demo}`}>Solicitar demo</Button>
              <Button
                href="#"
                variant="secondary"
                className="gap-2"
              >
                <Play className="h-4 w-4 fill-soft-black" aria-hidden />
                Ver vídeo (2 min)
              </Button>
            </div>
            <ul className="hero-enter hero-enter-4 mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              {trustItems.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-body-md font-medium text-on-surface-variant"
                >
                  <Check
                    className="h-4 w-4 shrink-0 text-secondary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="hero-enter hero-enter-5 hidden lg:block">
            <HeroDeviceFrame />
          </div>
        </div>
        <div className="hero-enter hero-enter-5 mt-12 lg:hidden">
          <HeroDeviceFrame />
        </div>
      </div>
    </section>
  );
}
