import type { JobCategory } from "../../types/landing";
import SectionHeader from "./SectionHeader";

interface JobCategoriesProps {
  categories: JobCategory[];
  activeCategoryId: string | null;
  onSelectCategory: (categoryId: string | null) => void;
}

export default function JobCategories({
  categories,
  activeCategoryId,
  onSelectCategory,
}: JobCategoriesProps) {
  return (
    <section id="categories" className="scroll-mt-28 bg-paper px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Jelajahi bidang"
          title="Pilih kategori dulu."
          description="Delapan bidang yang paling banyak dicari, dari teknologi sampai layanan pelanggan. Klik salah satu untuk mempersempit daftar lowongan di bawahnya."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => {
            const Icon = category.icon;
            const isActive = activeCategoryId === category.id;

            return (
              <button
                key={category.id}
                type="button"
                aria-pressed={isActive}
                onClick={() =>
                  onSelectCategory(isActive ? null : category.id)
                }
                className={`group flex flex-col items-start gap-4 rounded-2xl border p-5 text-left transition duration-200 ${
                  isActive
                    ? "border-accent bg-accent-soft shadow-md ring-2 ring-accent/40"
                    : "border-line bg-sheet hover:-translate-y-1 hover:border-accent hover:shadow-lg"
                }`}
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition ${
                    isActive
                      ? "bg-ink text-accent"
                      : "bg-blue-50 text-ink group-hover:bg-ink group-hover:text-accent"
                  }`}
                >
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>

                <span className="font-semibold text-ink">{category.name}</span>
                <span className="text-xs leading-relaxed text-ink-3 sm:text-sm">
                  {category.description}
                </span>
                <span className="mt-auto pt-2 text-xs font-semibold text-ink-2">
                  {category.openPositions.toLocaleString("id-ID")} lowongan
                </span>
              </button>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-ink-3">
          Klik kategori untuk memfilter lowongan · klik lagi untuk membatalkan.
        </p>
      </div>
    </section>
  );
}
