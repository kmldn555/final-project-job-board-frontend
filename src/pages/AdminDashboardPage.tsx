import { useState } from "react";
import {
    ArrowRight,
    Award,
    BriefcaseBusiness,
    CalendarClock,
    Clock,
    DollarSign,
    Layers,
    Plus,
    TrendingUp,
    Users,
} from "lucide-react";
import { SidebarInset, SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AppSidebar } from "@/components/layout/AdminSidebar";
import { MOCK_KPI_CARDS } from "@/data/mockAnalytics";
import { ExtraTabCharts, FunnelAreaCard, SalaryComparisonGrid } from "@/components/chart/AnalyticsCharts";


const KPI_ICONS = [BriefcaseBusiness, Users, CalendarClock, Award];

const FILTER_TABS = [
    { id: "overview", label: "Ringkasan", icon: TrendingUp },
    { id: "demographics", label: "Demografi", icon: Users },
    { id: "salary", label: "Panduan Gaji", icon: DollarSign },
    { id: "categories", label: "Bidang Kerja", icon: Layers },
] as const;

export const AdminDashboardPage = () => {
    const [activeTab, setActiveTab] = useState<string>("overview");

    return (
        <SidebarProvider>
            <AppSidebar />
            <SidebarInset className="bg-paper">
                {/* Topbar bersih ala Homepage */}
                <header className="sticky top-0 z-20 flex h-16 items-center justify-between border-b border-line bg-sheet/95 px-6 backdrop-blur-xs">
                    <div className="flex items-center gap-4">
                        <SidebarTrigger className="rounded-xl border border-line bg-sheet text-ink hover:bg-accent-soft" />
                        <nav className="hidden items-center gap-6 text-sm font-medium text-ink-3 sm:flex">
                            <span className="cursor-pointer transition hover:text-ink">Lowongan</span>
                            <span className="cursor-pointer transition hover:text-ink">Interview</span>
                            <span className="font-semibold text-accent-ink">Analitik</span>
                        </nav>
                    </div>

                    <div className="flex items-center gap-3">
                        <span className="hidden items-center gap-1.5 text-xs text-ink-3 md:inline-flex">
                            <Clock className="h-3.5 w-3.5" />
                            Diperbarui hari ini
                        </span>
                        <Avatar className="h-8 w-8 border border-line">
                            <AvatarFallback className="bg-accent-soft text-xs font-bold text-ink">
                                B
                            </AvatarFallback>
                        </Avatar>
                        <span className="text-sm font-semibold text-ink">Budi</span>
                    </div>
                </header>

                {/* Konten Utama */}
                <main className="mx-auto w-full max-w-7xl space-y-6 p-6 lg:p-8">
                    {/* Header Banner bergaya EmployerBanner di Homepage */}
                    <section className="relative overflow-hidden rounded-2xl bg-linear-to-r from-ink to-ink-2 px-6 py-7 shadow-xl shadow-ink/15 sm:px-8">
                        <div
                            className="pointer-events-none absolute -top-20 -right-16 h-64 w-64 rounded-full bg-accent/25 blur-2xl"
                            aria-hidden="true"
                        />
                        <div className="relative flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
                            <div>
                                <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
                                    Untuk perusahaan
                                </span>
                                <h1 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Dashboard Rekrutmen & Analitik
                                </h1>
                                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-blue-100">
                                    Pantau performa lowongan aktif, demografi pelamar, dan perbandingan kisaran gaji dalam satu halaman.
                                </p>
                            </div>

                            <Button className="self-start rounded-xl bg-accent px-5 py-5 text-sm font-bold text-ink shadow-sm transition hover:bg-white lg:self-center">
                                <Plus className="mr-1.5 h-4 w-4" />
                                Posting Lowongan
                                <ArrowRight className="ml-1.5 h-4 w-4" />
                            </Button>
                        </div>
                    </section>

                    {/* Filter Pills bergaya Popular Searches di JobSearchBar */}
                    <div className="flex flex-wrap items-center gap-2">
                        <span className="mr-1 text-xs font-medium text-ink-3">Tampilan:</span>
                        {FILTER_TABS.map(({ id, label, icon: Icon }) => {
                            const isActive = activeTab === id;
                            return (
                                <button
                                    key={id}
                                    type="button"
                                    onClick={() => setActiveTab(id)}
                                    className={
                                        isActive
                                            ? "inline-flex items-center gap-1.5 rounded-full bg-ink px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition cursor-pointer"
                                            : "inline-flex items-center gap-1.5 rounded-full border border-line bg-sheet px-4 py-1.5 text-xs font-medium text-ink-3 transition hover:border-accent hover:bg-accent-soft hover:text-ink cursor-pointer"
                                    }
                                >
                                    <Icon className={`h-3.5 w-3.5 ${isActive ? "text-accent" : ""}`} />
                                    {label}
                                </button>
                            );
                        })}
                    </div>

                    {/* 4 Kartu KPI bergaya JobCard (bg-sheet, border-line, border-l-4 border-l-accent) */}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {MOCK_KPI_CARDS.map((card, index) => {
                            const Icon = KPI_ICONS[index];
                            return (
                                <article
                                    key={card.id}
                                    className="group rounded-2xl border border-line border-l-4 border-l-accent bg-sheet p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg"
                                >
                                    <div className="flex items-start justify-between gap-2">
                                        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-ink">
                                            <Icon className="h-5 w-5" />
                                        </span>
                                        <span className="rounded-full bg-accent-soft px-2.5 py-1 text-[11px] font-bold text-ink">
                                            {card.badge}
                                        </span>
                                    </div>

                                    <div className="mt-4 text-3xl font-bold tracking-tight text-ink">
                                        {card.value}
                                    </div>
                                    <h2 className="mt-1 text-sm font-semibold text-ink transition group-hover:text-accent-ink">
                                        {card.title}
                                    </h2>
                                    <p className="mt-1 border-t border-line pt-2.5 text-xs text-ink-3">
                                        {card.subtitle}
                                    </p>
                                </article>
                            );
                        })}
                    </div>

                    {/* Area Grafik shadcn Chart */}
                    {activeTab === "overview" && (
                        <div className="space-y-6">
                            <FunnelAreaCard />
                            <SalaryComparisonGrid />
                        </div>
                    )}
                    {activeTab === "salary" && <SalaryComparisonGrid />}
                    {(activeTab === "demographics" || activeTab === "categories") && (
                        <ExtraTabCharts />
                    )}
                </main>
            </SidebarInset>
        </SidebarProvider>
    );
};