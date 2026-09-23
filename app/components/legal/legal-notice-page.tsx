import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LEGAL_NOTICE_COPY } from "../../lib/legal-notice-copy";
import { LegalIndex } from "./legal-index";
import { LegalSection } from "./legal-section";
import { SiteFooter } from "../site-footer";
import { SiteHeader } from "../site-header";

export function LegalNoticePage() {
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
              {LEGAL_NOTICE_COPY.title}
            </h1>
            <p className="text-body-md mt-5 text-on-surface-variant">
              Última actualización: {LEGAL_NOTICE_COPY.updatedAt}
            </p>
          </div>

          <LegalIndex
            label="Índice del aviso legal"
            sections={LEGAL_NOTICE_COPY.sections}
          />

          <div className="lg:grid lg:grid-cols-[14rem_minmax(0,48rem)] lg:items-start lg:gap-14">
            <aside className="sticky top-24 hidden max-h-[calc(100vh-6rem)] overflow-y-auto pr-2 lg:block">
              <LegalIndex
                desktop
                label="Índice del aviso legal"
                sections={LEGAL_NOTICE_COPY.sections}
              />
            </aside>

            <article className="min-w-0 max-w-3xl">
              {LEGAL_NOTICE_COPY.sections.map((section) => (
                <LegalSection key={section.id} section={section} />
              ))}
            </article>
          </div>
        </div>
      </main>
      <SiteFooter animate={false} />
    </>
  );
}
