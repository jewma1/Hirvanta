"use client";

import { useState } from "react";

export default function JobsPage() {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Smart Job Finder
      </h1>

      {/* Search Box */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <input
          className="border p-3 w-full mb-3"
          placeholder="Job title (Software Engineer)"
          value={query}
          onChange={(e)=>setQuery(e.target.value)}
        />

        <input
          className="border p-3 w-full mb-3"
          placeholder="Location"
          value={location}
          onChange={(e)=>setLocation(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
          Search Jobs
        </button>
      </div>

      {/* Results */}
      <div className="grid grid-cols-2 gap-6">

        <JobCard
          title="Frontend Developer"
          company="Google"
          location="Remote"
        />

        <JobCard
          title="Backend Engineer"
          company="Microsoft"
          location="Bangalore"
        />

        <JobCard
          title="Full Stack Developer"
          company="Amazon"
          location="Hyderabad"
        />

      </div>

    </div>
  );
}

function JobCard({ title, company, location }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow">
      <h3 className="font-semibold text-lg">{title}</h3>
      <p className="text-gray-600">{company}</p>
      <p className="text-gray-500">{location}</p>

      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded">
        Apply
      </button>
    </div>
  );
}
