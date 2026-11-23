import { ArrowRight, BriefcaseBusiness, Clock, MapPin } from "lucide-react";
import type { Job } from "../../types/landing";

interface JobCardProps {
  job: Job;
  className?: string;
}

export default function JobCard({ job, className = "" }: JobCardProps) {
  return (
    <article
      className={`group h-full rounded-2xl border border-line bg-sheet p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-accent hover:shadow-lg sm:p-6 ${className}`}
    >
      <div className="flex items-start gap-4">
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${job.logoClass}`}
          aria-hidden="true"
        >
          {job.logoText}
        </span>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-semibold leading-snug text-ink transition group-hover:text-accent-ink sm:text-lg">
                {job.title}
              </h3>
              <p className="mt-1 text-sm text-ink-3">{job.company}</p>
            </div>

            {job.isFeatured && (
              <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-ink">
                Unggulan
              </span>
            )}
          </div>

          <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-ink-3">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
              {job.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <BriefcaseBusiness className="h-4 w-4 shrink-0" aria-hidden="true" />
              {job.employmentType}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-4 w-4 shrink-0" aria-hidden="true" />
              {job.postedAt}
            </span>
          </div>

          <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
            <div className="flex flex-wrap gap-2">
              <span className="rounded-lg bg-accent-soft px-2.5 py-1 text-xs font-semibold text-ink">
                {job.salary}
              </span>
              <span className="rounded-lg bg-paper px-2.5 py-1 text-xs font-medium text-ink-2">
                {job.workMode}
              </span>
            </div>

            <a
              href="#cta"
              className="inline-flex items-center gap-1 text-sm font-semibold text-accent-ink transition hover:text-ink"
            >
              Lamar
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
