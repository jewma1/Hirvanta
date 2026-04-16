"use client";

import { useState } from "react";

export default function ResumePage() {
  const [result, setResult] = useState("");

  const generateResume = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/resume",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Generate professional resume",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  const generateFromJD = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/job-match",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Resume from job description",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  const improveResume = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/resume-improve",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Improve resume",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Resume Builder
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">

        <button
          onClick={generateResume}
          className="bg-blue-600 text-white p-4 rounded-lg"
        >
          Auto Resume
        </button>

        <button
          onClick={generateFromJD}
          className="bg-green-600 text-white p-4 rounded-lg"
        >
          From Job Description
        </button>

        <button
          onClick={improveResume}
          className="bg-purple-600 text-white p-4 rounded-lg"
        >
          Improve Resume
        </button>

      </div>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI result will appear here"}
      </div>

    </div>
  );
}
