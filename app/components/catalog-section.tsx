import { sectionIds } from "../lib/sections";
import { Reveal } from "./ui/reveal";

const catalogItems = [
  {
    title: "Aplicación multidispositivo",
    description:
      "Accede y gestiona tu clínica desde ordenador, tablet o móvil.",
  },
  {
    title: "Puesta en marcha y migración de datos",
    description:
      "Configuramos tu clínica y trasladamos los datos de tu sistema actual, base de datos o archivos Excel. Incluye onboarding y soporte inicial gratuito.",
  },
  {
    title: "Usuarios, roles y permisos",
    description:
      "Crea accesos independientes para cada miembro del equipo y define qué puede consultar o gestionar según su rol.",
  },
  {
    title: "Gestión avanzada de pacientes",
    description:
      "Centraliza los datos, citas, tratamientos, archivos e historial de cada paciente.",
  },
  {
    title: "Gestión inteligente de citas",
    description:
      "Organiza la agenda de la clínica y envía recordatorios automáticos para reducir olvidos y ausencias.",
  },
  {
    title: "Control automatizado de inventario",
    description:
      "Supervisa el stock, descuenta los materiales utilizados en las citas y recibe alertas cuando sea necesario reponerlos.",
  },
  {
    title: "Tratamientos personalizables",
    description:
      "Crea y configura los tratamientos de tu clínica según tus necesidades.",
  },
  {
    title: "Archivos e imágenes ilimitados",
    description:
      "Guarda documentos, fotografías y otros archivos directamente en la ficha de cada paciente.",
  },
  {
    title: "Control de ingresos y gastos",
    description:
      "Consulta la evolución económica de la clínica desde un dashboard claro y visual. No incluye facturación ni contabilidad.",
  },
  {
    title: "Campañas personalizadas por WhatsApp",
    description:
      "Envía comunicaciones y campañas masivas a tus pacientes dentro del límite de envíos incluido.",
  },
] as const;

export function CatalogSection() {
  return (
    <section
      id={sectionIds.catalogo}
      className="border-t border-outline-variant bg-surface-container-low"
      aria-labelledby="catalog-heading"
    >
      <div className="container-page grid gap-12 py-20 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:gap-20 lg:py-28">
        <Reveal variant="left">
          <div className="max-w-lg lg:sticky lg:top-28">
            <h2 id="catalog-heading" className="text-headline text-soft-black">
              Todo lo que puedes gestionar con Thalia
            </h2>
            <p className="text-body-lg mt-5 text-on-surface-variant">
              Una única plataforma para conectar el trabajo diario de tu
              clínica, desde la primera configuración hasta la comunicación con
              tus pacientes.
            </p>
          </div>
        </Reveal>

        <div className="border-b border-outline-variant">
          {catalogItems.map((item, index) => (
            <Reveal key={item.title} delay={(index % 5) * 55} variant="right">
              <article className="grid gap-3 border-t border-outline-variant py-6 sm:grid-cols-[2.5rem_minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-6 sm:py-7">
                <p className="text-label-md tabular-nums text-on-surface-variant">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-title text-soft-black">{item.title}</h3>
                <p className="text-body-md text-on-surface-variant sm:pt-0.5">
                  {item.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
