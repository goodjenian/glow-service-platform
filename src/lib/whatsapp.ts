const WHATSAPP_NUMBER = "5511936206291";

export function getWhatsAppUrl(service?: string): string {
  const message = service
    ? `Hello, I think you can help me with ${service}`
    : "Hello, I think you can help me with [service]";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}

export function getWhatsAppUrlPt(service?: string): string {
  const message = service
    ? `Olá, acredito que vocês podem me ajudar com ${service}`
    : "Olá, acredito que vocês podem me ajudar com [serviço]";
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
}
