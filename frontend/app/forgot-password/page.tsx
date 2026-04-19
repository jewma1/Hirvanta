"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { supabase } from "../../lib/supabase";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function handleReset(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/login`,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("Password reset email sent. Please check your inbox.");
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
            Reset Your Password
          </h1>

          <p className="mt-5 max-w-md text-xl leading-9 text-blue-100">
            Enter your email and we will send you a secure password reset link.
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

            <h2 className="text-4xl font-bold text-slate-900">Forgot Password</h2>
            <p className="mt-2 text-slate-500">
              Enter your email to receive a reset link
            </p>

            <form onSubmit={handleReset} className="mt-8 space-y-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                className="w-full rounded-2xl bg-[#2546A8] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Sending..." : "Send Reset Link"}
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-slate-500">
              <Link href="/login" className="hover:underline">
                Back to login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
