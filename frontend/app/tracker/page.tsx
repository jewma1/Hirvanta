"use client";

import { useEffect, useMemo, useState } from "react";
import { Briefcase, CalendarDays, MapPin, Trash2, Search, Filter } from "lucide-react";

type TrackerJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  workMode: string;
  experience: string;
  source: string;
  applyUrl: string;
  description: string;
  status?: "Saved" | "Applied" | "Interview" | "Offer" | "Rejected";
  savedAt?: string;
};

const STORAGE_KEY = "hirvanta_tracker_jobs";

export default function TrackerPage() {
  const [jobs, setJobs] = useState<TrackerJob[]>([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        setJobs(JSON.parse(stored));
      } catch {
        setJobs([]);
      }
    }
  }, []);

  function persist(updated: TrackerJob[]) {
    setJobs(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  }

  function updateStatus(id: string, status: TrackerJob["status"]) {
    const updated = jobs.map((job) => (job.id === id ? { ...job, status } : job));
    persist(updated);
  }

  function removeJob(id: string) {
    const updated = jobs.filter((job) => job.id !== id);
    persist(updated);
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const matchesSearch =
        !search ||
        job.title.toLowerCase().includes(search.toLowerCase()) ||
        job.company.toLowerCase().includes(search.toLowerCase()) ||
        job.location.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "All" || (job.status || "Saved") === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [jobs, search, statusFilter]);

  const counts = useMemo(() => {
    return {
      total: jobs.length,
      saved: jobs.filter((job) => (job.status || "Saved") === "Saved").length,
      applied: jobs.filter((job) => job.status === "Applied").length,
      interview: jobs.filter((job) => job.status === "Interview").length,
      offer: jobs.filter((job) => job.status === "Offer").length
    };
  }, [jobs]);

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">Job Tracker</h1>
            <p className="mt-2 text-slate-500">
              Track saved jobs, applications, interviews, and offers in one place.
            </p>
          </div>

          <div className="rounded-2xl bg-[#2546A8] px-5 py-3 text-sm font-semibold text-white">
            Total Jobs: {counts.total}
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-5">
          <StatCard label="Saved" value={counts.saved} />
          <StatCard label="Applied" value={counts.applied} />
          <StatCard label="Interview" value={counts.interview} />
          <StatCard label="Offer" value={counts.offer} />
          <StatCard label="All Jobs" value={counts.total} />
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-[1.4fr_0.8fr]">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by role, company, or location"
              className="w-full rounded-2xl border border-slate-200 py-3 pl-10 pr-4 outline-none focus:border-brand-500"
            />
          </div>

          <div className="relative">
            <Filter className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full rounded-2xl border border-slate-200 py-3 pl-10 pr-4 outline-none focus:border-brand-500"
            >
              <option>All</option>
              <option>Saved</option>
              <option>Applied</option>
              <option>Interview</option>
              <option>Offer</option>
              <option>Rejected</option>
            </select>
          </div>
        </div>
      </section>

      {filteredJobs.length === 0 ? (
        <div className="rounded-[28px] border border-slate-200 bg-white p-10 text-center shadow-soft">
          <div className="text-2xl font-semibold text-slate-900">No tracked jobs yet</div>
          <p className="mt-2 text-slate-500">
            Save jobs from Job Finder to see them here.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">{job.title}</h2>

                  <div className="mt-3 flex flex-wrap gap-4 text-sm text-slate-500">
                    <span className="inline-flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      {job.company}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <MapPin className="h-4 w-4" />
                      {job.location}
                    </span>

                    <span className="inline-flex items-center gap-2">
                      <CalendarDays className="h-4 w-4" />
                      {job.savedAt
                        ? new Date(job.savedAt).toLocaleDateString()
                        : "Recently saved"}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  <select
                    value={job.status || "Saved"}
                    onChange={(e) =>
                      updateStatus(job.id, e.target.value as TrackerJob["status"])
                    }
                    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
                  >
                    <option>Saved</option>
                    <option>Applied</option>
                    <option>Interview</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>

                  <button
                    onClick={() => removeJob(job.id)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-red-200 px-4 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                    Remove
                  </button>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-3 text-sm text-slate-500">
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                  {job.workMode}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                  {job.experience}
                </span>
                <span className="rounded-full bg-slate-100 px-3 py-1 font-medium">
                  {job.source}
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-slate-600">{job.description}</p>

              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={job.applyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-2xl bg-[#2546A8] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                >
                  Open Job
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="text-sm text-slate-500">{label}</div>
      <div className="mt-2 text-3xl font-bold text-slate-900">{value}</div>
    </div>
  );
}
