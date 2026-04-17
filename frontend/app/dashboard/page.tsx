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
  CreditCard,
  ArrowRight,
  Sparkles,
  CheckCircle2
} from "lucide-react";

type DashboardCard = {
  title: string;
  desc: string;
  link: string;
  icon: React.ComponentType<{ className?: string }>;
};

export default function DashboardPage() {
  const [userName, setUserName] = useState("User");

  useEffect(() => {
    try {
      const saved = localStorage.getItem("hirvantaUser");
      if (saved) {
        const user = JSON.parse(saved);
        setUserName(user?.name || "User");
      }
    } catch {
      setUserName("User");
    }
  }, []);

  const cards: DashboardCard[] = useMemo(
    () => [
      {
        title: "Resume Builder",
        desc: "Create ATS-friendly AI resumes in minutes.",
        link: "/resume",
        icon: FileText
      },
      {
        title: "Job Finder",
        desc: "Find matching jobs faster with smart search.",
        link: "/jobs",
        icon: Briefcase
      },
      {
        title: "Interview Coach",
        desc: "Practice interviews and improve your answers.",
        link: "/interview",
        icon: Mic
      },
      {
        title: "Career Assistant",
        desc: "Get AI guidance for career decisions and growth.",
        link: "/career-coach",
        icon: Bot
      },
      {
        title: "Cover Letter",
        desc: "Generate custom cover letters from job posts.",
        link: "/cover-letter",
        icon: Mail
      },
      {
        title: "Recruiter Messages",
        desc: "Write polished recruiter outreach messages quickly.",
        link: "/recruiter",
        icon: MessageSquare
      },
      {
        title: "Job Tracker",
        desc: "Track applications and stay organized.",
        link: "/tracker",
        icon: BarChart3
      },
      {
        title: "Pricing",
        desc: "View your plan and upgrade anytime.",
        link: "/pricing",
        icon: CreditCard
      }
    ],
    []
  );

  return (
    <div className="space-y-6">
      <section className="overflow-hidden rounded-[28px] bg-gradient-to-r from-brand-700 via-brand-600 to-sky-500 p-6 text-white shadow-soft md:p-8">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-center xl:justify-between">
          <div className="max-w-2xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-medium backdrop-blur">
              <Sparkles className="h-4 w-4" />
              <span>AI-Powered Career Assistant</span>
            </div>

            <h1 className="text-3xl font-bold leading-tight md:text-5xl">
              Hello, {userName}. Your career dashboard is ready.
            </h1>

            <p className="mt-4 max-w-xl text-sm text-blue-50 md:text-base">
              Build resumes, generate cover letters, prepare for interviews,
              message recruiters, and track applications — all in one place.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 font-semibold text-brand-700 transition hover:translate-y-[-1px]"
              >
                Try Free
                <ArrowRight className="h-4 w-4" />
              </Link>

              <Link
                href="/jobs"
                className="inline-flex items-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/15"
              >
                Explore Jobs
              </Link>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:w-[420px] xl:grid-cols-1">
            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur">
              <div className="text-sm text-blue-100">Current Plan</div>
              <div className="mt-1 text-2xl font-bold">Free Trial</div>
            </div>

            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur">
              <div className="text-sm text-blue-100">Trial Includes</div>
              <div className="mt-1 text-base font-semibold">
                2 resumes, 1 interview, unlimited job search
              </div>
            </div>

            <div className="rounded-3xl bg-white/12 p-4 backdrop-blur">
              <div className="text-sm text-blue-100">Next Best Action</div>
              <div className="mt-1 text-base font-semibold">
                Build your first resume
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="text-sm text-slate-500">Account Status</div>
          <div className="mt-2 flex items-center gap-2 text-lg font-semibold text-slate-900">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            Active
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="text-sm text-slate-500">Tools Available</div>
          <div className="mt-2 text-2xl font-bold text-slate-900">
            {cards.length}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-soft">
          <div className="text-sm text-slate-500">Recommended Focus</div>
          <div className="mt-2 text-lg font-semibold text-slate-900">
            Resume + Job Search
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Your Tools</h2>
            <p className="text-sm text-slate-500">
              Open any feature and continue your job search workflow.
            </p>
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <Link
                key={card.title}
                href={card.link}
                className="group rounded-3xl border border-slate-200 bg-white p-5 shadow-soft transition duration-200 hover:-translate-y-1 hover:border-brand-200"
              >
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-50">
                  <Icon className="h-7 w-7 text-brand-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {card.desc}
                </p>

                <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                  Open tool
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
