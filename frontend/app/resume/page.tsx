"use client";

import { useEffect, useState } from "react";
import { FileText, Sparkles, Briefcase, PenSquare } from "lucide-react";

type ResumeMode = "auto" | "job" | "new";

export default function ResumePage() {
  const [mode, setMode] = useState<ResumeMode>("auto");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [portfolio, setPortfolio] = useState("");
  const [summary, setSummary] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const [projects, setProjects] = useState("");
  const [certifications, setCertifications] = useState("");

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

  function buildCandidateProfile() {
    return `
Full Name: ${fullName}
Email: ${email}
Phone: ${phone}
Location: ${location}
LinkedIn: ${linkedin}
Portfolio: ${portfolio}

Professional Summary:
${summary}

Skills:
${skills}

Education:
${education}

Work Experience:
${experience}

Projects:
${projects}

Certifications:
${certifications}
    `.trim();
  }

  async function generateResume(prompt: string) {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${apiUrl}/api/ai/resume`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      setResult(data.text || "No resume generated.");
    } catch {
      setResult("Something went wrong while generating the resume.");
    } finally {
      setLoading(false);
    }
  }

  async function handleAutoResume() {
    const prompt = `
Create a professional ATS-friendly resume for the following candidate.
Use clear headings, bullet points, impact-driven language, and a polished format.

Candidate Profile:
${buildCandidateProfile()}
    `;
    await generateResume(prompt);
  }

  async function handleJobTailoredResume() {
    const prompt = `
Create a professional ATS-friendly resume tailored to this job description.
Use the candidate profile below and optimize keywords, summary, experience points, and skills for the job.

Candidate Profile:
${buildCandidateProfile()}

Job URL:
${jobUrl || "Not provided"}

Job Description:
${jobDescription || "Not provided"}
    `;
    await generateResume(prompt);
  }

  async function handleNewResume() {
    const prompt = `
Create a fresh new professional resume from scratch using the details below.
Make it modern, ATS-friendly, and suitable for a broad job search.
If some sections are weak, improve them professionally.

Candidate Profile:
${buildCandidateProfile()}
    `;
    await generateResume(prompt);
  }

  const modeCardClass =
    "rounded-3xl border p-5 text-left transition";
  const activeModeClass =
    "border-[#2546A8] bg-brand-50 ring-2 ring-[#2546A8]/10";
  const inactiveModeClass =
    "border-slate-200 bg-white";

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        <h1 className="text-4xl font-bold text-slate-900">Resume Builder</h1>
        <p className="mt-2 text-slate-500">
          Build a new resume, generate one automatically, or tailor your resume to any job description.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <button
            onClick={() => setMode("auto")}
            className={`${modeCardClass} ${mode === "auto" ? activeModeClass : inactiveModeClass}`}
          >
            <div className="flex items-center gap-3">
              <FileText className="h-6 w-6 text-[#2546A8]" />
              <div>
                <div className="text-lg font-semibold text-slate-900">Auto Resume Maker</div>
                <div className="mt-1 text-sm text-slate-500">
                  Generate a full resume from your profile details
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("job")}
            className={`${modeCardClass} ${mode === "job" ? activeModeClass : inactiveModeClass}`}
          >
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-[#2546A8]" />
              <div>
                <div className="text-lg font-semibold text-slate-900">Resume From Job Description</div>
                <div className="mt-1 text-sm text-slate-500">
                  Tailor your resume to any job URL or pasted JD
                </div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setMode("new")}
            className={`${modeCardClass} ${mode === "new" ? activeModeClass : inactiveModeClass}`}
          >
            <div className="flex items-center gap-3">
              <PenSquare className="h-6 w-6 text-[#2546A8]" />
              <div>
                <div className="text-lg font-semibold text-slate-900">Build New Resume</div>
                <div className="mt-1 text-sm text-slate-500">
                  Create a fresh resume from scratch
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-bold text-slate-900">Candidate Details</h2>

            <div className="mt-5 grid gap-4 md:grid-cols-2">
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
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Location"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={linkedin}
                onChange={(e) => setLinkedin(e.target.value)}
                placeholder="LinkedIn URL"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={portfolio}
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder="Portfolio / Website"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
            </div>

            <textarea
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              placeholder="Professional Summary"
              className="mt-4 min-h-[110px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Skills (for example: AutoCAD, Project Management, React, Excel, Communication)"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={education}
              onChange={(e) => setEducation(e.target.value)}
              placeholder="Education"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Work Experience"
              className="mt-4 min-h-[140px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={projects}
              onChange={(e) => setProjects(e.target.value)}
              placeholder="Projects"
              className="mt-4 min-h-[110px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={certifications}
              onChange={(e) => setCertifications(e.target.value)}
              placeholder="Certifications / Awards"
              className="mt-4 min-h-[90px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            {mode === "job" ? (
              <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
                <div className="mb-3 text-sm font-medium text-slate-700">Target Job Details</div>

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
            ) : null}

            <div className="mt-5 flex flex-wrap gap-3">
              {mode === "auto" ? (
                <button
                  onClick={handleAutoResume}
                  disabled={loading}
                  className="rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Generate Auto Resume"}
                </button>
              ) : null}

              {mode === "job" ? (
                <button
                  onClick={handleJobTailoredResume}
                  disabled={loading}
                  className="rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Generate Job Tailored Resume"}
                </button>
              ) : null}

              {mode === "new" ? (
                <button
                  onClick={handleNewResume}
                  disabled={loading}
                  className="rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Generating..." : "Build New Resume"}
                </button>
              ) : null}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Sparkles className="h-6 w-6 text-brand-600" />
              Resume Output
            </div>

            <div className="min-h-[900px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result || "Your generated resume will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
