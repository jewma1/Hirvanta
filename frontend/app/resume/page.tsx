"use client";

import { useEffect, useState } from "react";

type JobItem = {
  title: string;
  company: string;
  location: string;
  description: string;
  requirements: string[];
};

export default function ResumePage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [preview, setPreview] = useState("");
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

  async function generateResume() {
    try {
      setLoading(true);
      setPreview("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const prompt = `
Create a professional ATS-friendly resume.

Candidate Details:
Name: ${fullName}
Email: ${email}
Phone: ${phone}
Education: ${education}
Experience: ${experience}
Skills: ${skills}
Job URL: ${jobUrl}

Target Job Description:
${jobDescription}
      `;

      const response = await fetch(`${apiUrl}/api/ai/resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setPreview(data.text || "No resume generated.");
    } catch {
      setPreview("Something went wrong while generating the resume.");
    } finally {
      setLoading(false);
    }
  }

  async function handleFileUpload(file: File | null) {
    if (!file) return;
    const text = await file.text();
    setJobDescription(text);
  }

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Resume Builder</h1>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">AI Auto Resume Maker</h2>
            <p className="mt-2 text-slate-500">
              Enter your details and paste, upload, or link a target job description.
            </p>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Full Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={education}
                onChange={(e) => setEducation(e.target.value)}
                placeholder="Education"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
            </div>

            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience summary"
              className="mt-4 min-h-[110px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <input
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Skills (React, Python, Project Management)"
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            />

            <div className="mt-5 text-sm font-medium text-slate-700">Target Job Description</div>

            <div className="mt-3 flex flex-wrap gap-2">
              <label className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
                Upload
                <input
                  type="file"
                  accept=".txt,.md,.html,.json"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                />
              </label>

              <input
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                placeholder="Paste job URL"
                className="min-w-[220px] flex-1 rounded-xl border border-slate-200 px-4 py-2 outline-none focus:border-brand-500"
              />
            </div>

            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Paste the job description here..."
              className="mt-4 min-h-[180px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <button
              onClick={generateResume}
              disabled={loading}
              className="mt-5 rounded-2xl bg-[#7c83ff] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating Resume..." : "Generate Resume"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">Preview</h2>
            <div className="mt-4 min-h-[620px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {preview || "Your resume will appear here after generation."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
