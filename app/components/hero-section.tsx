import { Check } from "lucide-react";
import { OpenAccessModalButton } from "./open-access-modal-button";
import { FeatureVideoModal } from "./feature-video-modal";
import { HeroDeviceFrame } from "./ui/device-frame";

const trustItems = [
  "Agenda, fichas y stock conectados",
  "Instalable en móvil, tablet y ordenador",
  "Roles y permisos por clínica",
];

export function HeroSection() {
  return (
    <section
      className="pt-8 pb-16 lg:pb-24"
      aria-labelledby="hero-heading"
    >
      <div className="container-page">
        <div className="hero-enter hero__grid">
          <div className="hero__content">
            <h1
              id="hero-heading"
              className="text-display min-w-0 text-soft-black"
            >
              Software de gestión para clínicas estéticas y dentales
            </h1>
            <p className="text-body-lg mt-6 max-w-xl text-on-surface-variant">
              Coordina agenda, expedientes clínicos, tratamientos, equipo,
              inventario y finanzas desde una sola aplicación. Thalia conecta
              la operativa diaria de recepción, profesionales y dirección,
              también desde el móvil.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <OpenAccessModalButton>Ver Thalia en una demo</OpenAccessModalButton>
              <FeatureVideoModal />
            </div>
            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
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
          <div className="hero__visual">
            <HeroDeviceFrame />
          </div>
        </div>
      </div>
    </section>
  );
}
