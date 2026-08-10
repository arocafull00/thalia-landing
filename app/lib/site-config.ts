export function getSiteUrl() {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}

export const siteName = "Thalia";

export const siteTitle = "Software para clínicas estéticas y dentales | Thalia";

export const siteDescription =
  "Gestiona agenda, pacientes, tratamientos, archivos, inventario, equipo, finanzas y recordatorios de tu clínica estética o dental desde una sola aplicación.";

export const siteOpenGraphDescription =
  "Agenda, expedientes clínicos, tratamientos, inventario, equipo, finanzas y recordatorios conectados en una sola aplicación.";

export const siteKeywords = [
  "software clínicas estéticas",
  "software clínicas dentales",
  "gestión clínica",
  "agenda clínica",
  "expediente clínico",
  "inventario clínica",
  "recordatorios WhatsApp citas",
  "software gestión pacientes",
];

export const openGraphImage = {
  url: "/images/dashboard-desktop.png",
  width: 1200,
  height: 630,
  alt: "Panel de Thalia con agenda, pacientes e inventario de clínica",
};
