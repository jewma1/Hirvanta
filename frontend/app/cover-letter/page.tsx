"use client";

import { useEffect, useState } from "react";
import { Mail, Sparkles, Briefcase, Building2 } from "lucide-react";

export default function CoverLetterPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [whyThisRole, setWhyThisRole] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");

  useEffect(() => {
    const storedJobDescription = localStorage.getItem("hirvanta_selected_job_description");
    if (storedJobDescription) {
      setJobDescription(storedJobDescription);
    }
  }, []);

  async function handleFileUpload(file: File | null) {
    if (!file) return;
    const text = await file.text();
    setJobDescription(text);
  }

  async function generateCoverLetter() {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const prompt = `
Write a professional, polished, personalized cover letter.

Candidate Details:
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Target Company: ${company}
Target Role: ${role}
Experience Summary: ${experience}
Key Skills: ${skills}
Why this role / motivation: ${whyThisRole}
Job URL: ${jobUrl}

Job Description:
${jobDescription || "Not provided"}

Instructions:
- Make it sound human and confident
- Keep it professional and concise
- Highlight relevant skills and experience
- Tailor it to the company and role
- End with a strong closing
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
        <h1 className="text-4xl font-bold text-slate-900">Cover Letter Builder</h1>
        <p className="mt-2 text-slate-500">
          Generate a tailored cover letter for any role, company, or job description.
        </p>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Mail className="h-6 w-6 text-brand-600" />
              Candidate & Job Details
            </div>

            <div className="grid gap-4 md:grid-cols-2">
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
                value={role}
                onChange={(e) => setRole(e.target.value)}
                placeholder="Target Role"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500 md:col-span-2"
              />
            </div>

            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience Summary"
              className="mt-4 min-h-[120px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Key Skills"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={whyThisRole}
              onChange={(e) => setWhyThisRole(e.target.value)}
              placeholder="Why do you want this role / company?"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Briefcase className="h-5 w-5 text-brand-600" />
                Target Job Description
              </div>

              <input
                value={jobUrl}
                onChange={(e) => setJobUrl(e.target.value)}
                placeholder="Paste job URL"
                className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />

              <label className="mb-4 inline-block cursor-pointer rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-50">
                Upload Job Description File
                <input
                  type="file"
                  accept=".txt,.md,.html,.json"
                  className="hidden"
                  onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
                />
              </label>

              <textarea
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
                placeholder="Paste the job description here..."
                className="min-h-[180px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
              />
            </div>

            <button
              onClick={generateCoverLetter}
              disabled={loading}
              className="mt-5 rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Generating..." : "Generate Cover Letter"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Sparkles className="h-6 w-6 text-brand-600" />
              Cover Letter Output
            </div>

            <div className="mb-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                <Building2 className="h-4 w-4 text-brand-600" />
                Tailored for real applicants, not hardcoded demo roles
              </div>
            </div>

            <div className="min-h-[860px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result || "Your generated cover letter will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
