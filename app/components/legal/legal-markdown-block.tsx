import type { ReactNode } from "react";
import Link from "next/link";

type LegalMarkdownBlockProps = {
  block: string;
};

const INLINE_MARKDOWN_PATTERN =
  /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\)|https?:\/\/[^\s]+)/g;

function renderInline(text: string): ReactNode[] {
  return text.split(INLINE_MARKDOWN_PATTERN).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${index}-${part}`} className="font-semibold text-soft-black">
          {part.slice(2, -2)}
        </strong>
      );
    }

    const markdownLink = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (markdownLink) {
      const href = markdownLink[2];
      const isInternal = href.startsWith("/");

      if (isInternal) {
        return (
          <Link
            key={`${index}-${part}`}
            href={href}
            className="link-interactive font-medium text-secondary underline decoration-secondary/30 underline-offset-4"
          >
            {markdownLink[1]}
          </Link>
        );
      }

      return (
        <a
          key={`${index}-${part}`}
          href={href}
          className="link-interactive font-medium text-secondary underline decoration-secondary/30 underline-offset-4"
        >
          {markdownLink[1]}
        </a>
      );
    }

    if (part.startsWith("http")) {
      return (
        <a
          key={`${index}-${part}`}
          href={part}
          className="link-interactive font-medium text-secondary underline decoration-secondary/30 underline-offset-4"
        >
          {part}
        </a>
      );
    }

    return part;
  });
}

export function LegalMarkdownBlock({ block }: LegalMarkdownBlockProps) {
  const lines = block.split("\n");
  const isList = lines.every((line) => line.startsWith("* "));

  if (isList) {
    return (
      <ul className="space-y-2 pl-5 marker:text-secondary">
        {lines.map((line) => (
          <li key={line} className="pl-1">
            {renderInline(line.slice(2))}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p>
      {lines.map((line, index) => (
        <span key={`${index}-${line}`}>
          {index > 0 ? <br /> : null}
          {renderInline(line)}
        </span>
      ))}
    </p>
  );
}
