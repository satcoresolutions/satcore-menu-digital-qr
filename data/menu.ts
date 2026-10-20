import type { Business, Category } from "./types";

// ✏️ Edita aquí el nombre, datos y platos de tu negocio. No hace falta tocar nada más.
export const business: Business = {
  name: "Sabor & Fuego",
  tagline: "Cocina de parrilla y cosas ricas para compartir",
  hours: "Todos los días · 12:00 m. a 10:00 p. m.",
  note: "Los precios incluyen IVA. Propina voluntaria del 10 %.",
};

// tags disponibles: "vegetariano" | "picante" | "nuevo"
export const categories: Category[] = [
  {
    id: "entradas",
    name: "Entradas",
    items: [
      { id: 1, name: "Empanadas de carne", desc: "Seis empanadas crocantes con ají de la casa.", price: 18000, emoji: "🥟" },
      { id: 2, name: "Nachos gratinados", desc: "Queso fundido, guacamole, pico de gallo y frijoles.", price: 24000, emoji: "🧀", tags: ["vegetariano"] },
      { id: 3, name: "Alitas BBQ", desc: "Ocho alitas bañadas en salsa ahumada.", price: 26000, emoji: "🍗", tags: ["picante"] },
    ],
  },
  {
    id: "fuertes",
    name: "Platos fuertes",
    items: [
      { id: 4, name: "Churrasco 300 g", desc: "Con papas criollas, ensalada y chimichurri.", price: 48000, emoji: "🥩" },
      { id: 5, name: "Bandeja de la casa", desc: "Carne, chicharrón, arroz, frijol, huevo, plátano y arepa.", price: 42000, emoji: "🍛", tags: ["nuevo"] },
      { id: 6, name: "Pasta al pesto", desc: "Fettuccine con pesto de albahaca y queso parmesano.", price: 34000, emoji: "🍝", tags: ["vegetariano"] },
      { id: 7, name: "Pollo a la plancha", desc: "Pechuga jugosa con puré y vegetales salteados.", price: 36000, emoji: "🍽️" },
    ],
  },
  {
    id: "hamburguesas",
    name: "Hamburguesas",
    items: [
      { id: 8, name: "Clásica", desc: "Carne 150 g, queso cheddar, lechuga, tomate y papas.", price: 29000, emoji: "🍔" },
      { id: 9, name: "Fuego", desc: "Doble carne, jalapeños, queso pepper jack y salsa picante.", price: 36000, emoji: "🌶️", tags: ["picante", "nuevo"] },
      { id: 10, name: "Veggie", desc: "Medallón de garbanzo y quinua con aguacate.", price: 28000, emoji: "🥬", tags: ["vegetariano"] },
    ],
  },
  {
    id: "bebidas",
    name: "Bebidas",
    items: [
      { id: 11, name: "Limonada de coco", desc: "Cremosa y bien fría.", price: 12000, emoji: "🥥", tags: ["vegetariano"] },
      { id: 12, name: "Jugo natural", desc: "Mango, mora, lulo o maracuyá, en agua o en leche.", price: 9000, emoji: "🧃", tags: ["vegetariano"] },
      { id: 13, name: "Cerveza artesanal", desc: "Pregunta por la cerveza del mes.", price: 16000, emoji: "🍺" },
      { id: 14, name: "Gaseosa", desc: "Botella personal 350 ml.", price: 6000, emoji: "🥤", tags: ["vegetariano"] },
    ],
  },
  {
    id: "postres",
    name: "Postres",
    items: [
      { id: 15, name: "Brownie con helado", desc: "Brownie tibio, helado de vainilla y salsa de chocolate.", price: 17000, emoji: "🍫", tags: ["vegetariano"] },
      { id: 16, name: "Cheesecake de maracuyá", desc: "Base de galleta y cobertura de fruta fresca.", price: 15000, emoji: "🍰", tags: ["vegetariano"] },
    ],
  },
];
