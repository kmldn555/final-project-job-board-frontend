import { testimonials } from "../../data/landingMockData";
import SectionHeader from "./SectionHeader";

export default function Testimonials() {
  return (
    <section className="border-y border-line bg-sheet px-4 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Kata mereka"
          title="Dua sisi dari satu papan lowongan."
          description="Satu dari pencari kerja, satu dari perusahaan yang memakai JobBoard untuk mencari kandidat."
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {testimonials.map((item) => (
            <figure
              key={item.name}
              className="rounded-2xl border border-line border-l-4 border-l-accent bg-paper p-6 shadow-sm sm:p-8"
            >
              <blockquote className="text-lg leading-relaxed font-medium text-ink sm:text-xl">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-line pt-4">
                <p className="font-semibold text-ink">{item.name}</p>
                <p className="mt-1 text-sm text-ink-3">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
