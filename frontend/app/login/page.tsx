"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [error, setError] = useState("");

  async function handleEmailLogin(e: FormEvent) {
    e.preventDefault();
    setError("");
    setLoadingEmail(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoadingEmail(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
  }

  async function handleGoogleLogin() {
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
            Your AI Career Copilot
          </h1>

          <p className="mt-5 max-w-md text-xl leading-9 text-blue-100">
            From resume to offer letter. Let AI power your job search with smart tools built for modern professionals.
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

            <h2 className="text-4xl font-bold text-slate-900">Welcome back</h2>
            <p className="mt-2 text-slate-500">
              Sign in to continue your job search
            </p>

            <button
              onClick={handleGoogleLogin}
              disabled={loadingGoogle}
              className="mt-8 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 font-semibold text-slate-900 transition hover:bg-slate-50 disabled:opacity-60"
            >
              {loadingGoogle ? "Opening Google..." : "Continue with Google"}
            </button>

            <div className="my-6 text-center text-sm text-slate-400">or use email</div>

            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                  required
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
                  required
                />
              </div>

              {error ? (
                <div className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-700">
                  {error}
                </div>
              ) : null}

              <button
                type="submit"
                disabled={loadingEmail}
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2546A8] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {loadingEmail ? "Signing in..." : "Sign In"}
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>

            <div className="mt-5 flex items-center justify-between text-sm">
              <Link href="/otp-login" className="text-brand-600 hover:underline">
                Email OTP login
              </Link>
              <Link href="/forgot-password" className="text-brand-600 hover:underline">
                Forgot password?
              </Link>
            </div>

            <p className="mt-8 text-center text-sm text-slate-600">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="font-medium text-brand-600 hover:underline">
                Sign up
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
