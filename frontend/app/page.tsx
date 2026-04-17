export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#f5f7fc]">
      <section className="px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl text-center">

          {/* Badge */}
          <div className="mb-8 inline-flex items-center rounded-full bg-[#e9edf5] px-5 py-3 text-[15px] font-medium text-[#2546A8]">
            <span className="mr-2">⚡</span>
            AI-Powered Career Assistant
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-5xl text-5xl font-extrabold leading-tight tracking-tight text-[#10172f] md:text-7xl">
            Your AI Career Copilot
            <br />
            <span className="text-[#5648e7]">
              From Resume to Offer Letter
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-8 max-w-4xl text-xl leading-10 text-slate-600">
            Stop spending hours on applications. Hirvanta uses AI to build resumes,
            write cover letters, prepare for interviews, and find jobs — all from a
            single job description.
          </p>

          {/* ✅ BUTTONS (UPDATED EXACTLY AS YOU MARKED) */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">

            {/* LEFT BUTTON */}
            <button className="inline-flex min-w-[280px] items-center justify-center rounded-2xl bg-[#2546A8] px-8 py-5 text-xl font-semibold text-white shadow-sm transition hover:opacity-90">
              Start Your Free Trial
              <span className="ml-4 text-2xl">→</span>
            </button>

            {/* RIGHT BUTTON */}
            <button className="inline-flex min-w-[280px] items-center justify-center rounded-2xl border border-slate-300 bg-white px-8 py-5 text-xl font-medium text-[#10172f] shadow-sm transition hover:bg-slate-50">
              Upload LinkedIn Job Description
            </button>

          </div>

          {/* ✅ SMALL TEXT (UPDATED) */}
          <p className="mt-5 text-lg text-slate-500">
            Free trial includes 3 resumes only
          </p>

        </div>
      </section>
    </main>
  )
}
