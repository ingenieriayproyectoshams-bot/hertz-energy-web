import type { Metadata } from "next";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: "Recursos | HERTZ ENERGY",
  description:
    "Recursos técnicos especializados en energía solar, ingeniería eléctrica y sistemas hidráulicos. Próximamente en HERTZ ENERGY.",
};

export default function RecursosPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <>
      {/* ── Hero ───────────────────────────────────────────── */}
      <section className="bg-hertz-navy px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-yellow/70">
            HERTZ ENERGY
          </p>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Recursos
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
            Material técnico especializado para empresas, profesionales e
            instituciones en Chiriquí.
          </p>
          <div className="mt-8 h-px w-16 bg-hertz-yellow/50" />
        </div>
      </section>

      {/* ── Próximamente ───────────────────────────────────── */}
      <section className="bg-hertz-bg px-6 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-xl text-center">

          {/* Ícono */}
          <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-hertz-blue/10">
            <svg
              className="h-10 w-10 text-hertz-blue"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>

          {/* Mensaje principal */}
          <h2 className="mb-5 text-2xl font-bold tracking-tight text-hertz-text sm:text-3xl">
            Contenido técnico y recursos especializados próximamente.
          </h2>

          <p className="mb-10 text-base leading-7 text-hertz-muted">
            Estamos preparando guías técnicas, especificaciones de equipos y
            material educativo sobre energía solar, ingeniería eléctrica y
            sistemas hidráulicos para empresas, profesionales e instituciones
            en Chiriquí, Panamá.
          </p>

          {/* Divisor */}
          <div className="mx-auto mb-10 h-px w-12 bg-hertz-yellow/40" />

          {/* CTA */}
          <p className="mb-6 text-sm text-hertz-muted">
            Mientras tanto, puedes consultarnos directamente por WhatsApp.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-hertz-navy px-8 py-3.5 text-sm font-semibold text-white hover:bg-hertz-blue transition-colors duration-200"
          >
            Consultar por WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
