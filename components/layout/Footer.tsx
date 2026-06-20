import Link from "next/link";
import Image from "next/image";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

const services = [
  { href: "/energia-solar",        label: "Energía Solar" },
  { href: "/ingenieria-electrica", label: "Ingeniería Eléctrica" },
  { href: "/sistemas-hidraulicos", label: "Sistemas Hidráulicos" },
];

const company = [
  { href: "/",         label: "Inicio" },
  { href: "/contacto", label: "Contacto" },
  { href: "/recursos", label: "Recursos" },
];

export default function Footer() {
  const whatsappUrl = buildWhatsAppUrl();
  const year = new Date().getFullYear();

  return (
    <footer className="bg-hertz-navy text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 lg:gap-16">

          {/* Brand column */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo-hertz.png"
              alt="HERTZ ENERGY"
              width={130}
              height={33}
              className="h-9 w-auto"
            />
            <p className="text-sm leading-relaxed text-hertz-muted">
              Ingeniería electromecánica especializada en soluciones energéticas e hidráulicas para empresas, comercios e industria en David, Chiriquí.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 rounded-full bg-hertz-yellow px-4 py-2 text-sm font-semibold text-hertz-navy hover:brightness-105 transition-all"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          {/* Services column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-hertz-gray">
              Servicios
            </h3>
            <ul className="flex flex-col gap-3">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-sm text-white/70 hover:text-hertz-yellow transition-colors"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Contact column */}
          <div>
            <h3 className="mb-5 text-xs font-semibold uppercase tracking-widest text-hertz-gray">
              Empresa
            </h3>
            <ul className="flex flex-col gap-3 mb-8">
              {company.map((c) => (
                <li key={c.href}>
                  <Link
                    href={c.href}
                    className="text-sm text-white/70 hover:text-hertz-yellow transition-colors"
                  >
                    {c.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex flex-col gap-2 text-sm text-hertz-muted">
              <span>📍 David, Chiriquí, Panamá</span>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-hertz-yellow transition-colors"
              >
                💬 +507 60 000-000
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 lg:px-8">
          <p className="text-center text-xs text-hertz-muted">
            © {year} HERTZ ENERGY · Todos los derechos reservados · David, Chiriquí, Panamá
          </p>
        </div>
      </div>
    </footer>
  );
}
