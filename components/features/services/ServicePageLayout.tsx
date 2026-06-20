import type { ReactNode } from "react";
import { buildWhatsAppUrl, type WhatsAppService } from "@/lib/whatsapp";

export interface ResolveItem {
  title: string;
  description: string;
}

export interface BenefitItem {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ServicePageData {
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  titleSuffix: string;
  heroDescription: string;
  whatsappKey: WhatsAppService;
  resolveItems: ResolveItem[];
  targetClients: string[];
  benefits: BenefitItem[];
  ctaHeading: string;
  ctaDescription: string;
}

export default function ServicePageLayout({ data }: { data: ServicePageData }) {
  const whatsappUrl = buildWhatsAppUrl(data.whatsappKey);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="bg-hertz-navy px-6 py-24 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-hertz-yellow/30 bg-hertz-yellow/10 px-4 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-hertz-yellow" />
            <span className="text-sm font-medium text-hertz-yellow">{data.badge}</span>
          </div>

          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            {data.titlePrefix}
            <span className="text-hertz-yellow">{data.titleAccent}</span>
            {data.titleSuffix}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
            {data.heroDescription}
          </p>

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
              href="#que-resolvemos"
              className="inline-flex items-center justify-center rounded-full border border-white/30 px-8 py-3.5 text-base font-medium text-white hover:border-white/60 hover:bg-white/5 transition-all duration-200"
            >
              Ver detalles
            </a>
          </div>

          <div className="mt-16 h-px w-24 bg-hertz-yellow/50" />
        </div>
      </section>

      {/* ── Qué resolvemos ───────────────────────────────── */}
      <section id="que-resolvemos" className="bg-hertz-bg px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-blue">
              Problemáticas que abordamos
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-hertz-text sm:text-4xl">
              ¿Qué resolvemos?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {data.resolveItems.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-6 rounded-xl border border-hertz-steel bg-white p-8"
              >
                <div className="flex-shrink-0 text-3xl font-bold leading-none text-hertz-yellow/40 select-none">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-hertz-text">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-7 text-hertz-muted">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── A quién va dirigido ──────────────────────────── */}
      <section className="bg-white px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-blue">
                Clientes objetivo
              </p>
              <h2 className="text-3xl font-bold tracking-tight text-hertz-text sm:text-4xl">
                ¿A quién va dirigido?
              </h2>
              <p className="mt-4 text-base leading-7 text-hertz-muted">
                Nuestros servicios están diseñados para organizaciones que
                exigen precisión técnica, cumplimiento normativo y resultados
                comprobables. No atendemos servicios de mantenimiento
                doméstico ni reparaciones menores.
              </p>
            </div>

            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {data.targetClients.map((client) => (
                <li key={client} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-hertz-yellow/20">
                    <svg
                      className="h-3 w-3 text-hertz-blue"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                      aria-hidden="true"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-sm font-medium text-hertz-text">{client}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ── Beneficios ───────────────────────────────────── */}
      <section className="bg-hertz-bg px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-14 max-w-2xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-hertz-blue">
              Lo que obtienes
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-hertz-text sm:text-4xl">
              Beneficios clave
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            {data.benefits.map((benefit) => (
              <div key={benefit.title} className="flex gap-5">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-hertz-blue">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-base font-semibold text-hertz-text">
                    {benefit.title}
                  </h3>
                  <p className="text-sm leading-7 text-hertz-muted">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="bg-hertz-navy px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-8 h-px w-16 bg-hertz-yellow/50" />

          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            {data.ctaHeading}
          </h2>

          <p className="mt-5 text-lg leading-8 text-white/70">
            {data.ctaDescription}
          </p>

          <div className="mt-10">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-hertz-yellow px-10 py-4 text-base font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
            >
              Cotizar por WhatsApp
            </a>
          </div>

          <div className="mx-auto mt-12 h-px w-16 bg-hertz-yellow/50" />
        </div>
      </section>
    </>
  );
}
