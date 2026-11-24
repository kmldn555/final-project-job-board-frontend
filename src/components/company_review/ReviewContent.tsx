import {
  BadgeCheck,
  BriefcaseBusiness,
  CalendarDays,
  ClipboardCheck,
  Gift,
  Handshake,
  MapPin,
  MessageSquareText,
  Scale,
  Search,
  SlidersHorizontal,
  Star,
  TrendingUp,
  Wallet
} from "lucide-react";

const ratingDistribution = [
  { stars: 5, count: 85, percentage: 71 },
  { stars: 4, count: 25, percentage: 21 },
  { stars: 3, count: 7, percentage: 6 },
  { stars: 2, count: 2, percentage: 2 },
  { stars: 1, count: 1, percentage: 1 },
];

const popularPositions = [
  "Software Engineer",
  "Product Manager",
  "UI/UX Designer",
  "Data Analyst",
  "Frontend Developer",
];

const reviewCategories = [
  {
    icon: Handshake,
    title: "Budaya Kerja",
    rating: "5.0",
  },
  {
    icon: Scale,
    title: "Work-Life Balance",
    rating: "4.5",
  },
  {
    icon: Gift,
    title: "Fasilitas",
    rating: "5.0",
  },
  {
    icon: TrendingUp,
    title: "Peluang Karier",
    rating: "5.0",
  },
];

