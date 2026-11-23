import type { FormEvent } from "react";
import { ArrowRight, MapPin, Search } from "lucide-react";
import { popularSearches } from "../../data/landingMockData";
import type { JobSearchQuery } from "../../types/landing";

interface JobSearchBarProps {
  query: JobSearchQuery;
  onQueryChange: (query: JobSearchQuery) => void;
  onSearch: (query: JobSearchQuery) => void;
}

export default function JobSearchBar({
  query,
  onQueryChange,
  onSearch,
}: JobSearchBarProps) {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch({
      keyword: query.keyword.trim(),
      location: query.location.trim(),
    });
  };

  const handleQuickSearch = (value: string) => {
    const nextQuery = { ...query, keyword: value };
    onQueryChange(nextQuery);
    onSearch(nextQuery);
  };

  return (
    <div className="mx-auto w-full max-w-3xl">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 rounded-2xl border border-line bg-sheet p-3 shadow-xl shadow-ink/10 sm:flex-row sm:items-center"
      >
        <label className="flex flex-1 items-center gap-3 rounded-xl px-3 py-2 transition focus-within:bg-paper">
          <Search className="h-5 w-5 shrink-0 text-ink-3" aria-hidden="true" />
          <span className="sr-only">Posisi pekerjaan atau kata kunci</span>
          <input
            type="text"
            value={query.keyword}
            onChange={(event) =>
              onQueryChange({ ...query, keyword: event.target.value })
            }
            placeholder="Posisi, kata kunci, atau perusahaan"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
          />
        </label>

        <div className="hidden h-8 w-px bg-line sm:block" aria-hidden="true" />

        <label className="flex flex-1 items-center gap-3 rounded-xl px-3 py-2 transition focus-within:bg-paper">
          <MapPin className="h-5 w-5 shrink-0 text-ink-3" aria-hidden="true" />
          <span className="sr-only">Lokasi pekerjaan</span>
          <input
            type="text"
            value={query.location}
            onChange={(event) =>
              onQueryChange({ ...query, location: event.target.value })
            }
            placeholder="Kota atau remote"
            className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
          />
        </label>

        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-ink px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-accent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink"
        >
          Cari Lowongan
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-sm">
        <span className="text-ink-3">Populer:</span>
        {popularSearches.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => handleQuickSearch(item)}
            className="rounded-full border border-line bg-white px-3 py-1 text-ink-3 transition hover:border-accent hover:bg-accent-soft hover:text-ink"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}
