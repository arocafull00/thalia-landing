import Link from "next/link";

type FooterLink = {
  label: string;
  href: string;
};

type FooterColumn = {
  title: string;
  links: FooterLink[];
};

const footerColumns: FooterColumn[] = [
  {
    title: "Producto",
    links: [
      { label: "Funciones", href: "#funciones" },
      { label: "Precios", href: "#precios" },
      { label: "Seguridad", href: "#funciones" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Nosotros", href: "#nosotros" },
      { label: "Contacto", href: "#demo" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "FAQ", href: "#faq" },
      { label: "Lista de espera", href: "#lista-espera" },
    ],
  },
];

const legalLinks: FooterLink[] = [
  { label: "Aviso legal", href: "#" },
  { label: "Privacidad", href: "#" },
  { label: "Cookies", href: "#" },
];

function FooterColumnBlock({ title, links }: FooterColumn) {
  return (
    <div>
      <p className="text-label-md uppercase tracking-wide text-on-surface-variant">
        {title}
      </p>
      <ul className="mt-4 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="link-interactive text-body-md text-on-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-outline-variant bg-off-white py-16">
      <div className="container-page">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <p className="text-2xl font-semibold text-soft-black">Thalia</p>
            <p className="text-body-lg mt-4 max-w-sm text-on-surface-variant">
              Software de gestión para clínicas estéticas: agenda, pacientes,
              inventario, equipo y finanzas en un solo lugar.
            </p>
          </div>
          {footerColumns.map((column) => (
            <FooterColumnBlock key={column.title} {...column} />
          ))}
        </div>
        <div className="mt-12 flex flex-col gap-6 border-t border-outline-variant pt-8 md:flex-row md:items-center md:justify-between">
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="link-interactive text-body-md text-on-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <Link
              href="https://instagram.com"
              className="pressable flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant px-3 text-body-md text-on-surface-variant hover:border-soft-black hover:text-soft-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            >
              Instagram
            </Link>
            <Link
              href="https://linkedin.com"
              className="pressable flex h-10 min-w-10 items-center justify-center rounded-full border border-outline-variant px-3 text-body-md text-on-surface-variant hover:border-soft-black hover:text-soft-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
            >
              LinkedIn
            </Link>
          </div>
        </div>
        <p className="text-caption mt-8 text-on-surface-variant">
          © {new Date().getFullYear()} Thalia. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
