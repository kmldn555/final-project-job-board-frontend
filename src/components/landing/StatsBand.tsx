import { siteStats } from "../../data/landingMockData";

export default function StatsBand() {
  return (
    <section className="bg-ink px-4 py-12" aria-label="Angka JobBoard">
      <div className="mx-auto grid max-w-6xl gap-4 rounded-2xl bg-linear-to-r from-ink-2 to-ink p-6 shadow-xl shadow-ink/20 sm:grid-cols-3 sm:gap-0 sm:p-8">
        {siteStats.map((stat) => (
          <div
            key={stat.label}
            className="border-b border-white/15 pb-4 last:border-b-0 sm:border-r sm:border-b-0 sm:px-8 sm:pb-0 last:sm:border-r-0"
          >
            <p className="text-3xl font-bold tracking-tight text-accent sm:text-4xl">
              {stat.value}
            </p>
            <p className="mt-1 text-sm text-blue-100">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
