import { buildWhatsAppUrl } from "@/lib/whatsapp";
import WhatsAppLink from "@/components/ui/WhatsAppLink";

export default function CTABanner() {
  const url = buildWhatsAppUrl();

  return (
    <section className="bg-hertz-navy px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">

        {/* Accent line */}
        <div className="mx-auto mb-8 h-px w-16 bg-hertz-yellow/50" />

        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          ¿Tienes un proyecto en David o Chiriquí?
        </h2>

        <p className="mt-5 text-lg leading-8 text-white/70">
          Escríbenos por WhatsApp y recibe asesoría técnica directa del equipo
          de{" "}
          <span className="font-semibold text-hertz-yellow">HERTZ ENERGY</span>.
          Sin intermediarios, sin esperas.
        </p>

        <div className="mt-10">
          <WhatsAppLink
            href={url}
            location="cta_banner"
            className="inline-flex items-center justify-center rounded-full bg-hertz-yellow px-10 py-4 text-base font-semibold text-hertz-navy hover:brightness-105 transition-all duration-200"
          >
            Cotizar ahora por WhatsApp
          </WhatsAppLink>
        </div>

        {/* Accent line */}
        <div className="mx-auto mt-12 h-px w-16 bg-hertz-yellow/50" />
      </div>
    </section>
  );
}
