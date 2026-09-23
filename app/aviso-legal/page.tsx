import type { Metadata } from "next";
import { LegalNoticePage } from "../components/legal/legal-notice-page";
import { getSiteUrl } from "../lib/site-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Aviso legal",
  description:
    "Datos identificativos del titular de Thalia, condiciones de uso de los sitios web y contacto.",
  alternates: {
    canonical: "/aviso-legal",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/aviso-legal`,
    title: "Aviso legal | Thalia",
    description:
      "Datos identificativos del titular de Thalia, condiciones de uso de los sitios web y contacto.",
  },
};

export default function Page() {
  return <LegalNoticePage />;
}
