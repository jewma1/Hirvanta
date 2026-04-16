"use client";

import { useState } from "react";

export default function ResumePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [skills, setSkills] = useState("");
  const [experience, setExperience] = useState("");

  return (
    <div className="min-h-screen bg-gray-50 p-8">

      <h1 className="text-3xl font-bold mb-6">
        AI Resume Builder
      </h1>

      <div className="grid grid-cols-2 gap-8">

        {/* Form */}
        <div className="bg-white p-6 rounded-xl shadow">
          <input
            className="border p-3 w-full mb-3"
            placeholder="Full Name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
          />

          <input
            className="border p-3 w-full mb-3"
            placeholder="Target Role"
            value={role}
            onChange={(e)=>setRole(e.target.value)}
          />

          <textarea
            className="border p-3 w-full mb-3"
            placeholder="Skills"
            value={skills}
            onChange={(e)=>setSkills(e.target.value)}
          />

          <textarea
            className="border p-3 w-full mb-3"
            placeholder="Experience"
            value={experience}
            onChange={(e)=>setExperience(e.target.value)}
          />

          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg">
            Generate Resume
          </button>
        </div>

        {/* Preview */}
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-xl font-bold">{name}</h2>
          <p className="text-gray-600">{role}</p>

          <h3 className="font-semibold mt-4">Skills</h3>
          <p>{skills}</p>

          <h3 className="font-semibold mt-4">Experience</h3>
          <p>{experience}</p>
        </div>

      </div>

    </div>
  );
}
