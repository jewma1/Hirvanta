"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  Briefcase,
  Mic,
  Bot,
  Mail,
  MessageSquare,
  BarChart3,
  CreditCard,
  User,
  LogOut,
  Search
} from "lucide-react";

export default function DashboardShell({
  children
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const menu = [
    { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { name: "Resume Builder", path: "/resume", icon: FileText },
    { name: "Job Finder", path: "/jobs", icon: Briefcase },
    { name: "Interview Coach", path: "/interview", icon: Mic },
    { name: "Career Assistant", path: "/career-coach", icon: Bot },
    { name: "Cover Letter", path: "/cover-letter", icon: Mail },
    { name: "Recruiter Messages", path: "/recruiter", icon: MessageSquare },
    { name: "Job Tracker", path: "/tracker", icon: BarChart3 },
    { name: "Pricing", path: "/pricing", icon: CreditCard }
  ];

  const showAppShell = pathname !== "/";

  if (!showAppShell) {
    return <>{children}</>;
  }

  return (
    <div className="flex h-screen bg-[#f5f7fb] text-slate-900">
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col">
        <div className="px-6 py-6 border-b border-slate-100">
          <h1 className="text-2xl font-bold tracking-tight text-slate-900">
            Hirvanta
          </h1>
          <p className="mt-1 text-sm text-slate-500">AI Career Platform</p>
        </div>

        <nav className="flex-1 px-4 py-5">
          <div className="space-y-1">
            {menu.map((item) => {
              const Icon = item.icon;
              const active = pathname === item.path;

              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "bg-brand-600 text-white shadow-soft"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </div>
        </nav>

        <div className="border-t border-slate-100 p-4">
          <Link
            href="/profile"
            className="mb-2 flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <User className="h-5 w-5" />
            <span>Profile</span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <LogOut className="h-5 w-5" />
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="border-b border-slate-200 bg-white/95 px-4 py-4 backdrop-blur md:px-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="text-lg font-semibold text-slate-900">
                AI Career Platform
              </div>
              <div className="text-sm text-slate-500">
                Build resumes, apply faster, and track your career progress
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative w-full md:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-brand-500 focus:bg-white"
                />
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-600 font-semibold text-white shadow-soft">
                U
              </div>
            </div>
          </div>
        </header>

        <main className="min-h-0 flex-1 overflow-auto p-4 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}
