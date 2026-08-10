import { ProductImage } from "./product-image";

const DESKTOP_FALLBACK =
  "Añade agenda.png en public/images/ (recomendado 1200×800)";
const MOBILE_FALLBACK =
  "Añade agenda-movil.png en public/images/ (recomendado 390×844)";

export function HeroDeviceFrame() {
  return (
    <figure className="hero-visual">
      <div className="hero-visual__desktop">
        <ProductImage
          src="/images/agenda.png"
          alt="Agenda semanal de Thalia en escritorio con citas por profesional"
          width={1200}
          height={800}
          priority
          className="h-full w-full object-cover object-top"
          fallbackLabel={DESKTOP_FALLBACK}
        />
      </div>
      <div className="hero-visual__mobile">
        <span className="hero-visual__notch" aria-hidden="true" />
        <ProductImage
          src="/images/agenda-movil.png"
          alt="Agenda mensual de Thalia en el móvil con citas del día"
          width={390}
          height={844}
          className="h-auto w-full object-cover"
          fallbackLabel={MOBILE_FALLBACK}
        />
      </div>
    </figure>
  );
}

type PhoneFrameProps = {
  src: string;
  alt: string;
  fallbackLabel: string;
};

export function PhoneFrame({ src, alt, fallbackLabel }: PhoneFrameProps) {
  return (
    <div className="relative mx-auto w-full max-w-[320px]">
      <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] border-[10px] border-soft-black bg-soft-black shadow-card">
        <span
          className="pointer-events-none absolute left-1/2 top-1.5 z-[2] h-4 w-[28%] min-w-11 max-w-[4.25rem] -translate-x-1/2 rounded-full bg-soft-black"
          aria-hidden="true"
        />
        <ProductImage
          src={src}
          alt={alt}
          width={390}
          height={844}
          className="h-full w-full object-cover"
          fallbackLabel={fallbackLabel}
        />
      </div>
    </div>
  );
}
