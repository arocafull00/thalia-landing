import type { Metadata } from "next";
import { PrivacyPage } from "../components/legal/privacy-page";
import { getSiteUrl } from "../lib/site-config";

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  title: "Política de privacidad",
  description:
    "Consulta cómo Thalia trata los datos personales recogidos a través de la web corporativa.",
  alternates: {
    canonical: "/privacidad",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: `${siteUrl}/privacidad`,
    title: "Política de privacidad | Thalia",
    description:
      "Consulta cómo Thalia trata los datos personales recogidos a través de la web corporativa.",
  },
};

export default function Page() {
  return <PrivacyPage />;
}
