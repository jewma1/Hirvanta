"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-3 gap-6">

        <DashboardCard
          title="Resume Builder"
          desc="Create and manage resumes"
          link="/resume"
        />

        <DashboardCard
          title="Job Finder"
          desc="Search for matching jobs"
          link="/jobs"
        />

        <DashboardCard
          title="Interview Coach"
          desc="Practice AI interviews"
          link="/interview"
        />

        <DashboardCard
          title="Career Assistant"
          desc="AI career guidance"
          link="/career-coach"
        />

        <DashboardCard
          title="Recruiter Messages"
          desc="Generate recruiter outreach"
          link="/career-coach"
        />

        <DashboardCard
          title="Job Tracker"
          desc="Track applications"
          link="/dashboard"
        />

      </div>

    </div>
  );
}

function DashboardCard({ title, desc, link }) {
  return (
    <Link href={link}>
      <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg cursor-pointer">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </Link>
  );
}
