import type { Tag } from "@/lib/types";

const TAG_LABEL: Record<Tag, string> = {
  vegetariano: "Vegetariano",
  picante: "Picante",
  nuevo: "Nuevo",
};

const TAG_STYLES: Record<Tag, string> = {
  vegetariano: "border-success/30 bg-success/10 text-success",
  picante: "border-danger/30 bg-danger/10 text-danger",
  nuevo: "border-primary/30 bg-primary/10 text-text-primary",
};

export default function Tags({ tags = [] }: { tags?: Tag[] }) {
  if (!tags.length) return null;

  return (
    <span className="flex flex-wrap items-center gap-1.5">
      {tags.map((tag) => (
        <span
          key={tag}
          className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[0.7rem] font-semibold leading-4 ${TAG_STYLES[tag]}`}
        >
          {TAG_LABEL[tag]}
        </span>
      ))}
    </span>
  );
}
