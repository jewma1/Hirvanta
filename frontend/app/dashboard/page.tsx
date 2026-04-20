"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Search,
  Mic,
  Bot,
  Mail,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { supabase } from "../../lib/supabase";

type QuickAction = {
  title: string;
  desc: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function DashboardPage() {
  const [userName, setUserName] = useState("User");
  const [jobDescription, setJobDescription] = useState("");
  const [jobUrl, setJobUrl] = useState("");
  const [analysis, setAnalysis] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (user) {
        const name =
          user.user_metadata?.full_name ||
          user.user_metadata?.name ||
          user.email?.split("@")[0] ||
          "User";
        setUserName(name);
      }
    }

    loadUser();
  }, []);

  async function handleFileUpload(file: File | null) {
    if (!file) return;
    const text = await file.text();
    setJobDescription(text);
  }

  async function analyzeJobDescription() {
    try {
      setLoading(true);
      setAnalysis("");

      const finalInput = [jobUrl ? `Job URL: ${jobUrl}` : "", jobDescription]
        .filter(Boolean)
        .join("\n\n");

      if (!finalInput.trim()) {
        setAnalysis("Please paste a job description, upload a file, or enter a URL first.");
        setLoading(false);
        return;
      }

      localStorage.setItem("hirvanta_selected_job_description", finalInput);

      const apiUrl = process.env.NEXT_PUBLIC_API_URL;
      const prompt = `
You are a job description analyzer for Hirvanta.

Analyze this job description and return:
1. Job title
2. Key responsibilities
3. Required skills
4. Preferred skills
5. Important ATS keywords
6. Best-fit candidate profile
7. Suggested interview topics

Job description:
${finalInput}
      `;

      const response = await fetch(`${apiUrl}/api/ai/job-match`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ prompt })
      });

      const data = await response.json();
      const text = data.text || "No analysis generated.";
      setAnalysis(text);
    } catch {
      setAnalysis("Something went wrong while analyzing the job description.");
    } finally {
      setLoading(false);
    }
  }

  const quickActions: QuickAction[] = [
    {
      title: "Resume Builder",
      desc: "Create a new resume or tailor it for a job description",
      link: "/resume",
      icon: FileText,
    },
    {
      title: "Job Finder",
      desc: "Search jobs by role, location, skill, or experience",
      link: "/jobs",
      icon: Search,
    },
    {
      title: "Interview Coach",
      desc: "Practice chat interviews and premium live voice interview coaching",
      link: "/interview",
      icon: Mic,
    },
    {
      title: "Career Assistant",
      desc: "Get AI roadmap, salary, growth, and skill guidance",
      link: "/career-coach",
      icon: Bot,
    },
    {
      title: "Cover Letter",
      desc: "Generate tailored cover letters for any role",
      link: "/cover-letter",
      icon: Mail,
    },
    {
      title: "Recruiter Messages",
      desc: "Create recruiter outreach, follow-ups, and referral requests",
      link: "/recruiter",
      icon: MessageSquare,
    },
    {
      title: "Job Tracker",
      desc: "Track saved jobs, applications, interviews, and offers",
      link: "/tracker",
      icon: BarChart3,
    },
  ];

  return (
    <div className="space-y-6">
      <section className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
        <h1 className="text-4xl font-bold tracking-tight text-slate-900">
          Welcome back, {userName}
        </h1>
        <p className="mt-2 text-lg text-slate-500">
          What would you like to work on today?
        </p>

        <div className="mt-6 flex flex-col gap-4 rounded-3xl bg-gradient-to-r from-[#eef2ff] to-[#f5f3ff] p-5 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="text-lg font-semibold text-slate-900">
              Start your AI-powered career journey — Free Trial
            </div>
            <div className="mt-1 text-sm text-slate-500">
              Resumes: 0/3 | Cover Letters: 0/2 | Voice interviews: 0/2
            </div>
          </div>

          <Link
            href="/pricing"
            className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#5b5cf0] px-5 py-3 font-semibold text-white transition hover:opacity-90"
          >
            Upgrade for Unlimited
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <section className="rounded-[28px] bg-white p-6 shadow-soft md:p-8">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">
          Analyze Job Description
        </h2>
        <p className="mt-2 text-slate-500">
          Paste a job description, upload a file, or add a job URL. Hirvanta will analyze it and help you build your resume, cover letter, and interview prep.
        </p>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
          <div className="mb-3 text-sm font-medium text-slate-700">Job Source</div>

          <input
            value={jobUrl}
            onChange={(e) => setJobUrl(e.target.value)}
            placeholder="Paste job URL (LinkedIn, Indeed, company careers page)"
            className="mb-4 w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-500"
          />

          <div className="mb-3 flex flex-wrap gap-2">
            <label className="cursor-pointer rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-700">
              Upload
              <input
                type="file"
                accept=".txt,.md,.html,.json"
                className="hidden"
                onChange={(e) => handleFileUpload(e.target.files?.[0] || null)}
              />
            </label>
          </div>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste a job description here..."
            className="min-h-[180px] w-full rounded-2xl border border-slate-200 p-4 outline-none transition focus:border-brand-500"
          />

          <div className="mt-5 flex flex-wrap gap-3">
            <button
              onClick={analyzeJobDescription}
              disabled={loading}
              className="rounded-2xl bg-[#7c83ff] px-5 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
            >
              {loading ? "Analyzing..." : "Analyze Job Description"}
            </button>

            <Link
              href="/resume"
              className="rounded-2xl border border-slate-300 px-5 py-3 font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Open Resume Builder
            </Link>
          </div>
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-3 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <Sparkles className="h-5 w-5 text-brand-600" />
            Analysis Result
          </div>

          <div className="min-h-[220px] whitespace-pre-wrap text-sm leading-7 text-slate-700">
            {analysis || "Your job description analysis will appear here."}
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-600" />
          <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {quickActions.map((item) => {
            const Icon = item.icon;

            return (
              <Link
                key={item.title}
                href={item.link}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>

                <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-500">{item.desc}</div>

                <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Open
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
