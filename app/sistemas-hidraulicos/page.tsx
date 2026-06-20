import type { Metadata } from "next";
import ServicePageLayout, {
  type ServicePageData,
} from "@/components/features/services/ServicePageLayout";

export const metadata: Metadata = {
  title: "Sistemas Hidráulicos en David, Chiriquí | HERTZ ENERGY",
  description:
    "Diseño e instalación de sistemas hidroneumáticos, cuartos de bombas y redes de agua para edificaciones e industria en David, Chiriquí, Panamá.",
};

const data: ServicePageData = {
  badge: "Sistemas Hidráulicos · HERTZ ENERGY",
  titlePrefix: "Sistemas Hidráulicos ",
  titleAccent: "para Edificaciones e Industria",
  titleSuffix: " en Chiriquí",
  heroDescription:
    "Diseño e instalación de sistemas hidroneumáticos, cuartos de bombas y redes de agua para proyectos que demandan presión constante, caudal adecuado y confiabilidad operativa.",
  whatsappKey: "hidraulica",

  resolveItems: [
    {
      title: "Presión de agua insuficiente en edificios o comercios",
      description:
        "Diseño e instalación de sistemas hidroneumáticos que garantizan presión constante y uniforme en todos los puntos de suministro, sin importar la altura o demanda.",
    },
    {
      title: "Cuartos de bombas ineficientes o con fallas",
      description:
        "Modernización e instalación de cuartos de bombas con equipos de alta eficiencia energética, control automático y diseño técnico para operación continua.",
    },
    {
      title: "Redes hidráulicas para nuevas construcciones",
      description:
        "Diseño y construcción de redes de agua potable, pluvial y contra incendios para proyectos comerciales, institucionales y residenciales de alto valor en Chiriquí.",
    },
    {
      title: "Procesos industriales que requieren agua a presión",
      description:
        "Soluciones de presurización y distribución de agua para plantas industriales, agroindustriales y comerciales con requerimientos específicos de caudal y presión.",
    },
  ],

  targetClients: [
    "Constructoras y desarrolladores",
    "Hoteles y centros de hospedaje",
    "Hospitales y clínicas",
    "Centros comerciales y plazas",
    "Plantas industriales y agroindustriales",
    "Edificios corporativos y de oficinas",
    "Instituciones educativas",
    "Bodegas y centros de distribución",
  ],

  benefits: [
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Diseño técnico con cálculo hidráulico",
      description:
        "Análisis de demanda, cálculo de caudal y presión, selección de equipos y elaboración de planos técnicos para cada proyecto y su uso específico.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <polyline strokeLinecap="round" strokeLinejoin="round" points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
        </svg>
      ),
      title: "Equipos de alta eficiencia energética",
      description:
        "Bombas y sistemas hidroneumáticos de bajo consumo eléctrico que reducen costos operativos a largo plazo y cumplen estándares de eficiencia modernos.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
        </svg>
      ),
      title: "Cumplimiento de normas sanitarias y de construcción",
      description:
        "Proyectos ejecutados conforme a las normas de construcción, salud y saneamiento vigentes en Panamá, con documentación técnica lista para permisos.",
    },
    {
      icon: (
        <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: "Mantenimiento preventivo disponible",
      description:
        "Servicio de mantenimiento programado para garantizar la operación continua y prolongar la vida útil de los sistemas instalados por HERTZ ENERGY.",
    },
  ],

  ctaHeading: "¿Tienes un proyecto hidráulico en Chiriquí?",
  ctaDescription:
    "Escríbenos por WhatsApp y el equipo técnico de HERTZ ENERGY evaluará tu necesidad. Atendemos edificaciones, industria e instituciones en David y toda la provincia.",
};

export default function SistemasHidráulicosPage() {
  return <ServicePageLayout data={data} />;
}
