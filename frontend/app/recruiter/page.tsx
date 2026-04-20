"use client";

import { useEffect, useState } from "react";
import { MessageSquare, Sparkles, Send, Briefcase } from "lucide-react";

type MessageType =
  | "linkedin_intro"
  | "referral_request"
  | "follow_up"
  | "hr_email";

export default function RecruiterPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const [fullName, setFullName] = useState("");
  const [targetRole, setTargetRole] = useState("");
  const [company, setCompany] = useState("");
  const [recruiterName, setRecruiterName] = useState("");
  const [experience, setExperience] = useState("");
  const [skills, setSkills] = useState("");
  const [messageType, setMessageType] = useState<MessageType>("linkedin_intro");
  const [jobUrl, setJobUrl] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [extraContext, setExtraContext] = useState("");

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

  async function generateMessage() {
    try {
      setLoading(true);
      setResult("");

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;

      const prompt = `
Write a professional recruiter message.

Message Type: ${messageType}
Candidate Name: ${fullName}
Target Role: ${targetRole}
Company: ${company}
Recruiter Name: ${recruiterName}
Experience Summary: ${experience}
Key Skills: ${skills}
Extra Context: ${extraContext}
Job URL: ${jobUrl}

Job Description:
${jobDescription || "Not provided"}

Instructions:
- Keep the message professional, short, and natural
- Make it suitable for real users, not a demo
- Make it personalized to the role and company
- Use clear business English
- End with a strong but polite call to action
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
        <h1 className="text-4xl font-bold text-slate-900">Recruiter Messages</h1>
        <p className="mt-2 text-slate-500">
          Generate LinkedIn introductions, referral requests, follow-ups, and HR emails for any role and company.
        </p>

        <div className="mt-8 grid gap-6 xl:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <MessageSquare className="h-6 w-6 text-brand-600" />
              Message Details
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <input
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Your Full Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={targetRole}
                onChange={(e) => setTargetRole(e.target.value)}
                placeholder="Target Role"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
              <input
                value={recruiterName}
                onChange={(e) => setRecruiterName(e.target.value)}
                placeholder="Recruiter / HR Name"
                className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
              />
            </div>

            <select
              value={messageType}
              onChange={(e) => setMessageType(e.target.value as MessageType)}
              className="mt-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-brand-500"
            >
              <option value="linkedin_intro">LinkedIn Introduction</option>
              <option value="referral_request">Referral Request</option>
              <option value="follow_up">Follow-up Message</option>
              <option value="hr_email">HR / Recruiter Email</option>
            </select>

            <textarea
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
              placeholder="Experience Summary"
              className="mt-4 min-h-[110px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={skills}
              onChange={(e) => setSkills(e.target.value)}
              placeholder="Key Skills"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <textarea
              value={extraContext}
              onChange={(e) => setExtraContext(e.target.value)}
              placeholder="Extra Context (for example: saw opening on LinkedIn, have mutual connection, already applied, follow-up after interview)"
              className="mt-4 min-h-[100px] w-full rounded-2xl border border-slate-200 p-4 outline-none focus:border-brand-500"
            />

            <div className="mt-5 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
                <Briefcase className="h-5 w-5 text-brand-600" />
                Job Description
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
              onClick={generateMessage}
              disabled={loading}
              className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#2546A8] px-6 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {loading ? "Generating..." : "Generate Recruiter Message"}
            </button>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-6">
            <div className="mb-4 flex items-center gap-2 text-2xl font-bold text-slate-900">
              <Sparkles className="h-6 w-6 text-brand-600" />
              Message Output
            </div>

            <div className="min-h-[860px] whitespace-pre-wrap rounded-2xl border border-slate-200 bg-slate-50 p-5 text-sm leading-7 text-slate-700">
              {result || "Your recruiter message will appear here."}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
