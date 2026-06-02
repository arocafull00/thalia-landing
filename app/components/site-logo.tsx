import Image from "next/image";
import Link from "next/link";

type SiteLogoProps = {
  size?: number;
  href?: string | null;
  className?: string;
};

export function SiteLogo({
  size = 44,
  href = "/",
  className = "",
}: SiteLogoProps) {
  const image = (
    <Image
      src="/logo.png"
      alt="Thalia"
      width={size}
      height={size}
      className={className}
      priority
    />
  );

  if (!href) {
    return image;
  }

  return (
    <Link
      href={href}
      className="inline-flex shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
    >
      {image}
    </Link>
  );
}
