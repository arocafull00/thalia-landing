"use client";

import Image from "next/image";
import { useState } from "react";
import { TechnologyFeatureItem } from "./technology-feature-item";

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
}: TechnologyShowcasePanelProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const objectPositionClass =
    imagePosition === "center-bottom"
      ? "object-[center_45%] lg:object-[center_55%]"
      : "object-center";

  return (
    <section
      id={id}
      className="relative min-h-svh overflow-hidden bg-soft-black"
      aria-labelledby={headingId}
    >
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className={`object-cover ${objectPositionClass}`}
        />
      </div>

      <div className="relative z-10 flex min-h-svh flex-col justify-end px-[var(--spacing-margin-mobile)] pb-10 lg:grid lg:grid-cols-12 lg:items-center lg:justify-normal lg:gap-6 lg:px-[var(--spacing-margin-desktop)] lg:py-24 xl:gap-10">
        <div className="lg:col-span-4 lg:max-w-md xl:col-span-3">
          <h2
            id={headingId}
            className="text-display max-w-[14ch] text-on-primary"
          >
            {heading}
          </h2>
          <p className="text-body-lg mt-6 max-w-md text-on-primary/75">
            {description}
          </p>
        </div>

        <div className="hidden lg:col-span-4 lg:block xl:col-span-6" aria-hidden />

        <ul className="mt-8 w-full max-w-sm pt-2 lg:col-span-4 lg:mt-0 lg:justify-self-end lg:pt-0 xl:col-span-3">
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
      </div>
    </section>
  );
}
