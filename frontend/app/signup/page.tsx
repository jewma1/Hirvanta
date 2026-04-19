import Link from "next/link";
import { FileText } from "lucide-react";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fc] px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2546A8] text-white">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Create Account</h1>
            <p className="text-sm text-slate-500">Start using Hirvanta</p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full name"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
          />

          <button className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:opacity-90">
            Create Account
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
