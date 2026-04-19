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
        <div className="
