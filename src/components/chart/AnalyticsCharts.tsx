// [FE] src/components/charts/AnalyticsCharts.tsx
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  MOCK_CATEGORIES,
  MOCK_DEMOGRAPHICS,
  MOCK_FUNNEL_DATA,
  MOCK_SALARY_CATEGORY,
  MOCK_SALARY_CITY,
  categoryChartConfig,
  demographicsChartConfig,
  funnelChartConfig,
  salaryChartConfig,
} from "@/data/mockAnalytics";

export const FunnelAreaCard = () => (
  <Card className="rounded-2xl border-line bg-sheet shadow-sm">
    <CardHeader className="pb-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <CardTitle className="text-base font-bold text-ink">
            Alur Seleksi Kandidat (Pipeline Funnel)
          </CardTitle>
          <CardDescription className="mt-1 text-xs text-ink-3">
            Perjalanan kandidat dari lamaran masuk hingga keputusan akhir
          </CardDescription>
        </div>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-bold text-ink">
          5 Tahap Rekrutmen
        </span>
      </div>
    </CardHeader>
    <CardContent>
      <ChartContainer config={funnelChartConfig} className="h-64 w-full">
        <AreaChart data={MOCK_FUNNEL_DATA} margin={{ left: 4, right: 12, top: 8 }}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="stage" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis allowDecimals={false} tickLine={false} axisLine={false} />
          <ChartTooltip content={<ChartTooltipContent indicator="line" />} />
          <Area
            type="monotone"
            dataKey="total"
            stroke="var(--color-total)"
            strokeWidth={2.5}
            fill="var(--color-chart-1)"
            fillOpacity={0.9}
          />
        </AreaChart>
      </ChartContainer>
    </CardContent>
  </Card>
);

export const SalaryComparisonGrid = () => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <Card className="rounded-2xl border-line bg-sheet shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold text-ink">
          Kisaran Gaji per Bidang (IDR)
        </CardTitle>
        <CardDescription className="text-xs text-ink-3">
          Rata-rata ekspektasi pelamar dibanding penawaran perusahaan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={salaryChartConfig} className="h-64 w-full">
          <BarChart data={MOCK_SALARY_CATEGORY}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="category" tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(v) => `${v}M`} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar dataKey="expected" fill="var(--color-expected)" radius={[6, 6, 0, 0]} />
            <Bar dataKey="offered" fill="var(--color-offered)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-line bg-sheet shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold text-ink">
          Kisaran Gaji per Kota (IDR)
        </CardTitle>
        <CardDescription className="text-xs text-ink-3">
          Perbandingan patokan gaji regional berdasarkan lokasi penempatan
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={salaryChartConfig} className="h-64 w-full">
          <BarChart data={MOCK_SALARY_CITY}>
            <CartesianGrid vertical={false} strokeDasharray="3 3" />
            <XAxis dataKey="city" tickLine={false} axisLine={false} />
            <YAxis tickFormatter={(v) => `${v}M`} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <ChartLegend content={<ChartLegendContent />} />
            <Bar
              dataKey="expected"
              fill="var(--color-chart-1)"
              stroke="var(--color-chart-3)"
              strokeWidth={1.5}
              radius={[6, 6, 0, 0]}
            />
            <Bar dataKey="offered" fill="var(--color-chart-3)" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>
);

export const ExtraTabCharts = () => (
  <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
    <Card className="rounded-2xl border-line bg-sheet shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold text-ink">
          Demografi Gender Pelamar
        </CardTitle>
        <CardDescription className="text-xs text-ink-3">
          Proporsi kandidat yang mengirimkan lamaran aktif
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={demographicsChartConfig} className="h-64 w-full">
          <PieChart>
            <ChartTooltip content={<ChartTooltipContent nameKey="label" />} />
            <Pie
              data={MOCK_DEMOGRAPHICS}
              dataKey="count"
              nameKey="label"
              innerRadius={52}
              outerRadius={84}
              paddingAngle={4}
            >
              {MOCK_DEMOGRAPHICS.map((entry) => (
                <Cell key={entry.gender} fill={entry.fill} />
              ))}
            </Pie>
            <ChartLegend content={<ChartLegendContent nameKey="gender" />} />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>

    <Card className="rounded-2xl border-line bg-sheet shadow-sm">
      <CardHeader className="pb-3">
        <CardTitle className="text-base font-bold text-ink">
          Minat Bidang Pekerjaan
        </CardTitle>
        <CardDescription className="text-xs text-ink-3">
          Kategori lowongan dengan jumlah pelamar terbanyak
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={categoryChartConfig} className="h-64 w-full">
          <BarChart data={MOCK_CATEGORIES} layout="vertical" margin={{ left: 12 }}>
            <CartesianGrid horizontal={false} strokeDasharray="3 3" />
            <XAxis type="number" allowDecimals={false} tickLine={false} axisLine={false} />
            <YAxis type="category" dataKey="category" width={90} tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="applicants" fill="var(--color-applicants)" radius={[0, 6, 6, 0]} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  </div>
);