import Image from "next/image";

type TechnologyShowcaseCarouselSlideProps = {
  src: string;
  alt: string;
  isActive: boolean;
  objectPositionClass: string;
  priority?: boolean;
};

export function TechnologyShowcaseCarouselSlide({
  src,
  alt,
  isActive,
  objectPositionClass,
  priority = false,
}: TechnologyShowcaseCarouselSlideProps) {
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes="(min-width: 1024px) 50vw, 100vw"
      className={`object-cover transition-opacity duration-500 ease-out ${objectPositionClass} ${
        isActive ? "opacity-100" : "opacity-0"
      }`}
      aria-hidden={!isActive}
    />
  );
}
