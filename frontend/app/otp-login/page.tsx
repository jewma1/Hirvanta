"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import { supabase } from "../../lib/supabase";

export default function OtpLoginPage() {
  const router = useRouter();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  async function sendOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        shouldCreateUser: true,
        emailRedirectTo: `${window.location.origin}/dashboard`,
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    setSuccess("OTP sent to your email. Please enter the code.");
    setStep(2);
  }

  async function verifyOtp(e: FormEvent) {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    const { error } = await supabase.auth.verifyOtp({
      email,
      token: otp,
      type: "email",
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return;
    }

    router.push("/dashboard");
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
            Email OTP Login
          </h1>

          <p className="mt-5 max-w-md text-xl leading-9 text-blue-100">
            Sign in quickly using a secure one-time code sent to your email.
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

            <h2 className="text-4xl font-bold text-slate-900">OTP Login</h2>
            <p className="mt-2 text-slate-500">
              {step === 1 ? "Enter your email to receive a code" : "Enter the OTP code from your email"}
            </p>

            {step === 1 ? (
              <form onSubmit={sendOtp} className="mt-8 space-y-4">
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
                  className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#2546A8] px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-60"
                >
                  {loading ? "Sending OTP..." : "Send OTP"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            ) : (
              <form onSubmit={verifyOtp} className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Enter 6-digit OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
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
                  {loading ? "Verifying..." : "Verify OTP"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}

            <div className="mt-6 flex items-center justify-between text-sm">
              <Link href="/login" className="text-brand-600 hover:underline">
                Back to login
              </Link>
              <Link href="/signup" className="text-brand-600 hover:underline">
                Create account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
