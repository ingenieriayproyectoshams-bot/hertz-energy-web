import type { Metadata } from "next";
import ServicePageLayout, {
  type ServicePageData,
} from "@/components/features/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Energía Solar en David, Chiriquí | HERTZ ENERGY",
  description:
    "Diseño, instalación y puesta en marcha de plantas fotovoltaicas para empresas, comercios e instituciones en David, Chiriquí, Panamá.",
};

const data: ServicePageData = {
  badge: "Energía Solar · HERTZ ENERGY",
  titlePrefix: "Sistemas de ",
  titleAccent: "Energía Solar",
  titleSuffix: " para Empresas en David, Chiriquí",
  heroDescription:
    "Diseño, instalación y puesta en marcha de plantas fotovoltaicas para reducir costos energéticos y generar independencia eléctrica en tu empresa, comercio o institución.",
  whatsappKey: "solar",

  resolveItems: [
    {
      title: "Altos costos en la factura eléctrica",
      description:
        "Diseñamos sistemas fotovoltaicos dimensionados a tu consumo real para reducir significativamente el gasto mensual en energía y mejorar la rentabilidad operativa.",
    },
    {
      title: "Dependencia total de la red eléctrica",
      description:
        "Sistemas con y sin respaldo de batería para garantizar continuidad operativa ante cortes del suministro eléctrico y variaciones de voltaje.",
    },
    {
      title: "Metas de sostenibilidad corporativa",
      description:
        "Proyectos solares documentados y certificados que contribuyen al cumplimiento de metas ESG y fortalecen la imagen institucional de tu organización.",
    },
    {
      title: "Falta de asesoría técnica especializada",
      description:
        "Acompañamiento técnico completo desde el diseño hasta la puesta en marcha, incluyendo trámites y coordinación ante entidades regulatorias de Panamá.",
    },
  ],

  targetClients: [
    "Empresas comerciales y de servicios",
    "Plantas industriales y manufactureras",
    "Instituciones educativas",
    "Entidades públicas y hospitales",
    "Hoteles y centros de hospedaje",
    "Constructoras con proyectos sostenibles",
    "Centros comerciales y plazas",
    "Edificios corporativos y de oficinas",
  ],

  benefits: [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Reducción comprobada de costos eléctricos",
      description:
        "Sistemas dimensionados con análisis de consumo real. Ahorro promedio del 50 % al 70 % en la factura eléctrica mensual con retorno de inversión en 5 a 8 años.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Diseño técnico certificado",
      description:
        "Memorias de cálculo, planos eléctricos y documentación técnica para aprobaciones ante la ETESA y otras entidades regulatorias de Panamá.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "Equipos de fabricantes certificados",
      description:
        "Trabajamos con paneles, inversores y baterías de marcas reconocidas para garantizar durabilidad, rendimiento y acceso a garantías de largo plazo.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Instalación y puesta en marcha profesional",
      description:
        "Equipo técnico especializado que ejecuta la instalación bajo normas vigentes y realiza pruebas de rendimiento antes de entregar el sistema.",
    },
  ],

  ctaHeading: "¿Listo para reducir tu factura eléctrica?",
  ctaDescription:
    "Escríbenos por WhatsApp y recibe una evaluación técnica de tu proyecto solar. Atendemos empresas, comercios e instituciones en David y toda la provincia de Chiriquí.",
};

export default function EnergíaSolarPage() {
  return <ServicePageLayout data={data} />;
}
