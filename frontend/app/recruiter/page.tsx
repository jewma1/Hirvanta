"use client";

import { useState } from "react";

export default function RecruiterPage() {
  const [role, setRole] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        Recruiter Message Generator
      </h1>

      <div className="bg-white p-6 rounded-xl shadow">

        <input
          className="border p-3 w-full mb-3"
          placeholder="Target Role"
          value={role}
          onChange={(e)=>setRole(e.target.value)}
        />

        <button className="bg-blue-600 text-white px-6 py-3 rounded mb-4">
          Generate Message
        </button>

        <div className="border p-4 rounded">
          Hi Recruiter, I’m interested in {role} opportunities.
        </div>

      </div>

    </div>
  );
}
