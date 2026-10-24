"use client";

import { useMemo, useState } from "react";

import { categories } from "@/lib/menu";
import type { MenuItem } from "@/lib/types";

import Dish from "./Dish";
import DishSheet from "./DishSheet";
import QRSheet from "./QRSheet";
import { ui } from "../lib/ui";

export default function Menu() {
  const [active, setActive] = useState<string>(categories[0].id);
  const [query, setQuery] = useState("");
  const [dish, setDish] = useState<MenuItem | null>(null);
  const [showQR, setShowQR] = useState(false);

  const q = query.trim().toLowerCase();

  const sections = useMemo(() => {
    if (!q) {
      return categories.filter((category) => category.id === active);
    }

    return categories
      .map((category) => ({
        ...category,
        items: category.items.filter((item) =>
          `${item.name} ${item.desc}`.toLowerCase().includes(q),
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [active, q]);

  return (
    <section
      className="w-full"
      aria-label="Menú digital"
    >
      {/* Acciones del menú */}
      <div className="mb-5 flex justify-end">
        <button
          type="button"
          onClick={() => setShowQR(true)}
          aria-label="Mostrar código QR"
          className="flex size-10 items-center justify-center rounded-xl border border-primary bg-primary text-white transition-colors hover:brightness-125 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <svg
            viewBox="0 0 24 24"
            width="21"
            height="21"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="3" y="3" width="7" height="7" rx="1" />
            <rect x="14" y="3" width="7" height="7" rx="1" />
            <rect x="3" y="14" width="7" height="7" rx="1" />
            <path d="M14 14h3v3h-3zM20 14v.01M14 20h.01M17 20h4v-3" />
          </svg>
        </button>
      </div>

      {/* Buscador */}
      <label className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 transition-colors focus-within:border-primary">
        <svg
          viewBox="0 0 24 24"
          width="19"
          height="19"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          aria-hidden="true"
          className="shrink-0 text-text-muted"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5" />
        </svg>

        <span className="sr-only">Buscar en el menú</span>

        <input
          type="search"
          placeholder="Buscar platos y bebidas..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-text-muted"
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            aria-label="Limpiar búsqueda"
            className="text-xs font-semibold text-text-primary transition-opacity hover:opacity-75"
          >
            Limpiar
          </button>
        )}
      </label>

      {/* Categorías */}
      {!q && (
        <nav
          className="-mx-4 mt-4 flex gap-2 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0"
          aria-label="Categorías del menú"
        >
          {categories.map((category) => {
            const isActive = category.id === active;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActive(category.id)}
                className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-surface text-text-muted hover:border-border-strong hover:text-foreground"
                }`}
              >
                {category.name}
              </button>
            );
          })}
        </nav>
      )}

      {/* Productos */}
      <div className="mt-4">
        {sections.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg font-bold text-foreground">
              No encontramos ese producto
            </p>

            <p className="mt-2 text-sm text-text-muted">
              Prueba con otra palabra, por ejemplo «pollo» o «jugo».
            </p>

            <button
              type="button"
              onClick={() => setQuery("")}
              className={`${ui.btn} mt-4 border-primary text-text-primary hover:bg-surface-secondary`}
            >
              Ver menú completo
            </button>
          </div>
        )}

        {sections.map((category) => (
          <section
            key={category.id}
            aria-labelledby={`h-${category.id}`}
            className="mb-6"
          >
            <div className="mb-3 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-primary" />

              <h2
                id={`h-${category.id}`}
                className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
              >
                {category.name}
              </h2>

              <span className="text-xs text-text-muted">
                {category.items.length} productos
              </span>
            </div>

            <ul className="divide-y divide-border">
              {category.items.map((item) => (
                <Dish
                  key={item.id}
                  item={item}
                  onOpen={setDish}
                />
              ))}
            </ul>
          </section>
        ))}
      </div>

      {/* Modales */}
      {dish && (
        <DishSheet
          item={dish}
          onClose={() => setDish(null)}
        />
      )}

      {showQR && (
        <QRSheet onClose={() => setShowQR(false)} />
      )}
    </section>
  );
}