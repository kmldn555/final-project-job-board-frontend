import { howItWorksSteps } from "../../data/landingMockData";
import SectionHeader from "./SectionHeader";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 bg-sheet px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Cara kerja"
          title="Tiga langkah sampai lamaran terkirim."
          description="Mulai dari halaman ini. Kamu bisa melihat semua lowongan lebih dulu sebelum memutuskan untuk daftar."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {howItWorksSteps.map((step) => (
            <div
              key={step.number}
              className="rounded-2xl border border-line bg-paper p-6 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg sm:p-8"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-sm font-bold text-ink">
                {step.number}
              </span>
              <h3 className="mt-5 text-xl font-semibold text-ink">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink-3">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
