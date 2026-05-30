type FaqItemProps = {
  question: string;
  answer: string;
};

export function FaqItem({ question, answer }: FaqItemProps) {
  return (
    <details className="group faq-details border-b border-outline-variant py-6">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-title text-soft-black marker:content-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-soft-black [&::-webkit-details-marker]:hidden">
        <span>{question}</span>
        <span
          className="faq-chevron flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-outline-variant text-lg leading-none group-open:rotate-45"
          aria-hidden
        >
          +
        </span>
      </summary>
      <div className="faq-answer-grid">
        <div className="faq-answer-inner">
          <p className="text-body-lg pt-4 max-w-2xl text-on-surface-variant">
            {answer}
          </p>
        </div>
      </div>
    </details>
  );
}
