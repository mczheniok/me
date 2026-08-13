import { CATEGORY_SKILL_STYLE } from "@/app/config/index";

export function SkillTag({ label, category }) {
  return (
    <span
      className={`font-mono text-sm font-semibold tracking-wide px-2.5 py-1 rounded-lg ${CATEGORY_SKILL_STYLE[category]}`}
    >
      {label}
    </span>
  );
};

export function CategorySkillCardComponent({ title, category, items, className = "" }) {
  return (
    <div className={`rounded-3xl flex flex-col gap-3 p-5 bg-white/[0.06] ${className} ${category !== "backend" && "items-start"}`}>
      <h4 className="font-heading text-white text-xl tracking-wide">{title}</h4>
      <div className={`flex flex-wrap w-full gap-2 ${category === "backend" && "flex-row-reverse"} `}>
        {items.map((skill) => (
          <SkillTag key={skill} label={skill} category={category} />
        ))}
      </div>
    </div>
  );
}