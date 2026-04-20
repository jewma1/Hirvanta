"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, MapPin, Briefcase, Building2, ArrowRight } from "lucide-react";

type JobSearchMode = "role" | "skill";

type JobCard = {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: string;
  experience: string;
  source: string;
  applyUrl: string;
  description: string;
};

export default function JobsPage() {
  const [searchMode, setSearchMode] = useState<JobSearchMode>("role");
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [experience, setExperience] = useState("");
  const [results, setResults] = useState<JobCard[]>([]);
  const [searched, setSearched] = useState(false);

  const normalizedQuery = query.trim().toLowerCase();
  const normalizedLocation = location.trim().toLowerCase();
  const normalizedExperience = experience.trim().toLowerCase();

  const demoPool: JobCard[] = useMemo(
    () => [
      {
        id: "1",
        title: "Design Engineer",
        company: "ABC Engineering",
        location: "Pune",
        workMode: "On-site",
        experience: "2-4 years",
        source: "Company Website",
        applyUrl: "https://example.com/apply/design-engineer",
        description:
          "Responsible for design work, technical drawings, and design validation for engineering products."
      },
      {
        id: "2",
        title: "Project Engineer",
        company: "Ingersoll Rand",
        location: "Bangalore",
        workMode: "On-site",
        experience: "3-5 years",
        source: "LinkedIn",
        applyUrl: "https://example.com/apply/project-engineer",
        description:
          "Manage project timelines, cross-functional coordination, documentation, and execution support."
      },
      {
        id: "3",
        title: "Frontend Developer",
        company: "TechNova",
        location: "Remote",
        workMode: "Remote",
        experience: "1-3 years",
        source: "Indeed",
        applyUrl: "https://example.com/apply/frontend-developer",
        description:
          "Build web interfaces with React, improve performance, and collaborate with UI/UX and backend teams."
      },
      {
        id: "4",
        title: "Backend Developer",
        company: "CloudAxis",
        location: "Hyderabad",
        workMode: "Hybrid",
        experience: "2-5 years",
        source: "Company Website",
        applyUrl: "https://example.com/apply/backend-developer",
        description:
          "Develop APIs, manage databases, and build scalable backend systems for enterprise products."
      },
      {
        id: "5",
        title: "Accountant",
        company: "Global Finance Hub",
        location: "Delhi",
        workMode: "On-site",
        experience: "1-4 years",
        source: "Indeed",
        applyUrl: "https://example.com/apply/accountant",
        description:
          "Handle accounting operations, bookkeeping, invoice processing, reconciliations, and reporting."
      },
      {
        id: "6",
        title: "Data Analyst",
        company: "Insight Labs",
        location: "Remote",
        workMode: "Remote",
        experience: "0-2 years",
        source: "LinkedIn",
        applyUrl: "https://example.com/apply/data-analyst",
        description:
          "Analyze business data, create reports and dashboards, and support data-driven decision making."
      }
    ],
    []
  );

  function handleSearch() {
    const filtered = demoPool.filter((job) => {
      const queryMatch =
        !normalizedQuery ||
        job.title.toLowerCase().includes(normalizedQuery) ||
        job.description.toLowerCase().includes(normalizedQuery) ||
        job.company.toLowerCase().includes(normalizedQuery);

      const locationMatch =
        !normalizedLocation || job.location.toLowerCase().includes(normalizedLocation);

      const experienceMatch =
        !normalizedExperience ||
        job.experience.toLowerCase().includes(normalizedExperience);

      return queryMatch && locationMatch && experienceMatch;
    });

    setResults(filtered);
    setSearched(true);
  }

  function saveJobToLocal(job: JobCard) {
    const jobDescription = `
Job Title: ${job.title}
Company: ${job.company}
Location: ${job.location}
Work Mode: ${job.workMode}
Experience: ${job.experience}
Source: ${job.source}

Job Description:
${job.description}
    `.trim();

    localStorage.setItem("hirvanta_selected_job_description", jobDescription);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Job Finder</h1>
        <p className="mt-2 text-slate-500">
          Search by role, skill, location, and experience. This page is ready for a real jobs API later, so it does not lock you to one career path.
        </p>

        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <button
            onClick={() => setSearchMode("role")}
            className={`rounded-2xl border p-4 text-left ${
              searchMode === "role"
                ? "border-[#2546A8] bg-brand-50 ring-2 ring-[#2546A8]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="text-lg font-semibold text-slate-900">Search by Role</div>
            <div className="mt-1 text-sm text-slate-500">
              Example: Design Engineer, Accountant, Teacher, Data Analyst
            </div>
          </button>

          <button
            onClick={() => setSearchMode("skill")}
            className={`rounded-2xl border p-4 text-left ${
              searchMode === "skill"
                ? "border-[#2546A8] bg-brand-50 ring-2 ring-[#2546A8]/10"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="text-lg font-semibold text-slate-900">Search by Skill</div>
            <div className="mt-1 text-sm text-slate-500">
              Example: AutoCAD, Excel, Python, React, Project Management
            </div>
          </button>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={
              searchMode === "role"
                ? "Enter role or job title"
                : "Enter skill or keyword"
            }
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
          />

          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Location (city, state, country, remote)"
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
          />

          <input
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            placeholder="Experience (0-2, 2-5, fresher)"
            className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
          />
        </div>

        <button
          onClick={handleSearch}
          className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          <Search className="h-4 w-4" />
          Search Jobs
        </button>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {results.map((job) => (
          <div
            key={job.id}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="text-2xl font-bold text-slate-900">{job.title}</h2>
                <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <Building2 className="h-4 w-4" />
                    {job.company}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    {job.location}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Briefcase className="h-4 w-4" />
                    {job.experience}
                  </span>
                </div>
              </div>

              <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                {job.workMode}
              </div>
            </div>

            <p className="mt-4 text-sm leading-7 text-slate-600">{job.description}</p>

            <div className="mt-4 text-sm text-slate-500">Source: {job.source}</div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={job.applyUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-2xl bg-[#2546A8] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
              >
                Apply Now
              </a>

              <Link
                href="/resume"
                onClick={() => saveJobToLocal(job)}
                className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Tailor Resume
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/cover-letter"
                onClick={() => saveJobToLocal(job)}
                className="rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Cover Letter
              </Link>
            </div>
          </div>
        ))}

        {searched && results.length === 0 ? (
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-soft xl:col-span-2">
            <div className="text-2xl font-semibold text-slate-900">No jobs found</div>
            <p className="mt-2 text-slate-500">
              Try a different title, skill, location, or experience range.
            </p>
          </div>
        ) : null}

        {!searched ? (
          <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-10 text-center text-slate-500 shadow-soft xl:col-span-2">
            Search for any role, skill, location, or experience level to get started.
          </div>
        ) : null}
      </section>
    </div>
  );
}
