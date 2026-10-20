import type { MenuItem } from "@/data/types";
import { money } from "@/lib";
import Tags from "./Tags";

export default function Dish({ item, onOpen }: { item: MenuItem; onOpen: (item: MenuItem) => void }) {
  return (
    <li>
      <button className="dish" onClick={() => onOpen(item)}>
        <span className="dish-emoji" aria-hidden="true">
          {item.emoji}
        </span>
        <span className="dish-body">
          <span className="dish-name">{item.name}</span>
          <span className="dish-desc">{item.desc}</span>
          <Tags tags={item.tags} />
        </span>
        <span className="dish-price">{money.format(item.price)}</span>
      </button>
    </li>
  );
}
