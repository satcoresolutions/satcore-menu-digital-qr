import type { MenuItem } from "@/lib/types";
import { money } from "@/lib/lib";

import Tags from "./Tags";

export default function Dish({
  item,
  onOpen,
}: {
  item: MenuItem;
  onOpen: (item: MenuItem) => void;
}) {
  return (
    <li className="min-w-0 list-none">
      <button
        type="button"
        onClick={() => onOpen(item)}
        className="flex w-full items-center gap-3 rounded-xl border border-border bg-surface p-3 text-left transition-colors hover:border-border-strong hover:bg-surface-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:gap-4 sm:p-4"
      >
        {/* Emoji del plato */}
        <span
          aria-hidden="true"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-surface-secondary text-3xl sm:h-20 sm:w-20"
        >
          {item.emoji}
        </span>

        {/* Información del plato */}
        <span className="flex min-w-0 flex-1 flex-col items-start gap-1">
          <span className="w-full truncate text-sm font-bold text-foreground sm:text-base">
            {item.name}
          </span>

          <span className="line-clamp-2 w-full text-xs leading-relaxed text-text-muted sm:text-sm">
            {item.desc}
          </span>

          <span className="mt-1">
            <Tags tags={item.tags} />
          </span>
        </span>

        {/* Precio */}
        <span className="shrink-0 text-sm font-bold tabular-nums text-text-primary sm:text-base">
          {money.format(item.price)}
        </span>
      </button>
    </li>
  );
}
