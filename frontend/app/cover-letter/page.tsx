"use client";

import { useEffect, useState } from "react";

type JobItem = {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
};

export default function CoverLetterPage() {
  const [name, setName] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hirvanta_selected_job");
    if (stored) {
      const job: JobItem = JSON.parse(stored);
      setJobDescription(
        `${job.title} at ${job.company} (${job.location})\n\n${job.description}\n\nRequirements:\n- ${job.requirements.join("\n- ")}`
      );
    }
  }, []);

  async function generateCoverLetter() {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const prompt = `
Write a professional cover letter.

Candidate Name: ${name}
Experience Summary: ${summary}
Skills: ${skills}

Target Job Description:
${jobDescription}
      `;

      const response = await fetch(`${apiUrl}/api/ai/cover-letter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setResult(data.text || "No cover letter generated.");
    } catch {
      setResult("Something went wrong while generating the cover letter.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Cover Letter Generator</h1>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            />

            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Experience Summary"
              className="mb-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <input
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Key Skills"
              className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            />

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description..."
              className="min-h-[220px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <button
              onClick={generateCoverLetter}
              disabled={loading}
              className="mt-5 rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Cover Letter"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">Your Cover Letter</h2>
            <div className="mt-4 min-h-[520px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result || "Your cover letter will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
