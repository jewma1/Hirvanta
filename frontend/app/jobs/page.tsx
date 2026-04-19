"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { MapPin, Building2, Briefcase, ArrowRight } from "lucide-react";

type JobItem = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  applyUrl: string;
  description: string;
  requirements: string[];
};

const JOBS: JobItem[] = [
  {
    id: "project-engineer-ingersoll-rand",
    title: "Project Engineer",
    company: "Ingersoll Rand",
    location: "Bangalore",
    type: "Full-time",
    posted: "2 days ago",
    applyUrl: "https://www.linkedin.com/jobs/",
    description:
      "As a Project Engineer, you will oversee engineering projects from planning to execution, coordinate with cross-functional teams, and ensure delivery against technical and business milestones.",
    requirements: [
      "Bachelor’s degree in Mechanical, Civil, Electrical, or related Engineering discipline",
      "2–5 years of project engineering or execution experience",
      "Strong stakeholder communication and reporting skills",
      "Knowledge of planning tools, quality, and documentation"
    ]
  },
  {
    id: "frontend-developer-google",
    title: "Frontend Developer",
    company: "Google",
    location: "Remote",
    type: "Full-time",
    posted: "1 day ago",
    applyUrl: "https://www.linkedin.com/jobs/",
    description:
      "Build fast, accessible frontend experiences using modern JavaScript frameworks and collaborate with design and backend teams to ship high-quality products.",
    requirements: [
      "Strong React and JavaScript skills",
      "Experience with responsive UI systems",
      "Good understanding of API integration",
      "Ability to work in a fast-moving product team"
    ]
  },
  {
    id: "backend-engineer-microsoft",
    title: "Backend Engineer",
    company: "Microsoft",
    location: "Bangalore",
    type: "Full-time",
    posted: "3 days ago",
    applyUrl: "https://www.linkedin.com/jobs/",
    description:
      "Design and maintain backend services, APIs, and scalable data systems with strong reliability, testing, and performance standards.",
    requirements: [
      "Experience with Node.js, APIs, and databases",
      "Knowledge of distributed systems fundamentals",
      "Strong debugging and system design skills",
      "Experience with cloud deployment"
    ]
  },
  {
    id: "full-stack-developer-amazon",
    title: "Full Stack Developer",
    company: "Amazon",
    location: "Hyderabad",
    type: "Full-time",
    posted: "4 days ago",
    applyUrl: "https://www.linkedin.com/jobs/",
    description:
      "Work across frontend and backend systems, build product features end-to-end, and collaborate with business, design, and engineering teams.",
    requirements: [
      "Experience in both frontend and backend development",
      "Understanding of REST APIs and databases",
      "Strong product thinking",
      "Ability to ship features independently"
    ]
  }
];

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  const filteredJobs = useMemo(() => {
    return JOBS.filter((job) => {
      const matchesQuery =
        !query ||
        job.title.toLowerCase().includes(query.toLowerCase()) ||
        job.company.toLowerCase().includes(query.toLowerCase());

      const matchesLocation =
        !location || job.location.toLowerCase().includes(location.toLowerCase());

      return matchesQuery && matchesLocation;
    });
  }, [query, location]);

  function saveSelectedJob(job: JobItem) {
    localStorage.setItem("hirvanta_selected_job", JSON.stringify(job));
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Job Finder
        </h1>
        <p className="mt-2 text-slate-500">
          Search jobs and send the selected role directly into Resume Builder, Cover Letter, and Interview Coach.
        </p>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
          <div className="grid gap-4 md:grid-cols-3">
            <input
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              placeholder="Role (Project Engineer)"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />

            <input
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              placeholder="Location (Bangalore)"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <button className="rounded-2xl bg-[#2546A8] px-5 py-3 font-semibold text-white transition hover:opacity-90">
              Search Jobs
            </button>
          </div>
        </div>
      </section>

      <section className="grid gap-5 xl:grid-cols-2">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{job.title}</h3>
                  <div className="mt-2 flex flex-wrap gap-4 text-sm text-slate-500">
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
                      {job.type}
                    </span>
                  </div>
                </div>

                <div className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  Posted {job.posted}
                </div>
              </div>

              <p className="mt-4 line-clamp-3 text-sm leading-7 text-slate-600">
                {job.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/jobs/details"
                  onClick={() => saveSelectedJob(job)}
                  className="rounded-2xl bg-[#2546A8] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  View Details
                </Link>

                <Link
                  href="/resume"
                  onClick={() => saveSelectedJob(job)}
                  className="inline-flex items-center gap-2 rounded-2xl border border-slate-300 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
                >
                  Tailor Resume
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-soft xl:col-span-2">
            <div className="text-xl font-semibold text-slate-900">No jobs found</div>
            <p className="mt-2 text-slate-500">Try a different role or location.</p>
          </div>
        )}
      </section>
    </div>
  );
}
