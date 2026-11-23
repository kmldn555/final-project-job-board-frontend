import { Link } from "react-router";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTASection() {
  return (
    <section id="cta" className="scroll-mt-28 px-4 pb-20 sm:pb-24">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-linear-to-br from-ink via-ink-2 to-ink px-6 py-14 text-center shadow-2xl shadow-ink/30 sm:px-12 sm:py-16">
        <div
          className="pointer-events-none absolute -top-20 -left-16 h-72 w-72 rounded-full bg-accent/25 blur-2xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -right-16 -bottom-24 h-80 w-80 rounded-full bg-blue-400/20 blur-3xl"
          aria-hidden="true"
        />

        <div className="relative">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white">
            <Sparkles className="h-4 w-4 text-accent" aria-hidden="true" />
            Siap memulai?
          </span>

          <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Simpan dulu. Daftar kalau sudah cocok.
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-blue-100">
            Jelajahi lowongan sebagai tamu. Begitu kamu menemukan yang pas, buat
            akun untuk menyimpan dan mengirim lamaran.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            {/* Rute /register akan tersedia setelah fitur Authentication dibuat. */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-bold text-ink shadow-sm transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              Buat akun gratis
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <a
              href="#latest-jobs"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat lowongan
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
