const WHATSAPP_NUMBER = "50760000000";

export const WHATSAPP_MESSAGES = {
  default:   "Hola, me interesa obtener una cotización con HERTZ ENERGY.",
  solar:     "Hola, me interesa una cotización de Energía Solar con HERTZ ENERGY.",
  electrica: "Hola, me interesa una cotización de Ingeniería Eléctrica con HERTZ ENERGY.",
  hidraulica:"Hola, me interesa una cotización de Sistemas Hidráulicos con HERTZ ENERGY.",
} as const;

export type WhatsAppService = keyof typeof WHATSAPP_MESSAGES;

export function buildWhatsAppUrl(service: WhatsAppService = "default"): string {
  const text = encodeURIComponent(WHATSAPP_MESSAGES[service]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
