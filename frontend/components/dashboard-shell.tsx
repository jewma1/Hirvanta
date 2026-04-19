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
  Search,
  UserCircle2,
  LogOut,
  Menu,
} from "lucide-react";

export default function DashboardShell({
  children,
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
    { name: "Pricing", path: "/pricing", icon: CreditCard },
  ];

  const publicPages = ["/", "/login", "/signup", "/forgot-password", "/otp-login"];
  const showAppShell = !publicPages.includes(pathname);

  if (!showAppShell) {
    return <>{children}</>;
  }

  const getTitle = () => {
    const active = menu.find((item) => item.path === pathname);
    return active ? active.name : "Dashboard";
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fb] text-slate-900">
      <aside className="hidden w-72 shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col">
        <div className="border-b border-slate-100 px-6 py-6">
          <Link href="/dashboard" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2546A8] text-white shadow-sm">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-slate-900">
                Hirvanta
              </h1>
              <p className="mt-1 text-sm text-slate-500">AI Career Platform</p>
            </div>
          </Link>
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
                  className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-[15px] font-medium transition ${
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
            <UserCircle2 className="h-5 w-5" />
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
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 xl:hidden">
                <Menu className="h-5 w-5" />
              </button>

              <div>
                <div className="text-lg font-semibold text-slate-900">
                  {getTitle()}
                </div>
                <div className="text-sm text-slate-500">
                  Build resumes, apply faster, and track your career progress
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="relative hidden md:block md:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search jobs, resumes, interviews..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-brand-500 focus:bg-white"
                />
              </div>

              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-600 text-white">
                  <UserCircle2 className="h-5 w-5" />
                </div>
                <div className="hidden text-left md:block">
                  <div className="text-sm font-semibold text-slate-900">
                    My Account
                  </div>
                  <div className="text-xs text-slate-500">Profile & Settings</div>
                </div>
              </Link>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
