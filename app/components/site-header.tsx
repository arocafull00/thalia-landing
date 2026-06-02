"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { sectionIds } from "../lib/sections";
import { SiteLogo } from "./site-logo";
import { Button } from "./ui/button";

const navLinks = [
  { label: "Soluciones", href: `#${sectionIds.soluciones}` },
  { label: "Funciones", href: `#${sectionIds.funciones}` },
  { label: "Precios", href: `#${sectionIds.precios}` },
  { label: "Nosotros", href: `#${sectionIds.nosotros}` },
  { label: "FAQ", href: `#${sectionIds.faq}` },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) {
      return;
    }

    if (open) {
      if (!dialog.open) {
        dialog.showModal();
      }
      return;
    }

    if (dialog.open) {
      dialog.close();
    }
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`header-enter header-scroll sticky top-0 z-[var(--z-header)] bg-off-white/95 backdrop-blur-sm ${scrolled ? "header-scroll-scrolled border-b border-transparent" : "border-b border-outline-variant"}`}
    >
      <div className="container-page pt-6 pb-4">
        <div className="flex items-end justify-between gap-6">
          <SiteLogo size={48} />
          <p className="hidden text-right text-label-md uppercase tracking-widest text-on-surface-variant sm:block">
            Software para clínicas estéticas
          </p>
        </div>
        <div className="mt-5 flex items-center justify-between gap-6">
          <nav
            className="hidden items-center gap-8 md:flex"
            aria-label="Principal"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="link-interactive text-body-md font-medium text-on-surface-variant focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <Button href={`#${sectionIds.demo}`}>Solicitar demo</Button>
          <button
            type="button"
            className="pressable ml-auto flex h-11 w-11 items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" aria-hidden />
            <span className="sr-only">Abrir menú</span>
          </button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        id="mobile-nav"
        className="mobile-nav-dialog fixed inset-0 z-[var(--z-dialog)] m-0 h-full max-h-none w-full max-w-none border-0 bg-off-white p-0"
        onClose={() => setOpen(false)}
        onClick={(event) => {
          if (event.target === dialogRef.current) {
            closeMenu();
          }
        }}
      >
        <div className="flex h-full flex-col p-6">
          <div className="flex items-center justify-between">
            <SiteLogo size={40} href={null} />
            <button
              type="button"
              className="pressable flex h-11 w-11 items-center justify-center rounded-lg hover:bg-surface-container-low focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-soft-black"
              onClick={closeMenu}
            >
              <X className="h-6 w-6" aria-hidden />
              <span className="sr-only">Cerrar menú</span>
            </button>
          </div>
          <nav className="mt-10 flex flex-col gap-6" aria-label="Móvil">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="mobile-nav-link text-lg font-medium text-soft-black"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-4 pt-10">
            <Link
              href="#"
              className="text-center text-body-lg font-medium text-on-surface-variant"
              onClick={closeMenu}
            >
              Iniciar sesión
            </Link>
            <Button href={`#${sectionIds.demo}`} onClick={closeMenu}>
              Solicitar demo
            </Button>
          </div>
        </div>
      </dialog>
    </header>
  );
}
