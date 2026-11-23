import { ArrowRight, SearchX } from "lucide-react";
import type { Job } from "../../types/landing";
import JobCard from "./JobCard";
import SectionHeader from "./SectionHeader";

interface LatestJobsProps {
  jobs: Job[];
  activeFilters: string[];
  onClearFilters: () => void;
}

export default function LatestJobs({
  jobs,
  activeFilters,
  onClearFilters,
}: LatestJobsProps) {
  return (
    <section
      id="latest-jobs"
      className="scroll-mt-28 border-t border-line bg-paper px-4 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Lowongan terbaru"
          title="Peluang kerja yang baru saja dibuka."
          description="Lima posisi yang paling baru masuk. Gaji, sistem kerja, dan kota sudah ditampilkan di setiap entri supaya kamu tidak perlu membuka satu per satu."
        />

        {activeFilters.length > 0 && (
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-line bg-sheet px-4 py-3 text-sm">
            <span className="text-xs font-semibold tracking-wide text-ink-3 uppercase">
              Filter aktif
            </span>
            {activeFilters.map((filter) => (
              <span key={filter} className="rounded-full bg-paper px-3 py-1 text-ink">
                {filter}
              </span>
            ))}
            <button
              type="button"
              onClick={onClearFilters}
              className="ml-auto text-sm font-semibold text-accent-ink underline underline-offset-4 hover:text-ink"
            >
              Hapus semua
            </button>
          </div>
        )}

        {jobs.length > 0 ? (
          <div className="mt-10 grid gap-4 lg:grid-cols-2 lg:gap-5">
            {jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                className={
                  index === jobs.length - 1 && jobs.length % 2 === 1
                    ? "lg:col-span-2"
                    : ""
                }
              />
            ))}
          </div>
        ) : (
          <div className="mx-auto mt-10 flex max-w-md flex-col items-center rounded-2xl border border-dashed border-line bg-sheet px-6 py-12 text-center">
            <SearchX className="h-10 w-10 text-ink-3" aria-hidden="true" />
            <h3 className="mt-4 text-lg font-semibold text-ink">
              Tidak ada yang cocok sejauh ini
            </h3>
            <p className="mt-2 text-sm text-ink-3">
              Coba kata kunci lain, kota lain, atau lepas filter kategorinya.
            </p>
            <button
              type="button"
              onClick={onClearFilters}
              className="mt-5 rounded-xl bg-ink px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-accent hover:text-ink"
            >
              Hapus filter
            </button>
          </div>
        )}

        <div className="mt-10 flex flex-col items-center gap-4">
          <a
            href="#"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-accent-ink hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Lihat semua lowongan
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </a>
          {jobs.length > 0 && (
            <p className="text-sm text-ink-3">
              Menampilkan {jobs.length} lowongan terbaru.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
