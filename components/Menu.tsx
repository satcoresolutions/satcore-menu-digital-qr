
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { business, categories } from "@/data/menu";
import type { MenuItem } from "@/data/types";
import Dish from "./Dish";
import DishSheet from "./DishSheet";
import QRSheet from "./QRSheet";

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
          `${item.name} ${item.desc}`.toLowerCase().includes(q)
        ),
      }))
      .filter((category) => category.items.length > 0);
  }, [active, q]);

  return (
    <div className="min-h-dvh bg-background text-foreground">
      {/* Encabezado único */}
      <header className="sticky top-0 z-40 border-b border-line bg-background shadow-lg shadow-black/10">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          {/* Identidad SatCore */}
          <div className="flex items-center justify-between gap-4 border-b border-line py-3">
            <div className="flex min-w-0 items-center gap-3">
              <Image
                src="/logo.png"
                alt="SatCore Solutions"
                width={120}
                height={39}
                priority
                className="h-auto w-24 shrink-0 object-contain sm:w-28"
              />

              <div className="hidden min-w-0 border-l border-line pl-3 sm:block">
                <p className="max-w-64 text-xs leading-relaxed text-muted">
                  Soluciones digitales seguras, accesibles y funcionales para
                  todos.
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowQR(true)}
              aria-label="Mostrar código QR"
              className="flex size-10 shrink-0 items-center justify-center rounded-xl border border-brand/60 bg-brand text-foreground transition-colors hover:border-accent/60 hover:bg-brand-hover focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
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

          {/* Información del restaurante */}
          <div className="py-4 sm:py-5">
            <div className="min-w-0">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-[0.22em] text-accent">
                Descubre nuestra carta
              </p>

              <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
                {business.name}
              </h1>

              <p className="mt-1 text-sm leading-relaxed text-muted">
                {business.tagline}
              </p>
            </div>

            {/* Horarios */}
            <div className="mt-3 flex items-center gap-2 text-xs text-muted sm:text-sm">
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 text-accent"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>

              <span>{business.hours}</span>
            </div>

            {/* Buscador */}
            <label className="mt-4 flex items-center gap-3 rounded-xl border border-line bg-surface px-4 transition-colors focus-within:border-accent/60">
              <svg
                viewBox="0 0 24 24"
                width="19"
                height="19"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                className="shrink-0 text-muted"
                aria-hidden="true"
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
                className="min-w-0 flex-1 bg-transparent py-3 text-sm text-foreground outline-none placeholder:text-muted"
              />

              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  aria-label="Limpiar búsqueda"
                  className="text-xs font-semibold text-accent transition-opacity hover:opacity-75"
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
                      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${isActive
                          ? "border-accent bg-accent text-background"
                          : "border-line bg-surface text-muted hover:border-accent/50 hover:text-foreground"
                        }`}
                    >
                      {category.name}
                    </button>
                  );
                })}
              </nav>
            )}
          </div>
        </div>
      </header>

      {/* Productos */}
      <main className="mx-auto min-h-[50vh] max-w-5xl px-4 pb-10 pt-2 sm:px-6 lg:px-8">
        {sections.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-lg font-bold text-foreground">
              No encontramos ese producto
            </p>

            <p className="mt-2 text-sm text-muted">
              Prueba con otra palabra, por ejemplo «pollo» o «jugo».
            </p>

            <button
              type="button"
              onClick={() => setQuery("")}
              className="mt-4 rounded-xl border border-line px-4 py-2 text-sm font-semibold text-accent transition-colors hover:bg-surface"
            >
              Ver menú completo
            </button>
          </div>
        )}

        {sections.map((category) => (
          <section
            key={category.id}
            aria-labelledby={`h-${category.id}`}
          >
            <div className="mb-3 mt-6 flex items-center gap-3">
              <span className="h-6 w-1 rounded-full bg-accent" />

              <h2
                id={`h-${category.id}`}
                className="text-lg font-bold tracking-tight text-foreground sm:text-xl"
              >
                {category.name}
              </h2>

              <span className="text-xs text-muted">
                {category.items.length} productos
              </span>
            </div>

            <ul className="divide-y divide-line">
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
      </main>

      {/* Pie de página */}
      <footer className="border-t border-line">
        <div className="mx-auto max-w-5xl px-4 py-7 text-center">
          <p className="text-sm text-muted">{business.note}</p>

          <p className="mt-3 text-xs text-muted">
            Menú digital por{" "}
            <strong className="font-semibold text-foreground">
              SatCore Solutions
            </strong>
          </p>
        </div>
      </footer>

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
    </div>
  );
}
