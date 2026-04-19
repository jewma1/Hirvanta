import Link from "next/link";
import { FileText, ArrowRight, Sparkles } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fc]">
      <header className="w-full border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#2546A8] text-white shadow-sm">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <div className="text-2xl font-bold tracking-tight text-slate-900">
                Hirvanta
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-8 text-[17px] font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it Works
            </a>
            <Link href="/pricing" className="hover:text-slate-900">
              Pricing
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-[16px] font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>

            <Link
              href="/dashboard"
              className="rounded-xl bg-[#2f5fe3] px-5 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Try Free →
            </Link>
          </div>
        </div>
      </header>

      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center rounded-full bg-[#e8edf7] px-5 py-3 text-[15px] font-medium text-[#2546A8]">
            <Sparkles className="mr-2 h-4 w-4" />
            AI-Powered Career Assistant
          </div>

          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-[#10172f] md:text-7xl">
            Your AI Career Copilot
            <br />
            <span className="text-[#5648e7]">From Resume to Offer Letter</span>
          </h1>

          <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-slate-600">
            Stop spending hours on applications. Hirvanta uses AI to build resumes,
            write cover letters, prepare for interviews, and find jobs — all from a
            single job description.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/dashboard"
              className="inline-flex min-w-[280px] items-center justify-center rounded-2xl bg-[#2546A8] px-8 py-5 text-xl font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Start Your Free Trial
              <ArrowRight className="ml-4 h-6 w-6" />
            </Link>

            <Link
              href="/jobs"
              className="inline-flex min-w-[280px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-5 text-xl font-medium text-[#10172f] shadow-sm transition hover:bg-slate-50"
            >
              Upload Job Description
            </Link>
          </div>

          <p className="mt-5 text-lg text-slate-500">
            Free trial includes 3 resumes, 2 cover letters, unlimited chat
            interviews, and unlimited job search
          </p>
        </div>
      </section>
    </main>
  );
}
