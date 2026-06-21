"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const navLinks = [
  { href: "/",                    label: "Inicio" },
  { href: "/energia-solar",       label: "Energía Solar" },
  { href: "/ingenieria-electrica",label: "Ingeniería Eléctrica" },
  { href: "/sistemas-hidraulicos",label: "Sistemas Hidráulicos" },
  { href: "/contacto",            label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <header className="sticky top-0 z-50 bg-hertz-navy shadow-md">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          className="flex-shrink-0 inline-flex items-center rounded-lg bg-white px-5 py-1"
        >
          <Image
            src="/logo-hertz.png"
            alt="HERTZ ENERGY"
            width={180}
            height={45}
            priority
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop links */}
        <ul className="hidden xl:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-white/75 hover:text-hertz-yellow transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:inline-flex items-center gap-2 rounded-full bg-hertz-yellow px-5 py-2 text-sm font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
        >
          Cotizar por WhatsApp
        </a>

        {/* Tablet links — abbreviated */}
        <ul className="hidden lg:flex xl:hidden items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs font-medium text-white/75 hover:text-hertz-yellow transition-colors duration-200"
              >
                {link.href === "/ingenieria-electrica" ? "Ing. Eléctrica" :
                 link.href === "/sistemas-hidraulicos" ? "Sist. Hidráulicos" :
                 link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex xl:hidden items-center gap-2 rounded-full bg-hertz-yellow px-4 py-2 text-xs font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
        >
          Cotizar
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          className="lg:hidden rounded-md p-2 text-white hover:text-hertz-yellow transition-colors"
        >
          {open ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden border-t border-white/10 bg-hertz-navy px-6 pb-6">
          <ul className="flex flex-col gap-1 pt-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-white/75 hover:bg-white/5 hover:text-hertz-yellow transition-colors"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 flex items-center justify-center rounded-full bg-hertz-yellow px-5 py-3 text-sm font-semibold text-hertz-navy"
          >
            Cotizar por WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
