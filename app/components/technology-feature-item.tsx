type TechnologyFeatureItemProps = {
  label: string;
  number: string;
  isActive: boolean;
  onSelect: () => void;
};

export function TechnologyFeatureItem({
  label,
  number,
  isActive,
  onSelect,
}: TechnologyFeatureItemProps) {
  return (
    <li>
      <button
        type="button"
        onClick={onSelect}
        aria-current={isActive ? "true" : undefined}
        className="group flex w-full items-center justify-between gap-6 border-t border-outline-variant py-4 text-left transition-[transform,color] duration-200 ease-out first:border-t-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-black active:scale-[0.99]"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span
            className={`h-7 w-0.5 shrink-0 origin-top bg-soft-black transition-[opacity,transform] duration-300 ease-out ${
              isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            aria-hidden
          />
          <span
            className={`text-pretty transition-[font-weight,color,opacity] duration-200 ease-out ${
              isActive
                ? "text-title font-medium text-soft-black"
                : "text-body-lg text-on-surface-variant"
            }`}
          >
            {label}
          </span>
        </span>
        <span
          className={`shrink-0 tabular-nums transition-[color,opacity] duration-200 ease-out ${
            isActive
              ? "text-body-md font-medium text-soft-black"
              : "text-body-md text-on-surface-variant"
          }`}
        >
          {number}
        </span>
      </button>
    </li>
  );
}
