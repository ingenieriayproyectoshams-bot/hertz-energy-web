declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackWhatsAppClick(location: string, service = "general"): void {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", { location, service });
  }
}
