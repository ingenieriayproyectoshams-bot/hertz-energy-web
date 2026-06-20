import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default function HeroSection() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <section className="bg-hertz-navy px-6 py-24 lg:px-8 lg:py-36">
      <div className="mx-auto max-w-5xl">

        {/* Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-hertz-yellow/30 bg-hertz-yellow/10 px-4 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-hertz-yellow" />
          <span className="text-sm font-medium text-hertz-yellow">
            David, Chiriquí · Panamá
          </span>
        </div>

        {/* Headline */}
        <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
          Ingeniería Electromecánica{" "}
          <span className="text-hertz-yellow">para Empresas</span>{" "}
          en David, Chiriquí
        </h1>

        {/* Subheadline */}
        <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
          Especializados en energía solar, instalaciones eléctricas industriales
          y sistemas hidráulicos avanzados. Atendemos proyectos comerciales,
          constructoras e instituciones en Chiriquí, Panamá.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-hertz-yellow px-8 py-3.5 text-base font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
          >
            Cotizar por WhatsApp
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200"
          >
            Conocer servicios
          </a>
        </div>

        {/* Accent */}
        <div className="mt-20 h-px w-24 bg-hertz-yellow/50" />
      </div>
    </section>
  );
}
