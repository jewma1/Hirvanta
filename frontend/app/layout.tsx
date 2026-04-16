"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      
      {/* Navbar */}
      <header className="flex justify-between items-center px-8 py-4 border-b">
        <h1 className="text-xl font-bold text-blue-600">Hirvanta</h1>

        <nav className="flex gap-6 items-center">
          <Link href="/features">Features</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/login">Sign In</Link>

          <Link
            href="/signup"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Try Free
          </Link>
        </nav>
      </header>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <h2 className="text-4xl font-bold mb-4">
          Everything You Need to Land Your Dream Job
        </h2>
        <p className="text-gray-600 mb-8">
          Powerful AI tools designed for modern job seekers
        </p>
      </section>

      {/* Features Grid */}
      <section className="grid grid-cols-3 gap-6 px-10 pb-20">
        
        <FeatureCard
          title="AI Resume Builder"
          desc="Generate ATS optimized resumes"
          link="/resume"
        />

        <FeatureCard
          title="Smart Job Finder"
          desc="Find matching jobs instantly"
          link="/jobs"
        />

        <FeatureCard
          title="Interview Coach"
          desc="Practice interviews with AI"
          link="/interview"
        />

        <FeatureCard
          title="Cover Letters"
          desc="Generate personalized cover letters"
          link="/career-coach"
        />

        <FeatureCard
          title="Job Tracker"
          desc="Track applications easily"
          link="/dashboard"
        />

        <FeatureCard
          title="Recruiter Messages"
          desc="Generate recruiter outreach"
          link="/career-coach"
        />
      </section>

    </main>
  );
}

function FeatureCard({ title, desc, link }) {
  return (
    <Link href={link}>
      <div className="border p-6 rounded-xl hover:shadow-lg cursor-pointer">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}
