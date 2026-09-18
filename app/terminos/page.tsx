import type { Metadata } from "next";
import { TermsPage } from "../components/legal/terms-page";
import { getSiteUrl } from "../lib/site-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description:
    "Consulta los términos y condiciones que regulan la contratación, el acceso y el uso de la plataforma Thalia.",
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/terminos`,
    title: "Términos y condiciones | Thalia",
    description:
      "Consulta los términos y condiciones que regulan la contratación, el acceso y el uso de la plataforma Thalia.",
  },
};

export default function Page() {
  return <TermsPage />;
}
