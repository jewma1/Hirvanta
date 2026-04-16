"use client";

import { useState } from "react";

export default function RecruiterPage() {
  const [result, setResult] = useState("");

  const generateRecruiter = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/recruiter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Generate recruiter outreach message",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Recruiter Message Generator
      </h1>

      <button
        onClick={generateRecruiter}
        className="bg-blue-600 text-white p-4 rounded-lg mb-6"
      >
        Generate Recruiter Message
      </button>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI recruiter message will appear here"}
      </div>

    </div>
  );
}
