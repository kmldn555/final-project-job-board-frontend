import {
  BriefcaseBusiness,
  CodeXml,
  GraduationCap,
  Headphones,
  Megaphone,
  Palette,
  Stethoscope,
  Wallet,
} from "lucide-react";
import type {
  FaqItem,
  HowItWorksStep,
  Job,
  JobCategory,
  SalaryInsight,
  SiteStat,
  Testimonial,
} from "../types/landing";

export const jobCategories: JobCategory[] = [
  {
    id: "technology",
    name: "Teknologi",
    description: "Software, data, dan IT infrastructure",
    openPositions: 3240,
    icon: CodeXml,
  },
  {
    id: "marketing",
    name: "Marketing",
    description: "Digital, konten, dan brand growth",
    openPositions: 1860,
    icon: Megaphone,
  },
  {
    id: "design",
    name: "Desain",
    description: "UI/UX, grafis, dan kreatif",
    openPositions: 940,
    icon: Palette,
  },
  {
    id: "sales",
    name: "Penjualan",
    description: "Business development dan account",
    openPositions: 2120,
    icon: BriefcaseBusiness,
  },
  {
    id: "finance",
    name: "Keuangan",
    description: "Akuntansi, audit, dan analisis",
    openPositions: 1180,
    icon: Wallet,
  },
  {
    id: "education",
    name: "Pendidikan",
    description: "Guru, dosen, dan pelatihan",
    openPositions: 760,
    icon: GraduationCap,
  },
  {
    id: "healthcare",
    name: "Kesehatan",
    description: "Medis, perawatan, dan apotek",
    openPositions: 1320,
    icon: Stethoscope,
  },
  {
    id: "customer-service",
    name: "Layanan Pelanggan",
    description: "Support, CS, dan customer success",
    openPositions: 1540,
    icon: Headphones,
  },
];

export const popularSearches: string[] = [
  "Frontend Developer",
  "Data Analyst",
  "Product Designer",
  "Marketing",
];

export const hiringCompanies: string[] = [
  "Nusantara Digital",
  "Fintra Indonesia",
  "Kopi Nusantara",
  "Kreatif Studio",
  "Sehat Bersama",
  "Layanan Prima",
];

export const siteStats: SiteStat[] = [
  { value: "12.480", label: "lowongan aktif" },
  { value: "1.940", label: "perusahaan" },
  { value: "38", label: "kota" },
];

export const latestJobs: Job[] = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer",
    company: "Nusantara Digital",
    location: "Jakarta, Indonesia",
    categoryId: "technology",
    employmentType: "Full-time",
    workMode: "Hybrid",
    salary: "Rp 18–28 juta",
    postedAt: "2 jam lalu",
    logoText: "ND",
    logoClass: "bg-blue-50 text-ink",
    isFeatured: true,
  },
  {
    id: "job-2",
    title: "Product Designer",
    company: "Kreatif Studio",
    location: "Bandung, Indonesia",
    categoryId: "design",
    employmentType: "Full-time",
    workMode: "Remote",
    salary: "Rp 12–20 juta",
    postedAt: "5 jam lalu",
    logoText: "KS",
    logoClass: "bg-accent-soft text-ink",
  },
  {
    id: "job-3",
    title: "Digital Marketing Specialist",
    company: "Kopi Nusantara",
    location: "Yogyakarta, Indonesia",
    categoryId: "marketing",
    employmentType: "Full-time",
    workMode: "On-site",
    salary: "Rp 9–14 juta",
    postedAt: "1 hari lalu",
    logoText: "KN",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-4",
    title: "Data Analyst",
    company: "Fintra Indonesia",
    location: "Jakarta, Indonesia",
    categoryId: "technology",
    employmentType: "Full-time",
    workMode: "Hybrid",
    salary: "Rp 15–24 juta",
    postedAt: "1 hari lalu",
    logoText: "FI",
    logoClass: "bg-slate-100 text-ink-2",
    isFeatured: true,
  },
  {
    id: "job-5",
    title: "Customer Success Manager",
    company: "Layanan Prima",
    location: "Surabaya, Indonesia",
    categoryId: "customer-service",
    employmentType: "Full-time",
    workMode: "On-site",
    salary: "Rp 10–16 juta",
    postedAt: "2 hari lalu",
    logoText: "LP",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-6",
    title: "Sales Executive",
    company: "Maju Bersama",
    location: "Jakarta, Indonesia",
    categoryId: "sales",
    employmentType: "Full-time",
    workMode: "On-site",
    salary: "Rp 8–15 juta",
    postedAt: "2 hari lalu",
    logoText: "MB",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-7",
    title: "Financial Analyst",
    company: "Sumber Dana",
    location: "Jakarta, Indonesia",
    categoryId: "finance",
    employmentType: "Full-time",
    workMode: "Hybrid",
    salary: "Rp 14–22 juta",
    postedAt: "3 hari lalu",
    logoText: "SD",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-8",
    title: "Content Creator",
    company: "Cerita Media",
    location: "Remote",
    categoryId: "marketing",
    employmentType: "Contract",
    workMode: "Remote",
    salary: "Rp 6–10 juta",
    postedAt: "3 hari lalu",
    logoText: "CM",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-9",
    title: "Frontend Developer (Internship)",
    company: "Teknologi Masa Depan",
    location: "Bandung, Indonesia",
    categoryId: "technology",
    employmentType: "Internship",
    workMode: "On-site",
    salary: "Rp 4–6 juta",
    postedAt: "4 hari lalu",
    logoText: "TM",
    logoClass: "bg-blue-50 text-ink",
  },
  {
    id: "job-10",
    title: "Perawat Klinik",
    company: "Sehat Bersama",
    location: "Semarang, Indonesia",
    categoryId: "healthcare",
    employmentType: "Full-time",
    workMode: "On-site",
    salary: "Rp 7–11 juta",
    postedAt: "4 hari lalu",
    logoText: "SB",
    logoClass: "bg-blue-50 text-ink",
  },
];

