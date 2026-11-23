import { useState } from "react";
import { Link } from "react-router";
import { BriefcaseBusiness, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  to?: string;
  href?: string;
}

const primaryLinks: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "Find Jobs", href: "#latest-jobs" },
  { label: "Categories", href: "#categories" },
  { label: "Companies", href: "#companies" },
  { label: "Salary Guide", href: "#salary-guide" },
  { label: "For Employers", href: "#employers" },
];

const secondaryLinks: NavItem[] = [
  { label: "Cara Kerja", href: "#how-it-works" },
  { label: "Bantuan", href: "#faq" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 shadow-sm backdrop-blur">
      <div className="hidden bg-ink text-blue-100 sm:block">
        <div className="mx-auto flex h-8 max-w-7xl items-center justify-between px-4 text-xs sm:px-6 lg:px-8">
          <span>Lowongan kerja Indonesia, diperbarui setiap hari.</span>
          <div className="flex items-center gap-5">
            {secondaryLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="transition hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          onClick={closeMenu}
          className="flex items-center gap-2.5"
          aria-label="JobBoard — beranda"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-accent">
            <BriefcaseBusiness className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="text-lg font-bold tracking-tight text-ink">
            Job<span className="text-accent-ink">Board</span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-6 lg:flex xl:gap-8"
          aria-label="Navigasi utama"
        >
          {primaryLinks.map((link) =>
            link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-ink-2 transition hover:text-accent-ink"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-ink-2 transition hover:text-accent-ink"
              >
                {link.label}
              </a>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          {/* Rute /login dan /register akan tersedia setelah fitur Authentication dibuat. */}
          <Link
            to="/login"
            className="rounded-xl px-4 py-2 text-sm font-semibold text-ink-2 transition hover:bg-paper hover:text-ink"
          >
            Login
          </Link>
          <Link
            to="/register"
            className="rounded-xl bg-accent px-4 py-2 text-sm font-bold text-ink shadow-sm transition hover:bg-accent-ink hover:text-white"
          >
            Register
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen((open) => !open)}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-line text-ink transition hover:bg-paper lg:hidden"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-menu"
          className="max-h-[calc(100vh-8rem)] overflow-y-auto border-t border-line bg-white px-4 py-4 shadow-lg lg:hidden"
          aria-label="Navigasi seluler"
        >
          <div className="flex flex-col">
            {[...primaryLinks, ...secondaryLinks].map((link) =>
              link.to ? (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition hover:bg-paper hover:text-ink"
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-2 transition hover:bg-paper hover:text-ink"
                >
                  {link.label}
                </a>
              ),
            )}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2 border-t border-line pt-4">
            <Link
              to="/login"
              onClick={closeMenu}
              className="rounded-xl border border-line px-3 py-3 text-center text-sm font-semibold text-ink"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={closeMenu}
              className="rounded-xl bg-accent px-3 py-3 text-center text-sm font-bold text-ink"
            >
              Register
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
