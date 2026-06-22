import Link from "next/link";
import { buildWhatsAppUrl, type WhatsAppService } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

const services = [
  {
    key: "solar" as WhatsAppService,
    title: "Energía Solar",
    href: "/energia-solar",
    accentColor: "border-hertz-yellow",
    description:
      "Sistemas fotovoltaicos para residencias, comercios, industrias e instituciones. Diseño técnico, instalación y puesta en marcha.",
    icon: (
      <svg className="h-8 w-8 text-hertz-yellow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <circle cx="12" cy="12" r="4" />
        <path strokeLinecap="round" d="M12 2v2M12 20v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M2 12h2M20 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
    ),
  },
  {
    key: "electrica" as WhatsAppService,
    title: "Ingeniería Eléctrica",
    href: "/ingenieria-electrica",
    accentColor: "border-hertz-blue",
    description:
      "Instalaciones eléctricas industriales y comerciales, aumentos de carga, diseños técnicos y tableros de distribución.",
    icon: (
      <svg className="h-8 w-8 text-hertz-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <polyline strokeLinecap="round" strokeLinejoin="round" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    key: "hidraulica" as WhatsAppService,
    title: "Sistemas Hidráulicos",
    href: "/sistemas-hidraulicos",
    accentColor: "border-hertz-gray",
    description:
      "Sistemas hidroneumáticos, cuartos de bombas y redes de agua para edificaciones, industria y proyectos de envergadura.",
    icon: (
      <svg className="h-8 w-8 text-hertz-gray" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C12 2 4 10 4 14a8 8 0 0016 0C20 10 12 2 12 2z" />
      </svg>
    ),
  },
];

export default function ServicesGrid() {
  return (
    <section id="servicios" className="bg-hertz-bg px-6 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mb-14 max-w-2xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-blue">
            Lo que hacemos
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-hertz-text sm:text-4xl">
            Nuestros Servicios
          </h2>
          <p className="mt-4 text-base leading-7 text-hertz-muted">
            Soluciones de ingeniería especializadas para proyectos que requieren
            precisión técnica, cumplimiento normativo y experiencia comprobada.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => {
            const whatsappUrl = buildWhatsAppUrl(service.key);
            return (
              <div
                key={service.key}
                className={`flex flex-col rounded-xl border-t-4 ${service.accentColor} border border-hertz-steel bg-white p-8 shadow-sm hover:-translate-y-1 transition-transform duration-200`}
              >
                {/* Icon */}
                <div className="mb-6">{service.icon}</div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-semibold text-hertz-text">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="flex-1 text-sm leading-7 text-hertz-muted">
                  {service.description}
                </p>

                {/* Links */}
                <div className="mt-8 flex flex-col gap-3">
                  <WhatsAppLink
                    href={whatsappUrl}
                    location="service_card"
                    service={service.key}
                    className="inline-flex items-center justify-center rounded-full bg-hertz-navy px-5 py-2.5 text-sm font-semibold text-white hover:bg-hertz-blue transition-colors duration-200"
                  >
                    Cotizar este servicio
                  </WhatsAppLink>
                  <Link
                    href={service.href}
                    className="text-center text-sm font-medium text-hertz-blue hover:text-hertz-navy transition-colors"
                  >
                    Más información →
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
