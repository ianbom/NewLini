export function consultationHref(service?: string, number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER): string {
  const message = service
    ? `Halo LiniWeb, saya ingin konsultasi mengenai pembuatan ${service === "Aplikasi Web Kustom" ? "aplikasi web kustom" : `website ${service}`}.`
    : "Halo LiniWeb, saya ingin konsultasi mengenai kebutuhan website bisnis saya.";
  const destination = number?.trim();
  if (destination && /^[1-9]\d{7,14}$/.test(destination)) return `https://wa.me/${destination}?text=${encodeURIComponent(message)}`;
  return `mailto:mail@liniweb.site?subject=${encodeURIComponent("Konsultasi Website LiniWeb")}&body=${encodeURIComponent(message)}`;
}
