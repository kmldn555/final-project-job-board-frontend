import {
  BadgeCheck,
  Building2,
  Gift,
  Globe,
  Handshake,
  MapPin,
  MessageSquarePlus,
  Phone,
  Scale,
  ShieldCheck,
  Star,
  TrendingUp
} from "lucide-react";

const reviewCategories = [
  {
    icon: Handshake,
    title: "BUDAYA KERJA",
    rating: "4.8",
    description: "Kolaboratif & Suportif",
  },
  {
    icon: Scale,
    title: "KESEIMBANGAN KERJA & HIDUP",
    rating: "4.5",
    description: "Fleksibilitas & Jam Teratur",
  },
  {
    icon: Gift,
    title: "FASILITAS & TUNJANGAN",
    rating: "4.7",
    description: "Asuransi & Tunjangan Lengkap",
  },
  {
    icon: TrendingUp,
    title: "Peluang Karier & Pembelajaran",
    rating: "4.6",
    description: "Mentorship & Pengembangan",
  },
];

export default function Header() {
  return (
    <div className="min-w-0 space-y-5 bg-paper p-4 sm:space-y-6 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[1600px] space-y-5 sm:space-y-6">
        {/* Privacy Banner */}
        <div className="flex flex-col gap-2 rounded-xl border border-line bg-white p-4 sm:flex-row sm:items-center sm:gap-3">
          <div className="flex shrink-0 items-center gap-2 text-ink">
            <ShieldCheck size={20} className="shrink-0 text-accent-ink" />

            <span className="text-sm font-semibold">Privasi Terlindungi:</span>
          </div>

          <p className="text-xs leading-relaxed text-ink-3 sm:text-sm">
            Identitas pribadi Anda aman dan ulasan ditampilkan berdasarkan
            posisi jabatan.
          </p>
        </div>

        {/* Company Profile */}
        <section className="rounded-2xl border border-line bg-white p-4 shadow-[0_12px_32px_-14px_rgba(11,31,58,0.28)] sm:p-6 lg:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-5">
            {/* Company Image */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent-ink">
              <Building2 size={32} />
            </div>

            {/* Company Information */}
            <div className="min-w-0 flex-1">
              {/* Company Name */}
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg font-bold text-ink sm:text-xl">
                  Nama Company
                </h1>

                <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-medium text-accent-ink sm:text-xs">
                  <BadgeCheck size={14} />
                  Terverifikasi
                </span>
              </div>

              {/* Company Description */}
              <p className="mt-2 max-w-3xl text-xs leading-relaxed text-ink-3 sm:text-sm">
                Solusi Teknologi Finansial, Infrastruktur Cloud & Ekosistem
                Digital Terintegrasi di Asia Tenggara
              </p>

              {/* Company Details */}
              <div className="mt-4 flex flex-wrap gap-x-4 gap-y-3 text-xs text-ink-2 sm:mt-5 sm:gap-x-5 sm:text-sm">
                <div className="flex items-center gap-2">
                  <Star
                    size={16}
                    className="shrink-0 fill-accent text-accent"
                  />
                  <span>4.8 (120 ulasan)</span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin size={16} className="shrink-0" />
                  <span>Jakarta, Indonesia</span>
                </div>

                <div className="flex items-center gap-2">
                  <Phone size={16} className="shrink-0" />
                  <span>Nomor Telepon</span>
                </div>

                <div className="flex items-center gap-2">
                  <Globe size={16} className="shrink-0" />
                  <span>Website</span>
                </div>
              </div>
            </div>

            {/* Write Review Button */}
            <div className="mt-5">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:opacity-90"
              >
                <MessageSquarePlus size={17} />
                Tulis Ulasan
              </button>
            </div>
          </div>
        </section>

        {/* Review Summary */}
        <section>
          {/* Section Heading */}
          <div className="mb-4">
            <h2 className="text-base font-bold text-ink sm:text-lg">
              Ringkasan Ulasan Karyawan
            </h2>

            <p className="mt-1 text-xs leading-relaxed text-ink-3 sm:text-sm">
              Penilaian berdasarkan pengalaman karyawan di berbagai aspek.
            </p>
          </div>

          {/* Review Cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 xl:grid-cols-4">
            {reviewCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="min-w-0 rounded-xl border border-line bg-white p-4 shadow-[0_12px_32px_-14px_rgba(11,31,58,0.28)] transition-shadow hover:shadow-lg sm:p-5"
                >
                  {/* Category Header */}
                  <div className="flex min-h-10 items-start gap-2">
                    {/* Category Icon */}
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                      <Icon size={19} />
                    </div>

                    {/* Category Title */}
                    <h3 className="pt-1 text-xs font-bold leading-relaxed text-ink-2 sm:text-sm">
                      {category.title}
                    </h3>
                  </div>

                  {/* Rating */}
                  <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-bold tabular-nums text-ink">
                        {category.rating}
                      </span>

                      <span className="text-xs text-ink-3">/ 5</span>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex gap-0.5 text-accent">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={14} fill="currentColor" />
                      ))}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-ink-3">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}
