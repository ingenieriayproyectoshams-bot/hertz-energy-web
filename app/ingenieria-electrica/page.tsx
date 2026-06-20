import type { Metadata } from "next";
import ServicePageLayout, {
  type ServicePageData,
} from "@/components/features/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Ingeniería Eléctrica en David, Chiriquí | HERTZ ENERGY",
  description:
    "Instalaciones eléctricas industriales y comerciales, aumentos de carga, diseños técnicos y tableros de distribución en David, Chiriquí, Panamá.",
};

const data: ServicePageData = {
  badge: "Ingeniería Eléctrica · HERTZ ENERGY",
  titlePrefix: "Instalaciones Eléctricas ",
  titleAccent: "Industriales y Comerciales",
  titleSuffix: " en Chiriquí",
  heroDescription:
    "Proyectos de ingeniería eléctrica de alta complejidad: tableros de distribución, aumentos de carga, diseños técnicos certificados e instalaciones para empresas que exigen cumplimiento normativo y calidad de primer nivel.",
  whatsappKey: "electrica",

  resolveItems: [
    {
      title: "Instalaciones eléctricas deficientes o fuera de norma",
      description:
        "Diagnóstico, diseño y ejecución de instalaciones eléctricas seguras que cumplen las normativas vigentes del código eléctrico nacional y los requerimientos de la ETESA.",
    },
    {
      title: "Necesidad de aumentar la capacidad eléctrica",
      description:
        "Ampliaciones de carga para empresas en crecimiento, incorporación de nuevas maquinarias o expansión de instalaciones comerciales e industriales en Chiriquí.",
    },
    {
      title: "Tableros de distribución obsoletos o inseguros",
      description:
        "Modernización e instalación de tableros de distribución industrial y comercial con equipos de primera línea: Siemens, Eaton y Schneider Electric.",
    },
    {
      title: "Diseños y planos técnicos para construcción",
      description:
        "Elaboración de diseños eléctricos, planos y memorias de cálculo selladas para permisos de construcción, licitaciones y trámites municipales.",
    },
  ],

  targetClients: [
    "Empresas en expansión o remodelación",
    "Plantas industriales y de manufactura",
    "Constructoras y desarrolladores",
    "Centros comerciales y edificios",
    "Hospitales y clínicas",
    "Instituciones educativas y públicas",
    "Hoteles y proyectos de hospedaje",
    "Bodegas y centros de distribución",
  ],

  benefits: [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Diseños técnicos sellados y certificados",
      description:
        "Planos eléctricos elaborados por ingenieros con licencia, listos para tramitación ante entidades regulatorias, municipales y de construcción en Panamá.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Cumplimiento normativo garantizado",
      description:
        "Todos los proyectos se ejecutan conforme al Código Eléctrico Nacional (NEC) y las regulaciones vigentes de la ETESA y autoridades de Chiriquí.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Materiales de primera línea",
      description:
        "Utilizamos exclusivamente marcas reconocidas en ingeniería eléctrica industrial: Siemens, Eaton, Schneider Electric, Leviton y Hubbell.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
      title: "Supervisión técnica en campo",
      description:
        "Presencia del equipo de ingeniería durante la instalación para asegurar calidad de ejecución, cumplimiento de planos y tiempos de entrega comprometidos.",
    },
  ],

  ctaHeading: "¿Necesitas un proyecto eléctrico en Chiriquí?",
  ctaDescription:
    "Contáctanos por WhatsApp y un ingeniero de HERTZ ENERGY evaluará tu proyecto. Atendemos instalaciones eléctricas comerciales, industriales e institucionales en David y Chiriquí.",
};

export default function IngenieríaEléctricaPage() {
  return <ServicePageLayout data={data} />;
}
