import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

export default function EmployerBanner() {
  return (
    <section id="employers" className="scroll-mt-28 bg-sheet px-4 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-2xl bg-linear-to-r from-ink to-ink-2 px-6 py-8 shadow-xl shadow-ink/20 sm:px-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-center lg:gap-12">
        <div>
          <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
            Untuk perusahaan
          </span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            Butuh orang? Posting lowongannya.
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-blue-100">
            Satu lowongan, satu halaman, dan kandidat yang sudah menyaring
            berdasarkan kota serta kisaran gaji sebelum mengirim lamaran.
          </p>
        </div>

        {/* Rute /register akan tersedia setelah fitur Authentication dibuat. */}
        <Link
          to="/register"
          className="inline-flex items-center justify-center gap-2 self-start rounded-xl bg-accent px-6 py-3.5 text-sm font-bold text-ink shadow-sm transition hover:bg-white lg:justify-self-end"
        >
          Buat akun perusahaan
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