export const howItWorksSteps: HowItWorksStep[] = [
  {
    number: "01",
    title: "Isi profil sekali",
    description:
      "Tulis pengalaman, keahlian, dan kota tempat kamu bisa bekerja. Datanya dipakai untuk semua lamaran.",
  },
  {
    number: "02",
    title: "Simpan, lalu lamar",
    description:
      "Simpan lowongan yang menarik. Saat sudah siap, kirim lamaran dari halaman lowongan itu.",
  },
  {
    number: "03",
    title: "Pantau kabarannya",
    description:
      "Lihat status lamaran dan kapan perusahaan membaca pesanmu di satu tempat.",
  },
];

export const salaryInsights: SalaryInsight[] = [
  {
    role: "Senior Frontend Engineer",
    range: "Rp 18–28 juta",
    note: "Jakarta · Hybrid",
  },
  {
    role: "Data Analyst",
    range: "Rp 15–24 juta",
    note: "Jakarta · Hybrid",
  },
  {
    role: "Product Designer",
    range: "Rp 12–20 juta",
    note: "Remote",
  },
  {
    role: "Customer Success Manager",
    range: "Rp 10–16 juta",
    note: "Surabaya · On-site",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Dulu saya buka lima situs lowongan tiap pagi. Sekarang cukup satu, dan filter kotanya jalan.",
    name: "Rani Pramesti",
    role: "Frontend developer, Bandung",
  },
  {
    quote:
      "Lowongan kami terisi dalam seminggu. Kandidat yang masuk sudah tahu kisaran gajinya sejak awal.",
    name: "Dimas Ardian",
    role: "HR, Nusantara Digital",
  },
];

export const faqs: FaqItem[] = [
  {
    question: "Apakah bisa melihat lowongan tanpa akun?",
    answer:
      "Bisa. Semua lowongan dan kategori terbuka untuk pengunjung. Akun diperlukan saat kamu ingin menyimpan lowongan atau mengirim lamaran.",
  },
  {
    question: "Apakah JobBoard memungut biaya dari pencari kerja?",
    answer:
      "Tidak. Mencari, menyimpan, dan melamar lowongan tidak dikenakan biaya.",
  },
  {
    question: "Apakah pencarian bisa difilter berdasarkan kota?",
    answer:
      "Ya. Ketik nama kota atau 'remote' pada kolom lokasi, lalu tekan Cari Lowongan. Kategori di halaman ini juga bisa dikombinasikan.",
  },
  {
    question: "Seberapa sering lowongan diperbarui?",
    answer:
      "Lowongan baru ditambahkan setiap hari. Bagian Lowongan Terbaru menampilkan lima posisi yang paling baru.",
  },
];
