"use client";

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <div className="flex justify-between items-center px-10 py-4 border-b">
        <h1 className="text-xl font-bold">Hirvanta</h1>

        <div className="flex gap-6 text-gray-600">
          <span>Features</span>
          <span>How it Works</span>
          <span>Pricing</span>
        </div>

        <div className="flex gap-4 items-center">
          <Link href="/login" className="text-gray-700">
            Sign In
          </Link>

          <Link
            href="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Try Free →
          </Link>
        </div>
      </div>

      {/* Hero */}
      <div className="text-center mt-20 px-4">
        <p className="text-sm bg-gray-100 inline-block px-3 py-1 rounded-full">
          ⚡ AI-Powered Career Assistant
        </p>

        <h1 className="text-5xl font-bold mt-6">
          Your AI Career Copilot
        </h1>

        <h2 className="text-4xl font-bold text-blue-600 mt-2">
          From Resume to Offer Letter
        </h2>

        <p className="text-gray-600 mt-6 max-w-2xl mx-auto">
          Stop spending hours on applications. Hirvanta uses AI to build resumes,
          write cover letters, prepare for interviews, and find jobs — all from a
          single job description.
        </p>

        <div className="flex justify-center gap-4 mt-8">
          <Link
            href="/login"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
          >
            Try Free — No Credit Card →
          </Link>

          <button className="border px-6 py-3 rounded-lg">
            Paste LinkedIn Job
          </button>
        </div>

        <p className="text-sm text-gray-400 mt-4">
          Free trial includes 2 resumes, 1 interview, and unlimited job search
        </p>
      </div>
    </div>
  );
}
