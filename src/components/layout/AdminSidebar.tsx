import {
    BriefcaseBusiness,
    CalendarClock,
    BarChart3,
    Users,
    ClipboardCheck,
    Building2,
} from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar";

const WORKSPACE_MENU = [
    { id: "jobs", label: "Lowongan Kerja", icon: BriefcaseBusiness, active: false },
    { id: "interviews", label: "Jadwal Interview", icon: CalendarClock, active: false },
    { id: "analytics", label: "Analitik & Laporan", icon: BarChart3, active: true },
];

const SHORTCUT_MENU = [
    { id: "review", label: "Review Pelamar", icon: Users },
    { id: "pretest", label: "Pre-Test", icon: ClipboardCheck },
];

export const AppSidebar = () => (
    <Sidebar className="border-r border-line bg-sheet">
        <SidebarHeader className="h-16 border-b border-line px-5 flex flex-row items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-ink text-white shadow-xs">
                <Building2 className="h-5 w-5 text-accent" />
            </div>
            <div className="flex flex-col leading-tight">
                <span className="text-sm font-bold tracking-tight text-ink">
                    JobBoard<span className="text-accent-ink">.id</span>
                </span>
                <span className="text-[11px] text-ink-3">CariKerja</span>
            </div>
        </SidebarHeader>

        <SidebarContent className="px-3 py-4">
            <SidebarGroup>
                <SidebarGroupLabel className="text-[11px] font-bold uppercase tracking-wider text-ink-3">
                    Workspace Perusahaan
                </SidebarGroupLabel>
                <SidebarMenu className="mt-1.5 space-y-1">
                    {WORKSPACE_MENU.map(({ id, label, icon: Icon, active }) => (
                        <SidebarMenuItem key={id}>
                            <SidebarMenuButton
                                isActive={active}
                                className={
                                    active
                                        ? "rounded-xl bg-ink px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-ink"
                                        : "rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-3 transition hover:bg-accent-soft hover:text-ink"
                                }
                            >
                                <Icon className={`h-4 w-4 ${active ? "text-accent" : ""}`} />
                                <span>{label}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>

            <SidebarGroup className="mt-4">
                <SidebarGroupLabel className="text-[11px] font-bold uppercase tracking-wider text-ink-3">
                    Pintasan Cepat
                </SidebarGroupLabel>
                <SidebarMenu className="mt-1.5 space-y-1">
                    {SHORTCUT_MENU.map(({ id, label, icon: Icon }) => (
                        <SidebarMenuItem key={id}>
                            <SidebarMenuButton className="rounded-xl px-3.5 py-2.5 text-sm font-medium text-ink-3 transition hover:bg-accent-soft hover:text-ink">
                                <Icon className="h-4 w-4" />
                                <span>{label}</span>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>

        <SidebarFooter className="border-t border-line p-4">
            <div className="rounded-xl border border-line bg-paper p-3">
                <span className="rounded-full bg-accent px-2.5 py-0.5 text-[10px] font-bold text-ink">
                    Untuk perusahaan
                </span>
                <p className="mt-2 text-xs font-semibold text-ink">Admin</p>
                <p className="mt-0.5 text-[11px] text-ink-3">Kelola lowongan & pantau pelamar.</p>
            </div>
        </SidebarFooter>
    </Sidebar>
);