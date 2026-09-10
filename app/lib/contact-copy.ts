export type ContactChannelKind = "phone" | "email" | "website";

export type ContactChannel = {
  kind: ContactChannelKind;
  label: string;
  display: string;
  href: string;
};

export const contactCopy = {
  title: "Hablemos de tu clínica",
  description:
    "Si prefieres escribir o llamar antes de solicitar la demo, estamos disponibles por teléfono, email o web.",
  channels: [
    {
      kind: "phone",
      label: "Teléfono",
      display: "722 561 809",
      href: "tel:+34722561809",
    },
    {
      kind: "phone",
      label: "Teléfono alternativo",
      display: "611 798 035",
      href: "tel:+34611798035",
    },
    {
      kind: "email",
      label: "Email",
      display: "thalia.clinic.app@outlook.com",
      href: "mailto:thalia.clinic.app@outlook.com",
    },
    {
      kind: "website",
      label: "Web",
      display: "info.thalia-app.es",
      href: "https://info.thalia-app.es",
    },
  ] satisfies readonly ContactChannel[],
} as const;
