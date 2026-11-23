import { Clock } from "lucide-react";
import type { JobSearchQuery } from "../../types/landing";
import JobSearchBar from "./JobSearchBar";

interface HeroSectionProps {
  query: JobSearchQuery;
  onQueryChange: (query: JobSearchQuery) => void;
  onSearch: (query: JobSearchQuery) => void;
}

export default function HeroSection({
  query,
  onQueryChange,
  onSearch,
}: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative scroll-mt-28 overflow-hidden bg-linear-to-b from-accent-soft/70 via-paper to-paper px-4 pt-16 pb-20 sm:pt-20 sm:pb-24"
    >
      <div
        className="pointer-events-none absolute -top-32 -right-24 h-96 w-96 rounded-full bg-accent/40 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute top-40 -left-32 h-80 w-80 rounded-full bg-ink/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Cari kerja, baca detailnya, lalu lamar.
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-ink-3 sm:text-lg">
            JobBoard merangkum lowongan dari perusahaan di Indonesia dalam satu
            halaman. Saring berdasarkan posisi, kota, dan bidang. Semua bisa
            dilihat sebelum kamu punya akun.
          </p>

          <div className="mt-9">
            <JobSearchBar
              query={query}
              onQueryChange={onQueryChange}
              onSearch={onSearch}
            />
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-ink-3">
            <Clock className="h-4 w-4" aria-hidden="true" />
            Diperbarui hari ini · 1.204 lowongan baru masuk.
          </p>
        </div>
      </div>
    </section>
  );
}
