import { hiringCompanies } from "../../data/landingMockData";

export default function TrustStrip() {
  return (
    <section
      id="companies"
      className="scroll-mt-28 border-y border-line bg-sheet px-4 py-12"
    >
      <div className="mx-auto max-w-7xl">
        <p className="text-center text-sm font-semibold tracking-wide text-ink-3 uppercase">
          Sedang merekrut di JobBoard
        </p>
        <ul className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {hiringCompanies.map((company) => (
            <li
              key={company}
              className="rounded-xl border border-line bg-paper px-4 py-5 text-center text-sm font-semibold text-ink-2 transition hover:border-accent hover:bg-accent-soft hover:text-ink"
            >
              {company}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
