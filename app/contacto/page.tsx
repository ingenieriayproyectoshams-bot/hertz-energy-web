import type { Metadata } from "next";
import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export const metadata: Metadata = {
  title: "Contacto | HERTZ ENERGY",
  description:
    "Contáctanos para evaluar tu proyecto de energía solar, ingeniería eléctrica o sistemas hidráulicos en David, Chiriquí, Panamá.",
};

const inputClass =
  "w-full rounded-lg border border-hertz-steel bg-white px-4 py-3 text-sm text-hertz-text placeholder:text-hertz-muted focus:border-hertz-blue focus:outline-none focus:ring-1 focus:ring-hertz-blue transition-colors duration-200";

export default function ContactoPage() {
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
            Contacto
          </h1>
          <p className="mt-4 max-w-xl text-lg leading-8 text-white/70">
            Estamos disponibles para evaluar tu proyecto en David y toda la
            provincia de Chiriquí.
          </p>
          <div className="mt-8 h-px w-16 bg-hertz-yellow/50" />
        </div>
      </section>

      {/* ── Contenido principal ────────────────────────────── */}
      <section className="bg-white px-6 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">

            {/* ─ Columna izquierda: Información de contacto ─ */}
            <div>
              <h2 className="mb-10 text-2xl font-bold tracking-tight text-hertz-text">
                Información de contacto
              </h2>

              {/* Ítems de contacto */}
              <div className="flex flex-col gap-7 mb-12">

                {/* Ubicación */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hertz-blue/10">
                    <svg className="h-5 w-5 text-hertz-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-hertz-muted">
                      Ubicación
                    </p>
                    <p className="text-sm font-medium text-hertz-text">
                      David, Chiriquí, Panamá
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-whatsapp/10">
                    <svg className="h-5 w-5 text-whatsapp" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-hertz-muted">
                      WhatsApp
                    </p>
                    <WhatsAppLink
                      href={whatsappUrl}
                      location="contact_page"
                      className="text-sm font-medium text-hertz-text hover:text-whatsapp transition-colors"
                    >
                      +507 6349-2276
                    </WhatsAppLink>
                  </div>
                </div>

                {/* Horario */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hertz-blue/10">
                    <svg className="h-5 w-5 text-hertz-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <circle cx="12" cy="12" r="10" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-hertz-muted">
                      Horario
                    </p>
                    <p className="text-sm font-medium text-hertz-text">
                      Todos los días · 8:00 am – 8:00 pm
                    </p>
                  </div>
                </div>

                {/* Correo */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-hertz-blue/10">
                    <svg className="h-5 w-5 text-hertz-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-0.5 text-xs font-semibold uppercase tracking-widest text-hertz-muted">
                      Correo
                    </p>
                    <a
                      href="mailto:ingenieriayproyectos.hams@gmail.com"
                      className="text-sm font-medium text-hertz-text hover:text-hertz-blue transition-colors"
                    >
                      ingenieriayproyectos.hams@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Tarjeta CTA WhatsApp */}
              <div className="rounded-2xl bg-hertz-navy p-8">
                <p className="mb-1.5 text-sm font-semibold text-hertz-yellow">
                  ¿Prefieres contacto directo?
                </p>
                <p className="mb-6 text-sm leading-7 text-white/70">
                  Escríbenos por WhatsApp y recibirás respuesta del equipo
                  técnico de HERTZ ENERGY sin esperas ni formularios.
                </p>
                <WhatsAppLink
                  href={whatsappUrl}
                  location="contact_page"
                  className="inline-flex items-center gap-2 rounded-full bg-hertz-yellow px-6 py-3 text-sm font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
                >
                  Abrir WhatsApp
                </WhatsAppLink>
              </div>
            </div>

            {/* ─ Columna derecha: Formulario visual ─────────── */}
            <div>
              <h2 className="mb-10 text-2xl font-bold tracking-tight text-hertz-text">
                Envíanos un mensaje
              </h2>

              <form className="flex flex-col gap-5" noValidate>

                {/* Nombre + Empresa */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="nombre"
                      className="mb-1.5 block text-sm font-medium text-hertz-text"
                    >
                      Nombre <span className="text-hertz-yellow" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      placeholder="Tu nombre completo"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="empresa"
                      className="mb-1.5 block text-sm font-medium text-hertz-text"
                    >
                      Empresa
                    </label>
                    <input
                      type="text"
                      id="empresa"
                      name="empresa"
                      placeholder="Nombre de tu empresa"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Teléfono + Correo */}
                <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="telefono"
                      className="mb-1.5 block text-sm font-medium text-hertz-text"
                    >
                      Teléfono <span className="text-hertz-yellow" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      placeholder="+507 6000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="correo"
                      className="mb-1.5 block text-sm font-medium text-hertz-text"
                    >
                      Correo <span className="text-hertz-yellow" aria-hidden="true">*</span>
                    </label>
                    <input
                      type="email"
                      id="correo"
                      name="correo"
                      placeholder="tu@empresa.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label
                    htmlFor="mensaje"
                    className="mb-1.5 block text-sm font-medium text-hertz-text"
                  >
                    Mensaje <span className="text-hertz-yellow" aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows={5}
                    placeholder="Describe brevemente tu proyecto o consulta…"
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Botón + nota */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center rounded-full bg-hertz-navy px-8 py-3.5 text-sm font-semibold text-white hover:bg-hertz-blue transition-colors duration-200"
                  >
                    Enviar mensaje
                  </button>
                  <p className="text-xs text-hertz-muted">
                    <span className="text-hertz-yellow">*</span> Campos requeridos
                  </p>
                </div>
              </form>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
