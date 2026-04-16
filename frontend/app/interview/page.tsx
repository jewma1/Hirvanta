"use client";

import { useState } from "react";

export default function InterviewPage() {
  const [result, setResult] = useState("");

  const generateInterview = async () => {
    const res = await fetch(
      "YOUR_BACKEND_URL/api/ai/interview",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: "Generate interview answer",
        }),
      }
    );

    const data = await res.json();
    setResult(data.text);
  };

  return (
    <div className="p-6">

      <h1 className="text-3xl font-bold mb-6">
        Interview Coach
      </h1>

      <button
        onClick={generateInterview}
        className="bg-blue-600 text-white p-4 rounded-lg mb-6"
      >
        Generate Interview Answer
      </button>

      <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
        {result || "AI interview answer will appear here"}
      </div>

    </div>
  );
}
