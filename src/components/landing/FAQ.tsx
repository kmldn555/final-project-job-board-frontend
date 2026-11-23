import { Plus } from "lucide-react";
import { faqs } from "../../data/landingMockData";
import SectionHeader from "./SectionHeader";

export default function FAQ() {
  return (
    <section id="faq" className="scroll-mt-28 bg-paper px-4 py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <SectionHeader
          align="left"
          label="Pertanyaan umum"
          title="Yang sering ditanyakan."
          description="Kalau ada yang belum terjawab, tulis ke hello@jobboard.example."
        />

        <div className="space-y-3">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-line bg-sheet p-5 shadow-sm transition hover:border-accent"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink [&::-webkit-details-marker]:hidden">
                {item.question}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent-soft text-ink transition-transform group-open:rotate-45">
                  <Plus className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <p className="mt-4 pr-10 text-sm leading-relaxed text-ink-3">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
