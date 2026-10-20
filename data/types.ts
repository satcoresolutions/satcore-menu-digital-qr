export type Tag = "vegetariano" | "picante" | "nuevo";

export interface MenuItem {
  id: number;
  name: string;
  desc: string;
  price: number;
  emoji: string;
  tags?: Tag[];
}

export interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface Business {
  name: string;
  tagline: string;
  hours: string;
  note: string;
}
