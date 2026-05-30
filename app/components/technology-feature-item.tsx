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
        className="group flex w-full items-center justify-between gap-6 py-4 text-left transition-[transform,color] duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-on-primary active:scale-[0.99]"
      >
        <span className="flex min-w-0 items-center gap-4">
          <span
            className={`h-7 w-0.5 shrink-0 origin-top bg-on-primary transition-[opacity,transform] duration-300 ease-out ${
              isActive ? "scale-y-100 opacity-100" : "scale-y-0 opacity-0"
            }`}
            aria-hidden
          />
          <span
            className={`text-pretty transition-[font-weight,color,opacity] duration-200 ease-out ${
              isActive
                ? "text-title font-medium text-on-primary"
                : "text-body-lg text-on-primary/45"
            }`}
          >
            {label}
          </span>
        </span>
        <span
          className={`shrink-0 tabular-nums transition-[color,opacity] duration-200 ease-out ${
            isActive
              ? "text-body-md font-medium text-on-primary"
              : "text-body-md text-on-primary/45"
          }`}
        >
          {number}
        </span>
      </button>
    </li>
  );
}
