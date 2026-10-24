/**
 * Configuración central de SEO.
 * Define NEXT_PUBLIC_SITE_URL en producción.
 */
export const SITE = {
  name: "Menú digital con QR",
  brand: "SatCore Solutions",
  description:
    "Consulta platos, bebidas, precios y categorías desde un menú digital adaptable a celulares, tabletas y computadores. Comparte la carta fácilmente mediante un código QR.",
  shortDescription:
    "Menú digital con categorías, buscador de productos y código QR para compartir la carta.",
  url: (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/+$/, ""),
  locale: "es_CO",
  language: "es-CO",
  themeColor: "#132a8e",
  keywords: [
    "menú digital",
    "menú digital con QR",
    "carta digital para restaurantes",
    "código QR para menú",
    "menú para restaurantes",
    "carta de platos y bebidas",
    "menú digital adaptable",
    "buscar platos y bebidas",
    "digitalización de restaurantes",
    "SatCore Solutions",
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  `${SITE.url}${path.startsWith("/") ? path : `/${path}`}`;
