"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
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
  LogOut,
  Menu,
  Crown
} from "lucide-react";
import { supabase } from "../lib/supabase";

type AuthUser = {
  id: string;
  email?: string;
  user_metadata?: {
    full_name?: string;
    name?: string;
    avatar_url?: string;
  };
} | null;

export default function DashboardShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [user, setUser] = useState<AuthUser>(null);
  const [checkingAuth, setCheckingAuth] = useState(true);
  const [loggingOut, setLoggingOut] = useState(false);

  const menu = useMemo(
    () => [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "Job Finder", path: "/jobs", icon: Briefcase },
      { name: "Resume Builder", path: "/resume", icon: FileText },
      { name: "Cover Letter", path: "/cover-letter", icon: Mail },
      { name: "Interview Coach", path: "/interview", icon: Mic },
      { name: "Career Assistant", path: "/career-coach", icon: Bot },
      { name: "Recruiter Messages", path: "/recruiter", icon: MessageSquare },
      { name: "Job Tracker", path: "/tracker", icon: BarChart3 },
      { name: "Pricing", path: "/pricing", icon: CreditCard },
    ],
    []
  );

  const publicPages = ["/", "/login", "/signup", "/forgot-password", "/otp-login"];
  const showAppShell = !publicPages.includes(pathname);

  useEffect(() => {
    let mounted = true;

    async function loadUser() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!mounted) return;

      setUser(user as AuthUser);

      if (showAppShell && !user) {
        router.push("/login");
      }

      setCheckingAuth(false);
    }

    loadUser();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      const nextUser = (session?.user ?? null) as AuthUser;
      setUser(nextUser);

      if (showAppShell && !nextUser) {
        router.push("/login");
      }
    });

    return () => {
      mounted = false;
      subscription.unsubscribe();
    };
  }, [router, showAppShell]);

  async function handleLogout() {
    try {
      setLoggingOut(true);
      await supabase.auth.signOut();
      router.push("/login");
    } finally {
      setLoggingOut(false);
    }
  }

  if (!showAppShell) {
    return <>{children}</>;
  }

  if (checkingAuth) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f5f7fb]">
        <div className="rounded-2xl bg-white px-6 py-4 text-slate-700 shadow-sm">
          Loading Hirvanta...
        </div>
      </div>
    );
  }

  const displayName =
    user?.user_metadata?.full_name ||
    user?.user_metadata?.name ||
    user?.email?.split("@")[0] ||
    "User";

  const getTitle = () => {
    const active = menu.find((item) => item.path === pathname);
    return active ? active.name : "Dashboard";
  };

  return (
    <div className="flex min-h-screen bg-[#f5f7fb] text-slate-900">
      <aside className="hidden w-[250px] shrink-0 border-r border-slate-200 bg-white xl:flex xl:flex-col">
        <div className="border-b border-slate-100 px-5 py-5">
          <Link href="/dashboard" className="flex items-center gap-3">
            <img
              src="/hirvanta-logo.png"
              alt="Hirvanta"
              className="h-9 w-auto object-contain"
            />
          </Link>
        </div>

        <nav className="flex-1 px-3 py-5">
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
                      ? "bg-[#2546A8] text-white shadow-soft"
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

        <div className="mx-3 mb-4 rounded-3xl bg-slate-50 p-4">
          <div className="mb-2 text-sm font-semibold text-slate-900">✨ Free Trial</div>
          <div className="space-y-1 text-xs text-slate-500">
            <div>Resumes: 0/3</div>
            <div>Cover letters: 0/2</div>
            <div>Voice interviews: 0/2</div>
          </div>
          <Link
            href="/pricing"
            className="mt-4 block rounded-2xl bg-[#5b5cf0] px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
          >
            Upgrade to Pro
          </Link>
        </div>

        <div className="border-t border-slate-100 p-4">
          <Link
            href="/profile"
            className="mb-2 flex items-center gap-3 rounded-2xl px-3 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
          >
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2546A8] text-sm font-semibold text-white">
              {displayName.charAt(0).toUpperCase()}
            </div>
            <div className="min-w-0">
              <div className="truncate text-sm font-semibold text-slate-900">{displayName}</div>
              <div className="truncate text-xs text-slate-500">{user?.email || "My account"}</div>
            </div>
          </Link>

          <button
            onClick={handleLogout}
            disabled={loggingOut}
            className="flex w-full items-center gap-3 rounded-2xl px-3 py-3 text-left text-sm font-medium text-slate-700 transition hover:bg-slate-100 disabled:opacity-60"
          >
            <LogOut className="h-5 w-5" />
            <span>{loggingOut ? "Logging out..." : "Logout"}</span>
          </button>
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
                <div className="text-3xl font-bold tracking-tight text-slate-900">
                  {getTitle()}
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="hidden rounded-full bg-amber-50 px-4 py-2 text-sm font-medium text-amber-700 md:block">
                Free Trial Active
              </div>

              <Link
                href="/pricing"
                className="inline-flex items-center gap-2 rounded-2xl bg-[#5b5cf0] px-4 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-90"
              >
                <Crown className="h-4 w-4" />
                Upgrade
              </Link>

              <div className="relative hidden md:block md:w-72">
                <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <input
                  placeholder="Search..."
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-10 pr-4 outline-none transition focus:border-brand-500 focus:bg-white"
                />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto p-4 md:p-6">{children}</main>
      </div>
    </div>
  );
}
