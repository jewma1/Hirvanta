"use client";

import { useEffect, useState } from "react";

type JobItem = {
  title: string;
  company: string;
  location: string;
  description: string;
};

export default function RecruiterPage() {
  const [name, setName] = useState("");
  const [messageType, setMessageType] = useState("LinkedIn Connection");
  const [jobDescription, setJobDescription] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("hirvanta_selected_job");
    if (stored) {
      const job: JobItem = JSON.parse(stored);
      setJobDescription(`${job.title} at ${job.company} (${job.location})\n\n${job.description}`);
    }
  }, []);

  async function generateMessage() {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const prompt = `
Write a professional recruiter message.

Candidate Name: ${name}
Message Type: ${messageType}

Target Job Description:
${jobDescription}
      `;

      const response = await fetch(`${apiUrl}/api/ai/recruiter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setResult(data.text || "No recruiter message generated.");
    } catch {
      setResult("Something went wrong while generating the recruiter message.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Recruiter Message Generator</h1>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your Name"
              className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            />

            <select
              value={messageType}
              onChange={(e) => setMessageType(e.target.value)}
              className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            >
              <option>LinkedIn Connection</option>
              <option>HR Email</option>
              <option>Follow-up Message</option>
            </select>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description..."
              className="min-h-[240px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <button
              onClick={generateMessage}
              disabled={loading}
              className="mt-5 rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Message"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">Generated Message</h2>
            <div className="mt-4 min-h-[420px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result || "Your message will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
