import { Link } from "react-router";
import { BriefcaseBusiness, Mail, MapPin, Phone } from "lucide-react";
import { jobCategories } from "../../data/landingMockData";

interface FooterLink {
  label: string;
  to?: string;
  href?: string;
}

const currentYear = new Date().getFullYear();

const exploreLinks: FooterLink[] = [
  { label: "Home", to: "/" },
  { label: "Find Jobs", href: "#latest-jobs" },
  { label: "Kategori", href: "#categories" },
  { label: "Perusahaan", href: "#companies" },
  { label: "Cara kerja", href: "#how-it-works" },
];

const helpLinks: FooterLink[] = [
  { label: "Panduan gaji", href: "#salary-guide" },
  { label: "Pertanyaan umum", href: "#faq" },
  { label: "Untuk perusahaan", href: "#employers" },
  { label: "Login", to: "/login" },
  { label: "Register", to: "/register" },
];

function FooterLinkItem({ link }: { link: FooterLink }) {
  if (link.to) {
    return (
      <Link
        to={link.to}
        className="text-sm text-blue-100 transition hover:text-accent"
      >
        {link.label}
      </Link>
    );
  }

  return (
    <a
      href={link.href}
      className="text-sm text-blue-100 transition hover:text-accent"
    >
      {link.label}
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-6">
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-ink">
                <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="text-lg font-bold tracking-tight text-white">
                Job<span className="text-accent">Board</span>
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-blue-100">
              Lowongan kerja dari perusahaan Indonesia, dirangkum dalam satu
              halaman. Bisa dibaca siapa saja, tanpa akun.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Jelajahi
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Kategori
            </h3>
            <ul className="mt-5 space-y-3">
              {jobCategories.slice(0, 5).map((category) => (
                <li key={category.id}>
                  <a
                    href="#categories"
                    className="text-sm text-blue-100 transition hover:text-accent"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Bantuan
            </h3>
            <ul className="mt-5 space-y-3">
              {helpLinks.map((link) => (
                <li key={link.label}>
                  <FooterLinkItem link={link} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold tracking-wide text-white uppercase">
              Kontak
            </h3>
            <ul className="mt-5 space-y-4 text-sm text-blue-100">
              <li className="flex items-start gap-2.5">
                <Mail
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href="mailto:hello@jobboard.example"
                  className="transition hover:text-accent"
                >
                  hello@jobboard.example
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <a
                  href="tel:+622150001234"
                  className="transition hover:text-accent"
                >
                  +62 21 5000 1234
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin
                  className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                  aria-hidden="true"
                />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/15 pt-6 text-xs text-blue-100 sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} JobBoard. Semua hak dilindungi.</p>
          <p>Tanpa biaya untuk pencari kerja.</p>
        </div>
      </div>
    </footer>
  );
}
