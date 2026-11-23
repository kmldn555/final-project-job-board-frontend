interface SectionHeaderProps {
  label: string;
  title: string;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <p className="text-sm font-semibold tracking-wide text-ink-2 uppercase">
        {label}
      </p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-relaxed text-ink-3">{description}</p>
    </div>
  );
}
