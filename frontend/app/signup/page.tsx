"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function SignupPage() {
  const router = useRouter();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleSignup(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: fullName,
        },
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    if (data.session) {
      router.push("/dashboard");
      return;
    }

    setSuccess("Account created successfully. Please sign in.");
  }

  async function handleGoogleSignup() {
    setError("");
    setLoadingGoogle(true);

    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/dashboard`,
      },
    });

    if (error) {
      setLoadingGoogle(false);
      setError(error.message);
    }
  }

  return (
    <main className="min-h-screen bg-[#f5f7fc]">
      <div className="grid min-h-screen lg:grid-cols-[1fr_1.08fr]">
        <div className="hidden bg-[#2546A8] px-10 py-12 text-white lg:flex lg:flex-col lg:justify-center">
          <img
            src="/hirvanta-logo.png"
            alt="Hirvanta"
            className="mb-10 h-12 w-auto object-contain"
          />

          <h1 className="max-w-md text-5xl font-bold leading-tight">
            Start Your AI Career Journey
          </h1>

          <p className="mt-5 max-w-md text-xl leading-9 text-blue-100">
            Create your account and unlock smart tools for resumes, job search, cover letters, and interview prep.
          </p>
        </div>

        <div className="flex items-center justify-center px-4 py-10">
          <div className="w-full max-w-md rounded-[28px] border border-slate-200 bg-white p-8 shadow-soft">
            <div className="mb-8 lg:hidden">
              <img
                src="/hirvanta-logo.png"
                alt="Hirvanta"
                className="h-10 w-auto object-contain"
              />
            </div>

            <h2 className="text-4xl font-bold text-slate-900">Create account</h2>
            <p className="mt-2 text-slate-500">
              Start using Hirvanta in minutes
            </p>

            <button
              onClick={handleGoogleSignup}
              disabled={loadingGoogle}
              className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 disabled:opacity-60"
            >
              {loadingGoogle ? "Opening Google..." : "Continue with Google"}
            </button>

            <div className="my-6 text-center text-sm text-slate-400">or use email</div>

            <form onSubmit={handleSignup} className="space-y-4">
              <input
                type="text"
                placeholder="Full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                required
              />

              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                required
              />

              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                required
              />

              {error ? (
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              {success ? (
                <div className="rounded-2xl bg-green-50 px-4 py-3 text-sm text-green-700">
                  {success}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loading}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2546A8] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Creating account..." : "Create Account"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <p className="mt-8 text-center text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login" className="font-medium text-brand-600 hover:underline">
                Login
              </Link>
            </p>

            <p className="mt-3 text-center text-sm text-slate-500">
              <Link href="/" className="hover:underline">
                Back to home
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
