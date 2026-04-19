"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

export default function JobDetailsPage() {
  const [job, setJob] = useState<JobItem | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hirvanta_selected_job");
    if (stored) {
      setJob(JSON.parse(stored));
    }
  }, []);

  function saveToTracker() {
    if (!job) return;

    const existing = localStorage.getItem("hirvanta_tracker_jobs");
    const parsed = existing ? JSON.parse(existing) : [];

    const alreadyExists = parsed.some((item: JobItem) => item.id === job.id);
    if (!alreadyExists) {
      parsed.unshift({
        ...job,
        status: "Saved",
        savedAt: new Date().toISOString()
      });
      localStorage.setItem("hirvanta_tracker_jobs", JSON.stringify(parsed));
    }

    setSaved(true);
  }

  if (!job) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-3xl font-bold text-slate-900">No job selected</h1>
        <p className="mt-3 text-slate-600">
          Go to Job Finder and choose a job first.
        </p>
        <Link
          href="/jobs"
          className="mt-6 inline-block rounded-2xl bg-[#2546A8] px-5 py-3 font-semibold text-white"
        >
          Back to Jobs
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h1 className="text-4xl font-bold text-slate-900">{job.title}</h1>
            <p className="mt-3 text-lg text-slate-500">
              {job.company} • {job.location} • Posted {job.posted}
            </p>
          </div>

          <span className="rounded-full bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-700">
            {job.type.toUpperCase()}
          </span>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={job.applyUrl}
            target="_blank"
            rel="noreferrer"
            className="rounded-2xl bg-[#2546A8] px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Apply on LinkedIn ↗
          </a>

          <button
            onClick={saveToTracker}
            className="rounded-2xl bg-slate-100 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-200"
          >
            {saved ? "Saved to Tracker" : "Save Job"}
          </button>
        </div>
      </section>

      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h2 className="text-2xl font-bold text-slate-900">Job Description</h2>
        <p className="mt-4 whitespace-pre-line text-base leading-8 text-slate-600">
          {job.description}
        </p>

        <h3 className="mt-8 text-xl font-bold text-slate-900">Key Requirements</h3>
        <ul className="mt-4 list-disc space-y-3 pl-6 text-base text-slate-600">
          {job.requirements.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <div className="mt-8 rounded-3xl border border-sky-200 bg-sky-50 p-6 text-center">
          <h3 className="text-xl font-bold text-sky-800">Perfect Match Found!</h3>
          <p className="mt-2 text-sky-700">
            Hirvanta can tailor your resume, cover letter, and interview prep for this exact role.
          </p>

          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <Link
              href="/resume"
              className="rounded-2xl bg-sky-700 px-5 py-3 font-semibold text-white transition hover:opacity-90"
            >
              Tailor Resume
            </Link>
            <Link
              href="/cover-letter"
              className="rounded-2xl bg-white px-5 py-3 font-semibold text-sky-800 transition hover:bg-sky-100"
            >
              Generate Cover Letter
            </Link>
            <Link
              href="/interview"
              className="rounded-2xl bg-white px-5 py-3 font-semibold text-sky-800 transition hover:bg-sky-100"
            >
              Prepare Interview
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
