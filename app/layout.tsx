import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  applicationName: "Thalia",
  title: "Software para clínicas estéticas y dentales | Thalia",
  description:
    "Gestiona agenda, pacientes, tratamientos, archivos, inventario, equipo, finanzas y recordatorios de tu clínica estética o dental desde una sola aplicación.",
  category: "software de gestión clínica",
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: "Thalia",
    title: "Software para clínicas estéticas y dentales | Thalia",
    description:
      "Agenda, expedientes clínicos, tratamientos, inventario, equipo, finanzas y recordatorios conectados en una sola aplicación.",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${dmSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
