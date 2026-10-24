import type { Tag, MenuItem, Category, Business } from "./types";

/** Etiquetas disponibles para los productos del menú */
export const TAG_META: Record<
  Tag,
  { label: string; emoji: string }
> = {
  vegetariano: { label: "Vegetariano", emoji: "🥬" },
  picante: { label: "Picante", emoji: "🌶️" },
  nuevo: { label: "Nuevo", emoji: "✨" },
};

/** Opciones de etiquetas para formularios */
export const TAG_OPTIONS = (
  Object.keys(TAG_META) as Tag[]
).map((id) => ({
  id,
  label: TAG_META[id].label,
  emoji: TAG_META[id].emoji,
}));

/** Metadatos para la presentación de los productos */
export const MENU_ITEM_META = {
  defaultEmoji: "🍽️",
  currency: "COP",
  locale: "es-CO",
} as const;

/** Configuración de las categorías del menú */
export const MENU_CONFIG = {
  emptyMessage: "No hay productos disponibles en esta categoría.",
  searchPlaceholder: "Buscar platos y bebidas...",
} as const;

/** Datos de presentación del establecimiento */
export const BUSINESS_CONFIG: Business = {
  name: "",
  tagline: "",
  hours: "",
  note: "",
};

/** Tipos principales del menú */
export type { Tag, MenuItem, Category, Business };

export const THEME_KEY = "satcore-comandas-theme";

/** Reexportación de estilos compartidos */
export { ui } from "./ui";
