import Link from "next/link";

export default function ForgotPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f7fc] px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Forgot Password</h1>
        <p className="mt-2 text-sm text-slate-500">
          Enter your email and we will help you reset your password.
        </p>

        <form className="mt-6 space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="w-full rounded-2xl border border-slate-300 px-4 py-3 outline-none focus:border-brand-500"
          />

          <button className="w-full rounded-2xl bg-brand-600 px-4 py-3 font-semibold text-white transition hover:opacity-90">
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-sm text-slate-600">
          Back to{" "}
          <Link href="/login" className="font-medium text-brand-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
