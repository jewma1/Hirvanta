"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import {
  FileText,
  Briefcase,
  Mic,
  Bot,
  Mail,
  MessageSquare,
  BarChart3,
  ArrowRight,
  Search,
  Crown,
  Sparkles
} from "lucide-react";
import { supabase } from "../../lib/supabase";

type DashboardCard = {
  title: string;
  desc: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function DashboardPage() {
  const [userName, setUserName] = useState("User");
  const [jobDescription, setJobDescription] = useState("");

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

  const cards: DashboardCard[] = useMemo(
    () => [
      {
        title: "Build Resume",
        desc: "Create ATS-ready resumes",
        link: "/resume",
        icon: FileText
      },
      {
        title: "Find Jobs",
        desc: "Search matching roles",
        link: "/jobs",
        icon: Search
      },
      {
        title: "Interview Coach",
        desc: "Practice with AI",
        link: "/interview",
        icon: Mic
      },
      {
        title: "Cover Letter",
        desc: "Generate custom letters",
        link: "/cover-letter",
        icon: Mail
      },
      {
        title: "Career Assistant",
        desc: "Get roadmap guidance",
        link: "/career-coach",
        icon: Bot
      },
      {
        title: "Recruiter Messages",
        desc: "Write outreach messages",
        link: "/recruiter",
        icon: MessageSquare
      },
      {
        title: "Job Tracker",
        desc: "Track all applications",
        link: "/tracker",
        icon: BarChart3
      },
      {
        title: "Upgrade",
        desc: "Unlock premium tools",
        link: "/pricing",
        icon: Crown
      }
    ],
    []
  );

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

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5">
          <div className="mb-3 text-sm font-medium text-slate-700">Job Description</div>

          <div className="mb-4 flex flex-wrap gap-2">
            <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
              Paste
            </button>
            <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
              Upload
            </button>
            <button className="rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm font-medium text-slate-600">
              URL
            </button>
          </div>

          <textarea
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Paste a job description, upload a file, or enter a URL..."
            className="min-h-[160px] w-full rounded-2xl border border-slate-200 bg-white p-4 outline-none transition focus:border-brand-500"
          />

          <button className="mt-5 rounded-2xl bg-[#9ca3c9] px-5 py-3 font-semibold text-white transition hover:opacity-90">
            Analyze Job Description
          </button>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-brand-600" />
          <h2 className="text-2xl font-bold text-slate-900">Quick Actions</h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.link}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition hover:-translate-y-1"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <Icon className="h-6 w-6 text-brand-600" />
                </div>

                <div className="text-lg font-semibold text-slate-900">{card.title}</div>
                <div className="mt-2 text-sm leading-6 text-slate-500">{card.desc}</div>

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
