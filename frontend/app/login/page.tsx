import Link from "next/link";
import { FileText } from "lucide-react";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fc] px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2546A8] text-white">
            <FileText className="h-6 w-6" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Hirvanta</h1>
            <p className="text-sm text-slate-500">Welcome back</p>
          </div>
        </div>

        <form className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
            />
          </div>

          <button className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:opacity-90">
            Login
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm">
          <Link href="/forgot-password" className="text-brand-600 hover:underline">
            Forgot password?
          </Link>
          <Link href="/signup" className="text-brand-600 hover:underline">
            Create account
          </Link>
        </div>
      </div>
    </main>
  );
}
