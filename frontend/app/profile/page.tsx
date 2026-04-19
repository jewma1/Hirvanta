"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";

type ProfileUser = {
  id: string;
  email?: string;
  created_at?: string;
  last_sign_in_at?: string;
  user_metadata?: {
    full_name?: string;
    name?: string;
    avatar_url?: string;
  };
} | null;

export default function ProfilePage() {
  const router = useRouter();
  const [user, setUser] = useState<ProfileUser>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProfile() {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      setUser(user as ProfileUser);
      setLoading(false);
    }

    loadProfile();
  }, [router]);

  async function handleLogout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  if (loading) {
    return (
      <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
        Loading profile...
      </div>
    );
  }

  const fullName =
    user?.user_metadata?.full_name || user?.user_metadata?.name || "No name added";

  return (
    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
      <h1 className="text-4xl font-bold tracking-tight text-slate-900">My Profile</h1>
      <p className="mt-3 text-slate-600">
        This is your real logged-in Hirvanta account.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="text-sm text-slate-500">Full Name</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">{fullName}</div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="text-sm text-slate-500">Email</div>
          <div className="mt-1 text-lg font-semibold text-slate-900">
            {user?.email || "-"}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="text-sm text-slate-500">User ID</div>
          <div className="mt-1 break-all text-sm font-medium text-slate-900">
            {user?.id || "-"}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <div className="text-sm text-slate-500">Created At</div>
          <div className="mt-1 text-sm font-medium text-slate-900">
            {user?.created_at ? new Date(user.created_at).toLocaleString() : "-"}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4 md:col-span-2">
          <div className="text-sm text-slate-500">Last Sign In</div>
          <div className="mt-1 text-sm font-medium text-slate-900">
            {user?.last_sign_in_at
              ? new Date(user.last_sign_in_at).toLocaleString()
              : "-"}
          </div>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="mt-8 rounded-2xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:opacity-90"
      >
        Logout
      </button>
    </div>
  );
}
