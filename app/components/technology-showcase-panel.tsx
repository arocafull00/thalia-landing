"use client";

import Image from "next/image";
import { useState } from "react";
import { TechnologyFeatureItem } from "./technology-feature-item";
import { Reveal } from "./ui/reveal";

type ShowcaseFeature = {
  label: string;
  number: string;
};

type TechnologyShowcasePanelProps = {
  id?: string;
  headingId: string;
  imageSrc: string;
  imageAlt: string;
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
  imageSrc,
  imageAlt,
  heading,
  description,
  features,
  imagePosition = "center",
  priority = false,
  reversed = false,
}: TechnologyShowcasePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

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
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className={`object-cover ${objectPositionClass}`}
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
