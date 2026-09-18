import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { TERMS_COPY } from "../../lib/terms-copy";
import { LegalIndex } from "./legal-index";
import { LegalMarkdown } from "./legal-markdown";
import { LegalSection } from "./legal-section";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export function TermsPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="container-page py-16 lg:py-20">
          <Link
            href="/"
            className="link-interactive mb-10 inline-flex items-center gap-2 text-body-md font-medium text-on-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
          >
            <ArrowLeft aria-hidden className="h-4 w-4" />
            Volver al inicio
          </Link>

          <div className="mb-10 max-w-3xl border-b border-outline-variant pb-10 sm:mb-14 sm:pb-14">
            <p className="text-caption mb-4 font-semibold uppercase tracking-[0.18em] text-secondary">
              Información legal
            </p>
            <h1 className="text-headline max-w-2xl text-soft-black">
              {TERMS_COPY.title}
            </h1>
            <p className="text-body-md mt-5 text-on-surface-variant">
              Última actualización: {TERMS_COPY.updatedAt}
            </p>
          </div>

          <LegalIndex
            label="Índice de los términos y condiciones"
            sections={TERMS_COPY.sections}
          />

          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,48rem)] lg:items-start lg:gap-14">
            <aside className="sticky top-24 hidden max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 lg:block">
              <LegalIndex
                desktop
                label="Índice de los términos y condiciones"
                sections={TERMS_COPY.sections}
              />
            </aside>

            <article className="min-w-0 max-w-3xl">
              {TERMS_COPY.sections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}

              <section
                id={TERMS_COPY.annex.id}
                className="scroll-mt-24 border-t border-outline-variant py-10 sm:py-12"
              >
                <p className="text-caption mb-3 font-semibold uppercase tracking-[0.16em] text-secondary">
                  {TERMS_COPY.annex.label}
                </p>
                <h2 className="text-title mb-6 text-soft-black">
                  {TERMS_COPY.annex.title}
                </h2>
                <LegalMarkdown body={TERMS_COPY.annex.body} />
              </section>
            </article>
          </div>
        </div>
      </main>
      <SiteFooter animate={false} />
    </>
  );
}
