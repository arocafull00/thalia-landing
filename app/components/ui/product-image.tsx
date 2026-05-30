"use client";

import Image from "next/image";
import { useState } from "react";

type ProductImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  priority?: boolean;
  className?: string;
  fallbackLabel: string;
};

export function ProductImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  fallbackLabel,
}: ProductImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={`flex h-full min-h-[200px] w-full flex-col items-center justify-center gap-3 bg-surface-container p-8 text-center ${className}`}
        role="img"
        aria-label={fallbackLabel}
      >
        <div className="h-12 w-12 rounded-lg bg-outline-variant/40" />
        <p className="text-body-md max-w-[14rem] text-on-surface-variant">
          {fallbackLabel}
        </p>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      onError={() => setFailed(true)}
    />
  );
}
