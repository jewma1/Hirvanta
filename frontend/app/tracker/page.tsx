"use client";

import { useEffect, useState } from "react";

type TrackedJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  type: string;
  posted: string;
  applyUrl: string;
  description: string;
  requirements: string[];
  status?: string;
  savedAt?: string;
};

export default function TrackerPage() {
  const [jobs, setJobs] = useState<TrackedJob[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("hirvanta_tracker_jobs");
    if (stored) {
      setJobs(JSON.parse(stored));
    }
  }, []);

  function updateStatus(id: string, status: string) {
    const updated = jobs.map((job) => (job.id === id ? { ...job, status } : job));
    setJobs(updated);
    localStorage.setItem("hirvanta_tracker_jobs", JSON.stringify(updated));
  }

  function removeJob(id: string) {
    const updated = jobs.filter((job) => job.id !== id);
    setJobs(updated);
    localStorage.setItem("hirvanta_tracker_jobs", JSON.stringify(updated));
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <h1 className="text-4xl font-bold text-slate-900">Job Tracker</h1>
          <div className="rounded-2xl bg-[#2546A8] px-5 py-3 text-sm font-semibold text-white">
            Saved Jobs: {jobs.length}
          </div>
        </div>

        {jobs.length === 0 ? (
          <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-50 p-10 text-center">
            <div className="text-2xl font-semibold text-slate-900">No jobs tracked yet</div>
            <p className="mt-2 text-slate-500">
              Save a job from the Job Finder or Job Details page to get started.
            </p>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-2xl font-bold text-slate-900">{job.title}</div>
                    <div className="mt-2 text-slate-500">
                      {job.company} • {job.location}
                    </div>
                    <div className="mt-1 text-sm text-slate-400">
                      Saved {job.savedAt ? new Date(job.savedAt).toLocaleString() : ""}
                    </div>
                  </div>

                  <select
                    value={job.status || "Saved"}
                    onChange={(e) => updateStatus(job.id, e.target.value)}
                    className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
                  >
                    <option>Saved</option>
                    <option>Applied</option>
                    <option>Interviewing</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <a
                    href={job.applyUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-2xl bg-[#2546A8] px-4 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  >
                    Open Job
                  </a>

                  <button
                    onClick={() => removeJob(job.id)}
                    className="rounded-2xl bg-slate-100 px-4 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
