import type { Tag } from "@/data/types";

const TAG_LABEL: Record<Tag, string> = {
  vegetariano: "Vegetariano",
  picante: "Picante",
  nuevo: "Nuevo",
};

export default function Tags({ tags = [] }: { tags?: Tag[] }) {
  if (!tags.length) return null;
  return (
    <span className="tags">
      {tags.map((t) => (
        <span key={t} className={`tag tag-${t}`}>
          {TAG_LABEL[t]}
        </span>
      ))}
    </span>
  );
}
