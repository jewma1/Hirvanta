"use client";

import { useState } from "react";

export default function CoverLetterPage() {
  const [result, setResult] = useState("");

  const generateCoverLetter = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/cover-letter",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Generate professional cover letter",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Cover Letter Generator
      </h1>

      <button
        onClick={generateCoverLetter}
        className="bg-blue-600 text-white p-4 rounded-lg mb-6"
      >
        Generate Cover Letter
      </button>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI cover letter will appear here"}
      </div>

    </div>
  );
}
