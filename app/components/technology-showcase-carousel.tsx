import { TechnologyShowcaseCarouselSlide } from "./technology-showcase-carousel-slide";

type ShowcaseImage = {
  src: string;
  alt: string;
};

type TechnologyShowcaseCarouselProps = {
  images: ShowcaseImage[];
  activeIndex: number;
  objectPositionClass: string;
  priority?: boolean;
};

export function TechnologyShowcaseCarousel({
  images,
  activeIndex,
  objectPositionClass,
  priority = false,
}: TechnologyShowcaseCarouselProps) {
  return (
    <div className="absolute inset-0">
      {images.map((image, index) => (
        <TechnologyShowcaseCarouselSlide
          key={image.src}
          src={image.src}
          alt={image.alt}
          isActive={activeIndex === index}
          objectPositionClass={objectPositionClass}
          priority={priority && index === 0}
        />
      ))}
    </div>
  );
}
