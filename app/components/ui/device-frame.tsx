import { ProductImage } from "./product-image";

const DESKTOP_FALLBACK =
  "Añade dashboard-desktop.png en public/images/ (recomendado 1200×800)";
const MOBILE_FALLBACK =
  "Añade dashboard-mobile.png en public/images/ (recomendado 390×844)";

export function HeroDeviceFrame() {
  return (
    <div className="hero-device-float relative mx-auto w-full max-w-xl lg:mx-0 lg:max-w-none">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-card">
        <ProductImage
          src="/images/dashboard-desktop.png"
          alt="Panel de Thalia en escritorio con agenda y pacientes"
          width={1200}
          height={800}
          priority
          className="h-full w-full object-cover object-top"
          fallbackLabel={DESKTOP_FALLBACK}
        />
      </div>
      <div className="absolute -right-4 top-16 z-10 w-[38%] max-w-[220px] overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-card lg:-right-8">
        <ProductImage
          src="/images/dashboard-mobile.png"
          alt="Vista móvil de la agenda de Thalia"
          width={390}
          height={844}
          className="h-auto w-full object-cover"
          fallbackLabel={MOBILE_FALLBACK}
        />
      </div>
    </div>
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
      <div className="aspect-[9/19] overflow-hidden rounded-[2rem] border-[10px] border-soft-black bg-soft-black shadow-card">
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
