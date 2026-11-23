import { salaryInsights } from "../../data/landingMockData";
import SectionHeader from "./SectionHeader";

export default function SalaryInsights() {
  return (
    <section id="salary-guide" className="scroll-mt-28 bg-paper px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader
          align="left"
          label="Panduan gaji"
          title="Kisaran gaji yang paling dicari."
          description="Angka di bawah diambil dari lowongan yang diposting di JobBoard. Pakai sebagai patokan awal saat menilai tawaran, bukan angka final."
        />

        <div className="overflow-hidden rounded-2xl border border-line bg-sheet shadow-sm">
          {salaryInsights.map((item, index) => (
            <div
              key={item.role}
              className={`flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-5 sm:px-6 ${
                index > 0 ? "border-t border-line" : ""
              }`}
            >
              <div>
                <p className="font-semibold text-ink">{item.role}</p>
                <p className="mt-1 text-xs text-ink-3">{item.note}</p>
              </div>
              <span className="rounded-lg bg-accent-soft px-3 py-1.5 text-sm font-bold text-ink">
                {item.range}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
