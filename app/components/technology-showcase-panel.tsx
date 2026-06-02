"use client";

import { useEffect, useState } from "react";
import { TechnologyFeatureItem } from "./technology-feature-item";
import { TechnologyShowcaseCarousel } from "./technology-showcase-carousel";
import { Reveal } from "./ui/reveal";

const AUTO_ADVANCE_MS = 4000;

type ShowcaseImage = {
  src: string;
  alt: string;
};

type ShowcaseFeature = {
  label: string;
  number: string;
};

type TechnologyShowcasePanelProps = {
  id?: string;
  headingId: string;
  images: ShowcaseImage[];
  heading: string;
  description: string;
  features: ShowcaseFeature[];
  imagePosition?: "center" | "center-bottom";
  priority?: boolean;
  reversed?: boolean;
};

export function TechnologyShowcasePanel({
  id,
  headingId,
  images,
  heading,
  description,
  features,
  imagePosition = "center",
  priority = false,
  reversed = false,
}: TechnologyShowcasePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, AUTO_ADVANCE_MS);

    return () => window.clearInterval(timer);
  }, [activeIndex, images.length]);

  const objectPositionClass =
    imagePosition === "center-bottom"
      ? "object-[center_45%] lg:object-[center_55%]"
      : "object-center";

  return (
    <section
      id={id}
      className={`split-section border-t border-outline-variant ${reversed ? "split-section--reverse" : ""}`}
      aria-labelledby={headingId}
    >
      <div className="split-panel split-panel--media min-h-[320px] lg:min-h-0">
        <TechnologyShowcaseCarousel
          images={images}
          activeIndex={activeIndex}
          objectPositionClass={objectPositionClass}
          priority={priority}
        />
      </div>
      <div className="split-panel split-panel--content bg-surface-container-low">
        <Reveal variant={reversed ? "left" : "right"}>
          <div className="max-w-md">
            <h2
              id={headingId}
              className="text-headline min-w-0 text-soft-black"
            >
              {heading}
            </h2>
            <p className="text-body-lg mt-6 text-on-surface-variant">
              {description}
            </p>
          </div>
        </Reveal>
        <Reveal
          variant={reversed ? "left" : "right"}
          delay={120}
          className="mt-8 w-full max-w-md"
        >
          <ul>
            {features.map((feature, index) => (
              <TechnologyFeatureItem
                key={feature.number}
                label={feature.label}
                number={feature.number}
                isActive={activeIndex === index}
                onSelect={() => setActiveIndex(index)}
              />
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
