import {
  ClipboardCheck,
  Gift,
  Handshake,
  Info,
  MessageSquareText,
  Scale,
  TrendingUp,
  UserCheck,
  Wallet,
} from "lucide-react";

const reviewCategories = [
  {
    title: "Budaya Kerja",
    description: "Kolaborasi tim, transparansi, dan nilai perusahaan",
  },
  {
    title: "Keseimbangan Kerja & Hidup",
    description: "Fleksibilitas jam kerja, cuti, dan beban kerja",
  },
  {
    title: "Fasilitas & Tunjangan Kerja",
    description: "Asuransi, perangkat kerja, dan tunjangan operasional",
  },
  {
    title: "Peluang Karier & Pembelajaran",
    description: "Jenjang promosi, mentoring, dan pelatihan",
  },
];

export default function FormReview() {
  return (
    <main className="min-w-0 bg-paper p-4 sm:p-6 lg:p-8">
      <div className="mx-auto max-w-[900px]">
        {/* Page Heading */}
        <div className="mb-6">
          <h1 className="text-xl font-bold text-ink sm:text-2xl">
            Tulis Ulasan untuk Nama Perusahaan
          </h1>

          <p className="mt-1 text-sm leading-relaxed text-ink-3">
            Bagikan pengalaman kerja Anda untuk membantu kandidat lain memahami
            lingkungan kerja perusahaan.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[0_12px_32px_-14px_rgba(11,31,58,0.15)]">
          <div className="space-y-8 p-4 sm:p-6 lg:p-8">
            {/* Section 01 */}
            <section>
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-accent-ink">
                    01 /
                  </span>

                  <h2 className="text-sm font-bold tracking-wide text-ink sm:text-base">
                    PENILAIAN ASPEK KERJA
                  </h2>
                </div>

                <p className="mt-1 text-xs text-ink-3 sm:text-sm">
                  Pilih nilai yang paling menggambarkan pengalaman Anda pada
                  setiap aspek.
                </p>
              </div>

              {/* Rating Cards */}
              <div className="space-y-3">
                {reviewCategories.map((category, index) => (
                  <div
                    key={category.title}
                    className="rounded-xl border border-line bg-white p-4 transition-colors hover:border-accent/40 sm:p-5"
                  >
                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      {/* Category Information */}
                      <div className="flex min-w-0 items-start gap-3">
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent-ink">
                          {index === 0 && <Handshake size={17} />}
                          {index === 1 && <Scale size={17} />}
                          {index === 2 && <Gift size={17} />}
                          {index === 3 && <TrendingUp size={17} />}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold text-ink">
                            {category.title}
                          </h3>

                          <p className="mt-1 text-xs leading-relaxed text-ink-3">
                            {category.description}
                          </p>
                        </div>
                      </div>

                      {/* Rating Options */}
                      <div className="grid grid-cols-5 gap-2 sm:flex sm:shrink-0 sm:gap-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button
                            key={rating}
                            type="button"
                            className="flex h-10 items-center justify-center rounded-lg border border-line bg-paper text-sm font-semibold text-ink-2 transition-all hover:border-accent hover:bg-accent-soft hover:text-accent-ink sm:h-11 sm:w-11"
                          >
                            {rating}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rating Helper */}
              <div className="mt-4 flex items-start gap-2 rounded-lg bg-paper p-3">
                <Info size={15} className="mt-0.5 shrink-0 text-accent-ink" />

                <p className="text-xs leading-relaxed text-ink-3">
                  Berikan penilaian dari 1 hingga 5 berdasarkan pengalaman Anda.
                  Semakin tinggi angka yang dipilih, semakin baik penilaian Anda
                  terhadap aspek tersebut.
                </p>
              </div>
            </section>

            {/* Section 02 */}
            <section>
              <div className="mb-5">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold tracking-widest text-accent-ink">
                    02 /
                  </span>

                  <h2 className="text-sm font-bold tracking-wide text-ink sm:text-base">
                    DETAIL PENGALAMAN
                  </h2>
                </div>

                <p className="mt-1 text-xs text-ink-3 sm:text-sm">
                  Bagikan pengalaman Anda selama bekerja, baik hal positif
                  maupun tantangan yang dihadapi.
                </p>
              </div>

              <div className="space-y-5">
                {/* Salary */}
                <div>
                  <label
                    htmlFor="salary"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink"
                  >
                    <Wallet size={16} className="text-accent-ink" />
                    Perkiraan Gaji Bulanan
                  </label>

                  <div className="flex flex-col overflow-hidden rounded-xl border border-line transition-colors focus-within:border-accent sm:flex-row sm:items-center">
                    <div className="flex items-center gap-2 border-b border-line bg-paper px-4 py-3 sm:border-b-0 sm:border-r">
                      <span className="text-sm font-semibold text-ink-2">
                        Rp
                      </span>
                    </div>

                    <input
                      id="salary"
                      type="text"
                      placeholder="Contoh: 12.000.000 - 15.000.000"
                      className="min-w-0 flex-1 bg-white px-4 py-3 text-sm text-ink outline-none placeholder:text-ink-3"
                    />
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-ink-3">
                    Data gaji akan ditampilkan secara anonim untuk memberikan
                    gambaran transparansi gaji.
                  </p>
                </div>

                {/* Experience */}
                <div>
                  <label
                    htmlFor="experience"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink"
                  >
                    <MessageSquareText size={16} className="text-accent-ink" />
                    Ulasan & Catatan Pengalaman
                  </label>

                  <textarea
                    id="experience"
                    rows={4}
                    placeholder="Ceritakan pengalaman Anda selama bekerja di perusahaan ini, termasuk hal-hal yang Anda sukai maupun tantangan yang pernah dihadapi..."
                    className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-accent"
                  />
                </div>

                {/* Management Suggestions */}
                <div>
                  <label
                    htmlFor="suggestions"
                    className="mb-2 flex items-center gap-2 text-sm font-semibold text-ink"
                  >
                    <ClipboardCheck size={16} className="text-accent-ink" />
                    Saran untuk Manajemen
                  </label>

                  <textarea
                    id="suggestions"
                    rows={4}
                    placeholder="Menurut Anda, hal apa yang perlu ditingkatkan perusahaan agar lingkungan kerja menjadi lebih baik?"
                    className="w-full resize-y rounded-xl border border-line bg-white px-4 py-3 text-sm leading-relaxed text-ink outline-none transition-colors placeholder:text-ink-3 focus:border-accent"
                  />
                </div>
              </div>
            </section>

            {/* Confirmation */}
            <div className="flex items-start gap-3 rounded-xl border border-line bg-paper p-4">
              <UserCheck
                size={19}
                className="mt-0.5 shrink-0 text-accent-ink"
              />

              <p className="text-xs leading-relaxed text-ink-2 sm:text-sm">
                Dengan mengirimkan ulasan ini, Anda menyatakan bahwa ulasan yang
                diberikan berdasarkan pengalaman nyata dan menyetujui publikasi
                ulasan dengan tetap menjaga kerahasiaan identitas Anda.
              </p>
            </div>
          </div>

          {/* Form Footer */}
          <div className="flex flex-col-reverse gap-3 border-t border-line bg-paper p-4 sm:flex-row sm:justify-end sm:p-6">
            <button
              type="button"
              className="w-full rounded-xl border border-line bg-white px-5 py-3 text-sm font-semibold text-ink-2 transition-colors hover:bg-paper sm:w-auto"
            >
              Batal
            </button>

            <button
              type="button"
              className="w-full rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
            >
              Kirim Ulasan
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
