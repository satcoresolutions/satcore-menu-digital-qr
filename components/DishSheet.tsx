"use client";

import type { MenuItem } from "@/data/types";
import { money } from "@/lib";
import Modal from "./Modal";
import Tags from "./Tags";

export default function DishSheet({ item, onClose }: { item: MenuItem; onClose: () => void }) {
  return (
    <Modal title={item.name} onClose={onClose}>
      <div className="detail-emoji" aria-hidden="true">
        {item.emoji}
      </div>
      <h2 className="sheet-title">{item.name}</h2>
      <p className="sheet-text">{item.desc}</p>
      <Tags tags={item.tags} />
      <p className="detail-price">{money.format(item.price)}</p>
    </Modal>
  );
}
