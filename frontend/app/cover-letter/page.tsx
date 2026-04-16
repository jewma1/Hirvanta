"use client";

import { useState } from "react";

export default function CoverLetterPage() {
  const [job, setJob] = useState("");
  const [company, setCompany] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        AI Cover Letter Generator
      </h1>

      <div className="grid grid-cols-2 gap-8">

        <div className="bg-white p-6 rounded-xl shadow">
          <input
            className="border p-3 w-full mb-3"
            placeholder="Job Role"
            value={job}
            onChange={(e)=>setJob(e.target.value)}
          />

          <input
            className="border p-3 w-full mb-3"
            placeholder="Company"
            value={company}
            onChange={(e)=>setCompany(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded">
            Generate Cover Letter
          </button>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <p>
            Dear Hiring Manager,
            <br/><br/>
            I am excited to apply for {job} at {company}.
          </p>
        </div>

      </div>

    </div>
  );
}
