import { ProductImage } from "./product-image";

const DESKTOP_FALLBACK =
  "Añade dashboard-desktop.png en public/images/ (recomendado 1200×800)";
const MOBILE_FALLBACK =
  "Añade dashboard-mobile.png en public/images/ (recomendado 390×844)";

export function HeroDeviceFrame() {
  return (
    <div className="relative mx-auto w-full min-w-0 max-w-3xl sm:max-w-4xl lg:mx-0 lg:max-w-none">
      <div className="relative aspect-[5/3] min-h-[min(52vw,280px)] w-full overflow-hidden rounded-2xl border border-outline-variant bg-surface-container-lowest shadow-card sm:min-h-[min(48vw,360px)] lg:aspect-[16/10] lg:min-h-[min(42vh,480px)]">
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
      <div className="absolute -right-2 top-[12%] z-10 w-[44%] min-w-[140px] max-w-[280px] overflow-hidden rounded-2xl border-4 border-surface-container-lowest shadow-card sm:-right-4 sm:max-w-[300px] lg:-right-6 lg:w-[42%] lg:max-w-[320px]">
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
