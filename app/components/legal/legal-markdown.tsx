import { LegalMarkdownBlock } from "./legal-markdown-block";

type LegalMarkdownProps = {
  body: string;
};

export function LegalMarkdown({ body }: LegalMarkdownProps) {
  const blocks = body.split(/\n{2,}/);

  return (
    <div className="space-y-5 text-body-md leading-relaxed text-on-surface-variant">
      {blocks.map((block, index) => (
        <LegalMarkdownBlock
          key={`${index}-${block.slice(0, 24)}`}
          block={block}
        />
      ))}
    </div>
  );
}
