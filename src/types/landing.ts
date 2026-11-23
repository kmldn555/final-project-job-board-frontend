import type { LucideIcon } from "lucide-react";

export type EmploymentType = "Full-time" | "Part-time" | "Contract" | "Internship";

export type WorkMode = "On-site" | "Hybrid" | "Remote";

export interface JobCategory {
  id: string;
  name: string;
  description: string;
  openPositions: number;
  icon: LucideIcon;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  categoryId: string;
  employmentType: EmploymentType;
  workMode: WorkMode;
  salary: string;
  postedAt: string;
  logoText: string;
  logoClass: string;
  isFeatured?: boolean;
}

export interface JobSearchQuery {
  keyword: string;
  location: string;
}

export interface SiteStat {
  value: string;
  label: string;
}

export interface HowItWorksStep {
  number: string;
  title: string;
  description: string;
}

export interface SalaryInsight {
  role: string;
  range: string;
  note: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}
