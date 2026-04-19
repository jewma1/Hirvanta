import Link from "next/link";
import { ArrowRight, Sparkles, FileText, Search, MessageSquare, Briefcase, Mic, Crown } from "lucide-react";

const features = [
  {
    title: "AI Resume Builder",
    desc: "Generate ATS-optimized resumes tailored to any job description with multiple templates.",
    icon: FileText
  },
  {
    title: "Smart Job Finder",
    desc: "Find matching jobs based on your role, experience, and location with one-click apply links.",
    icon: Search
  },
  {
    title: "Interview Coach",
    desc: "Practice interviews with AI that asks role-specific questions and gives real-time feedback.",
    icon: Mic
  },
  {
    title: "Cover Letters",
    desc: "Generate personalized cover letters that highlight your strengths for each application.",
    icon: MessageSquare
  },
  {
    title: "Job Tracker",
    desc: "Track all your applications, interview stages, and offers in one organized dashboard.",
    icon: Briefcase
  },
  {
    title: "Recruiter Messages",
    desc: "Generate professional LinkedIn messages, emails, and follow-ups to stand out.",
    icon: Crown
  }
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Software Engineer",
    quote: "Hirvanta helped me land my dream job. The AI interview coach was incredibly helpful."
  },
  {
    name: "Rahul Patel",
    role: "Product Manager",
    quote: "The resume builder is amazing. Got 3x more callbacks after switching to Hirvanta-generated resumes."
  },
  {
    name: "Sarah Chen",
    role: "Data Analyst",
    quote: "Best career tool I’ve used. The cover letter generator saved me hours of work on every application."
  }
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fc]">
      <header className="sticky top-0 z-30 w-full border-b border-slate-200 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/hirvanta-logo.png"
              alt="Hirvanta"
              className="h-10 w-auto object-contain"
            />
          </Link>

          <nav className="hidden items-center gap-8 text-[16px] font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it Works
            </a>
            <a href="#pricing" className="hover:text-slate-900">
              Pricing
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="rounded-xl px-4 py-2 text-[16px] font-medium text-slate-700 transition hover:bg-slate-100"
            >
              Sign In
            </Link>

            <Link
              href="/signup"
              className="rounded-xl bg-[#3159e8] px-5 py-3 text-[16px] font-semibold text-white shadow-sm transition hover:opacity-90"
            >
              Try Free <ArrowRight className="ml-1 inline h-4 w-4" />
            </Link>
          </div>
        </div>
      </header>

      <section className="px-6 py-16 md:py-24">
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
              href="/signup"
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
            Free trial includes 3 resumes, 2 cover letters, unlimited chat interviews, and unlimited job search
          </p>
        </div>
      </section>

      <section id="features" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-14 shadow-soft md:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Everything You Need to Land Your Dream Job
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Powerful AI tools designed for modern job seekers
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-50">
                    <Icon className="h-6 w-6 text-brand-600" />
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-500">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-14 shadow-soft md:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">How It Works</h2>
            <p className="mt-4 text-lg text-slate-500">
              Three simple steps to supercharge your job search
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mb-4 text-6xl font-bold text-slate-200">01</div>
              <h3 className="text-2xl font-semibold text-slate-900">Add Job Description</h3>
              <p className="mt-3 text-base leading-7 text-slate-500">
                Paste, upload, or enter a job URL from any platform.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-6xl font-bold text-slate-200">02</div>
              <h3 className="text-2xl font-semibold text-slate-900">AI Analyzes</h3>
              <p className="mt-3 text-base leading-7 text-slate-500">
                We extract skills, requirements, and key details instantly.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-4 text-6xl font-bold text-slate-200">03</div>
              <h3 className="text-2xl font-semibold text-slate-900">Get Your Toolkit</h3>
              <p className="mt-3 text-base leading-7 text-slate-500">
                Resume, cover letter, and interview prep ready in seconds.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="px-6 pb-20">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-14 shadow-soft md:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-lg text-slate-500">
              Start free, upgrade when you need more
            </p>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-4">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xl font-semibold text-slate-900">Free</div>
              <div className="mt-2 text-sm text-slate-500">Get started</div>
              <div className="mt-5 text-4xl font-extrabold text-slate-900">Free</div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ 3 Resume generations</li>
                <li>✓ 2 Cover letters</li>
                <li>✓ Unlimited chat interviews</li>
                <li>✓ 2 Voice interviews</li>
                <li>✓ Unlimited job search</li>
              </ul>
              <Link
                href="/signup"
                className="mt-8 block rounded-2xl border border-slate-300 px-4 py-3 text-center text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
              >
                Start Free
              </Link>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="text-xl font-semibold text-slate-900">Weekly</div>
              <div className="mt-2 text-sm text-slate-500">Basic access</div>
              <div className="mt-5 text-4xl font-extrabold text-slate-900">₹7<span className="text-lg font-medium">/week</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ 10 Resumes</li>
                <li>✓ 10 Cover letters</li>
                <li>✓ 10 Voice interviews</li>
                <li>✓ Resume optimizer</li>
              </ul>
              <Link
                href="/pricing"
                className="mt-8 block rounded-2xl bg-slate-900 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Weekly
              </Link>
            </div>

            <div className="rounded-3xl bg-[#2446ad] p-6 text-white shadow-soft ring-2 ring-[#2446ad]">
              <div className="mb-3 inline-flex rounded-full bg-[#f59e0b] px-3 py-1 text-xs font-semibold text-white">
                Popular
              </div>
              <div className="text-xl font-semibold">Monthly</div>
              <div className="mt-2 text-sm text-blue-100">Advanced tools</div>
              <div className="mt-5 text-4xl font-extrabold">₹99<span className="text-lg font-medium">/mo</span></div>
              <ul className="mt-6 space-y-3 text-sm text-blue-50">
                <li>✓ 40 Resumes</li>
                <li>✓ 30 Cover letters</li>
                <li>✓ 25 Voice interviews</li>
                <li>✓ AI Career assistant</li>
                <li>✓ Job tracker</li>
              </ul>
              <Link
                href="/pricing"
                className="mt-8 block rounded-2xl bg-white px-4 py-3 text-center text-sm font-semibold text-[#2446ad] transition hover:opacity-90"
              >
                Get Monthly
              </Link>
            </div>

            <div className="rounded-3xl border-2 border-emerald-500 bg-white p-6 shadow-sm">
              <div className="mb-3 inline-flex rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
                Best Value
              </div>
              <div className="text-xl font-semibold text-slate-900">Lifetime</div>
              <div className="mt-2 text-sm text-slate-500">Everything unlimited</div>
              <div className="mt-5 text-4xl font-extrabold text-slate-900">₹299<span className="text-lg font-medium"> once</span></div>
              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li>✓ Everything unlimited</li>
                <li>✓ Full AI career counselor</li>
                <li>✓ All premium templates</li>
                <li>✓ Future features</li>
              </ul>
              <Link
                href="/pricing"
                className="mt-8 block rounded-2xl bg-emerald-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:opacity-90"
              >
                Get Lifetime
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto max-w-7xl rounded-[32px] bg-white px-6 py-14 shadow-soft md:px-10">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900">
              Loved by Job Seekers
            </h2>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="mb-4 text-lg text-amber-400">★★★★★</div>
                <p className="text-base leading-7 text-slate-600">“{item.quote}”</p>
                <div className="mt-6">
                  <div className="font-semibold text-slate-900">{item.name}</div>
                  <div className="text-sm text-slate-500">{item.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
