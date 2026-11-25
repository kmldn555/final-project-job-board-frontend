// [FE] src/data/mockAnalytics.ts
import type { ChartConfig } from "@/components/ui/chart";

export const MOCK_KPI_CARDS = [
  {
    id: "jobs",
    value: "6",
    title: "Lowongan Aktif",
    subtitle: "Tayang di papan lowongan",
    badge: "+2 bulan ini",
    featured: true,
  },
  {
    id: "applicants",
    value: "15",
    title: "Total Pelamar",
    subtitle: "20% tingkat penerimaan",
    badge: "3 diterima",
    featured: false,
  },
  {
    id: "interviews",
    value: "4",
    title: "Jadwal Wawancara",
    subtitle: "Slot kandidat minggu ini",
    badge: "H-1 aktif",
    featured: false,
  },
  {
    id: "score",
    value: "77 pts",
    title: "Rata-rata Pre-Test",
    subtitle: "Dari skor maksimal 100",
    badge: "Lulus ≥ 70",
    featured: false,
  },
] as const;

export const MOCK_FUNNEL_DATA = [
  { stage: "PENDING", total: 15 },
  { stage: "PROCESSED", total: 10 },
  { stage: "INTERVIEW", total: 6 },
  { stage: "ACCEPTED", total: 3 },
  { stage: "REJECTED", total: 4 },
];

export const funnelChartConfig = {
  total: {
    label: "Jumlah Kandidat",
    color: "var(--color-chart-3)",
  },
} satisfies ChartConfig;

export const MOCK_SALARY_CATEGORY = [
  { category: "Engineering", expected: 13.5, offered: 17.5 },
  { category: "Product", expected: 12.0, offered: 14.2 },
  { category: "Design", expected: 13.5, offered: 11.5 },
  { category: "Data", expected: 11.0, offered: 13.8 },
];

export const salaryChartConfig = {
  expected: {
    label: "Ekspektasi Kandidat (Juta)",
    color: "var(--color-chart-2)",
  },
  offered: {
    label: "Penawaran Perusahaan (Juta)",
    color: "var(--color-chart-4)",
  },
} satisfies ChartConfig;

export const MOCK_SALARY_CITY = [
  { city: "Jakarta", expected: 14.0, offered: 17.2 },
  { city: "Bandung", expected: 13.8, offered: 17.5 },
  { city: "Surabaya", expected: 11.5, offered: 13.0 },
  { city: "Yogyakarta", expected: 10.5, offered: 15.8 },
];

export const MOCK_DEMOGRAPHICS = [
  { gender: "male", label: "Laki-laki", count: 9, fill: "var(--color-male)" },
  { gender: "female", label: "Perempuan", count: 6, fill: "var(--color-female)" },
];

export const demographicsChartConfig = {
  count: { label: "Kandidat" },
  male: { label: "Laki-laki", color: "var(--color-chart-3)" },
  female: { label: "Perempuan", color: "var(--color-chart-4)" },
} satisfies ChartConfig;

export const MOCK_CATEGORIES = [
  { category: "Engineering", applicants: 7 },
  { category: "Design", applicants: 4 },
  { category: "Data", applicants: 2 },
  { category: "Product", applicants: 2 },
];

export const categoryChartConfig = {
  applicants: {
    label: "Total Pelamar",
    color: "var(--color-chart-4)",
  },
} satisfies ChartConfig;