export default function ReviewContent() {
  return (
    <main className="min-w-0 bg-paper p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px]">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-ink sm:text-2xl">
            Ulasan Karyawan
          </h1>
          <p className="mt-1 text-sm text-ink-3">
            Lihat pengalaman nyata karyawan dan temukan informasi mengenai
            lingkungan kerja perusahaan.
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 items-start gap-6 xl:grid-cols-[280px_minmax(0,1fr)]">
          {/* Rating Distribution */}
          <aside className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_32px_-14px_rgba(11,31,58,0.15)] sm:p-6">
            <div className="mb-5">
              <div className="flex items-center justify-between">
                <h2 className="font-bold text-ink">Distribusi Rating</h2>
                <SlidersHorizontal size={18} className="text-ink-3" />
              </div>

              <p className="mt-1 text-xs text-ink-3">Berdasarkan 120 ulasan</p>
            </div>

            <div className="mb-5 flex items-end gap-3 border-b border-line pb-5">
              <span className="text-5xl font-bold tracking-tight text-ink">
                4.8
              </span>

              <div className="pb-1">
                <div className="flex gap-0.5 text-accent">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={15} fill="currentColor" />
                  ))}
                </div>
                <p className="mt-1 text-xs text-ink-3">Rating keseluruhan</p>
              </div>
            </div>

            {/* Rating Bars */}
            <div className="space-y-4">
              {ratingDistribution.map((item) => (
                <button
                  key={item.stars}
                  type="button"
                  className="group flex w-full items-center gap-3 text-sm"
                >
                  <span className="flex w-12 shrink-0 items-center gap-1 text-ink-2">
                    {item.stars}
                    <Star size={13} className="fill-accent text-accent" />
                  </span>

                  <div className="h-2 flex-1 overflow-hidden rounded-full bg-paper">
                    <div
                      className="h-full rounded-full bg-accent transition-all group-hover:opacity-75"
                      style={{ width: `${item.percentage}%` }}
                    />
                  </div>

                  <span className="w-8 text-right text-xs tabular-nums text-ink-3">
                    {item.count}
                  </span>
                </button>
              ))}
            </div>

            <div className="mt-6 flex items-start gap-2 rounded-lg bg-paper p-3">
              <Star size={15} className="mt-0.5 shrink-0 text-accent-ink" />
              <p className="text-xs leading-relaxed text-ink-3">
                Klik baris bintang untuk memfilter ulasan berdasarkan rating.
              </p>
            </div>
          </aside>

          {/* Review Content */}
          <section className="min-w-0 space-y-5">
            {/* Search & Filter */}
            <div className="rounded-2xl border border-line bg-white p-5 shadow-[0_12px_32px_-14px_rgba(11,31,58,0.15)] sm:p-6">
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                    <Search size={19} />
                  </div>

                  <div>
                    <h2 className="text-sm font-bold tracking-wide text-ink">
                      EKSPLORASI ULASAN PER POSISI
                    </h2>
                    <p className="mt-0.5 text-xs text-ink-3">
                      Temukan pengalaman karyawan berdasarkan posisi jabatan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Search Controls */}
              <div className="flex flex-col gap-3 lg:flex-row">
                <div className="flex min-w-0 flex-1 items-center gap-2 rounded-xl border border-line px-3.5 py-3 transition-colors focus-within:border-accent">
                  <Search size={18} className="shrink-0 text-ink-3" />

                  <input
                    type="text"
                    placeholder="Cari ulasan berdasarkan nama posisi jabatan..."
                    className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-ink-3"
                  />

                  <button
                    type="button"
                    className="shrink-0 text-xs font-medium text-ink-3 transition-colors hover:text-accent-ink"
                  >
                    Atur Ulang
                  </button>
                </div>

                <div className="flex items-center gap-3 rounded-xl border border-line px-3.5 py-2.5 lg:w-auto">
                  <label
                    htmlFor="position"
                    className="shrink-0 text-xs font-medium text-ink-3"
                  >
                    Posisi
                  </label>

                  <select
                    id="position"
                    className="min-w-0 flex-1 bg-transparent text-sm font-medium text-ink outline-none lg:w-40"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Pilih posisi
                    </option>
                    <option value="frontend">Frontend Developer</option>
                    <option value="backend">Backend Developer</option>
                    <option value="fullstack">Full Stack Developer</option>
                  </select>
                </div>
              </div>

              {/* Popular Positions */}
              <div className="mt-5 flex flex-wrap items-center gap-2">
                <span className="mr-1 text-xs font-semibold text-ink-3">
                  Posisi populer:
                </span>

                {popularPositions.map((position) => (
                  <button
                    key={position}
                    type="button"
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-xs font-medium text-ink-2 transition-colors hover:border-accent hover:bg-accent-soft hover:text-accent-ink"
                  >
                    {position}
                  </button>
                ))}
              </div>
            </div>

            {/* Review Card */}
            <article className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_32px_-14px_rgba(11,31,58,0.15)]">
              {/* Review Header */}
              <div className="flex flex-col gap-4 border-b border-line p-5 sm:p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
                      <BriefcaseBusiness size={21} />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-ink">
                          Software Engineer
                        </h3>

                        <span className="inline-flex items-center gap-1 rounded-full bg-accent-soft px-2 py-1 text-[10px] font-semibold text-accent-ink">
                          <BadgeCheck size={12} />
                          Terverifikasi
                        </span>
                      </div>

                      <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-ink-3">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={14} />
                          Jakarta, Indonesia
                        </span>

                        <span className="flex items-center gap-1.5">
                          <CalendarDays size={14} />
                          12 Oktober 2026
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Overall Rating */}
                  <div className="flex items-center gap-1.5 rounded-lg bg-accent-soft px-3 py-2">
                    <Star size={17} className="fill-accent text-accent" />
                    <span className="text-lg font-bold text-accent-ink">
                      5.0
                    </span>
                    <span className="text-xs text-accent-ink">/ 5</span>
                  </div>
                </div>
              </div>

              {/* Review Body */}
              <div className="space-y-5 p-5 sm:p-6">
                {/* Salary Information */}
                <div className="flex flex-col gap-2 rounded-xl border border-line bg-paper p-4 sm:p-5 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2">
                    <Wallet size={18} className="shrink-0 text-accent-ink" />
                    <span className="text-xs font-bold text-ink-2">
                      Gaji dilaporkan pada posisi ini
                    </span>
                  </div>

                  <p className="font-bold text-ink sm:text-right">
                    Rp 17.000.000 - Rp 21.000.000
                    <span className="ml-1 text-xs font-normal text-ink-3">
                      / bulan
                    </span>
                  </p>
                </div>

                {/* Category Ratings */}
                <div>
                  <h4 className="mb-3 text-sm font-bold text-ink">
                    Penilaian Berdasarkan Kategori
                  </h4>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-4">
                    {reviewCategories.map((category) => {
                      const Icon = category.icon;

                      return (
                        <div
                          key={category.title}
                          className="flex items-center justify-between gap-3 rounded-xl border border-line p-3"
                        >
                          <div className="flex min-w-0 items-center gap-2">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                              <Icon size={17} />
                            </div>

                            <span className="text-xs font-medium text-ink-2">
                              {category.title}
                            </span>
                          </div>

                          <div className="flex shrink-0 items-center gap-1">
                            <Star
                              size={14}
                              className="fill-accent text-accent"
                            />
                            <span className="text-sm font-bold text-ink">
                              {category.rating}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Employee Experience */}
                <div className="rounded-xl border border-line bg-paper p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg text-accent-ink">
                      <MessageSquareText size={17} />
                    </div>

                    <h4 className="text-sm font-bold text-ink">
                      Ulasan & Catatan Pengalaman
                    </h4>
                  </div>

                  <p className="text-sm leading-7 text-ink-2">
                    Stack teknologi sangat modern (Go, Kotlin, Kubernetes,
                    Kafka) dengan kultur kerja suportif tanpa blame-culture,
                    ditambah alokasi budget sertifikasi yang fleksibel.
                    Kendalanya terletak pada on-call rotation saat lonjakan
                    rilis kuartal serta dokumentasi produk yang sesekali
                    tertinggal. Disarankan agar pimpinan meningkatkan
                    sinkronisasi antara Product Delivery dan SRE sehingga
                    penanganan incident terbagi lebih merata tanpa membebani
                    engineer di luar shift.
                  </p>
                </div>

                {/* Management Suggestions */}
                <div className="rounded-xl border border-line bg-paper p-4 sm:p-5">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg text-accent-ink">
                      <ClipboardCheck size={17} />
                    </div>

                    <h4 className="text-sm font-bold text-ink">
                      Saran untuk Manajemen
                    </h4>
                  </div>

                  <p className="text-sm leading-7 text-ink-2">
                    Tingkatkan koordinasi antara tim Product Delivery dan Tim
                    SRE agar ekspektasi SLA saat incident midnight bisa terbagi
                    lebih merata tanpa membebani engineer yang sedang off-shift.
                  </p>
                </div>
              </div>
            </article>
          </section>
        </div>
      </div>
    </main>
  );
}
