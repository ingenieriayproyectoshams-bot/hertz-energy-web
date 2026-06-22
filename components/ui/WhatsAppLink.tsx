"use client";

import type { ReactNode } from "react";
import { trackWhatsAppClick } from "@/lib/analytics";

interface Props {
  href: string;
  location: string;
  service?: string;
  className?: string;
  "aria-label"?: string;
  children: ReactNode;
}

export default function WhatsAppLink({
  href,
  location,
  service = "general",
  className,
  "aria-label": ariaLabel,
  children,
}: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={ariaLabel}
      onClick={() => trackWhatsAppClick(location, service)}
    >
      {children}
    </a>
  );
}
