import { useMemo, useState } from "react";
import CTASection from "../components/landing/CTASection";
import EmployerBanner from "../components/landing/EmployerBanner";
import FAQ from "../components/landing/FAQ";
import HeroSection from "../components/landing/HeroSection";
import HowItWorks from "../components/landing/HowItWorks";
import JobCategories from "../components/landing/JobCategories";
import LatestJobs from "../components/landing/LatestJobs";
import SalaryInsights from "../components/landing/SalaryInsights";
import StatsBand from "../components/landing/StatsBand";
import Testimonials from "../components/landing/Testimonials";
import TrustStrip from "../components/landing/TrustStrip";
import Footer from "../components/layout/Footer";
import Navbar from "../components/layout/Navbar";
import { jobCategories, latestJobs } from "../data/landingMockData";
import type { JobSearchQuery } from "../types/landing";

const MAX_LATEST_JOBS = 5;

export default function Home() {
  const [query, setQuery] = useState<JobSearchQuery>({
    keyword: "",
    location: "",
  });
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);

  const visibleJobs = useMemo(() => {
    const keyword = query.keyword.toLowerCase();
    const location = query.location.toLowerCase();

    return latestJobs
      .filter(
        (job) => !activeCategoryId || job.categoryId === activeCategoryId,
      )
      .filter(
        (job) =>
          !keyword ||
          job.title.toLowerCase().includes(keyword) ||
          job.company.toLowerCase().includes(keyword),
      )
      .filter(
        (job) => !location || job.location.toLowerCase().includes(location),
      )
      .slice(0, MAX_LATEST_JOBS);
  }, [query, activeCategoryId]);

  const activeFilters = useMemo(() => {
    const filters: string[] = [];

    if (query.keyword) filters.push(`Posisi: ${query.keyword}`);
    if (query.location) filters.push(`Lokasi: ${query.location}`);

    const category = jobCategories.find((item) => item.id === activeCategoryId);
    if (category) filters.push(category.name);

    return filters;
  }, [query, activeCategoryId]);

  const handleSearch = (nextQuery: JobSearchQuery) => {
    setQuery(nextQuery);
    document
      .getElementById("latest-jobs")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handleClearFilters = () => {
    setQuery({ keyword: "", location: "" });
    setActiveCategoryId(null);
  };

  return (
    <div className="flex min-h-screen flex-col bg-paper">
      <Navbar />

      <main className="flex-1">
        <HeroSection
          query={query}
          onQueryChange={setQuery}
          onSearch={handleSearch}
        />
        <TrustStrip />
        <StatsBand />
        <JobCategories
          categories={jobCategories}
          activeCategoryId={activeCategoryId}
          onSelectCategory={setActiveCategoryId}
        />
        <LatestJobs
          jobs={visibleJobs}
          activeFilters={activeFilters}
          onClearFilters={handleClearFilters}
        />
        <HowItWorks />
        <SalaryInsights />
        <Testimonials />
        <EmployerBanner />
        <FAQ />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
