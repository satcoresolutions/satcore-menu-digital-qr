"use client";

import type { MenuItem } from "@/lib/types";
import { money } from "@/lib/lib";

import Modal from "./Modal";
import Tags from "./Tags";

export default function DishSheet({
  item,
  onClose,
}: {
  item: MenuItem;
  onClose: () => void;
}) {
  return (
    <Modal title={item.name} onClose={onClose}>
      {/* Emoji del plato */}
      <div
        aria-hidden="true"
        className="mx-auto flex h-24 w-24 items-center justify-center rounded-2xl border border-border bg-surface-secondary text-5xl sm:h-28 sm:w-28 sm:text-6xl"
      >
        {item.emoji}
      </div>

      {/* Información del plato */}
      <h2 className="mt-5 text-center text-xl font-bold tracking-tight text-foreground sm:text-2xl">
        {item.name}
      </h2>

      <p className="mx-auto mt-3 max-w-lg text-center text-sm leading-6 text-text-muted sm:text-base">
        {item.desc}
      </p>

      {/* Etiquetas */}
      <div className="mt-4 flex justify-center">
        <Tags tags={item.tags} />
      </div>

      {/* Precio */}
      <p className="mt-6 text-center text-2xl font-bold tabular-nums text-text-primary sm:text-3xl">
        {money.format(item.price)}
      </p>
    </Modal>
  );
}
